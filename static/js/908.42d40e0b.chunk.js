"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[908],{8908:function(n,e,t){t.r(e),t.d(e,{default:function(){return un}});var r,a,i,o,d=t(9434),s=t(9439),l=t(2791),c=t(168),u=t(7686).default,p=u.form(r||(r=(0,c.Z)(["\n  width: 400px;\n  padding: 20px;\n  border: 2px solid rgb(17, 17, 17);\n  border-radius: 3px;\n"]))),x=u.div(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-bottom: 15px;\n"]))),h=u.label(i||(i=(0,c.Z)(["\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n"]))),m=u.button(o||(o=(0,c.Z)(["\n  padding: 5px 10px;\n  border: 1px solid red;\n  border-radius: 5px;\n  background-color: transparent;\n  font-size: 16px;\n  cursor: pointer;\n"]))),f=t(3329);function b(n){var e=n.children,t=n.title;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("section",{children:[(0,f.jsx)("h2",{children:t}),e]})})}var g=function(n){return n.contacts.items},j=function(n){return n.contacts.isLoading},v=function(n){return n.contacts.error},w=t(5036);function Z(){var n=(0,d.I0)(),e=(0,d.v9)(g),t=(0,l.useState)(""),r=(0,s.Z)(t,2),a=r[0],i=r[1],o=(0,l.useState)(""),c=(0,s.Z)(o,2),u=c[0],j=c[1],v=function(n){var e=n.target,t=e.name,r=e.value;"name"===t&&i(r),"number"===t&&j(r)},Z=function(){i(""),j("")};return(0,f.jsx)(b,{title:"Phonebook",children:(0,f.jsxs)(p,{type:"submit",autoComplete:"false",onSubmit:function(t){t.preventDefault(),function(n){if(e.find((function(e){return e.name===n})))return alert("".concat(n," is already in contacts")),!0}(a)||n(w.addContact({name:a,number:u})),Z()},children:[(0,f.jsxs)(x,{children:[(0,f.jsx)(h,{htmlFor:"name",children:"Name"}),(0,f.jsx)("input",{className:"input-field",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:a,onChange:v})]}),(0,f.jsxs)(x,{children:[(0,f.jsx)(h,{htmlFor:"number",children:"Tel"}),(0,f.jsx)("input",{className:"input-field",type:"tel",name:"number",pattern:"^[+]?[0-9\\\\.\\\\-\\\\s]{1,15}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:u,onChange:v,required:!0})]}),(0,f.jsx)(m,{type:"submit",children:"add contact"})]})})}var y,C,k,z,N,F=t(470),S=function(n){return n.filter};function A(n){var e=n.title,t=(0,d.I0)(),r=(0,d.v9)(S);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h3",{children:e}),(0,f.jsx)("input",{className:"input-field filter",type:"text",name:"filter",value:r,onChange:function(n){return t((0,F.T)(n.target.value))}})]})}var _,E,I=t(7686).default,L=I.li(y||(y=(0,c.Z)([""]))),q=I.div(C||(C=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),P=I.p(k||(k=(0,c.Z)([""]))),M=I.div(z||(z=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n"]))),T=I.button(N||(N=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n\n  padding: 0px;\n\n  font-size: 18px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    border-color: #111111;\n  }\n"]))),$=t(7692);function B(n){var e=n.name,t=n.number,r=n.id,a=n.handleUpdate,i=(0,d.I0)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(L,{children:(0,f.jsxs)(q,{children:[(0,f.jsxs)(P,{children:[e,": ",t]}),(0,f.jsxs)(M,{children:[(0,f.jsx)(T,{type:"button",onClick:function(){return i((0,w.deleteContact)(r))},children:(0,f.jsx)($.SW4,{})}),(0,f.jsx)(T,{type:"button",onClick:function(){return a(r)},children:(0,f.jsx)($.Hlf,{})})]})]})})})}var D,H,J,U,W,G,K,O,Q=t(7686).default,R=Q.ul(_||(_=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n\n  width: 400px;\n"]))),V=(Q.li(E||(E=(0,c.Z)([""]))),t(4164)),X=t(7686),Y=X.default.div(D||(D=(0,c.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),nn=X.default.div(H||(H=(0,c.Z)(["\n  position: relative;\n  background-color: white;\n  overflow: hidden;\n  border-radius: 10px;\n"]))),en=X.default.div(J||(J=(0,c.Z)(["\n  position: absolute;\n  top: 25px;\n  right: 20px;\n  cursor: pointer;\n"]))),tn=X.default.h2(U||(U=(0,c.Z)(["\n  font-style: 24px;\n  margin: 0 0 15px 0;\n"]))),rn=X.default.form(W||(W=(0,c.Z)(["\n  width: 400px;\n  padding: 20px;\n"]))),an=X.default.div(G||(G=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-bottom: 15px;\n"]))),on=X.default.label(K||(K=(0,c.Z)(["\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n"]))),dn=X.default.button(O||(O=(0,c.Z)(["\n  padding: 5px 10px;\n  border: 1px solid red;\n  border-radius: 5px;\n  background-color: transparent;\n  font-size: 16px;\n  cursor: pointer;\n"]))),sn=t(8820);function ln(n){var e=n.handleModal,t=n.modalId,r=(0,l.useState)(""),a=(0,s.Z)(r,2),i=a[0],o=a[1],c=(0,l.useState)(""),u=(0,s.Z)(c,2),p=u[0],x=u[1],h=(0,d.I0)(),m=function(n){var e=n.target,t=e.name,r=e.value;"name"===t&&o(r),"number"===t&&x(r)},b=function(n){"Escape"===n.code&&e()};(0,l.useEffect)((function(){return window.addEventListener("keydown",b),function(){window.removeEventListener("keydown",b)}}));return(0,V.createPortal)((0,f.jsx)(Y,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,f.jsx)(nn,{children:(0,f.jsxs)(rn,{type:"submit",autoComplete:"false",onSubmit:function(n){n.preventDefault(),h((0,w.updateContact)({id:t,name:i,number:p})),e()},children:[(0,f.jsx)(en,{children:(0,f.jsx)(sn.oHP,{size:20,onClick:e})}),(0,f.jsx)(tn,{children:"Edit Contact"}),(0,f.jsxs)(an,{children:[(0,f.jsx)(on,{htmlFor:"modalName",children:"Name"}),(0,f.jsx)("input",{id:"modalName",className:"input-field",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:i,onChange:m})]}),(0,f.jsxs)(an,{children:[(0,f.jsx)(on,{htmlFor:"modalNumber",children:"Tel"}),(0,f.jsx)("input",{id:"modalNumber",className:"input-field",type:"tel",name:"number",pattern:"^[+]?[0-9\\\\.\\\\-\\\\s]{1,15}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:p,onChange:m,required:!0})]}),(0,f.jsx)(dn,{type:"submit",children:"Send"})]})})}),document.querySelector("#portal-modal"))}function cn(){var n=(0,d.I0)(),e=(0,d.v9)(g),t=(0,d.v9)(S),r=(0,l.useState)(!1),a=(0,s.Z)(r,2),i=a[0],o=a[1],c=(0,l.useState)(""),u=(0,s.Z)(c,2),p=u[0],x=u[1];(0,l.useEffect)((function(){n(w.fetchContacts())}),[n]);var h=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})),m=function(n){o(!0),x(n)};return(0,f.jsxs)(f.Fragment,{children:[e.length>0&&(0,f.jsx)(R,{children:h.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,f.jsx)(B,{id:e,name:t,number:r,handleUpdate:m},e)}))}),i&&(0,f.jsx)(ln,{modalId:p,handleModal:function(){o(!i)}})]})}var un=function(){var n=(0,d.v9)(j),e=(0,d.v9)(v);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Z,{}),(0,f.jsxs)(b,{title:"Contacts",children:[(0,f.jsx)(A,{title:"Find contacts by name"}),n&&(0,f.jsx)("h2",{children:"Loading..."}),e&&(0,f.jsx)("h2",{children:"Something wrong, Error"}),(0,f.jsx)(cn,{})]})]})}}}]);
//# sourceMappingURL=908.42d40e0b.chunk.js.map