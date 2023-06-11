CSRF_ENABLED = True
SECRET_KEY = 'you-will-never-guess'
import os

#win
# SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:123456@127.0.0.1:3306/signiature?charset=utf8'
#linux
SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://sa:123@127.0.0.1:3306/shiny?charset=utf8'

SQLALCHEMY_TRACK_MODIFICATIONS = True
SQLALCHEMY_ECHO = True

MAIL_SERVER = "smtp.qq.com"

MAIL_PORT = "465"
MAIL_USE_SSL = True
# 默认接受方邮�?
MAIL_USERNAME = "3532685919@qq.com"
# 客户端授权密�?
MAIL_PASSWORD = "kgevdewhrxcjchjj"
# 默认发送方邮箱，可以是自己，同样也要开启POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务
MAIL_DEFAULT_SENDER = "3532685919@qq.com"
