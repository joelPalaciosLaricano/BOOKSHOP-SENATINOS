from django.test import TestCase
from django.urls import reverse
from my_app.models import MyModel # Asegúrate de que el nombre del modelo sea correcto

# Prueba para un modelo
class MyModelTest(TestCase):

    def setUp(self):
        # Este método se ejecuta antes de cada prueba
        MyModel.objects.create(name="Test Item")

    def test_model_creation(self):
        # Prueba que el objeto se crea correctamente
        item = MyModel.objects.get(name="Test Item")
        self.assertEqual(item.name, "Test Item")

# Prueba para una vista (URL)
class MyViewTest(TestCase):

    def test_url_access(self):
        # Verifica que la URL de la página principal devuelve un estado 200 (OK)
        # Asegúrate de reemplazar 'home' con el nombre de tu URL
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)