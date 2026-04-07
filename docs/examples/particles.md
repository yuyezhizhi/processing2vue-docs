# 粒子系统

## 基础粒子效果

```java
Particle[] particles;

void setup() {
  size(400, 400);
  particles = new Particle[100];

  for (int i = 0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
}

void draw() {
  background(220, 20);

  for (Particle p : particles) {
    p.update();
    p.display();
  }
}

class Particle {
  float x, y;
  float vx, vy;
  float size;

  Particle() {
    x = random(width);
    y = random(height);
    vx = random(-1, 1);
    vy = random(-1, 1);
    size = random(5, 15);
  }

  void update() {
    x += vx;
    y += vy;

    // 边界环绕
    if (x < 0) x = width;
    if (x > width) x = 0;
    if (y < 0) y = height;
    if (y > height) y = 0;
  }

  void display() {
    noStroke();
    fill(100, 200, 255, 150);
    circle(x, y, size);
  }
}
```

### 效果

- 100 个随机运动的粒子
- 粒子在画布内移动
- 到达边界时从另一边出现

## 鼠标吸引粒子

```java
Particle[] particles;

void setup() {
  size(400, 400);
  particles = new Particle[50];

  for (int i = 0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
}

void draw() {
  background(0, 20);

  for (Particle p : particles) {
    p.attract(mouseX, mouseY);
    p.update();
    p.display();
  }
}

class Particle {
  float x, y;
  float vx, vy;

  Particle() {
    x = random(width);
    y = random(height);
    vx = 0;
    vy = 0;
  }

  void attract(float targetX, float targetY) {
    float dx = targetX - x;
    float dy = targetY - y;
    float d = sqrt(dx * dx + dy * dy);

    if (d < 100) {
      float force = (100 - d) / 100;
      vx += dx / d * force * 0.5;
      vy += dy / d * force * 0.5;
    }

    // 摩擦力
    vx *= 0.95;
    vy *= 0.95;
  }

  void update() {
    x += vx;
    y += vy;
  }

  void display() {
    noStroke();
    fill(255, 150);
    circle(x, y, 10);
  }
}
```

### 效果

- 粒子被鼠标吸引
- 距离越近吸引力越强
- 摩擦力让运动更自然

## 粒子连线

```java
Particle[] particles;
float maxDist = 100;

void setup() {
  size(400, 400);
  particles = new Particle[50];

  for (int i = 0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
}

void draw() {
  background(0);

  for (int i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();

    for (int j = i + 1; j < particles.length; j++) {
      float d = dist(particles[i].x, particles[i].y,
                     particles[j].x, particles[j].y);
      if (d < maxDist) {
        stroke(255, map(d, 0, maxDist, 255, 0));
        line(particles[i].x, particles[i].y,
             particles[j].x, particles[j].y);
      }
    }
  }
}

class Particle {
  float x, y;
  float vx, vy;

  Particle() {
    x = random(width);
    y = random(height);
    vx = random(-1, 1);
    vy = random(-1, 1);
  }

  void update() {
    x += vx;
    y += vy;

    if (x < 0 || x > width) vx *= -1;
    if (y < 0 || y > height) vy *= -1;
  }

  void display() {
    noStroke();
    fill(255);
    circle(x, y, 5);
  }
}
```

### 效果

- 粒子随机移动
- 距离近的粒子之间连线
- 连线颜色根据距离变化

## 更多示例

- [基础图形](./basic-shapes)
- [动画效果](./animations)
- [几何图案](./geometric)
