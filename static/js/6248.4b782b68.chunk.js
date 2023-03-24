"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[6248],{42805:function(e,t,n){var o=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.createPopupState=function(e){var t=e.state,n=e.setState,o=e.parentPopupState,r=e.popupId,u=e.variant,a=e.disableAutoFocus,i=t.isOpen,f=t.setAnchorElUsed,d=t.anchorEl,s=t.hovered,v=t.focused,b=t._childPopupState,h=t._deferNextOpen,O=t._deferNextClose,y=t,P=function(e){(function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(e,n)&&e[n]!==t[n])return!0;return!1})(y,e)&&n(y=p(p({},y),e))},g=function(e){var t=e&&e.type,n=e&&e.currentTarget;if("touchstart"!==t){var r=function(){if(e||f||function(e,t){if(c[e])return;c[e]=!0,console.error("[material-ui-popup-state] WARNING",t)}("missingEventOrAnchorEl","eventOrAnchorEl should be defined if setAnchorEl is not used"),o){if(!o.isOpen)return;o._setChildPopupState(E)}var r={isOpen:!0,hovered:"mouseover"===t||s,focused:"focus"===t||v};n?f||(r.anchorEl=n):e&&(r.anchorEl=e),P(r)};h?(P({_deferNextOpen:!1}),setTimeout(r,0)):r()}else P({_deferNextOpen:!0})},j=function(e){if("touchstart"!==(e&&e.type)){var t=function(){b&&b.close(),o&&o._setChildPopupState(null),P({isOpen:!1,hovered:!1,focused:!1})};O?(P({_deferNextClose:!1}),setTimeout(t,0)):t()}else P({_deferNextClose:!0})},E={anchorEl:d,setAnchorEl:function(e){P({setAnchorElUsed:!0,anchorEl:e})},setAnchorElUsed:f,popupId:r,variant:u,isOpen:i,open:g,close:j,toggle:function(e){i?j(e):g(e)},setOpen:function(e,t){e?g(t):j(t)},onBlur:function(e){var t=e.relatedTarget;v&&!l(t,E)&&(s?P({focused:!1}):j(e))},onMouseLeave:function(e){var t=e.relatedTarget;s&&!l(t,E)&&(v?P({hovered:!1}):j(e))},disableAutoFocus:null!==a&&void 0!==a?a:Boolean(s||v),_childPopupState:b,_setChildPopupState:function(e){return P({_childPopupState:e})}};return E},t.anchorRef=function(e){var t=e.setAnchorEl;return function(e){e&&t(e)}},t.bindTrigger=function(e){var t,n=e.isOpen,o=e.open,r=e.popupId,a=e.variant;return t={},(0,u.default)(t,"popover"===a?"aria-controls":"aria-describedby",n?r:null),(0,u.default)(t,"aria-haspopup","popover"===a||void 0),(0,u.default)(t,"onClick",o),(0,u.default)(t,"onTouchStart",o),t},t.bindContextMenu=function(e){var t,n=e.isOpen,o=e.open,r=e.popupId,a=e.variant;return t={},(0,u.default)(t,"popover"===a?"aria-controls":"aria-describedby",n?r:null),(0,u.default)(t,"aria-haspopup","popover"===a||void 0),(0,u.default)(t,"onContextMenu",(function(e){e.preventDefault(),o(e)})),t},t.bindToggle=function(e){var t,n=e.isOpen,o=e.toggle,r=e.popupId,a=e.variant;return t={},(0,u.default)(t,"popover"===a?"aria-controls":"aria-describedby",n?r:null),(0,u.default)(t,"aria-haspopup","popover"===a||void 0),(0,u.default)(t,"onClick",o),(0,u.default)(t,"onTouchStart",o),t},t.bindHover=function(e){var t,n=e.isOpen,o=e.open,r=e.onMouseLeave,a=e.popupId,i=e.variant;return t={},(0,u.default)(t,"popover"===i?"aria-controls":"aria-describedby",n?a:null),(0,u.default)(t,"aria-haspopup","popover"===i||void 0),(0,u.default)(t,"onTouchStart",o),(0,u.default)(t,"onMouseOver",o),(0,u.default)(t,"onMouseLeave",r),t},t.bindFocus=function(e){var t,n=e.isOpen,o=e.open,r=e.onBlur,a=e.popupId,i=e.variant;return t={},(0,u.default)(t,"popover"===i?"aria-controls":"aria-describedby",n?a:null),(0,u.default)(t,"aria-haspopup","popover"===i||void 0),(0,u.default)(t,"onFocus",o),(0,u.default)(t,"onBlur",r),t},t.bindPopover=function(e){var t=e.isOpen,n=e.anchorEl,o=e.close,r=e.popupId,u=e.onMouseLeave,a=e.disableAutoFocus;return p({id:r,anchorEl:n,open:t,onClose:o,onMouseLeave:u},a&&{disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0})},t.bindMenu=function(e){var t=e.isOpen,n=e.anchorEl,o=e.close,r=e.popupId,u=e.onMouseLeave,a=e.disableAutoFocus;return p({id:r,anchorEl:n,open:t,onClose:o,onMouseLeave:u},a&&{autoFocus:!1,disableAutoFocusItem:!0,disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0})},t.bindPopper=function(e){var t=e.isOpen,n=e.anchorEl,o=e.popupId,r=e.onMouseLeave;return{id:o,anchorEl:n,open:t,onMouseLeave:r}},t.initCoreState=void 0;var u=o(n(38416));!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var p=u?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(o,i,p):o[i]=e[i]}o.default=e,n&&n.set(e,o)}(n(47313));function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={};function l(e,t){var n=t.anchorEl,o=t._childPopupState;return f(n,e)||f(function(e){var t=e.popupId;return t&&"undefined"!==typeof document?document.getElementById(t):null}(t),e)||null!=o&&l(e,o)}function f(e,t){if(!e)return!1;for(;t;){if(t===e)return!0;t=t.parentElement}return!1}t.initCoreState={isOpen:!1,setAnchorElUsed:!1,anchorEl:null,hovered:!1,focused:!1,_childPopupState:null,_deferNextOpen:!1,_deferNextClose:!1}},6248:function(e,t,n){var o=n(64836),r=n(18698);Object.defineProperty(t,"vW",{enumerable:!0,get:function(){return b.bindTrigger}}),Object.defineProperty(t,"LI",{enumerable:!0,get:function(){return b.bindToggle}}),Object.defineProperty(t,"wK",{enumerable:!0,get:function(){return b.bindMenu}}),Object.defineProperty(t,"ZW",{enumerable:!0,get:function(){return b.bindPopover}}),Object.defineProperty(t,"Rg",{enumerable:!0,get:function(){return b.bindPopper}}),t.ZP=void 0;var u=o(n(18698)),a=o(n(56690)),i=o(n(89728)),p=o(n(66115)),c=o(n(61655)),l=o(n(94993)),f=o(n(73808)),d=o(n(38416)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=u?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(n(47313)),v=o(n(75192)),b=n(42805);function h(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,f.default)(e);if(t){var r=(0,f.default)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,l.default)(this,n)}}var y=function(e){(0,c.default)(n,e);var t=O(n);function n(){var e;(0,a.default)(this,n);for(var o=arguments.length,r=new Array(o),u=0;u<o;u++)r[u]=arguments[u];return e=t.call.apply(t,[this].concat(r)),(0,d.default)((0,p.default)(e),"state",b.initCoreState),(0,d.default)((0,p.default)(e),"_mounted",!0),(0,d.default)((0,p.default)(e),"_setStateIfMounted",(function(t){e._mounted&&e.setState(t)})),e}return(0,i.default)(n,[{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,o=n.popupId;if(!n.disableAutoFocus&&"object"===("undefined"===typeof document?"undefined":(0,u.default)(document))&&o&&(o!==e.popupId||this.state.anchorEl!==t.anchorEl)){var r=document.getElementById(o);r&&r.focus()}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.popupId,o=e.variant,r=e.parentPopupState,u=e.disableAutoFocus,a=t((0,b.createPopupState)({state:this.state,setState:this._setStateIfMounted,popupId:n,variant:o,parentPopupState:r,disableAutoFocus:u}));return null==a?null:a}}]),n}(s.Component);t.ZP=y,(0,d.default)(y,"propTypes",{children:v.default.func.isRequired,popupId:v.default.string,variant:v.default.oneOf(["popover","popper"]).isRequired,parentPopupState:v.default.object,disableAutoFocus:v.default.bool})}}]);