"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2076],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),f=r,m=h["".concat(l,".").concat(f)]||h[f]||u[f]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},99409:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(83117),r=(a(67294),a(3905));const i={sidebar_label:"Validators FAQs",hide_table_of_contents:!1},o="BNB Greenfield - Validators FAQs",s={unversionedId:"greenfield/faqs/validators",id:"greenfield/faqs/validators",title:"BNB Greenfield - Validators FAQs",description:"What is Greenfield?",source:"@site/docs/greenfield/faqs/validators.md",sourceDirName:"greenfield/faqs",slug:"/greenfield/faqs/validators",permalink:"/docs/greenfield/faqs/validators",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/greenfield/faqs/validators.md",tags:[],version:"current",frontMatter:{sidebar_label:"Validators FAQs",hide_table_of_contents:!1}},l={},d=[{value:"What is Greenfield?",id:"what-is-greenfield",level:3},{value:"What is the connection between validators and Storage Providers?",id:"what-is-the-connection-between-validators-and-storage-providers",level:3},{value:"What consensus mechanism does BNB Greenfield have?",id:"what-consensus-mechanism-does-bnb-greenfield-have",level:3},{value:"What are hardware requirements of running a validator node?",id:"what-are-hardware-requirements-of-running-a-validator-node",level:3},{value:"How do validators earn money with BNB Greenfield?",id:"how-do-validators-earn-money-with-bnb-greenfield",level:3},{value:"Explain the Tokenomics of BNB Greenfield",id:"explain-the-tokenomics-of-bnb-greenfield",level:3},{value:"Don&#39;t see your question?",id:"dont-see-your-question",level:3}],c={toc:d},h="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bnb-greenfield---validators-faqs"},"BNB Greenfield - Validators FAQs"),(0,r.kt)("h3",{id:"what-is-greenfield"},"What is Greenfield?"),(0,r.kt)("p",null,"Greenfield is a protocol that provides core primitives, enabling a programmable, trustless decentralised storage network, parallel and interchangeable to traditional cloud storage services."),(0,r.kt)("h3",{id:"what-is-the-connection-between-validators-and-storage-providers"},"What is the connection between validators and Storage Providers?"),(0,r.kt)("p",null,"Greenfield validators and Storage Providers (SP) form a pair synergy to provide the whole storage service, but are separated from each other. The Greenfield validators are responsible for generating Greenfield blocks, maintaining the Greenfield blockchain security, challenging the data availability, and maintaining cross-chain communication; while the Storage Providers are responsible for storing the data objects and responding to downloading requests. There is no strong binding relationship between them, although the same organization can play two roles at the same time."),(0,r.kt)("p",null,"Although validators can potentially maintain a meaningful and healthy number of storage providers, there is enough incentive for the validators to manage a reasonable number of non-affiliated SPs."),(0,r.kt)("h3",{id:"what-consensus-mechanism-does-bnb-greenfield-have"},"What consensus mechanism does BNB Greenfield have?"),(0,r.kt)("p",null,"As Proof-of-Stake is adopted in Greenfield, there will be a founding validator set in the genesis state. Validators can self-bond, meaning they can delegate BNB to themselves, and they can also receive delegations from any other BNB holders. These bonded BNB acts as collateral and cause each delegate, including validators, to have \u201cskin in the game\u201d so to speak. If any equivocation or byzantine behavior by a validator were to be committed, the validator would be slashed a predefined amount of bonded stake. The minimum self-delegated amount is 2,000 BNB. These validators deposit their BNBs on a BSC smart contract, which would be locked as their stakes. The new validator can be voted by the majority of the current validators to join in and gets elected as the active validator based on its delegation size."),(0,r.kt)("h3",{id:"what-are-hardware-requirements-of-running-a-validator-node"},"What are hardware requirements of running a validator node?"),(0,r.kt)("p",null,'Processing transactions is mostly CPU bound. However BNB Greenfield validators also have the responsibility to perform data availability challenges across the SPs.\nTherefore we recommend running CPU optimized servers. Directly facing internet (public IP, no NAT) 8 cores CPU 16GB of RAM 500 SSD storage"'),(0,r.kt)("h3",{id:"how-do-validators-earn-money-with-bnb-greenfield"},"How do validators earn money with BNB Greenfield?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Staking Reward:")," Validators will receive transaction fees as the staking reward. The rewards will be distributed passively. This is different from BNB Beacon Chain, where the system will distribute the rewards automatically. Validators can submit withdrawal requests to get all the up-to-date transaction rewards, and when validators change commission rates or quit, all the transaction rewards that are not withdrawn will also be distributed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Relayer Reward:")," Greenfield validators also have the obligation to run the relayer system for cross-chain communication with BSC. The package deliverer will get a fixed ratio of the relay fee as a reward. There are multiple Greenfield relayers and they may compete to submit the aggregated multi-signed packages onto the Greenfield blockchain and BSC. To avoid racing transactions caused by the competition, which wastes gas, the relayers are rotated to relay transactions, e.g. taking shifts every 10 minutes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Block Building Reward:")," Every transaction in BNB Greenfield requires gas fees to be paid by the user and distributed among the Greenfield validators to write the metadata on-chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Challenge Reward:")," The Greenfield validators have the responsibility to verify the data availability from the SPs. They form a voting committee to execute this task by the incentive of fees and potential fines (slashes) on SPs.")),(0,r.kt)("h3",{id:"explain-the-tokenomics-of-bnb-greenfield"},"Explain the Tokenomics of BNB Greenfield"),(0,r.kt)("p",null,"BNB Greenfield uses BNB token as the utility token. There is a native cross-chain bridge between the Greenfield blockchain and BNB Smart Chain (BSC). The initial BNB will be locked on BSC and re-minted on Greenfield. BNB and data operation primitives can flow between Greenfield and BSC. Thus, total circulation of BNB will stay unchanged as it is now but flow among BNB Beacon Chain, BSC, and Greenfield."),(0,r.kt)("p",null,"One of the unique benefits of the BNB token is that it has limited supply, which means no one can create more BNB tokens, just to prop their balance sheet. Moreover, BNB token is also deflationary and is being periodically burned, or moved out of circulation, during the block creation of the BNB Smart Chain. Lastly, BNB token is used for all the projects within the BNB Chain ecosystem, including all the rollup and scaling solutions."),(0,r.kt)("p",null,"All these make BNB token extremely versatile, having no correlation with any specific domain, and ideal for financial project planning and COGS predictability."),(0,r.kt)("h3",{id:"dont-see-your-question"},"Don't see your question?"),(0,r.kt)("p",null,"We're working on expanding this FAQ with more content, including questions from the community and partners, so please watch this space! However, if you don't see your question, please ask in the ",(0,r.kt)("a",{parentName:"p",href:"https://forum.bnbchain.org/"},"BNB forum"),", so you can get the answers you need and make us aware of new FAQ items."))}u.isMDXComponent=!0}}]);