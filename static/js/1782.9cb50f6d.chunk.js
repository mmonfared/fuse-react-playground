"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[1782],{67921:function(e,s,t){t.d(s,{Z:function(){return m}});var a=t(29439),l=t(61113),r=t(83061),i=t(70816),n=t.n(i),c=t(47313),o=t(46417);function d(e){var s=e.onComplete,t=(0,c.useState)(n().isMoment(e.endDate)?e.endDate:n()(e.endDate)),i=(0,a.Z)(t,1)[0],d=(0,c.useState)({days:0,hours:0,minutes:0,seconds:0}),m=(0,a.Z)(d,2),u=m[0],x=m[1],h=(0,c.useRef)(),f=(0,c.useCallback)((function(){window.clearInterval(h.current),s&&s()}),[s]),j=(0,c.useCallback)((function(){var e=n()(),s=i.diff(e,"seconds");if(s<0)f();else{var t=n().duration(s,"seconds");x({days:t.asDays().toFixed(0),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds()})}}),[f,i]);return(0,c.useEffect)((function(){return h.current=setInterval(j,1e3),function(){clearInterval(h.current)}}),[j]),(0,o.jsxs)("div",{className:(0,r.default)("flex items-center",e.className),children:[(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[(0,o.jsx)(l.Z,{variant:"h4",className:"mb-4",children:u.days}),(0,o.jsx)(l.Z,{variant:"caption",color:"text.secondary",children:"days"})]}),(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[(0,o.jsx)(l.Z,{variant:"h4",className:"mb-4",children:u.hours}),(0,o.jsx)(l.Z,{variant:"caption",color:"text.secondary",children:"hours"})]}),(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[(0,o.jsx)(l.Z,{variant:"h4",className:"mb-4",children:u.minutes}),(0,o.jsx)(l.Z,{variant:"caption",color:"text.secondary",children:"minutes"})]}),(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[(0,o.jsx)(l.Z,{variant:"h4",className:"mb-4",children:u.seconds}),(0,o.jsx)(l.Z,{variant:"caption",color:"text.secondary",children:"seconds"})]})]})}d.defaultProps={endDate:n()().add(15,"days")};var m=(0,c.memo)(d)},91782:function(e,s,t){t.r(s);var a=t(1413),l=t(62563),r=t(75627),i=t(24193),n=t(24631),c=t(61113),o=t(3463),d=t(58970),m=t(76017),u=t(63585),x=t(9506),h=t(70501),f=t(67921),j=t(46417),p=o.Ry().shape({email:o.Z_().email("You must enter a valid email").required("You must enter a email")}),v={email:""};s.default=function(){var e=(0,r.cI)({mode:"onChange",defaultValues:v,resolver:(0,l.X)(p)}),s=e.control,t=e.formState,o=e.handleSubmit,y=e.reset,g=t.isValid,w=t.dirtyFields,b=t.errors;return(0,j.jsxs)("div",{className:"flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0",children:[(0,j.jsx)(h.Z,{className:"h-full sm:h-auto md:flex md:justify-end w-full sm:w-auto md:h-full py-32 px-16 sm:p-48 md:p-64 md:pt-96 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none ltr:border-r-1 rtl:border-l-1",children:(0,j.jsxs)("div",{className:"w-full max-w-320 sm:w-320 mx-auto sm:mx-0",children:[(0,j.jsx)("img",{className:"w-48",src:"assets/images/logo/logo.svg",alt:"logo"}),(0,j.jsx)(c.Z,{className:"mt-32 text-4xl font-extrabold tracking-tight leading-tight",children:"Almost there!"}),(0,j.jsx)(c.Z,{className:"mt-2",children:"Do you want to be notified when we are ready? Register below so we can notify you about the launch!"}),(0,j.jsx)("div",{className:"flex flex-col items-center py-48",children:(0,j.jsx)(f.Z,{endDate:"2023-07-28"})}),(0,j.jsxs)("form",{name:"comingSoonForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:o((function(){y(v)})),children:[(0,j.jsx)(r.Qr,{name:"email",control:s,render:function(e){var s,t=e.field;return(0,j.jsx)(n.Z,(0,a.Z)((0,a.Z)({},t),{},{className:"mb-24",label:"Email address",type:"email",error:!!b.email,helperText:null===b||void 0===b||null===(s=b.email)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0}))}}),(0,j.jsx)(i.Z,{variant:"contained",color:"secondary",className:" w-full mt-4","aria-label":"Register",disabled:d.Z.isEmpty(w)||!g,type:"submit",size:"large",children:"Notify me when you launch"}),(0,j.jsx)(c.Z,{className:"mt-32 text-md font-medium",color:"text.secondary",children:"This isn't a newsletter subscription. We will send one email to you when we launch and then you will be removed from the list."})]})]})}),(0,j.jsxs)(x.Z,{className:"relative hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden",sx:{backgroundColor:"primary.main"},children:[(0,j.jsx)("svg",{className:"absolute inset-0 pointer-events-none",viewBox:"0 0 960 540",width:"100%",height:"100%",preserveAspectRatio:"xMidYMax slice",xmlns:"http://www.w3.org/2000/svg",children:(0,j.jsxs)(x.Z,{component:"g",sx:{color:"primary.light"},className:"opacity-20",fill:"none",stroke:"currentColor",strokeWidth:"100",children:[(0,j.jsx)("circle",{r:"234",cx:"196",cy:"23"}),(0,j.jsx)("circle",{r:"234",cx:"790",cy:"491"})]})}),(0,j.jsxs)(x.Z,{component:"svg",className:"absolute -top-64 -right-64 opacity-20",sx:{color:"primary.light"},viewBox:"0 0 220 192",width:"220px",height:"192px",fill:"none",children:[(0,j.jsx)("defs",{children:(0,j.jsx)("pattern",{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:(0,j.jsx)("rect",{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"})})}),(0,j.jsx)("rect",{width:"220",height:"192",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"})]}),(0,j.jsxs)("div",{className:"z-10 relative w-full max-w-2xl",children:[(0,j.jsxs)("div",{className:"text-7xl font-bold leading-none text-gray-100",children:[(0,j.jsx)("div",{children:"Welcome to"}),(0,j.jsx)("div",{children:"our community"})]}),(0,j.jsx)("div",{className:"mt-24 text-lg tracking-tight leading-6 text-gray-400",children:"Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today."}),(0,j.jsxs)("div",{className:"flex items-center mt-32",children:[(0,j.jsxs)(m.Z,{sx:{"& .MuiAvatar-root":{borderColor:"primary.main"}},children:[(0,j.jsx)(u.Z,{src:"assets/images/avatars/female-18.jpg"}),(0,j.jsx)(u.Z,{src:"assets/images/avatars/female-11.jpg"}),(0,j.jsx)(u.Z,{src:"assets/images/avatars/male-09.jpg"}),(0,j.jsx)(u.Z,{src:"assets/images/avatars/male-16.jpg"})]}),(0,j.jsx)("div",{className:"ml-16 font-medium tracking-tight text-gray-400",children:"More than 17k people joined us, it's your turn"})]})]})]})]})}}}]);