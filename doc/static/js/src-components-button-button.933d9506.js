(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/components/button/button.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/docz/dist/index.m.js"),l=(n("./node_modules/antd/es/badge/style/index.js"),n("./node_modules/antd/es/badge/index.js"));n("./src/components/button/button.scss");function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=function(e){var t=e.scale,n=void 0===t?"normal":t,o=e.kind,a=void 0===o?"default":o,c=e.children;return r.a.createElement("button",{className:["button",n,a].join(" ")},c)},s=function(e){var t=e.children,n=u(e,["children"]);return r.a.createElement(l.a,{count:5},r.a.createElement(i,n,t))};function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}s.defaultProps={scales:"normal",kind:"primary"},s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{scales:{defaultValue:{value:"'normal'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'normal'",computed:!1},{value:"'big'",computed:!1}]},required:!1,description:"\u6309\u94ae\u5927\u5c0f small | normal | big"},kind:{defaultValue:{value:"'primary'",computed:!1},type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'cancel'",computed:!1},{value:"'dark'",computed:!1},{value:"'gray'",computed:!1}]},required:!1,description:"\u6309\u94ae\u7c7b\u578b primary | secondary | cancel"}}},n.d(t,"default",function(){return k});var k=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,y(t).call(this,e))).layout=null,n}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=p(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"button"}},"Button"),r.a.createElement(a.MDXTag,{name:"p",components:t},"\u8fd9\u662f\u4e00\u4e2a\u63cf\u8ff0\uff0c\u63cf\u8ff0\u4f60\u7684\u7ec4\u4ef6\u529f\u80fd\u4e0e\u4f7f\u7528\u573a\u666f."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"\u4ee3\u7801\u6f14\u793a"}},"\u4ee3\u7801\u6f14\u793a"),r.a.createElement(a.MDXTag,{name:"p",components:t},"\u7b80\u5355\u793a\u4f8b"),r.a.createElement(c.e,{__position:0,__code:"<Button>Click me</Button>",__scope:{props:this?this.props:n,Button:s}},r.a.createElement(s,null,"Click me")),r.a.createElement(a.MDXTag,{name:"p",components:t},"\u5e26\u6709\u5927\u5c0f\u53c2\u6570\u7684\u793a\u4f8b"),r.a.createElement(c.e,{__position:1,__code:'<Button scale="small">Click me</Button>\n<Button scale="normal">Click me</Button>\n<Button scale="big">Click me</Button>',__scope:{props:this?this.props:n,Button:s}},r.a.createElement(s,{scale:"small"},"Click me"),r.a.createElement(s,{scale:"normal"},"Click me"),r.a.createElement(s,{scale:"big"},"Click me")),r.a.createElement(a.MDXTag,{name:"p",components:t},"\u5e26\u6709\u989c\u8272\u7684\u793a\u4f8b"),r.a.createElement(c.e,{__position:2,__code:'<Button kind="primary">Click me</Button>\n<Button kind="secondary">Click me</Button>\n<Button kind="cancel">Click me</Button>\n<Button kind="dark">Click me</Button>\n<Button kind="gray">Click me</Button>',__scope:{props:this?this.props:n,Button:s}},r.a.createElement(s,{kind:"primary"},"Click me"),r.a.createElement(s,{kind:"secondary"},"Click me"),r.a.createElement(s,{kind:"cancel"},"Click me"),r.a.createElement(s,{kind:"dark"},"Click me"),r.a.createElement(s,{kind:"gray"},"Click me")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),r.a.createElement(c.f,{of:s}))}}])&&d(n.prototype,o),l&&d(n,l),t}();k.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/components/button/button.scss":function(e,t,n){}}]);