"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21218],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69204:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var i=n(83117),o=n(80102),a=(n(67294),n(3905)),r=["components"],s={title:"Settings",sidebar_label:"Settings"},c=void 0,l={unversionedId:"guides/extend-settings",id:"guides/extend-settings",title:"Settings",description:"Molecule has some basic settings built-in, such as the basic settings of the editor (Monaco Editor), color theme (colorTheme), localized language (locale), etc.",source:"@site/docs/guides/extend-settings.md",sourceDirName:"guides",slug:"/guides/extend-settings",permalink:"/molecule/docs/next/guides/extend-settings",editUrl:"https://github.com/DTStack/molecule/edit/main/website/docs/guides/extend-settings.md",tags:[],version:"current",frontMatter:{title:"Settings",sidebar_label:"Settings"},sidebar:"docs",previous:{title:"i18n",permalink:"/molecule/docs/next/guides/extend-locales"},next:{title:"Icon",permalink:"/molecule/docs/next/guides/icons"}},p=[{value:"Open settings",id:"open-settings",children:[],level:2},{value:"SettingsService",id:"settingsservice",children:[],level:2},{value:"Custom configuration items",id:"custom-configuration-items",children:[],level:2}],d={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Molecule has some ",(0,a.kt)("strong",{parentName:"p"},"basic settings")," built-in, such as the basic settings of the ",(0,a.kt)("strong",{parentName:"p"},"editor (Monaco Editor)"),", ",(0,a.kt)("strong",{parentName:"p"},"color theme (colorTheme)"),", ",(0,a.kt)("strong",{parentName:"p"},"localized language (locale)"),", etc."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Open Settings",src:n(34666).Z})),(0,a.kt)("p",null,"The above picture shows the configuration items ",(0,a.kt)("inlineCode",{parentName:"p"},"colorTheme"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"editor.renderWhitespace"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"editor.tabSize"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"editor.fontSize"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"locale"),". Users can modify the configuration online according to their needs. Among these configuration items, ",(0,a.kt)("inlineCode",{parentName:"p"},"colorTheme")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"locale")," need to be configured according to the current extended support."),(0,a.kt)("p",null,"In addition to supporting online configuration modification, Molecule supports developers to ",(0,a.kt)("strong",{parentName:"p"},"customize")," configuration items through ",(0,a.kt)("a",{parentName:"p",href:"./extension"},"extensions"),"."),(0,a.kt)("h2",{id:"open-settings"},"Open settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The first and fastest way is to use the shortcut key ",(0,a.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + ,"),";")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The second way is to use the ",(0,a.kt)("strong",{parentName:"p"},"QuickAccess")," panel, open the access panel with the shortcut key ",(0,a.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + Shift + P"),", and search for ",(0,a.kt)("strong",{parentName:"p"},"settings"),";")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The last way is to access the ",(0,a.kt)("strong",{parentName:"p"},"settings menu")," on the ",(0,a.kt)("strong",{parentName:"p"},"ActivityBar"),"."))),(0,a.kt)("h2",{id:"settingsservice"},"SettingsService"),(0,a.kt)("p",null,"Molecule has a built-in ",(0,a.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.ISettingsService"},"SettingsService")," object. In addition to extended settings, in some scenarios, developers can use it to do some basic operations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Get the setting configuration object\nmolecule.settings.getSettings();\n\n// Update settings configuration\nmolecule.settings.update(settings: ISettings);\n\n")),(0,a.kt)("h2",{id:"custom-configuration-items"},"Custom configuration items"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"All code demos in this part are based on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," project in ",(0,a.kt)("a",{parentName:"p",href:"../quick-start"},"Quick Start"),"."))),(0,a.kt)("p",null,"Molecule supports you to extend the current ",(0,a.kt)("strong",{parentName:"p"},"configuration items")," to meet your ",(0,a.kt)("strong",{parentName:"p"},"customized")," requirements. Let's see an example together!"),(0,a.kt)("p",null,"If you want to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"project.id")," field to the configuration file as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "colorTheme": "Default Dark+",\n    "editor.renderWhitespace": "none",\n    "editor.tabSize": 4,\n    "editor.fontSize": 12,\n    "locale": "zh-CN",\n    "project.id": 1\n}\n')),(0,a.kt)("p",null,"First, define a ",(0,a.kt)("inlineCode",{parentName:"p"},"SettingsExtension")," object, and define the ",(0,a.kt)("inlineCode",{parentName:"p"},"project")," extension field you want to add under the ",(0,a.kt)("inlineCode",{parentName:"p"},"customSettings")," object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const customSettings = {\n    project: {\n        id: '1',\n    },\n};\nexport class SettingsExtension implements IExtension {\n    id: string = 'ExtendSettings';\n    name: string = 'Extend Settings';\n\n    appendSettingsItems() {\n        // Append the extended items\n        molecule.settings.append(customSettings);\n    }\n\n    handleSettingsChange() {\n        const panel = molecule.panel;\n        // Listen to the Settings change\n        molecule.settings.onChangeSettings((settings: any) => {\n            alert('Settings changed:' + settings.project?.id);\n            // do something\n        });\n    }\n\n    activate(extensionCtx: IExtensionService): void {\n        this.appendSettingsItems();\n        this.handleSettingsChange();\n    }\n\n    dispose(extensionCtx: IExtensionService): void {}\n}\n")),(0,a.kt)("p",null,"Then, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"onChangeSettings")," method to ",(0,a.kt)("strong",{parentName:"p"},"monitor")," the changes of the ",(0,a.kt)("strong",{parentName:"p"},"configuration items"),", and then do the corresponding processing. The complete example refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/settings"},"molecule-example"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Currently, Molecule does not cache user-modified settings, so after reloading the page, these configuration information will be lost. If you want to avoid this situation, you can use a solution such as localeStorage to store the user's configuration information, and then use ",(0,a.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.ISettingsService"},"SettingsService")," to update the configuration information."))))}m.isMDXComponent=!0},34666:function(e,t,n){t.Z=n.p+"assets/images/extend-settings-03a739abf5a18d390d0450ac5e75f59b.png"}}]);