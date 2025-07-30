#!/bin/bash

set -e  # Exit on any error

cd /home/ubuntu/backend

# Set environment variables
export PORT=3000
export PATH="$HOME/.npm-global/bin:$PATH"

# Start backend server with PM2
echo "Starting backend with PM2..."
pm2 start npm --name backend -- start --update-env

# Save process list (to restore later on reboot if needed)
pm2 save || true  # Prevent error if pm2 save fails

exit 0  # Ensure script exits cleanly
