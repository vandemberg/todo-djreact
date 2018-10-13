from todo_list.api.views import TODOListViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TODOListViewSet, base_name='todo_list')
urlpatterns = router.urls
