(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[288],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,y=m["".concat(i,".").concat(d)]||m[d]||c[d]||p;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<p;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5993:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return u}});var r=n(2122),a=n(9756),p=(n(7294),n(3905)),o={title:"Vue2 / Vue3"},l={unversionedId:"ecosystem/vue",id:"ecosystem/vue",isDocsHomePage:!1,title:"Vue2 / Vue3",description:"npm version gzip size Codacy Badge Test",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ecosystem/vue.md",sourceDirName:"ecosystem",slug:"/ecosystem/vue",permalink:"/en/docs/ecosystem/vue",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/ecosystem/vue.md",version:"current",frontMatter:{title:"Vue2 / Vue3"},sidebar:"docs",previous:{title:"React",permalink:"/en/docs/ecosystem/react"},next:{title:"Quantity switch",permalink:"/en/docs/examples/quantity-switch"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Quickstart",id:"quickstart",children:[{value:"vue2",id:"vue2",children:[]},{value:"vue3",id:"vue3",children:[]}]},{value:"Online preview &amp; edits",id:"online-preview--edits",children:[]}],s={toc:i};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/woopen/nplayer"},(0,p.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/nplayer?logo=npm",alt:"npm version"}))," ",(0,p.kt)("a",{parentName:"p",href:"https:/unpkg.com/@nplayer/vue/dist/index.min.js"},(0,p.kt)("img",{parentName:"a",src:"https://badge-size.herokuapp.com/woopen/nplayer/main/packages/nplayer-vue/dist/index.min.js?compression=gzip",alt:"gzip size"}))," ",(0,p.kt)("a",{parentName:"p",href:"https://www.codacy.com/gh/woopen/nplayer/dashboard?utm_source=github.com&utm_medium=referral&utm_content=woopen/nplayer&utm_campaign=Badge_Grade"},(0,p.kt)("img",{parentName:"a",src:"https://app.codacy.com/project/badge/Grade/08e3f1086b5748aaa745ca655ecd1c6a",alt:"Codacy Badge"}))," ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/woopen/nplayer/actions/workflows/test.yml"},(0,p.kt)("img",{parentName:"a",src:"https://github.com/woopen/nplayer/actions/workflows/test.yml/badge.svg?branch=main",alt:"Test"}))),(0,p.kt)("p",null,"If you want to use NPlayer in a Vue2 or Vue3 project, you can use the Vue plugin."),(0,p.kt)("h2",{id:"installation"},"Installation"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -S nplayer @nplayer/vue\n")),(0,p.kt)("p",null,"You need to install ",(0,p.kt)("inlineCode",{parentName:"p"},"nplayer")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"@nplayer/vue"),"."),(0,p.kt)("p",null,"Or use via CDN."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/nplayer@latest/dist/index.min.js"><\/script>\n<script src="https:/unpkg.com/@nplayer/vue/dist/index.min.js"><\/script>\n')),(0,p.kt)("h2",{id:"quickstart"},"Quickstart"),(0,p.kt)("h3",{id:"vue2"},"vue2"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'import Vue from "vue";\nimport NPlayer from "@nplayer/vue";\nimport App from "./App.vue";\n\nVue.use(NPlayer);\nnew Vue({ render: (h) => h(App) }).$mount("#app");\n')),(0,p.kt)("p",null,"Install the NPlayer plugin first."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div>\n    <NPlayer\n      ref="player"\n      :options="{ src: \'https://v-cdn.zjol.com.cn/280443.mp4\' }"\n      :set="setPlayer"\n    />\n  </div>\n</template>\n<script>\nexport default {\n  methods: {\n    setPlayer(player) {\n      this.$options.player = player;\n    },\n  },\n  mounted() {\n    console.log(this.$refs.player.player === this.$options.player);\n  },\n};\n<\/script>\n')),(0,p.kt)("h3",{id:"vue3"},"vue3"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'import { createApp } from "vue";\nimport NPlayer from "@nplayer/vue";\nimport App from "./App.vue";\n\ncreateApp(App).use(NPlayer).mount("#app");\n')),(0,p.kt)("p",null,"Install the NPlayer plugin first."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div>\n    <NPlayer\n      :options="{ src: \'https://v-cdn.zjol.com.cn/280443.mp4\' }"\n      :set="setPlayer"\n    />\n  </div>\n</template>\n<script>\nimport { onMounted } from "vue";\nexport default {\n  setup() {\n    let player = null;\n\n    onMounted(() => {\n      console.log(player);\n    });\n\n    return {\n      setPlayer: (p) => (player = p),\n    };\n  },\n};\n<\/script>\n')),(0,p.kt)("p",null,"\u9996\u5148\u6211\u4eec\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"use")," \u65b9\u6cd5\u5e94\u7528\u63d2\u4ef6\uff0c\u5b83\u53ef\u4ee5\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u662f\u7ec4\u4ef6\u7684\u540d\u79f0\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"Vue.use(NPlayer, { name: 'NPlayer' })\n")),(0,p.kt)("p",null,"\u9ed8\u8ba4\u7ec4\u4ef6\u540d\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"NPlayer"),"\u3002"),(0,p.kt)("p",null,"NPlayer \u7ec4\u4ef6\u63a5\u6536\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"options")," prop\u3002\u5b83\u662f NPlayer \u6784\u9020\u51fd\u6570\u53c2\u6570\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b ",(0,p.kt)("a",{parentName:"p",href:"/en/docs/api/config"},"\u914d\u7f6e"),"\u3002"),(0,p.kt)("p",null,"NPlayer \u5185\u90e8\u628a\u64ad\u653e\u5668\u5305\u88f9\u5728\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"width")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"height")," \u90fd\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"100%")," \u7684 div \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"class")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"style")," prop\uff0c\u8bbe\u7f6e\u5b83\u7684 css \u7c7b\u540d\u548c\u6837\u5f0f\u3002"),(0,p.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"set")," prop\uff0c\u6765\u83b7\u53d6\u64ad\u653e\u5668\u5b9e\u4f8b\uff0c\u5b83\u662f\u4e00\u4e2a\u51fd\u6570\u7b2c\u4e00\u4e2a\u53c2\u6570\u5c31\u662f\u64ad\u653e\u5668\u5b9e\u4f8b\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"(player: Player) => void")),(0,p.kt)("h2",{id:"online-preview--edits"},"Online preview & edits"),(0,p.kt)("p",null,"Vue2 DEMO: ",(0,p.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/nplayer-vue2-demo-9lps9?file=/src/main.js"},"https://codesandbox.io/s/nplayer-vue2-demo-9lps9?file=/src/main.js")),(0,p.kt)("p",null,"Vue3 DEMO: ",(0,p.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/nplayer-vue3-demo-mt8s4?file=/src/main.js"},"https://codesandbox.io/s/nplayer-vue3-demo-mt8s4?file=/src/main.js")))}u.isMDXComponent=!0}}]);