!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("proptypes"),require("preact")):"function"==typeof define&&define.amd?define(["proptypes","preact"],t):e.preactCompat=t(e.PropTypes,e.preact)}(this,function(e,t){function n(){return null}function r(e){var t=e.nodeName,n=e.attributes;e.attributes={},t.defaultProps&&C(e.attributes,t.defaultProps),n&&C(e.attributes,n)}function o(e,t){var n,r,o;if(t){for(o in t)if(n=z.test(o))break;if(n){r=e.attributes={};for(o in t)t.hasOwnProperty(o)&&(r[z.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o])}}}function i(e,n,r){var o=n&&n._preactCompatRendered&&n._preactCompatRendered.base;o&&o.parentNode!==n&&(o=null),o||(o=n.children[0]);for(var i=n.childNodes.length;i--;)n.childNodes[i]!==o&&n.removeChild(n.childNodes[i]);var a=t.render(e,n,o);return n&&(n._preactCompatRendered=a&&(a._component||{base:a})),"function"==typeof r&&r(),a&&a._component||a}function a(e,n,r,o){var a=t.h(B,{context:e.context},n),p=i(a,r);return o&&o(p),p._component||p.base}function p(e){var r=e._preactCompatRendered&&e._preactCompatRendered.base;return!(!r||r.parentNode!==e)&&(t.render(t.h(n),e,r),!0)}function c(e){return f.bind(null,e)}function l(e,t){for(var n=t||0;n<e.length;n++){var r=e[n];Array.isArray(r)?l(r):r&&"object"==typeof r&&!y(r)&&(r.props&&r.type||r.attributes&&r.nodeName||r.children)&&(e[n]=f(r.type||r.nodeName,r.props||r.attributes,r.children))}}function u(e){return"function"==typeof e&&!(e.prototype&&e.prototype.render)}function s(e){return x({displayName:e.displayName||e.name,render:function(){return e(this.props,this.context)}})}function d(e){var t=e[$];return t?t===!0?e:t:(t=s(e),Object.defineProperty(t,$,{configurable:!0,value:!0}),t.displayName=e.displayName,t.propTypes=e.propTypes,t.defaultProps=e.defaultProps,Object.defineProperty(e,$,{configurable:!0,value:t}),t)}function f(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];return l(e,2),h(t.h.apply(void 0,e))}function h(e){e.preactCompatNormalized=!0,g(e),u(e.nodeName)&&(e.nodeName=d(e.nodeName));var t=e.attributes.ref,n=t&&typeof t;return!H||"string"!==n&&"number"!==n||(e.attributes.ref=v(t,H)),b(e),e}function m(e,n){for(var r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];if(!y(e))return e;var i=e.attributes||e.props,a=t.h(e.nodeName||e.type,i,e.children||i&&i.children),p=[a,n];return r&&r.length?p.push(r):n&&n.children&&p.push(n.children),h(t.cloneElement.apply(void 0,p))}function y(e){return e&&(e instanceof G||e.$$typeof===V)}function v(e,t){return t._refProxies[e]||(t._refProxies[e]=function(n){t&&t.refs&&(t.refs[e]=n,null===n&&(delete t._refProxies[e],t=null))})}function b(e){var t=e.nodeName,n=e.attributes;if(n&&"string"==typeof t){var r={};for(var o in n)r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onchange&&("textarea"===t||"input"===t.toLowerCase()&&!/^fil|che|rad/i.test(n.type))){var i=r.oninput||"oninput";n[i]||(n[i]=E([n[i],n[r.onchange]]),delete n[r.onchange])}}}function g(e){var t=e.attributes;if(t){var n=t.className||t.class;n&&(t.className=n)}}function C(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function P(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}function N(e){return e&&e.base||e}function _(){}function x(e){function t(e,t){k(this),T.call(this,e,t,I),R.call(this,e,t)}return e=C({constructor:t},e),e.mixins&&O(e,w(e.mixins)),e.statics&&C(t,e.statics),e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps()),_.prototype=T.prototype,t.prototype=C(new _,e),t.displayName=e.displayName||"Component",t}function w(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(t[o]||(t[o]=[])).push(r[o])}return t}function O(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=E(t[n].concat(e[n]||J),"getDefaultProps"===n||"getInitialState"===n||"getChildContext"===n))}function k(e){for(var t in e){var n=e[t];"function"!=typeof n||n.__bound||q.hasOwnProperty(t)||((e[t]=n.bind(e)).__bound=!0)}}function A(e,t,n){if("string"==typeof t&&(t=e.constructor.prototype[t]),"function"==typeof t)return t.apply(e,n)}function E(e,t){return function(){for(var n,r=arguments,o=this,i=0;i<e.length;i++){var a=A(o,e[i],r);if(t&&null!=a){n||(n={});for(var p in a)a.hasOwnProperty(p)&&(n[p]=a[p])}else"undefined"!=typeof a&&(n=a)}return n}}function R(e,t){S.call(this,e,t),this.componentWillReceiveProps=E([S,this.componentWillReceiveProps||"componentWillReceiveProps"]),this.render=E([S,D,this.render||"render",j])}function S(e,t){var n=this;if(e){var r=e.children;if(r&&Array.isArray(r)&&1===r.length&&(e.children=r[0],e.children&&"object"==typeof e.children&&(e.children.length=1,e.children[0]=e.children)),L){var o="function"==typeof this?this:this.constructor,i=this.propTypes||o.propTypes;if(i)for(var a in i)if(i.hasOwnProperty(a)&&"function"==typeof i[a]){var p=n.displayName||o.name,c=i[a](e,a,p,"prop");c&&console.error(new Error(c.message||c))}}}}function D(e){H=this}function j(){H===this&&(H=null)}function T(e,n,r){t.Component.call(this,e,n),this.state=this.getInitialState?this.getInitialState():{},this.refs={},this._refProxies={},r!==I&&R.call(this,e,n)}function U(e,t){T.call(this,e,t)}e="default"in e?e.default:e;var W="15.1.0",M="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),V="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,$="undefined"!=typeof Symbol?Symbol.for("__preactCompatWrapper"):"__preactCompatWrapper",q={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},z=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/,I={},L="undefined"==typeof process||!process.env||"production"!==process.env.NODE_ENV,G=t.h("a",null).constructor;G.prototype.$$typeof=V,G.prototype.preactCompatUpgraded=!1,G.prototype.preactCompatNormalized=!1,Object.defineProperty(G.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e},configurable:!0}),Object.defineProperty(G.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e},configurable:!0});var Z=t.options.event;t.options.event=function(e){return Z&&(e=Z(e)),e.persist=Object,e.nativeEvent=e,e};var F=t.options.vnode;t.options.vnode=function(e){if(!e.preactCompatUpgraded){e.preactCompatUpgraded=!0;var t=e.nodeName,n=e.attributes=C({},e.attributes);"function"==typeof t?(t[$]===!0||t.prototype&&"isReactComponent"in t.prototype)&&(e.children&&!e.children.length&&(e.children=void 0),e.children&&(n.children=e.children),e.preactCompatNormalized||h(e),r(e)):(e.children&&!e.children.length&&(e.children=void 0),e.children&&(n.children=e.children),n.defaultValue&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),o(e,n))}F&&F(e)};var B=function(){};B.prototype.getChildContext=function(){return this.props.context},B.prototype.render=function(e){return e.children[0]};for(var H,J=[],K={map:function(e,t,n){return null==e?null:(e=K.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t))},forEach:function(e,t,n){return null==e?null:(e=K.toArray(e),n&&n!==e&&(t=t.bind(n)),void e.forEach(t))},count:function(e){return e&&e.length||0},only:function(e){if(e=K.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return Array.isArray&&Array.isArray(e)?e:J.concat(e)}},Q={},X=M.length;X--;)Q[M[X]]=c(M[X]);C(T.prototype=new t.Component,{constructor:T,isReactComponent:{},replaceState:function(e,t){var n=this;this.setState(e,t);for(var r in n.state)r in e||delete n.state[r]},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}}),_.prototype=T.prototype,U.prototype=new _,U.prototype.shouldComponentUpdate=function(e,t){return P(this.props,e)||P(this.state,t)};var Y={version:W,DOM:Q,PropTypes:e,Children:K,render:i,createClass:x,createFactory:c,createElement:f,cloneElement:m,isValidElement:y,findDOMNode:N,unmountComponentAtNode:p,Component:T,PureComponent:U,unstable_renderSubtreeIntoContainer:a};return Y});
//# sourceMappingURL=preact-compat.min.js.map