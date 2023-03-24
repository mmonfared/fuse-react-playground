"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[6076],{76076:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(61113),s=t(63866),i=t(47313),a=t(22408),l=t(26529),d=t(15743),o=t(19536),c=t(56993),m=t(73428),u=t(76017),x=t(63585),f=t(2135),h=t(74789),v=t(58970),j=t(51686),g=t(46417);var p=function(e){var n=e.board,t=(0,a.v9)(j.ad),s=n.members.map((function(e){return v.Z.find(t,{id:e})}));return(0,g.jsxs)(m.Z,{component:f.rU,to:n.id,role:"button",className:"flex flex-col items-start w-full h-full p-24 rounded-lg shadow rounded-lg hover:shadow-xl transition-shadow duration-150 ease-in-out",children:[(0,g.jsxs)("div",{className:"flex flex-col flex-auto justify-start items-start w-full",children:[(0,g.jsx)(d.Z,{sx:{backgroundColor:"secondary.light",color:"secondary.dark"},className:"flex items-center justify-center p-16 rounded-full",children:(0,g.jsx)(c.Z,{children:n.icon})}),(0,g.jsx)(r.Z,{className:"mt-20 text-lg font-medium leading-5",children:n.title}),(0,g.jsx)(r.Z,{className:"mt-2 line-clamp-2 text-secondary",children:n.description}),(0,g.jsx)(o.Z,{className:"w-48 mt-24 h-2"})]}),(0,g.jsxs)("div",{className:"flex flex-col flex-auto justify-end w-full",children:[Boolean(null===s||void 0===s?void 0:s.length)&&(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:"flex items-center mt-24 -space-x-6",children:(0,g.jsx)(u.Z,{max:4,children:s.map((function(e,n){return(0,g.jsx)(x.Z,{alt:"member",src:e.avatar},n)}))})})}),(0,g.jsxs)("div",{className:"flex items-center mt-24 text-md font-md",children:[(0,g.jsx)(r.Z,{color:"text.secondary",children:"Edited:"}),(0,g.jsx)(r.Z,{className:"mx-4 truncate",children:(0,h.Z)(new Date(n.lastActivity),new Date,{addSuffix:!0})})]})]})]})};var w=function(e){var n=(0,a.I0)();return(0,g.jsx)(d.Z,{sx:{borderColor:"divider"},className:"flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer border-2 border-gray-300 border-dashed hover:bg-hover transition-colors duration-150 ease-in-out",onClick:function(){return n((0,l.r5)())},onKeyDown:function(){return n((0,l.r5)())},role:"button",tabIndex:0,children:(0,g.jsx)(c.Z,{size:48,color:"disabled",children:"heroicons-outline:plus"})})};var b=function(e){var n=(0,a.I0)(),t=(0,a.v9)(l.E$);(0,i.useEffect)((function(){return n((0,l.DC)()),function(){n((0,l.Vg)())}}),[n]);var d={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return(0,g.jsxs)("div",{className:"flex grow shrink-0 flex-col items-center container p-24 sm:p-40",children:[(0,g.jsx)(s.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},children:(0,g.jsx)(r.Z,{className:"mt-16 md:mt-96 text-3xl md:text-6xl font-extrabold tracking-tight leading-7 sm:leading-10 text-center",children:"Scrumboard Boards"})}),(0,g.jsxs)(s.E.div,{variants:{show:{transition:{staggerChildren:.1}}},initial:"hidden",animate:"show",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mt-32 md:mt-64",children:[t.map((function(e){return(0,g.jsx)(s.E.div,{variants:d,className:"min-w-full sm:min-w-224 min-h-360",children:(0,g.jsx)(p,{board:e},e.id)},e.id)})),(0,g.jsx)(s.E.div,{variants:d,className:"min-w-full sm:min-w-224 min-h-360",children:(0,g.jsx)(w,{})})]})]})}}}]);