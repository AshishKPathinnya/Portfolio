#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

if __name__ == "__main__":
    PORT = 5000
    Handler = CustomHTTPRequestHandler
    
    # Change to the directory containing the HTML files
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Try to bind to port 5000, if it fails, find another port
    while True:
        try:
            socketserver.TCPServer.allow_reuse_address = True
            with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
                print(f"Serving Vinod Jangid Portfolio at http://0.0.0.0:{PORT}")
                httpd.serve_forever()
        except OSError as e:
            if e.errno == 98:  # Address already in use
                PORT += 1
                if PORT > 5010:  # Try max 10 ports
                    print("Unable to find available port")
                    sys.exit(1)
                continue
            else:
                raise
        except KeyboardInterrupt:
            print("\nShutting down server...")
            break