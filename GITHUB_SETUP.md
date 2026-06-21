# GitHub 部署说明

## 自动部署到 GitHub Pages

本项目已配置好 Git，可推送到 GitHub 远程仓库。

### 步骤 1: 在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. Repository name 输入: `pipipopo`
3. 选择 Public
4. 点击 "Create repository"

### 步骤 2: 推送代码

创建仓库后，在本地终端运行以下命令：

```bash
cd /home/fred/pipipopo
git push -u origin master
```

### 步骤 3: 启用 GitHub Pages

1. 访问 https://github.com/jerviee/pipipopo/settings/pages
2. Source 选择: `Deploy from a branch`
3. Branch 选择: `master` / `(root)`
4. 点击 Save

等待几分钟后，你的网站将上线：
- 🌐 https://jerviee.github.io/pipipopo

## 添加到手机主屏幕 (PWA)

网站支持 PWA 功能，可以像 App 一样添加到手机主屏幕：

### iOS (Safari)
1. 在 Safari 中打开网站
2. 点击分享按钮 📤
3. 选择"添加到主屏幕"

### Android (Chrome)
1. 在 Chrome 中打开网站
2. 点击菜单 ⋮
3. 选择"安装应用"或"添加到主屏幕"

## 功能预览

开发服务器已启动，可以预览：
- 🌐 http://localhost:5176/

### 主要功能
- 🐦 首页 - 皮皮和坡坡的故事介绍
- 📚 故事小屋 - 8个治愈故事
- 🌙 放松角 - 呼吸练习 + 自然声音
- 💡 关于页面 - 角色介绍
