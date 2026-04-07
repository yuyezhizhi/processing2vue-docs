# 转换器 API

## convert()

主要转换函数，将 Processing 代码转换为 Vue 组件。

```javascript
import { convert } from 'processing2vue'

const vueCode = convert(processingCode)
```

## parse()

解析 Processing 代码，返回中间表示。

```javascript
import { parse } from 'processing2vue'

const ast = parse(processingCode)
```

## generate()

从 AST 生成 Vue 组件代码。

```javascript
import { generate } from 'processing2vue'

const vueCode = generate(ast)
```

## 相关链接

- [API 参考](../api/)
