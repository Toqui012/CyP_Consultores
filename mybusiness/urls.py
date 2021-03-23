from django.urls import path
from . import views

urlpatterns = [
    path('',views.myBusiness, name='nuestraEmpresa')
]