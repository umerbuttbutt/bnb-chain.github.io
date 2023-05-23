"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4099],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:e},c),{},{components:a})):r.createElement(h,i({ref:e},c))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12942:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const o={sidebar_label:"Using Replit",hide_table_of_content:!1,sidebar_position:2},i="Using Replit IDE for Deploying Smart Contracts on BSC",l={unversionedId:"replit",id:"replit",title:"Using Replit IDE for Deploying Smart Contracts on BSC",description:"Replit is a coding platform that allows you to write code and host apps. Replit supports Solidity programming language and provides all of the features and functionality that are required by Web3 developers for creating and deploying smart contracts.",source:"@site/docs/replit.md",sourceDirName:".",slug:"/replit",permalink:"/docs/replit",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/replit.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Using Replit",hide_table_of_content:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Using HardHat",permalink:"/docs/hardhat-new"},next:{title:"Verify Your Contract on BscScan",permalink:"/docs/verify"}},s={},p=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Working with a Repl",id:"working-with-a-repl",level:2},{value:"Create Smart Contract",id:"create-smart-contract",level:2},{value:"Deploy on BSC",id:"deploy-on-bsc",level:2},{value:"Publish to Replit\u200b",id:"publish-to-replit",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},u="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-replit-ide-for-deploying-smart-contracts-on-bsc"},"Using Replit IDE for Deploying Smart Contracts on BSC"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.replit.com/tutorials/01-introduction-to-the-repl-it-ide"},"Replit")," is a coding platform that allows you to write code and host apps. Replit supports ",(0,n.kt)("a",{parentName:"p",href:"https://replit.com/@replit/Solidity-starter-beta?v=1"},"Solidity programming language")," and provides all of the features and functionality that are required by Web3 developers for creating and deploying smart contracts."),(0,n.kt)("p",null,"In this tutorial, we explain how to build and deploy a solidity smart contract on the BSC Testnet using the ",(0,n.kt)("a",{parentName:"p",href:"https://replit.com/signup"},"Replit IDE")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://replit.com/@replit/Solidity-starter-beta?v=1"},"Replit Solidity Template (Solidity starter beta)")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For additional examples about Solidity with Replit, you can read the article ",(0,n.kt)("ins",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://blog.replit.com/solidity"},"Get started with Replit!")))," or check ",(0,n.kt)("ins",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://docs.replit.com/tutorials/33-escrow-contract-with-solidity"},"Replit Solidity documentation and Escrow contract tutorial"))))),(0,n.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,n.kt)("p",null,"There is no need for any local environment settings for deploying solidity smart contracts on BSC using Replit."),(0,n.kt)("p",null,"All you require is a browser-based Web3 wallet (e.g. MetaMask) to interact with the BSC Testnet and deployed contracts. If you are already using MetaMask, it is recommended to create a new account for testing with Replit. You can do this from the account menu, which appears when you click on the account avatar in the top right corner of MetaMask interface."),(0,n.kt)("p",null,"You must set up all of the following Pre-requisites to be able to deploy your solidity smart contract on BSC:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://replit.com/signup"},"Create a Replit account")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Download Metamask wallet")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"},"Configure BNB Smart Chain Testnet on Metamask")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://testnet.binance.org/faucet-smart"},"Get BNB testnet tokens"))),(0,n.kt)("h2",{id:"working-with-a-repl"},"Working with a Repl"),(0,n.kt)("p",null,"Every ",(0,n.kt)("a",{parentName:"p",href:"https://docs.replit.com/getting-started/using-replit-free#repls"},"Repl")," that you create is a fully functional development and production environment. Follow the steps to create a solidity starter Repl:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://replit.com/login"},"Login")," or ",(0,n.kt)("a",{parentName:"li",href:"https://replit.com/signup"},"create an account"),". After creating your ",(0,n.kt)("a",{parentName:"li",href:"https://docs.replit.com/tutorials/01-introduction-to-the-repl-it-ide"},"Replit account"),", your home screen will include a dashboard where you can view, create projects, and manage your account."),(0,n.kt)("li",{parentName:"ol"},"Once logged in, create a Solidity starter repl, Select ",(0,n.kt)("strong",{parentName:"li"},"+ Create Repl")," from the left panel or ",(0,n.kt)("strong",{parentName:"li"},"+")," in the top right corner of the screen."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("a",{parentName:"li",href:"https://replit.com/@replit/Solidity-starter-beta?v=1"},(0,n.kt)("strong",{parentName:"a"},"Solidity starter (beta)"))," template and specify a title for your project."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"+ Create Repl")," for creating your project.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note"),"\nThe Solidity starter repl comes with a friendly web interface, built using the ",(0,n.kt)("ins",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://web3js.readthedocs.io/en/v1.5.2/"},"Web3 Ethereum JavaScript API"))),", which you can use to deploy and interact with your smart contracts. For this tutorial, we will deploy smart contract on to BNB Smart Chain Testnet.")),(0,n.kt)("h2",{id:"create-smart-contract"},"Create Smart Contract"),(0,n.kt)("p",null,"Delete the contents of the contract.sol file and paste the following solidity code into this file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'// SPDX-License-Identifier: MIT\npragma solidity >0.4.0 <= 0.9.0;\n\ncontract HelloWorld{\n   function sayHello() public pure returns (string memory) {\n      return "Hello, World!";\n   }\n}\n')),(0,n.kt)("h2",{id:"deploy-on-bsc"},"Deploy on BSC"),(0,n.kt)("p",null,"Make sure that you have followed the list of Pre-requisites above so that you are ready to deploy and interact with your smart contract:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Run")," (at the Top) to install all relevant packages and start up the contract deployment UI."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/93580180/189651036-d5c68e4d-9154-4f36-a9b1-09ddb75bf64c.png",alt:"image"})," icon to open the web interface for deloyment in a new browser tab."),(0,n.kt)("li",{parentName:"ol"},"Connect your MetaMask wallet to the web interface and switch to the ",(0,n.kt)("a",{parentName:"li",href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"},"BSC Testnet"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Connect wallet"),", select your account, then choose Connect.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/189649199-320b56ef-8cf8-44f7-a90d-d4a640c4521f.png",alt:"image"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/189649134-41518f50-054f-4d5d-9b37-9af57bd16526.png",alt:"image"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"From the Drop-down list, Select the contract that you want to deploy. Click on ",(0,n.kt)("strong",{parentName:"li"},"Deploy"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/189649368-75a8e91d-3225-48f9-81f4-3bc1c2f5a7a5.png",alt:"image"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Approve the MetaMask notification that appears asking for confirmation of the transaction from your wallet to deploy the smart contract.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/189649422-4677b218-4292-43dd-8c7f-c9c14d6604fe.png",alt:"image"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Copy the address of the deployed contract.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/189649474-8ba1660f-ee56-4284-bdf7-e216161409f5.png",alt:"image"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://testnet.bscscan.com/"},"Navigate to BscScan Testnet Explorer")," to search and view your deployed contract. Using the contract address to search for it. ")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/189649528-73701873-9a32-41cc-9276-fe1daafe809d.png",alt:"image"})),(0,n.kt)("p",null,"Once your contract has been deployed, it will show up as expandable boxes below the drop-down box. Expand it and take a look at all the different functions available. You can now interact with your contract using the provided user interface or from a sharable URL shown on the interface."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/93580180/189649592-5ce05a4f-1961-41f3-9a97-e0b11f54a470.png",alt:"image"})),(0,n.kt)("h2",{id:"publish-to-replit"},"Publish to Replit\u200b"),(0,n.kt)("p",null,"Replit allows you to publish your projects to a personal profile. After publishing, projects will show up on your spotlight page for others to explore, interact with, clone, and collaborate."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://docs.replit.com/hosting/sharing-your-repl#publish-your-repl"},"Publish your Repl"),"."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"This tutorial guided you through the basics of creating and deploying a smart contract using the Replit IDE. We also provided steps on how to interact with the deployed contract online and publish your replit project. This tutorial uses testnet, however, the exact same instructions and sequence will work on the mainnet as well."))}d.isMDXComponent=!0}}]);