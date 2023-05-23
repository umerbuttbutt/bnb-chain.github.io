"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(83117),o=(n(67294),n(3905));const a={},l="Using Truffle",i={unversionedId:"truffle",id:"truffle",title:"Using Truffle",description:"Setting up the development environment",source:"@site/docs/truffle.md",sourceDirName:".",slug:"/truffle",permalink:"/docs/truffle",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/truffle.md",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Setting up the development environment",id:"setting-up-the-development-environment",level:2},{value:"Installing",id:"installing",level:2},{value:"Create A Project",id:"create-a-project",level:2},{value:"Create Contract",id:"create-contract",level:3},{value:"Compile Contract",id:"compile-contract",level:3},{value:"Config Truffle for BSC",id:"config-truffle-for-bsc",level:3},{value:"Deploying on BSC Network",id:"deploying-on-bsc-network",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-truffle"},"Using Truffle"),(0,o.kt)("h2",{id:"setting-up-the-development-environment"},"Setting up the development environment"),(0,o.kt)("p",null,"There are a few technical requirements before we start. Please install the following:\nRequirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows, Linux or Mac OS X"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js v8.9.4 LTS or later")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recommendations for Windows")),(0,o.kt)("p",null,"If you're running Truffle on Windows, you may encounter some naming conflicts that could prevent Truffle from executing properly. Please see the section on resolving naming conflicts for solutions."),(0,o.kt)("h2",{id:"installing"},"Installing"),(0,o.kt)("p",null,"Once we have those installed, we only need one command to install Truffle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install -g truffle\n")),(0,o.kt)("p",null,"To verify that Truffle is installed properly, type ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"truffle version"))," on a terminal. If you see an error, make sure that your npm modules are added to your path."),(0,o.kt)("h2",{id:"create-a-project"},"Create A Project"),(0,o.kt)("p",null,"The first step is to create a Truffle project. We'll use the *MegaCoin as an example, which creates a token that can be transferred between accounts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new directory for your Truffle project")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir MegaCoin\ncd MegaCoin\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Intialize your project:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"truffle init\n")),(0,o.kt)("p",null,"Once this operation is completed, you'll now have a project structure with the following items:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"contracts/: Directory for Solidity contracts"),(0,o.kt)("li",{parentName:"ul"},"migrations/: Directory for scriptable deployment files"),(0,o.kt)("li",{parentName:"ul"},"test/: Directory for test files for testing your application and contracts"),(0,o.kt)("li",{parentName:"ul"},"truffle-config.js: Truffle configuration file")),(0,o.kt)("h3",{id:"create-contract"},"Create Contract"),(0,o.kt)("p",null,"You can write your own smart contract or download the BEP20 token smart contract template."),(0,o.kt)("h3",{id:"compile-contract"},"Compile Contract"),(0,o.kt)("p",null,"To compile a Truffle project, change to the root of the directory where the project is located and then type the following into a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"truffle compile\n")),(0,o.kt)("h3",{id:"config-truffle-for-bsc"},"Config Truffle for BSC"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to truffle-config.js"),(0,o.kt)("li",{parentName:"ul"},"Update the truffle-config with bsc-network-crendentials.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const HDWalletProvider = require(\'@truffle/hdwallet-provider\');\nconst fs = require(\'fs\');\nconst mnemonic = fs.readFileSync(".secret").toString().trim();\n\nmodule.exports = {\n  networks: {\n    development: {\n      host: "127.0.0.1",     // Localhost (default: none)\n      port: 8545,            // Standard BSC port (default: none)\n      network_id: "*",       // Any network (default: none)\n    },\n    testnet: {\n      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),\n      network_id: 97,\n      confirmations: 10,\n      timeoutBlocks: 200,\n      skipDryRun: true\n    },\n    bsc: {\n      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),\n      network_id: 56,\n      confirmations: 10,\n      timeoutBlocks: 200,\n      skipDryRun: true\n    },\n  },\n\n  // Set default mocha options here, use special reporters etc.\n  mocha: {\n    // timeout: 100000\n  },\n\n  // Configure your compilers\n  compilers: {\n    solc: {\n      version: "^0.6.12", // A version or constraint - Ex. "^0.5.0"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Notice, it requires mnemonic to be passed in for Provider, this is the seed phrase for the account you'd like to deploy from. Create a new .secret file in root directory and enter your 12 word mnemonic seed phrase to get started. To get the seedwords from metamask wallet you can go to Metamask Settings, then from the menu choose Security and Privacy where you will see a button that says reveal seed words."),(0,o.kt)("h2",{id:"deploying-on-bsc-network"},"Deploying on BSC Network"),(0,o.kt)("p",null,"Run this command in root of the project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$ truffle migrate --network testnet\n")),(0,o.kt)("p",null,"Contract will be deployed on Binance Chain Chapel Testnet, it look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"1_initial_migration.js\n======================\n\n   Deploying 'Migrations'\n   ----------------------\n   > transaction hash:    0xaf4502198400bde2148eb4274b08d727a17080b685cd2dcd4aee13d8eb954adc\n   > Blocks: 3            Seconds: 9\n   > contract address:    0x81eCD10b61978D9160428943a0c0Fb31a5460466\n   > block number:        3223948\n   > block timestamp:     1604049862\n   > account:             0x623ac9f6E62A8134bBD5Dc96D9B8b29b4B60e45F\n   > balance:             6.24574114\n   > gas used:            191943 (0x2edc7)\n   > gas price:           20 gwei\n   > value sent:          0 ETH\n   > total cost:          0.00383886 ETH\n\n   Pausing for 5 confirmations...\n   ------------------------------\n   > confirmation number: 2 (block: 3223952)\n   > confirmation number: 3 (block: 3223953)\n   > confirmation number: 4 (block: 3223954)\n   > confirmation number: 6 (block: 3223956)\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:          0.00383886 ETH\n\n\nSummary\n=======\n> Total deployments:   1\n> Final cost:          0.00383886 ETH\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Remember your address, transaction_hash and other details provided would differ, Above is just to provide an idea of structure.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations!")," You have successfully deployed BEP20 Smart Contract. Now you can interact with the Smart Contract."),(0,o.kt)("p",null,"You can check the deployment status here: ",(0,o.kt)("a",{parentName:"p",href:"https://bscscan.com/"},"https://bscscan.com/")," or ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.bscscan.com/"},"https://testnet.bscscan.com/")))}f.isMDXComponent=!0}}]);