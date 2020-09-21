# tg-aspect-ratio

## 介绍
项目中偶尔会遇到页面上某些元素固定比例显示的设计，常见的比如一个九宫格图片，每个图片需要显示成正方形。  
这时候就可以使用本组件，快速去布局。  
使用的时候只需要传入宽高的比例即可。

## 安装

npm i tg-aspect-ratio

## 用法
``` js
import Vue from 'vue'
import TgAspectRatio from 'tg-aspect-ratio'

Vue.use(TgAspectRatio)
```

``` html
<tg-aspect-ratio w="1" h="1">
  ...
</tg-aspect-ratio>
```

## 示例

### 基础用法
<basic />

<<< @/docs/.vuepress/components/basic.vue

### 九宫格布局
<mobile />

<<< @/docs/.vuepress/components/mobile.vue
## 参数

|参数|说明|类型|默认值
|-|-|-|-|
|w|宽度|Number,String|1
|h|高度|Number,String|1

组件会根据传入的宽高，自动计算出一个比例。