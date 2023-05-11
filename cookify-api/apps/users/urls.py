from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import UserRegisterView, UserTokenPairView

urlpatterns = [
    path("sign-up", UserRegisterView.as_view()),
    path("login", UserTokenPairView.as_view()),
    path("login/refresh", TokenRefreshView.as_view()),
]
