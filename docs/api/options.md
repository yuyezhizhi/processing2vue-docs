# ConversionOptions

转换配置选项接口。

## 类型定义

```typescript
interface ConversionOptions {
  useP5?: boolean           // 使用 p5.js，默认 true
  compositionApi?: boolean // 使用 Composition API，默认 true
  scoped?: boolean         // 使用 scoped 样式，默认 true
  width?: number           // 画布宽度，默认 400
  height?: number          // 画布高度，默认 400
  canvasId?: string         // 画布 ID，默认 'processing-canvas'
  p5Instance?: string       // p5 实例变量名，默认 'sketchInstance'
}
```

## 选项说明

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `useP5` | boolean | `true` | 是否使用 p5.js 模式 |
| `compositionApi` | boolean | `true` | 是否使用 Composition API |
| `scoped` | boolean | `true` | 是否添加 scoped 样式 |
| `width` | number | `400` | 画布宽度 |
| `height` | number | `400` | 画布高度 |
| `canvasId` | string | `'processing-canvas'` | 画布容器 ID |
| `p5Instance` | string | `'sketchInstance'` | p5 实例变量名 |

## 使用示例

```javascript
import { convert } from 'processing2vue'

const vueCode = convert(processingCode, {
  width: 800,
  height: 600,
  scoped: false,
  useP5: true
})
```

## 相关链接

- [convert()](./convert)
