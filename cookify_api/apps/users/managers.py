from django.contrib.auth.base_user import BaseUserManager

from utils.exceptions import EmailRequiredException, SuperuserTrueException
from utils.validations import empty_field


class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if empty_field(email):
            raise EmailRequiredException()

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_superuser") is not True:
            raise SuperuserTrueException()
        return self.create_user(email, password, **extra_fields)
