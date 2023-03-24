"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[2475],{44269:function(n,e,t){t.d(e,{Z:function(){return T}});var a=t(29439),o=t(98655),i=t(73428),r=t(65280),c=t(5297),s=t(83061),l=t(47313),u=t(17551),d=t(9506),m=t(1413),p=t(45987),g=t(1168),f=t(10223),h=t(83097),x=t(16132),Z=t(54097),v=t(19860),j=t(17592),b=t(70499),P=t(46417),y=["children","name"];function k(n){var e=n.children,t=n.document,a=(0,v.Z)();l.useEffect((function(){t.body.dir=a.direction}),[t,a.direction]);var o=l.useMemo((function(){return(0,h.Z)({key:"iframe-demo-".concat(a.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===a.direction?[f.Z]:[]})}),[t,a.direction]),i=l.useCallback((function(){return t.defaultView}),[t]);return(0,P.jsx)(Z.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===a.direction?[f.Z]:[],children:(0,P.jsxs)(x.C,{value:o,children:[(0,P.jsx)(b.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),l.cloneElement(e,{window:i})]})})}var w=(0,j.ZP)("iframe")((function(n){var e=n.theme;return{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:e.shadows[1]}}));function N(n){var e,t=n.children,o=n.name,i=(0,p.Z)(n,y),r="".concat(o," demo"),c=l.useRef(null),s=l.useReducer((function(){return!0}),!1),u=(0,a.Z)(s,2),d=u[0],f=u[1];l.useEffect((function(){var n=c.current.contentDocument;null==n||"complete"!==n.readyState||d||f()}),[d]);var h=null===(e=c.current)||void 0===e?void 0:e.contentDocument;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,(0,m.Z)({onLoad:f,ref:c,title:r},i)),!1!==d?g.createPortal((0,P.jsx)(k,{document:h,children:t}),h.body):null]})}var S=l.memo(N),C=t(56993);function R(n){var e=(0,l.useState)(n.currentTabIndex),t=(0,a.Z)(e,2),m=t[0],p=t[1],g=n.component,f=n.raw,h=n.iframe,x=n.className,Z=n.name;return(0,P.jsxs)(i.Z,{className:(0,s.default)(x,"shadow"),sx:{backgroundColor:function(n){return(0,u._j)(n.palette.background.paper,"light"===n.palette.mode?.01:.1)}},children:[(0,P.jsx)(d.Z,{sx:{backgroundColor:function(n){return(0,u._j)(n.palette.background.paper,"light"===n.palette.mode?.02:.2)}},children:(0,P.jsxs)(c.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(n,e){p(e)},textColor:"secondary",indicatorColor:"secondary",children:[g&&(0,P.jsx)(r.Z,{classes:{root:"min-w-64"},icon:(0,P.jsx)(C.Z,{children:"heroicons-outline:eye"})}),f&&(0,P.jsx)(r.Z,{classes:{root:"min-w-64"},icon:(0,P.jsx)(C.Z,{children:"heroicons-outline:code"})})]})}),(0,P.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,P.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:g&&(h?(0,P.jsx)(S,{name:Z,children:(0,P.jsx)(g,{})}):(0,P.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,P.jsx)(g,{})}))}),(0,P.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:(0,l.useMemo)((function(){return f&&1===m?(0,P.jsx)("div",{className:"flex flex-1",children:(0,P.jsx)(o.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:f.default})}):null}),[f,m])})]})]})}R.defaultProps={name:"",currentTabIndex:0};var T=R},54057:function(n,e,t){t.d(e,{Z:function(){return r}});t(47313);var a=t(14532),o=t(35898),i=t(46417);function r(){return(0,i.jsxs)(o.Z,{spacing:2,children:[(0,i.jsx)(a.Z,{count:10}),(0,i.jsx)(a.Z,{count:10,color:"primary"}),(0,i.jsx)(a.Z,{count:10,color:"secondary"}),(0,i.jsx)(a.Z,{count:10,disabled:!0})]})}},77232:function(n,e,t){t.d(e,{Z:function(){return u}});var a=t(1413),o=(t(47313),t(14532)),i=t(78376),r=t(35898),c=t(14647),s=t(14e3),l=t(46417);function u(){return(0,l.jsx)(r.Z,{spacing:2,children:(0,l.jsx)(o.Z,{count:10,renderItem:function(n){return(0,l.jsx)(i.Z,(0,a.Z)({slots:{previous:c.Z,next:s.Z}},n))}})})}},68541:function(n,e,t){t.d(e,{Z:function(){return r}});t(47313);var a=t(14532),o=t(35898),i=t(46417);function r(){return(0,i.jsxs)(o.Z,{spacing:2,children:[(0,i.jsx)(a.Z,{count:10,showFirstButton:!0,showLastButton:!0}),(0,i.jsx)(a.Z,{count:10,hidePrevButton:!0,hideNextButton:!0})]})}},50167:function(n,e,t){t.d(e,{Z:function(){return l}});var a=t(29439),o=t(47313),i=t(61113),r=t(14532),c=t(35898),s=t(46417);function l(){var n=o.useState(1),e=(0,a.Z)(n,2),t=e[0],l=e[1];return(0,s.jsxs)(c.Z,{spacing:2,children:[(0,s.jsxs)(i.Z,{children:["Page: ",t]}),(0,s.jsx)(r.Z,{count:10,page:t,onChange:function(n,e){l(e)}})]})}},19352:function(n,e,t){t.d(e,{Z:function(){return r}});t(47313);var a=t(14532),o=t(35898),i=t(46417);function r(){return(0,i.jsxs)(o.Z,{spacing:2,children:[(0,i.jsx)(a.Z,{count:10,variant:"outlined"}),(0,i.jsx)(a.Z,{count:10,variant:"outlined",color:"primary"}),(0,i.jsx)(a.Z,{count:10,variant:"outlined",color:"secondary"}),(0,i.jsx)(a.Z,{count:10,variant:"outlined",disabled:!0})]})}},66342:function(n,e,t){t.d(e,{Z:function(){return r}});t(47313);var a=t(14532),o=t(35898),i=t(46417);function r(){return(0,i.jsxs)(o.Z,{spacing:2,children:[(0,i.jsx)(a.Z,{count:11,defaultPage:6,siblingCount:0}),(0,i.jsx)(a.Z,{count:11,defaultPage:6})," ",(0,i.jsx)(a.Z,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),(0,i.jsx)(a.Z,{count:11,defaultPage:6,boundaryCount:2})]})}},75845:function(n,e,t){t.d(e,{Z:function(){return r}});t(47313);var a=t(14532),o=t(35898),i=t(46417);function r(){return(0,i.jsxs)(o.Z,{spacing:2,children:[(0,i.jsx)(a.Z,{count:10,shape:"rounded"}),(0,i.jsx)(a.Z,{count:10,variant:"outlined",shape:"rounded"})]})}},87231:function(n,e,t){t.d(e,{Z:function(){return r}});t(47313);var a=t(14532),o=t(35898),i=t(46417);function r(){return(0,i.jsxs)(o.Z,{spacing:2,children:[(0,i.jsx)(a.Z,{count:10,size:"small"}),(0,i.jsx)(a.Z,{count:10}),(0,i.jsx)(a.Z,{count:10,size:"large"})]})}},21962:function(n,e,t){t.d(e,{Z:function(){return c}});var a=t(29439),o=t(47313),i=t(41493),r=t(46417);function c(){var n=o.useState(2),e=(0,a.Z)(n,2),t=e[0],c=e[1],s=o.useState(10),l=(0,a.Z)(s,2),u=l[0],d=l[1];return(0,r.jsx)(i.Z,{component:"div",count:100,page:t,onPageChange:function(n,e){c(e)},rowsPerPage:u,onRowsPerPageChange:function(n){d(parseInt(n.target.value,10)),c(0)}})}},63308:function(n,e,t){t.d(e,{Z:function(){return u}});var a=t(1413),o=t(45987),i=(t(47313),t(92695)),r=t(17592),c=t(46417),s=["page","type","selected"],l=(0,r.ZP)("ul")({listStyle:"none",padding:0,margin:0,display:"flex"});function u(){var n=(0,i.Z)({count:10}).items;return(0,c.jsx)("nav",{children:(0,c.jsx)(l,{children:n.map((function(n,e){var t=n.page,i=n.type,r=n.selected,l=(0,o.Z)(n,s),u=null;return u="start-ellipsis"===i||"end-ellipsis"===i?"\u2026":"page"===i?(0,c.jsx)("button",(0,a.Z)((0,a.Z)({type:"button",style:{fontWeight:r?"bold":void 0}},l),{},{children:t})):(0,c.jsx)("button",(0,a.Z)((0,a.Z)({type:"button"},l),{},{children:i})),(0,c.jsx)("li",{children:u},e)}))})})}},44970:function(n,e,t){t.r(e);var a=t(44269),o=t(98655),i=t(56993),r=t(24193),c=t(61113),s=t(46417);e.default=function(n){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,s.jsx)(r.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/pagination",target:"_blank",role:"button",startIcon:(0,s.jsx)(i.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,s.jsx)(c.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Pagination"}),(0,s.jsx)(c.Z,{className:"description",children:"The Pagination component enables the user to select a specific page from a range of pages."}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic pagination"}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"BasicPagination.js",className:"my-24",iframe:!1,component:t(54057).Z,raw:t(77220)})}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Outlined pagination"}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"PaginationOutlined.js",className:"my-24",iframe:!1,component:t(19352).Z,raw:t(33137)})}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Rounded pagination"}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"PaginationRounded.js",className:"my-24",iframe:!1,component:t(75845).Z,raw:t(1607)})}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Pagination size"}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"PaginationSize.js",className:"my-24",iframe:!1,component:t(87231).Z,raw:t(5443)})}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Buttons"}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:"You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons."}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"PaginationButtons.js",className:"my-24",iframe:!1,component:t(68541).Z,raw:t(77259)})}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Custom icons"}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:"It's possible to customize the control icons."}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"CustomIcons.js",className:"my-24",iframe:!1,component:t(77232).Z,raw:t(32683)})}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Pagination ranges"}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:["You can specify how many digits to display either side of current page with the"," ",(0,s.jsx)("code",{children:"siblingRange"})," prop, and adjacent to the start and end page number with the"," ",(0,s.jsx)("code",{children:"boundaryRange"})," prop."]}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"PaginationRanges.js",className:"my-24",iframe:!1,component:t(66342).Z,raw:t(71822)})}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Controlled pagination"}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"PaginationControlled.js",className:"my-24",iframe:!1,component:t(50167).Z,raw:t(95881)})}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:(0,s.jsx)("code",{children:"usePagination"})}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:["For advanced customization use cases, a headless ",(0,s.jsx)("code",{children:"usePagination()"})," hook is exposed. It accepts almost the same options as the Pagination component minus all the props related to the rendering of JSX. The Pagination component is built on this hook."]}),(0,s.jsx)(o.Z,{component:"pre",className:"language-jsx",children:" \nimport usePagination from '@mui/material/usePagination';\n"}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"UsePagination.js",className:"my-24",iframe:!1,component:t(63308).Z,raw:t(68265)})}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Table pagination"}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:["The ",(0,s.jsx)("code",{children:"Pagination"})," component was designed to paginate a list of arbitrary items when infinite loading isn't used. It's preferred in contexts where SEO is important, for instance, a blog."]}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:["For the pagination of a large set of tabular data, you should use the"," ",(0,s.jsx)("code",{children:"TablePagination"})," component."]}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(a.Z,{name:"TablePagination.js",className:"my-24",iframe:!1,component:t(21962).Z,raw:t(79198)})}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:[":::warning Note that the ",(0,s.jsx)("code",{children:"Pagination"})," page prop starts at 1 to match the requirement of including the value in the URL, while the ",(0,s.jsx)("code",{children:"TablePagination"})," page prop starts at 0 to match the requirement of zero-based JavaScript arrays that comes with rendering a lot of tabular data. :::"]}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:["You can learn more about this use case in the"," ",(0,s.jsx)("a",{href:"/material-ui/react-table/#custom-pagination-options",children:"table section"})," of the documentation."]}),(0,s.jsx)(c.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),(0,s.jsx)(c.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),(0,s.jsxs)(c.Z,{className:"mb-40",component:"div",children:['The root node has a role of "navigation" and aria-label "pagination navigation" by default. The page items have an aria-label that identifies the purpose of the item ("go to first page", "go to previous page", "go to page 1" etc.). You can override these using the ',(0,s.jsx)("code",{children:"getItemAriaLabel"})," prop."]}),(0,s.jsx)(c.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),(0,s.jsx)(c.Z,{className:"mb-40",component:"div",children:'The pagination items are in tab order, with a tabindex of "0".'})]})}},14647:function(n,e,t){var a=t(64836);e.Z=void 0;var o=a(t(45045)),i=t(46417),r=(0,o.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");e.Z=r},14e3:function(n,e,t){var a=t(64836);e.Z=void 0;var o=a(t(45045)),i=t(46417),r=(0,o.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.Z=r},35898:function(n,e,t){var a=t(4942),o=t(63366),i=t(87462),r=t(47313),c=t(54929),s=t(86886),l=t(39028),u=t(13019),d=t(17592),m=t(77342),p=t(46417),g=["component","direction","spacing","divider","children"];function f(n,e){var t=r.Children.toArray(n).filter(Boolean);return t.reduce((function(n,a,o){return n.push(a),o<t.length-1&&n.push(r.cloneElement(e,{key:"separator-".concat(o)})),n}),[])}var h=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(n,e){return[e.root]}})((function(n){var e=n.ownerState,t=n.theme,o=(0,i.Z)({display:"flex",flexDirection:"column"},(0,c.k9)({theme:t},(0,c.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(function(n){return{flexDirection:n}})));if(e.spacing){var r=(0,s.hB)(t),l=Object.keys(t.breakpoints.values).reduce((function(n,t){return("object"===typeof e.spacing&&null!=e.spacing[t]||"object"===typeof e.direction&&null!=e.direction[t])&&(n[t]=!0),n}),{}),d=(0,c.P$)({values:e.direction,base:l}),m=(0,c.P$)({values:e.spacing,base:l});"object"===typeof d&&Object.keys(d).forEach((function(n,e,t){if(!d[n]){var a=e>0?d[t[e-1]]:"column";d[n]=a}}));o=(0,u.Z)(o,(0,c.k9)({theme:t},m,(function(n,t){return{"& > :not(style) + :not(style)":(0,a.Z)({margin:0},"margin".concat((o=t?d[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,s.NA)(r,n))};var o})))}return o=(0,c.dt)(t.breakpoints,o)})),x=r.forwardRef((function(n,e){var t=(0,m.Z)({props:n,name:"MuiStack"}),a=(0,l.Z)(t),r=a.component,c=void 0===r?"div":r,s=a.direction,u=void 0===s?"column":s,d=a.spacing,x=void 0===d?0:d,Z=a.divider,v=a.children,j=(0,o.Z)(a,g),b={direction:u,spacing:x};return(0,p.jsx)(h,(0,i.Z)({as:c,ownerState:b,ref:e},j,{children:Z?f(v,Z):v}))}));e.Z=x},70941:function(n,e,t){var a=t(4942),o=t(63366),i=t(87462),r=t(47313),c=t(83061),s=t(21921),l=t(17551),u=t(91615),d=t(27416),m=t(56062),p=t(77342),g=t(17592),f=t(19438),h=t(46417),x=["align","className","component","padding","scope","size","sortDirection","variant"],Z=(0,g.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e[t.variant],e["size".concat((0,u.Z)(t.size))],"normal"!==t.padding&&e["padding".concat((0,u.Z)(t.padding))],"inherit"!==t.align&&e["align".concat((0,u.Z)(t.align))],t.stickyHeader&&e.stickyHeader]}})((function(n){var e=n.theme,t=n.ownerState;return(0,i.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?"1px solid ".concat(e.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===e.palette.mode?(0,l.$n)((0,l.Fq)(e.palette.divider,1),.88):(0,l._j)((0,l.Fq)(e.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&(0,a.Z)({padding:"6px 16px"},"&.".concat(f.Z.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})})),v=r.forwardRef((function(n,e){var t,a=(0,p.Z)({props:n,name:"MuiTableCell"}),l=a.align,g=void 0===l?"inherit":l,v=a.className,j=a.component,b=a.padding,P=a.scope,y=a.size,k=a.sortDirection,w=a.variant,N=(0,o.Z)(a,x),S=r.useContext(d.Z),C=r.useContext(m.Z),R=C&&"head"===C.variant;t=j||(R?"th":"td");var T=P;!T&&R&&(T="col");var z=w||C&&C.variant,B=(0,i.Z)({},a,{align:g,component:t,padding:b||(S&&S.padding?S.padding:"normal"),size:y||(S&&S.size?S.size:"medium"),sortDirection:k,stickyHeader:"head"===z&&S&&S.stickyHeader,variant:z}),I=function(n){var e=n.classes,t=n.variant,a=n.align,o=n.padding,i=n.size,r={root:["root",t,n.stickyHeader&&"stickyHeader","inherit"!==a&&"align".concat((0,u.Z)(a)),"normal"!==o&&"padding".concat((0,u.Z)(o)),"size".concat((0,u.Z)(i))]};return(0,s.Z)(r,f.U,e)}(B),A=null;return k&&(A="asc"===k?"ascending":"descending"),(0,h.jsx)(Z,(0,i.Z)({as:t,ref:e,className:(0,c.default)(I.root,v),"aria-sort":A,scope:T,ownerState:B},N))}));e.Z=v},19438:function(n,e,t){t.d(e,{U:function(){return i}});var a=t(77430),o=t(32298);function i(n){return(0,o.Z)("MuiTableCell",n)}var r=(0,a.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);e.Z=r},27416:function(n,e,t){var a=t(47313).createContext();e.Z=a},56062:function(n,e,t){var a=t(47313).createContext();e.Z=a},77220:function(n,e,t){t.r(e),e.default="import * as React from 'react';\nimport Pagination from '@mui/material/Pagination';\nimport Stack from '@mui/material/Stack';\n\nexport default function BasicPagination() {\n  return (\n    <Stack spacing={2}>\n      <Pagination count={10} />\n      <Pagination count={10} color=\"primary\" />\n      <Pagination count={10} color=\"secondary\" />\n      <Pagination count={10} disabled />\n    </Stack>\n  );\n}\n"},32683:function(n,e,t){t.r(e),e.default="import * as React from 'react';\nimport Pagination from '@mui/material/Pagination';\nimport PaginationItem from '@mui/material/PaginationItem';\nimport Stack from '@mui/material/Stack';\nimport ArrowBackIcon from '@mui/icons-material/ArrowBack';\nimport ArrowForwardIcon from '@mui/icons-material/ArrowForward';\n\nexport default function CustomIcons() {\n  return (\n    <Stack spacing={2}>\n      <Pagination\n        count={10}\n        renderItem={(item) => (\n          <PaginationItem\n            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}\n            {...item}\n          />\n        )}\n      />\n    </Stack>\n  );\n}\n"},77259:function(n,e,t){t.r(e),e.default="import * as React from 'react';\nimport Pagination from '@mui/material/Pagination';\nimport Stack from '@mui/material/Stack';\n\nexport default function PaginationButtons() {\n  return (\n    <Stack spacing={2}>\n      <Pagination count={10} showFirstButton showLastButton />\n      <Pagination count={10} hidePrevButton hideNextButton />\n    </Stack>\n  );\n}\n"},95881:function(n,e,t){t.r(e),e.default="import * as React from 'react';\nimport Typography from '@mui/material/Typography';\nimport Pagination from '@mui/material/Pagination';\nimport Stack from '@mui/material/Stack';\n\nexport default function PaginationControlled() {\n  const [page, setPage] = React.useState(1);\n  const handleChange = (event, value) => {\n    setPage(value);\n  };\n\n  return (\n    <Stack spacing={2}>\n      <Typography>Page: {page}</Typography>\n      <Pagination count={10} page={page} onChange={handleChange} />\n    </Stack>\n  );\n}\n"},33137:function(n,e,t){t.r(e),e.default='import * as React from \'react\';\nimport Pagination from \'@mui/material/Pagination\';\nimport Stack from \'@mui/material/Stack\';\n\nexport default function PaginationOutlined() {\n  return (\n    <Stack spacing={2}>\n      <Pagination count={10} variant="outlined" />\n      <Pagination count={10} variant="outlined" color="primary" />\n      <Pagination count={10} variant="outlined" color="secondary" />\n      <Pagination count={10} variant="outlined" disabled />\n    </Stack>\n  );\n}\n'},71822:function(n,e,t){t.r(e),e.default="import * as React from 'react';\nimport Pagination from '@mui/material/Pagination';\nimport Stack from '@mui/material/Stack';\n\nexport default function PaginationRanges() {\n  return (\n    <Stack spacing={2}>\n      <Pagination count={11} defaultPage={6} siblingCount={0} />\n      <Pagination count={11} defaultPage={6} /> {/* Default ranges */}\n      <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />\n      <Pagination count={11} defaultPage={6} boundaryCount={2} />\n    </Stack>\n  );\n}\n"},1607:function(n,e,t){t.r(e),e.default="import * as React from 'react';\nimport Pagination from '@mui/material/Pagination';\nimport Stack from '@mui/material/Stack';\n\nexport default function PaginationRounded() {\n  return (\n    <Stack spacing={2}>\n      <Pagination count={10} shape=\"rounded\" />\n      <Pagination count={10} variant=\"outlined\" shape=\"rounded\" />\n    </Stack>\n  );\n}\n"},5443:function(n,e,t){t.r(e),e.default="import * as React from 'react';\nimport Pagination from '@mui/material/Pagination';\nimport Stack from '@mui/material/Stack';\n\nexport default function PaginationSize() {\n  return (\n    <Stack spacing={2}>\n      <Pagination count={10} size=\"small\" />\n      <Pagination count={10} />\n      <Pagination count={10} size=\"large\" />\n    </Stack>\n  );\n}\n"},79198:function(n,e,t){t.r(e),e.default="import * as React from 'react';\nimport TablePagination from '@mui/material/TablePagination';\n\nexport default function TablePaginationDemo() {\n  const [page, setPage] = React.useState(2);\n  const [rowsPerPage, setRowsPerPage] = React.useState(10);\n\n  const handleChangePage = (event, newPage) => {\n    setPage(newPage);\n  };\n\n  const handleChangeRowsPerPage = (event) => {\n    setRowsPerPage(parseInt(event.target.value, 10));\n    setPage(0);\n  };\n\n  return (\n    <TablePagination\n      component=\"div\"\n      count={100}\n      page={page}\n      onPageChange={handleChangePage}\n      rowsPerPage={rowsPerPage}\n      onRowsPerPageChange={handleChangeRowsPerPage}\n    />\n  );\n}\n"},68265:function(n,e,t){t.r(e),e.default="import * as React from 'react';\nimport usePagination from '@mui/material/usePagination';\nimport { styled } from '@mui/material/styles';\n\nconst List = styled('ul')({\n  listStyle: 'none',\n  padding: 0,\n  margin: 0,\n  display: 'flex',\n});\n\nexport default function UsePagination() {\n  const { items } = usePagination({\n    count: 10,\n  });\n\n  return (\n    <nav>\n      <List>\n        {items.map(({ page, type, selected, ...item }, index) => {\n          let children = null;\n\n          if (type === 'start-ellipsis' || type === 'end-ellipsis') {\n            children = '\u2026';\n          } else if (type === 'page') {\n            children = (\n              <button\n                type=\"button\"\n                style={{\n                  fontWeight: selected ? 'bold' : undefined,\n                }}\n                {...item}\n              >\n                {page}\n              </button>\n            );\n          } else {\n            children = (\n              <button type=\"button\" {...item}>\n                {type}\n              </button>\n            );\n          }\n\n          return <li key={index}>{children}</li>;\n        })}\n      </List>\n    </nav>\n  );\n}\n"}}]);