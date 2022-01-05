"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77239],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84181:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Quick Start",sidebar_label:"Quick Start",sidebar_position:2},c=void 0,s={unversionedId:"quick-start",id:"quick-start",title:"Quick Start",description:"Prerequisites",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/molecule/docs/next/quick-start",editUrl:"https://github.com/DTStack/molecule/edit/main/website/docs/quick-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Quick Start",sidebar_label:"Quick Start",sidebar_position:2},sidebar:"docs",previous:{title:"Overview",permalink:"/molecule/docs/next/overview"},next:{title:"The First Extension",permalink:"/molecule/docs/next/the-first-extension"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Create a Project",id:"create-a-project",children:[],level:2},{value:"Install Molecule",id:"install-molecule",children:[],level:2},{value:"Basic Use",id:"basic-use",children:[],level:2},{value:"Startup Project",id:"startup-project",children:[],level:2},{value:"Use Monaco Editor language pack",id:"use-monaco-editor-language-pack",children:[],level:2}],u={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Node.js version: ",(0,o.kt)("strong",{parentName:"li"},"Node.js 12.13.0 +")),(0,o.kt)("li",{parentName:"ul"},"React.js version: ",(0,o.kt)("strong",{parentName:"li"},"React.js 16.14.0 +")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/en/"},"Yarn")," - Recommend to use ",(0,o.kt)("strong",{parentName:"li"},"Yarn")," as package management"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"use the ",(0,o.kt)("inlineCode",{parentName:"p"},"node -v")," command to view the current Node version. It is recommended to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," on Mac systems to manage multiple versions of Node.js."))),(0,o.kt)("h2",{id:"create-a-project"},"Create a Project"),(0,o.kt)("p",null,"We use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"create-react-app")," scaffolding tool officially recommended by React as an example,\nHere we ",(0,o.kt)("strong",{parentName:"p"},"strongly recommend")," the use of the ",(0,o.kt)("strong",{parentName:"p"},"Typescript")," template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app molecule-demo --template typescript\n")),(0,o.kt)("p",null,"This command will create a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"molecule-demo")," in the current directory and switch to the project folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd molecule-demo\n")),(0,o.kt)("h2",{id:"install-molecule"},"Install Molecule"),(0,o.kt)("p",null,"Then, you need to install the dependency of molecule:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @dtinsight/molecule\n# or\nnpm install @dtinsight/molecule\n")),(0,o.kt)("p",null,"This command will automatically install Molecule's dependencies in the ",(0,o.kt)("inlineCode",{parentName:"p"},"molecule-demo")," project."),(0,o.kt)("h2",{id:"basic-use"},"Basic Use"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.js")," file and replace the contents of the file with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/App.js"',title:'"src/App.js"'},"import React from 'react';\nimport { MoleculeProvider, Workbench } from '@dtinsight/molecule';\nimport '@dtinsight/molecule/esm/style/mo.css';\n\nfunction App() {\n    return (\n        <MoleculeProvider extensions={[]}>\n            <Workbench />\n        </MoleculeProvider>\n    );\n}\n\nexport default App;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," are extensions that need to be customized."),(0,o.kt)("h2",{id:"startup-project"},"Startup Project"),(0,o.kt)("p",null,"Finally, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," command in the terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n# or npm\nnpm run start\n")),(0,o.kt)("p",null,"This command will automatically open the address ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," in the default browser, and you can see the default IDE interface of Molecule."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"molecule",src:n(91172).Z})),(0,o.kt)("h2",{id:"use-monaco-editor-language-pack"},"Use Monaco Editor language pack"),(0,o.kt)("p",null,"To use the language pack of Monaco Editor, you need to use the plug-in ",(0,o.kt)("inlineCode",{parentName:"p"},"monaco-editor-webpack-plugin"),", so here we have to extend the default configuration of ",(0,o.kt)("strong",{parentName:"p"},"Webpack"),".\nFirst, we first install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired")," tool, and then create a ",(0,o.kt)("inlineCode",{parentName:"p"},"config-overrides.js")," file in the project root directory to override the default Webpack configuration. The specific usage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"monaco-editor-webpack-plugin")," plugin is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config-overrides.js"',title:'"config-overrides.js"'},"const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');\n\n/* config-overrides.js */\nmodule.exports = function override(config, env) {\n    //do stuff with the webpack config...\n    config.plugins = [\n        ...config.plugins,\n        new MonacoWebpackPlugin([\n            'javascript',\n            'typescript',\n            'css',\n            'html',\n            'json',\n        ]),\n    ];\n\n    return config;\n};\n")),(0,o.kt)("p",null,"For the complete code example, please check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," project."))}m.isMDXComponent=!0},91172:function(e,t,n){t.Z=n.p+"assets/images/molecule-9591d7bdf72594336b2e05164768c9e6.png"}}]);