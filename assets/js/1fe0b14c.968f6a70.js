"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(83117),l=(n(67294),n(3905));const r={id:"walletconnect",title:"Wallet Connect"},o=void 0,i={unversionedId:"beaconchain/learn/walletconnect",id:"beaconchain/learn/walletconnect",title:"Wallet Connect",description:"- [ ] https://docs.binance.org/walletconnect.html",source:"@site/docs/beaconchain/learn/walletconnect.md",sourceDirName:"beaconchain/learn",slug:"/beaconchain/learn/walletconnect",permalink:"/docs/beaconchain/learn/walletconnect",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/learn/walletconnect.md",tags:[],version:"current",frontMatter:{id:"walletconnect",title:"Wallet Connect"}},s={},p=[{value:"What is WalletConnect?",id:"what-is-walletconnect",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Wallets with WalletConnect Support for Beacon Chain",id:"wallets-with-walletconnect-support-for-beacon-chain",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Connecting via WalletConnect",id:"connecting-via-walletconnect",level:2},{value:"Protocol Differences",id:"protocol-differences",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Custom Requests",id:"custom-requests",level:2},{value:"Example: bnb_sign",id:"example-bnb_sign",level:3},{value:"Response (approveRequest)",id:"response-approverequest",level:4},{value:"Example: bnb_tx_confirmation",id:"example-bnb_tx_confirmation",level:3},{value:"Response (approveRequest)",id:"response-approverequest-1",level:4},{value:"Ending the Session",id:"ending-the-session",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://docs.binance.org/walletconnect.html"},"https://docs.binance.org/walletconnect.html"))),(0,l.kt)("h2",{id:"what-is-walletconnect"},"What is WalletConnect?"),(0,l.kt)("p",null,"WalletConnect is an open protocol for connecting desktop Dapps to mobile Wallets using end-to-end encryption by scanning a QR code. Opening up a whole world of Dapps that were once only available to Metamask. The user can interact with any Dapp without comprising their private keys and will be notified to sign any transaction requests on their mobile."),(0,l.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,l.kt)("p",null,"WalletConnect is a simple infrastructure that can be setup by any developer. Using a Bridge server to relay the messages without having access to any of its contents. The contents are encrypted using the session data shared by the QR code between the desktop and mobile. There are libraries for Web, iOS and Android. Read more about it in our documentation introduction."),(0,l.kt)("h2",{id:"wallets-with-walletconnect-support-for-beacon-chain"},"Wallets with WalletConnect Support for Beacon Chain"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List of Wallets Supporting WalletConnect on Beacon Chain ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Wallet Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Network"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://trustwallet.com/"},"Trust Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},"Mainnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mathwallet.org/en-us/"},"Math Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},"Mainnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/meet-one"},"Meet.One Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},"Mainnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://equal.tech/"},"Equal Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},"Mainnet & Testnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://safepal.io/"},"SafePal Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},"Mainnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.coolwallet.io/"},"CoolWallet")),(0,l.kt)("td",{parentName:"tr",align:null},"Mainnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.pundix.com/hc/en-us/categories/360001370531-XWallet-FAQ"},"XWallet")),(0,l.kt)("td",{parentName:"tr",align:null},"Mainnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://atomicwallet.io/"},"Atomic Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},"Mainnet")))),(0,l.kt)("h2",{id:"get-started"},"Get Started"),(0,l.kt)("p",null,"Currently the WalletConnect protocol has references implementations written in Typescript for the Client (browser/react-native/nodejs), the Bridge Server and the Push server."),(0,l.kt)("p",null,"To learn more about how to develop, please read the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.walletconnect.org/"},"official documentation"),"."),(0,l.kt)("p",null,"The Beacon Chain  Web Wallet supports connecting with external wallet providers via the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.walletconnect.org/tech-spec"},"WalletConnect protocol"),"."),(0,l.kt)("p",null,"WalletConnect allows the user to scan a QR code from the wallet app to unlock and use their wallet seamlessly in the web UI."),(0,l.kt)("p",null,"In order for this to work, some modifications to the standard WalletConnect protocol are used in the Beacon Chain  wallet's implementation."),(0,l.kt)("p",null,"See the list of wallets which support WalletConnect on Beacon Chain  ",(0,l.kt)("a",{parentName:"p",href:"/docs/wallets/walletconnect-support"},"here")),(0,l.kt)("h2",{id:"connecting-via-walletconnect"},"Connecting via WalletConnect"),(0,l.kt)("p",null,"Wallet providers should make use of the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.walletconnect.org/client-sdk"},"WalletConnect Client SDK")," for their target programming language and OS. There are implementations ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/walletconnect"},"on GitHub")," for iOS, Android, React Native, etc."),(0,l.kt)("h2",{id:"protocol-differences"},"Protocol Differences"),(0,l.kt)("p",null,"Since we do not use Ethereum transactions, there are some differences:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Typically ",(0,l.kt)("inlineCode",{parentName:"p"},"sendTransaction")," is used with Ethereum transaction parameters in WalletConnect dApp integrations. But in Beacon Chain 's case, instead of invoking ",(0,l.kt)("inlineCode",{parentName:"p"},"sendTransaction")," in the WalletConnect flow, the new ",(0,l.kt)("a",{parentName:"p",href:"https://docs.walletconnect.org/client-sdk#send-custom-request"},(0,l.kt)("inlineCode",{parentName:"a"},"sendCustomRequest"))," call is used instead with a method called ",(0,l.kt)("inlineCode",{parentName:"p"},"bnb_sign")," (see below).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The external wallet provider is responsible for sending back the signature and public key of the transaction but should ",(0,l.kt)("em",{parentName:"p"},"not")," broadcast the transaction itself. We have instead defined a custom ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," format in the form of stringified JSON containing the signature and public key. The reason for this is that the wallet app probably does not have access to the complete serialized binary form of the transaction (as this requires Amino encoding).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The web wallet will send back a second custom call (after ",(0,l.kt)("inlineCode",{parentName:"p"},"bnb_sign"),") called ",(0,l.kt)("inlineCode",{parentName:"p"},"bnb_tx_confirmation"),", which contains the boolean result of the transaction build/broadcast and any error message encountered by the web wallet during broadcasting. In a complete implementation, this confirmation callback should be responded to with a call to ",(0,l.kt)("inlineCode",{parentName:"p"},"approveRequest"),"."))),(0,l.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,l.kt)("p",null,"This sequence diagram shows the flow of messages when the web wallet interacts with an external wallet provider via WalletConnect."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"WalletConnect Protocol Sequence",src:n(39016).Z,width:"934",height:"1242"})),(0,l.kt)("h2",{id:"custom-requests"},"Custom Requests"),(0,l.kt)("p",null,"A custom call request adheres to this structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "method": "method_name",\n  "params": [{ ... }],\n}\n')),(0,l.kt)("p",null,"We have two custom call request formats, here are examples of them:"),(0,l.kt)("h3",{id:"example-bnb_sign"},"Example: bnb_sign"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "bnb_sign",\n  "params": [\n    {\n      "account_number": "34",\n      "chain_id": "Binance-Chain-Ganges",\n      "data": null,\n      "memo": "test",\n      "msgs": [\n        {\n          "inputs": [\n            {\n              "address": "tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd",\n              "coins": [\n                {\n                  "amount": 1000000000,\n                  "denom": "BNB",\n                },\n              ],\n            },\n          ],\n          "outputs": [\n            {\n              "address": "tbnb1ss57e8sa7xnwq030k2ctr775uac9gjzglqhvpy",\n              "coins": [\n                {\n                  "amount": 1000000000,\n                  "denom": "BNB",\n                },\n              ],\n            },\n          ],\n        },\n      ],\n      "sequence": "31",\n      "source": "1",\n    }\n  ]\n}\n')),(0,l.kt)("h4",{id:"response-approverequest"},"Response (approveRequest)"),(0,l.kt)("p",null,"A response like this should be sent back from the wallet app:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1553682007906047,\n  "result": "{\\"signature\\":\\"...\\",\\"publicKey\\":\\"...\\"}"\n}\n')),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"result"),", a JSON-encoded object must be included containing the following hex-string properties: ",(0,l.kt)("inlineCode",{parentName:"p"},"signature"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"publicKey"),"."),(0,l.kt)("p",null,"Note that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jsonrpc")," are usually pre-filled by the client SDK, so there should be no need to set this in the object yourself.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"signature")," should be 64 bytes in length (128 hex chars)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"publicKey")," should be 65 bytes in length (130 hex chars, non-compressed form, prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"0x04"),")"))),(0,l.kt)("h3",{id:"example-bnb_tx_confirmation"},"Example: bnb_tx_confirmation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "bnb_tx_confirmation",\n  "params": [\n    {\n      "ok": true,\n      "error": "Error message (optional)"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Receipt of the ",(0,l.kt)("inlineCode",{parentName:"p"},"bnb_tx_confirmation")," should be confirmed by the app with ",(0,l.kt)("inlineCode",{parentName:"p"},"approveRequest")," as per the WalletConnect protocol flow."),(0,l.kt)("p",null,"For this response, ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," may be empty or contain an empty JSON-encoded object:"),(0,l.kt)("h4",{id:"response-approverequest-1"},"Response (approveRequest)"),(0,l.kt)("p",null,"A response like this should be sent back from the wallet app:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1553682007906050,\n  "result": ""\n}\n')),(0,l.kt)("h2",{id:"ending-the-session"},"Ending the Session"),(0,l.kt)("p",null,"Remember to call ",(0,l.kt)("inlineCode",{parentName:"p"},"killSession()")," when the user has finished using the integration from your app!"),(0,l.kt)("p",null,"This will redirect the user back to the unlock screen in the web wallet."))}d.isMDXComponent=!0},39016:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/walletconnect_sequence-d1a85a8496691f7177fb4cae8bf8d74e.png"}}]);