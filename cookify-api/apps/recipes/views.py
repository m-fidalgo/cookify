from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from utils.constants import Actions, SortDirections

from .models import Recipe
from .serializers import RecipeSerializer


class RecipeViewSet(ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def get_permissions(self):
        if (
            self.action == Actions.LIST_ACTION.value
            or self.action == Actions.GET_ACTION.value
        ):
            return [permissions.AllowAny()]

        return super().get_permissions()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        params = request.query_params
        sort_direction = params.get("sort_direction") or SortDirections.ASC.value
        sort_by = params.get("sort_by") or "title"
        category_ids = params.get("category_ids")

        if params.get("sort_by") == "recommended":
            queryset = Recipe.filter_by_recommended(queryset)
        else:
            if sort_direction.upper() == SortDirections.DESC.value:
                sort_by = "-" + sort_by
            queryset = queryset.order_by(sort_by)

        if category_ids is not None:
            queryset = Recipe.filter_by_categories(
                queryset=queryset, category_ids=category_ids.split(",")
            )

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return serializer.data
