"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const o={},l=void 0,s={unversionedId:"keys",id:"keys",title:"keys",description:"Introduction",source:"@site/docs/keys.md",sourceDirName:".",slug:"/keys",permalink:"/docs/keys",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/keys.md",tags:[],version:"current",frontMatter:{}},i={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Usage",id:"usage",level:2},{value:"mnemonic",id:"mnemonic",level:3},{value:"add",id:"add",level:3},{value:"create a new key",id:"create-a-new-key",level:4},{value:"import from seed",id:"import-from-seed",level:4},{value:"list",id:"list",level:3},{value:"show",id:"show",level:3},{value:"delete",id:"delete",level:3},{value:"update",id:"update",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"BNB Chain CLI has a sub-command named ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," to manage private keys.",(0,r.kt)("br",null),"\nIt is a key store to manage keys for users."),(0,r.kt)("p",null,"You can add a new key or import a key from seed.",(0,r.kt)("br",null),"\nThen you can list the keys added and show the detailed info of a specific key.",(0,r.kt)("br",null),"\nYou can also delete the given key or update the password used to protect private key.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"BNB Chain CLI use the keys you add to sign transactions for you.",(0,r.kt)("br",null),"\nFor example, if you want to transfer tokens to someone else, you just need to specify the name of\nthe key you want to use, and input the password of the key, then BNB Chain CLI will sign the\ntransaction for you if the password is right."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The usage is the same for ",(0,r.kt)("inlineCode",{parentName:"p"},"bnbcli")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tbnbcli")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./bnbcli keys\nKeys allows you to manage your local keystore for tendermint.\n\n  These keys may be in any format supported by go-crypto and can be\n  used by light-clients, full nodes, or any other application that\n  needs to sign with a private key.\n\nUsage:\n  bnbcli keys [command]\n\nAvailable Commands:\n  mnemonic    Compute the bip39 mnemonic for some input entropy\n  add         Create a new key, or import from seed\n  list        List all keys\n  show        Show key info for the given name\n\n  delete      Delete the given key\n  update      Change the password used to protect private key\n\nFlags:\n  -h, --help   help for keys\n\nGlobal Flags:\n  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")\n      --home string       directory for config and data (default "/Users/yourname/.bnbcli")\n  -o, --output string     Output format (text|json) (default "text")\n      --trace             print out full stack trace on errors\n\nUse "bnbcli keys [command] --help" for more information about a command.\n')),(0,r.kt)("h3",{id:"mnemonic"},"mnemonic"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mnemonic")," is used to generate bip39 mnemonic.",(0,r.kt)("br",null),"\nYou can restore key from the mnemonic generated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys mnemonic\nuncle mule squirrel cover theory oven rookie dry intact alert right afraid differ ability mule struggle spray usual must purity social ball flat short\n")),(0,r.kt)("h3",{id:"add"},"add"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," to create a new key or import from seed (mnemonic).",(0,r.kt)("br",null),"\nYou have to specify the name for the key you want to create."),(0,r.kt)("p",null,"To import with a mnemonic phrase, you need to include the ",(0,r.kt)("inlineCode",{parentName:"p"},"--recover")," flag in the command."),(0,r.kt)("h4",{id:"create-a-new-key"},"create a new key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys add testkey\nEnter a passphrase for your key:\nRepeat the passphrase:\nNAME:   TYPE:   ADDRESS: PUBKEY:\ntestkey local   bnc1e8zhj9wmgq4pwzrv264gfru2fk8x2hdvpclx3n  bncp1addwnpepqffepxlkrka9n33vyzmjwkpy05gpm46cn5de3x9v0vqswk7st5lkc7alhjv\n**Important** write this seed phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\npoverty joke nominee enough harsh elder flush noodle gift one limit tree sponsor sun radio above acid air winter inflict profit there brand water\n")),(0,r.kt)("h4",{id:"import-from-seed"},"import from seed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys add testkey --recover\nEnter a passphrase for your key:\nRepeat the passphrase:\n> Enter your recovery seed phrase:\npoverty joke nominee enough harsh elder flush noodle gift one limit tree sponsor sun radio above acid air winter inflict profit there brand water\nNAME:   TYPE:   ADDRESS:    PUBKEY:\ntestkey local   bnc1e8zhj9wmgq4pwzrv264gfru2fk8x2hdvpclx3n  bncp1addwnpepqffepxlkrka9n33vyzmjwkpy05gpm46cn5de3x9v0vqswk7st5lkc7alhjv\n")),(0,r.kt)("h3",{id:"list"},"list"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"list")," can list all the keys you have."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys list\nNAME:   TYPE:   ADDRESS:    PUBKEY:\ntest    local   bnc16jv838jw8zcgucvrhreen73adwgnue6ujcz2cf  bncp1addwnpepqgxacvpgnvss94zs363lheuh2xldj0hvymftuds8d69u5cau5kz3y23rj6l\ntestkey local   bnc1e8zhj9wmgq4pwzrv264gfru2fk8x2hdvpclx3n  bncp1addwnpepqffepxlkrka9n33vyzmjwkpy05gpm46cn5de3x9v0vqswk7st5lkc7alhjv\n")),(0,r.kt)("h3",{id:"show"},"show"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"show")," is used to show the detail of the key by the name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys show testkey\nNAME:   TYPE:   ADDRESS:    PUBKEY:\ntestkey local   bnc1e8zhj9wmgq4pwzrv264gfru2fk8x2hdvpclx3n  bncp1addwnpepqffepxlkrka9n33vyzmjwkpy05gpm46cn5de3x9v0vqswk7st5lkc7alhjv\n")),(0,r.kt)("h3",{id:"delete"},"delete"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"delete")," is used to delete the key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys delete testkey\nDANGER - enter password to permanently delete key:\nPassword deleted forever (uh oh!)\n")),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"update")," is used to update the password that is currently used to protect the private key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys update test\nEnter the current passphrase:\nEnter the new passphrase:\nRepeat the new passphrase:\nPassword successfully updated!\n")))}u.isMDXComponent=!0}}]);