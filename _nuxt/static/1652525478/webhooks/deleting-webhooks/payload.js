__NUXT_JSONP__("/webhooks/deleting-webhooks", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:[{document:{slug:"deleting-webhooks",description:"",title:"Regitering Webhooks",category:"Webhooks",fullscreen:false,position:62,toc:[{id:C,depth:D,text:E},{id:j,depth:D,text:j},{id:F,depth:3,text:G}],body:{type:"root",children:[{type:b,tag:h,props:{},children:[{type:a,value:"A webhook can be unergistered from a telegraph bot. This can be accomplished both programmatically and through an artisan command"}]},{type:a,value:f},{type:b,tag:H,props:{id:C},children:[{type:b,tag:v,props:{ariaHidden:k,href:"#artisan-command",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:E}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"You can unregister a webhook calling the "},{type:b,tag:g,props:{},children:[{type:a,value:"telegraph:unset-webhook"}]},{type:a,value:" artisan command:"}]},{type:a,value:f},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,I]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"php artisan telegraph:unset-webhook\n"}]}]}]},{type:a,value:f},{type:b,tag:H,props:{id:j},children:[{type:b,tag:v,props:{ariaHidden:k,href:"#programmatically",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:j}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"if you are implementing a custom bot management logic, you can unregister a webhok using the "},{type:b,tag:g,props:{},children:[{type:a,value:J}]},{type:a,value:" model:"}]},{type:a,value:f},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,K]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,"doc-comment","comment"]},children:[{type:a,value:"\u002F** "},{type:b,tag:c,props:{className:[d,"keyword"]},children:[{type:a,value:"@var"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,"class-name"]},children:[{type:a,value:"DefStudio"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:"Telegraph"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:"Models"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:J}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:A}]},{type:a,value:" *\u002F"}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"h3",props:{id:F},children:[{type:b,tag:v,props:{ariaHidden:k,href:"#pending-updates",tabIndex:w},children:[{type:b,tag:c,props:{className:[x,y]},children:[]}]},{type:a,value:G}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"It may happen that there are pending message updates when deleting a webhook. By default they are kept in order to retrieve them through a manual polling. To drop these updates, use the "},{type:b,tag:g,props:{},children:[{type:a,value:"--drop-pending-updates"}]},{type:a,value:" artisan command option"}]},{type:a,value:f},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,I]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"php artisan telegraph:unset-webhook --drop-pending-updates\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"or using a parameter inside the method call:"}]},{type:a,value:f},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,K]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:O}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"="}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,"constant","boolean"]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f}]}]}]}]},dir:"\u002Fen\u002Fwebhooks",path:"\u002Fen\u002Fwebhooks\u002Fdeleting-webhooks",extension:".md",createdAt:P,updatedAt:P,to:"\u002Fwebhooks\u002Fdeleting-webhooks"},prev:{title:"Register Webhooks",path:"\u002Fen\u002Fwebhooks\u002Fregistering-webhooks",to:"\u002Fwebhooks\u002Fregistering-webhooks"},next:{title:"Retrieve Callback Data",path:"\u002Fen\u002Fwebhooks\u002Fcallback-data",to:"\u002Fwebhooks\u002Fcallback-data"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n","code","p","operator","programmatically","true","div","nuxt-content-highlight","pre","line-numbers"," ","variable","-\u003E","function","(",")","a",-1,"icon","icon-link","\\","$telegraphBot",";","artisan-command",2,"artisan command","pending-updates","Pending updates","h2","language-shell","TelegraphBot","language-php","\n\n","unregisterWebhook","send","$dropPendingUpdates","2022-05-14T10:50:01.543Z")));