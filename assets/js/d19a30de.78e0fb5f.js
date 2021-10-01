"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[609],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?o.createElement(f,a(a({ref:t},l),{},{components:r})):o.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2708:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],p={sidebar_position:1},s="Introduction",c={unversionedId:"specs/mobile-specs/introduction",id:"specs/mobile-specs/introduction",isDocsHomePage:!1,title:"Introduction",description:"Icons for (iOS/Android)",source:"@site/docs/specs/mobile-specs/introduction.md",sourceDirName:"specs/mobile-specs",slug:"/specs/mobile-specs/introduction",permalink:"/realworld/docs/specs/mobile-specs/introduction",editUrl:"https://github.com/gothinkster/realworld/tree/main/docs/docs/docs/specs/mobile-specs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/realworld/docs/specs/frontend-specs/api"},next:{title:"Resources",permalink:"/realworld/docs/community/resources"}},l=[{value:"Icons for (iOS/Android)",id:"icons-for-iosandroid",children:[]},{value:"Using the hosted API",id:"using-the-hosted-api",children:[]},{value:"Styles/Templates",id:"stylestemplates",children:[]}],u={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h3",{id:"icons-for-iosandroid"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/gothinkster/realworld/tree/master/spec/mobile_icons"},"Icons for (iOS/Android)")),(0,i.kt)("h3",{id:"using-the-hosted-api"},"Using the hosted API"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To fix performance issues and the presence of NSFW content on the current API, we encourage you to use the new temporary API : ",(0,i.kt)("a",{parentName:"p",href:"https://realworld-temp-api.herokuapp.com/api%60"},"https://realworld-temp-api.herokuapp.com/api`"),"\nPlease keep in mind we'll soon move back to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://conduit.productionready.io/api"))),(0,i.kt)("p",null,"API URL : ",(0,i.kt)("a",{parentName:"p",href:"https://realworld-temp-api.herokuapp.com/api"},"https://realworld-temp-api.herokuapp.com/api"),(0,i.kt)("br",{parentName:"p"}),"\n","SWAGGER : ",(0,i.kt)("a",{parentName:"p",href:"https://realworld-temp-api.herokuapp.com/api-docs"},"https://realworld-temp-api.herokuapp.com/api-docs")),(0,i.kt)("h3",{id:"stylestemplates"},"Styles/Templates"),(0,i.kt)("p",null,"Unfortunately, there isn't a common way for us to reuse & share styles/templates for cross-platform mobile apps."),(0,i.kt)("p",null,"Instead, we recommend using the Medium.com ",(0,i.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/medium/id828256236?mt=8"},"iOS")," and ",(0,i.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.medium.reader&hl=en"},"Android"),' apps as a "north star" regarding general UI functionality/layout, but try not to go too overboard otherwise it will unnecessarily complicate your codebase (in other words, ',(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/KISS_principle"},"KISS")," :)"))}d.isMDXComponent=!0}}]);