# CLI 工具

## 安装 CLI

```bash
npm install -g processing2vue
```

## 基本用法

```bash
p2v input.pde output.vue
```

## 选项

| 选项 | 说明 |
|------|------|
| `-h, --help` | 显示帮助 |
| `-v, --version` | 显示版本 |
| `-w, --width` | 设置画布宽度 |
| `-H, --height` | 设置画布高度 |
| `--batch` | 批量转换目录 |

## 示例

```bash
# 转换单个文件
p2v sketch.pde sketch.vue

# 设置画布尺寸
p2v sketch.pde -w 800 -H 600

# 批量转换
p2v ./sketches ./vue --batch
```

## 相关链接

- [快速开始](./quick-start)
