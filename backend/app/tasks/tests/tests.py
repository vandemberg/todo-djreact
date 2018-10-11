from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from tasks.models import Task

class TaskTests(APITestCase):
    def test_create_Task(self):
        """
        Ensure we can create a new Task object.
        """
        url = '/api/tasks'
        data = {'title': 'DabApps'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Task.objects.count(), 1)
        self.assertEqual(Task.objects.get().title, 'DabApps')