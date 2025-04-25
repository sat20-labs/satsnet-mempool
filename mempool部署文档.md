# Satsnet mempool deployment

## 1.1 Install Environment

### Install Rust
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Install Node.js
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 20.15.0
nvm use 20.15.0
```

### Install MariaDB
```bash
# sudo apt update
sudo apt install mariadb-server -y
sudo systemctl start mariadb
sudo systemctl enable mariadb
# edit user and password for mariadb
```

## 1.2 satsnet-romanz-electrs (need supervisor)
```bash
git clone git@github.com:sat20-labs/satsnet-romanz-electrs.git 
cd satsnet-romanz-electrs && git checkout satsnet
cargo fetch
cargo build --release
# vi config.toml: important params: daemon_rpc_addr, daemon_p2p_addr, network(satstestnet/satsnet), auth
./target/release/electrs --conf ./config.toml
```

## 1.3 satsnet-mempool-electrs (need supervisor)
```bash
git clone git@github.com:sat20-labs/satsnet-electrs.git satsnet-mempool-electrs
cd satsnet-mempool-electrs && git checkout satsnet
cargo fetch
cargo build --release
# important params: --cookie, --daemon-rpc-host, --network(satstestnet/satsnet), --http-addr
/target/release/electrs -vvvv --cookie q17AIoqBJSEhW7djqjn0nTsZcz4=:nnlkAZn58bqsyYwVtHIajZ16cj8= --db-dir ./db --daemon-rpc-host "192.168.10.102:19527" --monitoring-addr 127.0.0.1:44224 --electrum-rpc-addr 127.0.0.1:60501 --network satstestnet --utxos-limit 5000 --electrum-txs-limit 5000 --address-search --index-unspendables --cors "*" --http-addr "0.0.0.0:3001" --jsonrpc-import
```

## 1.4 satsnet-mempool backend
```bash
git clone git@github.com:sat20-labs/satsnet-mempool.git
cd satsnet-mempool/backend && git checkout satsnet
npm install
# vi ./mempool-config.json: important params: 
    # MEMPOOL.NETWORK(satstestnet/satsnet), MEMPOOL.HTTP_PORT
    # satsnetnode: CORE_RPC.HOST, CORE_RPC.PORT, CORE_RPC.USERNAME, CORE_RPC.PASSWORD
    # satsnet-romanz-electrs: ELECTRUM.HOST, ELECTRUM.PORT 
    # satsnet-mempool-electrs: ESPLORA.REST_API_URL
    # mysql: DATABASE.ENABLE, DATABASE.HOST, DATABASE.PORT, DATABASE.USERNAME, DATABASE.PASSWORD
npm run dev
```

## 1.5 satsnet-mempool frontend
```bash
cd satsnet-mempool/frontend && git checkout satsnet
npm install
# vi ./mempool-frontend-config.json
npm run serve
```

## 1.6 mole
```bash
# satsnet-mempool frontend
mole start remote --verbose --source 103.103.245.177:4201 --destination 127.0.0.1:4200 --server root@103.103.245.177 --key /root/.ssh/id_ed25519 -R 0
```

## 1.7 supervisor(option)
```bash
# user: tinyverse password: tinyverse
# config: /etc/supervisor/conf.d/ordx.ini
# supervisorctl update
# supervisorctl reread
# supervisorctl stop satsnet-romanz-electrs
# supervisorctl start satsnet-romanz-electrs
# supervisorctl stop satsnet-mempool-electrs
# supervisorctl start satsnet-mempool-electrs
```
