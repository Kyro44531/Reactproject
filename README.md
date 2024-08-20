# 前端实践：React
## 技术要点
· React 框架
· AJAX

## 整体框架
没有框架，纯属乱来

## 故障记录
### 08.19 最大的故障莫过于一个输入错误的标点符号
见证了POSTMAN能导通，但是React就一直415
在此之前由于跨域问题，一直显示报错
```Access to fetch at 'http://localhost:8080/list1' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Credentials' header in the response is '' which must be 'true' when the request's credentials mode is 'include'.```

### Cannot read properties of null (reading 'useState')
原因： <a href='https://blog.csdn.net/weixin_41969974/article/details/132715533'>react版本冲突</a>

### 路由问题
原因：<a href='https://blog.csdn.net/weixin_53045208/article/details/120881698'>没有History，改成BrowseRouter即可</a>

### 未解之谜:
Cannot read properties of null (reading 'useState')
（已解决，TMD不知道哪里来的@Type/React和React包重复了

### Hook只能用在function里面
所以class的意义

## 页面逻辑
### MyComponent.js Just测试一下