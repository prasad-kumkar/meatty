(this.webpackJsonpmeatty=this.webpackJsonpmeatty||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.6f7e08f7.png"},,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/banner.edf1f3e3.jpg"},function(e,a,t){e.exports=t.p+"static/media/beef.ecbbf92c.jpg"},function(e,a,t){e.exports=t.p+"static/media/pork.bef8b827.jpg"},,function(e,a,t){e.exports=t(52)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/checkout-ad.15ae3f4b.jpg"},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(25),r=t.n(c),i=(t(37),t(38),t(10)),o=t(2),m=t(11),s=t(16),u=t.n(s),p=(t(39),t(26)),d=t.n(p),E=t(27),g=t.n(E),h=Object(n.createContext)(),b=function(e){var a=e.reducer,t=e.initialState,c=e.children;return l.a.createElement(h.Provider,{value:Object(n.useReducer)(a,t)},c)},v=function(){return Object(n.useContext)(h)};var f=function(){var e=v(),a=Object(m.a)(e,2),t=a[0].basket;return a[1],console.log(t),l.a.createElement("nav",{className:"header"},l.a.createElement(i.b,{to:"./"},l.a.createElement("img",{className:"header-logo",src:u.a,alt:"logo"})),l.a.createElement("div",{className:"header-search"},l.a.createElement("input",{type:"text",className:"header-search-box"}),l.a.createElement(d.a,{className:"header-search-icon"})),l.a.createElement("div",{className:"header-nav"},l.a.createElement(i.b,{to:"/Login",className:"header-link"},l.a.createElement("div",{className:"header-link-option"},l.a.createElement("span",{className:"header-link-option-one"},"Hello,"),l.a.createElement("span",{className:"header-link-option-two"},"Sign In"))),l.a.createElement(i.b,{to:"/",className:"header-link"},l.a.createElement("div",{className:"header-link-option"},l.a.createElement("span",{className:"header-link-option-one"},"Your"),l.a.createElement("span",{className:"header-link-option-two"},"Orders"))),l.a.createElement(i.b,{to:"./Checkout",className:"header-link"},l.a.createElement("div",{class:"header-option-basket"},l.a.createElement(g.a,null),l.a.createElement("span",{className:"header-link-option-two header-basket-count"},null===t||void 0===t?void 0:t.length)))))},k=t(28),N=t.n(k);t(46),t(47);var w=function(e){var a=e.id,t=e.title,n=e.price,c=e.image,r=e.rating,i=v(),o=Object(m.a)(i,2),s=(o[0].basket,o[1]);return l.a.createElement("div",{className:"product"},l.a.createElement("div",{className:"product-info"},l.a.createElement("p",null,t),l.a.createElement("p",{className:"product-price"},l.a.createElement("small",null,"$"),l.a.createElement("s",null,parseInt(n)+10),l.a.createElement("strong",null,"    ",n),l.a.createElement("p",null,"per KG"),l.a.createElement("br",null)),l.a.createElement("div",{className:"product-rating"},Array(parseInt(r)).fill().map((function(e){return l.a.createElement("span",null,"\u2b50")})))),l.a.createElement("img",{src:c,alt:"product-image"}),l.a.createElement("button",{onClick:function(){s({type:"ADD_TO_BASKET",item:{id:a,title:t,price:n,image:c,rating:r}})}},"Add to basket"))},y=t(29),j=t.n(y),x=t(30),O=t.n(x);var A=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("img",{className:"banner-image",src:N.a,alt:"banner"}),l.a.createElement("div",{className:"product-row"},l.a.createElement(w,{id:"12831",title:"Beef",price:"19.99",rating:"5",image:j.a}),l.a.createElement(w,{id:"12831",title:"Pork",price:"29.99",rating:"4",image:O.a})),l.a.createElement("div",{className:"product-row"},l.a.createElement(w,{id:"12831",title:"Chicken",price:"199.99",rating:"5",image:"https://www.nutritionadvance.com/wp-content/uploads/2017/05/chicken-meat.jpg"}),l.a.createElement(w,{id:"12832",title:"Lamb",price:"10.95",rating:"4",image:"https://www.nutritionadvance.com/wp-content/uploads/2017/05/lamb-meat.jpg"}),l.a.createElement(w,{id:"12831",title:"Turkey",price:"15.99",rating:"5",image:"https://www.nutritionadvance.com/wp-content/uploads/2017/05/turkey-meat.jpg"})),l.a.createElement("div",{className:"product-row"},l.a.createElement(w,{id:"12831",title:"Venison",price:"39.99",rating:"5",image:"https://www.nutritionadvance.com/wp-content/uploads/2017/05/venison-meat.jpg"})))};t(48),t(49);var S=function(e,a,t,n,c){return l.a.createElement("div",{className:"checkout-product"},l.a.createElement("img",{className:"checkout-product-image",src:c,alt:""}),l.a.createElement("div",{className:"checkout-product-info"},l.a.createElement("p",{className:"checkout-product-title"},a),l.a.createElement("p",{className:"checkout-product-price"},l.a.createElement("small",null,"$"),l.a.createElement("strong",null,t)),l.a.createElement("div",{className:"checkout-product-rating"},Array(parseInt(n)).fill().map((function(e){return l.a.createElement("p",null,"\u2b50")})))))};function B(){var e=v(),a=Object(m.a)(e,2),t=a[0].basket;a[1];return l.a.createElement("div",{className:"checkout"},l.a.createElement("div",{class:"checkout-ad"},l.a.createElement("p",null,l.a.createElement("b",null,"Pay faster for all your shopping needs with ",l.a.createElement("red",null,"Amazon Pay balance"))),l.a.createElement("p",null,"Get Instant refund on cancellations | Zero payment failures")),0===(null===t||void 0===t?void 0:t.length)?l.a.createElement("div",null,l.a.createElement("h2",null,"Your Shopping Basket is Empty"),l.a.createElement("p",null,'You have no items in your basket. To buy one or more items click on "Add to basket" next to the item.')):l.a.createElement("div",null,l.a.createElement("h2",null,"Your Shopping Basket"),t.map((function(e){return l.a.createElement(S,{item:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))))}t(50);var _=function(){return l.a.createElement("div",{className:"login-page"},l.a.createElement(i.b,{to:"./"},l.a.createElement("img",{className:"login-logo",src:u.a,alt:""})),l.a.createElement("div",{className:"login"},l.a.createElement("form",{action:"./api/login.php",className:"sign-in-box"},l.a.createElement("p",{className:"sign-in-title"},"Sign-In"),l.a.createElement("label",{className:"email-label"},l.a.createElement("b",null,"Email or mobile phone number")),l.a.createElement("input",{className:"text-input",type:"text"}),l.a.createElement("label",{className:"email-label"},l.a.createElement("b",null,"Password")),l.a.createElement("input",{className:"text-input",type:"text"}),l.a.createElement("button",{className:"continue-button"},"Continue"),l.a.createElement("p",{className:"email-label"},"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."),l.a.createElement("p",{className:"or-label"}," OR "),l.a.createElement("button",{className:"continue-button"},"Register"))))};var C=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/login"},l.a.createElement(_,null)),l.a.createElement(o.a,{path:"/checkout"},l.a.createElement(f,null),l.a.createElement(B,null)),l.a.createElement(o.a,{path:"/"},l.a.createElement(f,null),l.a.createElement(A,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=t(13),T=t(21);var P=function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return Object(T.a)(Object(T.a)({},e),{},{basket:[].concat(Object(I.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":break;default:return e}};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,{initialState:{basket:[{id:"12345",title:"Headset",price:123,rating:4,image:"https://m.media-amazon.com/images/I/8115eX+WTcL._AC_AA360_.jpg"}]},reducer:P},l.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.27aa9cf5.chunk.js.map