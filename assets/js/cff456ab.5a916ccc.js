"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5605],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>k});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=t.createContext({}),c=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},m="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=c(a),p=l,k=m["".concat(d,".").concat(p)]||m[p]||i[p]||o;return a?t.createElement(k,s(s({ref:n},u),{},{components:a})):t.createElement(k,s({ref:n},u))}));function k(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=a.length,s=new Array(o);s[0]=p;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r[m]="string"==typeof e?e:l,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},46315:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>i,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=a(83117),l=(a(67294),a(3905));const o={},s="Example for tx response, for different tx types",r={unversionedId:"beaconchain/develop/api-reference/block-service-example",id:"beaconchain/develop/api-reference/block-service-example",title:"Example for tx response, for different tx types",description:"NEW_ORDER",source:"@site/docs/beaconchain/develop/api-reference/block-service-example.md",sourceDirName:"beaconchain/develop/api-reference",slug:"/beaconchain/develop/api-reference/block-service-example",permalink:"/docs/beaconchain/develop/api-reference/block-service-example",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/develop/api-reference/block-service-example.md",tags:[],version:"current",frontMatter:{}},d={},c=[{value:"NEW_ORDER",id:"new_order",level:2},{value:"CANCEL_ORDER",id:"cancel_order",level:2},{value:"TRANSFER",id:"transfer",level:2},{value:"TRANSFER (multi-send case)",id:"transfer-multi-send-case",level:2},{value:"CROSS_TRANSFER_OUT",id:"cross_transfer_out",level:2},{value:"MINT",id:"mint",level:2},{value:"BURN_TOKEN",id:"burn_token",level:2},{value:"FREEZE_TOKEN",id:"freeze_token",level:2},{value:"UN_FREEZE_TOKEN",id:"un_freeze_token",level:2},{value:"ISSUE_TOKEN",id:"issue_token",level:2},{value:"TINY_TOKEN_ISSUE",id:"tiny_token_issue",level:2},{value:"MINI_TOKEN_ISSUE",id:"mini_token_issue",level:2},{value:"MINI_TOKEN_LIST",id:"mini_token_list",level:2},{value:"LIST_TOKEN",id:"list_token",level:2},{value:"SIDE_PROPOSAL",id:"side_proposal",level:2},{value:"SIDE_VOTE",id:"side_vote",level:2},{value:"CREATE_SIDECHAIN_VALIDATOR",id:"create_sidechain_validator",level:2},{value:"EDIT_SIDECHAIN_VALIDATOR",id:"edit_sidechain_validator",level:2},{value:"CROSS_BIND",id:"cross_bind",level:2},{value:"MINI_TOKEN_SET_URI",id:"mini_token_set_uri",level:2},{value:"SIDECHAIN_UNJAIL",id:"sidechain_unjail",level:2},{value:"TIME_LOCK",id:"time_lock",level:2},{value:"TIME_UNLOCK",id:"time_unlock",level:2},{value:"TIME_RELOCK",id:"time_relock",level:2},{value:"SUBMIT_PROPOSAL",id:"submit_proposal",level:2},{value:"VOTE",id:"vote",level:2},{value:"DEPOSIT",id:"deposit",level:2},{value:"DEPOSIT_HTL",id:"deposit_htl",level:2},{value:"CLAIM_HTL",id:"claim_htl",level:2},{value:"REFUND_HTL",id:"refund_htl",level:2},{value:"HTL_TRANSFER",id:"htl_transfer",level:2},{value:"SIDECHAIN_REDELEGATE",id:"sidechain_redelegate",level:2},{value:"SIDECHAIN_DELEGATE",id:"sidechain_delegate",level:2},{value:"ORACLE_CLAIM",id:"oracle_claim",level:2},{value:"TRANSFER_TOKEN_OWNERSHIP",id:"transfer_token_ownership",level:2},{value:"SET_ACCOUNT_FLAG",id:"set_account_flag",level:2},{value:"Block of height 170155309",id:"block-of-height-170155309",level:2}],u={toc:c},m="wrapper";function i(e){let{components:n,...a}=e;return(0,l.kt)(m,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"example-for-tx-response-for-different-tx-types"},"Example for tx response, for different tx types"),(0,l.kt)("h2",{id:"new_order"},"NEW_ORDER"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "5C18F10BA750E65CA662D8F5F16E6CCC85EECEAB35B8165FD6091B35B20F2D05",\n    blockHeight: 162412419,\n    blockTime: 1620722432270,\n    type: "NEW_ORDER",\n    fee: 0,\n    code: 0,\n    source: 0,\n    sequence: 687800,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"orderId":"75B7DCA71844FA7F59634C29A793CD881A15787E-687801","orderType":"LIMIT","price":"14534","quantity":"3469000000000","side":"BUY","symbol":"MITH-C76_BNB","timeInForce":"GTE"}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb1wkmaefccgna87ktrfs560y7d3qdp27r7ak44x9",\n    toAddr: null\n}\n')),(0,l.kt)("p",null,"Note: ",(0,l.kt)("inlineCode",{parentName:"p"},"amount")," field is null - if you want to get the base or quote asset amount, you can parse it from ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," field."),(0,l.kt)("h2",{id:"cancel_order"},"CANCEL_ORDER"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "2E0CB6147B60CBABB8E50AEBDD461295F531E330A7B946229E63D51A967CFEF3",\n    blockHeight: 162412424,\n    blockTime: 1620722434484,\n    type: "CANCEL_ORDER",\n    fee: 0,\n    code: 0,\n    source: 0,\n    sequence: 35855681,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"orderId":"1468EE412C3ADC9CFF3EF31ADC7EDD288F5E208E-35855646","symbol":"BNB_BTCB-1DE"}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb1z35wusfv8twfele77vddclka9z84ugywug48gn",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"transfer"},"TRANSFER"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "D3AA7448385BFEDFE2434D18645C4729D441633BF8E2E98EF702188366BEC8AC",\n    blockHeight: 162412424,\n    blockTime: 1620722434484,\n    type: "TRANSFER",\n    fee: 7500,\n    code: 0,\n    source: 2,\n    sequence: 3,\n    memo: "100258987",\n    log: "Msg 0: ",\n    data: null,\n    asset: "ADA-9F4",\n    amount: 4379000000,\n    fromAddr: "bnb1hu07yp89lncjwcu4775npe3s5s0p5ekne2d97y",\n    toAddr: "bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23"\n}\n')),(0,l.kt)("h2",{id:"transfer-multi-send-case"},"TRANSFER (multi-send case)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "1ACF2C07C2B25865A422C6A6EF8256940E813C09F7279430973254F614521980",\n    blockHeight: 162635206,\n    blockTime: 1620818353134,\n    type: "TRANSFER",\n    fee: 12000,\n    code: 0,\n    source: 1,\n    sequence: 34520,\n    memo: "0",\n    log: "Msg 0: ",\n    data: "{"outputs":[{"address":"bnb1ffaqy2g92yglhps7vwc3h4dyjf2kq73xlefzkc","amounts":[{"denom":"BNB","amount":50000000}]},{"address":"bnb15qced76xere38hmmpe644u5kd8v4lzl9gsex9w","amounts":[{"denom":"BNB","amount":1}]}],"inputs":[{"address":"bnb1t38ccns9var4ac4yj2ylmu99r9ecmggr8ye5e5","amounts":[{"denom":"BNB","amount":50000000}]},{"address":"bnb15qced76xere38hmmpe644u5kd8v4lzl9gsex9w","amounts":[{"denom":"BNB","amount":1}]}]}",\n    asset: null,\n    amount: null,\n    fromAddr: null,\n    toAddr: null\n}\n')),(0,l.kt)("p",null,"Note: mutli send transfer is a special kind of TRANSFER. In this case, you can consider this is a bucket, some addresses put tokens into it and other addresses get tokens out of it."),(0,l.kt)("h2",{id:"cross_transfer_out"},"CROSS_TRANSFER_OUT"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "D4E1B8A31F62065E8894AEC9C3021A19C5D6AC1A0C742589C8446D9E2E533D4A",\n    blockHeight: 162412439,\n    blockTime: 1620722441110,\n    type: "CROSS_TRANSFER_OUT",\n    fee: 7500,\n    code: 0,\n    source: 2,\n    sequence: 5,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"expireTime":1620723042}",\n    asset: "BNB",\n    amount: 3579779,\n    fromAddr: "bnb1v6jqu5lstgwxdc9r6aexdh4mqee70ld7vxrj09",\n    toAddr: "0x3c9d8f8fca99bd7b8af284425784e36e45f901ab"\n}\n')),(0,l.kt)("h2",{id:"mint"},"MINT"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "8206C5136372D6261E9984728D050E12324679CDBBF6F809B1AD1B8BF936A1E0",\n    blockHeight: 161931307,\n    blockTime: 1620518810151,\n    type: "MINT",\n    fee: 200000,\n    code: 0,\n    source: 1,\n    sequence: 339,\n    memo: "",\n    log: "Msg 0: ",\n    data: null,\n    asset: "TCT-826",\n    amount: 100000000000000,\n    fromAddr: "bnb1akey87kt0r8y3fmhu2l8eyzdjvt9ptl5cppz0v",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"burn_token"},"BURN_TOKEN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "D315E9218178FEF2048FFCB64F1E50712F083215451F7A8752755A00550AAB86",\n    blockHeight: 160916832,\n    blockTime: 1620091937909,\n    type: "BURN_TOKEN",\n    fee: 200000,\n    code: 0,\n    source: 1,\n    sequence: 3,\n    memo: "",\n    log: "Msg 0: ",\n    data: null,\n    asset: "CTHUCOIN-AACM",\n    amount: 100000000,\n    fromAddr: "bnb1xsaphxcj3d80hmyv8d8z2mkqwz4tekzepdfq73",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"freeze_token"},"FREEZE_TOKEN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "529BA70106BCA2BAF741D575015ACC20825C7B15166C7FAF357E2746A07A8F3D",\n    blockHeight: 162411486,\n    blockTime: 1620722031659,\n    type: "FREEZE_TOKEN",\n    fee: 100000,\n    code: 0,\n    source: 0,\n    sequence: 39,\n    memo: "",\n    log: "Msg 0: ",\n    data: null,\n    asset: "AWC-986",\n    amount: 488514694,\n    fromAddr: "bnb1xch7xg3t23vl5ugc4ghzpkqv57dzcdtkurr4jc",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"un_freeze_token"},"UN_FREEZE_TOKEN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "10B1784B11E3929BE95BF659C9910E1738E81908473579ABDBBB42C70E288733",\n    blockHeight: 162410201,\n    blockTime: 1620721488567,\n    type: "UN_FREEZE_TOKEN",\n    fee: 100000,\n    code: 0,\n    source: 0,\n    sequence: 3,\n    memo: "",\n    log: "Msg 0: ",\n    data: null,\n    asset: "AWC-986",\n    amount: 15400000000,\n    fromAddr: "bnb1ajuxdaxnqd6e5d5vq87le4797xkgr9hgqgt7jp",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"issue_token"},"ISSUE_TOKEN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "509393BA67C1B801D3F407E866A1C71E40D6E20A1EAB6C3AD8C0BFC2E9AA9910",\n    blockHeight: 162222677,\n    blockTime: 1620641433340,\n    type: "ISSUE_TOKEN",\n    fee: 1000000000,\n    code: 0,\n    source: 1,\n    sequence: 32,\n    memo: "",\n    log: "Msg 0: Issued DVDO-509",\n    data: "{"mintable":false,"name":"Davido Social Token","totalSupply":1000000000000000}",\n    asset: "DVDO-509",\n    amount: 1000000000000000,\n    fromAddr: "bnb1ujvzeuft0ezf9fu4u0mk52t8mc7t8geyfkevms",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"tiny_token_issue"},"TINY_TOKEN_ISSUE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "989F5C9489260F1F89B1C098BA7E6DBCD780DD825CA3E935F823EA0FD3692E62",\n    blockHeight: 152840826,\n    blockTime: 1616814337995,\n    type: "TINY_TOKEN_ISSUE",\n    fee: 40000000,\n    code: 0,\n    source: 1,\n    sequence: 0,\n    memo: "",\n    log: "Msg 0: Issued YFGYM-989M",\n    data: "{"mintable":false,"name":"YEAR FINANCE GYM","tokenURI":"https://yfgym.finance/","totalSupply":1000000000000}",\n    asset: "YFGYM-989M",\n    amount: 1000000000000,\n    fromAddr: "bnb19g4d50vev04jlwy6vpqg97etdews6gjld9uz6r",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"mini_token_issue"},"MINI_TOKEN_ISSUE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "0347178CB54E04289D834EA9C05383CAD5DC1A661322F2C91B831FD240792050",\n    blockHeight: 161286951,\n    blockTime: 1620245763946,\n    type: "MINI_TOKEN_ISSUE",\n    fee: 60000000,\n    code: 0,\n    source: 1,\n    sequence: 0,\n    memo: "",\n    log: "Msg 0: Issued BZB-034M",\n    data: "{"mintable":false,"name":"One million BZE","tokenURI":"https://bargchain.io","totalSupply":100000000000000}",\n    asset: "BZB-034M",\n    amount: 100000000000000,\n    fromAddr: "bnb1aww88fe99fmvd9s9mnlzu299tuwumsjqvudx4y",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"mini_token_list"},"MINI_TOKEN_LIST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "96A73849D5A55FC8BAEB677307F8A0790AD0727BBC9CA4BEB1CD1C93087841FF",\n    blockHeight: 161289727,\n    blockTime: 1620246951722,\n    type: "MINI_TOKEN_LIST",\n    fee: 100000000,\n    code: 0,\n    source: 1,\n    sequence: 1,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"baseAsset":"BZB-034M","initPrice":100000000,"quoteAsset":"BNB"}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb1aww88fe99fmvd9s9mnlzu299tuwumsjqvudx4y",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"list_token"},"LIST_TOKEN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "1E3A50D7900EAA4BE2785AF312C2CF521C8AE318916D860A8E75C220E2B78F7C",\n    blockHeight: 150713320,\n    blockTime: 1615976164272,\n    type: "LIST_TOKEN",\n    fee: 20000000000,\n    code: 0,\n    source: 0,\n    sequence: 108,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"baseAsset":"BURGER-33A","initPrice":400000000,"proposalId":325,"quoteAsset":"BUSD-BD1"}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb19v2ayq6k6e5x6ny3jdutdm6kpqn3n6mxheegvj",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"side_proposal"},"SIDE_PROPOSAL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "46032C3047BB1B62A149EA1A0C6DC0715656E8B0B7DC29BB1E9DBD2312E40144",\n    blockHeight: 151792920,\n    blockTime: 1616399780337,\n    type: "SIDE_PROPOSAL",\n    fee: 100000000,\n    code: 0,\n    source: 0,\n    sequence: 1,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"description":"{\\"key\\":\\"dynamicExtraIncentiveAmount\\",\\"value\\":\\"00000000000000000000000000000000000000000000000000038D7EA4C68000\\",\\"target\\":\\"0000000000000000000000000000000000001005\\"}","initDeposit":[{"amount":200000000000,"denom":"BNB"}],"proposalId":"7","proposalType":"CrossSideChainParamsChange","proposer":"bnb1mn45vmxzkua7edyr3uzwjcgz4du7fnyaa2r77l","sideChainId":"bsc","title":"set dynamicExtraIncentiveAmount","votingPeriod":1800000000000}",\n    asset: "BNB",\n    amount: 200000000000,\n    fromAddr: "bnb1mn45vmxzkua7edyr3uzwjcgz4du7fnyaa2r77l",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"side_vote"},"SIDE_VOTE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "F33281736A31781D95CA899D5B0FCD315D39460461B98277303C4ACB35C9B3DA",\n    blockHeight: 151794873,\n    blockTime: 1616400614551,\n    type: "SIDE_VOTE",\n    fee: 0,\n    code: 0,\n    source: 0,\n    sequence: 3,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"option":1,"proposalId":7,"sideChainId":"bsc","voter":"bnb1y52k5rfmqv46p8x8jsnppzgkjgzt5m0zg64806"}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb1y52k5rfmqv46p8x8jsnppzgkjgzt5m0zg64806",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"create_sidechain_validator"},"CREATE_SIDECHAIN_VALIDATOR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "6CB370013BA91ECC401FF4D6980C8C78C0372A30CE1C6DA7E1FD0ACC493C8124",\n    blockHeight: 150275610,\n    blockTime: 1615802657229,\n    type: "CREATE_SIDECHAIN_VALIDATOR",\n    fee: 200000000,\n    code: 0,\n    source: 0,\n    sequence: 0,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"commission":{"rate":25000000,"maxRate":90000000,"maxChangeRate":5000000,"updateTimeInMs":0},"delegation":{"amount":1000000000000,"denom":"BNB"},"delegatorAddr":"bnb1a7n56r44h4tlgrk3mazxx6cavhgpkrm7amq2k3","description":{"moniker":"InfStones","identity":"xxx","website":"https://infstones.com","details":"Fueling Blockchains, Infinitely"},"sideChainId":"bsc","sideConsAddr":"0xee226379db83cffc681495730c11fdde79ba4c0c","sideFeeAddr":"0xee226379db83cffc681495730c11fdde79ba4c0c","validatorAddr":"bva1a7n56r44h4tlgrk3mazxx6cavhgpkrm7a8p6g4"}",\n    asset: "BNB",\n    amount: 1000000000000,\n    fromAddr: "bnb1a7n56r44h4tlgrk3mazxx6cavhgpkrm7amq2k3",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"edit_sidechain_validator"},"EDIT_SIDECHAIN_VALIDATOR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "A516AE597CD41C56B611A015AF85D2D34EEC38F2CD29344CB33C4E1AD5DCC96F",\n    blockHeight: 159272334,\n    blockTime: 1619413244112,\n    type: "EDIT_SIDECHAIN_VALIDATOR",\n    fee: 20000000,\n    code: 0,\n    source: 0,\n    sequence: 5,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"commissionRate":14500000,"description":{"moniker":"InfStones","identity":"xxx","website":"https://infstones.com","details":"Fueling Blockchains, Infinitely"},"sideChainId":"bsc","sideFeeAddr":null,"validatorAddress":"bva1a7n56r44h4tlgrk3mazxx6cavhgpkrm7a8p6g4"}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb1a7n56r44h4tlgrk3mazxx6cavhgpkrm7amq2k3",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"cross_bind"},"CROSS_BIND"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "CDC29B8B81C8468D68C072D7670565EB67E66662F0FCB47C6AFFAA94CE221852",\n    blockHeight: 160097869,\n    blockTime: 1619754894601,\n    type: "CROSS_BIND",\n    fee: 100000000,\n    code: 0,\n    source: 0,\n    sequence: 994,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"contractAddress":"0x5c7e71f46e49cf816f9863461eeb36e3bc8e3b51","contractDecimal":18,"expireTime":1622340046}",\n    asset: "EQL-586",\n    amount: 0,\n    fromAddr: "bnb1uz0s54rzv022dh66l7atwk83wqcet9qstgg358",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"mini_token_set_uri"},"MINI_TOKEN_SET_URI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "A13FB0491B036BD5EA9FE91A695610B43BC00B719A42AFB78893D2D74C5E6BA5",\n    blockHeight: 161047023,\n    blockTime: 1620145492229,\n    type: "MINI_TOKEN_SET_URI",\n    fee: 7500,\n    code: 0,\n    source: 0,\n    sequence: 184,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"uri":"https://imcoinproject.com/"}",\n    asset: "IMC-D5AM",\n    amount: null,\n    fromAddr: "bnb1xwmcqw4vqm32z08gl0c06ydwxgm4z2gnvh2rc4",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"sidechain_unjail"},"SIDECHAIN_UNJAIL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "7B1AA4F71BD591DE470832EF0A5832BDAE8EA05CD174B881AC276734EEF5AC69",\n    blockHeight: 162180199,\n    blockTime: 1620623537235,\n    type: "SIDECHAIN_UNJAIL",\n    fee: 50000000,\n    code: 0,\n    source: 0,\n    sequence: 13,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"sideChainId":"bsc","validatorAddr":"bva1a7n56r44h4tlgrk3mazxx6cavhgpkrm7a8p6g4"}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb1a7n56r44h4tlgrk3mazxx6cavhgpkrm7amq2k3",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"time_lock"},"TIME_LOCK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "486B93963E8D971AC9B58A803FC5666FFAF5CB81102D70A57CA4A25EBF922008",\n    blockHeight: 161218645,\n    blockTime: 1620216900755,\n    type: "TIME_LOCK",\n    fee: 200000,\n    code: 0,\n    source: 0,\n    sequence: 1,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"amount":[{"amount":20900000000,"denom":"SWINGBY-888"}],"description":"for me","lockId":"2","lockTime":1620507600000}",\n    asset: "SWINGBY-888",\n    amount: 20900000000,\n    fromAddr: "bnb1gnjvszgdt35ysgekxcll3qlfur7l60rat7n8m4",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"time_unlock"},"TIME_UNLOCK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "981727753AE33BAC05AFB0678A5DD465FBDE0E1F575C8B187C997EBA1F382725",\n    blockHeight: 162201236,\n    blockTime: 1620632390767,\n    type: "TIME_UNLOCK",\n    fee: 200000,\n    code: 0,\n    source: 0,\n    sequence: 16,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"lockId":2}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb1gnjvszgdt35ysgekxcll3qlfur7l60rat7n8m4",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"time_relock"},"TIME_RELOCK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "757C44DD729718B578B14C90927DBD929C909756601CC4B9F578457591896813",\n    blockHeight: 162210587,\n    blockTime: 1620636356636,\n    type: "TIME_RELOCK",\n    fee: 200000,\n    code: 0,\n    source: 0,\n    sequence: 38,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"amount":[{"amount":155303853729657,"denom":"SWINGBY-888"}],"description":"e0797af9059f83b013994edc7bc58ca7e1c09aa558f5781898885534f28e06e2,0x4672f76fE968d6A490c0C79E0920e092afa01C73","lockId":10,"lockTime":1624441844000}",\n    asset: "SWINGBY-888",\n    amount: 155303853729657,\n    fromAddr: "bnb17ed0pdy6fq4q40vc5ra78d9yw7sa0mw0k72apq",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"submit_proposal"},"SUBMIT_PROPOSAL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "95370CAA3A5FEB028ED64B28E500CBC4FE1CC3797EEEB0278223C0BBB52DC2D7",\n    blockHeight: 162183625,\n    blockTime: 1620624972192,\n    type: "PROPOSAL",\n    fee: 100000000,\n    code: 0,\n    source: 0,\n    sequence: 24,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"baseAssetSymbol":"SPARTA-7F3","description":"{\\"base_asset_symbol\\":\\"SPARTA-7F3\\",\\"quote_asset_symbol\\":\\"BUSD-BD1\\",\\"justification\\":\\"delist SPARTA-7F3 \\",\\"is_executed\\":false}","initDeposit":[{"amount":100000000000,"denom":"BNB"}],"proposalId":"333","proposalType":"DelistTradingPair","proposer":"bnb189jtg9efdgvlj4gwrek8q4wu5jwqlqdpzgmug9","quoteAssetSymbol":"BUSD-BD1","title":"delist SPARTA-7F3","votingPeriod":172800000000000}",\n    asset: "BNB",\n    amount: 100000000000,\n    fromAddr: "bnb189jtg9efdgvlj4gwrek8q4wu5jwqlqdpzgmug9",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"vote"},"VOTE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "085B69D6749359F95F1BDF11FAFF9039F9D8615FB418729A379A43C167DED4AD",\n    blockHeight: 162362506,\n    blockTime: 1620701342872,\n    type: "VOTE",\n    fee: 0,\n    code: 0,\n    source: 0,\n    sequence: 470981,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"option":1,"proposalId":333,"voter":"bnb167z5qvur7xu85q885l906dgcwmgsvm3ppdarpf"}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb167z5qvur7xu85q885l906dgcwmgsvm3ppdarpf",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"deposit"},"DEPOSIT"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "BB674BC9E9E6A399619BBEEFBF45DA639D9F80479558098BDF40D6004B21A660",\n    blockHeight: 149029215,\n    blockTime: 1615274824770,\n    type: "DEPOSIT",\n    fee: 12500,\n    code: 0,\n    source: 0,\n    sequence: 3,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"amount":[{"amount":99900000000,"denom":"BNB"}],"proposalId":315}",\n    asset: "BNB",\n    amount: 99900000000,\n    fromAddr: "bnb189jtg9efdgvlj4gwrek8q4wu5jwqlqdpzgmug9",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"deposit_htl"},"DEPOSIT_HTL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "26B140338C136A587F9355E96763C641D5B88385A8619B02EEBB7915E3B18C99",\n    blockHeight: 41455798,\n    blockTime: 1571127824815,\n    type: "DEPOSIT_HTL",\n    fee: 7500,\n    code: 0,\n    source: 0,\n    sequence: 0,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"amount":[{"amount":10000000000,"denom":"CBM-4B2"},{"amount":10000000000,"denom":"VRAB-B56"}],"swapId":"3361b6992877abb5e8f9bb9644bea6b4089bd5eb6b113fa64990af0f35b14870"}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb1vwpx9zyletukt9wvmhqwhr2ahfrvnkt9nraxjs",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"claim_htl"},"CLAIM_HTL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "E09D9037782F0CAD9FF0643E6CA9736F56900FCEDF700CC3463A5B39A8982B00",\n    blockHeight: 162412011,\n    blockTime: 1620722255242,\n    type: "CLAIM_HTL",\n    fee: 7500,\n    code: 0,\n    source: 0,\n    sequence: 1886,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"randomNumber":"f31e0a332a52be39492985bf5a651946f68f99e1655f02bf46cff7c08f3737ef","swapId":"979a817aece6392edc1190b3b8901c74c7d0177b4f5c28e6ea546037efa15a15"}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb14mhpmvnt5e98lc75v8mphqtavxxgsawkx4dsnx",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"refund_htl"},"REFUND_HTL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "C3CD313C4BA631BB2919E03D4F2CF13631FE546A58BF55CA329179779046C1F7",\n    blockHeight: 162367787,\n    blockTime: 1620703589944,\n    type: "REFUND_HTL",\n    fee: 7500,\n    code: 0,\n    source: 0,\n    sequence: 1877,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"swapId":"e0b3090b8a8e822c34559a36d48444114d2385d06c380ca07aa116738f0c9328"}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb14mhpmvnt5e98lc75v8mphqtavxxgsawkx4dsnx",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"htl_transfer"},"HTL_TRANSFER"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "3A5D25924DA14ED085BA61037DBACABB4F8A364A0D61369468E7C2B793245B0A",\n    blockHeight: 162411931,\n    blockTime: 1620722220728,\n    type: "HTL_TRANSFER",\n    fee: 7500,\n    code: 0,\n    source: 0,\n    sequence: 1885,\n    memo: "",\n    log: "Msg 0: swapID: 979a817aece6392edc1190b3b8901c74c7d0177b4f5c28e6ea546037efa15a15",\n    data: "{"crossChain":true,"expectedIncome":"300727400BNB","heightSpan":1800,"outAmount":[{"amount":300727400,"denom":"BNB"}],"randomNumberHash":"44d8922418ddc545af63cb5fb4c2a4c07a9c761648d655996aa30c19bec71ee6","recipientOtherChain":"iaa1junhkdhuamtdz3ah6d5mfp6w9sxmlwera7mruz","senderOtherChain":"iaa1f2sgwns3nkqfvq2fafpfvkmr97p2wsrf7rck8z","timestamp":1620722213}",\n    asset: "BNB",\n    amount: 300727400,\n    fromAddr: "bnb14mhpmvnt5e98lc75v8mphqtavxxgsawkx4dsnx",\n    toAddr: "bnb1vkjuklnxslahuxka6dkq043u9xhlfu0hge4yqk"\n}\n')),(0,l.kt)("h2",{id:"sidechain_redelegate"},"SIDECHAIN_REDELEGATE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "A2E1E723997373D328DF1976134A7098658DD205323A62006D67DBD6FEC9DA43",\n    blockHeight: 162412117,\n    blockTime: 1620722301263,\n    type: "SIDECHAIN_REDELEGATE",\n    fee: 60000,\n    code: 0,\n    source: 2,\n    sequence: 7,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"amount":{"amount":410255325,"denom":"BNB"},"delegatorAddress":"bnb126qv3623uwh57hkwpmfdqzt6yxgvvx9ekwd5sm","dstValidatorAddress":"bva1nwyq37v4f02wu7zkc2rsynn8y7hh97ura39qyf","sideChainId":"bsc","srcValidatorAddress":"bva1ygrhjdjfyn2ffh5ha5llf5g6l3wxjt29hz9q4s"}",\n    asset: "BNB",\n    amount: 410255325,\n    fromAddr: "bnb126qv3623uwh57hkwpmfdqzt6yxgvvx9ekwd5sm",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"sidechain_delegate"},"SIDECHAIN_DELEGATE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "9CEC083DDCA3ACF8C68788FF10CC71430289502A709CD8BC3B80B6D5F89306B1",\n    blockHeight: 162412416,\n    blockTime: 1620722430911,\n    type: "SIDECHAIN_DELEGATE",\n    fee: 20000,\n    code: 0,\n    source: 2,\n    sequence: 0,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"delegation":{"amount":113571176,"denom":"BNB"},"delegatorAddr":"bnb1smkcpeh5ku4308q857v002a78qt9hxyalyz8mr","sideChainId":"bsc","validatorAddr":"bva1nwyq37v4f02wu7zkc2rsynn8y7hh97ura39qyf"}",\n    asset: "BNB",\n    amount: 113571176,\n    fromAddr: "bnb1smkcpeh5ku4308q857v002a78qt9hxyalyz8mr",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"oracle_claim"},"ORACLE_CLAIM"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "B8ECC7E200C4874914CEF1D7FB08340B45235D3B884726134E96A89EE38AC64A",\n    blockHeight: 162412439,\n    blockTime: 1620722441110,\n    type: "ORACLE_CLAIM",\n    fee: 0,\n    code: 0,\n    source: 0,\n    sequence: 706559,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"chainId":56,"payload":[{"channelId":3,"sequence":1192912,"payload":{"packageType":0,"crossChainFee":200000,"content":{"symbol":"BNB","contractAddress":"0x0000000000000000000000000000000000000000","amounts":[7100000],"receiverAddresses":["bnb1zwyuzhvm55fxc2w6gjxhwr670gxeuxchdc70w8"],"refundAddresses":["0x1533726cfe64da63b6169d249047d0231739308f"],"expireTime":1620722861}}},{"channelId":3,"sequence":1192913,"payload":{"packageType":0,"crossChainFee":200000,"content":{"symbol":"BNB","contractAddress":"0x0000000000000000000000000000000000000000","amounts":[9860839],"receiverAddresses":["bnb1uctxp6pd67q3eqcm9pd8e7xq60yw0zfg2uctkw"],"refundAddresses":["0x1451bd04f1e849113261072925ea5efdf95a1b53"],"expireTime":1620722888}}},{"channelId":3,"sequence":1192914,"payload":{"packageType":0,"crossChainFee":200000,"content":{"symbol":"BNB","contractAddress":"0x0000000000000000000000000000000000000000","amounts":[10000000],"receiverAddresses":["bnb1e47xrdkz28cerg5fzqyk9w08q68v5qccutty07"],"refundAddresses":["0x95f00d266590d325367f4d38c50eae89df84ef3d"],"expireTime":1620722937}}}],"sequence":829118,"validatorAddress":"bva1h9ymecpakr8p8lhchtah2xxx7x4xq099u8e07c"}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb1h9ymecpakr8p8lhchtah2xxx7x4xq099umclqu",\n    toAddr: null\n}\n')),(0,l.kt)("h2",{id:"transfer_token_ownership"},"TRANSFER_TOKEN_OWNERSHIP"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "41B51422C1238BA859B16F3731C34E1150122399994557FEC377D3D701E503E3",\n    blockHeight: 146158279,\n    blockTime: 1614067191757,\n    type: "TRANSFER_TOKEN_OWNERSHIP",\n    fee: 200000,\n    code: 0,\n    source: 0,\n    sequence: 1,\n    memo: "",\n    log: "Msg 0: ",\n    data: null,\n    asset: "QQ-EF5M",\n    amount: null,\n    fromAddr: "bnb1jae4k7eg8s7th0gn7yaxpwpen79a8jsrvwxufu",\n    toAddr: "bnb1jae4k7eg8s7th0gn7yaxpwpen79a8jsrvwxufu"\n}\n')),(0,l.kt)("h2",{id:"set_account_flag"},"SET_ACCOUNT_FLAG"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    hash: "F0B4A6577EB9FCAB3C4733EE955A9E1165280D812B450493B883168EFD594B25",\n    blockHeight: 159194287,\n    blockTime: 1619380919117,\n    type: "SET_ACCOUNT_FLAG",\n    fee: 20000000,\n    code: 0,\n    source: 0,\n    sequence: 404,\n    memo: "",\n    log: "Msg 0: ",\n    data: "{"flags":1}",\n    asset: null,\n    amount: null,\n    fromAddr: "bnb1x0t2mwrqg7gwy8wu04q6f4dty2ztcs40cg9exl",\n    toAddr: null\n}\n')),(0,l.kt)("h1",{id:"example-for-block-response"},"Example for block response"),(0,l.kt)("h2",{id:"block-of-height-170155309"},"Block of height 170155309"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    height: 170155309,\n    hash: "83EFF62688836D1D5206CDA95F0FC02DF43CDFDB4703C7C00CAEE18FB2D625CB",\n    parentHash: "69E12701818A1B1FF6EFFDC22350697E723E1101115175298DA553E9ABDED292",\n    time: 1623901978318,\n    txCount: 4,\n    size: 65536,\n    consumeTime: 350,\n    proposerAddr: "bnb1jstexazk7zateuwzzwllswu4j3dsllu3dgte4m",\n    proposerNode: "Zugspitze",\n    fees: [\n        {\n            blockHeight: 170155309,\n            address: "bnb1jstexazk7zateuwzzwllswu4j3dsllu3dgte4m",\n            asset: "BNB",\n            quantity: 780\n        },\n        {\n            blockHeight: 170155309,\n            address: "bnb1jw9xup8arde2jzarzcs2fv49hh28uad92m4ke0",\n            asset: "BNB",\n            quantity: 772\n        },\n        {\n            blockHeight: 170155309,\n            address: "bnb16k0gajcczwgymfkk0zsysjzl0sxyxdfckplxlr",\n            asset: "BNB",\n            quantity: 772\n        },\n        {\n            blockHeight: 170155309,\n            address: "bnb1xaef2agzycsww32fqyggnk5xgqxs8780vfv2kh",\n            asset: "BNB",\n            quantity: 772\n        },\n        {\n            blockHeight: 170155309,\n            address: "bnb13m056plt2646zse2mwxfft92xawnky4nmncxc3",\n            asset: "BNB",\n            quantity: 772\n        },\n        {\n            blockHeight: 170155309,\n            address: "bnb17kfuzeza2kn46yqx4twxxmlw2jk2ywp5x4gze2",\n            asset: "BNB",\n            quantity: 772\n        },\n        {\n            blockHeight: 170155309,\n            address: "bnb1tpagqqqx36gq09kzw4f5a3a9sk3tq54dpl5ldn",\n            asset: "BNB",\n            quantity: 772\n        },\n        {\n            blockHeight: 170155309,\n            address: "bnb1y888axmhzz6yjj464syfy68mkhzy9phlv8fzac",\n            asset: "BNB",\n            quantity: 772\n        },\n        {\n            blockHeight: 170155309,\n            address: "bnb19klje94mnu53wj7pmrk0zmtpwgr0uz8th0fcvw",\n            asset: "BNB",\n            quantity: 772\n        },\n        {\n            blockHeight: 170155309,\n            address: "bnb19hunw9ps8n9tkrp2j64jvheezgqmfc2eyrxd7a",\n            asset: "BNB",\n            quantity: 772\n        },\n        {\n            blockHeight: 170155309,\n            address: "bnb15hx3frkdu7vajy2eulu80vl97vehnhyavu927v",\n            asset: "BNB",\n            quantity: 772\n        }\n    ]\n}\n')))}i.isMDXComponent=!0}}]);