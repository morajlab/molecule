"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32008],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49572:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={title:"\u56fd\u9645\u5316\uff08i18n\uff09",sidebar_label:"\u56fd\u9645\u5316"},p=void 0,c={unversionedId:"guides/extend-locales",id:"version-0.9.0-beta.2/guides/extend-locales",title:"\u56fd\u9645\u5316\uff08i18n\uff09",description:"Molecule \u5185\u7f6e\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u56fd\u9645\u5316\uff08i18n\uff09\u65b9\u6848\uff0c\u652f\u6301\u6211\u4eec\u57fa\u672c\u7684\u56fd\u9645\u5316\u9700\u6c42\u3002\u6211\u4eec\u5185\u7f6e\u4e86\u7b80\u4f53\u4e2d\u6587\uff08zh-CN\uff09\u3001\u82f1\u6587\uff08en \u9ed8\u8ba4\uff09\u548c\u97e9\u6587\uff08ko-KR\uff093 \u79cd\u57fa\u672c\u7684\u8bed\u8a00\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.9.0-beta.2/guides/extend-locales.md",sourceDirName:"guides",slug:"/guides/extend-locales",permalink:"/molecule/zh-CN/docs/guides/extend-locales",editUrl:"https://github.com/DTStack/molecule/edit/main/website/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.9.0-beta.2/guides/extend-locales.md",tags:[],version:"0.9.0-beta.2",frontMatter:{title:"\u56fd\u9645\u5316\uff08i18n\uff09",sidebar_label:"\u56fd\u9645\u5316"},sidebar:"docs",previous:{title:"\u5feb\u6377\u8bbf\u95ee",permalink:"/molecule/zh-CN/docs/guides/extend-quick-access"},next:{title:"\u8bbe\u7f6e",permalink:"/molecule/zh-CN/docs/guides/extend-settings"}},s=[{value:"\u5207\u6362\u8bed\u8a00",id:"\u5207\u6362\u8bed\u8a00",children:[],level:2},{value:"\u672c\u5730\u5316\u670d\u52a1\uff08LocaleService\uff09 \u5bf9\u8c61",id:"\u672c\u5730\u5316\u670d\u52a1localeservice-\u5bf9\u8c61",children:[],level:2},{value:"\u81ea\u5b9a\u4e49\u8bed\u8a00",id:"\u81ea\u5b9a\u4e49\u8bed\u8a00",children:[],level:2}],u={toc:s};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Molecule \u5185\u7f6e\u4e86\u4e00\u4e2a\u7b80\u5355\u7684",(0,o.kt)("strong",{parentName:"p"},"\u56fd\u9645\u5316\uff08i18n\uff09"),"\u65b9\u6848\uff0c\u652f\u6301\u6211\u4eec\u57fa\u672c\u7684\u56fd\u9645\u5316\u9700\u6c42\u3002\u6211\u4eec\u5185\u7f6e\u4e86",(0,o.kt)("strong",{parentName:"p"},"\u7b80\u4f53\u4e2d\u6587\uff08zh-CN\uff09"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"\u82f1\u6587\uff08en \u9ed8\u8ba4\uff09"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u97e9\u6587\uff08ko-KR\uff09"),"3 \u79cd\u57fa\u672c\u7684\u8bed\u8a00\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u6587\u5185\u5bb9\u4e2d\u7684\u6240\u6709\u4ee3\u7801\uff0c\u90fd\u4ee5 ",(0,o.kt)("a",{parentName:"p",href:"../quick-start"},"Quick Start")," \u4e2d\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," \u9879\u76ee\u4e3a\u57fa\u7840\u6f14\u793a\u3002"))),(0,o.kt)("h2",{id:"\u5207\u6362\u8bed\u8a00"},"\u5207\u6362\u8bed\u8a00"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u6211\u4eec\u63d0\u4f9b\u4e86",(0,o.kt)("strong",{parentName:"p"},"2 \u79cd"),"\u65b9\u6cd5\u5207\u6362\u3002\u7b2c\u4e00\u79cd\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + Shift + L")," \u5feb\u6377\u952e\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select Display Language",src:n(99988).Z})),(0,o.kt)("p",null,"\u7b2c\u4e8c\u79cd\uff0c\u6253\u5f00\u4f7f\u7528\u5feb\u6377\u952e ",(0,o.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + ,")," \u5728 ",(0,o.kt)("a",{parentName:"p",href:"/molecule/zh-CN/docs/guides/extend-workbench"},"Editor")," \u4e2d\u6253\u5f00",(0,o.kt)("a",{parentName:"p",href:"./extend-settings"},"\u8bbe\u7f6e\uff08Settings)")," \u9762\u677f\uff0c\u4fee\u6539 ",(0,o.kt)("strong",{parentName:"p"},"JSON")," \u914d\u7f6e\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"locale")," \u5b57\u6bb5\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select Display Language",src:n(20061).Z})),(0,o.kt)("p",null,"\u4fee\u6539\u5b8c\u6210\u540e\uff0cMolecule \u4f1a\u5728 \u901a\u77e5\u680f",(0,o.kt)("a",{parentName:"p",href:"/molecule/zh-CN/docs/guides/extend-builtin-ui#%E9%80%9A%E7%9F%A5%E6%A0%8Fnotification"},"\uff08Notification\uff09"),"\u5f39\u51fa\u66f4\u65b0\u6d88\u606f\uff0c\u6211\u4eec\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"p"},"Reload")," \u5373\u53ef\u91cd\u65b0\u52a0\u8f7d\u3002"),(0,o.kt)("h2",{id:"\u672c\u5730\u5316\u670d\u52a1localeservice-\u5bf9\u8c61"},(0,o.kt)("a",{parentName:"h2",href:"../api/classes/molecule.LocaleService"},"\u672c\u5730\u5316\u670d\u52a1\uff08LocaleService\uff09 \u5bf9\u8c61")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LocaleService")," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u57fa\u7840\u7684 ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.LocaleService"},"API")," \u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5b8c\u6210\u5bf9\u56fd\u9645\u5316\u529f\u80fd\u7684\u6269\u5c55\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u672c\u5730\u5316(localize)"),"\u4e00\u4e2a\u5bf9\u8c61:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"molecule.locale.localize('sourceKey', 'default value');\n")),(0,o.kt)("p",null,"\u8bbe\u7f6e",(0,o.kt)("strong",{parentName:"p"},"\u5f53\u524d"),"\u7684\u672c\u5730\u5316\u8bed\u8a00\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Set the zh-CN as the current locale language\nmolecule.locale.setCurrentLocale('zh-CN');\n")),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u8bed\u8a00"},"\u81ea\u5b9a\u4e49\u8bed\u8a00"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u56fd\u9645\u5316\u8bed\u8a00\uff08i18n\uff09")," \u540c\u6837\u662f Molecule \u7684\u4e00\u79cd\u6269\u5c55\u7a0b\u5e8f\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u79cd\u975e\u5e38\u7b80\u4fbf\u7684",(0,o.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u8bed\u8a00"),"\u7684\u65b9\u5f0f, \u652f\u6301\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," \u6587\u4ef6\u6765\u5b9a\u4e49\u56fd\u9645\u5316",(0,o.kt)("strong",{parentName:"p"},"\u8bed\u8a00\u5305"),"\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u4e00\u8d77\u6765\u770b\u4e2a\u4f8b\u5b50\uff01"),(0,o.kt)("p",null,"\u9996\u5148\u6211\u4eec\u53ef\u4ee5\u5728\u81ea\u5df1\u9879\u76ee\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," \u76ee\u5f55\u4e0b\uff0c\u65b0\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n")," \u7684\u6587\u4ef6\u5939"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"src/extensions/i18n\n\u251c\u2500\u2500 index.ts\n\u2514\u2500\u2500 zh-CN.json\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," \u7528\u6765\u5b9a\u4e49\u672c\u5730\u5316\u6269\u5c55\u5bf9\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { IContributeType, IExtension } from '@dtinsight/molecule/esm/model';\n\nconst zhCN = require('./zh-CN.json');\nconst locales = [zhCN];\n\nexport const ExtendLocales: IExtension = {\n    id: 'ExtendLocales',\n    name: 'Extend locales',\n    contributes: {\n        [IContributeType.Languages]: locales,\n    },\n};\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"zh-CN.json")," \u4e3a ",(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.ILocale"},"ILocale")," \u7c7b\u578b\u7684\u8bed\u8a00\u5305\u8d44\u6e90\u6587\u4ef6:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "custom-zh-CN",\n    "name": "\u7b80\u4f53\u4e2d\u6587 - \u81ea\u5b9a\u4e49",\n    "inherit": "zh-CN",\n    "source": {\n        "menu.file": "\u6587\u4ef6",\n        "menu.newFile": "\u65b0\u5efa\u4efb\u52a1",\n        "demo.running": "\u8fd0\u884c",\n        "demo.dataSourceManagement": "\u6570\u636e\u6e90\u7ba1\u7406",\n        "demo.terminal": "\u7ec8\u7aef"\n    }\n}\n')),(0,o.kt)("p",null,"\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"inherit")," \u662f\u53ef\u9009\u9879\uff0c\u8868\u793a\u662f\u5426",(0,o.kt)("strong",{parentName:"p"},"\u7ee7\u627f"),"\u5df2\u5b58\u5728\u7684",(0,o.kt)("strong",{parentName:"p"},"\uff08zh-CN/en) "),"\u7684\u8bed\u8a00\u6587\u4ef6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"source")," \u4e3a\u5177\u4f53\u7684\u672c\u5730\u5316\u6570\u636e\uff0c\u4ee5 ",(0,o.kt)("strong",{parentName:"p"},"key-value")," \u7684\u5f62\u5f0f\u8868\u793a\u3002"),(0,o.kt)("p",null,"\u6dfb\u52a0\u5b8c\u6210\u540e\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5237\u65b0"),"\u6574\u4e2a\u9875\u9762\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + Shift + L "),"\u5feb\u6377\u952e\u6253\u5f00",(0,o.kt)("strong",{parentName:"p"},"\u8bed\u8a00\u5207\u6362\u9762\u677f"),"\uff0c\u627e\u5230 ",(0,o.kt)("strong",{parentName:"p"},"\u7b80\u4f53\u4e2d\u6587 - \u81ea\u5b9a\u4e49")," \u9009\u9879\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9057\u61be\u7684\u662f\uff0cMolecule \u867d\u7136\u4f7f\u7528\u4e86 React \u6280\u672f\u6765\u6784\u5efa\u6574\u4e2a\u5e94\u7528\uff0c\u4f46\u662f\u56e0\u4e3a\u67b6\u6784\u7684\u539f\u56e0\uff0c\n\u76ee\u524d\u65e0\u6cd5\u505a\u5230\u5207\u6362\u540e",(0,o.kt)("strong",{parentName:"p"},"\u5b9e\u65f6\u5207\u6362"),"\u8bed\u8a00\uff0c\u9700\u8981",(0,o.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u52a0\u8f7d"),"\u6574\u4e2a\u9875\u9762\u5e94\u7528\uff0c\u624d\u80fd",(0,o.kt)("strong",{parentName:"p"},"\u5237\u65b0"),"\u8bed\u8a00\u73af\u5883\u3002"))))}m.isMDXComponent=!0},99988:function(e,t,n){t.Z=n.p+"assets/images/extend-language-5995fbf9d50eaba45d858e0a7e39b048.png"},20061:function(e,t,n){t.Z=n.p+"assets/images/extend-language2-e672a1fac76104ca0b21273e0080ddfb.png"}}]);