from todo_list.api.views import TODOListViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TODOListViewSet, base_name='tasks')
urlpatterns = router.urls
