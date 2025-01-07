import os
from http.server import SimpleHTTPRequestHandler, HTTPServer

class HelloWorldHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/plain")
        self.end_headers()
        greeting = os.getenv("GREETING", "Hello, World!")
        self.wfile.write(greeting.encode())

host = "0.0.0.0"
port = 8000

with HTTPServer((host, port), HelloWorldHandler) as server:
    print(f"Starting server on {host}:{port}")
    server.serve_forever()
