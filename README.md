# 4000 Essential English Words Book 1 - Anki Flashcards

基于艾宾浩斯记忆曲线的单页 HTML 闪卡应用，Apple iOS 风格设计，支持明亮/暗色模式切换。

## 功能

- **iOS 风格设计**：SF Pro 字体、系统色彩、毛玻璃导航栏、圆角卡片
- **明亮/暗色模式**：一键切换，自动跟随系统偏好，localStorage 记忆选择
- **卡片正反面自定义**：从 词汇 / 英式音标 / 美式音标 / 词性 / 英文释义 中自由选择正面、背面或"不显示"
- **两种学习模式**：
  - 按个数：20/40/60/80/100 预设 + 自定义输入
  - 按单元：选择特定 Unit 进行学习
- **SM-2 间隔重复算法**：Anki 标准动态间隔，4 级评分（不会/困难/一般/简单）
- **音频播放**：卡片右上角 iOS 风格喇叭按钮，英音/美音切换，支持翻牌自动播放
- **SF Symbols 图标**：全应用使用 SVG 矢量图标，无 Emoji 依赖
- **学习统计**：状态分布、近7天复习量、连续学习天数
- **离线使用**：所有进度保存在 localStorage，无需后端
- **PWA 支持**：可添加到手机主屏幕，全屏模式使用

## 文件结构

```
anki-flashcards/
├── index.html              # 主应用（HTML+CSS+JS 单文件）
├── data.js                 # 576 词数据（从 XLSX 提取）
├── 4000EEW1_audio/         # 音频文件（1152 个 MP3，576词 × UK/US）
│   ├── unit_01/
│   │   ├── agree_uk.mp3
│   │   ├── agree_us.mp3
│   │   └── ...
│   └── ...
├── README.md
└── .gitignore
```

## 本地使用

直接用浏览器打开 `index.html` 即可，或启动本地服务器：

```bash
cd anki-flashcards
python -m http.server 8000
# 浏览器访问 http://localhost:8000
```

## 部署到 GitHub Pages

1. 创建 GitHub 仓库（如 `anki-flashcards`）
2. 将 `anki-flashcards/` 目录下所有文件推送到仓库：

```bash
cd anki-flashcards
git init
git add .
git commit -m "Initial commit: Anki flashcards app"
git branch -M main
git remote add origin https://github.com/<username>/anki-flashcards.git
git push -u origin main
```

3. 在 GitHub 仓库设置中启用 Pages：
   - Settings → Pages → Source → Deploy from a branch
   - Branch: `main` / `/(root)` → Save
4. 等待 1-2 分钟，访问 `https://<username>.github.io/anki-flashcards/`

## 数据更新

如需更新词表数据，修改 `data.js` 中的 `VOCAB_DATA` 数组。每条记录格式：

```javascript
{
  "id": 0,
  "unit": 1,
  "word": "agree",
  "uk_pron": "/əˈɡriː/",
  "us_pron": "/əˈɡriː/",
  "part": "v.",
  "definition": "to have the same opinion or belief as another person",
  "uk_audio": "4000EEW1_audio/unit_01/agree_uk.mp3",
  "us_audio": "4000EEW1_audio/unit_01/agree_us.mp3"
}
```

## 技术栈

- 纯 HTML/CSS/JavaScript（零依赖）
- Apple iOS 设计语言（SF Pro 字体、系统色彩、0.5px 分割线、毛玻璃效果）
- CSS 变量双主题（明亮/暗色）+ 平滑过渡动画
- SVG 矢量图标（SF Symbols 风格，currentColor 自适应主题）
- localStorage 持久化
- CSS 3D Transform 卡片翻转
- SM-2 间隔重复算法
- HTML5 Audio API
- 响应式设计（手机/平板/桌面）
