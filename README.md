# Processing2Vue 文档站点

这是 Processing2Vue 项目的官方文档站点。

## 📦 安装依赖

```bash
npm install
```

## 🚀 开发

```bash
npm run dev
```

访问 http://localhost:5173

## 🏗️ 构建

```bash
npm run build
```

构建产物在 `docs/.vitepress/dist/` 目录

## 📦 部署

### 部署到 Vercel

1. 连接 GitHub 仓库到 Vercel
2. 配置构建设置：
   - Framework Preset: VitePress
   - Build Command: `npm run build`
   - Output Directory: `docs/.vitepress/dist`
3. 部署

### 部署到 GitHub Pages

```bash
npm run build
```

然后将 `docs/.vitepress/dist/` 目录的内容推送到 `gh-pages` 分支。

## 📚 文档结构

```
docs/
├── .vitepress/
│   └── config.mts      # VitePress 配置
├── index.md            # 首页
├── guide/              # 指南文档
│   ├── quick-start.md
│   ├── installation.md
│   └── ...
├── api/                # API 文档
│   ├── convert.md
│   ├── parse.md
│   └── ...
└── examples/           # 示例代码
    ├── basic-shapes.md
    ├── animations.md
    └── ...
```

## 🤝 贡献

欢迎贡献文档！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支
3. 修改或添加文档
4. 提交 Pull Request

## 📄 许可证

Apache License 2.0
