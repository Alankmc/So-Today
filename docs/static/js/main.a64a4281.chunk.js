(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),s=(a(16),a(7)),c=a(10),l=a(2),u=a(3),h=a(4),m=a(1),y=a(5),b=a(6),g=["the player to your right","the player to your left","the player across from you","the youngest player","the oldest player","the strongest player","the hottest player","the tallest player","the shortest player","the last player","your date","your friend","the drunkest player","the soberest player"],d=function(){function e(t){Object(l.a)(this,e),this.currParams=t}return Object(u.a)(e,[{key:"reduceBasedOnParams",value:function(e){var t=this;return Object.keys(e).reduce(function(a,n){return t.currParams[n]?a.concat(e[n]):a},[])}},{key:"getAction",value:function(e,t){var a=this.reduceBasedOnParams(e),n=this.reduceBasedOnParams(t),o=Math.floor(Math.random()*(n.length+a.length));return o>=a.length?{value:n[o-a.length],isPlayerless:!0}:{value:a[o],isPlayerless:!1}}},{key:"getInfo",value:function(t){return e.getMeFromArray(this.reduceBasedOnParams(t))}}],[{key:"getMeFromArray",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"getMe",value:function(t){var a=Object.keys(t);return e.getMeFromArray(a)}},{key:"getPlayer",value:function(){return e.getMeFromArray(g)}}]),e}(),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).name="Share",a.playerlessActions={base:["Share with the group"],no_library:["Yell out"],icebreak:["Tell a stranger","Text you tinder crush","Text someone on your contact list"]},a.actions={base:["Whisper in the ear of"]},a.info={base:["how your last shit was, in grand detail","something noone in the group knows","what your favorite pokemon is","the name of your least favorite person in the group","who you're voting for","your biggest fear"]},a}return Object(y.a)(t,e),Object(u.a)(t,[{key:"buildAction",value:function(){var e=this.getAction(this.actions,this.playerlessActions),a=e.value;return e.isPlayerless||(a+=" ".concat(d.getPlayer())),a+=" ".concat(Object(b.a)(Object(m.a)(t.prototype),"getInfo",this).call(this,this.info),".")}}]),t}(d),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).name="Challenge",a.playerlessActions={icebreak:["Challenge a stranger"]},a.actions={base:["Challenge"]},a.info={base:["to an arm wrestle","to a chugging competition","to a pushup competition","to a 100m sprint","to a friendly wrestle",'to a "don\'t breathe" race','to a "don\'t laugh" race',"to a modeling runway walkoff","to a dance competition","to a beatboxing show-off","to a joke competition","to a Rock Paper Scissors showdown"],violence:["to a sumo brawl"]},a}return Object(y.a)(t,e),Object(u.a)(t,[{key:"buildAction",value:function(){var e=this.getAction(this.actions,this.playerlessActions),a=e.value;return e.isPlayerless||(a+=" ".concat(d.getPlayer())),a+=" ".concat(Object(b.a)(Object(m.a)(t.prototype),"getInfo",this).call(this,this.info),"!!")}}]),t}(d),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).name="Artist",a.singActionPlayerless={base:["Sing","Invent on the spot","Dance to","Dance absurdly energetically to"],no_library:["Scream out"]},a.actActionPlayerless={base:["Act out"]},a.actActions={base:["Act out"]},a.singActions={base:["Duet to"]},a.singInfo={base:["the national anthem","a very emo song","a country song","a sad song","a song in another language","a TV theme song"]},a.actingInfoSingle={base:["the death of a loved one","your drink being poisoned","slipping on a banana","receiving the greates gift of your goddamn life","receiving horrible news","discovering you won the lottery","going fishing","a presidential announcement about a new law"]},a.actingInfoDouble={base:["your marriage proposal","finding out you two are pregnant","your breakup","two bros in the gym","two straight guys at the bar","a Mexican drama cheating discovery","a weed-induced discovery about the universe"],no_library:["going into labor","a loud, almost-violent argument","a dragonball Kamehameha clash","a slowmo Matrix style brawl, with sound effects"],violence:["a kung-fu fighting sequence"]},a}return Object(y.a)(t,e),Object(u.a)(t,[{key:"buildAction",value:function(){var e,a=Math.random()<.3,n=(e=a?this.getAction(this.singActions,this.singActionPlayerless):this.getAction(this.actActions,this.actActionPlayerless)).value;return a?n+=" ".concat(Object(b.a)(Object(m.a)(t.prototype),"getInfo",this).call(this,this.singInfo)):e.isPlayerless?n+=" ".concat(Object(b.a)(Object(m.a)(t.prototype),"getInfo",this).call(this,this.actingInfoSingle)):n+=" ".concat(Object(b.a)(Object(m.a)(t.prototype),"getInfo",this).call(this,this.actingInfoDouble)),e.isPlayerless?n+=".":n+=", with ".concat(d.getPlayer()," as co-star."),n}}]),t}(d),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).name="Violence",a.playerlessActions={},a.actions={base:["Poke"],violence:["Punch","Kick","Slap"]},a.info={base:["in the face","on the arm","on the head","on the leg","on the ear","on the foot"],violence:["in the face","on the arm","on the head","on the leg","on the ear","on the foot"]},a}return Object(y.a)(t,e),Object(u.a)(t,[{key:"buildAction",value:function(){var e=this.getAction(this.actions,this.playerlessActions),a=e.value;return e.isPlayerless||(a+=" ".concat(d.getPlayer())),a+=" ".concat(Object(b.a)(Object(m.a)(t.prototype),"getInfo",this).call(this,this.info),"!")}}]),t}(d),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).name="Party Bits",a.playerlessActions={base:[""]},a.actions={},a}return Object(y.a)(t,e),Object(u.a)(t,[{key:"buildAction",value:function(){var e=this.getAction(this.actions,this.playerlessActions),t=e.value;return e.isPlayerless||(t+=" ".concat(d.getPlayer())),t+="."}}]),t}(d),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).name="Impression",a.playerlessActions={base:["Do your best impression of"]},a.actions={base:["Do your best impression of"]},a.info={base:["Jack Nicholson","Batman","the Joker","Batman's Bane","Jack Sparrow","Mickey Mouse","Obama","Donald Trump","Matthew McConaughey","someone from Friends","a chicken","a donkey","a horse","a monkey","some Pixar character","someone from a Tarantino movie","the Godfather","Rocky Balboa","Arnold Schwarzenegger","a dinosaur","a pig",'Owen Wilson\'s "wow"',"a valley girl","Bruce Lee"]},a}return Object(y.a)(t,e),Object(u.a)(t,[{key:"buildAction",value:function(){var e=this.getAction(this.actions,this.playerlessActions),a=e.value;return e.isPlayerless?a+=" ".concat(Object(b.a)(Object(m.a)(t.prototype),"getInfo",this).call(this,this.info),"."):a+=" ".concat(d.getPlayer(),"."),a}}]),t}(d),j=(a(18),["share","challenge","artist","violence","impression"]),A=[3,4,4,3,2],P=A.reduce(function(e,t){return e+t}),E=0,M=A.map(function(e){return E+=e/P}),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={actionText:"Click me. I know you want to."},a.textClick=function(){var e,n=a.props.clickTick,o=t.getMeFromWeightedArray(j,M);switch(o){case"share":case"challenge":case"artist":case"violence":case"party_bits":case"impression":e=a.builders[o].buildAction();break;default:e="Uh whoops hang on"}n(),a.setState({actionText:e})},a}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.gameParams,a=this.state.actionText;this.builders={share:new f(e),challenge:new p(e),artist:new v(e),violence:new k(e),party_bits:new O(e),impression:new w(e)};var n=t.breakText(a);return o.a.createElement("div",{id:"action-text",className:"action-text-container"},o.a.createElement("span",{onClick:this.textClick,id:"action-text--span",className:"action-text"},n.map(function(e){return o.a.createElement("div",{key:e},e,o.a.createElement("br",null))})),o.a.createElement("br",null))}}],[{key:"breakText",value:function(e){for(var t=e.split(" "),a=0,n=[];a-t.length;){for(var o=[],r=0;r<5&&a!==t.length;r+=1)o.push(t[a]),a+=1;n.push(o.join(" "))}return n}},{key:"getMeFromArray",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"getMeFromWeightedArray",value:function(e,t){var a=Math.random();return e[t.findIndex(function(e){return e>a})]}}]),t}(o.a.Component),x=(a(20),["ohhh yes, right there","booop","yes daddy click me harder","a friendly task for a friendly person","i can see you through the webcammmm","yea, click it","oh my","you can do it","you have my blessing","speak friend, and do the task","are you drunk yet","now with 100% more floating text","if only your parents could see you now","don't chicken out","uh oh","come on, faster","come on, do it","great scott","hurry hurry","this hurts me more than it hurts you","i'd hate to say it but... you did click it","come on, this one's easy","task smoke... don't breathe this","hey can you lend me some cash","why don't you uber home, bud","you shouldn't do this. on second thought, you should","uhhhh your turn","should i be naked for this","toasty!","god can see all your sinning","trust me","oh would you look at at that great idea right there","well paint me green and call me a pickle","uhhh it wasn't me","hold on let me get my camera","twitter says hello","turn down for actually what though","get that bread","yooo hoooo","yeeeeeeeeee hawwwwwww"]),I=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.shouldRender,n=e.overrideText;if(!a)return null;var r=document.getElementById("comment-text-span");return r&&(r.classList.remove("animate"),r.offsetWidth,r.classList.add("animate")),o.a.createElement("div",{className:"comment-text-container"},o.a.createElement("span",{className:"comment-text animate",id:"comment-text-span"},n||t.getMeFromArray(x)))}}],[{key:"getMeFromArray",value:function(e){return e[Math.floor(Math.random()*e.length)]}}]),t}(o.a.Component);I.defaultProps={overrideText:void 0};a(22);function T(e){var t=e.label,a=e.callback,n=e.value,r=e.type;return o.a.createElement("span",{className:"game-button-span ".concat(n?"":"off"),onClick:function(){return a(r,!n)}},n?t.on:t.off)}a(24);var B=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).handleConfigClick=function(){var t=e.state.isConfigOpen;e.everClicked=!0,e.setState({isConfigOpen:!t})},e.everClicked=!1,e.state={isConfigOpen:!1},e}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.gameParams,n=t.callback,r=this.state.isConfigOpen;return e=this.everClicked?"config-button ".concat(r?"flipped":"unflipped"):"config-button",o.a.createElement("div",{className:"config-pane"},o.a.createElement("div",{className:e},o.a.createElement("span",{onClick:this.handleConfigClick},r?"Hide configure":"Show configure")),o.a.createElement("div",{className:"button-container ".concat(r?"open":"")},o.a.createElement(T,{label:{on:"I LOVE YELLING",off:"shh we're at the library"},callback:n,type:"no_library",value:a.no_library}),o.a.createElement(T,{label:{on:"Linkedin master",off:"Blushing introvert"},callback:n,type:"icebreak",value:a.icebreak}),o.a.createElement(T,{label:{on:"F*ck'em up",off:"Be nice to your friends, Timmy"},callback:n,type:"violence",value:a.violence})))}}]),t}(o.a.Component),S=(a(26),.2),N=.1,F=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).handleParamClick=function(t,a){var n=e.state.gameParams,o=Object(c.a)({},n,Object(s.a)({},t,a));e.setState({gameParams:o})},e.clickTickHandler=function(){var t=e.state,a=t.isViking,n=t.isQuestion;e.setState({isViking:!a&&Math.random()<S,isQuestion:!n&&Math.random()<N}),e.ticked=!0},e.ticked=!1,e.state={gameParams:{base:!0,no_library:!1,icebreak:!1,violence:!1},isViking:!1,isQuestion:!1},e}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isViking,a=e.isQuestion,n=e.gameParams,r=this.ticked;return this.ticked&&(this.ticked=!1),o.a.createElement("div",{id:"root-app",className:"App"},o.a.createElement(B,{gameParams:n,callback:this.handleParamClick}),o.a.createElement(C,{gameParams:n,clickTick:this.clickTickHandler}),a?o.a.createElement("div",null,o.a.createElement("span",{className:"event-span"},"Player has become Questionmaster"),o.a.createElement("br",null)):null,t?o.a.createElement("div",null,o.a.createElement("span",{className:"event-span lower"},"Player has become Vikingmaster"),o.a.createElement("br",null)):null,o.a.createElement(I,{shouldRender:r&&Math.random()<1}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.a64a4281.chunk.js.map