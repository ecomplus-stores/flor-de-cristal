(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{242:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return s}));var o=c(28),n=c(22),a=c(40);const r=o.$ecomConfig.get("currency")||"BRL",s=e=>{const t={name:Object(n.a)(e),id:e.sku,price:Object(a.a)(e).toFixed(2)};return e.quantity&&(t.quantity=e.quantity),t}},264:function(e,t,c){"use strict";var o=c(9),n=c(242);t.a=e=>{const t=window.storefrontApp&&window.storefrontApp.router;if(t){let c,a,r;const s=()=>{const e=[];return o.a.data&&Array.isArray(o.a.data.items)&&o.a.data.items.forEach(t=>{e.push(Object(n.b)(t))}),e},i=(t,o)=>{const r={step:t,option:o};t<=1||!c?(e.push({event:"eec.checkout",ecommerce:{currencyCode:n.a,checkout:{actionField:r,products:s()}}}),e.push({event:"checkout"}),c=!0):a||(e.push({event:"eec.checkout_option",ecommerce:{currencyCode:n.a,checkout_option:{actionField:r}}}),e.push({event:"checkoutOption"}),a=!0)},u=t=>{if(!r){const{amount:c}=window.storefrontApp,a={id:t,revenue:(c&&c.total||o.a.data&&o.a.data.subtotal||0).toFixed(2)};c&&(void 0!==c.freight&&(a.shipping=c.freight.toFixed(2)),void 0!==c.tax&&(a.tax=c.tax.toFixed(2))),e.push({event:"eec.purchase",ecommerce:{currencyCode:n.a,purchase:{actionField:a,products:s()}}}),r=!0}},d=({name:e,params:t})=>{switch(e){case"cart":i(1,"Review Cart");break;case"checkout":i(2,"Confirm Purchase");break;case"confirmation":u(t.id)}};t.currentRoute&&d(t.currentRoute),t.afterEach(d)}}},265:function(e,t,c){"use strict";var o=c(9),n=c(242);t.a=e=>{const t={},c=c=>{const o=Object(n.b)(c);e.push({event:"eec.add",ecommerce:{currencyCode:n.a,add:{products:[o]}}}),e.push({event:"addToCart"}),t[c.sku]=o},a=c=>{const o=t[c.sku];e.push({event:"eec.remove",ecommerce:{currencyCode:n.a,remove:{products:[o?Object.assign({},o):Object(n.b)(c)]}}}),e.push({event:"removeFromCart"}),delete t[c.sku]};o.a.on("addItem",({item:e})=>c(e)),o.a.on("increaseItemQnt",({item:e})=>{const o=t[e.sku];if(o){const t=e.quantity-o.quantity;t>0?c({...e,quantity:t}):a({...e,quantity:-t})}else c(e)}),o.a.on("removeItem",({item:e})=>a(e)),o.a.on("clear",()=>{for(const e in t)t[e]&&a(t[e])})}},368:function(e,t,c){"use strict";c.r(t);c(13);var o=c(84),n=c(242),a=c(264),r=c(265);t.default=(e={})=>{const{dataLayerVar:t,parseDomMsDelay:c}=e,s=window[t]||window.dataLayer;s&&((e=>{const t=window.storefront&&window.storefront.context;if(t&&"products"===t.resource){const{body:c}=t,a=Object(n.b)(c),r={event:"eec.detail",ecommerce:{currencyCode:n.a,detail:{products:[a]}}},s=Object(o.a)(c);s.length&&(a.category=c.category_tree?c.category_tree.replace(/\s>\s/g,"/"):s[0],r.ecommerce.detail.actionField={list:s[0]}),c.brands&&c.brands.length&&(a.brand=c.brands[0].name),e.push(r)}})(s),Object(a.a)(s),Object(r.a)(s),setTimeout(()=>{(e=>{const t=document.querySelectorAll("[data-sku]");if(t.length){const c=[],o={},a="/search"===window.location.pathname;for(let e=0;e<t.length;e++){const n=t[e],{sku:r}=n.dataset;if(-1===c.indexOf(r)&&(c.push(r),n.closest)){const e=n.closest(".products-carousel");!a&&e&&(o[r]=e.dataset.title)}}e.push({event:"eec.impressions",ecommerce:{currencyCode:n.a,impressions:c.map(e=>{const t=a?"Search results":o[e],c={id:e};return t&&(c.list=t),c})}})}})(s)},c>=0?c:300))}}}]);
//# sourceMappingURL=ae4ea1a3428b55e8cc98.js.map