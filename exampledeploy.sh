#!/bin/bash

# Build
npm run build

# Absolute path to key
KEY="/home/your-username/Documents/your-key.pem"

# Sync
rsync -avz -e "ssh -i $KEY" dist/ ubuntu@your-public-ip:/tmp

# Remote commands
ssh -i $KEY ubuntu@your-public-ip << EOF
  sudo rm -rf /var/www/html/*
  sudo cp -r /tmp/* /var/www/html/
  sudo systemctl restart nginx
EOF

echo "Deployment complete 🚀"