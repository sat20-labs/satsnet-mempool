#!/bin/bash

# 设置最大内存分配
export NODE_OPTIONS="--max-old-space-size=16384"

# 路径配置（根据你实际部署的路径修改）
BACKEND_DIR="/data/github/satsnet-mempool/backend"
FRONTEND_DIR="/data/github/satsnet-mempool/frontend"

# 启动 mempool-backend
echo "➡️ 启动 mempool-backend ..."
cd "$BACKEND_DIR"

# 安装依赖（只在第一次或更新后需要）
npm install

# 构建 backend
npm run build

# 启动 backend（后台运行，可改为 pm2 等更强的进程守护工具）
nohup npm run start-production > backend.log 2>&1 &

# 启动 mempool-frontend
echo "➡️ 启动 mempool-frontend ..."
cd "$FRONTEND_DIR"

# 安装依赖
npm install

# 构建 frontend（会输出到 dist/mempool/browser）
npm run build

# 启动前端 SSR 服务（推荐使用 SSR，和官方部署保持一致）
nohup npm run serve:ssr > frontend.log 2>&1 &

# 完成提示
echo "✅ mempool 前后端已启动"
