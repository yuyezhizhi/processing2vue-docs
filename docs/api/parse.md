# parse()

解析 Processing 代码，返回代码结构对象。

## 函数签名

```typescript
function parse(code: string): ParsedCode
```

## 参数

### code

- **类型**: `string`
- **必填**: 是
- **说明**: Processing 源代码

## 返回值

```typescript
interface ParsedCode {
  width: number           // 画布宽度
  height: number          // 画布高度
  globalVars: string[]   // 全局变量声明
  functions: {
    [key: string]: {
      params: string      // 函数参数
      body: string       // 函数体
    }
  }
  originalCode: string    // 原始代码
}
```

## 示例

```javascript
import { parse } from 'processing2vue'

const code = `
void setup() {
  size(400, 400);
}

void draw() {
  background(0);
}
`

const parsed = parse(code)
console.log(parsed.width)    // 400
console.log(parsed.height)   // 400
console.log(parsed.functions.setup)
console.log(parsed.functions.draw)
```

## 相关链接

- [convert()](./convert) - 一键转换
- [generate()](./generate) - 生成 Vue 组件
