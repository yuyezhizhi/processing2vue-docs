# 配置选项

## 选项列表

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `useP5` | boolean | `true` | 使用 p5.js |
| `compositionApi` | boolean | `true` | 使用 Composition API |
| `scoped` | boolean | `true` | 使用 scoped 样式 |
| `width` | number | `400` | 画布宽度 |
| `height` | number | `400` | 画布高度 |
| `canvasId` | string | `'processing-canvas'` | 画布 ID |
| `p5Instance` | string | `'sketchInstance'` | p5 实例名 |

## 使用示例

```javascript
const vueCode = convert(code, {
  width: 800,
  height: 600,
  scoped: false
})
```

## 相关链接

- [快速开始](./quick-start)
- [API 参考](../api/)
