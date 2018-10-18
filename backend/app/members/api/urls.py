from members.api.views import MembersViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', MembersViewSet, base_name='members')
urlpatterns = router.urls
