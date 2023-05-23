"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(83117),r=(n(67294),n(3905));const a={sidebar_label:"Securing the Validators",sidebar_position:2,hide_table_of_contents:!0},i="Securing the Validators",s={unversionedId:"validator/security",id:"validator/security",title:"Securing the Validators",description:"Each validator candidate is encouraged to run its operations independently, as diverse setups increase the resilience of the network. Due to the high amount invested by validators it is highly essential to protect them against different DoS and DDoS attacks. In this section, we discuss the security mechanism adopted by BSC for its validators.",source:"@site/docs/validator/security.md",sourceDirName:"validator",slug:"/validator/security",permalink:"/docs/validator/security",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/validator/security.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Securing the Validators",sidebar_position:2,hide_table_of_contents:!0}},l={},d=[{value:"Sentry Nodes (DDOS Protection)",id:"sentry-nodes-ddos-protection",level:2},{value:"Firewall Configuration",id:"firewall-configuration",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"securing-the-validators"},"Securing the Validators"),(0,r.kt)("p",null,"Each validator candidate is encouraged to run its operations independently, as diverse setups increase the resilience of the network. Due to the high amount invested by validators it is highly essential to protect them against different DoS and DDoS attacks. In this section, we discuss the security mechanism adopted by BSC for its validators."),(0,r.kt)("h2",{id:"sentry-nodes-ddos-protection"},"Sentry Nodes (DDOS Protection)"),(0,r.kt)("p",null,"Validators are responsible for ensuring that the network can sustain denial of service attacks. One recommended way to mitigate these risks is for validators to carefully structure their network topology in a so-called sentry node architecture.\nSentry nodes can be quickly spun up or change their IP addresses. Because the links to the sentry nodes are in private IP space, an internet based attacked cannot disturb them directly. This will ensure validator block proposals and votes always make it to the rest of the network."),(0,r.kt)("p",null,"To setup your sentry node architecture you can follow the instructions below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Build a private network and setup trusted private connections between validator node and it sentry")),(0,r.kt)("p",null,"Please do not expose your validator fullnode RPC endpoints to public network."),(0,r.kt)("p",null,"Install your ",(0,r.kt)("a",{parentName:"p",href:"/docs/validator/fullnode"},"fullnode")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Set sentry as peers  for validator node")),(0,r.kt)("p",null,"In the console of the sentry node, run ",(0,r.kt)("inlineCode",{parentName:"p"},"admin.nodeInfo.enode")," You should get something similar to this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"enode://f2da64f49c30a0038bba3391f40805d531510c473ec2bcc7c201631ba003c6f16fa09e03308e48f87d21c0fed1e4e0bc53428047f6dcf34da344d3f5bb69373b@[::]:30306?discport=0\n")),(0,r.kt)("p",null,"!!! Note:\n","[::]"," will be parsed as localhost (127.0.0.1). If your nodes are on a local network check each individual host machine and find your IP with ifconfig\nIf your peers are not on the local network, you need to know your external IP address (use a service) to construct the enode URL.\nCopy this value and in the console of the first node run,"),(0,r.kt)("p",null,"Update ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," file of validator node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# make node invisible\nNoDiscovery = true\n# connect only to sentry\nStaticNodes = ["enode://f2da64f49c30a0038bba3391f40805d531510c473ec2bcc7c201631ba003c6f16fa09e03308e48f87d21c0fed1e4e0bc53428047f6dcf34da344d3f5bb69373b@[10.1.1.1]:30306"]\n')),(0,r.kt)("p",null,"This will return true if successful, but that doesn't mean the node was added successfully."),(0,r.kt)("p",null,"To confirm run ",(0,r.kt)("inlineCode",{parentName:"p"},"admin.peers")," and you should see the details of the node you just added."),(0,r.kt)("p",null,"That way your validator node will try to peer with your provided sentry nodes only."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Confirm the connection")),(0,r.kt)("p",null,"To confirm run ",(0,r.kt)("inlineCode",{parentName:"p"},"admin.peers")," and you should see the details of the node you just added."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/w6notWcdyEXayM592WuI5xcpysFqgkwwBSX3sBZFIc34SHrKewZYlNMBMyGBPs375ez78i4gZmbnMyMn3Ry5s6Z6qTejatPYdDXL67moRhGmAQsjNNVF0CRZz10yznx13U34fKSc",alt:"img"})),(0,r.kt)("h2",{id:"firewall-configuration"},"Firewall Configuration"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"geth")," uses several TCP ports for different purposes."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"geth")," use a listener (TCP) port and a discovery (UDP) port, both on 30303 by default."),(0,r.kt)("p",null,"If you need to run JSON-RPC, you'll also need TCP port 8545. Note that JSON-RPC port should not be opened to the outside world, because from there you can do admin operations."))}p.isMDXComponent=!0}}]);