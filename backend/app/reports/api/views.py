from reports.models import Report
from .serializers import ReportSerializer

from rest_framework import viewsets

class ReportViewSet(viewsets.ModelViewSet):
    serializer_class = ReportSerializer
    queryset = Report.objects.all()