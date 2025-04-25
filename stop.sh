#!/bin/bash
echo "🛑 终止 mempool 前后端进程..."
pkill -f "node dist/index.js"
pkill -f "node server.run.js"
echo "✅ 已终止"
