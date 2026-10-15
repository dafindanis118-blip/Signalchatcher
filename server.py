#!/usr/bin/env python3
"""Server lokal sederhana untuk demo WiFi Killer Simulator.
Hanya menyajikan data contoh; tidak memindai atau menyerang jaringan."""
from http.server import SimpleHTTPRequestHandler, HTTPServer
import json, random

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/api/status":
            payload = {
                "mode": "SIMULATION",
                "ssid": "Demo_Network",
                "signal_dbm": random.randint(-75, -35),
                "latency_ms": random.randint(12, 70),
                "clients": random.randint(1, 8),
                "note": "Data contoh, bukan hasil pemindaian jaringan."
            }
            body = json.dumps(payload).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        return super().do_GET()

if __name__ == "__main__":
    print("WiFi Killer Simulator: http://127.0.0.1:8000")
    print("Tekan Ctrl+C untuk berhenti.")
    HTTPServer(("127.0.0.1", 8000), Handler).serve_forever()
