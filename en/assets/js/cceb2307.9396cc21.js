(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[192],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9235:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={title:"Poster"},p={unversionedId:"poster",id:"poster",isDocsHomePage:!1,title:"Poster",description:"Posters can be added to the video with the post parameter, which is a link to the poster image.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/poster.md",sourceDirName:".",slug:"/poster",permalink:"/en/docs/poster",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/poster.md",version:"current",frontMatter:{title:"Poster"},sidebar:"docs",previous:{title:"Setting Menu",permalink:"/en/docs/settings"},next:{title:"Preview thumbnails",permalink:"/en/docs/thumbnail"}},c=[{value:"Poster",id:"poster",children:[]}],s={toc:c};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Posters can be added to the video with the ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," parameter, which is a link to the poster image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Player({\n  poster: 'http://image.jpg'\n})\n")),(0,a.kt)("p",null,"NPlayer \u7684\u6d77\u62a5\u7531\u4e24\u4e2a\u5143\u7d20\u7ec4\u6210\uff0c\u4e00\u4e2a\u662f\u6d77\u62a5\u56fe\u7247\uff0c\u4e00\u4e2a\u662f\u4e0a\u9762\u7684\u64ad\u653e\u6309\u94ae\u3002\u64ad\u653e\u6309\u94ae\u548c\u6d77\u62a5\u80cc\u666f\u8272\uff08\u9ed8\u8ba4\u662f\u900f\u660e\u8272\uff09\u90fd\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u5177\u4f53\u8be6\u60c5\u53ef\u4ee5\u67e5\u770b\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/theme"},"\u5b9a\u5236\u4e3b\u9898\u7ae0\u8282"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"posterEnable")," \u53c2\u6570\u7528\u6765\u542f\u7528\u548c\u7981\u7528\u6d77\u62a5\uff0c\u9ed8\u8ba4\u8be5\u53c2\u6570\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,a.kt)("h2",{id:"poster"},"Poster"),(0,a.kt)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"player.poster")," \u8bbf\u95ee Poster \u5bf9\u8c61\uff0c\u6765\u63a7\u5236\u6d77\u62a5\u7684\u663e\u793a\u9690\u85cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const player = new Player()\n\nplayer.poster.show()\nplayer.poster.hide()\nconsole.log(player.poster.isActive) // \u662f\u5426\u5728\u5c55\u793a\u6d77\u62a5\n")))}l.isMDXComponent=!0}}]);