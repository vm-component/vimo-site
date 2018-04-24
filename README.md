# vimo-site

使用 Nuxt 构建 Vime 文档.

## 栏目

栏目在 Header 中显示, 比如: 新手教程, 组件库, 主题库, 推荐组件, 常见问题, 其他.

文档与最终数据的位置如下所示:

| 中文名称 | 英文名称   | 文档集位置     | 数据位置              |
| -------- | ---------- | -------------- | --------------------- |
| 新手教程 | guide      | docs/guide     | .site-data/guide      |
| 组件库   | components | src/components | .site-data/components |
| 主题库   | themes     | src/themes     | .site-data/themes     |
| 推荐组件 | recommend  | docs/recommend | .site-data/recommend  |
| 常见问题 | faq        | docs/faq       | .site-data/faq        |
| 其他     | other      | docs/other     | .site-data/other      |


## 栏目中的分类

栏目中的分类由文档中的 frontmatter 管理, 例如:

```markdown
---
category: 原则
type: 对比
order: 3
title: 对比
docs: false
timeline: false
demo: /#/alert
---
```

- category: 分类名称, 为空也是一种分类
- type: 分category的下一级
- order: 排序
- title: 当前文章标题 






