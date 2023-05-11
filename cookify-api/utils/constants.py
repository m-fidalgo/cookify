from enum import Enum


class Cloudinary(Enum):
    CLOUDINARY_URL = "https://res.cloudinary.com"


class Actions(Enum):
    GET_ACTION = "retrieve"
    LIST_ACTION = "list"


class Fields(Enum):
    MAX_CHAR_FIELD_LENGTH = 150


class SortDirections(Enum):
    ASC = "ASC"
    DESC = "DESC"
