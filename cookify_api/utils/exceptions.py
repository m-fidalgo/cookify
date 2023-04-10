from django.utils.translation import gettext_lazy as _
from rest_framework.exceptions import APIException

class EmailRequiredException(APIException):
  default_code = 'email_required'
  default_detail = _('The email is required')

class SuperuserTrueException(APIException):
  default_code = 'superuser_true'
  default_detail = _("Superuser must have is_superuser flag set to True")