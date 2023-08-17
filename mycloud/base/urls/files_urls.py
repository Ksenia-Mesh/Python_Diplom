from django.urls import path
from ..views import files_views as views

app_name = 'base'

urlpatterns = [
     path('', views.getMyFiles, name='listfiles'),
     path('<int:pk>/', views.FileDetail, name='detailfile'),
     path('create/', views.CreateFile, name='createfile'),
     path('edit/<int:pk>/', views.EditFile, name='editfile'),
     path('delete/<int:pk>/', views.DeleteFile, name='deletelfile'),
]
