from apps.users.models import User
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from utils.constants import Actions, SortDirections

from .models import Recipe
from .serializers import RecipeSerializer


class RecipeViewSet(ModelViewSet):
    permission_classes = (AllowAny,)
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        params = request.query_params
        sort_direction = params.get("sort_direction") or SortDirections.ASC.value
        sort_by = params.get("sort_by") or "-created_at"
        category_ids = params.get("category_ids")
        creator_id = params.get("creator_id")
        user_id = params.get("user_id")
        only_liked = params.get("liked")
        filter_string = params.get("filter")

        if params.get("sort_by") == "popular":
            queryset = Recipe.order_by_popular(queryset)
        else:
            if sort_direction.upper() == SortDirections.DESC.value:
                sort_by = "-" + sort_by
            queryset = queryset.order_by(sort_by)

        if category_ids is not None:
            queryset = Recipe.filter_by_categories(
                queryset=queryset, category_ids=category_ids.split(",")
            )

        if creator_id is not None:
            queryset = Recipe.filter_by_creator(
                queryset=queryset, creator_id=creator_id
            )

        if user_id is not None:
            user = User.objects.get(pk=user_id)
            if user is not None:
                queryset = Recipe.check_is_liked_by_user(queryset=queryset, user=user)

                if only_liked == "true":
                    queryset = Recipe.filter_by_liked(queryset=queryset, liked=True)
                elif only_liked == "false":
                    queryset = Recipe.filter_by_liked(queryset=queryset, liked=False)

        if filter_string is not None:
            queryset = Recipe.filter_by_title(queryset=queryset, filter=filter_string)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return serializer.data

    def retrieve(self, request, pk):
        queryset = self.get_queryset()
        params = request.query_params
        user_id = params.get("user_id")

        if user_id is not None:
            user = User.objects.get(pk=user_id)
            if user is not None:
                queryset = Recipe.check_is_liked_by_user(queryset=queryset, user=user)

        recipe = get_object_or_404(queryset, pk=pk)
        serializer = self.get_serializer(recipe)
        return Response(serializer.data)

    @action(detail=True, methods=["post"])
    def save(self, request, *args, **kwargs):
        recipe = self.get_object()
        params = request.query_params
        user_id = params.get("user_id")
        if user_id is not None:
            user = User.objects.get(pk=user_id)
            if user is not None:
                user.saved_recipes.add(recipe)
                return Response(data="Success")

    @action(detail=True, methods=["post"])
    def remove(self, request, *args, **kwargs):
        recipe = self.get_object()
        params = request.query_params
        user_id = params.get("user_id")
        if user_id is not None:
            user = User.objects.get(pk=user_id)
            if user is not None:
                user.saved_recipes.remove(recipe)
                return Response(data="Success")
