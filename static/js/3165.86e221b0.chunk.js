"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[3165],{44269:function(e,n,t){t.d(n,{Z:function(){return M}});var o=t(29439),r=t(98655),s=t(73428),a=t(65280),c=t(5297),i=t(83061),l=t(47313),d=t(17551),m=t(9506),u=t(1413),h=t(45987),x=t(1168),p=t(10223),f=t(83097),j=t(16132),y=t(54097),b=t(19860),g=t(17592),v=t(70499),Z=t(46417),w=["children","name"];function B(e){var n=e.children,t=e.document,o=(0,b.Z)();l.useEffect((function(){t.body.dir=o.direction}),[t,o.direction]);var r=l.useMemo((function(){return(0,f.Z)({key:"iframe-demo-".concat(o.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===o.direction?[p.Z]:[]})}),[t,o.direction]),s=l.useCallback((function(){return t.defaultView}),[t]);return(0,Z.jsx)(y.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===o.direction?[p.Z]:[],children:(0,Z.jsxs)(j.C,{value:r,children:[(0,Z.jsx)(v.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),l.cloneElement(n,{window:s})]})})}var N=(0,g.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function k(e){var n,t=e.children,r=e.name,s=(0,h.Z)(e,w),a="".concat(r," demo"),c=l.useRef(null),i=l.useReducer((function(){return!0}),!1),d=(0,o.Z)(i,2),m=d[0],p=d[1];l.useEffect((function(){var e=c.current.contentDocument;null==e||"complete"!==e.readyState||m||p()}),[m]);var f=null===(n=c.current)||void 0===n?void 0:n.contentDocument;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(N,(0,u.Z)({onLoad:p,ref:c,title:a},s)),!1!==m?x.createPortal((0,Z.jsx)(B,{document:f,children:t}),f.body):null]})}var S=l.memo(k),C=t(56993);function T(e){var n=(0,l.useState)(e.currentTabIndex),t=(0,o.Z)(n,2),u=t[0],h=t[1],x=e.component,p=e.raw,f=e.iframe,j=e.className,y=e.name;return(0,Z.jsxs)(s.Z,{className:(0,i.default)(j,"shadow"),sx:{backgroundColor:function(e){return(0,d._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,Z.jsx)(m.Z,{sx:{backgroundColor:function(e){return(0,d._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}},children:(0,Z.jsxs)(c.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,n){h(n)},textColor:"secondary",indicatorColor:"secondary",children:[x&&(0,Z.jsx)(a.Z,{classes:{root:"min-w-64"},icon:(0,Z.jsx)(C.Z,{children:"heroicons-outline:eye"})}),p&&(0,Z.jsx)(a.Z,{classes:{root:"min-w-64"},icon:(0,Z.jsx)(C.Z,{children:"heroicons-outline:code"})})]})}),(0,Z.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,Z.jsx)("div",{className:0===u?"flex flex-1 max-w-full":"hidden",children:x&&(f?(0,Z.jsx)(S,{name:y,children:(0,Z.jsx)(x,{})}):(0,Z.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,Z.jsx)(x,{})}))}),(0,Z.jsx)("div",{className:1===u?"flex flex-1":"hidden",children:(0,l.useMemo)((function(){return p&&1===u?(0,Z.jsx)("div",{className:"flex flex-1",children:(0,Z.jsx)(r.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:p.default})}):null}),[p,u])})]})]})}T.defaultProps={name:"",currentTabIndex:0};var M=T},71113:function(e,n,t){t.d(n,{Z:function(){return a}});t(47313);var o=t(9506),r=t(24193),s=t(46417);function a(){return(0,s.jsx)(o.Z,{component:"span",sx:{p:2,border:"1px dashed grey"},children:(0,s.jsx)(r.Z,{children:"Save"})})}},64643:function(e,n,t){t.d(n,{Z:function(){return s}});t(47313);var o=t(9506),r=t(46417);function s(){return(0,r.jsx)(o.Z,{sx:{width:300,height:300,backgroundColor:"primary.dark","&:hover":{backgroundColor:"primary.main",opacity:[.9,.8,.7]}}})}},63165:function(e,n,t){t.r(n);var o=t(44269),r=t(98655),s=t(56993),a=t(24193),c=t(61113),i=t(46417);n.default=function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,i.jsx)(a.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/box",target:"_blank",role:"button",startIcon:(0,i.jsx)(s.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,i.jsx)(c.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Box"}),(0,i.jsx)(c.Z,{className:"description",children:"The Box component serves as a wrapper component for most of the CSS utility needs."}),(0,i.jsxs)(c.Z,{className:"mb-40",component:"div",children:["The Box component packages ",(0,i.jsx)("a",{href:"/system/properties/",children:"all the style functions"})," that are exposed in ",(0,i.jsx)("code",{children:"@mui/system"}),"."]}),(0,i.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Example"}),(0,i.jsxs)(c.Z,{className:"mb-40",component:"div",children:[(0,i.jsx)("a",{href:"/system/palette/",children:"The palette"})," style function."]}),(0,i.jsxs)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:["The ",(0,i.jsx)("code",{children:"sx"})," prop"]}),(0,i.jsxs)(c.Z,{className:"mb-40",component:"div",children:["All system properties are available via the"," ",(0,i.jsxs)("a",{href:"/system/getting-started/the-sx-prop/",children:[(0,i.jsx)("code",{children:"sx"})," prop"]}),". In addition, the ",(0,i.jsx)("code",{children:"sx"})," prop allows you to specify any other CSS rules you may need. Here's an example of how you can use it:"]}),(0,i.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,i.jsx)(o.Z,{name:"BoxSx.js",className:"my-24",iframe:!1,component:t(64643).Z,raw:t(82070)})}),(0,i.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Overriding MUI components"}),(0,i.jsxs)(c.Z,{className:"mb-40",component:"div",children:["The Box component wraps your component. It creates a new DOM element, a"," ",(0,i.jsx)("code",{children:"<div>"})," that by default can be changed with the ",(0,i.jsx)("code",{children:"component"})," prop. Let's say you want to use a ",(0,i.jsx)("code",{children:"<span>"})," instead:"]}),(0,i.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,i.jsx)(o.Z,{name:"BoxComponent.js",className:"my-24",iframe:!1,component:t(71113).Z,raw:t(90338)})}),(0,i.jsx)(c.Z,{className:"mb-40",component:"div",children:"This works great when the changes can be isolated to a new DOM element. For instance, you can change the margin this way."}),(0,i.jsxs)(c.Z,{className:"mb-40",component:"div",children:["However, sometimes you have to target the underlying DOM element. As an example, you may want to change the border of the Button. The Button component defines its own styles. CSS inheritance doesn't help. To workaround the problem, you can use the"," ",(0,i.jsx)("a",{href:"/system/getting-started/the-sx-prop/",children:(0,i.jsx)("code",{children:"sx"})})," ","prop directly on the child if it is a MUI component."]}),(0,i.jsx)(r.Z,{component:"pre",className:"language-diff",children:" \n-<Box sx={{ border: '1px dashed grey' }}>\n-  <Button>Save</Button>\n-</Box>\n+<Button sx={{ border: '1px dashed grey' }}>Save</Button>\n"}),(0,i.jsxs)(c.Z,{className:"mb-40",component:"div",children:["For non-MUI components, use the ",(0,i.jsx)("code",{children:"component"})," prop."]}),(0,i.jsx)(r.Z,{component:"pre",className:"language-diff",children:" \n-<Box sx={{ border: '1px dashed grey' }}>\n-  <button>Save</button>\n-</Box>\n+<Box component=\"button\" sx={{ border: '1px dashed grey' }}>Save</Box>\n"}),(0,i.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"System props"}),(0,i.jsxs)(c.Z,{className:"mb-40",component:"div",children:["As a CSS utility component, the ",(0,i.jsx)("code",{children:"Box"})," also supports all"," ",(0,i.jsx)("a",{href:"/system/properties/",children:(0,i.jsx)("code",{children:"system"})})," ","properties. You can use them as prop directly on the component. For instance, a margin-top:"]}),(0,i.jsx)(r.Z,{component:"pre",className:"language-jsx",children:" \n<Box mt={2}>\n"})]})}},90338:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Button from '@mui/material/Button';\n\nexport default function BoxComponent() {\n  return (\n    <Box component=\"span\" sx={{ p: 2, border: '1px dashed grey' }}>\n      <Button>Save</Button>\n    </Box>\n  );\n}\n"},82070:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\n\nexport default function BoxSx() {\n  return (\n    <Box\n      sx={{\n        width: 300,\n        height: 300,\n        backgroundColor: 'primary.dark',\n        '&:hover': {\n          backgroundColor: 'primary.main',\n          opacity: [0.9, 0.8, 0.7],\n        },\n      }}\n    />\n  );\n}\n"}}]);