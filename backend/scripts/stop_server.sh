#!/bin/bash

export PATH="$HOME/.npm-global/bin:$PATH"
npm config set prefix '~/.npm-global'

# Stop the Node.js server using PM2 (if running)
if pm2 describe backend > /dev/null; then
  pm2 stop backend || true
  pm2 delete backend || true
fi
