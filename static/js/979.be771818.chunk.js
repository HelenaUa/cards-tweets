"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[979],{527:function(n,t,e){e.r(t),e.d(t,{default:function(){return X}});var o,r,i,a,s,p,l,x,c,d,u=e(861),f=e(439),g=e(757),h=e.n(g),b=e(791),A=e(243),w=e(168),m=e(444),y=m.ZP.li(o||(o=(0,w.Z)(["\nposition: relative;\ndisplay: flex;\nflex-direction: column;\nlist-style-type: none;\nwidth: 380px;\nheight: 460px;\npadding: 0 0 36px 0;\njustify-content: flex-end;\nalign-items: center;\nbackground-color: #5736A3;\nborder-radius: 20px;\n  &:hover {\n    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);\n    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  }"]))),k=m.ZP.p(r||(r=(0,w.Z)(["\nfont-family: 'Montserrat';\nfont-style: normal;\nfont-weight: 500;\nfont-size: 20px;\nline-height: 24px;\ntext-transform: uppercase;\nmargin-left: 0;\nmargin-top: 0;\nmargin-right: 0;\nmargin-button: 8px;\ncolor: #EBD8FF;"]))),v=m.ZP.button(i||(i=(0,w.Z)(["\ntext-transform: uppercase;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\npadding: 14px 28px;\ngap: 6px;\nwidth: 196px;\nheight: 50px;\nmargin-top: 18px;\nbackground: #EBD8FF;\nbox-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\nborder-radius: 10.3108px;\nfont-family: 'Montserrat';\nfont-style: normal;\nfont-weight: 600;\nfont-size: 18px;\nline-height: 22px;\ncolor: #373737;\n&.active {\n   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n   border-radius: 10.3108px;\n  }"]))),Z=m.ZP.img(a||(a=(0,w.Z)(["\nposition: absolute;\ntop: 190px;\nborder-radius: 50%;\nborder: 8px solid #EBD8FF;\nbox-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;"]))),F=m.ZP.img(s||(s=(0,w.Z)(["\nposition: absolute;\ntop: 20px;\nleft: 20px;"]))),j=m.ZP.img(p||(p=(0,w.Z)(["\nposition: absolute;\npadding: 0 36px;\ntop: 28px;"]))),E=m.ZP.div(l||(l=(0,w.Z)(["\nposition: absolute;\nheight: 8px;\nwidth: 380px;\ntop: 235px;\nbackground: #ebd8ff;\nbox-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n  inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;"]))),B=e.p+"static/media/picture.204c52a4d4fe08cebf94.png",C=e(184),P=function(n){var t=n.id,e=n.name,o=n.avatar,r=n.tweets,i=n.followers,a=n.isFollowing,s=(0,b.useState)(i),p=(0,f.Z)(s,2),l=p[0],x=p[1],c=(0,b.useState)(a),d=(0,f.Z)(c,2),g=d[0],w=d[1],m=function(){var n=(0,u.Z)(h().mark((function n(){var e,o;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=g?l-1:l+1,o=!a,n.prev=2,n.next=5,A.Z.put("https://642fd9e6b289b1dec4bb7aed.mockapi.io/users/".concat(t),{followers:e,isFollowing:o});case 5:x(e),w(!g),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(){return n.apply(this,arguments)}}();return(0,C.jsxs)(y,{id:t,children:[(0,C.jsx)(F,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB1VghUyNRDM7eXEU7cwi4mau4Ck4geuIqztScOCx/GQQGgwABogJEERXUIFrRnSn5dvOY9M1bXlqgDd9Mpm+32fDet8mXlGK5XJ7Q7jFjOy+Komxy4H0O+OMn7RhfyAc6bAP6BPBCGNDlLDoi5/BEGHDEpP0gx/BGGDBg0trkFB4Ja7ENmbSv5BDWTaF73bFN2eZsyAAINbrWQcL/ie1B/Bfi3yN7lwtN4JI2w4TtVtaHYsAF1ftvAvY5fOV7E2H4Axfc8mfqHtYgYyxCrcV6xL6jKEblz74j2ZCl5KomkIhlQRn2yzEW6v48OscK2JdyyJXkClkoE7a9SGP21PpBH1D8O+Fa4uAtl2QDmkCP3g/Y+4HYS7KEe7zczwXIZdhUkQWS/lGtMbhGieLgXeWvyfrFH31ZV0RxrOoNy7PWEaLP/o/0Pvir1mdspbzQoTVALsPGag1NAVkg5YpqnZrJGsQ9ReT21bPxYDolO6omQHa9/VDkNqEFMpQhsm7lwKJjWis6iVjthrgWFCSZvWvkMix1yDbSONH2tZYh+2KdSpFvAeLkutvWkCNMjwzXVG8apfWf7Xvk2xLhhLgj227Ud3N5PmCdH9E3r3W2bSNXkodMwjiINV+fikguhJQYKE1kA0jDyIF5qKUPLPrWJRswoozJEXIZFqbulxLC4TVZol9Bs9Ce/4RyhV+CrCHZ9Giy4Qz2obB0HpBxjEyjeoIu5TmUH2ak+PC4B+LuqdYyyvinEJfwutiX/58B3xp8MK6Es5ixjnNPzAKQ/Js2QyXyDSVvRYfSnVrDKgsr8Pjj+8qTyMfwRhhEfkKO4YkwlyIfwwthbxX5reEZ9nkHO/uqtfAAAAAASUVORK5CYII=",alt:"logo"}),(0,C.jsx)(j,{src:B,alt:"picture"}),(0,C.jsx)(E,{}),(0,C.jsx)(Z,{src:o,width:80,alt:e}),(0,C.jsxs)(k,{children:[r," tweets"]}),(0,C.jsxs)(k,{children:[l.toLocaleString("en-US",{maximumFractionDigits:0})," followers"]}),(0,C.jsx)(v,{style:{background:g?"#5CD3A8":"#EBD8FF"},type:"button",onClick:m,children:g?"Following":"Follow"})]},t)},D=e(87),S=(0,m.ZP)(D.OL)(x||(x=(0,w.Z)(["\ndisplay: flex;\ntext-decoration: none;\nborder: solid 1px black;\nborder-radius: 4px;\ncolor: #373737;\nbackground: #EBD8FF;\nfont-weight: 500;\nwidth: 76px;\nheight: 34px;\njustify-content: center;\nalign-items: center;\n  :hover {\n    color: white;\n    background: #5736A3;\n    }"]))),N=m.ZP.ul(c||(c=(0,w.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\ngap: 20px;\npadding: 0 16px;"]))),Q=m.ZP.button(d||(d=(0,w.Z)(["\ndisplay: flex;\nmargin: 0 auto;\nwidth: 196px;\nheight: 50px;\njustify-content: center;\nalign-items: center;\nbackground: #EBD8FF;\nbox-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\nborder-radius: 10.3108px;\nfont-family: 'Montserrat';\nfont-style: normal;\nfont-weight: 600;\nfont-size: 18px;\nline-height: 22px;\ncolor: #373737;\n&.active {\n   background: #5CD3A8;\n   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n   border-radius: 10.3108px;\n  };\n  :hover {\n        background: #5CD3A8;\n    }"]))),V=e(689),X=function(){var n,t,e=(0,b.useState)([]),o=(0,f.Z)(e,2),r=o[0],i=o[1],a=(0,b.useState)(3),s=(0,f.Z)(a,2),p=s[0],l=s[1],x=(0,b.useState)(!1),c=(0,f.Z)(x,2),d=c[0],g=c[1],w=(0,V.TH)(),m=null!==(n=null===w||void 0===w||null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";function y(){return(y=(0,u.Z)(h().mark((function n(){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A.Z.get("https://642fd9e6b289b1dec4bb7aed.mockapi.io/users?page=1&limit=".concat(p));case 3:t=n.sent,i(t.data),g(!0),15===p&&g(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}return(0,b.useEffect)((function(){!function(){y.apply(this,arguments)}(p)}),[p]),(0,C.jsxs)("div",{children:[(0,C.jsx)(S,{to:m,children:"Back"}),(0,C.jsx)(N,{children:r.map((function(n){return(0,C.jsx)(P,{id:n.id,name:n.user,avatar:n.avatar,tweets:n.tweets,followers:n.followers,isFollowing:n.isFollowing},n.id)}))}),d&&(0,C.jsx)(Q,{type:"button",onClick:function(){l(p+3)},children:"Load More"})]})}}}]);
//# sourceMappingURL=979.be771818.chunk.js.map