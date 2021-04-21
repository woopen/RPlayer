(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{118:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return b}));var n=i(0),o=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):d(d({},t),e)),i},a=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),a=p(i),m=n,b=a["".concat(l,".").concat(m)]||a[m]||u[m]||r;return i?o.a.createElement(b,d(d({ref:t},c),{},{components:i})):o.a.createElement(b,d({ref:t},c))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,l[1]=d;for(var c=2;c<r;c++)l[c]=i[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},94:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return d})),i.d(t,"toc",(function(){return s})),i.d(t,"default",(function(){return p}));var n=i(3),o=i(7),r=(i(0),i(118)),l={title:"\u65b9\u6cd5"},d={unversionedId:"api/methods",id:"api/methods",isDocsHomePage:!1,title:"\u65b9\u6cd5",description:"NPlayer \u5b9e\u4f8b\u65b9\u6cd5\u5982\u4e0b\u3002",source:"@site/docs/api/methods.md",slug:"/api/methods",permalink:"/docs/api/methods",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/api/methods.md",version:"current",sidebar:"api",previous:{title:"\u5c5e\u6027",permalink:"/docs/api/attrs"},next:{title:"\u5185\u7f6e\u7ec4\u4ef6",permalink:"/docs/api/components"}},s=[{value:"mount(el?: HTMLElement | string): void",id:"mountel-htmlelement--string-void",children:[]},{value:"incVolume(v = this.opts.volumeStep): void",id:"incvolumev--thisoptsvolumestep-void",children:[]},{value:"decVolume(v = this.opts.volumeStep): void",id:"decvolumev--thisoptsvolumestep-void",children:[]},{value:"toggleVolume(): void",id:"togglevolume-void",children:[]},{value:"forward(v = this.opts.seekStep): void",id:"forwardv--thisoptsseekstep-void",children:[]},{value:"rewind(v = this.opts.seekStep): void",id:"rewindv--thisoptsseekstep-void",children:[]},{value:"play(): Promise&lt;void&gt; | void",id:"play-promisevoid--void",children:[]},{value:"pause(): void",id:"pause-void",children:[]},{value:"toggle(): void",id:"toggle-void",children:[]},{value:"seek(seconds: number): void",id:"seekseconds-number-void",children:[]},{value:"registerSettingItem(item: SettingItem, id?: string): void",id:"registersettingitemitem-settingitem-id-string-void",children:[]},{value:"registerContextMenuItem(item: ContextMenuItem, id?: string): void",id:"registercontextmenuitemitem-contextmenuitem-id-string-void",children:[]},{value:"registerControlItem(item: ControlItem, id?: string): void",id:"registercontrolitemitem-controlitem-id-string-void",children:[]},{value:"getSettingItem(id: string): SettingItem | null",id:"getsettingitemid-string-settingitem--null",children:[]},{value:"getContextMenuItem(id: string): ContextMenuItem | null",id:"getcontextmenuitemid-string-contextmenuitem--null",children:[]},{value:"getControlItem(id: string): ControlItem | null",id:"getcontrolitemid-string-controlitem--null",children:[]},{value:"updateOptions(opts: PlayerOptions): void",id:"updateoptionsopts-playeroptions-void",children:[]},{value:"disableClickPause(): void",id:"disableclickpause-void",children:[]},{value:"enableClickPause(): void",id:"enableclickpause-void",children:[]},{value:"dispose(): void",id:"dispose-void",children:[]}],c={toc:s};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"NPlayer \u5b9e\u4f8b\u65b9\u6cd5\u5982\u4e0b\u3002"),Object(r.b)("h3",{id:"mountel-htmlelement--string-void"},"mount(el?: HTMLElement | string): void"),Object(r.b)("p",null,"\u6302\u8f7d player \u5230 DOM \u4e2d\u3002\u5982\u679c\u521d\u59cb\u5316\u65f6\u6ca1\u6709\u4f20\u5165 ",Object(r.b)("inlineCode",{parentName:"p"},"el")," \u53c2\u6570\uff0c\u90a3\u4e48\u8c03\u7528\u8be5\u51fd\u6570\u65f6\u7684\u53c2\u6570\u4e3a\u5fc5\u4f20\u3002"),Object(r.b)("h3",{id:"incvolumev--thisoptsvolumestep-void"},"incVolume(v = this.opts.volumeStep): void"),Object(r.b)("p",null,"\u9012\u589e\u97f3\u91cf\uff0c\u6b65\u957f\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"volumeStep")," \u8bbe\u7f6e\u7684\u503c\u3002"),Object(r.b)("h3",{id:"decvolumev--thisoptsvolumestep-void"},"decVolume(v = this.opts.volumeStep): void"),Object(r.b)("p",null,"\u9012\u51cf\u97f3\u91cf\uff0c\u6b65\u957f\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"volumeStep")," \u8bbe\u7f6e\u7684\u503c\u3002"),Object(r.b)("h3",{id:"togglevolume-void"},"toggleVolume(): void"),Object(r.b)("p",null,"\u6062\u590d\u6216\u9759\u97f3\u97f3\u91cf\u3002"),Object(r.b)("h3",{id:"forwardv--thisoptsseekstep-void"},"forward(v = this.opts.seekStep): void"),Object(r.b)("p",null,"\u5feb\u8fdb\uff0c\u6b65\u957f\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"seekStep")," \u8bbe\u7f6e\u7684\u503c\u3002"),Object(r.b)("h3",{id:"rewindv--thisoptsseekstep-void"},"rewind(v = this.opts.seekStep): void"),Object(r.b)("p",null,"\u5feb\u9000\uff0c\u6b65\u957f\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"seekStep")," \u8bbe\u7f6e\u7684\u503c\u3002"),Object(r.b)("h3",{id:"play-promisevoid--void"},"play(): Promise\\<void",">"," | void"),Object(r.b)("p",null,"\u64ad\u653e\u89c6\u9891\uff0c\u5bf9\u4e00\u4e9b\u8001\u6d4f\u89c8\u5668\u53ef\u80fd\u4ec0\u4e48\u90fd\u4e0d\u8fd4\u56de\u3002\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play"},"\u8fd9\u91cc"),"\u3002"),Object(r.b)("h3",{id:"pause-void"},"pause(): void"),Object(r.b)("p",null,"\u6682\u505c\u89c6\u9891\u3002"),Object(r.b)("h3",{id:"toggle-void"},"toggle(): void"),Object(r.b)("p",null,"\u64ad\u653e\u6216\u6682\u505c\u89c6\u9891\u3002"),Object(r.b)("h3",{id:"seekseconds-number-void"},"seek(seconds: number): void"),Object(r.b)("p",null,"\u89c6\u9891\u8df3\u8f6c\u5230\u6307\u5b9a\u4e8b\u4ef6\u3002"),Object(r.b)("h3",{id:"registersettingitemitem-settingitem-id-string-void"},"registerSettingItem(item: SettingItem, id?: string): void"),Object(r.b)("p",null,"\u6ce8\u518c\u8bbe\u7f6e\u9879\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(r.b)("a",{parentName:"p",href:"/docs/plugin"},"\u63d2\u4ef6"),"\u3002"),Object(r.b)("h3",{id:"registercontextmenuitemitem-contextmenuitem-id-string-void"},"registerContextMenuItem(item: ContextMenuItem, id?: string): void"),Object(r.b)("p",null,"\u6ce8\u518c\u53f3\u952e\u83dc\u5355\u9879\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(r.b)("a",{parentName:"p",href:"/docs/plugin"},"\u63d2\u4ef6"),"\u3002"),Object(r.b)("h3",{id:"registercontrolitemitem-controlitem-id-string-void"},"registerControlItem(item: ControlItem, id?: string): void"),Object(r.b)("p",null,"\u6ce8\u518c\u63a7\u5236\u6761\u9879\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(r.b)("a",{parentName:"p",href:"/docs/plugin"},"\u63d2\u4ef6"),"\u3002"),Object(r.b)("h3",{id:"getsettingitemid-string-settingitem--null"},"getSettingItem(id: string): SettingItem | null"),Object(r.b)("p",null,"\u83b7\u53d6\u6307\u5b9a\u8bbe\u7f6e\u9879\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(r.b)("a",{parentName:"p",href:"/docs/settings"},"\u8bbe\u7f6e\u83dc\u5355"),"\u3002"),Object(r.b)("h3",{id:"getcontextmenuitemid-string-contextmenuitem--null"},"getContextMenuItem(id: string): ContextMenuItem | null"),Object(r.b)("p",null,"\u83b7\u53d6\u6307\u5b9a\u53f3\u952e\u83dc\u5355\u9879\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(r.b)("a",{parentName:"p",href:"/docs/contextmenu"},"\u53f3\u952e\u83dc\u5355"),"\u3002"),Object(r.b)("h3",{id:"getcontrolitemid-string-controlitem--null"},"getControlItem(id: string): ControlItem | null"),Object(r.b)("p",null,"\u83b7\u53d6\u6307\u5b9a\u63a7\u5236\u6761\u9879\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(r.b)("a",{parentName:"p",href:"/docs/control"},"\u63a7\u5236\u6761"),"\u3002"),Object(r.b)("h3",{id:"updateoptionsopts-playeroptions-void"},"updateOptions(opts: PlayerOptions): void"),Object(r.b)("p",null,"\u66f4\u65b0\u64ad\u653e\u5668\u53c2\u6570\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(r.b)("a",{parentName:"p",href:"/docs/"},"\u5feb\u901f\u5f00\u59cb"),"\u3002"),Object(r.b)("h3",{id:"disableclickpause-void"},"disableClickPause(): void"),Object(r.b)("p",null,"\u7981\u7528\u5355\u51fb\u64ad\u653e/\u6682\u505c\u89c6\u9891\u3002"),Object(r.b)("h3",{id:"enableclickpause-void"},"enableClickPause(): void"),Object(r.b)("p",null,"\u542f\u7528\u5355\u51fb\u64ad\u653e/\u6682\u505c\u89c6\u9891\u3002"),Object(r.b)("h3",{id:"dispose-void"},"dispose(): void"),Object(r.b)("p",null,"\u9500\u6bc1\u64ad\u653e\u5668\u5bf9\u8c61\u3002"))}p.isMDXComponent=!0}}]);