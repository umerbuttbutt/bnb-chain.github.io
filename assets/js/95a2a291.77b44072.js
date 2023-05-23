"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||l;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(83117),i=(n(67294),n(3905));const l={},r="Light Client",o={unversionedId:"beaconchain/light-client",id:"beaconchain/light-client",title:"Light Client",description:"Light client is a program that connects to a full node to help users access and interact with Beacon Chain",source:"@site/docs/beaconchain/light-client.md",sourceDirName:"beaconchain",slug:"/beaconchain/light-client",permalink:"/docs/beaconchain/light-client",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/light-client.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Beacon Chain Testnet",permalink:"/docs/beaconchain/develop/testnetandexplorer"},next:{title:"Asset Management",permalink:"/docs/beaconchain/tokens"}},c={},s=[{value:"Light Client Versus Full Node",id:"light-client-versus-full-node",level:2},{value:"Platforms and System Requirement",id:"platforms-and-system-requirement",level:2},{value:"Platforms",id:"platforms",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Run a light client node",id:"run-a-light-client-node",level:2},{value:"Example for Mainnet:",id:"example-for-mainnet",level:3},{value:"Example for Testnet:",id:"example-for-testnet",level:3},{value:"Working with the light client",id:"working-with-the-light-client",level:2}],d={toc:s},p="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"light-client"},"Light Client"),(0,i.kt)("p",null,"Light client is a program that connects to a full node to help users access and interact with Beacon Chain\nin a secure and decentralized manner without having to sync the full blockchain."),(0,i.kt)("h2",{id:"light-client-versus-full-node"},"Light Client Versus Full Node"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Light client does not store blocks or states,this way it needs less disk space (50 megabytes will be enough)."),(0,i.kt)("li",{parentName:"ul"},"Light client does not join p2p network and it does not produce any network cost when it is idle. The network\noverhead depends on how many requests the light client handles concurrently."),(0,i.kt)("li",{parentName:"ul"},"Light client does not replay state of the chain so that there is not CPU cost when idle. The CPU cost also\ndepends on how many requests the light client handles concurrently."),(0,i.kt)("li",{parentName:"ul"},"Light client is faster than a full node even if it lagged behind the core network for a few months. It only needs a few seconds\nto catch up with core network.")),(0,i.kt)("h2",{id:"platforms-and-system-requirement"},"Platforms and System Requirement"),(0,i.kt)("h3",{id:"platforms"},"Platforms"),(0,i.kt)("p",null,"We support running light client node on ",(0,i.kt)("inlineCode",{parentName:"p"},"Mac OS X"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Windows")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Linux"),".",(0,i.kt)("br",null),"\nThe light client will soon be open sourced, afterwards you can cross compile light client binary and run it on other platforms."),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"50 megabytes of free disk space."),(0,i.kt)("li",{parentName:"ul"},"2 CPU cores, 50 megabytes of memory (RAM).")),(0,i.kt)("h2",{id:"run-a-light-client-node"},"Run a light client node"),(0,i.kt)("p",null,"Download:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node/releases"},"node repo")),(0,i.kt)("p",null,"Download the configuration files according to the network you want to join in (mainnet_config.zip/testnet_config.zip)."),(0,i.kt)("p",null,"Help info:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./lightd --help\nThis node will run a secure proxy to a binance rpc server.\n\nAll calls that can be tracked back to a block header by a proof\nwill be verified before passing them back to the caller. Other that\nthat it will present the same interface as a full binance node,\njust with added trust and running locally.\n\nUsage:\n  lite [flags]\n\nFlags:\n      --cache-size int             Specify the memory trust store cache size (default 10)\n      --chain-id string            Specify the Beacon Chain  ID (default "bnbchain")\n  -h, --help                       help for lite\n      --home-dir string            Specify the home directory (default ".binance-lite")\n      --laddr string               Serve the proxy on the given address (default "tcp://localhost:27147")\n      --max-open-connections int   Maximum number of simultaneous connections (including WebSocket). (default 900)\n      --node string                Connect to a binance node at this address (default "tcp://localhost:27147")\n')),(0,i.kt)("p",null,"You can specify all the parameters above."),(0,i.kt)("p",null,"Start the light client node according to the Platform. Replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," variable with ",(0,i.kt)("inlineCode",{parentName:"p"},"mac"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"windows")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"linux")," in the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./{{platform}}/lightd --chain-id "{chain-id}" --node tcp://{full node addr}:80 > node.log  &\n')),(0,i.kt)("p",null,"There are two required parameters to start a light client node: ",(0,i.kt)("inlineCode",{parentName:"p"},"chain id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"full node addr"),".",(0,i.kt)("br",null),"\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"chain id")," of the network that you want join in.",(0,i.kt)("br",null),"\nYou can find chain id at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node/releases/download/v0.9.1/testnet_config.zip"},"genesis file in test network"),"\nor ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node/releases/download/v0.9.1/mainnet_config.zip"},"genesis file in prod network"),".",(0,i.kt)("br",null),"\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"full node addr")," field can be an address of any full node that you have deployed.",(0,i.kt)("br",null),"\nYou can refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/fullnode"},"Run a Beacon Chain  full node")," to get more details.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"We supply a bunch of full nodes that you can connect to for both mainnet and testnet.",(0,i.kt)("br",null),"\nYou cat get full nodes info through a simple python script(notice to replace domain according to different network):",(0,i.kt)("br",null)),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import requests, json\nd = requests.get(\'https://dex.binance.org/api/v1/peers\').text # replace dex.binance.org with testnet-dex.binance.org for testnet\nl = json.loads(d)\nseeds = ",".join([ (seed["id"]+"@"+seed["original_listen_addr"]) for seed in l if seed["accelerated"] == False])\nprint (seeds)\n')),(0,i.kt)("h3",{id:"example-for-mainnet"},"Example for Mainnet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./lightd --chain-id "Binance-Chain-Tigris" --node tcp://dataseed1.binance.org:80 > node.log  &\n')),(0,i.kt)("h3",{id:"example-for-testnet"},"Example for Testnet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./lightd --chain-id "Binance-Chain-Ganges" --node tcp://data-seed-pre-0-s1.binance.org:80 > node.log  &\n')),(0,i.kt)("h2",{id:"working-with-the-light-client"},"Working with the light client"),(0,i.kt)("p",null,"Light client has the same RPC interface as ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/node-rpc"},"rpc-api"),".",(0,i.kt)("br",null),"\nThe default port of light client is ",(0,i.kt)("inlineCode",{parentName:"p"},"27147"),"."))}h.isMDXComponent=!0}}]);