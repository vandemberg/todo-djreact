from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from tasks.models import Task

class ApiTaskTests(APITestCase):

    def test_create_task(self):

        new_count = Task.objects.count() + 1
        url = '/api/tasks'
        data = {'title': 'My title'}
        
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Task.objects.count(), new_count)
        self.assertEqual(Task.objects.get().title, 'My title')
    
    def test_update_task(self):
        task = Task.objects.create(title='new title')
        url = '/api/tasks/' + str(task.id) + '/'
        data = {'title': 'Old title'}
        
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Task.objects.find(task.id).title, data['title'])

    def test_list_task(self):
        url = '/api/tasks'
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_get_task(self):
        task = Task.objects.create(title='stranger title')
        url = '/api/tasks/' + str(task.id) + '/'
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_task(self):
        task = Task.objects.create(title='title to delete')
        url = '/api/tasks/' + str(task.id) + '/'
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

