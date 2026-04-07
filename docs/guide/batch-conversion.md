# 批量转换

## 使用 CLI 批量转换

```bash
p2v ./sketches ./vue-components --batch
```

## 批量转换目录结构

```
sketches/
├── sketch1.pde
├── sketch2.pde
└── sketch3.pde
```

## 输出

```
vue-components/
├── sketch1.vue
├── sketch2.vue
└── sketch3.vue
```

## 使用示例

```bash
# 转换当前目录
p2v . . --batch

# 设置输出尺寸
p2v ./input ./output --batch -w 800 -H 600
```

## 相关链接

- [CLI 工具](./cli)
