# 自定义转换

## 自定义处理

可以使用 `parse()` 和 `generate()` 进行更精细的控制。

## 高级用法

```javascript
import { parse, generate } from 'processing2vue'

const ast = parse(code)

// 修改 AST
ast.width = 800
ast.height = 600

// 生成代码
const vueCode = generate(ast, {
  scoped: false
})
```

## 相关链接

- [转换器 API](./converter)
