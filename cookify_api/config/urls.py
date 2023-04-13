from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from apps.categories.urls import category_router
from apps.recipes.urls import recipe_router

router = routers.DefaultRouter()
router.registry.extend(category_router.registry)
router.registry.extend(recipe_router.registry)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("apps.users.urls")),
    path("", include(router.urls)),
]
