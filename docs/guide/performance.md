# 性能优化

## 优化建议

### 1. 避免在 draw() 中创建对象

```java
// ❌ 不推荐
void draw() {
  Object obj = new Object(); // 每帧创建
}

// ✅ 推荐
Object obj;
void setup() {
  obj = new Object(); // setup 中创建
}
```

### 2. 使用对象池

对于大量粒子等场景，使用对象池可以显著提升性能。

### 3. 减少绘制调用

合并多个简单的绘制调用。

## 性能监控

```javascript
// 使用 frameRate() 监控性能
console.log('FPS:', frameRate())
```

## 相关链接

- [示例](../examples/)
