"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const o={sidebar_label:"Using Remix IDE",hide_table_of_contents:!1,sidebar_position:2},i="Using Remix IDE for Deploying Smart Contracts on BSC",l={unversionedId:"remix-new",id:"remix-new",title:"Using Remix IDE for Deploying Smart Contracts on BSC",description:"In this tutorial, we provide guidelines on how to create, compile, and deploy a simple Hello World smart contract on BSC using the Remix IDE.",source:"@site/docs/remix-new.md",sourceDirName:".",slug:"/remix-new",permalink:"/docs/remix-new",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/remix-new.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Using Remix IDE",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Using ChainIDE",permalink:"/docs/chainide"},next:{title:"Using Truffle",permalink:"/docs/truffle-new"}},s={},c=[{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Setting Up Remix IDE",id:"setting-up-remix-ide",level:3},{value:"Writing the Smart Contract",id:"writing-the-smart-contract",level:2},{value:"Compile Smart Contract",id:"compile-smart-contract",level:2},{value:"Configure MetaMask and Fund Your Account",id:"configure-metamask-and-fund-your-account",level:2},{value:"Deploy Smart Contract",id:"deploy-smart-contract",level:2},{value:"Flatten the Smart Contract Code",id:"flatten-the-smart-contract-code",level:3},{value:"Using Flattened Code to Verify",id:"using-flattened-code-to-verify",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-remix-ide-for-deploying-smart-contracts-on-bsc"},"Using Remix IDE for Deploying Smart Contracts on BSC"),(0,r.kt)("p",null,"In this tutorial, we provide guidelines on how to create, compile, and deploy a simple Hello World smart contract on BSC using the ",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE"),"."),(0,r.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"There is no need for any local environment settings for deploying solidity smart contracts on BSC using the Remix IDE."),(0,r.kt)("p",null,"All you require is a browser-based Web3 wallet (e.g. MetaMask) to interact with the BSC Testnet and deployed contracts. If you are already using MetaMask, it is recommended to create a new account for testing with Replit. You can do this from the account menu, which appears when you click on the account avatar in the top right corner of MetaMask interface."),(0,r.kt)("p",null,"You must set up all of the following Pre-requisites to be able to deploy your solidity smart contract on BSC:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Download Metamask wallet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"},"Configure BNB Smart Chain Testnet on Metamask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testnet.binance.org/faucet-smart"},"Get BNB testnet tokens"))),(0,r.kt)("h3",{id:"setting-up-remix-ide"},"Setting Up Remix IDE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remix is an online IDE to develop smart contracts."),(0,r.kt)("li",{parentName:"ul"},"You need to choose Solidity Compiler, Choose the appropriate compiler version. We used 0.8.15 for this tutorial.")),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/93580180/182832884-f3554c38-84aa-46f0-85e6-32b54e24eba6.png"}),(0,r.kt)("h2",{id:"writing-the-smart-contract"},"Writing the Smart Contract"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new file, name it ",(0,r.kt)("inlineCode",{parentName:"li"},"HelloWorld.sol"),", and copy the contract code given below")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.15;\ncontract HelloWorld {\n    function sayHelloWorld() public pure returns (string memory) {\n        return "Hello World";\n    }\n}\n')),(0,r.kt)("p",null,"The first line, ",(0,r.kt)("inlineCode",{parentName:"p"},"pragma solidity ^0.8.15")," specifies that the source code is for a Solidity version greater than 0.8.15. ",(0,r.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/layout-of-source-files.html#pragma"},"Pragmas")," are common instructions for compilers about how to treat the source code (e.g., pragma once)."),(0,r.kt)("p",null,"A contract in the sense of Solidity is a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain. Learn more about the ",(0,r.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/contracts.html#constructor"},"constructor")," and  ",(0,r.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/introduction-to-smart-contracts.html#storage-memory-and-the-stack"},"memory")," in the docs."),(0,r.kt)("h2",{id:"compile-smart-contract"},"Compile Smart Contract"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step1: Click button to switch to compile page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step2: Select the appropriate compiler version, 0.8.15 in our case.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Step3: Enable "Auto compile" and "Optimization" from Advanced Configurations,')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Step4: Select "HelloWorld" from the contract drop-down menu.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Step5: Click "ABI" to copy the contract ABI and save it.'))),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/93580180/182833004-bd530c91-adb4-4b8c-a87b-70139ef75e35.png",alt:"img",style:{zoom:"80%"}}),(0,r.kt)("h2",{id:"configure-metamask-and-fund-your-account"},"Configure MetaMask and Fund Your Account"),(0,r.kt)("p",null,"Now, We have to deploy our smart contract on BNB Smart Chain Network. For that, we have to connect to Web3 world, this can be done by many services like MetaMask, Brave, Portis etc. We will be using MetaMask. Please follow this ",(0,r.kt)("a",{parentName:"p",href:"/docs/wallet/metamask"},"tutorial to setup a Metamask Account")," for configuring the MetaMask wallet to use with BSC."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open Metamask and select Custom RPC from the networks dropdown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to setting page"))),(0,r.kt)("img",{src:"https://lh5.googleusercontent.com/NqWPIv1MrMJ-W2wDKjxtdxcdFhDwiqhsZ6G6MY6FQnhxPTCCPfPHBJ59vBl1ddxpbfV11ufETWAolV1s9YjCYHPeJCKW1S-sr8gfjcFt3swXM-p3IgafNBqPZ86DvThK-I9gKbrw",alt:"img",style:{zoom:"80%"}}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a new network")),(0,r.kt)("img",{src:"https://lh6.googleusercontent.com/jrq511YshO6rPPx4i-ePRy2gs-66b465c_JFXEW8Cm5CSNTM7CXgCPuFmIh_Im3JlEhxpAqEDDjmUqfskq2m5rG-FKhwZ4_jIenOTdAVs_rMMTjTvZlM6iOpQeivrz_V1liSvuB5",alt:"img",style:{zoom:"30%"}}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Testnet"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/rpc"},"RPC URLs")),(0,r.kt)("li",{parentName:"ul"},"ChainID: 97"),(0,r.kt)("li",{parentName:"ul"},"Symbol: BNB"),(0,r.kt)("li",{parentName:"ul"},"Block Explorer: ",(0,r.kt)("a",{parentName:"li",href:"https://testnet.bscscan.com"},"https://testnet.bscscan.com")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mainnet"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/rpc"},"RPC URLs")),(0,r.kt)("li",{parentName:"ul"},"ChainID: 56"),(0,r.kt)("li",{parentName:"ul"},"Symbol: BNB"),(0,r.kt)("li",{parentName:"ul"},"Block Explorer: ",(0,r.kt)("a",{parentName:"li",href:"https://bscscan.com"},"https://bscscan.com"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go ahead and click save")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy your address from Metamask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Head over to ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.binance.org/faucet-smart"},"Faucet")," and request test BNB"))),(0,r.kt)("h2",{id:"deploy-smart-contract"},"Deploy Smart Contract"),(0,r.kt)("p",null,"Follow the following steps to deploy the HelloWorld smart contract on the BNB Smart Chain Testnet. "),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/93580180/182833072-ca9cbd50-253e-400b-84c5-720e0ee6bb32.png",alt:"img",style:{zoom:"80%"}}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step1: Navigate to the Deployment Page."),(0,r.kt)("li",{parentName:"ul"},"Step2: Select Injected Provider in the Environment dropdown"),(0,r.kt)("li",{parentName:"ul"},"Step3: Confirm the Connection Request on the MetaMask notification.")),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/93580180/182833162-4aff06eb-9d20-41c0-a5b6-df996db41a1c.png",alt:"img",style:{zoom:"80%"}}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Step4: Once Metamask is connected to Remix, click on the "Deploy" button which would generate another metamask popup that requires transaction confirmation.')),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/93580180/182833376-8497b8c8-1edf-4f9f-a586-acfbe20ab696.png",alt:"img",style:{zoom:"80%"}}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations!")," You have successfully deployed a simple Smart Contract on the BSC Testnet. Now you can interact with the Smart Contract. Check the deployment status here: ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.bscscan.com/"},"https://testnet.bscscan.com/")),(0,r.kt)("h1",{id:"verify-the-deployed-contract-on-bscscan"},"Verify the deployed contract on BscScan"),(0,r.kt)("p",null,"The first and foremost step is to flatten the solidity contract into a single file to be able to get it verified on ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.bscscan.com/"},"BscScan"),"."),(0,r.kt)("h3",{id:"flatten-the-smart-contract-code"},"Flatten the Smart Contract Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy and Paste your smart contract into a local file on your system named as ",(0,r.kt)("inlineCode",{parentName:"li"},"HelloWorld.sol"),". "),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nomiclabs/truffle-flattener"},"Truffle Flattener")," by running the command ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install truffle-flattener")," on your terminal or command prompt."),(0,r.kt)("li",{parentName:"ul"},"Flatten the contract by running the command in the ",(0,r.kt)("inlineCode",{parentName:"li"},"npx truffle-flattener HelloWorld.sol > FlatHelloWorld.sol")," contracts directory"),(0,r.kt)("li",{parentName:"ul"},"Clean up the licensing information.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The flattened contract will have the same licensing note imported from each of the files. "),(0,r.kt)("li",{parentName:"ul"},"Multiple licensing notes in one file break the BscScan verification, so you have to leave one licensing note for the entirety of the flattened contract. "),(0,r.kt)("li",{parentName:"ul"},"The easiest way to clean up is to search for the SPDX mentions in the file and remove all of them except for the very first one.")))),(0,r.kt)("h3",{id:"using-flattened-code-to-verify"},"Using Flattened Code to Verify"),(0,r.kt)("p",null,"At this point, you have your flattened and cleaned-up contract ready for the BscScan verification."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://testnet.bscscan.com/"},"BscScan Testnet"),"."),(0,r.kt)("li",{parentName:"ul"},"Find your deployed contract by searching it using its address."),(0,r.kt)("li",{parentName:"ul"},"On the main page of BscScan, on the header click ",(0,r.kt)("strong",{parentName:"li"},"Misc > Verify Contract.")),(0,r.kt)("li",{parentName:"ul"},"In Compiler Type, select ",(0,r.kt)("strong",{parentName:"li"},"Solidity (Single file)"),"."),(0,r.kt)("li",{parentName:"ul"},"In Compiler Version, select ",(0,r.kt)("strong",{parentName:"li"},"v0.8.15"),". This is the version this tutorial used to compile the contract."),(0,r.kt)("li",{parentName:"ul"},"In Open Source License Type, select ",(0,r.kt)("strong",{parentName:"li"},"MIT License (MIT)"),"."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Continue"),"."),(0,r.kt)("li",{parentName:"ul"},"Keep the ",(0,r.kt)("strong",{parentName:"li"},"Optimization")," option set to ",(0,r.kt)("strong",{parentName:"li"},"No")," as Remix does not use optimization by default."),(0,r.kt)("li",{parentName:"ul"},"Paste the entirety of your flattened .sol contract in the ",(0,r.kt)("strong",{parentName:"li"},"Enter the Solidity Contract Code below")," field."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Verify and Publish"),"."),(0,r.kt)("li",{parentName:"ul"},"BscScan will take a few seconds to compile your contract, verify, and publish it.")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This tutorial guided you through the basics of creating and deploying a simple smart contract using the Remix IDE and MetaMask Web Wallet. It also provides step-by-step guide on how to verify and publish your deployed smart contract. This tutorial uses testnet, however, the exact same instructions and sequence will work on the mainnet as well."))}u.isMDXComponent=!0}}]);