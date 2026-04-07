---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Processing2Vue
  text: 将 Processing 代码转换为 Vue 3 组件
  tagline: 🎨 让创意作品无缝迁移到 Web
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 查看示例
      link: /examples/
    - theme: alt
      text: GitHub
      link: https://github.com/yuyezhizhi/processing2vue

features:
  - icon: ⚡
    title: 一键转换
    details: Processing 代码 → Vue 3 组件，只需一行代码
  - icon: 🎯
    title: p5.js 驱动
    details: 基于成熟的 p5.js 库，支持 30+ 函数
  - icon: 📦
    title: 零配置
    details: 开箱即用，无需复杂设置
  - icon: 🎨
    title: 完整支持
    details: 图形、颜色、坐标变换、动画等
  - icon: 📝
    title: TypeScript
    details: 完整的类型定义，提供优秀的开发体验
  - icon: 🧪
    title: 测试覆盖
    details: 完善的测试套件，保证代码质量
---

## ✨ 特性

- 🔄 **一键转换** - Processing 代码 → Vue 3 组件
- ⚡ **实时预览** - 边写边看效果
- 🎯 **p5.js 驱动** - 基于成熟的 p5.js 库
- 📦 **零配置** - 开箱即用，无需复杂设置
- 🎨 **完整支持** - 图形、颜色、坐标变换、动画等
- 📝 **TypeScript** - 完整的类型定义
- 🧪 **测试覆盖** - 完善的测试套件

## 🚀 快速开始

### 安装

```bash
npm install processing2vue p5
```

### 使用

```vue
<template>
  <div class="processing-wrapper">
    <div ref="canvasContainer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import p5 from 'p5'

const canvasContainer = ref(null)
let sketchInstance = null

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400)
  }

  p.draw = () => {
    p.background(220)
    p.circle(p.mouseX, p.mouseY, 50)
  }
}

onMounted(() => {
  if (canvasContainer.value) {
    sketchInstance = new p5(sketch, canvasContainer.value)
  }
})

onUnmounted(() => {
  if (sketchInstance) {
    sketchInstance.remove()
  }
})
</script>

<style scoped>
.processing-wrapper {
  width: 400px;
  height: 400px;
}
</style>
```

### 使用 CLI

```bash
# 安装 CLI
npm install -g processing2vue

# 转换文件
p2v sketch.pde sketch.vue
```

## 📦 NPM 包

```bash
npm install processing2vue
```

## 📚 文档

- [快速开始](/guide/quick-start) - 5 分钟上手
- [API 参考](/api/) - 完整的 API 文档
- [示例](/examples/) - 查看各种示例代码
- [贡献指南](https://github.com/yuyezhizhi/processing2vue/blob/main/CONTRIBUTING.md) - 如何参与贡献

## 🤝 贡献

欢迎贡献！请查看 [贡献指南](https://github.com/yuyezhizhi/processing2vue/blob/main/CONTRIBUTING.md)。

## 📄 许可证

[Apache License 2.0](https://github.com/yuyezhizhi/processing2vue/blob/main/LICENSE)

## 🙏 致谢

- [p5.js](https://p5js.org/) - 优秀的创意编程库
- [Processing](https://processing.org/) - 开创性的创意编程环境
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
