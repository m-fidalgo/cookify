from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from .views import UserRegisterView, UserTokenPairView, UserUpdateView

urlpatterns = [
    path("auth/sign-up", UserRegisterView.as_view()),
    path("users/<int:pk>", UserUpdateView.as_view()),
    path("auth/login", UserTokenPairView.as_view()),
    path("auth/login/refresh", TokenRefreshView.as_view()),
    path("auth/verify", TokenVerifyView.as_view(), name="token_verify"),
]
