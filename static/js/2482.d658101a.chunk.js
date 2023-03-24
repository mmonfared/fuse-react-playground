"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[2482],{44269:function(t,e,a){a.d(e,{Z:function(){return R}});var s=a(29439),r=a(98655),n=a(73428),o=a(65280),l=a(5297),i=a(83061),c=a(47313),m=a(17551),u=a(9506),d=a(1413),p=a(45987),f=a(1168),h=a(10223),g=a(83097),b=a(16132),x=a(54097),N=a(19860),j=a(17592),v=a(70499),Z=a(46417),w=["children","name"];function T(t){var e=t.children,a=t.document,s=(0,N.Z)();c.useEffect((function(){a.body.dir=s.direction}),[a,s.direction]);var r=c.useMemo((function(){return(0,g.Z)({key:"iframe-demo-".concat(s.direction),prepend:!0,container:a.head,stylisPlugins:"rtl"===s.direction?[h.Z]:[]})}),[a,s.direction]),n=c.useCallback((function(){return a.defaultView}),[a]);return(0,Z.jsx)(x.StyleSheetManager,{target:a.head,stylisPlugins:"rtl"===s.direction?[h.Z]:[],children:(0,Z.jsxs)(b.C,{value:r,children:[(0,Z.jsx)(v.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),c.cloneElement(e,{window:n})]})})}var y=(0,j.ZP)("iframe")((function(t){var e=t.theme;return{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:e.shadows[1]}}));function H(t){var e,a=t.children,r=t.name,n=(0,p.Z)(t,w),o="".concat(r," demo"),l=c.useRef(null),i=c.useReducer((function(){return!0}),!1),m=(0,s.Z)(i,2),u=m[0],h=m[1];c.useEffect((function(){var t=l.current.contentDocument;null==t||"complete"!==t.readyState||u||h()}),[u]);var g=null===(e=l.current)||void 0===e?void 0:e.contentDocument;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(y,(0,d.Z)({onLoad:h,ref:l,title:o},n)),!1!==u?f.createPortal((0,Z.jsx)(T,{document:g,children:a}),g.body):null]})}var C=c.memo(H),P=a(56993);function k(t){var e=(0,c.useState)(t.currentTabIndex),a=(0,s.Z)(e,2),d=a[0],p=a[1],f=t.component,h=t.raw,g=t.iframe,b=t.className,x=t.name;return(0,Z.jsxs)(n.Z,{className:(0,i.default)(b,"shadow"),sx:{backgroundColor:function(t){return(0,m._j)(t.palette.background.paper,"light"===t.palette.mode?.01:.1)}},children:[(0,Z.jsx)(u.Z,{sx:{backgroundColor:function(t){return(0,m._j)(t.palette.background.paper,"light"===t.palette.mode?.02:.2)}},children:(0,Z.jsxs)(l.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:d,onChange:function(t,e){p(e)},textColor:"secondary",indicatorColor:"secondary",children:[f&&(0,Z.jsx)(o.Z,{classes:{root:"min-w-64"},icon:(0,Z.jsx)(P.Z,{children:"heroicons-outline:eye"})}),h&&(0,Z.jsx)(o.Z,{classes:{root:"min-w-64"},icon:(0,Z.jsx)(P.Z,{children:"heroicons-outline:code"})})]})}),(0,Z.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,Z.jsx)("div",{className:0===d?"flex flex-1 max-w-full":"hidden",children:f&&(g?(0,Z.jsx)(C,{name:x,children:(0,Z.jsx)(f,{})}):(0,Z.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,Z.jsx)(f,{})}))}),(0,Z.jsx)("div",{className:1===d?"flex flex-1":"hidden",children:(0,c.useMemo)((function(){return h&&1===d?(0,Z.jsx)("div",{className:"flex flex-1",children:(0,Z.jsx)(r.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})}):null}),[h,d])})]})]})}k.defaultProps={name:"",currentTabIndex:0};var R=k},42482:function(t,e,a){a.r(e);var s=a(44269),r=a(24193),n=a(61113),o=a(2135),l=a(56993),i=a(46417);e.default=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex w-full items-center justify-between mb-24",children:[(0,i.jsx)(n.Z,{variant:"h4",className:"",children:"ReactTable"}),(0,i.jsx)(r.Z,{variant:"contained",color:"secondary",component:"a",href:"https://github.com/react-tools/react-table",target:"_blank",role:"button",startIcon:(0,i.jsx)(l.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})]}),(0,i.jsxs)(n.Z,{className:"mb-16",component:"p",children:[(0,i.jsx)("code",{children:"react-table"})," is a lightweight, fast and extendable datagrid built for React."]}),(0,i.jsx)("hr",{}),(0,i.jsx)(n.Z,{className:"text-32 mt-32 mb-8",component:"h2",children:"Example Usage"}),(0,i.jsx)(s.Z,{className:"mb-64",component:a(83052).Z,raw:a(53311)}),(0,i.jsx)(n.Z,{className:"text-32 mt-32 mb-8",component:"h2",children:"Enhanced examples"}),(0,i.jsxs)(n.Z,{className:"mt-32 mb-8",component:"p",children:["Checkout for enhanced examples at"," ",(0,i.jsx)("a",{href:"https://github.com/tannerlinsley/react-table/blob/master/docs/examples.md",target:"_blank",rel:"noopener noreferrer",children:"react-table docs"})]}),(0,i.jsx)(n.Z,{className:"text-32 mt-32 mb-8",component:"h2",children:"Demos"}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{className:"mb-8",children:(0,i.jsx)(o.rU,{to:"/apps/contacts",children:"Contacts App"})})})]})}},83052:function(t,e,a){a.d(e,{Z:function(){return f}});var s=a(1413),r=a(47313),n=a(66835),o=a(57861),l=a(70941),i=a(23477),c=a(24076),m=a(45110),u=[{firstName:"dad",lastName:"teaching",age:8,visits:63,progress:96,status:"relationship"},{firstName:"crush",lastName:"player",age:4,visits:87,progress:33,status:"single"},{firstName:"quartz",lastName:"box",age:22,visits:10,progress:87,status:"single"},{firstName:"stage",lastName:"wine",age:14,visits:78,progress:83,status:"complicated"},{firstName:"whistle",lastName:"swing",age:22,visits:84,progress:55,status:"single"},{firstName:"thing",lastName:"wife",age:24,visits:79,progress:74,status:"complicated"},{firstName:"instrument",lastName:"record",age:27,visits:31,progress:66,status:"complicated"},{firstName:"passion",lastName:"drop",age:13,visits:73,progress:79,status:"relationship"},{firstName:"bears",lastName:"toothpaste",age:20,visits:34,progress:10,status:"relationship"},{firstName:"limit",lastName:"chairs",age:19,visits:79,progress:38,status:"single"},{firstName:"kite",lastName:"fact",age:11,visits:12,progress:79,status:"relationship"},{firstName:"brother",lastName:"underwear",age:25,visits:67,progress:48,status:"complicated"},{firstName:"butter",lastName:"north",age:29,visits:17,progress:29,status:"relationship"},{firstName:"housing",lastName:"society",age:0,visits:68,progress:84,status:"single"},{firstName:"skate",lastName:"attraction",age:9,visits:89,progress:89,status:"single"},{firstName:"banana",lastName:"rabbits",age:18,visits:67,progress:62,status:"single"},{firstName:"word",lastName:"volleyball",age:28,visits:19,progress:86,status:"single"},{firstName:"balls",lastName:"nest",age:23,visits:74,progress:38,status:"single"},{firstName:"physics",lastName:"method",age:2,visits:40,progress:87,status:"relationship"},{firstName:"book",lastName:"recommendation",age:12,visits:73,progress:81,status:"relationship"}],d=a(46417);function p(t){var e=t.columns,a=t.data,r=(0,m.useTable)({columns:e,data:a}),u=r.getTableProps,p=r.headerGroups,f=r.rows,h=r.prepareRow;return(0,d.jsxs)(n.Z,(0,s.Z)((0,s.Z)({},u()),{},{children:[(0,d.jsx)(i.Z,{children:p.map((function(t){return(0,d.jsx)(c.Z,(0,s.Z)((0,s.Z)({},t.getHeaderGroupProps()),{},{children:t.headers.map((function(t){return(0,d.jsx)(l.Z,(0,s.Z)((0,s.Z)({},t.getHeaderProps()),{},{children:t.render("Header")}))}))}))}))}),(0,d.jsx)(o.Z,{children:f.map((function(t,e){return h(t),(0,d.jsx)(c.Z,(0,s.Z)((0,s.Z)({},t.getRowProps()),{},{children:t.cells.map((function(t){return(0,d.jsx)(l.Z,(0,s.Z)((0,s.Z)({},t.getCellProps()),{},{children:t.render("Cell")}))}))}))}))})]}))}var f=function(){var t=(0,r.useMemo)((function(){return[{Header:"Name",columns:[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"}]},{Header:"Info",columns:[{Header:"Age",accessor:"age"},{Header:"Visits",accessor:"visits"},{Header:"Status",accessor:"status"},{Header:"Profile Progress",accessor:"progress"}]}]}),[]),e=(0,r.useMemo)((function(){return u}),[]);return(0,d.jsx)(p,{columns:t,data:e})}},53311:function(t,e,a){a.r(e),e.default="import { useMemo } from 'react';\nimport MaUTable from '@mui/material/Table';\nimport TableBody from '@mui/material/TableBody';\nimport TableCell from '@mui/material/TableCell';\nimport TableHead from '@mui/material/TableHead';\nimport TableRow from '@mui/material/TableRow';\nimport { useTable } from 'react-table';\nimport sampleData from './sampleData';\n\nfunction Table({ columns, data }) {\n\t// Use the state and functions returned from useTable to build your UI\n\tconst { getTableProps, headerGroups, rows, prepareRow } = useTable({\n\t\tcolumns,\n\t\tdata\n\t});\n\n\t// Render the UI for your table\n\treturn (\n\t\t<MaUTable {...getTableProps()}>\n\t\t\t<TableHead>\n\t\t\t\t{headerGroups.map(headerGroup => (\n\t\t\t\t\t<TableRow {...headerGroup.getHeaderGroupProps()}>\n\t\t\t\t\t\t{headerGroup.headers.map(column => (\n\t\t\t\t\t\t\t<TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>\n\t\t\t\t\t\t))}\n\t\t\t\t\t</TableRow>\n\t\t\t\t))}\n\t\t\t</TableHead>\n\t\t\t<TableBody>\n\t\t\t\t{rows.map((row, i) => {\n\t\t\t\t\tprepareRow(row);\n\t\t\t\t\treturn (\n\t\t\t\t\t\t<TableRow {...row.getRowProps()}>\n\t\t\t\t\t\t\t{row.cells.map(cell => {\n\t\t\t\t\t\t\t\treturn <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;\n\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t</TableRow>\n\t\t\t\t\t);\n\t\t\t\t})}\n\t\t\t</TableBody>\n\t\t</MaUTable>\n\t);\n}\n\nfunction App() {\n\tconst columns = useMemo(\n\t\t() => [\n\t\t\t{\n\t\t\t\tHeader: 'Name',\n\t\t\t\tcolumns: [\n\t\t\t\t\t{\n\t\t\t\t\t\tHeader: 'First Name',\n\t\t\t\t\t\taccessor: 'firstName'\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tHeader: 'Last Name',\n\t\t\t\t\t\taccessor: 'lastName'\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t\tHeader: 'Info',\n\t\t\t\tcolumns: [\n\t\t\t\t\t{\n\t\t\t\t\t\tHeader: 'Age',\n\t\t\t\t\t\taccessor: 'age'\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tHeader: 'Visits',\n\t\t\t\t\t\taccessor: 'visits'\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tHeader: 'Status',\n\t\t\t\t\t\taccessor: 'status'\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tHeader: 'Profile Progress',\n\t\t\t\t\t\taccessor: 'progress'\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t[]\n\t);\n\n\tconst data = useMemo(() => sampleData, []);\n\n\treturn <Table columns={columns} data={data} />;\n}\n\nexport default App;\n"}}]);