# from rest_framework import pagination
from rest_framework.pagination import PageNumberPagination 

class SmallPageNumberPagination(PageNumberPagination):
    page_size = 1
    page_query_param = 'small_sayfa'

class LargePageNumberPagination(PageNumberPagination):
    page_size = 2
    page_query_param = 'large_sayfa'