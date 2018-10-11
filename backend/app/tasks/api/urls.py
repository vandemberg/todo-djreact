from tasks.api.views import TaskViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TaskViewSet, base_name='tasks')
urlpatterns = router.urls
