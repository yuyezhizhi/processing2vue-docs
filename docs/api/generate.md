# generate()

从解析后的 AST 生成 Vue 组件代码。

## 函数签名

```typescript
function generate(parsed: ParsedCode, options?: ConversionOptions): string
```

## 参数

### parsed

- **类型**: `ParsedCode`
- **必填**: 是
- **说明**: `parse()` 返回的解析结果

### options

- **类型**: `ConversionOptions`
- **必填**: 否
- **说明**: 转换配置选项

## 返回值

- **类型**: `string`
- **说明**: Vue 3 组件代码

## 示例

```javascript
import { parse, generate } from 'processing2vue'

const code = `
void setup() {
  size(400, 400);
}

void draw() {
  background(0);
  circle(mouseX, mouseY, 50);
}
`

const parsed = parse(code)
const vueCode = generate(parsed, {
  width: 800,
  height: 600
})

console.log(vueCode)
```

## 相关链接

- [convert()](./convert) - 一键转换
- [parse()](./parse) - 解析代码
