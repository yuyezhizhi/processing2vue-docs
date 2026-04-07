# 几何图案

## 旋转矩形图案

```java
void setup() {
  size(400, 400);
  rectMode(CENTER);
}

void draw() {
  background(255);
  translate(width / 2, height / 2);

  for (int i = 0; i < 12; i++) {
    push();
    rotate(TWO_PI / 12 * i + frameCount * 0.02);
    stroke(i * 20, 200, 200);
    strokeWeight(2);
    noFill();
    rect(0, 0, 150, 50);
    pop();
  }
}
```

### 效果

- 12 个旋转的矩形
- 彩虹色渐变
- 持续旋转动画

## 圆环图案

```java
void setup() {
  size(400, 400);
}

void draw() {
  background(255);

  translate(width / 2, height / 2);

  for (int i = 0; i < 20; i++) {
    float radius = 20 + i * 10;
    float hue = map(i, 0, 20, 0, 255);

    noFill();
    stroke(hue, 255, 200);
    strokeWeight(2);

    float wobble = sin(frameCount * 0.05 + i * 0.5) * 5;
    ellipse(0, 0, radius * 2 + wobble, radius * 2 - wobble);
  }
}
```

### 效果

- 20 个嵌套的椭圆
- 颜色随半径变化
- 椭圆形状轻微波动

## 万花筒效果

```java
int numSegments = 8;

void setup() {
  size(400, 400);
}

void draw() {
  background(0);
  translate(width / 2, height / 2);

  float angle = TWO_PI / numSegments;

  for (int i = 0; i < numSegments; i++) {
    push();
    rotate(angle * i);

    // 绘制一个图形片段
    fill(255, 150, 100, 100);
    noStroke();
    beginShape();
    vertex(0, 0);
    vertex(150, 50);
    vertex(100, 150);
    vertex(0, 100);
    endShape(CLOSE);

    // 旋转动画
    rotate(frameCount * 0.02);

    // 添加装饰圆
    fill(100, 200, 255);
    circle(80, 80, 30);

    pop();
  }
}
```

### 效果

- 8 重对称图案
- 旋转动画
- 颜色层次丰富

## 网格图案

```java
void setup() {
  size(400, 400);
}

void draw() {
  background(255);

  int gridSize = 20;
  int cols = width / gridSize;
  int rows = height / gridSize;

  for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
      float x = i * gridSize + gridSize / 2;
      float y = j * gridSize + gridSize / 2;

      // 基于距离计算颜色
      float d = dist(x, y, width / 2, height / 2);
      float hue = map(d, 0, width / 2, 0, 255);

      // 基于鼠标位置动画
      float size = 5 + sin(frameCount * 0.05 + x * 0.1 + y * 0.1) * 3;

      noStroke();
      fill(hue, 255, 200);
      rect(x - size / 2, y - size / 2, size, size);
    }
  }
}
```

### 效果

- 20x20 网格
- 颜色基于到中心的距离
- 方块大小随时间动画

## 更多示例

- [基础图形](./basic-shapes)
- [动画效果](./animations)
- [粒子系统](./particles)
