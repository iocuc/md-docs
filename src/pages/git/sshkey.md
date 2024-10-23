# 在同一台电脑上配置多个密钥

1. 生成 SSH Key

```sh
ssh-keygen -t ed25519 -C "email01@example.com"
ssh-keygen -t ed25519 -C "email02@example.com"
```

2. 保存 SSH Key 

```sh
# powershell
C:\Users\<username>/.ssh/id_ed25519_email01

# gitbash
/c/Users/<username>/.ssh/id_ed25519_email02
```

3. 创建配置文件




