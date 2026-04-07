# 交互效果

## 鼠标跟随

```java
void setup() {
  size(400, 400);
}

void draw() {
  background(220);

  // 跟随鼠标的渐变圆
  noStroke();
  fill(255, 100, 100);
  circle(mouseX, mouseY, 50);

  // 显示鼠标坐标
  fill(0);
  textSize(12);
  text("X: " + mouseX + " Y: " + mouseY, 10, 20);
}
```

### 效果

- 圆形跟随鼠标移动
- 显示实时鼠标坐标
- 简单的交互反馈

## 鼠标点击

```java
color bgColor;

void setup() {
  size(400, 400);
  bgColor = color(220);
}

void draw() {
  background(bgColor);

  fill(255, 100, 100);
  circle(200, 200, 100);
}

// 点击画布改变背景颜色
void mousePressed() {
  bgColor = color(random(255), random(255), random(255));
}
```

### 效果

- 点击画布随机改变背景颜色
- 使用 mousePressed 事件
- 简单的颜色交互

## 键盘控制

```java
float x = 200;
float speed = 5;

void setup() {
  size(400, 400);
}

void draw() {
  background(220);

  fill(255, 100, 100);
  circle(x, 200, 50);

  fill(0);
  textSize(12);
  text("Press LEFT/RIGHT arrow keys", 10, 20);
}

void keyPressed() {
  if (keyCode == LEFT) {
    x -= speed;
  }
  if (keyCode == RIGHT) {
    x += speed;
  }

  // 边界限制
  if (x < 25) x = 25;
  if (x > width - 25) x = width - 25;
}
```

### 效果

- 使用左右方向键控制圆形移动
- 显示操作提示
- 边界限制防止移出画布

## 组合交互

```java
float x, y;
float ballSize = 50;

void setup() {
  size(400, 400);
  x = width / 2;
  y = height / 2;
}

void draw() {
  background(220);

  // 绘制渐变圆
  noStroke();
  fill(255, 100, 100);
  circle(x, y, ballSize);

  // 显示状态
  fill(0);
  textSize(12);
  text("Click to grow, Press R to reset", 10, 20);
  text("X: " + (int)x + " Y: " + (int)y, 10, 40);
}

void mousePressed() {
  x = mouseX;
  y = mouseY;
  ballSize += 10;
  if (ballSize > 100) ballSize = 20;
}

void keyPressed() {
  if (key == 'r' || key == 'R') {
    x = width / 2;
    y = height / 2;
    ballSize = 50;
  }
}
```

### 效果

- 点击移动并改变大小
- 按 R 键重置
- 结合鼠标和键盘交互

## 更多示例

- [基础图形](./basic-shapes)
- [动画效果](./animations)
- [粒子系统](./particles)
