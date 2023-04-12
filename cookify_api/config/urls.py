from django.contrib import admin
from django.urls import include, path

urlpatterns = [
  path('admin/', admin.site.urls),
  path('auth/', include('apps.users.urls')),
  path('categories/', include('apps.categories.urls')),
  path('recipes/', include('apps.recipes.urls'))
]
