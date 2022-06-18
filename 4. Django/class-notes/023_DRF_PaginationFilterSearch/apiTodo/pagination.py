# from rest_framework import pagination
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination, CursorPagination

class SmallPageNumberPagination(PageNumberPagination):
    page_size = 1
    page_query_param = 'small_sayfa'

class LargePageNumberPagination(PageNumberPagination):
    page_size = 2
    page_query_param = 'large_sayfa'

class SmallLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 1
    limit_query_param = 'small_limit'
    offset_query_param = 'small_offset'

class MyCursorPagination(CursorPagination):
    cursor_query_param = 'cursor'
    page_size = 2
    ordering = 'createdDate'