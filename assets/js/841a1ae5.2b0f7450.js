"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,k=h["".concat(c,".").concat(d)]||h[d]||p[d]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(83117),a=(n(67294),n(3905));const r={sidebar_label:"Token Circulation Model",hide_table_of_contents:!1,sidebar_position:2},i="Circulation Model",l={unversionedId:"circulation-model",id:"circulation-model",title:"Circulation Model",description:"BC and BSC share the same token universe for BNB and BEP8/BEP2/BEP20 tokens. This defines:",source:"@site/docs/circulation-model.md",sourceDirName:".",slug:"/circulation-model",permalink:"/docs/circulation-model",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/circulation-model.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Token Circulation Model",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Mirror BEP2 and BEP20 Token",permalink:"/docs/mirror"},next:{title:"Sync Token Supply",permalink:"/docs/sync"}},c={},s=[{value:"Peg Account",id:"peg-account",level:2},{value:"Bind",id:"bind",level:2},{value:"Cross Chain Transfer",id:"cross-chain-transfer",level:2},{value:"Burn",id:"burn",level:2},{value:"Mint",id:"mint",level:2}],u={toc:s},h="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"circulation-model"},"Circulation Model"),(0,a.kt)("p",null,"BC and BSC share the same token universe for BNB and BEP8/BEP2/BEP20 tokens. This defines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The same token can circulate on both networks, and flow between them bi-directionally via a cross-chain communication mechanism. "),(0,a.kt)("li",{parentName:"ul"},"The total circulation of the same token should be managed across the two networks, i.e. the total effective supply of a token should be the sum of the token\u2019s total effective supply on both BSC and BC."),(0,a.kt)("li",{parentName:"ul"},"The tokens can be initially created on BSC as a BEP20, or on BC as a BEP2, then created on the other. There are native ways on both networks to link the two and secure the total supply of the token.")),(0,a.kt)("h2",{id:"peg-account"},"Peg Account"),(0,a.kt)("p",null,"To secure the total circulation of the token on both chains, we introduce ",(0,a.kt)("inlineCode",{parentName:"p"},"Peg Account")," to lock tokens on chain.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Peg Account")," is a pure-code-controlled account that no one has the right to access to the account."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For BC, the ",(0,a.kt)("inlineCode",{parentName:"li"},"Peg Account")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"bnb1v8vkkymvhe2sf7gd2092ujc6hweta38xadu2pj"),". (",(0,a.kt)("inlineCode",{parentName:"li"},"tbnb1v8vkkymvhe2sf7gd2092ujc6hweta38xnc4wpr")," for testnet) "),(0,a.kt)("li",{parentName:"ul"},"For BSC, the ",(0,a.kt)("inlineCode",{parentName:"li"},"Peg Account")," is ",(0,a.kt)("a",{parentName:"li",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001004"},"TokenHub")," contract.")),(0,a.kt)("h2",{id:"bind"},"Bind"),(0,a.kt)("p",null,"Token Binding can happen at any time after BEP2/BEP8 and BEP20 are ready. The token owners of either BEP2/BEP8 or BEP20 only need to complete the ",(0,a.kt)("strong",{parentName:"p"},"Binding")," process when a cross-chain feature is necessary."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Binding")," process helps to build the relationship between the two tokens on BC and BSC. It will ensure that the two tokens share the same symbol and same total supply. The most important part is that it will reallocate the circulation on both chains to ensure the total circulation equals the total supply. "),(0,a.kt)("p",null,"Let's walk through an example:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Bob issues BTC on BC with a total supply of 10, and he sends Alice 2 BTC."),(0,a.kt)("li",{parentName:"ol"},"Bob issues BTC on BSC with a total supply of 10, and he sends Tom 1 BTC.")),(0,a.kt)("p",null,"Now Bob wants BTC to flow between BC and BSC, but the total circulation on BC and BSC is 20=10+10 BTC which is not correct, so he decided to bind these two tokens. He made a decision that 8 BTC circulation on BC and 2 BTC circulation on BSC, then he started a bind transaction."),(0,a.kt)("p",null,"The BC execution engine will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Transfer 2 BTC from Bob's account to ",(0,a.kt)("inlineCode",{parentName:"li"},"Peg Account"),". "),(0,a.kt)("li",{parentName:"ol"},"Emit a cross-chain event.")),(0,a.kt)("p",null,"For now, on BC, Bob has 6 BTC, Alice has 2 BTC, 2 BTC is locked in ",(0,a.kt)("inlineCode",{parentName:"p"},"Peg Account"),", circulation on BC is 8 BTC."),(0,a.kt)("p",null,"The Relayer watches the cross-chain event on BC, and sends a transaction to ",(0,a.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001008"},"TokenManager")," contract on BSC."),(0,a.kt)("p",null,"Then Bob invokes the BTC contract on BSC to approve ",(0,a.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001008"},"TokenManager")," to spend 8 BTC of his account.\nAfter that Bob approves the bind request by invoking ",(0,a.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001008"},"TokenManager"),".\nThe ",(0,a.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001008"},"TokenManager")," will transfer 8 BTC from Bob's account to ",(0,a.kt)("inlineCode",{parentName:"p"},"Peg Account"),"."),(0,a.kt)("p",null,"For now, on BSC, Bob has 1 BTC, Tom has 1 BTC, 8 BTC is locked in ",(0,a.kt)("inlineCode",{parentName:"p"},"Peg Account"),", circulation on BSC is 2 BTC."),(0,a.kt)("p",null,"The binding process ends here, and the total circulation on both chains is 10 BTC which equals to its total supply."),(0,a.kt)("h2",{id:"cross-chain-transfer"},"Cross Chain Transfer"),(0,a.kt)("p",null,"When one token transfer from the native chain to the parallel chain, the process is:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Token transfer from the sender to ",(0,a.kt)("inlineCode",{parentName:"li"},"Peg Account")," on the native chain.  "),(0,a.kt)("li",{parentName:"ol"},"Token transfer from ",(0,a.kt)("inlineCode",{parentName:"li"},"Peg Account")," to the receiver on the parallel chain.")),(0,a.kt)("h2",{id:"burn"},"Burn"),(0,a.kt)("p",null,"When a user burns a certain amount of token on the native chain, there is no need to burn on the parallel chain."),(0,a.kt)("p",null,"Let's walk through an example:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The circulation on BC is 5 BTC, and 5 BTC on BSC."),(0,a.kt)("li",{parentName:"ol"},"User burns 2 BTC on BC."),(0,a.kt)("li",{parentName:"ol"},"Now circulation on BC is 3 BTC, and 5 BTC on BSC. "),(0,a.kt)("li",{parentName:"ol"},"The total circulation is 8 now which is expected.")),(0,a.kt)("h2",{id:"mint"},"Mint"),(0,a.kt)("p",null,"When a user mints a token on the native chain, but does not mint it on the parallel chain, it may cause an issue that users can not cross transfer all tokens from the native chain to the parallel chain."),(0,a.kt)("p",null,"Let's walk through an example:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The circulation on BC is 5 BTC, and the locked token is 5 BTC."),(0,a.kt)("li",{parentName:"ol"},"The circulation on BSC is 5 BTC, and the locked token is 5 BTC."),(0,a.kt)("li",{parentName:"ol"},"User mint 2 BTC on BC."),(0,a.kt)("li",{parentName:"ol"},"It will fail if the user tries to transfer 7 BTC from BC to BSC, because the balance of ",(0,a.kt)("inlineCode",{parentName:"li"},"Peg Account")," on BSC is 5 BTC and can\u2019t afford to unlock 7 BTC.")),(0,a.kt)("p",null,"The best practice for mint is:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Mint token on the native chain."),(0,a.kt)("li",{parentName:"ol"},"Mint token on the parallel chain."),(0,a.kt)("li",{parentName:"ol"},"Transfer the mint token to ",(0,a.kt)("inlineCode",{parentName:"li"},"Peg Account")," on the parallel chain.")))}p.isMDXComponent=!0}}]);