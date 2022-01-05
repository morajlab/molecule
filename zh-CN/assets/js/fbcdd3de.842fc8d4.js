"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14004],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(r),s=l,f=m["".concat(c,".").concat(s)]||m[s]||p[s]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function s(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59229:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var n=r(83117),l=r(80102),i=(r(67294),r(3905)),a=["components"],o={id:"molecule.model.ISidebar",title:"Interface: ISidebar",sidebar_label:"ISidebar",custom_edit_url:null},c=void 0,d={unversionedId:"api/interfaces/molecule.model.ISidebar",id:"api/interfaces/molecule.model.ISidebar",title:"Interface: ISidebar",description:"molecule.model.ISidebar",source:"@site/docs/api/interfaces/molecule.model.ISidebar.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.model.ISidebar",permalink:"/molecule/zh-CN/docs/next/api/interfaces/molecule.model.ISidebar",editUrl:null,tags:[],version:"current",frontMatter:{id:"molecule.model.ISidebar",title:"Interface: ISidebar",sidebar_label:"ISidebar",custom_edit_url:null},sidebar:"api",previous:{title:"ISettings",permalink:"/molecule/zh-CN/docs/next/api/interfaces/molecule.model.ISettings"},next:{title:"ISidebarPane",permalink:"/molecule/zh-CN/docs/next/api/interfaces/molecule.model.ISidebarPane"}},u=[{value:"Implemented by",id:"implemented-by",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"current",id:"current",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"panes",id:"panes",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,i.kt)("a",{parentName:"p",href:"../namespaces/molecule.model"},"model"),".ISidebar"),(0,i.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../classes/molecule.model.SidebarModel"},(0,i.kt)("inlineCode",{parentName:"a"},"SidebarModel")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"current"},"current"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"current"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UniqueId")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/655d7d85/src/model/workbench/sidebar.ts#L10"},"src/model/workbench/sidebar.ts:10")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"panes"},"panes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"panes"),": ",(0,i.kt)("a",{parentName:"p",href:"molecule.model.ISidebarPane"},(0,i.kt)("inlineCode",{parentName:"a"},"ISidebarPane")),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/655d7d85/src/model/workbench/sidebar.ts#L11"},"src/model/workbench/sidebar.ts:11")))}m.isMDXComponent=!0}}]);