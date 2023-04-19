from django_plotly_dash.routing import application

#This routing.py code is necessary for ASGI serverwhile connecting/ showing Plotly Dash in Django. Otherwise you will end up with error saying:
#raise ImproperlyConfigured(“Cannot import ASGI_APPLICATION module %r” % path)
#django.core.exceptions.ImproperlyConfigured: Cannot import ASGI_APPLICATION module ‘django_dash.routing’