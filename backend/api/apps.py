from django.apps import AppConfig
import sys
import firebase_admin
from firebase_admin import credentials
from env import service_acc_key

class ApiConfig(AppConfig):
    # default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        if 'runserver' not in sys.argv:
            return True
        print("HEre: ", firebase_admin._apps)
        cred = credentials.Certificate(f"{service_acc_key}")
        firebase_admin.initialize_app(cred)


