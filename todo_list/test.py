from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from todo_list.models import TODOList

class ApiTODOListTests(APITestCase):

    def test_create_todo_list(self):

        new_count = TODOList.objects.count() + 1
        url = '/api/todo-list'
        data = {'title': 'My title'}
        
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(TODOList.objects.count(), new_count)
        self.assertEqual(TODOList.objects.get().title, 'My title')
    
    def test_update_todo_list(self):
        todo_list = TODOList.objects.create(title='new title')
        url = '/api/todo-list/' + str(todo_list.id) + '/'
        data = {'title': 'Old title'}
        
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(TODOList.objects.find(todo_list.id).title, data['title'])

    def test_list_todo_list(self):
        url = '/api/todo-list'
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_get_todo_list(self):
        todo_list = TODOList.objects.create(title='stranger title')
        url = '/api/todo-list/' + str(todo_list.id) + '/'
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_todo_list(self):
        todo_list = TODOList.objects.create(title='title to delete')
        url = '/api/todo-list/' + str(todo_list.id) + '/'
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

