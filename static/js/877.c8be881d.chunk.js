"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[877],{44269:function(e,n,r){r.d(n,{Z:function(){return D}});var t=r(29439),o=r(98655),i=r(73428),s=r(65280),a=r(5297),l=r(83061),c=r(47313),d=r(17551),u=r(9506),h=r(1413),m=r(45987),p=r(1168),f=r(10223),x=r(83097),j=r(16132),y=r(54097),b=r(19860),v=r(17592),k=r(70499),Z=r(46417),w=["children","name"];function g(e){var n=e.children,r=e.document,t=(0,b.Z)();c.useEffect((function(){r.body.dir=t.direction}),[r,t.direction]);var o=c.useMemo((function(){return(0,x.Z)({key:"iframe-demo-".concat(t.direction),prepend:!0,container:r.head,stylisPlugins:"rtl"===t.direction?[f.Z]:[]})}),[r,t.direction]),i=c.useCallback((function(){return r.defaultView}),[r]);return(0,Z.jsx)(y.StyleSheetManager,{target:r.head,stylisPlugins:"rtl"===t.direction?[f.Z]:[],children:(0,Z.jsxs)(j.C,{value:o,children:[(0,Z.jsx)(k.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),c.cloneElement(n,{window:i})]})})}var L=(0,v.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function N(e){var n,r=e.children,o=e.name,i=(0,m.Z)(e,w),s="".concat(o," demo"),a=c.useRef(null),l=c.useReducer((function(){return!0}),!1),d=(0,t.Z)(l,2),u=d[0],f=d[1];c.useEffect((function(){var e=a.current.contentDocument;null==e||"complete"!==e.readyState||u||f()}),[u]);var x=null===(n=a.current)||void 0===n?void 0:n.contentDocument;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(L,(0,h.Z)({onLoad:f,ref:a,title:s},i)),!1!==u?p.createPortal((0,Z.jsx)(g,{document:x,children:r}),x.body):null]})}var C=c.memo(N),A=r(56993);function T(e){var n=(0,c.useState)(e.currentTabIndex),r=(0,t.Z)(n,2),h=r[0],m=r[1],p=e.component,f=e.raw,x=e.iframe,j=e.className,y=e.name;return(0,Z.jsxs)(i.Z,{className:(0,l.default)(j,"shadow"),sx:{backgroundColor:function(e){return(0,d._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,Z.jsx)(u.Z,{sx:{backgroundColor:function(e){return(0,d._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}},children:(0,Z.jsxs)(a.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:h,onChange:function(e,n){m(n)},textColor:"secondary",indicatorColor:"secondary",children:[p&&(0,Z.jsx)(s.Z,{classes:{root:"min-w-64"},icon:(0,Z.jsx)(A.Z,{children:"heroicons-outline:eye"})}),f&&(0,Z.jsx)(s.Z,{classes:{root:"min-w-64"},icon:(0,Z.jsx)(A.Z,{children:"heroicons-outline:code"})})]})}),(0,Z.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,Z.jsx)("div",{className:0===h?"flex flex-1 max-w-full":"hidden",children:p&&(x?(0,Z.jsx)(C,{name:y,children:(0,Z.jsx)(p,{})}):(0,Z.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,Z.jsx)(p,{})}))}),(0,Z.jsx)("div",{className:1===h?"flex flex-1":"hidden",children:(0,c.useMemo)((function(){return f&&1===h?(0,Z.jsx)("div",{className:"flex flex-1",children:(0,Z.jsx)(o.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:f.default})}):null}),[f,h])})]})]})}T.defaultProps={name:"",currentTabIndex:0};var D=T},36798:function(e,n,r){r.d(n,{Z:function(){return i}});r(47313);var t=r(90891),o=r(46417);function i(){return(0,o.jsx)(t.Z,{component:"button",variant:"body2",onClick:function(){console.info("I'm a button.")},children:"Button Link"})}},68335:function(e,n,r){r.d(n,{Z:function(){return a}});r(47313);var t=r(9506),o=r(90891),i=r(46417),s=function(e){return e.preventDefault()};function a(){return(0,i.jsxs)(t.Z,{sx:{typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:s,children:[(0,i.jsx)(o.Z,{href:"#",children:"Link"}),(0,i.jsx)(o.Z,{href:"#",color:"inherit",children:'color="inherit"'}),(0,i.jsx)(o.Z,{href:"#",variant:"body2",children:'variant="body2"'})]})}},66745:function(e,n,r){r.d(n,{Z:function(){return a}});r(47313);var t=r(9506),o=r(90891),i=r(46417),s=function(e){return e.preventDefault()};function a(){return(0,i.jsxs)(t.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",typography:"body1","& > :not(style) + :not(style)":{ml:2}},onClick:s,children:[(0,i.jsx)(o.Z,{href:"#",underline:"none",children:'underline="none"'}),(0,i.jsx)(o.Z,{href:"#",underline:"hover",children:'underline="hover"'}),(0,i.jsx)(o.Z,{href:"#",underline:"always",children:'underline="always"'})]})}},60877:function(e,n,r){r.r(n);var t=r(44269),o=r(56993),i=r(24193),s=r(61113),a=r(46417);n.default=function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,a.jsx)(i.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/links",target:"_blank",role:"button",startIcon:(0,a.jsx)(o.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,a.jsx)(s.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Links"}),(0,a.jsx)(s.Z,{className:"description",children:"The Link component allows you to easily customize anchor elements with your theme colors and typography styles."}),(0,a.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic links"}),(0,a.jsxs)(s.Z,{className:"mb-40",component:"div",children:["The Link component is built on top of the"," ",(0,a.jsx)("a",{href:"/material-ui/api/typography/",children:"Typography"})," component, meaning that you can use its props."]}),(0,a.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(t.Z,{name:"Links.js",className:"my-24",iframe:!1,component:r(68335).Z,raw:r(13737)})}),(0,a.jsx)(s.Z,{className:"mb-40",component:"div",children:"However, the Link component has some different default props than the Typography component:"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:'color="primary"'})," as the link needs to stand out."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:'variant="inherit"'})," as the link will, most of the time, be used as a child of a Typography component."]})]}),(0,a.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Underline"}),(0,a.jsxs)(s.Z,{className:"mb-40",component:"div",children:["The ",(0,a.jsx)("code",{children:"underline"})," prop can be used to set the underline behavior. The default is"," ",(0,a.jsx)("code",{children:"always"}),"."]}),(0,a.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(t.Z,{name:"UnderlineLink.js",className:"my-24",iframe:!1,component:r(66745).Z,raw:r(31501)})}),(0,a.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Security"}),(0,a.jsxs)(s.Z,{className:"mb-40",component:"div",children:["When you use ",(0,a.jsx)("code",{children:'target="_blank"'})," with Links, it is"," ",(0,a.jsx)("a",{href:"https://developers.google.com/web/tools/lighthouse/audits/noopener",children:"recommended"})," ","to always set ",(0,a.jsx)("code",{children:'rel="noopener"'})," or ",(0,a.jsx)("code",{children:'rel="noreferrer"'})," when linking to third party content."]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:'rel="noopener"'})," prevents the new page from being able to access the"," ",(0,a.jsx)("code",{children:"window.opener"})," property and ensures it runs in a separate process. Without this, the target page can potentially redirect your page to a malicious URL."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:'rel="noreferrer"'})," has the same effect, but also prevents the"," ",(0,a.jsx)("em",{children:"Referer"})," header from being sent to the new page. \u26a0\ufe0f Removing the referrer header will affect analytics."]})]}),(0,a.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Third-party routing library"}),(0,a.jsxs)(s.Z,{className:"mb-40",component:"div",children:["One frequent use case is to perform navigation on the client only, without an HTTP round-trip to the server. The ",(0,a.jsx)("code",{children:"Link"})," component provides the"," ",(0,a.jsx)("code",{children:"component"})," prop to handle this use case. Here is a"," ",(0,a.jsx)("a",{href:"/material-ui/guides/routing/#link",children:"more detailed guide"}),"."]}),(0,a.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),(0,a.jsxs)(s.Z,{className:"mb-40",component:"div",children:["(WAI-ARIA:"," ",(0,a.jsx)("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/link/",children:"https://www.w3.org/WAI/ARIA/apg/patterns/link/"}),")"]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:['When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use'," ",(0,a.jsx)("a",{href:"https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text",children:"specific descriptions"}),"."]}),(0,a.jsxs)("li",{children:["For the best user experience, links should stand out from the text on the page. For instance, you can keep the default ",(0,a.jsx)("code",{children:'underline="always"'})," behavior."]}),(0,a.jsxs)("li",{children:["If a link doesn't have a meaningful href,"," ",(0,a.jsxs)("a",{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md",children:["it should be rendered using a ",(0,a.jsx)("code",{children:"<button>"})," element"]}),". The demo below illustrates how to properly link with a ",(0,a.jsx)("code",{children:"<button>"}),":"]})]}),(0,a.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(t.Z,{name:"ButtonLink.js",className:"my-24",iframe:!1,component:r(36798).Z,raw:r(67169)})}),(0,a.jsx)(s.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Keyboard accessibility"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["Interactive elements should receive focus in a coherent order when the user presses the"," ",(0,a.jsx)("kbd",{className:"key",children:"Tab"})," key."]}),(0,a.jsxs)("li",{children:["Users should be able to open a link by pressing ",(0,a.jsx)("kbd",{className:"key",children:"Enter"}),"."]})]}),(0,a.jsx)(s.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Screen reader accessibility"}),(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:["When a link receives focus, screen readers should announce a descriptive link name. If the link opens in a new window or browser tab, add an"," ",(0,a.jsx)("a",{href:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8",children:(0,a.jsx)("code",{children:"aria-label"})})," ","to inform screen reader users\u2014for example,"," ",(0,a.jsx)("em",{children:'"To learn more, visit the About page which opens in a new window."'})]})})]})}},90891:function(e,n,r){r.d(n,{Z:function(){return A}});var t=r(93433),o=r(29439),i=r(4942),s=r(63366),a=r(87462),l=r(47313),c=r(83061),d=r(21921),u=r(91615),h=r(17592),m=r(77342),p=r(47037),f=r(86983),x=r(61113),j=r(77430),y=r(32298);function b(e){return(0,y.Z)("MuiLink",e)}var v=(0,j.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),k=r(46428),Z=r(17551),w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},g=function(e){var n=e.theme,r=e.ownerState,t=function(e){return w[e]||e}(r.color),o=(0,k.DW)(n,"palette.".concat(t),!1)||r.color,i=(0,k.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,Z.Fq)(o,.4)},L=r(46417),N=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,h.ZP)(x.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,u.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,a.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,a.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:g({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(v.focusVisible),{outline:"auto"}))})),A=l.forwardRef((function(e,n){var r=(0,m.Z)({props:e,name:"MuiLink"}),i=r.className,h=r.color,x=void 0===h?"primary":h,j=r.component,y=void 0===j?"a":j,v=r.onBlur,k=r.onFocus,Z=r.TypographyClasses,g=r.underline,A=void 0===g?"always":g,T=r.variant,D=void 0===T?"inherit":T,R=r.sx,B=(0,s.Z)(r,N),I=(0,p.Z)(),S=I.isFocusVisibleRef,W=I.onBlur,F=I.onFocus,M=I.ref,P=l.useState(!1),_=(0,o.Z)(P,2),V=_[0],H=_[1],E=(0,f.Z)(n,M),U=(0,a.Z)({},r,{color:x,component:y,focusVisible:V,underline:A,variant:D}),z=function(e){var n=e.classes,r=e.component,t=e.focusVisible,o=e.underline,i={root:["root","underline".concat((0,u.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,d.Z)(i,b,n)}(U);return(0,L.jsx)(C,(0,a.Z)({color:x,className:(0,c.default)(z.root,i),classes:Z,component:y,onBlur:function(e){W(e),!1===S.current&&H(!1),v&&v(e)},onFocus:function(e){F(e),!0===S.current&&H(!0),k&&k(e)},ref:E,ownerState:U,variant:D,sx:[].concat((0,t.Z)(Object.keys(w).includes(x)?[]:[{color:x}]),(0,t.Z)(Array.isArray(R)?R:[R]))},B))}))},67169:function(e,n,r){r.r(n),n.default='/* eslint-disable jsx-a11y/anchor-is-valid */\nimport * as React from \'react\';\nimport Link from \'@mui/material/Link\';\n\nexport default function ButtonLink() {\n  return (\n    <Link\n      component="button"\n      variant="body2"\n      onClick={() => {\n        console.info("I\'m a button.");\n      }}\n    >\n      Button Link\n    </Link>\n  );\n}\n'},13737:function(e,n,r){r.r(n),n.default="/* eslint-disable jsx-a11y/anchor-is-valid */\nimport * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Link from '@mui/material/Link';\n\nconst preventDefault = (event) => event.preventDefault();\n\nexport default function Links() {\n  return (\n    <Box\n      sx={{\n        typography: 'body1',\n        '& > :not(style) + :not(style)': {\n          ml: 2,\n        },\n      }}\n      onClick={preventDefault}\n    >\n      <Link href=\"#\">Link</Link>\n      <Link href=\"#\" color=\"inherit\">\n        {'color=\"inherit\"'}\n      </Link>\n      <Link href=\"#\" variant=\"body2\">\n        {'variant=\"body2\"'}\n      </Link>\n    </Box>\n  );\n}\n"},31501:function(e,n,r){r.r(n),n.default="/* eslint-disable jsx-a11y/anchor-is-valid */\nimport * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Link from '@mui/material/Link';\n\nconst preventDefault = (event) => event.preventDefault();\n\nexport default function UnderlineLink() {\n  return (\n    <Box\n      sx={{\n        display: 'flex',\n        flexWrap: 'wrap',\n        justifyContent: 'center',\n        typography: 'body1',\n        '& > :not(style) + :not(style)': {\n          ml: 2,\n        },\n      }}\n      onClick={preventDefault}\n    >\n      <Link href=\"#\" underline=\"none\">\n        {'underline=\"none\"'}\n      </Link>\n      <Link href=\"#\" underline=\"hover\">\n        {'underline=\"hover\"'}\n      </Link>\n      <Link href=\"#\" underline=\"always\">\n        {'underline=\"always\"'}\n      </Link>\n    </Box>\n  );\n}\n"}}]);