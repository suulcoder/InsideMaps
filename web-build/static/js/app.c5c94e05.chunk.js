(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{110:function(e,t,n){n(111),e.exports=n(173)},111:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/InsideMaps/expo-service-worker.js",{scope:"/InsideMaps/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},142:function(e,t,n){e.exports=n.p+"static/media/LOGO.00516d3e.png"},143:function(e,t,n){e.exports=n.p+"static/media/background.e21b441d.jpg"},173:function(e,t,n){"use strict";n.r(t);var r=n(184),a=n(1),o=n.n(a),i=n(28),c=n(63),l=n(109),s=n(107),u=n(5),d=n(12),g=n(47),m=n(40),p=n(34),f=n.n(p),T=n(23),h=n.n(T),b=n(26),E=n(3),y=n(16),S=y.a.get("window").width,w=E.a.create({login:{alignItems:"baseline",flexDirection:"row",justifyContent:"center",padding:5,flexWrap:"wrap"},user:{minWidth:150,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:5,padding:10},password:{minWidth:150,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:5,padding:10},button:{backgroundColor:"#540A08",borderRadius:50,borderWidth:6,borderColor:"#540A08",width:150},errorText:{borderColor:"red",color:"white",fontSize:15},section:{flexDirection:"column",alignItems:"center"},text:{color:"transparent",fontSize:15}});("undefined"===typeof document||S<900)&&(w=E.a.create({login:{flexDirection:"column",justifyContent:"flex-start",alignItems:"center",padding:5,marginTop:150,flexWrap:"wrap"},user:{minWidth:250,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:10,marginRight:15,marginTop:10,padding:10},password:{minWidth:250,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:10,marginRight:15,marginTop:10,marginBottom:50,padding:10},button:{backgroundColor:"#540A08",borderColor:"#540A08",borderRadius:50,borderWidth:6,width:150,marginTop:35,marginBottom:20},errorText:{color:"red",fontSize:12},text:{color:"white",fontSize:12,marginTop:15,fontWeight:"bold"},sectionText:{marginTop:50,alignItems:"center"},section:{flexDirection:"column",alignItems:"center"}}));var x=w,F=n(21),I="LOGOUT",A=Object(F.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATION_STARTED":return!0;case"REGISTRATION_STARTED":case"AUTHENTICATION_COMPLETED":return null;case"AUTHENTICATION_FAILED":return 0!==t.payload.form&&null;case I:return null}return e},signup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATION_STARTED":return null;case"REGISTRATION_STARTED":return!0;case"AUTHENTICATION_COMPLETED":return null;case"AUTHENTICATION_FAILED":return 1!==t.payload.form&&null;case I:return null}return e}}),C=Object(F.c)({token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATION_STARTED":case"REGISTRATION_STARTED":return null;case"AUTHENTICATION_COMPLETED":return t.payload.token;case"AUTHENTICATION_FAILED":case I:return null}return e},isAuthenticating:A,error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATION_STARTED":case"REGISTRATION_STARTED":case"AUTHENTICATION_COMPLETED":return null;case"AUTHENTICATION_FAILED":return t.payload.error;case I:return null}return e}}),O=Object(F.c)({auth:C}),v=function(e){return function(e){return e.token}(e.auth)},R=function(e){return function(e){return e.error}(e.auth)},N=function(e){return function(e){return e.isAuthenticating.login}(e.auth)},D=function(e){return function(e){return e.isAuthenticating.signup}(e.auth)},k=function(e,t){return{type:"AUTHENTICATION_STARTED",payload:{email:e,password:t}}},j=function(e){return{type:"AUTHENTICATION_COMPLETED",payload:{token:e}}},L=function(e,t){return{type:"AUTHENTICATION_FAILED",payload:{error:e,form:t}}};function M(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var U=n(56),W=n.n(U),z=n(57),P=n.n(z),_=n(58),B=n.n(_),G=n(59),H=n.n(G),Y=n(42),V=n.n(Y),J=(n(84),n(87)),Z=n.n(J);function X(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var $={name:"xb95h2",styles:"display:block;margin:0 auto;border-color:red;"},q=function(e){B()(r,e);var t,n=(t=r,function(){var e,n=V()(t);if(X()){var r=V()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return H()(this,e)});function r(e){var t;return W()(this,r),(t=n.call(this,e)).state={loading:!0},t}return P()(r,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({loading:!e.state.loading})}),3e4)}},{key:"render",value:function(){return o.a.createElement("div",{className:"skew-loader"},o.a.createElement(Z.a,{css:$,size:10,color:"#540A08",loading:this.state.loading}))}}]),r}(o.a.Component),K=Object(i.b)((function(e){return{Message:null!==N(e)?N(e)?"LOADING...":R(e):void 0,loginSatus:N(e)}}),(function(e){return{onSubmit:function(t,n){t&&n?M(t)?e(k(t,n)):e(L("WRITE A VALID EMAIL",0)):t?n||e(L("PASSWORD FIELD MUST NOT BE EMPTY",0)):e(L("EMAIL FIELD MUST NOT BE EMPTY",0))}}}))((function(e){var t,n=e.Message,r=e.onSubmit,i=e.loginSatus,c=Object(a.useState)(""),l=h()(c,2),s=l[0],g=l[1],p=Object(a.useState)(""),T=h()(p,2),E=T[0],y=T[1];return o.a.createElement(u.a,{style:x.section},o.a.createElement(u.a,{style:x.login},o.a.createElement(b.a,(t={style:x.user,className:"user",type:"text",placeholder:"email",value:s},f()(t,"value",s),f()(t,"keyboardType","email-address"),f()(t,"onChangeText",g),f()(t,"onChange",(function(e){return g(e.target.value)})),t)),o.a.createElement(b.a,{style:x.password,className:"password",type:"password",secureTextEntry:!0,placeholder:"password",value:E,onChangeText:y,onChange:function(e){return y(e.target.value)}}),i?o.a.createElement(q,null):o.a.createElement(u.a,{style:x.button},o.a.createElement(m.a,{className:"login_button",color:"#540A08",title:"LOGIN",type:"submit",onPress:function(){return r(s,E)}}))),o.a.createElement(d.a,{style:x.errorText},n),o.a.createElement(u.a,{style:x.sectionText},o.a.createElement(d.a,{style:x.text},"Scroll Down \u2193")))})),Q=y.a.get("window").width,ee=(y.a.get("window").height,E.a.create({container:{alignItems:"center",flexDirection:"row",justifyContent:"space-between",paddingBottom:15,paddingLeft:20,paddingRight:20,paddingTop:15,width:Q},container2:{height:4,marginTop:2},logo:{height:85,width:85,marginRight:170},button:{backgroundColor:"#540A08",borderRadius:50,borderWidth:6,borderColor:"#540A08",width:150}}));("undefined"===typeof document||Q<900)&&(ee=E.a.create({container:{alignItems:"center",flexDirection:"column",justifyContent:"center",backgroundColor:"#02121B",borderColor:"#FFFFFF",padding:50,width:Q},container2:{backgroundColor:"#02121B",height:2,marginTop:1},logo:{marginTop:100,height:85,width:85},button:{backgroundColor:"#540A08",borderColor:"#540A08",borderRadius:50,borderWidth:6,width:150,marginTop:35,marginBottom:20}}));var te=ee,ne=Object(i.b)((function(e){return console.log(e),{isLogged:null!=v(e)}}),(function(e){return{onSubmit:function(){e({type:I})}}}))((function(e){var t=e.isLogged,r=e.onSubmit;return o.a.createElement(u.a,null,o.a.createElement(u.a,{style:te.container},o.a.createElement(g.a,{style:te.logo,source:n(142)}),t?o.a.createElement(u.a,{style:te.button},o.a.createElement(m.a,{className:"login_button",color:"#540A08",title:"LOG OUT",type:"submit",onPress:function(){return r()}})):o.a.createElement(K,null)),o.a.createElement(u.a,{style:te.container2}))})),re=(y.a.get("window").width,y.a.get("window").height,E.a.create({container:{flex:1,flexDirection:"column",backgroundColor:"black"},container2:{flex:1,flexDirection:"column",alignItems:"center"},image:{alignItems:"center",flex:1},text:{marginTop:100,color:"white",fontSize:100,fontWeight:"bold",marginLeft:150}})),ae=y.a.get("window").width,oe=E.a.create({container:{marginTop:100,alignItems:"flex-start",alignSelf:"stretch",flexDirection:"row",justifyContent:"center",paddingRight:150,paddingLeft:150,flexWrap:"wrap",width:ae},text:{color:"white",fontSize:110,marginBottom:150},textContainer:{marginTop:90,width:700}});("undefined"===typeof document||ae<900)&&(oe=E.a.create({container:{alignItems:"center",alignSelf:"stretch",flexDirection:"column",justifyContent:"center",paddingLeft:20,paddingRight:20},text:{color:"white",fontSize:55},textContainer:{width:300,marginTop:80,marginBottom:80,marginRight:50}}));var ie=oe,ce=n(102),le=(y.a.get("window").width,E.a.create({signUp:{alignItems:"center",flexDirection:"column",justifyContent:"center",borderWidth:3,borderColor:"#FFFFFF",padding:60,marginBottom:120},inputShort:{width:70,height:30,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:9,marginRight:15,marginLeft:15,padding:10},input:{width:200,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:12,padding:10},inputLarge:{width:420,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:12,padding:10},password:{width:200,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:12,padding:10},button:{backgroundColor:"#540A08",borderRadius:50,borderWidth:6,borderColor:"#540A08",width:150,marginTop:50},text:{color:"white",fontSize:40,marginBottom:60},subSection:{alignItems:"center",flexDirection:"row",justifyContent:"center",padding:5,flexWrap:"wrap"},subSection2:{alignItems:"center",flexDirection:"row",justifyContent:"space-between",padding:5,marginTop:12,flexWrap:"wrap"},subSection3:{alignItems:"center",flexDirection:"row",justifyContent:"center",padding:5,flexWrap:"wrap"},textSmall:{color:"white",fontSize:15},textVerySmall:{color:"white",fontSize:11},errorText:{color:"white",fontSize:15}}));"undefined"===typeof document&&(le=E.a.create({signUp:{alignItems:"center",flexDirection:"column",justifyContent:"center",borderWidth:1,borderColor:"#FFFFFF",padding:30},inputShort:{width:70,height:30,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:9,marginRight:15,marginLeft:15,padding:10},input:{width:270,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:7,padding:15},inputLarge:{width:270,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:7,padding:15},password:{width:270,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:7,padding:15},button:{backgroundColor:"#540A08",borderRadius:50,borderWidth:6,borderColor:"#540A08",width:150,marginBottom:20,marginTop:50},text:{color:"white",fontSize:35,marginBottom:60,marginTop:10},subSection:{alignItems:"baseline",flexDirection:"column",justifyContent:"center",flexWrap:"wrap"},subSection2:{alignItems:"baseline",flexDirection:"row",justifyContent:"space-between",padding:5,marginTop:12,flexWrap:"wrap"},subSection3:{alignItems:"center",flexDirection:"row",justifyContent:"center",padding:5,flexWrap:"wrap"},textSmall:{color:"white",fontSize:10},textVerySmall:{color:"white",fontSize:7},errorText:{color:"white",fontSize:15},container2:{height:2,marginBottom:1},container3:{height:2,marginTop:1,marginBottom:20}}));var se=le,ue=Object(i.b)((function(e){return{Message:null!==D(e)?D(e)?"LOADING...":R(e):void 0,signInStatus:D(e)}}),(function(e){return{onSubmit:function(t,n,r,a,o,i,c,l){r&&o&&n&&t&&a&&i?o==l?i>0||!i?M(a)?e(function(e,t,n,r,a,o,i){return{type:"REGISTRATION_STARTED",payload:{firstname:e,lastname:t,username:n,email:r,password:a,age:o,gender:i,role:1}}}(t,n,r,a,o,i,c?0:1)):e(L("WRITE A VALID EMAIL",1)):e(L("WRITE A VALID AGE",1)):e(L("PASSWORDS MUST MATCH",1)):r?o?t?n?a?i||e(L("AGE FIELD MUST NOT BE EMPTY",1)):e(L("EMAIL FIELD MUST NOT BE EMPTY",1)):e(L("LASTNAME FIELD MUST NOT BE EMPTY",1)):e(L("NAME FIELD MUST NOT BE EMPTY",1)):e(L("PASSWORD FIELD MUST NOT BE EMPTY",1)):e(L("USER FIELD MUST NOT BE EMPTY",1))}}}))((function(e){var t=e.Message,n=e.onSubmit,r=e.signInStatus,i=Object(a.useState)(""),c=h()(i,2),l=c[0],s=c[1],g=Object(a.useState)(""),p=h()(g,2),f=p[0],T=p[1],E=Object(a.useState)(""),y=h()(E,2),S=y[0],w=y[1],x=Object(a.useState)(""),F=h()(x,2),I=F[0],A=F[1],C=Object(a.useState)(""),O=h()(C,2),v=O[0],R=O[1],N=Object(a.useState)(""),D=h()(N,2),k=D[0],j=D[1],L=Object(a.useState)("0"),M=h()(L,2),U=M[0],W=M[1],z=Object(a.useState)(!0),P=h()(z,2),_=P[0],B=P[1];return o.a.createElement(a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(u.a,{style:se.container2}),o.a.createElement(u.a,{style:se.signUp},o.a.createElement(d.a,{style:se.text},"START NOW "),o.a.createElement(b.a,{style:se.inputLarge,className:"userSignUp",type:"text",placeholder:"username*",value:l,onChangeText:s,onChange:function(e){return s(e.target.value)}}),o.a.createElement(b.a,{style:se.inputLarge,className:"email",type:"email",placeholder:"email*",value:I,keyboardType:"email-address",onChangeText:A,onChange:function(e){return A(e.target.value)}}),o.a.createElement(u.a,{style:se.subSection},o.a.createElement(b.a,{style:se.input,placeholder:"Name*",value:v,onChangeText:R,onChange:function(e){return R(e.target.value)}}),o.a.createElement(b.a,{style:se.input,value:k,placeholder:"Lastname*",onChangeText:j,onChange:function(e){return j(e.target.value)}})),o.a.createElement(u.a,{style:se.subSection},o.a.createElement(b.a,{style:se.password,className:"passwordSignUp",type:"password",secureTextEntry:!0,placeholder:"password*",value:f,onChangeText:T,onChange:function(e){return T(e.target.value)}}),o.a.createElement(b.a,{style:se.password,className:"passwordConfirm",type:"password",secureTextEntry:!0,placeholder:"password confirmation*",value:S,onChangeText:w,onChange:function(e){return w(e.target.value)}})),o.a.createElement(u.a,{style:se.subSection2},o.a.createElement(u.a,{style:se.subSection3},o.a.createElement(d.a,{style:se.textSmall},"AGE: "),o.a.createElement(b.a,{style:se.inputShort,placeholder:"AGE",value:U,keyboardType:"numeric",onChangeText:W,onChange:function(e){return W(e.target.value)}})),o.a.createElement(u.a,{style:se.subSection3},o.a.createElement(d.a,{style:se.textSmall},"SEX:  "),o.a.createElement(u.a,{style:se.subSection3},o.a.createElement(d.a,{style:se.textVerySmall},"M  "),o.a.createElement(ce.a,{onValueChange:function(){return B((function(e){return!e}))},value:_}),o.a.createElement(d.a,{style:se.textVerySmall},"   F")))),o.a.createElement(d.a,{style:se.errorText},t),r?o.a.createElement(q,null):o.a.createElement(u.a,{style:se.button},o.a.createElement(m.a,{type:"submit",color:"#540A08",title:"SIGN UP",style:se.button,onPress:function(){return n(v,k,l,I,f,U,_,S)}}))),o.a.createElement(u.a,{style:se.container3})))})),de=function(){return o.a.createElement(u.a,{style:ie.container},o.a.createElement(u.a,{style:ie.textContainer},o.a.createElement(d.a,{style:ie.text},"GET INDOORS LOCATION")),o.a.createElement(ue,null))},ge=function(e){var t=e.isLogged;return o.a.createElement(l.a,{source:n(143),style:re.image,imageStyle:{opacity:.45}},t?o.a.createElement(u.a,null,o.a.createElement(ne,null),o.a.createElement(d.a,{style:re.text}," YOU ARE LOGGED ")):o.a.createElement(u.a,{style:re.container2},o.a.createElement(ne,null),o.a.createElement(de,null)))},me=Object(i.b)((function(e){return console.log(e),{isLogged:null!=v(e)}}),void 0)((function(e){var t=e.isLogged;return"undefined"!=typeof document?o.a.createElement(u.a,{style:re.container},o.a.createElement(ge,{isLogged:t})):o.a.createElement(u.a,{style:{flex:1}},o.a.createElement(s.a,{style:re.container,contentContainerStyle:{alignItems:"center",flexGrow:1}},o.a.createElement(ge,{isLogged:t})))})),pe=n(103),fe=n(105),Te=n.n(fe),he=n(108),be=n(24),Ee=n.n(be),ye=n(14),Se=(n(155),function(e){var t=[];for(var n in e){var r=encodeURIComponent(n),a=encodeURIComponent(e[n]);t.push(r+"="+a)}return t=t.join("&")}),we=Ee.a.mark(Ce),xe=Ee.a.mark(Oe),Fe=Ee.a.mark(ve),Ie=Ee.a.mark(Re),Ae="https://inside-maps-api.herokuapp.com/api/v1/auth";function Ce(e){var t,n,r,a,o;return Ee.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(ye.b)(fetch,"".concat(Ae,"/signin/"),{method:"POST",body:Se(e.payload),headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 3:if(200!==(t=i.sent).status){i.next=13;break}return i.next=7,t.json();case 7:return n=i.sent,r=n.token,i.next=11,Object(ye.d)(j(r));case 11:i.next=19;break;case 13:return i.next=15,t.json();case 15:return a=i.sent,o=a.message,i.next=19,Object(ye.d)(L(o,0));case 19:i.next=25;break;case 21:return i.prev=21,i.t0=i.catch(0),i.next=25,Object(ye.d)(L("CONNECTION FAILED",0));case 25:case"end":return i.stop()}}),we,null,[[0,21]])}function Oe(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)("AUTHENTICATION_STARTED",Ce);case 2:case"end":return e.stop()}}),xe)}function ve(e){var t,n,r,a,o;return Ee.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(ye.b)(fetch,"".concat(Ae,"/signup/"),{method:"POST",body:JSON.stringify(e.payload),headers:{"Content-Type":"application/json"}});case 3:if(!((t=i.sent).status>=200&&t.status<=300)){i.next=10;break}return n=e.payload,r=n.email,a=n.password,i.next=8,Object(ye.d)(k(r,a));case 8:i.next=20;break;case 10:if(!(t.status>=500&&t.status<=600)){i.next=15;break}return i.next=13,Object(ye.d)(L("Email is already registered",1));case 13:i.next=20;break;case 15:return i.next=17,t.json();case 17:return o=i.sent,i.next=20,Object(ye.d)(L(o[0].msg,1));case 20:i.next=27;break;case 22:return i.prev=22,i.t0=i.catch(0),console.log(i.t0),i.next=27,Object(ye.d)(L("CONNECTION FAILED",1));case 27:case"end":return i.stop()}}),Fe,null,[[0,22]])}function Re(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.e)("REGISTRATION_STARTED",ve);case 2:case"end":return e.stop()}}),Ie)}var Ne=Ee.a.mark(De);function De(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Object(ye.c)(Oe),Object(ye.c)(Re)]);case 2:case"end":return e.stop()}}),Ne)}var ke=De,je=n(106),Le=n.n(je),Me=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Ue=Object(he.a)(),We=Object(F.e)(O,Me,Object(F.a)(Ue));Ue.run(ke),We.subscribe(Te()((function(){!function(e){try{var t=JSON.stringify(e);pe.a.setItem("state",t)}catch(n){console.log(n)}}(We.getState())})),1e3);c.a.select({ios:"Press Cmd+R to reload,\nCmd+D or shake for dev menu",android:"Double tap R on your keyboard to reload,\nShake or press menu button for dev menu"});var ze=function(){return o.a.createElement(i.a,{store:We},o.a.createElement(Le.a,{url:"../public/logo/favicon.ico"}),o.a.createElement(me,null))};Object(r.a)(ze)}},[[110,1,2]]]);
//# sourceMappingURL=app.c5c94e05.chunk.js.map