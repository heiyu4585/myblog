Ubuntu下启动/重启/停止apache服务器


```js
Task: Start Apache 2 Server /启动apache服务
# /etc/init.d/apache2 start
or
$ sudo /etc/init.d/apache2 start
Task: Restart Apache 2 Server /重启apache服务
# /etc/init.d/apache2 restart
or
$ sudo /etc/init.d/apache2 restart
Task: Stop Apache 2 Server /停止apache服务
# /etc/init.d/apache2 stop
or
$ sudo /etc/init.d/apache2 stop
```


### apache 设置二级域名

conf文件增加内容如下：

```js
NameVirtualHost *:80
    <VirtualHost *:80>
      ServerAdmin admin@example.com
      DocumentRoot "/usr/local/httpd/htdocs"
      ServerName www.example.com
      ErrorLog "/usr/local/httpd/logs/error.log"
      CustomLog "/usr/local/httpd/logs/custom.log" combined
    </VirtualHost>
     
    <VirtualHost *:80>
      ServerAdmin admin@example.com
      DocumentRoot "/usr/local/httpd/htdocs/blog"
      ServerName blog.example.com
      ErrorLog "/usr/local/httpd/logs/blog_error.log"
      CustomLog "/usr/local/httpd/logs/blog_custom.log" combined
    </VirtualHost>
```
各个参数含义：
ServerAdmin  管理员邮箱

DocumentRoot  指向服务器子目录路径

ServerName  域名别名，可以设置多个别名同时指向当前目录，也可不填别名

ErrorLog   错误日志保存位置

CustomLog  访问日志保存位置

[apache配置二级域名](https://segmentfault.com/a/1190000007512622)
