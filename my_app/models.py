from django.db import models

class Book(models.Model):
    GENRE_CHOICES = [
        ("ficcion", "Ficción"),
        ("no_ficcion", "No Ficción"),
        ("fantasia", "Fantasía"),
        ("ciencia_ficcion", "Ciencia Ficción"),
        ("misterio", "Misterio"),
        ("biografia", "Biografía"),
        ("poesia", "Poesía"),
        ("romance", "Romance"),
        ("terror", "Terror"),
        ("otro", "Otro"),
    ]

    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    publication_year = models.IntegerField()
    genre = models.CharField(max_length=50, choices=GENRE_CHOICES, default="otro")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.get_genre_display()})"
