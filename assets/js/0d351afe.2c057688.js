"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7861],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(h,l(l({ref:n},c),{},{components:t})):o.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=t(83117),r=(t(67294),t(3905));const a={},l="Common Issues When Running a Full Node",i={unversionedId:"fullnodeissue",id:"fullnodeissue",title:"Common Issues When Running a Full Node",description:"How to Monitor Your Full Node Syncing Process?",source:"@site/docs/fullnodeissue.md",sourceDirName:".",slug:"/fullnodeissue",permalink:"/docs/fullnodeissue",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/fullnodeissue.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"How to Monitor Your Full Node Syncing Process?",id:"how-to-monitor-your-full-node-syncing-process",level:3},{value:"Common Issues",id:"common-issues",level:3},{value:"AppHash Confliction",id:"apphash-confliction",level:4},{value:"Peer connection error",id:"peer-connection-error",level:4},{value:"Connection Timeout",id:"connection-timeout",level:4},{value:"Out of Memory",id:"out-of-memory",level:4},{value:"No priv_validator_state.json After Reset",id:"no-priv_validator_statejson-after-reset",level:4},{value:"<code>bnbchaind</code> Crashes Because of <code>too many open files</code>",id:"bnbchaind-crashes-because-of-too-many-open-files",level:4},{value:"Forgot to Upgrade",id:"forgot-to-upgrade",level:4},{value:"<code>bnbchaind</code> is Not Properly Killed",id:"bnbchaind-is-not-properly-killed",level:4},{value:"Cannot Start <code>bnbchaind</code>",id:"cannot-start-bnbchaind",level:4},{value:"Cannot Query a Specific Block",id:"cannot-query-a-specific-block",level:4}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"common-issues-when-running-a-full-node"},"Common Issues When Running a Full Node"),(0,r.kt)("h3",{id:"how-to-monitor-your-full-node-syncing-process"},"How to Monitor Your Full Node Syncing Process?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can check the current height of full node by visiting ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:26657/status")),(0,r.kt)("li",{parentName:"ul"},"You can check the log info in your log under your $BNCHOME.",(0,r.kt)("br",null),"\nMonitor the output with:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tail -f $BNCHOME/bnc.log\n")),(0,r.kt)("h3",{id:"common-issues"},"Common Issues"),(0,r.kt)("p",null,"If you start running a full node from scratch, you are likely to encounter the following issues:"),(0,r.kt)("h4",{id:"apphash-confliction"},"AppHash Confliction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Error Log")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"panic: Tendermint state.AppHash does not match AppHash after replay. Got XXXXXXX, expected 251DF08F2BA7824F0875D33992CF03EA35106DDD34B3A9FE4EFA0B73CDD2FE14\n")),(0,r.kt)("p",null,"This error is caused by a consensus issue and thus bnbchaind will panic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Solution")),(0,r.kt)("p",null,"To solve this issue, make sure that you have downloaded the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis file"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"app.toml"),".",(0,r.kt)("br",null),"\nIf you replaced the genesis file, then you need to do a node reset.",(0,r.kt)("br",null),"\nTo reset node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm $BNCHOME/data\n\nrm $BNCHOME/config/priv_validator_key.json\n")),(0,r.kt)("p",null,"Then, start again."),(0,r.kt)("h4",{id:"peer-connection-error"},"Peer connection error"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Error log:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"E[2019-04-17|23:52:24.069] Connection failed @ recvRoutine (reading byte) module=p2p peer=[aea74b16d28d06cbfbb1179c177e8cd71315cce4@54.64.99.130:27146](http://aea74b16d28d06cbfbb1179c177e8cd71315cce4@54.64.99.130:27146)conn=MConn{[52.199.237.19:27146](http://52.199.237.19:27146)} err=EOF\nE[2019-04-17|23:52:24.070] Stopping peer for error module=p2p peer=&quot;Peer{MConn{[52.199.237.19:27146](http://52.199.237.19:27146)} aea74b16d28d06cbfbb1179c177e8cd71315cce4 out}&quot; err=EOF\n")),(0,r.kt)("p",null,"This error is caused by the handshake failing between two peers."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Solution")),(0,r.kt)("p",null,"To solve this problem, you need to make sure node_key.json is under ",(0,r.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config")," and nodes will try to re-connect automatically, so this issue should not persist."),(0,r.kt)("h4",{id:"connection-timeout"},"Connection Timeout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Error log")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Dialing failed module=pex addr=2c1fa9c1698961da38d8cd50da9fe8b4bc433c50@34.202.245.91:26856 err=&quot;dial tcp 34.202.245.91:26856: i/o timeout&quot; attempts=3\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Solution")),(0,r.kt)("p",null,"Check your internet connection and make sure it is stable."),(0,r.kt)("h4",{id:"out-of-memory"},"Out of Memory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Error Log")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fatal error: out of memory\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Solution")),(0,r.kt)("p",null,"Your machine must have more than ",(0,r.kt)("inlineCode",{parentName:"p"},"8 GB of memory"),", otherwise, it will not handle DB restoration during state sync."),(0,r.kt)("h4",{id:"no-priv_validator_statejson-after-reset"},"No priv_validator_state.json After Reset"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Error log")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"open /Users/.bnbchaind/data/priv_validator_state.json: no such file or directory\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Solution")),(0,r.kt)("p",null,"Delete both ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator_state.json")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"node_key.json")," file and ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," folder if you want to reset your full node."),(0,r.kt)("h4",{id:"bnbchaind-crashes-because-of-too-many-open-files"},(0,r.kt)("inlineCode",{parentName:"h4"},"bnbchaind")," Crashes Because of ",(0,r.kt)("inlineCode",{parentName:"h4"},"too many open files")),(0,r.kt)("p",null,"The default number of files Linux can open (per-process) is ",(0,r.kt)("inlineCode",{parentName:"p"},"1024"),".",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"bnbchaind")," is likely to open more than ",(0,r.kt)("inlineCode",{parentName:"p"},"1024")," files.",(0,r.kt)("br",null),"\nThis causes the process to crash.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"A quick fix is to run ",(0,r.kt)("inlineCode",{parentName:"p"},"ulimit -n 65535")," (increase the number of open files allowed) and then restart the process with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bnbchaind start\n")),(0,r.kt)("p",null,"Verify the number of open files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ulimit -a\ncore file size          (blocks, -c) 0\ndata seg size           (kbytes, -d) unlimited\nscheduling priority             (-e) 0\nfile size               (blocks, -f) unlimited\npending signals                 (-i) 3829\nmax locked memory       (kbytes, -l) 64\nmax memory size         (kbytes, -m) unlimited\nopen files                      (-n) 65535\npipe size            (512 bytes, -p) 8\nPOSIX message queues     (bytes, -q) 819200\nreal-time priority              (-r) 0\nstack size              (kbytes, -s) 8192\ncpu time               (seconds, -t) unlimited\nmax user processes              (-u) 3829\nvirtual memory          (kbytes, -v) unlimited\nfile locks                      (-x) unlimited\n")),(0,r.kt)("p",null,"Please note that open files are different now."),(0,r.kt)("h4",{id:"forgot-to-upgrade"},"Forgot to Upgrade"),(0,r.kt)("p",null,"The Beacon Chain has a hardfork upgrade and if you failed to upgrade your fullnode to the latest version, ",(0,r.kt)("inlineCode",{parentName:"p"},"bnbchaind")," process will stop and even if you restart with the latest version, the following error will appear:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"panic: Tendermint state.AppHash does not match AppHash after replay. Got , expected 393887B67F69B19CAB5C48FB87B4966018ABA893FB3FFD241C0A94D2C8668DD2\ngoroutine 1 [running]:\ngithub.com/bnb-chain/node/vendor/github.com/tendermint/tendermint/consensus.checkAppHash(0xa, 0x0, 0xc000bd8c56, 0x6, 0xc000b247c0, 0x12, 0x14e7bf9, 0x8592eb, 0xc000b247e0, 0x20, ...)\n/Users/huangsuyu/go/src/github.com/bnb-chain/node/vendor/github.com/tendermint/tendermint/consensus/replay.go:464 +0x213\ngithub.com/bnb-chain/node/vendor/github.com/tendermint/tendermint/consensus.(*Handshaker).ReplayBlocks(0xc000b37980, 0xa, 0x0, 0xc000bd8c56, 0x6, 0xc000b247c0, 0x12, 0x14e7bf9, 0x8592eb, 0xc000b247e0, ...)\n")),(0,r.kt)("p",null,"To recover from the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," conflict error, you need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backup your home directory,  (default is ~/.bnbchaind)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the tool: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node/releases"},"state-recover"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get the height of upgrade, this height will be announced in the upgrade announcement on the forum.  For example, if it's announced as 5000 in the forum and run the following command will make your full node recover to the last block before the upgrade, and that is 4999 :"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./state_recover 4999 <your_home_path>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Restart with the latest version of ",(0,r.kt)("inlineCode",{parentName:"li"},"bnbchaind"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bnbchaind start &\n")),(0,r.kt)("h4",{id:"bnbchaind-is-not-properly-killed"},(0,r.kt)("inlineCode",{parentName:"h4"},"bnbchaind")," is Not Properly Killed"),(0,r.kt)("p",null,"If you started your ",(0,r.kt)("inlineCode",{parentName:"p"},"bnbchaind")," process after it was not properly killed. You will see the following error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'panic: ERROR:\nCodespace: 5\nCode: 9\nMessage: "Initial ProposalID already set"\n')),(0,r.kt)("p",null,"To recover, please reset your node and restart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bnbchaind unsafe-reset-all --home<your-home-dir>\n")),(0,r.kt)("h4",{id:"cannot-start-bnbchaind"},"Cannot Start ",(0,r.kt)("inlineCode",{parentName:"h4"},"bnbchaind")),(0,r.kt)("p",null,"If you do not download the binaries completely, you will see the following message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./bnbchaind: line 1: version: command not found ./bnbchaind: line 2: oid: command not found /Library/Developer/CommandLineTools/usr/bin/size: 45160816 No such file or directory\n")),(0,r.kt)("p",null,"Since all the binaries are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"git lfs"),", you will see this error is the binary is not complete. Please download the latest binaries from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node/releases"},"https://github.com/bnb-chain/node/releases"),"."),(0,r.kt)("h4",{id:"cannot-query-a-specific-block"},"Cannot Query a Specific Block"),(0,r.kt)("p",null,"Once you have your own node running, you can start querying from it. But sometimes you may not be ablt to get the information you want. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl 'localhost:27147/block?height=10'\n")),(0,r.kt)("p",null,"The reason is because your node is using ",(0,r.kt)("inlineCode",{parentName:"p"},"statesync")," to catch up. In this way, it will not store all the history blocks before the snapshot height it got. You can only query blocks after that snapshot height."),(0,r.kt)("p",null,"To enable query history blocks, you need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"fast-sync")))}d.isMDXComponent=!0}}]);