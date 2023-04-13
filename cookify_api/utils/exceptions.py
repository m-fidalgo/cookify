from django.utils.translation import gettext_lazy as _
from rest_framework.exceptions import APIException


class EmailRequiredException(APIException):
    default_code = "email_required"
    default_detail = _("The email is required")


class SuperuserTrueException(APIException):
    default_code = "superuser_true"
    default_detail = _("Superuser must have is_superuser flag set to True")


class IngredientNotInRecipeException(APIException):
    default_code = "wrong_ingredient"
    default_detail = _("The ingredient doesn't belong to this recipe")


class PreparationStepNotInRecipeException(APIException):
    default_code = "wrong_preparation_step"
    default_detail = _("The preparation step doesn't belong to this recipe")
