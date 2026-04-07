# convert()

将 Processing 代码转换为 Vue 组件。

## 函数签名

```typescript
function convert(
  processingCode: string,
  options?: ConversionOptions
): string
```

## 参数

### processingCode

- **类型**: `string`
- **必填**: 是
- **说明**: Processing 源代码

### options

- **类型**: `ConversionOptions`
- **必填**: 否
- **说明**: 转换配置选项

```typescript
interface ConversionOptions {
  useP5?: boolean              // 使用 p5.js，默认 true
  compositionApi?: boolean     // 使用 Composition API，默认 true
  scoped?: boolean            // 使用 scoped 样式，默认 true
  width?: number              // 画布宽度，默认 400
  height?: number             // 画布高度，默认 400
  canvasId?: string           // 画布 ID，默认 'processing-canvas'
  p5Instance?: string         // p5 实例变量名，默认 'sketchInstance'
}
```

## 返回值

- **类型**: `string`
- **说明**: Vue 3 组件代码字符串

## 示例

### 基本用法

```javascript
import { convert } from 'processing2vue'

const processingCode = `
void setup() {
  size(400, 400);
}

void draw() {
  background(0);
  circle(mouseX, mouseY, 50);
}
`

const vueCode = convert(processingCode)
console.log(vueCode)
```

### 使用自定义配置

```javascript
const vueCode = convert(processingCode, {
  width: 800,
  height: 600,
  scoped: false,
  compositionApi: true,
})
```

### 不使用 p5.js

```javascript
const vueCode = convert(processingCode, {
  useP5: false,
})
```

## 注意事项

1. **代码有效性**: 确保 Processing 代码语法正确
2. **函数名**: 只支持标准的 Processing 函数名
3. **变量类型**: 支持 int, float, boolean, String, color 等基本类型
4. **全局变量**: 会自动提取并保留在生成的 Vue 组件中

## 相关链接

- [parse()](/api/parse) - 解析 Processing 代码
- [generate()](/api/generate) - 从 AST 生成 Vue 组件
- [ConversionOptions](/api/options) - 配置选项详情
