"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98771],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94308:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={id:"molecule.model.StatusBarEvent",title:"Enumeration: StatusBarEvent",sidebar_label:"StatusBarEvent",custom_edit_url:null},u=void 0,c={unversionedId:"api/enums/molecule.model.StatusBarEvent",id:"version-0.9.0-beta.2/api/enums/molecule.model.StatusBarEvent",title:"Enumeration: StatusBarEvent",description:"molecule.model.StatusBarEvent",source:"@site/versioned_docs/version-0.9.0-beta.2/api/enums/molecule.model.StatusBarEvent.md",sourceDirName:"api/enums",slug:"/api/enums/molecule.model.StatusBarEvent",permalink:"/molecule/zh-CN/docs/api/enums/molecule.model.StatusBarEvent",editUrl:null,tags:[],version:"0.9.0-beta.2",frontMatter:{id:"molecule.model.StatusBarEvent",title:"Enumeration: StatusBarEvent",sidebar_label:"StatusBarEvent",custom_edit_url:null},sidebar:"api",previous:{title:"SettingsEvent",permalink:"/molecule/zh-CN/docs/api/enums/molecule.model.SettingsEvent"},next:{title:"KeybindingWeight",permalink:"/molecule/zh-CN/docs/api/enums/molecule.monaco.KeybindingWeight"}},s=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"DataChanged",id:"datachanged",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"onClick",id:"onclick",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,l.kt)("a",{parentName:"p",href:"../namespaces/molecule.model"},"model"),".StatusBarEvent"),(0,l.kt)("p",null,"The activity bar event definition"),(0,l.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,l.kt)("h3",{id:"datachanged"},"DataChanged"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"DataChanged")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"statusBar.data"')),(0,l.kt)("p",null,"Activity bar data changed"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/statusBar.tsx#L36"},"src/model/workbench/statusBar.tsx:36")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onclick"},"onClick"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"onClick")," = ",(0,l.kt)("inlineCode",{parentName:"p"},'"statusBar.onClick"')),(0,l.kt)("p",null,"Selected an activity bar"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/statusBar.tsx#L32"},"src/model/workbench/statusBar.tsx:32")))}d.isMDXComponent=!0}}]);