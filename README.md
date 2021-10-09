# 掘金自动签到&免费抽奖&邮件提醒

## 实现

- [x] 自动签到
- [x] 自动免费抽奖
- [x] 签到结果发送邮件

## 使用

### 1、修改config.json内cookie

[如何从浏览器获取cookie](https://jingyan.baidu.com/article/aa6a2c14b84ad80d4c19c482.html)

### 2、修改config.json内email.qq参数

```javascript
{
  "email": {
    "qq": { // 目前使用QQ邮箱的
      "user": "", // 开启SMTP服务的QQ邮箱号
      "from": "", // 开启SMTP服务的QQ邮箱号
      "to": "", // 接收者的邮箱
      "pass": "" // 授权码（不知道如何获取可自行百度）
    }
  }
}
```

### 3、安装pm2
```shell
npm install -g pm2
```

### 3、使用pm2启动项目

```shell
pm2 start index.js --name ***
```

## 云函数版

传送门：https://juejin.cn/post/7011025504186662949
