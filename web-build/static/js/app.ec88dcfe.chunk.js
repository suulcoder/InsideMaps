(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{101:function(e,t,n){n(102),e.exports=n(146)},102:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/InsideMaps/expo-service-worker.js",{scope:"/InsideMaps/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},131:function(e,t,n){e.exports=n.p+"static/media/LOGO.00516d3e.png"},132:function(e,t,n){e.exports=n.p+"static/media/background.e21b441d.jpg"},146:function(e,t,n){"use strict";n.r(t);var r=n(157),a=n(1),o=n.n(a),i=n(27),c=n(57),l=n(100),s=n(98),u=n(4),d=n(45),g=n(39),m=n(33),p=n.n(m),f=n(23),T=n.n(f),h=n(25),b=n(14),E=n(3),y=n(17),S=y.a.get("window").width,x=E.a.create({login:{alignItems:"baseline",flexDirection:"row",justifyContent:"center",padding:5,flexWrap:"wrap"},user:{minWidth:150,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:5,padding:10},password:{minWidth:150,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:5,padding:10},button:{backgroundColor:"#540A08",borderRadius:50,borderWidth:6,borderColor:"#540A08",width:150},errorText:{borderColor:"red",color:"white",fontSize:15},section:{flexDirection:"column",alignItems:"center"},text:{color:"transparent",fontSize:15}});("undefined"===typeof document||S<900)&&(x=E.a.create({login:{flexDirection:"column",justifyContent:"flex-start",alignItems:"center",padding:5,marginTop:150,flexWrap:"wrap"},user:{minWidth:250,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:10,marginRight:15,marginTop:10,padding:10},password:{minWidth:250,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:10,marginRight:15,marginTop:10,marginBottom:50,padding:10},button:{backgroundColor:"#540A08",borderColor:"#540A08",borderRadius:50,borderWidth:6,width:150,marginTop:35,marginBottom:20},errorText:{color:"red",fontSize:12},text:{color:"white",fontSize:12,marginTop:15,fontWeight:"bold"},sectionText:{marginTop:50,alignItems:"center"},section:{flexDirection:"column",alignItems:"center"}}));var w=x,A=n(21),C="LOGOUT",F=Object(A.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATION_STARTED":return!0;case"REGISTRATION_STARTED":case"AUTHENTICATION_COMPLETED":return null;case"AUTHENTICATION_FAILED":return 0!==t.payload.form&&null;case C:return null}return e},signup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATION_STARTED":return null;case"REGISTRATION_STARTED":return!0;case"AUTHENTICATION_COMPLETED":return null;case"AUTHENTICATION_FAILED":return 1!==t.payload.form&&null;case C:return null}return e}}),I=Object(A.c)({token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATION_STARTED":case"REGISTRATION_STARTED":return null;case"AUTHENTICATION_COMPLETED":return t.payload.token;case"AUTHENTICATION_FAILED":case C:return null}return e},isAuthenticating:F,error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATION_STARTED":case"REGISTRATION_STARTED":case"AUTHENTICATION_COMPLETED":return null;case"AUTHENTICATION_FAILED":return t.payload.error;case C:return null}return e}}),O=Object(A.c)({auth:I}),v=function(e){return function(e){return e.token}(e.auth)},R=function(e){return null!=v(e.auth)},N=function(e){return function(e){return e.error}(e.auth)},D=function(e){return function(e){return e.isAuthenticating.login}(e.auth)},j=function(e){return function(e){return e.isAuthenticating.signup}(e.auth)},k=function(e,t){return{type:"AUTHENTICATION_STARTED",payload:{email:e,password:t}}},L=function(e){return{type:"AUTHENTICATION_COMPLETED",payload:{token:e}}},M=function(e,t){return{type:"AUTHENTICATION_FAILED",payload:{error:e,form:t}}};function U(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}n(71);var W=n(74),z=n.n(W);var _={name:"xb95h2",styles:"display:block;margin:0 auto;border-color:red;"},P=function(){return o.a.createElement(u.a,{className:"skew-loader"},o.a.createElement(z.a,{css:_,size:10,color:"#540A08",loading:!0}))},B=Object(i.b)((function(e){return{Message:null!==D(e)?D(e)?"LOADING...":N(e):void 0,loginSatus:D(e)}}),(function(e){return{onSubmit:function(t,n){t&&n?U(t)?e(k(t,n)):e(M("WRITE A VALID EMAIL",0)):t?n||e(M("PASSWORD FIELD MUST NOT BE EMPTY",0)):e(M("EMAIL FIELD MUST NOT BE EMPTY",0))}}}))((function(e){var t,n=e.Message,r=e.onSubmit,i=e.loginSatus,c=Object(a.useState)(""),l=T()(c,2),s=l[0],d=l[1],m=Object(a.useState)(""),f=T()(m,2),E=f[0],y=f[1];return o.a.createElement(u.a,{style:w.section},o.a.createElement(u.a,{style:w.login},o.a.createElement(h.a,(t={style:w.user,className:"user",type:"text",placeholder:"email",value:s},p()(t,"value",s),p()(t,"keyboardType","email-address"),p()(t,"onChangeText",d),p()(t,"onChange",(function(e){return d(e.target.value)})),t)),o.a.createElement(h.a,{style:w.password,className:"password",type:"password",secureTextEntry:!0,placeholder:"password",value:E,onChangeText:y,onChange:function(e){return y(e.target.value)}}),i?o.a.createElement(P,null):o.a.createElement(u.a,{style:w.button},o.a.createElement(g.a,{className:"login_button",color:"#540A08",title:"LOGIN",type:"submit",onPress:function(){return r(s,E)}}))),o.a.createElement(b.a,{style:w.errorText},n),o.a.createElement(u.a,{style:w.sectionText},o.a.createElement(b.a,{style:w.text},"Scroll Down \u2193")))})),G=y.a.get("window").width,H=(y.a.get("window").height,E.a.create({container:{alignItems:"center",flexDirection:"row",justifyContent:"space-between",paddingBottom:15,paddingLeft:20,paddingRight:20,paddingTop:15,width:G},container2:{height:4,marginTop:2},logo:{height:85,width:85,marginRight:170},button:{backgroundColor:"#540A08",borderRadius:50,borderWidth:6,borderColor:"#540A08",width:150}}));("undefined"===typeof document||G<900)&&(H=E.a.create({container:{alignItems:"center",flexDirection:"column",justifyContent:"center",backgroundColor:"#02121B",borderColor:"#FFFFFF",padding:50,width:G},container2:{backgroundColor:"#02121B",height:2,marginTop:1,width:G},logo:{marginTop:100,height:85,width:85},button:{backgroundColor:"#540A08",borderColor:"#540A08",borderRadius:50,borderWidth:6,width:150,marginTop:35,marginBottom:20}}));var Y=H,V=Object(i.b)((function(e){return console.log(e),{isLogged:null!=v(e)}}),(function(e){return{onSubmit:function(){e({type:C})}}}))((function(e){var t=e.isLogged,r=e.onSubmit;return o.a.createElement(u.a,null,o.a.createElement(u.a,{style:Y.container},o.a.createElement(d.a,{style:Y.logo,source:n(131)}),t?o.a.createElement(u.a,{style:Y.button},o.a.createElement(g.a,{className:"login_button",color:"#540A08",title:"LOG OUT",type:"submit",onPress:function(){return r()}})):o.a.createElement(B,null)),o.a.createElement(u.a,{style:Y.container2}))})),J=(y.a.get("window").width,y.a.get("window").height,E.a.create({container:{flex:1,flexDirection:"column",backgroundColor:"black"},container2:{flex:1,flexDirection:"column",alignItems:"center"},image:{alignItems:"center",flex:1},text:{marginTop:100,color:"white",fontSize:100,fontWeight:"bold",marginLeft:150}})),Z=y.a.get("window").width,X=E.a.create({container:{marginTop:50,alignItems:"flex-start",alignSelf:"stretch",flexDirection:"row",justifyContent:"center",paddingRight:150,paddingLeft:150,flexWrap:"wrap",width:Z},text:{color:"white",fontSize:110,marginBottom:150},textContainer:{marginTop:90,width:700}});("undefined"===typeof document||Z<900)&&(X=E.a.create({container:{alignItems:"center",alignSelf:"stretch",flexDirection:"column",justifyContent:"center",paddingLeft:20,paddingRight:20},text:{color:"white",fontSize:55,marginRight:50},textContainer:{width:300,marginTop:80,marginBottom:80,marginRight:50}}));var $=X,q=n(89),K=y.a.get("window").width,Q=E.a.create({signUp:{alignItems:"center",flexDirection:"column",justifyContent:"center",borderWidth:3,borderColor:"#FFFFFF",padding:60,marginBottom:120},inputShort:{width:70,height:30,borderRadius:20,backgroundColor:"#FFFFFF",fontSize:9,marginRight:15,marginLeft:15,padding:10},input:{width:200,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:12,padding:10},inputLarge:{width:420,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:12,padding:10},password:{width:200,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:12,padding:10},button:{backgroundColor:"#540A08",borderRadius:50,borderWidth:6,borderColor:"#540A08",width:150,marginTop:50},text:{color:"white",fontSize:40,marginBottom:60},subSection:{alignItems:"center",flexDirection:"row",justifyContent:"center",padding:5,flexWrap:"wrap"},subSection2:{alignItems:"center",flexDirection:"row",justifyContent:"space-between",padding:5,marginTop:12,flexWrap:"wrap"},subSection3:{alignItems:"center",flexDirection:"row",justifyContent:"center",padding:5,flexWrap:"wrap"},textSmall:{color:"white",fontSize:15},textVerySmall:{color:"white",fontSize:11},errorText:{color:"white",fontSize:15}});("undefined"===typeof document||K<900)&&(Q=E.a.create({signUp:{alignItems:"center",flexDirection:"column",justifyContent:"center",borderWidth:1,borderColor:"#FFFFFF",padding:30},inputShort:{width:70,height:30,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:9,marginRight:15,marginLeft:15,padding:10},input:{width:270,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:7,padding:15},inputLarge:{width:270,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:7,padding:15},password:{width:270,backgroundColor:"#FFFFFF",borderRadius:20,fontSize:12,marginRight:15,marginTop:7,padding:15},button:{backgroundColor:"#540A08",borderRadius:50,borderWidth:6,borderColor:"#540A08",width:150,marginBottom:20,marginTop:50},text:{color:"white",fontSize:35,marginBottom:60,marginTop:10},subSection:{alignItems:"baseline",flexDirection:"column",justifyContent:"center",flexWrap:"wrap"},subSection2:{alignItems:"baseline",flexDirection:"row",justifyContent:"space-between",padding:5,marginTop:12,flexWrap:"wrap"},subSection3:{alignItems:"center",flexDirection:"row",justifyContent:"center",padding:5,flexWrap:"wrap"},textSmall:{color:"white",fontSize:10},textVerySmall:{color:"white",fontSize:7},errorText:{color:"white",fontSize:15},container2:{height:2,marginBottom:1},container3:{height:2,marginTop:1,marginBottom:20}}));var ee=Q,te=Object(i.b)((function(e){return{Message:null!==j(e)?j(e)?"LOADING...":N(e):void 0,signInStatus:j(e)}}),(function(e){return{onSubmit:function(t,n,r,a,o,i,c,l){r&&o&&n&&t&&a&&i?o==l?i>0||!i?U(a)?e(function(e,t,n,r,a,o,i){return{type:"REGISTRATION_STARTED",payload:{firstname:e,lastname:t,username:n,email:r,password:a,age:o,gender:i,role:1}}}(t,n,r,a,o,i,c?0:1)):e(M("WRITE A VALID EMAIL",1)):e(M("WRITE A VALID AGE",1)):e(M("PASSWORDS MUST MATCH",1)):r?o?t?n?a?i||e(M("AGE FIELD MUST NOT BE EMPTY",1)):e(M("EMAIL FIELD MUST NOT BE EMPTY",1)):e(M("LASTNAME FIELD MUST NOT BE EMPTY",1)):e(M("NAME FIELD MUST NOT BE EMPTY",1)):e(M("PASSWORD FIELD MUST NOT BE EMPTY",1)):e(M("USER FIELD MUST NOT BE EMPTY",1))}}}))((function(e){var t=e.Message,n=e.onSubmit,r=e.signInStatus,i=Object(a.useState)(""),c=T()(i,2),l=c[0],s=c[1],d=Object(a.useState)(""),m=T()(d,2),p=m[0],f=m[1],E=Object(a.useState)(""),y=T()(E,2),S=y[0],x=y[1],w=Object(a.useState)(""),A=T()(w,2),C=A[0],F=A[1],I=Object(a.useState)(""),O=T()(I,2),v=O[0],R=O[1],N=Object(a.useState)(""),D=T()(N,2),j=D[0],k=D[1],L=Object(a.useState)("0"),M=T()(L,2),U=M[0],W=M[1],z=Object(a.useState)(!0),_=T()(z,2),B=_[0],G=_[1];return o.a.createElement(a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(u.a,{style:ee.container2}),o.a.createElement(u.a,{style:ee.signUp},o.a.createElement(b.a,{style:ee.text},"START NOW "),o.a.createElement(h.a,{style:ee.inputLarge,className:"userSignUp",type:"text",placeholder:"username*",value:l,onChangeText:s,onChange:function(e){return s(e.target.value)}}),o.a.createElement(h.a,{style:ee.inputLarge,className:"email",type:"email",placeholder:"email*",value:C,keyboardType:"email-address",onChangeText:F,onChange:function(e){return F(e.target.value)}}),o.a.createElement(u.a,{style:ee.subSection},o.a.createElement(h.a,{style:ee.input,placeholder:"Name*",value:v,onChangeText:R,onChange:function(e){return R(e.target.value)}}),o.a.createElement(h.a,{style:ee.input,value:j,placeholder:"Lastname*",onChangeText:k,onChange:function(e){return k(e.target.value)}})),o.a.createElement(u.a,{style:ee.subSection},o.a.createElement(h.a,{style:ee.password,className:"passwordSignUp",type:"password",secureTextEntry:!0,placeholder:"password*",value:p,onChangeText:f,onChange:function(e){return f(e.target.value)}}),o.a.createElement(h.a,{style:ee.password,className:"passwordConfirm",type:"password",secureTextEntry:!0,placeholder:"password confirmation*",value:S,onChangeText:x,onChange:function(e){return x(e.target.value)}})),o.a.createElement(u.a,{style:ee.subSection2},o.a.createElement(u.a,{style:ee.subSection3},o.a.createElement(b.a,{style:ee.textSmall},"AGE: "),o.a.createElement(h.a,{style:ee.inputShort,placeholder:"AGE",value:U,keyboardType:"numeric",onChangeText:W,onChange:function(e){return W(e.target.value)}})),o.a.createElement(u.a,{style:ee.subSection3},o.a.createElement(b.a,{style:ee.textSmall},"SEX:  "),o.a.createElement(u.a,{style:ee.subSection3},o.a.createElement(b.a,{style:ee.textVerySmall},"M  "),o.a.createElement(q.a,{onValueChange:function(){return G((function(e){return!e}))},value:B}),o.a.createElement(b.a,{style:ee.textVerySmall},"   F")))),o.a.createElement(b.a,{style:ee.errorText},t),r?o.a.createElement(P,null):o.a.createElement(u.a,{style:ee.button},o.a.createElement(g.a,{type:"submit",color:"#540A08",title:"SIGN UP",style:ee.button,onPress:function(){return n(v,j,l,C,p,U,B,S)}}))),o.a.createElement(u.a,{style:ee.container3})))})),ne=Object(i.b)((function(e){return{isLogged:null!=v(e)}}),void 0)((function(e){var t=e.isLogged;return o.a.createElement(u.a,{style:$.container},t?o.a.createElement(u.a,{style:$.textContainer},o.a.createElement(b.a,{style:$.text},"YOU ARE LOGGED")):o.a.createElement(u.a,{style:$.container},o.a.createElement(u.a,{style:$.textContainer},o.a.createElement(b.a,{style:$.text},"GET INDOORS LOCATION")),o.a.createElement(te,null)))})),re=function(){return o.a.createElement(l.a,{source:n(132),style:J.image,imageStyle:{opacity:.45}},o.a.createElement(u.a,{style:J.container2},o.a.createElement(V,null),o.a.createElement(ne,null)))},ae=function(e){var t=e.isLogged;return"undefined"!=typeof document?o.a.createElement(u.a,{style:J.container},o.a.createElement(re,{isLogged:t})):o.a.createElement(u.a,{style:{flex:1}},o.a.createElement(s.a,{style:J.container,contentContainerStyle:{alignItems:"center",flexGrow:1}},o.a.createElement(re,null)))},oe=n(90),ie=n(92),ce=n.n(ie),le=n(99),se=n(12),ue=n.n(se),de=n(8),ge=function(e){var t=[];for(var n in e){var r=encodeURIComponent(n),a=encodeURIComponent(e[n]);t.push(r+"="+a)}return t=t.join("&")},me=ue.a.mark(be),pe=ue.a.mark(Ee),fe=ue.a.mark(ye),Te=ue.a.mark(Se),he="https://inside-maps-api.herokuapp.com/api/v1/auth";function be(e){var t,n,r,a,o;return ue.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(de.b)(fetch,"".concat(he,"/signin/"),{method:"POST",body:ge(e.payload),headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 3:if(200!==(t=i.sent).status){i.next=13;break}return i.next=7,t.json();case 7:return n=i.sent,r=n.token,i.next=11,Object(de.d)(L(r));case 11:i.next=19;break;case 13:return i.next=15,t.json();case 15:return a=i.sent,o=a.message,i.next=19,Object(de.d)(M(o,0));case 19:i.next=25;break;case 21:return i.prev=21,i.t0=i.catch(0),i.next=25,Object(de.d)(M("CONNECTION FAILED",0));case 25:case"end":return i.stop()}}),me,null,[[0,21]])}function Ee(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.f)("AUTHENTICATION_STARTED",be);case 2:case"end":return e.stop()}}),pe)}function ye(e){var t,n,r,a,o;return ue.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(de.b)(fetch,"".concat(he,"/signup/"),{method:"POST",body:JSON.stringify(e.payload),headers:{"Content-Type":"application/json"}});case 3:if(!((t=i.sent).status>=200&&t.status<=300)){i.next=10;break}return n=e.payload,r=n.email,a=n.password,i.next=8,Object(de.d)(k(r,a));case 8:i.next=20;break;case 10:if(!(t.status>=500&&t.status<=600)){i.next=15;break}return i.next=13,Object(de.d)(M("Email is already registered",1));case 13:i.next=20;break;case 15:return i.next=17,t.json();case 17:return o=i.sent,i.next=20,Object(de.d)(M(o[0].msg,1));case 20:i.next=27;break;case 22:return i.prev=22,i.t0=i.catch(0),console.log(i.t0),i.next=27,Object(de.d)(M("CONNECTION FAILED",1));case 27:case"end":return i.stop()}}),fe,null,[[0,22]])}function Se(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.f)("REGISTRATION_STARTED",ye);case 2:case"end":return e.stop()}}),Te)}var xe=function(e,t){return{type:"CREATE_MAP_COMPLETED",payload:{oldId:e,map:t}}},we=function(e,t){return{type:"CREATE_MAP_FAILED",payload:{oldId:e,error:t}}},Ae=ue.a.mark(Fe),Ce=ue.a.mark(Ie);function Fe(e){var t,n,r,a,o,i;return ue.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload.map,n=t.id,c.prev=2,c.next=5,Object(de.e)(R);case 5:if(!c.sent){c.next=26;break}return c.next=9,Object(de.e)(v);case 9:return r=c.sent,c.next=12,Object(de.b)(fetch,"https://inside-maps-api.herokuapp.com/api/v1/auth",{method:"POST",body:e.payload,headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(r)}});case 12:if(200!==(a=c.sent).status){c.next=23;break}return c.next=16,a.json();case 16:return o=c.sent,i=o.newMap,c.next=20,Object(de.d)(xe(n,i));case 20:console.log("Se creo un nuevo mapa exitosamente!",i),c.next=24;break;case 23:console.log("Error en la respuesta!");case 24:c.next=27;break;case 26:console.log("Error de autenticaci\xf3n");case 27:c.next=34;break;case 29:return c.prev=29,c.t0=c.catch(2),console.log(c.t0),c.next=34,Object(de.d)(we(c.t0));case 34:case"end":return c.stop()}}),Ae,null,[[2,29]])}function Ie(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.f)("CREATE_MAP_STARTED",Fe);case 2:case"end":return e.stop()}}),Ce)}var Oe=ue.a.mark(ve);function ve(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.a)([Object(de.c)(Ee),Object(de.c)(Se),Object(de.c)(Ie)]);case 2:case"end":return e.stop()}}),Oe)}var Re=ve,Ne=n(93),De=n.n(Ne),je=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),ke=Object(le.a)(),Le=Object(A.e)(O,je,Object(A.a)(ke));ke.run(Re),Le.subscribe(ce()((function(){!function(e){try{var t=JSON.stringify(e);oe.a.setItem("state",t)}catch(n){console.log(n)}}(Le.getState())})),1e3);c.a.select({ios:"Press Cmd+R to reload,\nCmd+D or shake for dev menu",android:"Double tap R on your keyboard to reload,\nShake or press menu button for dev menu"});var Me=function(){return o.a.createElement(i.a,{store:Le},o.a.createElement(De.a,{url:"../public/logo/favicon.ico"}),o.a.createElement(ae,null))};Object(r.a)(Me)}},[[101,1,2]]]);
//# sourceMappingURL=app.ec88dcfe.chunk.js.map