!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define("react-parallax",["prop-types","react"],t):"object"==typeof exports?exports["react-parallax"]=t(require("prop-types"),require("react")):e["react-parallax"]=t(e.PropTypes,e.React)}("undefined"!=typeof self?self:this,function(n,r){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),m=n.n(i);function a(e){if(!e)return 0;var t=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0];return t.innerHeight||r.clientHeight||o.clientHeight}function c(e,t){return e?t?t.clientHeight:a(e):0}function s(e){var n=[],r=m.a.Children.toArray(e.children);return r.forEach(function(e,t){e.type&&e.type.isParallaxBackground&&(n=n.concat(r.splice(t,1)))}),{bgChildren:n,children:r}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,i["PureComponent"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.onMount,r=e.className;return m.a.createElement("div",{ref:function(e){return n(e)},className:r||"react-parallax-content",style:{position:"relative"}},t)}}])&&u(n.prototype,r),o&&u(n,o),t}();d.propTypes={children:o.a.node,className:o.a.string,onMount:o.a.func},d.propTypes={};var h=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){v(t,e,n[e])})}return t}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},j=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=w(this,I(t).call(this,e))).onWindowResize=function(){n.parentHeight=c(n.canUseDOM,n.parent),n.updatePosition()},n.onWindowLoad=function(){n.updatePosition()},n.onScroll=function(){if(n.canUseDOM){var e=Date.now();10<=e-n.timestamp&&function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length?arguments[2]:void 0;if(!n)return!1;var r=e.getBoundingClientRect().top-t,o=e.getBoundingClientRect().bottom+t;return r<=a(n)&&0<=o}(n.node,100,n.canUseDOM)&&(window.requestAnimationFrame(n.updatePosition),n.timestamp=e)}},n.onContentMount=function(e){n.content=e},n.updatePosition=function(){if(n.content){var e=!1;n.contentHeight=n.content.getBoundingClientRect().height,n.contentWidth=n.node.getBoundingClientRect().width,n.img&&n.img.naturalWidth/n.img.naturalHeight<n.contentWidth/n.getImageHeight()&&(e=!0);var t=function(e,t){if(!t)return 0;var n,r=e.getBoundingClientRect(),o=r.top,i=r.height,a=c(t),s=a<i?i:a;return(Math.round(s<o?s:o)-(n=-i))/(s-n)||0}(n.node,n.canUseDOM,n.parent);n.img&&n.setImagePosition(t,e),n.bg&&0<n.splitChildren.bgChildren.length&&n.setBackgroundPosition(t)}},n.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:P,bgStyle:y({},P,e.bgStyle),percentage:0},n.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),n.node=null,n.content=null,n.splitChildren=s(e),n.bgImageLoaded=!1,n.bgImageRef=void 0,n.parent=e.parent,n.parentHeight=c(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.dynamicBlur=!(!e.blur||void 0===e.blur.min||void 0===e.blur.max),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,i["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,n=t.bgImage,r=t.bgImageSrcSet,o=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,r,o):this.updatePosition()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.parent,r=t.bgImage,o=t.bgImageSrcSet,i=t.bgImageSizes,a=this.state.bgImage;this.splitChildren=s(this.props),e.parent!==n&&(this.removeListeners(e.parent),(this.parent=n)&&this.addListeners()),this.parentHeight=c(this.canUseDOM,this.parent),a!==r&&this.loadImage(r,o,i)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(e){var t=this.props,n=t.disabled,r=t.strength;if(!0!==n){var o=this.state.bgStyle,i="translate3d(-50%, ".concat((r<0?r:0)-r*e,"px, 0)");this.setState({bgStyle:y({},o,{WebkitTransform:i,transform:i}),percentage:e})}}},{key:"setImagePosition",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.disabled,o=n.strength,i=n.blur,a=t?"auto":"".concat(this.getImageHeight(),"px"),s=t?"".concat(this.contentWidth,"px"):"auto";if(!0!==r){var c=this.state.imgStyle,l="translate3d(-50%, ".concat((o<0?o:0)-o*e,"px, 0)"),u="none";if(i){var f=this.dynamicBlur?i.min+(1-e)*i.max:i;u="blur(".concat(f,"px)")}this.setState({imgStyle:y({},c,{height:a,width:s,WebkitTransform:l,transform:l,WebkitFilter:u,filter:u}),percentage:e})}}},{key:"getImageHeight",value:function(){var e=this.props.strength,t=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+t)}},{key:"loadImage",value:function(e,t,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(){r.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},function(){return r.updatePosition()})},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"log",value:function(){var e=this.props.log;if(e){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];console.log(n)}}},{key:"render",value:function(){var t=this,e=this.props,n=e.className,r=e.style,o=e.bgClassName,i=e.contentClassName,a=e.bgImageAlt,s=e.renderLayer,c=e.bgImageStyle,l=this.state,u=l.bgImage,f=l.bgImageSrcSet,p=l.bgImageSizes,g=l.percentage,d=l.imgStyle,b=l.bgStyle;return m.a.createElement("div",{className:"react-parallax ".concat(n),style:y({position:"relative",overflow:"hidden"},r),ref:function(e){t.node=e}},u?m.a.createElement("img",{className:o,src:u,srcSet:f,sizes:p,ref:function(e){t.img=e},alt:a,style:y({},d,c)}):null,s?s(Math.min(-(g-1),1)):null,0<this.splitChildren.bgChildren.length?m.a.createElement("div",{className:"react-parallax-background-children",ref:function(e){t.bg=e},style:b},this.splitChildren.bgChildren):null,m.a.createElement(h,{onMount:this.onContentMount,className:i},this.splitChildren.children))}}])&&S(n.prototype,r),o&&S(n,o),t}();j.propTypes={bgClassName:o.a.string,bgImage:o.a.string,bgImageAlt:o.a.string,bgImageSizes:o.a.string,bgImageSrcSet:o.a.string,bgImageStyle:o.a.shape({}),bgStyle:o.a.shape({}),blur:o.a.oneOfType([o.a.number,o.a.object]),className:o.a.string,contentClassName:o.a.string,disabled:o.a.bool,log:o.a.bool,parent:o.a.any,renderLayer:o.a.func,strength:o.a.number,style:o.a.shape({})},j.defaultProps={bgClassName:"react-parallax-bgimage",bgImage:void 0,bgImageAlt:"",bgImageSizes:void 0,bgImageSrcSet:void 0,bgImageStyle:void 0,bgStyle:void 0,blur:void 0,className:"",contentClassName:"",disabled:!1,log:!1,parent:void 0,renderLayer:void 0,strength:100,style:void 0};var k=j;function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,E(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,m.a.Component),n=t,o=[{key:"isParallaxBackground",value:function(){return!0}}],(r=[{key:"render",value:function(){return m.a.createElement("div",{className:"react-parallax-background ".concat(this.props.className)},this.props.children)}}])&&C(n.prototype,r),o&&C(n,o),t}();R.propTypes={children:o.a.node,className:o.a.string},R.defaultProps={className:""};var N=R;n.d(t,"Parallax",function(){return k}),n.d(t,"Background",function(){return N})}])});