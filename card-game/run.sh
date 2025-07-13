#!/bin/bash
# Start the card game development server in the background
nohup npm run dev > dev-server.log 2>&1 &
PID=$!
echo "Card game server starting at http://localhost:5173/"
echo "Server PID: $PID"
echo "Log file: dev-server.log"
echo $PID > .dev-server.pid