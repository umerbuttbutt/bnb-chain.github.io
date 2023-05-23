"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7976],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},98530:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(83117),r=(a(67294),a(3905));const l={sidebar_label:"Wallet Guide",sidebar_position:2,hide_table_of_contents:!1},i="Wallet Guide",o={unversionedId:"Wallet",id:"Wallet",title:"Wallet Guide",description:"What is a Wallet?",source:"@site/docs/Wallet.md",sourceDirName:".",slug:"/Wallet",permalink:"/docs/Wallet",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/Wallet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Wallet Guide",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Token Migration",permalink:"/docs/migration/evm-chains/token-migration"},next:{title:"Wallet Key Management",permalink:"/docs/create-wallet"}},p={},s=[{value:"What is a Wallet?",id:"what-is-a-wallet",level:2},{value:"Supported Wallets",id:"supported-wallets",level:2}],d={toc:s},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wallet-guide"},"Wallet Guide"),(0,r.kt)("h2",{id:"what-is-a-wallet"},"What is a Wallet?"),(0,r.kt)("p",null,"A crypto wallet is a device or program used for transfer and storage of cryptocurrency. Crypto wallets can be of different types, such as paper wallets, hardware wallets, and software wallets. There are also several smartphone mobile apps and computer programs that provide a user-friendly way to create and manage wallets. Along with crytocurreny, crypto wallets store a collection of crypto keys that are used for sending, receiving, and taracking ownership of cryptocurrencies."),(0,r.kt)("p",null,"A keypair is a cryptographically-derived securely generated private and public keys. A private key and its corresponding public key are together known as a keypair. A wallet contains a collection of one or more keypairs and provides some means to interact with them. The security of any crypto wallet depends upon how the private key is stored."),(0,r.kt)("p",null,"The public key is known as the wallet's receiving address or simply its address. The wallet address may be shared and displayed freely. When another party is going to send some amount of cryptocurrency to a wallet, they need to know the wallet's receiving address. Depending on a blockchain's implementation, the address can also be used to view certain information about a wallet, such as viewing the balance, but has no ability to change anything about the wallet or withdraw any tokens."),(0,r.kt)("p",null,"In order to send cryptocurrencies to another address or to make any changes to the wallet, the private key is used for digitally signing the transactions. It is important to note that the private key must never be shared and should always be kept securely. If by any means access is gained to the private key attached to a wallet, the attacker can withdraw all the tokens contained. Furthermore, if the private key for a wallet is lost, any tokens that have been sent to or stored in that wallet's address are permanently lost."),(0,r.kt)("p",null,"Different wallet solutions offer different approaches to keypair security, interacting with the keypair, and signing transactions to use/spend the tokens. Some are easier to use than others. Some store and back up private keys more securely. Binance Smart Chain supports several wallets, giving its users the right to choose the right wallet for their required security and convenience."),(0,r.kt)("p",null,"If you want to be able to receive BNB and other supported tokens on the Binance Smart Chain blockchain, you will first need to create a wallet and configure ",(0,r.kt)("a",{parentName:"p",href:"/docs/create-wallet"},"key management"),"."),(0,r.kt)("h2",{id:"supported-wallets"},"Supported Wallets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"List of Wallets Supporting BNB Chain")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Wallet Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Website"),(0,r.kt)("th",{parentName:"tr",align:null},"Staking Support"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance Extension Wallet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://binance-wallet.gitbook.io/binance-chain-wallet/"},"https://binance-wallet.gitbook.io/binance-chain-wallet/")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"BNB Chain List"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.bnbchainlist.org/"},"https://www.bnbchainlist.org/")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Trust Wallet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://trustwallet.com/"},"https://trustwallet.com/")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Math Wallet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mathwallet.org/en-us/"},"https://mathwallet.org/en-us/")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"SafePal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://safepal.io/"},"https://safepal.io/")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"TokenPocket"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.tokenpocket.pro/"},"https://www.tokenpocket.pro/")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Arkane"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://arkane.network/"},"https://arkane.network/")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"MetaMask"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://metamask.zendesk.com/hc/en-us"},"https://metamask.zendesk.com/hc/en-us")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Ledger"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.ledger.com/"},"https://www.ledger.com/")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Trezor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://wallet.trezor.io"},"https://wallet.trezor.io")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"MEW"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.myetherwallet.com/"},"https://www.myetherwallet.com/")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"ezDeFi"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://ezdefi.com"},"http://ezdefi.com")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"1inch wallet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://1inch.io/wallet/"},"https://1inch.io/wallet/")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"Infinity wallet (Desktop)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://infinitywallet.io/download/"},"https://infinitywallet.io/download/")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"BitKeep (App&Chrome)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bitkeep.com"},"https://bitkeep.com")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin98 Wallet (App Web Extension)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://coin98.com/wallet"},"https://coin98.com/wallet")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"Guarda Wallet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://guarda.com/coins/binance-coin-wallet/"},"https://guarda.com/coins/binance-coin-wallet/")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"Rabby Wallet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://rabby.io/"},"https://rabby.io/")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"Atomic Wallet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://atomicwallet.io/"},"https://atomicwallet.io/")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))))}u.isMDXComponent=!0}}]);