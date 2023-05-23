"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),f=n,u=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return a?r.createElement(u,o(o({ref:t},d),{},{components:a})):r.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},27031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(83117),n=(a(67294),a(3905));const i={sidebar_label:"Overview",sidebar_position:2,hide_table_of_contents:!1},o="Overview",l={unversionedId:"greenfield/design/overview-x",id:"greenfield/design/overview-x",title:"Overview",description:"This section of BNB Greenfield documentation describes the general principles and considerations for the design of BNB Greenfield. It covers the architecture and functionality analysis. Although the true model innovation is at the cross-chain with BSC, the unique storage fundamentals are also important to highlight.",source:"@site/docs/greenfield/design/overview-x.md",sourceDirName:"greenfield/design",slug:"/greenfield/design/overview-x",permalink:"/docs/greenfield/design/overview-x",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/greenfield/design/overview-x.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Overview",sidebar_position:2,hide_table_of_contents:!1}},s={},c=[{value:"Table of Content",id:"table-of-content",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This section of BNB Greenfield documentation describes the general principles and considerations for the design of BNB Greenfield. It covers the architecture and functionality analysis. Although the true model innovation is at the cross-chain with BSC, the unique storage fundamentals are also important to highlight."),(0,n.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/greenfield/design/design-principles"},"Design Principles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/greenfield/design/assumptions"},"Assumptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/greenfield/design/architecture"},"The Architecture in General"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"architecture#greenfield-core"},"Greenfield Core")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"architecture#bnb-greenfield-dapps"},"BNB Greenfield dApps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"architecture#the-cross-chain-with-bsc"},"The Cross-Chain with BSC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"architecture#the-trinity"},"The Trinity")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/greenfield/design/greenfield-core"},"BNB Greenfield Core"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"greenfield-core#the-bnb-greenfield-blockchain"},"The BNB Greenfield Blockchain")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"greenfield-core#the-storage-providers-sps"},"The Storage Providers, SPs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"greenfield-core#the-pair-synergy"},"The Pair Synergy")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/greenfield/design/data-storage"},"The Greenfield Data Storage"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-storage#data-with-consensus"},"Data with Consensus"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-storage#accounts-and-balance"},"Accounts and Balance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-storage#validator-and-sp-metadata"},"Validator and SP Metadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-storage#storage-metadata"},"Storage Metadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-storage#permission-metadata"},"Permission Metadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-storage#billing-metadata"},"Billing Metadata")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-storage#off-chain-payload-object-data-storage"},"Off-Chain Payload Object Data Storage"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-storage#primary-and-secondary-sps"},"Primary and Secondary SPs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"data-storage#data-redundancy"},"Data Redundancy")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/greenfield/design/storage-economics"},"Storage Economics and Its Primitives"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"storage-economics#account-creation"},"Account Creation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"storage-economics#data-object-creation"},"Data Object Creation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"storage-economics#data-storage"},"Data Storage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"storage-economics#data-read-and-download"},"Data Read and Download")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"storage-economics#permissions-and-group"},"Permissions and Group")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"storage-economics#fees-and-payments"},"Fees and Payments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"storage-economics#data-integrity-and-availability-challenge"},"Data Integrity and Availability Challenge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"storage-economics#data-delete"},"Data Delete")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/greenfield/design/economy-of-data-assets"},"Economy of Data Assets"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"economy-of-data-assets#cross-chain-with-bsc"},"Cross-Chain with BSC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"economy-of-data-assets#framework"},"Framework")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"economy-of-data-assets#communication-layer"},"Communication Layer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"economy-of-data-assets#resource-mirror-layer"},"Resource Mirror Layer"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"economy-of-data-assets#resource-entity-mirror"},"Resource Entity Mirror")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"economy-of-data-assets#cross-chain-operating-primitives"},"Cross-Chain Operating Primitives")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"not-end-ack#not-ending-for-the-design"},'"Not" Ending for the Design'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"not-end-ack#acknowledgement"},"Acknowledgement"))))))}m.isMDXComponent=!0}}]);