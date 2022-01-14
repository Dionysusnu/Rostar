"use strict";(self.webpackChunkrostar_docs=self.webpackChunkrostar_docs||[]).push([[379],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},896:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={sidebar_position:2},c="Regular use",s={unversionedId:"Project tutorial/regularUse",id:"Project tutorial/regularUse",title:"Regular use",description:"The regular work cycle in a fully managed Rojo project generally involves the following steps:",source:"@site/docs/Project tutorial/regularUse.mdx",sourceDirName:"Project tutorial",slug:"/Project tutorial/regularUse",permalink:"/Rostar/docs/Project tutorial/regularUse",editUrl:"https://github.com/tacheometry/Rostar/tree/main/packages/create-docusaurus/templates/shared/docs/Project tutorial/regularUse.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Project setup",permalink:"/Rostar/docs/Project tutorial/projectSetup"},next:{title:"Usage with roblox-ts",permalink:"/Rostar/docs/Project tutorial/roblox-ts"}},p=[{value:"Extracting instances from a place",id:"extracting-instances-from-a-place",children:[{value:"Extracting models only",id:"extracting-models-only",children:[],level:3},{value:"Extracting scripts only",id:"extracting-scripts-only",children:[],level:3}],level:2},{value:"Building the place file",id:"building-the-place-file",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"regular-use"},"Regular use"),(0,o.kt)("p",null,"The regular work cycle in a fully managed Rojo project generally involves the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Save the place file"),(0,o.kt)("li",{parentName:"ol"},"Unpack the place file into different models"),(0,o.kt)("li",{parentName:"ol"},"Build or serve the place file with Rojo"),(0,o.kt)("li",{parentName:"ol"},"Repeat")),(0,o.kt)("p",null,"With Rostar, this process is the same, but is much simpler to execute."),(0,o.kt)("h2",{id:"extracting-instances-from-a-place"},"Extracting instances from a place"),(0,o.kt)("p",null,"To extract models and/or scripts from a place file, the following command is used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rostar unpack ./Path_To_Place_File.rbxl\n")),(0,o.kt)("p",null,"By default, the unpack command generates a folder structure that tries to replicate the structure of the Roblox DataModel. There are two folders - one for scripts and one for model files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"assets/\n    Workspace/\n        SomeFolder/\n            AnotherFolder/\n                ModelA.rbxm\n                ModelB.rbxm\n    ServerStorage/\n        SomeModel.rbxm\n    ...\n\nDataModel/\n    ServerScriptService/\n        Code/\n            init.server.lua\n            someModule.lua\n    ReplicatedStorage/\n        Shared/\n            someModule.lua\n    ServerStorage/\n        someModule.lua\n    ...\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By using ",(0,o.kt)("inlineCode",{parentName:"p"},"--assets-directory DataModel")," as an argument to the command, scripts and model files can be in the same base directory."))),(0,o.kt)("h3",{id:"extracting-models-only"},"Extracting models only"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rostar unpack ./Path_To_Place_File.rbxl --no-lua\n")),(0,o.kt)("p",null,"If Rostar is only used for extracting models, ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-overwrite-project-file")," should be used as well for preserving the existing script paths. Edits to the project file might be needed if new directories are added."),(0,o.kt)("h3",{id:"extracting-scripts-only"},"Extracting scripts only"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rostar unpack ./Path_To_Place_File.rbxl --no-models\n")),(0,o.kt)("h2",{id:"building-the-place-file"},"Building the place file"),(0,o.kt)("p",null,"The place file can be generated by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rostar pack OutputPlaceFile.rbxl\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"rostar pack")," can be run by itself if a file named after the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property from the project file should be outputted."))),(0,o.kt)("p",null,"This is virtually equivalent to running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rojo build --output OutputPlaceFile.rbxl\n")))}d.isMDXComponent=!0}}]);