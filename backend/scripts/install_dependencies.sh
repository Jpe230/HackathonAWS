cd /home/ubuntu/backend

sudo chown -R ubuntu:ubuntu /home/ubuntu/backend

sudo apt-get remove -y libnode72

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt update
sudo apt install -y nodejs

npm install

export PATH="$HOME/.npm-global/bin:$PATH"
npm config set prefix '~/.npm-global'
npm install -g pm2