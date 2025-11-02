import eventlet
eventlet.monkey_patch()  # ⚡ Must be first

from app import app, socketio  # Import after monkey_patch

# Gunicorn will look for 'application'
application = app  # Optional, sometimes used
