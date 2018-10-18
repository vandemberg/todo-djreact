from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/todo-list/', include('todo_list.api.urls')),
    path('api/tasks/', include('tasks.api.urls')),
    path('api/members/', include('members.api.urls')),
    path('api/reports/', include('reports.api.urls')),
    path('api/rest-auth/', include('rest_auth.urls')),
    path('api/registration/', include('rest_auth.registration.urls')),
    path('api/users/', include('users.api.urls')),
    path('', TemplateView.as_view(template_name='public/index.html'))
]
