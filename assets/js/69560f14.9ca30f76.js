"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,m=h["".concat(d,".").concat(u)]||h[u]||p[u]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(83117),o=(n(67294),n(3905));const r={sidebar_label:"Payload Storage Management",sidebar_position:2,hide_table_of_contents:!1},i="Payload Storage Management",s={unversionedId:"greenfield/tech-specs/payload-storage-mngt",id:"greenfield/tech-specs/payload-storage-mngt",title:"Payload Storage Management",description:"Although the metadata will be stored on the Greenfield blockchain, the",source:"@site/docs/greenfield/tech-specs/payload-storage-mngt.md",sourceDirName:"greenfield/tech-specs",slug:"/greenfield/tech-specs/payload-storage-mngt",permalink:"/docs/greenfield/tech-specs/payload-storage-mngt",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/greenfield/tech-specs/payload-storage-mngt.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Payload Storage Management",sidebar_position:2,hide_table_of_contents:!1}},d={},l=[{value:"Segments",id:"segments",level:2},{value:"Erasure Code and Data Redundancy",id:"erasure-code-and-data-redundancy",level:2},{value:"Data Redundancy Design",id:"data-redundancy-design",level:3},{value:"Erasure Code",id:"erasure-code",level:3},{value:"Encoding",id:"encoding",level:4},{value:"Decoding: Data Recovery",id:"decoding-data-recovery",level:4}],c={toc:l},h="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"payload-storage-management"},"Payload Storage Management"),(0,o.kt)("p",null,'Although the metadata will be stored on the Greenfield blockchain, the\ncontent data to be stored on Greenfield is here called "payload" and\nthey are stored off-chain, on the Storage Providers.'),(0,o.kt)("p",null,'The unit of such storage is "',(0,o.kt)("strong",{parentName:"p"},"Object"),'", and each object is split and\nstored in an integral and redundant way to ensure the availability.'),(0,o.kt)("h2",{id:"segments"},"Segments"),(0,o.kt)("p",null,"Segment is the basic storage structure of an object. An object payload\nis composed of one or many segments in sequence. The default segment\nsize is 16MB. If the object's size is less than 16MB, it has only one\nsegment and the segment size is the same as the object's size. For\nlarger objects, the payload data will be broken into segments."),(0,o.kt)("p",null,"Please note the payload data of an object will be split into the same\nsize segment but the last segment, which is the actual size. For\nexample, if one object has a size 50MB, only the size of the last\nsegment is 2 MB and the other segments' sizes are all 16MB."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"object-segmentation",src:n(59493).Z,width:"660",height:"313"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("i",null,"Object Segmentation")),(0,o.kt)("h2",{id:"erasure-code-and-data-redundancy"},"Erasure Code and Data Redundancy"),(0,o.kt)("h3",{id:"data-redundancy-design"},"Data Redundancy Design"),(0,o.kt)("p",null,"Although each SP may provide a more stable service and won't go offline\nas enough BNB are staking to be one SP, Greenfield still establish its\nown redundancy strategy to get rid of the dependency on a single SP and\nsupport the data availability in a decentralized way. Here below is the\nbasic design idea."),(0,o.kt)("p",null,'First, all segments of each object are stored in primary SP as "pieces",\nwhich can be regarded as one replica of the object. Users may download\nthis data directly from the primary SP as it is supposed to provide the\nfull data in a low latency way.'),(0,o.kt)("p",null,"Second, Erasure Code (EC) is introduced to get efficient data\nredundancy. Segment is the boundary to perform erasure encoding. By\nerasure encoding one segment at a time, it allows streaming the\nprocessing of the object upload without waiting for the whole object\npayload to finish. The default EC strategy is 4+2, 4 data chunks, and 2\nparity chunks for one segment. The data chunk size is \xbc of the segment.\nAs one typical segment is 16M, one typical data chunk of EC is 4M.\nSpecialized customization on EC parameters for each user may be provided\nvia special transactions."),(0,o.kt)("p",null,"All EC chunks of each object are stored in some secondary SPs as pieces,\nwhich can be regarded as more than one EC replica of the object. If one\nor more segments of the object are lost from the primary SP, any 4\nchunks from 6 SPs can recover the segments."),(0,o.kt)("p",null,"All these segments and SPs information are stored on the Greenfield\nblockchain as the metadata of the object. The same object's each\nsegment's EC replicas are stored in the same sequence of secondary SPs.\nThis convention is to save the metadata size. An example of a 50M object\nstored with one primary SP, SP0, and 6 secondary SPs, SP1-SP6 is shown\nin the below diagram."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ec-for-segments-in-different-secondary-sp",src:n(96959).Z,width:"1046",height:"492"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("i",null,"EC for Segments in Different Secondary SPs")),(0,o.kt)("h3",{id:"erasure-code"},"Erasure Code"),(0,o.kt)("p",null,"The EC module is defined as the following structure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Erasure struct {\n    encoder func () Encoder\n    \n    dataBlocks, parityBlocks int\n    chunkSize                int64\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"encoder")," indicated the EC algorithm function type. The ",(0,o.kt)("inlineCode",{parentName:"p"},"dataBlocks"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"parityBlock")," are the main parameters of the EC algorithm. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"chunkSize")," indicated the size of each shard after encodes. Considering\nthe application scenario of Greenfield, the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataBlocks")," is set to 4;\n",(0,o.kt)("inlineCode",{parentName:"p"},"parityBlocks")," is 2; and the ",(0,o.kt)("inlineCode",{parentName:"p"},"chunkSize")," is configured to 16MB which is\ncorresponding to the piece size. Reed-Solomon is used as the EC\nalgorithm. The EC module has an Encode function to split data and encode\nit into 6 blocks (4 data blocks and 2 parity blocks) and a Decode\nfunction to reconstruct data from blocks."),(0,o.kt)("p",null,"The EC module has two additional functions\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Automatic padding. If the size of the last block is not divisible by 4, the EC encoding module will add some padding data into the segment which is no more than 3 bytes;"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Parallel processing based on shard size for the optimal speed."),(0,o.kt)("h4",{id:"encoding"},"Encoding"),(0,o.kt)("p",null,"Here is a detailed EC encoding setup."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ec-encoding",src:n(11016).Z,width:"994",height:"475"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("i",null," EC Encoding")),(0,o.kt)("p",null,"As the example shown in the figure above, the 50M payload of the object\nwill be split into segments(16M each) and each segment will be encoded\nby the Encode function of the EC module. All the segments can be\nprocessed concurrently. Each segment is encoded into 4 data blocks\n(indicated by an orange rectangle)and 2 parity blocks (indicated in the\ngreen rectangle)."),(0,o.kt)("p",null,"If the size of the last segment is less than 16MB, it will be encoded as\nan independent part. But if it is smaller than 500k, it will be\nconsidered to be merged with the previous segment."),(0,o.kt)("p",null,"If the size of the last block is not divisible by 4, it will be added by\n1-3 bytes by the automatic padding function of the EC module. After all\nthe segments have been encoded, we have got 16 pieces which are 16M, and\n6 pieces which are 0.5M."),(0,o.kt)("p",null,"Both the users' client software and the primary SP are responsible for\nencoding the EC. Client software may not upload the EC parity but only\nthe checksum for the primary SP to verify."),(0,o.kt)("p",null,'From the primary SP to the secondary SPs, each EC chunk is treated as a\npiece object and a data stream is maintained for each secondary SP for\nparallel processing. Pieces will be stored in a data structure as "piece\nstore" on different SPs. As a reference implementation, the key of the\npiece object is ',(0,o.kt)("inlineCode",{parentName:"p"},"objId_s+segIndex\\_ spIndex+ ECIndex")," for each segment.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"spIndex")," can indicate which secondary will be forwarded to. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"ECIndex")," is the index of EC chucks, with which 0-3 are data blocks and\n4-5 are parity blocks. For example, the piece called ",(0,o.kt)("inlineCode",{parentName:"p"},"obj0Id_s1_sp1")," is\nthe 2nd segment of the object and will be forwarded to SP1."),(0,o.kt)("h4",{id:"decoding-data-recovery"},"Decoding: Data Recovery"),(0,o.kt)("p",null,"When the primary SP loses some segment, it or other SPs can recover the\ndata via the EC chunks. As designed, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ECIndex")," with values 0-3 are\ndata blocks while 4-5 are parity blocks. There are two processing cases\nto reconstruct the object payload:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," All data blocks are fully stored in secondary SPs. The recovery initiator can just read the pieces which are data blocks sequentially and stitch them together;"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Some data blocks have been lost by secondary SPs. The recovery initiator needs to read all the data blocks and parity blocks and use the Decode function of the EC module to recover the content of all the segments."))}p.isMDXComponent=!0},59493:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/18.1-Object-Segmentation-919be58ebd2a2a2c37d6c59d2661acb8.jpg"},96959:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/18.2-EC-for-Segments-in-Different-Secondary-SPs-e07bfc0c600dc0798e1080b2de7cf3b7.jpg"},11016:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/18.3-EC-Encoding-6295301c6320c4593050d56c6cc06e10.jpg"}}]);