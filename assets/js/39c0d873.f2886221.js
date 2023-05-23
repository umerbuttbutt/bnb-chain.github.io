"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,g=c["".concat(s,".").concat(h)]||c[h]||m[h]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(83117),o=(n(67294),n(3905));const a={},l="Trezor User Guide",i={unversionedId:"wallets/tutorial/trezor-model-t-user-guide",id:"wallets/tutorial/trezor-model-t-user-guide",title:"Trezor User Guide",description:"This guide will show you how to use your Trezor Model T hardware wallet with Binance Chain and Binance DEX.",source:"@site/docs/wallets/tutorial/trezor-model-t-user-guide.md",sourceDirName:"wallets/tutorial",slug:"/wallets/tutorial/trezor-model-t-user-guide",permalink:"/docs/wallets/tutorial/trezor-model-t-user-guide",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/wallets/tutorial/trezor-model-t-user-guide.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"App Installation Instructions",id:"app-installation-instructions",level:2},{value:"Setup/Login Instructions",id:"setuplogin-instructions",level:2},{value:"How to send Beacon Chain crypto assets",id:"how-to-send-beacon-chain-crypto-assets",level:2},{value:"How to trade Beacon Chain crypto assets",id:"how-to-trade-beacon-chain-crypto-assets",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"trezor-user-guide"},"Trezor User Guide"),(0,o.kt)("p",null,"This guide will show you how to use your ",(0,o.kt)("a",{parentName:"p",href:"https://shop.trezor.io/product/trezor-model-t"},"Trezor Model T")," hardware wallet with Binance Chain and Binance DEX.\nPlease follow best security practices when using any hardware wallet to store cryptocurrency."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note that the Trezor Model One is not supported yet.")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"In order to use a Trezor with Binance Chain and Binance DEX, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A supported web browser: Chrome or Firefox"),(0,o.kt)("li",{parentName:"ul"},"Access to the Binance Extension Web Wallet (",(0,o.kt)("a",{parentName:"li",href:"https://binance.org/unlock"},"https://binance.org/unlock"),") using your web browser"),(0,o.kt)("li",{parentName:"ul"},"An initialized Trezor Model T device with the most recent firmware updates installed"),(0,o.kt)("li",{parentName:"ul"},"The Trezor Bridge application installed on your computer")),(0,o.kt)("h2",{id:"app-installation-instructions"},"App Installation Instructions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Trezor Bridge")),(0,o.kt)("p",null,"Please make sure that you have ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.trezor.io/User_manual-Setting_up_the_Trezor_device#Trezor_Bridge"},"bridge")," installed on your computer."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/PW7zw3jAPjJr7OADRl62ZwxH75Eg-PGffH2vDf1waZRA3mVkRX55mmYAJsqR9ptnfITnRh9cpsiemMjuZU_iLxDUJCqM7r_J086PVG-AM4EtJRa7PQTEJJ-fkE5mTiCP-d0P4gxj",alt:"img"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install the firmware")),(0,o.kt)("p",null,"Please make sure your Trezor has the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.trezor.io/User_manual-Setting_up_the_Trezor_device#Install_the_latest_firmware"},"latest firmware")," installed."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/Y7mbzuPLLAtqNBgf6unnxFQ4lqQ3lY4DF1ubWCQk3JyZ6VGGRJ0aoM46ERXLPvpKOpEId8DUbc_8l5srws5AZcNUa2u7RvIWBfOvbDeg7PScLdwY9ZE-WzwLYwkv6a3DBxSTJWRx",alt:"img"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Generate and backup your address")),(0,o.kt)("p",null,"Please make sure that you have seed phrase backed up."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/L4VXP1_ZqyQEfqEXbTrXeIjtPlDtf814RXxuUj3eHDVom0Sfr6Q6ZpYyV1TIRb4y8M-lvLdCp7VlZkqmTYwxlne4YBvEL8v2XDwvFJF45KYS6JEKdTVmGEmt0nPjgWihYbBFeMZc",alt:"img"}),(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/U9QE83qrsDMJGmWmVEtrzsrapmLoAgqAVwqst6dFi2EEnD8CClEOzClNte-01dtzn3HjUzyzbTxb9l8UppsVWwMaTzb19CgQ535fh8voifx4DCMocghHRqD6umOnuQk04J_Xgk1w",alt:"img"})),(0,o.kt)("h2",{id:"setuplogin-instructions"},"Setup/Login Instructions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Binance Extension Web Wallet (",(0,o.kt)("a",{parentName:"li",href:"http://www.binance.org"},"www.binance.org"),"), then go to ",(0,o.kt)("a",{parentName:"li",href:"https://www.binance.org/en/unlock"},"unlock page"),". You should see that Trezor is already an option for you.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/SHsBGqNHNfRqPO85GCQbC84lEq-5f0tkTLp3xMa2sg10FT8leiHe0i5rk9h0luegET3CUXODO2jTBP7I5AwrmoERZg7k61EWLeHToJhXVYqz-r2Kat1q7BtwFOBmAGifLjR1_p0U",alt:"img"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Allow  access to your device:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/NUPkk08poavyTwzMvo9h_ig0VEJQkqDKHt1MQT5MnocqAsZjKvWjwfExFl5-BkRzLKjSJH_bKgRr6B8f3dE0UNsF114mRA1DCkpmySvxjUqZKVpxVmUFUgsj9ZjcYS5p-5hL2gpg",alt:"img"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Export Binance address for account #1")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/g-P7oXukPxxvHhiel6G5gLRWDwMXYW05hN-Vdw0Qhlm8VLhKC7oiC0ZAE8HpAGh8947TEQ_91yY4sUakLiRV26z2YMRQYMqSdv8mA_8RFhae4SU_nNIY7mjTolzcjFwpMSPEVcK5",alt:"img"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Get your address for this device")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/jG0dJVoBTTEHp8QgE3QjRXdtTzJlU6YsQJ7jcniu_ISZYDrtYrT1SBjL0NctHKPQRolHMnJvlXAVQQxPmtqpYUHyuhEB8f951xFyDkkellD2GS5QBjLYt1rWlNONiKiooqDiYATS",alt:"img"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Confirm your address on Trezor")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/d2YxOhj8kptDdPmwJ1QIWKn57BeHooCmR_6NYBH1FqRxxlMDm5PaOvz07HV9KGuUR3K-WG70n83v7vvOZ8WOe_kcippxedz3N4JV1DLlPLNXg_tQg0HoDiBrLy_tZS9hh5b4wREX",alt:"img"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note that Trezor only supports the Binance Chain mainnet")),(0,o.kt)("p",null,"1) Click on the \u201cBalances\u201d navigation button in the Trading Interface to view your account balances."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/5uzD0Lr6qKIg7EhGewDHWlRO-f14VCMkH_h_0D0ydMI-lGaN-jFqfNkAqHXCBYQtaO5ICqUtw-Lc5XWd2LA7p0xTbZkhFrudA-iYPocZrW8GMbGNeYxqmyopTFqPKS70lkOt3yAL",alt:"img"})),(0,o.kt)("p",null,"2) Your account balances are displayed."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/h7xez7MrpBQt8n888v8mmWujn4rNKH88h11zesBkBe-pvCKtqiPM_IE3MZRRGuQi47DOLRAgrVMY3g8a-QXvhkpnJOLacHgyTeUe5FvKT2LAVTX7t8NMfaHdzoP53dbbG4pz4j_2",alt:"img"})),(0,o.kt)("h2",{id:"how-to-send-beacon-chain-crypto-assets"},"How to send Beacon Chain crypto assets"),(0,o.kt)("p",null,"1) Click on the \u201cBalances\u201d navigation button in the Trading Interface to view your account balances."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/h7xez7MrpBQt8n888v8mmWujn4rNKH88h11zesBkBe-pvCKtqiPM_IE3MZRRGuQi47DOLRAgrVMY3g8a-QXvhkpnJOLacHgyTeUe5FvKT2LAVTX7t8NMfaHdzoP53dbbG4pz4j_2",alt:"img"})),(0,o.kt)("p",null,"2) Then click on the \u201cSend\u201d button for the asset that you would like to send."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/qQ2Leiu4z95Yx6TilYswNwzncWSmoiXTqYcZDbkHE1m4emYiDKC9VMl-NoYPNEKog-JZoWziwKVuiMYJxP1cafMiKOXViiAtl0tA4RXiLtqBSUInAHu9ZSzDbmQDmWEk7KZREiN2",alt:"img"})),(0,o.kt)("p",null,"3) Confirm to give permission\n",(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/xBRZ3hZzhgzrDCuX8q6yeHIJvL2I0XM-R9aDQF9_1Hl-ey1G0l0dv-qWLT2v0T25E37uoPafHuGgyc7UpWJ5EPeTiD-0d7JoNgc_nCM7cKdJW2s3ia8y6g6f6zaQLwCo1pWMJK-O",alt:"img"})),(0,o.kt)("p",null,"4) Check details about this transaction"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/8_ou6nauvga5COMjalNRUFeR1583Z2dDwSUYT_uCEfenAjqPwCRsFCh-jF1FPO7u2KrGE3GdEo_0nGxuRn7MFHaIii0q2ta-1CKeI-Awb27VCTKXspvLv5RclVZYl1ZXX8UimdUf",alt:"img"})),(0,o.kt)("p",null,"5) You\u2019ll see this pop-up to ask to hold the screen to sign the transaction on your Trezor."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/CgV9tpPpgGZFowBeka3VUqgA5zCfT7gLxi3m1qujN00lFKGJu8uSoTpP8_VnF5qCasdPHb-S2FQEEKHGm37xjXJhCmxyxvpWN_mQ6CHb6Q4aCaHb4Y4MmOeZrUibQeGLPtyqFON2",alt:"img"})),(0,o.kt)("h2",{id:"how-to-trade-beacon-chain-crypto-assets"},"How to trade Beacon Chain crypto assets"),(0,o.kt)("p",null,"1) You can place your order on trading page"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/uVP-RjLkBt9YFxPrF6Xa0zSTc1wsct9az0s21bJ7lLj93nZkIHOReqNajz7iWn27DE3TbLmxAlYqPSLh-XqngTBTVjOHWIDJLYZBstgWf48vB_OvgZHAxS9_mwdNpBoEnShhkUMq",alt:"img"})),(0,o.kt)("p",null,"2)  Confirm to give permission"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/xBRZ3hZzhgzrDCuX8q6yeHIJvL2I0XM-R9aDQF9_1Hl-ey1G0l0dv-qWLT2v0T25E37uoPafHuGgyc7UpWJ5EPeTiD-0d7JoNgc_nCM7cKdJW2s3ia8y6g6f6zaQLwCo1pWMJK-O",alt:"img"})),(0,o.kt)("p",null,"3) Check details about this transaction"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/8_ou6nauvga5COMjalNRUFeR1583Z2dDwSUYT_uCEfenAjqPwCRsFCh-jF1FPO7u2KrGE3GdEo_0nGxuRn7MFHaIii0q2ta-1CKeI-Awb27VCTKXspvLv5RclVZYl1ZXX8UimdUf",alt:"img"})),(0,o.kt)("p",null,"4) You\u2019ll see this pop-up to ask to hold the screen to sign the transaction on your Trezor."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/G44kc4A5tNPC-km-ofY_gmZ9k8BlME00GGPrwGD2CBdOHr74kkx62V43htZlJ6MGtnJn0qIhPEg6pJZtVMURlYyyqrWLjZ1sD_jdN36pPXs8rIcz9In_fQ7eO8LOl9cSgVJzfHOG",alt:"img"})),(0,o.kt)("p",null,"Reference: ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.trezor.io/User_manual"},"https://wiki.trezor.io/User_manual")))}m.isMDXComponent=!0}}]);