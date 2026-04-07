# 基础图形示例

## 圆形动画

```java
float x, y;
float dx = 2;
float dy = 3;
float radius = 30;

void setup() {
  size(400, 400);
  x = width / 2;
  y = height / 2;
}

void draw() {
  background(220);

  // 更新位置
  x += dx;
  y += dy;

  // 边界检测
  if (x > width - radius || x < radius) {
    dx = -dx;
  }
  if (y > height - radius || y < radius) {
    dy = -dy;
  }

  // 绘制圆形
  fill(255, 100, 100);
  stroke(0);
  strokeWeight(2);
  circle(x, y, radius * 2);
}
```

### 运行结果

- 圆形在画布中弹跳
- 碰到边界时反弹
- 红色填充，黑色边框

## 多个图形

```java
void setup() {
  size(400, 400);
}

void draw() {
  background(255);

  // 矩形
  fill(255, 100, 100);
  rect(50, 50, 100, 80);

  // 椭圆
  fill(100, 255, 100);
  ellipse(250, 100, 120, 80);

  // 三角形
  fill(100, 100, 255);
  triangle(200, 200, 250, 300, 150, 300);

  // 线条
  stroke(0);
  strokeWeight(3);
  line(50, 350, 350, 350);
}
```

### 运行结果

- 左上角：红色矩形
- 右上角：绿色椭圆
- 底部：蓝色三角形
- 底部横线：黑色粗线

## 渐变效果

```java
void setup() {
  size(400, 400);
  noStroke();
}

void draw() {
  background(255);

  for (int i = 0; i < 10; i++) {
    float y = map(i, 0, 9, 50, 350);
    float colorValue = map(i, 0, 9, 0, 255);
    fill(colorValue, 100, 255 - colorValue);
    rect(50, y, 300, 30);
  }
}
```

### 运行结果

- 10 个水平矩形
- 颜色从蓝色渐变到红色
- 垂直排列

## 使用方式

### 转换为 Vue 组件

```bash
p2v circle-bounce.pde circle-bounce.vue
```

### 在 Vue 中使用

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
    // ... 这里填写转换后的代码 ...
  }

  p.draw = () => {
    // ... 这里填写转换后的代码 ...
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

## 更多示例

- [动画效果](./animations)
- [交互效果](./interactions)
- [粒子系统](./particles)
- [几何图案](./geometric)
