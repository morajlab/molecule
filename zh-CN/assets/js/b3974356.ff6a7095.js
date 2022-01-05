"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62372],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73140:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={title:"\u5185\u7f6e\u90e8\u4ef6",sidebar_label:"\u5185\u7f6e\u90e8\u4ef6"},p=void 0,c={unversionedId:"guides/extend-builtin-ui",id:"version-0.9.0-beta.1/guides/extend-builtin-ui",title:"\u5185\u7f6e\u90e8\u4ef6",description:"\u5728 Molecule \u4e2d\uff0c\u6211\u4eec\u57fa\u4e8e 6 \u5927\u6838\u5fc3 UI \u6a21\u5757\uff0c\u9ed8\u8ba4\u5185\u7f6e\u4e86\u5f88\u591a\u5728 IDE Workbench \u4e2d\u5e38\u7528\u7684 UI \u6a21\u5757\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u5feb\u901f\u7684\u6ee1\u8db3\u5f00\u53d1\u8005\u7684\u9700\u6c42\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.9.0-beta.1/guides/extend-builtin-ui.md",sourceDirName:"guides",slug:"/guides/extend-builtin-ui",permalink:"/molecule/zh-CN/docs/0.9.0-beta.1/guides/extend-builtin-ui",editUrl:"https://github.com/DTStack/molecule/edit/main/website/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.9.0-beta.1/guides/extend-builtin-ui.md",tags:[],version:"0.9.0-beta.1",frontMatter:{title:"\u5185\u7f6e\u90e8\u4ef6",sidebar_label:"\u5185\u7f6e\u90e8\u4ef6"},sidebar:"docs",previous:{title:"\u5de5\u4f5c\u53f0",permalink:"/molecule/zh-CN/docs/0.9.0-beta.1/guides/extend-workbench"},next:{title:"\u989c\u8272\u4e3b\u9898",permalink:"/molecule/zh-CN/docs/0.9.0-beta.1/guides/extend-color-theme"}},m=[{value:"\u6d4f\u89c8\u9762\u677f\uff08Explorer)",id:"\u6d4f\u89c8\u9762\u677fexplorer",children:[],level:2},{value:"\u6587\u4ef6\u6811\uff08FolderTree)",id:"\u6587\u4ef6\u6811foldertree",children:[],level:2},{value:"\u7f16\u8f91\u5668\u6811\uff08EditorTree)",id:"\u7f16\u8f91\u5668\u6811editortree",children:[],level:2},{value:"\u641c\u7d22\u9762\u677f\uff08Search)",id:"\u641c\u7d22\u9762\u677fsearch",children:[],level:2},{value:"\u8f93\u51fa\u9762\u677f\uff08Output\uff09",id:"\u8f93\u51fa\u9762\u677foutput",children:[],level:2},{value:"\u95ee\u9898\u9762\u677f\uff08Problems\uff09",id:"\u95ee\u9898\u9762\u677fproblems",children:[],level:2},{value:"\u901a\u77e5\u680f\uff08Notification\uff09",id:"\u901a\u77e5\u680fnotification",children:[],level:2}],s={toc:m};function u(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Molecule \u4e2d\uff0c\u6211\u4eec\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"/molecule/zh-CN/docs/0.9.0-beta.1/guides/extend-workbench"},"6 \u5927\u6838\u5fc3 UI "),"\u6a21\u5757\uff0c\u9ed8\u8ba4\u5185\u7f6e\u4e86\u5f88\u591a\u5728 IDE Workbench \u4e2d\u5e38\u7528\u7684 UI \u6a21\u5757\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u5feb\u901f\u7684\u6ee1\u8db3\u5f00\u53d1\u8005\u7684\u9700\u6c42\u3002\n\u8fd9\u4e9b\u6a21\u5757\u5185\u7f6e\u4e86\u4e00\u7cfb\u5217",(0,o.kt)("strong",{parentName:"p"},"\u670d\u52a1\uff08Service\uff09"),"\uff0c\u5141\u8bb8\u6211\u4eec\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},"Extension")," \u7684\u65b9\u5f0f\u8fdb\u884c\u64cd\u4f5c\u6216\u8005\u6269\u5c55\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"molecule",src:n(24415).Z})),(0,o.kt)("p",null,"\u5982\u56fe: \u76ee\u524d",(0,o.kt)("strong",{parentName:"p"},"\u5185\u7f6e\u90e8\u4ef6"),"\u4e3b\u8981\u5305\u542b ",(0,o.kt)("a",{parentName:"p",href:"#%E6%B5%8F%E8%A7%88%E9%9D%A2%E6%9D%BFexplorer"},"\u6d4f\u89c8\u9762\u677f\uff08Explorer)"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"#%E6%96%87%E4%BB%B6%E6%A0%91foldertree"},"\u6587\u4ef6\u6811\uff08FolderTree)"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"#%E7%BC%96%E8%BE%91%E5%99%A8%E6%A0%91editortree"},"\u7f16\u8f91\u5668\u6811\uff08EditorTree)"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"#%E6%90%9C%E7%B4%A2%E9%9D%A2%E6%9D%BFsearch"},"\u641c\u7d22\u9762\u677f\uff08Search)"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"#%E8%BE%93%E5%87%BA%E9%9D%A2%E6%9D%BFoutput"},"\u8f93\u51fa\u9762\u677f\uff08Output\uff09"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"#%E9%97%AE%E9%A2%98%E9%9D%A2%E6%9D%BFproblems"},"\u95ee\u9898\u9762\u677f\uff08Problems\uff09"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"#%E9%80%9A%E7%9F%A5%E6%A0%8Fnotification"},"\u901a\u77e5\u680f\uff08Notification\uff09)")," \u7b49 ",(0,o.kt)("strong",{parentName:"p"},"7")," \u4e2a\u6a21\u5757\u3002"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u4f7f\u7528\u8fd9\u4e9b\u6a21\u5757\u3002"),(0,o.kt)("h2",{id:"\u6d4f\u89c8\u9762\u677fexplorer"},(0,o.kt)("a",{parentName:"h2",href:"../api/classes/molecule.ExplorerService"},"\u6d4f\u89c8\u9762\u677f\uff08Explorer)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.ExplorerService"},"Explorer")," \u4f5c\u4e3a Workbench \u4e2d\u7684\u4e00\u4e2a\u91cd\u8981\u7684",(0,o.kt)("strong",{parentName:"p"},"\u5bfc\u822a"),"\u6a21\u5757\uff0c\u5b83\u8d1f\u8d23\u5c55\u793a\u5f53\u524d\u5de5\u4f5c\u7684",(0,o.kt)("strong",{parentName:"p"},"\u76ee\u5f55\u4fe1\u606f"),"\uff0c\u4ee5\u53ca\u5f53\u524d\u6b63\u5728",(0,o.kt)("strong",{parentName:"p"},"\u7f16\u8f91\u7684\u6807\u7b7e"),"\uff0c\u4ee5\u53ca\u76f8\u5173\u7684\u6587\u4ef6\u5939\u7b49\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60f3\u81ea\u5b9a\u4e49\u6d4f\u89c8\u9762\u677f ",(0,o.kt)("strong",{parentName:"p"},"Action Bar UI"),"\uff0c\u5219\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"molecule.explore.addAction({\n    id: 'actionId',\n    name: 'actionName',\n    icon: 'add',\n});\n")),(0,o.kt)("p",null,"\u6dfb\u52a0\u65b0\u7684",(0,o.kt)("strong",{parentName:"p"},"\u9762\u677f\u9879"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"molecule.explore.addPanel({\n    id: 'panelId',\n    name: 'panelName',\n    renderPanel: () => <span>Panel Content</span>,\n    toolbar: [],\n});\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.IExplorerPanelItem#renderpanel"},(0,o.kt)("inlineCode",{parentName:"a"},"renderPanel"))," \u4e3a\u81ea\u5b9a\u4e49\u6e32\u67d3\u7684\u9762\u677f\u5185\u5bb9\uff0c",(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.IExplorerPanelItem#toolbar"},(0,o.kt)("inlineCode",{parentName:"a"},"toolbar"))," \u4e3a\u81ea\u5b9a\u4e49\u7684\u5de5\u5177\u680f\u3002"),(0,o.kt)("p",null,"\u76d1\u542c Explorer \u7684",(0,o.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \u76d1\u542c\u9762\u677f Toolbar \u5355\u51fb\u4e8b\u4ef6\nmolecule.explore.onPanelToolbarClick(\n    (panel: IExplorerPanelItem, toolbarId: string) => {\n        // do something\n    }\n);\n\n// \u79fb\u9664\u9762\u677f\nmolecule.explore.onRemovePanel((panel: IExplorerPanelItem) => {\n    // do something\n});\n")),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u6211\u4eec\u987a\u5e26\u5185\u7f6e\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"Outline")," \u6a21\u5757\uff0c\u4e0d\u8fc7\u60f3\u8981\u8ba9 Outline \u5de5\u4f5c\u8d77\u6765\uff0c\u5219\u9700\u8981\u914d\u5408\u5176\u4ed6\u7684",(0,o.kt)("strong",{parentName:"p"},"\u8bed\u8a00"),"\u5e93\u6765\u5b9e\u73b0\u3002"),(0,o.kt)("h2",{id:"\u6587\u4ef6\u6811foldertree"},(0,o.kt)("a",{parentName:"h2",href:"../api/interfaces/molecule.IFolderTreeService"},"\u6587\u4ef6\u6811\uff08FolderTree)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IFolderTreeService"},"FolderTree")," \u662f ",(0,o.kt)("a",{parentName:"p",href:"#%E6%B5%8F%E8%A7%88%E9%9D%A2%E6%9D%BFexplorer"},"Explorer")," \u4e2d\u8d1f\u8d23",(0,o.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u6811"),"\u5c55\u793a\u7684\u5b50\u6a21\u5757\uff0c\u9ed8\u8ba4\u5185\u7f6e\u4e86\u521b\u5efa",(0,o.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u5939"),"\uff0c\u521b\u5efa",(0,o.kt)("strong",{parentName:"p"},"\u6587\u4ef6"),"\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5237\u65b0"),"\u7b49\u9ed8\u8ba4\u4e8b\u4ef6\u3002"),(0,o.kt)("p",null,"\u7ed9 FolderTree ",(0,o.kt)("strong",{parentName:"p"},"\u6dfb\u52a0/\u5220\u9664\u8282\u70b9"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Add the tree data into folderTree\nmolecule.folderTree.add({\n     id: 0,\n    name: "Molecule-Demo",\n    fileType: "RootFolder",\n    location: "Molecule-Demo",\n    isLeaf: false,\n    data: "",\n    children: [{\n            id: 1,\n            name: "test.js",\n            location: "Molecule-Demo/test.js",\n            fileType: "File",\n            isLeaf: true,\n            data: {},\n        }]\n    }]\n})\n\n// Remove the tree node which id is 0\nmolecule.folderTree.remove(0);\n')),(0,o.kt)("p",null,"\u76d1\u542c FolderTree \u7684",(0,o.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Listen to the create node event\nmolecule.folderTree.onCreate((type: FileType, id?: UniqueId) => {\n    // do something\n});\n\n// Listen to the remove node event\nmolecule.folderTree.onRemove((id?: UniqueId) => {\n    // do something\n});\n\n// Listen to the select node event\nmolecule.folderTree.onSelectFile((file: IFolderTreeNodeProps) => {\n    // do something\n});\n")),(0,o.kt)("p",null,"\u66f4\u591a\u5173\u4e8e FolderTree \u7684\u4f7f\u7528\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.FolderTreeService"},"API")," \u6587\u6863\u3002"),(0,o.kt)("h2",{id:"\u7f16\u8f91\u5668\u6811editortree"},(0,o.kt)("a",{parentName:"h2",href:"../api/interfaces/molecule.IEditorTreeService"},"\u7f16\u8f91\u5668\u6811\uff08EditorTree)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IEditorTreeService"},"EditorTree")," \u662f ",(0,o.kt)("a",{parentName:"p",href:"#%E6%B5%8F%E8%A7%88%E9%9D%A2%E6%9D%BFexplorer"},"Explorer")," \u4e2d\u8d1f\u8d23\u5c55\u793a\u5f53\u524d\u6b63\u5728\u5de5\u4f5c\u7684\u4e00\u4e9b",(0,o.kt)("strong",{parentName:"p"},"\u7f16\u8f91\u6807\u7b7e"),"\u3002Molecule \u76ee\u524d\u5e76\u672a\u63d0\u4f9b\u592a\u591a\u7684 API \u6765\u652f\u6301\u6269\u5c55\u8fd9\u4e2a UI, \u66f4\u591a\u8fd8\u662f\u4e00\u4e9b\u57fa\u672c\u7684",(0,o.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u5904\u7406"),"\u3002"),(0,o.kt)("p",null,"\u76d1\u542c EditorTree \u57fa\u672c\u64cd\u4f5c\u7684",(0,o.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Listen to the tab close event\nmolecule.editorTree.onClose((tabId: UniqueId, groupId: UniqueId) => {\n    // do something\n});\n\n// Listen to the tab close event\nmolecule.editorTree.onSelect((tabId: UniqueId, groupId: UniqueId) => {\n    // do something\n});\n")),(0,o.kt)("h2",{id:"\u641c\u7d22\u9762\u677fsearch"},(0,o.kt)("a",{parentName:"h2",href:"../api/interfaces/molecule.ISearchService#setresult"},"\u641c\u7d22\u9762\u677f\uff08Search)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.ISearchService#setresult"},"Search")," \u662f\u4e00\u4e2a\u5185\u7f6e\u7684",(0,o.kt)("strong",{parentName:"p"},"\u641c\u7d22\u9762\u677f"),"\uff0c\u5b83\u5305\u542b\u4e00\u4e9b\u5e38\u89c1\u7684",(0,o.kt)("strong",{parentName:"p"},"\u641c\u7d22"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"\u66ff\u6362")," \u7b49 UI \u529f\u80fd\u3002Molecule \u5185\u7f6e\u7684\u641c\u7d22\u6a21\u5757\u53ea\u662f\u57fa\u7840\u7684 UI \u6a21\u5757\uff0c\u5177\u4f53\u7684",(0,o.kt)("strong",{parentName:"p"},"\u641c\u7d22"),"\uff0c\u6216\u8005",(0,o.kt)("strong",{parentName:"p"},"\u66ff\u6362"),"\u529f\u80fd\uff0c\u9700\u8981\u5f00\u53d1\u8005\u901a\u8fc7\u4e00\u4e9b API \u6765\u5b8c\u6210\uff1a"),(0,o.kt)("p",null,"\u76d1\u542c",(0,o.kt)("strong",{parentName:"p"},"\u641c\u7d22\u8f93\u5165\u63a7\u4ef6"),"\u7684\u8f93\u5165\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Listen to the search input changed\nmolecule.search.onChange((tabId: UniqueId, groupId: UniqueId) => {\n    // do something\n});\n\n// Listen to the event about replace all text in result\nmolecule.search.onReplaceAll((tabId: UniqueId, groupId: UniqueId) => {\n    // do something\n});\n")),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"setResult")," \u6765\u5c55\u793a",(0,o.kt)("strong",{parentName:"p"},"\u641c\u7d22\u7ed3\u679c"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Display the result in panel\nmolecule.search.setResult([]);\n")),(0,o.kt)("h2",{id:"\u8f93\u51fa\u9762\u677foutput"},(0,o.kt)("a",{parentName:"h2",href:"../api/interfaces/molecule.IPanelService"},"\u8f93\u51fa\u9762\u677f\uff08Output\uff09")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IPanelService#appendoutput"},"Output")," \u9762\u677f\u76ee\u524d\u5e76\u672a\u63d0\u4f9b\u72ec\u7acb\u7684 API ",(0,o.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5bf9\u8c61"),"\uff0c\u800c\u662f\u5c06\u5b83\u5c01\u88c5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IPanelService"},"Panel \u670d\u52a1\u5bf9\u8c61"),"\u4e2d\u4e86\u3002\u6240\u4ee5\u5982\u679c\u60f3\u8981\u66f4\u65b0 ",(0,o.kt)("strong",{parentName:"p"},"Output")," \u7ec4\u4ef6\u4e2d\u7684\u5185\u5bb9\uff0c\u5e94\u8be5\u4f7f\u7528\u5982\u4e0b API\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"molecule.panel.appendOutput('typing...'); // Append the content into Output\nmolecule.panel.cleanOutput(); // Clean the Output\n")),(0,o.kt)("p",null,"\u5173\u4e8e\u641c\u7d22\u9762\u677f\u7684\u8be6\u7ec6\u4f7f\u7528\uff0c\u6211\u4eec\u53ef\u4ee5\u53c2\u8003\u4e00\u4e0b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/blob/main/packages/molecule-demo/src/extensions/theFirstExtension/searchPaneController.ts"},"molecule-example")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Output")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"Problems")," \u540c\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"Panel")," \u7684\u5185\u7f6e UI \u7ec4\u4ef6\uff0c\u76ee\u524d\u6211\u4eec\u5e76\u6ca1\u6709\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"Output")," \u9762\u677f\u63d0\u4f9b\u72ec\u7acb\u7684",(0,o.kt)("strong",{parentName:"p"},"\u670d\u52a1\uff08Service\uff09"),"\u5bf9\u8c61, \u4ecd\u7136\u9700\u8981\u501f\u52a9 ",(0,o.kt)("inlineCode",{parentName:"p"},"molecule.panel")," \u670d\u52a1\u6765\u8fdb\u884c\u64cd\u4f5c\u3002"))),(0,o.kt)("h2",{id:"\u95ee\u9898\u9762\u677fproblems"},(0,o.kt)("a",{parentName:"h2",href:"../api/interfaces/molecule.IProblemsService"},"\u95ee\u9898\u9762\u677f\uff08Problems\uff09")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IProblemsService"},"Problems")," \u53ef\u4ee5\u7528\u6765\u5c55\u793a\u5de5\u4f5c\u533a\u4e2d\u7684\u4e00\u4e9b",(0,o.kt)("strong",{parentName:"p"},"\u95ee\u9898"),"\uff0c\u4f8b\u5982",(0,o.kt)("strong",{parentName:"p"},"\u8bed\u6cd5\u9519\u8bef"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570\u95ee\u9898"),"\u7b49\u3002\n\u548c ",(0,o.kt)("a",{parentName:"p",href:"#%E8%BE%93%E5%87%BA%E9%9D%A2%E6%9D%BFoutput"},"Output")," \u4e00\u6837\uff0c\u540c\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"Panel")," \u7684\u5185\u7f6e\u90e8\u4ef6\u3002\u4f46\u4e0d\u540c\u7684\u662f\uff0c\u6211\u4eec\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"Problems")," \u63d0\u4f9b\u4e86\u72ec\u7acb\u7684\u670d\u52a1\u7684\u5bf9\u8c61\uff0c\u6240\u6709\u9488\u5bf9 Problems \u64cd\u4f5c\u7684 API \u662f\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Add problems Items\nmolecule.problems.add({\n    id: 1,\n    name: 'text.tsx',\n    isLeaf: false,\n    value: {\n        code: 'text.tsx',\n        message: 'Folder',\n        startLineNumber: 0,\n        startColumn: 1,\n        endLineNumber: 0,\n        endColumn: 1,\n        status: 1,\n    },\n    children: [],\n});\n\n// Remove the problems item which the id is 1\nmolecule.problems.remove(1);\n")),(0,o.kt)("p",null,"\u6dfb\u52a0 Problems \u9879\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"add"),"\uff0c \u79fb\u9664\u5219\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"remove"),"\u3002"),(0,o.kt)("h2",{id:"\u901a\u77e5\u680fnotification"},(0,o.kt)("a",{parentName:"h2",href:"../api/interfaces/molecule.INotificationService"},"\u901a\u77e5\u680f\uff08Notification\uff09")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.INotificationService"},"Notification")," \u662f\u5185\u7f6e\u7684\u901a\u77e5\u680f UI \u90e8\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u5b83\u5b9e\u73b0\u5e38\u89c1\u7684",(0,o.kt)("strong",{parentName:"p"},"\u63d0\u793a"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"\u8b66\u544a"),"\u7b49\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u6dfb\u52a0\u901a\u77e5\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import molecule from '@dtinsight/molecule';\nimport { INotificationItem } from '@dtinsight/molecule/esm/model';\n\nconst notification: INotificationItem = {\n    id: '1',\n    status: ,\n    render: () => <p>Test notification!</p>\n};\n// Add the notification\nmolecule.notification.add(notification);\n\n// Remove the notification\nmolecule.notification.remove(notification.id);\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u901a\u77e5\u5185\u5bb9"),"\u9700\u8981\u5f00\u53d1\u8005\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," \u51fd\u6570\u6765\u81ea\u5b9a\u4e49\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5c55\u793a/\u9690\u85cf")," \u901a\u77e5\u9762\u677f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import molecule from '@dtinsight/molecule';\n// Display or hide the Notification pane\nmolecule.notification.toggleNotification();\n")))}u.isMDXComponent=!0},24415:function(e,t,n){t.Z=n.p+"assets/images/builtin-ui-8652dcc7e534a4f586dd3d328b5fa879.png"}}]);