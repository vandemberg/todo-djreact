from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/todo-list/', include('todo_list.api.urls')),
    path('api/tasks/', include('tasks.api.urls'))
]
