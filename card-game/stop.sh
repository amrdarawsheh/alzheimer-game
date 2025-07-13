#!/bin/bash
# Stop the card game development server
if [ -f .dev-server.pid ]; then
    PID=$(cat .dev-server.pid)
    if kill -0 $PID 2>/dev/null; then
        kill $PID
        echo "Card game server stopped (PID: $PID)"
    else
        echo "Process $PID not running"
    fi
    rm .dev-server.pid
else
    echo "No PID file found. Trying to kill by port..."
    pkill -f "vite.*5173" || echo "No vite process found on port 5173"
fi