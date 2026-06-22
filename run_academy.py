import http.server
import socketserver
import webbrowser
import threading
import time
import os
import sys

PORT = 8000
DIRECTORY = "PythonAcademy"

# Ensure the PythonAcademy directory exists
if not os.path.exists(DIRECTORY):
    os.makedirs(DIRECTORY)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # Serve from the PythonAcademy subfolder
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def is_port_in_use(port):
    import socket
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('localhost', port)) == 0

def start_server():
    # If port 8000 is busy, try increments
    global PORT
    while is_port_in_use(PORT):
        print(f"Port {PORT} is in use. Trying {PORT + 1}...")
        PORT += 1
        
    try:
        # Allow reusing address to prevent "address already in use" errors on quick restarts
        socketserver.TCPServer.allow_reuse_address = True
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"\n=======================================================")
            print(f"🚀 Python Academy server running at http://localhost:{PORT}")
            print(f"=======================================================\n")
            httpd.serve_forever()
    except Exception as e:
        print(f"Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    # Start server in a background daemon thread
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    
    # Wait a moment for server to initialize
    time.sleep(1.5)
    
    # Open the default web browser to our local server
    url = f"http://localhost:{PORT}/index.html"
    print(f"Opening Python Academy in your browser: {url}")
    webbrowser.open(url)
    
    print("\nKeep this terminal running while studying. Press Ctrl+C here to stop the server.")
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n\n👋 Stopping Python Academy server. Happy coding!")
        sys.exit(0)
