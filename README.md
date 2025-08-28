# 📚 BOOKSHOP SENATINOS

Sistema de gestión de librería full-stack desarrollado con React (Frontend) y Django (Backend), ofreciendo una experiencia moderna y completa para la administración y venta de libros.

## 🌟 Características Principales

### Para Clientes
- 🔍 **Búsqueda avanzada** - Encuentra libros por título, autor, género o ISBN
- 🛒 **Carrito de compras** - Gestión intuitiva de productos seleccionados
- 👤 **Perfil de usuario** - Historial de compras y configuración personal
- ⭐ **Sistema de reseñas** - Califica y comenta libros
- ❤️ **Lista de deseos** - Guarda libros favoritos para comprar después
- 📱 **Interfaz responsive** - Experiencia optimizada en todos los dispositivos

### Para Administradores
- 📊 **Panel de administración** - Dashboard completo con métricas
- 📚 **Gestión de inventario** - CRUD completo de libros y categorías
- 👥 **Administración de usuarios** - Control de cuentas y permisos
- 📈 **Reportes y estadísticas** - Análisis de ventas y tendencias
- 💰 **Sistema de descuentos** - Gestión de promociones y ofertas
- 🔐 **Autenticación segura** - JWT tokens y permisos por roles

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - Biblioteca para interfaces de usuario
- **JavaScript/JSX** - Lenguaje de programación principal
- **CSS3** - Estilos y responsive design
- **Fetch API** - Comunicación con el backend

### Backend
- **Django 4.x** - Framework web de Python
- **Django REST Framework** - API REST robusta
- **SQLite** - Base de datos (desarrollo)
- **Python 3.x** - Lenguaje de programación del backend

### DevOps & Tools
- **GitHub Actions** - CI/CD automatizado
- **Git** - Control de versiones
- **npm** - Gestión de paquetes frontend
- **pip** - Gestión de paquetes Python

## 📋 Prerequisitos

Asegúrate de tener instalado:

- **Node.js** (v16 o superior)
- **npm** (v8 o superior)
- **Python** (v3.8 o superior)
- **pip** (gestor de paquetes Python)
- **Git**

## 🚀 Instalación y Configuración

### 1. Clona el repositorio
```bash
git clone https://github.com/joelPalaciosLaricano/BOOKSHOP-SENATINOS.git
cd BOOKSHOP-SENATINOS
```

### 2. Configuración del Backend (Django)

```bash
# Crear y activar entorno virtual
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Realizar migraciones
python manage.py makemigrations
python manage.py migrate

# Crear superusuario (opcional)
python manage.py createsuperuser

# Ejecutar servidor de desarrollo
python manage.py runserver
```

El backend estará disponible en: `http://localhost:8000`

### 3. Configuración del Frontend (React)

```bash
# Navegar al directorio del frontend
cd libreria

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm start
```

El frontend estará disponible en: `http://localhost:3000`

## 📁 Estructura del Proyecto

```
BOOKSHOP-SENATINOS/
├── 📁 libreria/                 # React Frontend
│   ├── 📁 public/              # Archivos públicos
│   ├── 📁 src/                 # Código fuente React
│   │   ├── 📁 components/      # Componentes reutilizables
│   │   │   └── api.js         # Configuración API
│   │   ├── App.js             # Componente principal
│   │   ├── App.css            # Estilos principales
│   │   ├── App.jsx            # Componente principal JSX
│   │   └── index.js           # Punto de entrada
│   ├── package.json           # Dependencias frontend
│   └── package-lock.json      # Lock de dependencias
│
├── 📁 my_app/                  # Django App
│   ├── 📁 migrations/         # Migraciones de BD
│   ├── admin.py               # Configuración admin
│   ├── models.py              # Modelos de datos
│   ├── serializers.py         # Serializadores DRF
│   ├── views.py               # Vistas/Controladores
│   └── urls.py                # URLs de la app
│
├── 📁 my_project/             # Configuración Django
│   ├── settings.py            # Configuración principal
│   ├── urls.py                # URLs principales
│   └── wsgi.py                # Servidor WSGI
│
├── 📁 .github/                # GitHub Actions
│   └── 📁 workflows/          # Workflows CI/CD
│
├── 📁 venv/                   # Entorno virtual Python
├── db.sqlite3                 # Base de datos SQLite
├── manage.py                  # Comando Django
├── requirements.txt           # Dependencias Python
└── README.md                  # Este archivo
```

## 🎯 Comandos Útiles

### Backend (Django)
```bash
# Ejecutar tests
python manage.py test

# Crear migraciones
python manage.py makemigrations

# Aplicar migraciones
python manage.py migrate

# Acceder al shell de Django
python manage.py shell

# Crear superusuario
python manage.py createsuperuser
```

### Frontend (React)
```bash
# Ejecutar en modo desarrollo
npm start

# Crear build de producción
npm run build

# Ejecutar tests
npm test

# Analizar bundle
npm run eject
```

## 🔌 API Endpoints

La API REST está disponible en `http://localhost:8000/api/`

### Endpoints principales:
- `GET /api/books/` - Listar libros
- `POST /api/books/` - Crear libro
- `GET /api/books/{id}/` - Obtener libro específico
- `PUT /api/books/{id}/` - Actualizar libro
- `DELETE /api/books/{id}/` - Eliminar libro
- `POST /api/auth/login/` - Autenticación
- `POST /api/auth/register/` - Registro de usuario

## 🧪 Testing

### Backend
```bash
python manage.py test
```

### Frontend
```bash
cd libreria
npm test
```

## 🚀 Despliegue

### GitHub Actions
El proyecto incluye workflows de GitHub Actions para CI/CD automático en la carpeta `.github/workflows/`.

### Producción
Para desplegar en producción:

1. **Backend**: Configura variables de entorno en `settings.py`
2. **Frontend**: Ejecuta `npm run build` y sirve los archivos estáticos
3. **Base de datos**: Migra a PostgreSQL o MySQL para producción

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 🐛 Problemas Conocidos

- Asegúrate de que tanto el backend como el frontend estén ejecutándose
- Verifica que las URLs de la API en `components/api.js` apunten al backend correcto
- Para errores de CORS, revisa la configuración en `settings.py`

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Joel Palacios Laricano**
- GitHub: [@joelPalaciosLaricano](https://github.com/joelPalaciosLaricano)
- GitHub: [@Jaime-D-Z](https://github.com/Jaime-D-Z)
- GitHub: [@goldz9999](https://github.com/goldz9999)



## 🙏 Agradecimientos

- **React Team** - Por la increíble biblioteca de UI
- **Django Community** - Por el framework web robusto
- **Contributors** - A todos los que han contribuido al proyecto

---

## 📚 Documentación Adicional

- [Documentación de React](https://reactjs.org/docs/)
- [Documentación de Django](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)

⭐ **¡Si te gustó el proyecto, no olvides darle una estrella!** ⭐
