(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},88:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),a=s(22),i=s.n(a),r=(s(66),s(67),s(68),s(44)),o=s.n(r),l=s(101),j=(s(69),s(3));var d=function(e){var t=e.avatar,s=e.Icon,c=e.title,n=e.onClick;return Object(j.jsxs)("div",{onClick:n,className:"headerOption",children:[s&&Object(j.jsx)(s,{className:"headerOption__icon"}),t&&Object(j.jsx)(l.a,{className:"headerOption__icon",src:"{avatar}"}),Object(j.jsx)("h3",{className:"headerOption__title",children:c})]})},b=s(45),h=s.n(b),O=s(46),x=s.n(O),u=s(47),m=s.n(u),p=s(48),v=s.n(p),_=s(49),f=s.n(_),g=s(26),N=(s(79),g.a.initializeApp({apiKey:"AIzaSyAAsVvxwv_80rHdDho82LkyqbM3A3w7abs",authDomain:"linkedin-clone-1f3d7.firebaseapp.com",projectId:"linkedin-clone-1f3d7",storageBucket:"linkedin-clone-1f3d7.appspot.com",messagingSenderId:"821315076056",appId:"1:821315076056:web:bc56efd417e4b70ee1bcad"}).firestore()),w=g.a.auth(),y=s(19),I=s(31),k=Object(I.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),S=k.actions,V=(S.login,S.logout),C=k.reducer;var M=function(){var e=Object(y.b)();return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"header__left",children:[Object(j.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/174/174857.svg",alt:""}),Object(j.jsxs)("div",{className:"header__search",children:[Object(j.jsx)(o.a,{}),Object(j.jsx)("input",{placeholder:"Search",type:"text"})]})]}),Object(j.jsxs)("div",{className:"header__right",children:[Object(j.jsx)(d,{Icon:h.a,title:"Home"}),Object(j.jsx)(d,{Icon:x.a,title:"My Network"}),Object(j.jsx)(d,{Icon:m.a,title:"Jobs"}),Object(j.jsx)(d,{Icon:v.a,title:"Messaging"}),Object(j.jsx)(d,{Icon:f.a,title:"Notifications"}),Object(j.jsx)(d,{avatar:"https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg",title:"Me",onClick:function(){e(V()),w.signOut()}})]})]})};s(81);var D=function(){var e=function(e){return Object(j.jsxs)("div",{className:"sidebar__recentItem",children:[Object(j.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(j.jsx)("p",{children:e})]})};return Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsxs)("div",{className:"sidebar__top",children:[Object(j.jsx)("img",{src:"https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80",alt:""}),Object(j.jsx)(l.a,{className:"sidebar__avatar"}),Object(j.jsx)("h2",{children:"Vishal Das"}),Object(j.jsx)("h4",{children:"vishal.das0911@gmail.com"})]}),Object(j.jsxs)("div",{className:"sidebar__stats",children:[Object(j.jsxs)("div",{className:"sidebar__stat",children:[Object(j.jsx)("p",{children:"Who viewed you?"}),Object(j.jsx)("p",{className:"sidebar__statNumber",children:"3,500"})]}),Object(j.jsxs)("div",{className:"sidebar__stat",children:[Object(j.jsx)("p",{children:"Views on your post"}),Object(j.jsx)("p",{className:"sidebar__statNumber",children:"1,000"})]})]}),Object(j.jsxs)("div",{className:"sidebar__bottom",children:[Object(j.jsx)("p",{children:"Recent"}),e("Reactjs"),e("Programming"),e("developer"),e("softwareengineering")]})]})},A=s(18),B=s(54),E=s.n(B);s(82),s(83);var H=function(e){var t=e.Icon,s=e.title,c=e.color;return Object(j.jsxs)("div",{className:"inputOption",children:[Object(j.jsx)(t,{style:{color:c}}),Object(j.jsx)("h4",{children:s})]})},F=s(55),W=s.n(F),J=s(56),T=s.n(J),U=s(57),z=s.n(U),L=s(58),Z=s.n(L),q=(s(84),s(50)),P=s.n(q),R=s(51),Y=s.n(R),K=s(52),X=s.n(K),$=s(53),G=s.n($);var Q=function(e){var t=e.name,s=e.description,c=e.message;return e.photoUrl,Object(j.jsxs)("div",{className:"post",children:[Object(j.jsxs)("div",{className:"post__header",children:[Object(j.jsx)(l.a,{}),Object(j.jsxs)("div",{className:"post__info",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("p",{children:s})]})]}),Object(j.jsx)("div",{className:"post__body",children:Object(j.jsx)("p",{children:c})}),Object(j.jsxs)("div",{className:"post__buttons",children:[Object(j.jsx)(H,{Icon:P.a,title:"Like",color:"gray"}),Object(j.jsx)(H,{Icon:Y.a,title:"Comment",color:"gray"}),Object(j.jsx)(H,{Icon:X.a,title:"Share",color:"gray"}),Object(j.jsx)(H,{Icon:G.a,title:"Send",color:"gray"})]})]})};var ee=function(){var e=Object(c.useState)(""),t=Object(A.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)([]),i=Object(A.a)(a,2),r=i[0],o=i[1];return Object(c.useEffect)((function(){N.collection("posts").orderBy("timestamps","desc").onSnapshot((function(e){return o(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(j.jsxs)("div",{className:"feed",children:[Object(j.jsxs)("div",{className:"feed__inputcontainer",children:[Object(j.jsxs)("div",{className:"feed__input",children:[Object(j.jsx)(E.a,{}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{value:s,onChange:function(e){return n(e.target.value)},type:"text"}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),N.collection("posts").add({name:"Vishal Das",description:"worked in linkedin clone",message:s,photoUrl:"",timestamps:g.a.firestore.FieldValue.serverTimestamp()}),n("")},type:"submit",children:"Send"})]})]}),Object(j.jsxs)("div",{className:"feed__inputOptions",children:[Object(j.jsx)(H,{Icon:W.a,title:"Photo",color:"#70B5F9"}),Object(j.jsx)(H,{Icon:T.a,title:"Video",color:"#E7A33E"}),Object(j.jsx)(H,{Icon:z.a,title:"Event",color:"#C0CBCD"}),Object(j.jsx)(H,{Icon:Z.a,title:"Write article",color:"#7FC15E"})]})]}),r.map((function(e){var t=e.id,s=e.data,c=s.name,n=s.description,a=s.message,i=s.photoUrl;return Object(j.jsx)(Q,{name:c,description:n,message:a,photoUrl:i},t)})),";"]})};s(85);s(86);var te=s(60),se=s.n(te),ce=s(59),ne=s.n(ce);var ae=function(){var e=function(e,t){return Object(j.jsxs)("div",{className:"widgets__article",children:[Object(j.jsx)("div",{className:"widgets__articleleft",children:Object(j.jsx)(ne.a,{})}),Object(j.jsxs)("div",{className:"widgets__articleright",children:[Object(j.jsx)("h4",{children:e}),Object(j.jsx)("p",{children:t})]})]})};return Object(j.jsxs)("div",{className:"widgets",children:[Object(j.jsxs)("div",{className:"widgets__header",children:[Object(j.jsx)("h2",{children:"LinkedIn News"}),Object(j.jsx)(se.a,{})]}),e("This is just a clone","by Vishal"),e("Next I am gonna work on Netflix-clone","by Vishal again"),e("This is a great news","by Vishal")]})};var ie=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(M,{}),Object(j.jsxs)("div",{className:"app__body",children:[Object(j.jsx)(D,{}),Object(j.jsx)(ee,{}),Object(j.jsx)(ae,{})]})]})},re=Object(I.a)({reducer:{counter:C}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(y.a,{store:re,children:Object(j.jsx)(ie,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[88,1,2]]]);
//# sourceMappingURL=main.3091cd76.chunk.js.map