# 动画效果

## 弹跳球

```java
float x = 200;
float y = 200;
float dx = 3;
float dy = 2;
float radius = 30;

void setup() {
  size(400, 400);
}

void draw() {
  background(220);

  x += dx;
  y += dy;

  // 边界检测
  if (x > width - radius || x < radius) {
    dx = -dx;
  }
  if (y > height - radius || y < radius) {
    dy = -dy;
  }

  fill(255, 100, 100);
  stroke(0);
  circle(x, y, radius * 2);
}
```

### 效果

- 圆形在画布内弹跳
- 碰到边界时反弹
- 持续运动

## 旋转方块

```java
void setup() {
  size(400, 400);
  rectMode(CENTER);
}

void draw() {
  background(220);
  translate(width / 2, height / 2);
  rotate(frameCount * 0.05);

  fill(100, 200, 255);
  stroke(0);
  strokeWeight(2);
  rect(0, 0, 100, 100);
}
```

### 效果

- 蓝色方块持续旋转
- 使用 frameCount 实现动画
- 坐标变换实现居中旋转

## 波浪效果

```java
void setup() {
  size(400, 400);
  noFill();
}

void draw() {
  background(220);

  stroke(0);
  strokeWeight(2);

  for (int i = 0; i < 10; i++) {
    float y = 50 + i * 35;
    beginShape();
    for (float x = 0; x < width; x += 10) {
      float offset = sin(frameCount * 0.05 + i * 0.3) * 20;
      vertex(x, y + offset);
    }
    endShape();
  }
}
```

### 效果

- 多条波浪线
- 波浪随时间变化
- 使用 sin 函数实现平滑动画

## 更多示例

- [基础图形](./basic-shapes)
- [交互效果](./interactions)
- [粒子系统](./particles)
