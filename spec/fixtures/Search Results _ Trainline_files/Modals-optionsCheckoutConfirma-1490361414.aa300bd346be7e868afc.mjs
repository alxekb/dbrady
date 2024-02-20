"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[71094],{34412:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(85924),n=a(20471),c=a(29901);class l extends c.Component{constructor(e){super(e),(0,r.Z)(this,"ownRef",void 0),(0,r.Z)(this,"DEFAULT_LINE_HEIGHT",["","1","rem"]),(0,r.Z)(this,"checkClamp",((e,t)=>{var{onTruncate:a}=this.props,r=t.clientHeight>e.clientHeight;for(this.setState({isTruncated:r}),r&&a&&a(),t.textContent="#sin "+t.textContent;t.clientHeight>e.clientHeight&&t.textContent;){var n=this.getTruncatedText(t.textContent);if(!n)break;t.textContent=n}t.textContent=t.textContent.replace("#sin ","")})),(0,r.Z)(this,"getTruncatedText",(e=>{var t=/\W*\s\S*$/;return t.test(e)?e.replace(t,"..."):void 0})),(0,r.Z)(this,"getStyle",(()=>{var e,{lineHeight:t,lineLimit:a}=this.props,{isTruncated:r}=this.state;if(r){var n=t||this.DEFAULT_LINE_HEIGHT.join(""),[,c,l]=n.match(/([\d\.,]+)(\w*)/)||this.DEFAULT_LINE_HEIGHT;e={height:"".concat(a*Number(c)).concat(l),lineHeight:n}}else e={height:"inherit",lineHeight:"inherit"};return e})),this.ownRef=c.createRef(),this.state={isTruncated:!0}}componentDidMount(){var e=this.ownRef.current,t=e.querySelector("div");(0,n.flushToStyleTag)(),this.checkClamp(e,t)}render(){var{children:e}=this.props;return c.createElement("div",{style:this.getStyle(),ref:this.ownRef},c.createElement("div",null,e))}}const o=l},13534:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(29901);const n=e=>{var{className:t}=e;return r.createElement("svg",{className:t,version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 160 160",width:"24px",height:"24px"},r.createElement("g",null,r.createElement("path",{d:"M108.9,86.9l-23,0V47.5c0-3.2-2.6-5.8-5.8-5.8c-3.2,0-5.8,2.6-5.8,5.8v45.2c0,3.2,2.6,5.8,5.8,5.8l0,0h0\n        h28.8c3.2,0,5.8-2.6,5.8-5.8C114.7,89.5,112.1,86.9,108.9,86.9z"}),r.createElement("path",{d:"M131.4,132c10-11.8,16-27,16-43.6C147.4,51.2,117.2,21,80,21S12.6,51.2,12.6,88.4c0,16.6,6,31.8,16,43.6\n        L19,143.8c-2.6,3.2-2.1,7.9,1.1,10.5c1.4,1.1,3.1,1.7,4.7,1.7c2.2,0,4.3-0.9,5.8-2.8l9-11c11.3,8.5,25.3,13.5,40.5,13.5\n        c15.2,0,29.2-5,40.5-13.5l9,11c1.5,1.8,3.6,2.8,5.8,2.8c1.7,0,3.3-0.6,4.7-1.7c3.2-2.6,3.7-7.3,1.1-10.5L131.4,132z M24.2,88.4\n        c0-30.8,25-55.8,55.8-55.8s55.8,25,55.8,55.8c0,30.8-25.1,55.8-55.8,55.8S24.2,119.2,24.2,88.4z"}),r.createElement("path",{d:"M46.1,8.1c-1.8-3.7-6.3-5.2-10-3.4c-4.4,2.1-8.5,4.7-12.5,7.5c-0.9-0.5-1.8-0.7-2.9-0.7\n        c-3.5,0-6.3,2.8-6.3,6.3c0,0.5,0.1,1.1,0.2,1.6c-3.7,3.4-7.2,7.1-10.4,11c-2.6,3.2-2,7.9,1.2,10.5c1.4,1.1,3,1.6,4.7,1.6\n        c2.2,0,4.4-1,5.9-2.8c3.4-4.3,7.4-8.3,11.6-11.8c4.7-3.8,9.7-7.1,15.1-9.7C46.4,16.3,48,11.9,46.1,8.1z"}),r.createElement("path",{d:"M155.7,30.4c-3.1-3.9-6.6-7.6-10.4-11c0.1-0.5,0.2-1,0.2-1.6c0-3.5-2.8-6.3-6.3-6.3c-1,0-2,0.3-2.9,0.7\n        c-4-2.8-8.2-5.3-12.5-7.5c-3.7-1.8-8.2-0.3-10,3.4c-1.8,3.7-0.3,8.2,3.4,10c5.4,2.6,10.5,5.9,15.1,9.7c4.3,3.5,8.2,7.5,11.6,11.8\n        c1.5,1.9,3.7,2.8,5.9,2.8c1.6,0,3.3-0.5,4.7-1.6C157.8,38.3,158.3,33.6,155.7,30.4z"})))}},93783:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(29901);const n=e=>{var{className:t}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"24px",height:"24px",className:t},r.createElement("path",{d:"M22,3.5C22,1.5,20.5,0,18.7,0H3.3C1.5,0,0,1.6,0,3.5v10C0,15.4,1.5,17,3.3,17h15.4c1.8,0,3.3-1.6,3.3-3.5 L22,3.5L22,3.5z M3.4,2.3h15.4c0.6,0,1.1,0.5,1.1,1.2v6.1H2.2V3.5C2.2,2.8,2.7,2.3,3.4,2.3z M18.8,14.6H3.4c-0.6,0-1.2-0.5-1.2-1.2v-1.6h17.7v1.6C19.8,14.1,19.4,14.6,18.8,14.6z"}))}},92366:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(29901);const n=e=>{var{className:t}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"24px",height:"24px",className:t},r.createElement("g",{stroke:"none",strokeWidth:"1",fillRule:"evenodd"},r.createElement("g",{transform:"translate(1.000000, 1.000000)"},r.createElement("path",{d:"M5.106 12H3V4h10v8h-2.196l.1-1.194c.078-.954-.59-1.735-1.485-1.735H6.49c-.895 0-1.563.782-1.484 1.736l.1 1.194zM1 2h14v12H1V2zm6.954 3.333c.98 0 1.773.784 1.773 1.75 0 .967-.793 1.75-1.773 1.75-.98 0-1.772-.783-1.772-1.75 0-.966.793-1.75 1.772-1.75zM1 17h14v-2H1v2zM19.5 2c1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1-1.16 0-2.1-.94-2.1-2.1 0-1.16.94-2.1 2.1-2.1zm1.735 4.485h-3.47c-1.06 0-1.85.937-1.757 2.083l.43 5.242c.063.776.518 1.456 1.134 1.814v5.704c0 .92.694 1.672 1.542 1.672h.77c.85 0 1.544-.752 1.544-1.672v-5.704c.616-.358 1.07-1.038 1.135-1.814l.43-5.242c.094-1.146-.697-2.083-1.758-2.083z",fillRule:"evenodd"}))))}},34645:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(29901);const n=e=>{var{className:t}=e;return r.createElement("svg",{className:t,version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 15.458 10.018",width:"16px",height:"12px"},r.createElement("g",null,r.createElement("path",{d:"M0,0v10.018h15.458V0H0z M14.662,9.222H0.796V0.796h13.866V9.222z"}),r.createElement("path",{d:"M13.921,1.625H11.23v3.142h2.691V1.625z M13.258,4.104h-1.364V2.289h1.364V4.104z"}),r.createElement("rect",{x:"3.018",y:"3.953",width:"5.661",height:"0.663"}),r.createElement("rect",{x:"3.018",y:"5.169",width:"5.661",height:"0.663"}),r.createElement("rect",{x:"3.018",y:"6.386",width:"3.273",height:"0.663"})))}},66586:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(29901);const n=e=>{var{className:t,width:a,height:n,fill:c}=e;return r.createElement("svg",{className:t,width:a||"32",height:n||"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.98347 22.0368V9.96319H26.0165V22.0368H5.98347ZM5.98347 8C5.46058 8 4.94777 8.1768 4.5632 8.55744C4.17863 8.93808 4 9.44565 4 9.96319V22.0368C4 22.5544 4.17863 23.0619 4.5632 23.4426C4.94777 23.8232 5.46058 24 5.98347 24H26.0165C27.2226 24 28 23.0048 28 22.0368V9.96319C28 9.44565 27.8214 8.93808 27.4368 8.55744C27.0522 8.1768 26.5394 8 26.0165 8H5.98347ZM22.5454 11.043C21.9977 11.043 21.5537 11.4824 21.5537 12.0246V13.3006C21.5537 13.8428 21.9977 14.2822 22.5454 14.2822H23.8347C24.3824 14.2822 24.8264 13.8428 24.8264 13.3006V12.0246C24.8264 11.4824 24.3824 11.043 23.8347 11.043H22.5454ZM8.16528 15.5583C8.16528 15.0161 8.6093 14.5767 9.15702 14.5767H17.9835C18.5312 14.5767 18.9752 15.0161 18.9752 15.5583C18.9752 16.1004 18.5312 16.5399 17.9835 16.5399H9.15702C8.6093 16.5399 8.16528 16.1004 8.16528 15.5583ZM9.15702 18.2085C8.6093 18.2085 8.16528 18.648 8.16528 19.1901C8.16528 19.7322 8.6093 20.1717 9.15702 20.1717H17.9835C18.5312 20.1717 18.9752 19.7322 18.9752 19.1901C18.9752 18.648 18.5312 18.2085 17.9835 18.2085H9.15702Z",fill:c||"#192325"}))}},49828:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(29901);const n=e=>{var{className:t}=e;return r.createElement("svg",{className:t,viewBox:"0 0 155.9 156.10001",width:"33px",height:"33px"},r.createElement("g",null,r.createElement("path",{d:"m112.550464,0l-69.3,0c-9.9,0 -17.8,7.7 -17.8,17.7l0,120.6c0,10 7.9,17.8 17.8,17.8l69.2,0c10,0 17.9,-7.8 17.9,-17.8l0,-120.6c0.1,-10 -7.9,-17.7 -17.8,-17.7zm-69.3,12l69.2,0c3.3,0 5.9,2.3 5.9,5.7l0,82.3l-80.9,0l0,-82.3c0,-3.4 2.5,-5.7 5.8,-5.7zm69.3,132l-69.3,0c-3.3,0 -5.8,-2.4 -5.8,-5.8l0,-26.2l81,0l0,26.2c0,3.4 -2.6,5.8 -5.9,5.8z"}),r.createElement("circle",{r:"8.2",cy:"126.3",cx:"79.550462"}),r.createElement("g",null,r.createElement("rect",{x:"52.250929",y:"68.400002",width:"14.7",height:"14.7"}),r.createElement("rect",{x:"74.250929",y:"75.699997",width:"7.3",height:"7.3"}),r.createElement("g",null,r.createElement("rect",{x:"52.350927",y:"32",width:"15",height:"22"}),r.createElement("rect",{x:"67.350927",y:"32",width:"7",height:"14"})),r.createElement("polygon",{points:"103.35093259811401,83 103.35093259811401,54 88.85092496871948,54 81.35092496871948,54 81.35092496871948,46 74.35092496871948,46 74.35092496871948,68 81.55092191696167,68 81.55092191696167,68 89.35092496871948,68 89.35092496871948,83 "}),r.createElement("rect",{x:"81.550924",y:"31.799999",width:"22",height:"14.7"}))))}},76884:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(29901);const n=e=>{var{className:t,fill:a,width:n,height:c,viewBox:l}=e;return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n||"32",height:c||"32",fill:"none",className:t,viewBox:l||"0 0 32 32"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 8.5a5 5 0 015-5h12a5 5 0 015 5v19a1 1 0 11-2 0v-19a3 3 0 00-3-3H10a3 3 0 00-3 3v19a1 1 0 11-2 0v-19z",fill:a||"#192325"}),r.createElement("path",{d:"M18.667 19.833v-.666h-2v-2h2V18.5H20v1.333h-.667v1.334H18V22.5h-1.333v-2H18v-.667h.667zM22 22.5h-2.667v-1.333h1.334v-1.334H22V22.5zm-12-12h5.333v5.333H10V10.5zm1.333 1.333V14.5H14v-2.667h-2.667zm5.334-1.333H22v5.333h-5.333V10.5zM18 11.833V14.5h2.667v-2.667H18zm-8 5.334h5.333V22.5H10v-5.333zm1.333 1.333v2.667H14V18.5h-2.667zM20 17.167h2V18.5h-2v-1.333zM12 12.5h1.333v1.333H12V12.5zm0 6.667h1.333V20.5H12v-1.333zm6.667-6.667H20v1.333h-1.333V12.5z",fill:a||"#192325"}))}},99088:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(50093),n=a(29901),c=a(98184),l=a(13534),o=a(98318),i=a(23394);const s=r.StyleSheet.create({root:{display:"flex",alignItems:"center",color:o.dp_app_text_negative,fontSize:"var(--DEPRECATED-14px)"},icon:{width:i.W0.s4,fill:o.dp_app_text_negative,marginRight:"5px"}});const m=e=>{var{className:t,Icon:a=l.Z,styleSheet:o}=e;return n.createElement("div",{className:"".concat(t," ").concat((0,r.css)(s.root,o&&o.wrapper))},n.createElement(a,{className:(0,r.css)(s.icon,o&&o.icon)}),n.createElement(c.FormattedMessage,{id:"customerJourneySummary.limitedAvailability"}))}},22740:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(60654),n=a(75853);const c=e=>{var{icons:t}=e,{portal:a}=(0,n.x)(),c=a!==r.Portal.TRAINLINE;return t[a]||c&&t.TOC||t[r.Portal.TRAINLINE]}},17970:(e,t,a)=>{a.d(t,{r:()=>d});var r=a(36841),n=a(29901),c=a(93588),l=a(35779),o=a(6575),i=a(98318),s=a(24425);const m=a(50093).StyleSheet.create({promoLabel:{paddingLeft:l.LS,paddingRight:l.LS,borderRadius:o.HH,fontWeight:600,cursor:"default"},lightgreen:{backgroundColor:i.dp_brand_primary_brightest,color:i.dp_brand_primary_duller},lightblue:{backgroundColor:i.dp_comp_message_info_background,color:i.dp_app_info_duller},small:{fontSize:s.VU,lineHeight:s.IC},mini:{fontSize:s.YP,lineHeight:s.gx}});var d=e=>{var{children:t,theme:a,size:l="mini"}=e;return n.createElement(c.Z,{target:"promoLabel",className:(0,r.css)(m.promoLabel,m[a],m[l])},t)}},41678:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(29901),n=a(50093),c=a(6575),l=a(24425),o=a(98318);const i=n.StyleSheet.create({base:{borderRadius:c.HH,fontSize:l.YP,fontWeight:"bold",height:"22px",lineHeight:"22px",padding:"0 8px",textAlign:"center"},warning:{backgroundColor:o.dp_app_warning_brightest,color:o.dp_app_text_warning},info:{backgroundColor:o.dp_app_info_brightest,color:o.dp_app_info_duller}});const s=e=>{var{children:t,type:a="info",className:c=""}=e;return r.createElement("div",{className:"".concat((0,n.css)(i.base,i[a])," ").concat(c)},t)}},14845:(e,t,a)=>{a.d(t,{V:()=>p,Z:()=>g});var r=a(50093),n=a(29901),c=a(50453),l=a(60289),o=a(83367);const i=r.StyleSheet.create({container:{padding:"".concat(o.spacers.s," 0"),display:"flex",flexDirection:"column",justifyContent:"center",flex:1,[l.ZP.small.max]:{flexDirection:"row",justifyContent:"flex-end",":nth-child(1n) > span":{marginLeft:"1em"}}},loading:{minWidth:"var(--DEPRECATED-84px)",height:"var(--DEPRECATED-30px)",alignSelf:"center"}});var s=a(11576),m=a(11493),d=e=>t=>a=>{var r=[].concat(e);"function"==typeof t&&r.includes(a.key)&&t()},h=d("Enter");var v=e=>{var t,a,{carrierLogos:l,className:o,onClick:s}=e,m=l&&l.length>0&&l.some((e=>(null==e?void 0:e.name)&&!!c.bd[e.name.toLowerCase()]));return n.createElement("div",{className:[o,(0,r.css)(i.container)].filter(Boolean).join(" "),onClick:s,onKeyDown:h(s)},l&&(m?l.map(((e,t)=>{var{name:a,mode:r}=e;return n.createElement(c.pl,{key:t,name:a,mode:r,iconClassName:"icons".concat(l.length),testId:a||r})})):n.createElement(c.pl,{mode:null===(t=l[0])||void 0===t?void 0:t.mode,iconClassName:"icons".concat(l.length),testId:null===(a=l[0])||void 0===a?void 0:a.mode})))},p=(0,s.E0)(v,(()=>(0,r.css)(i.loading,m.Z.loading)));const g=v},8644:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(23198),n=a(29901),c=a(67292),l=a(91939),o=a(82812),i=a(94575);const s=e=>{var{date:t,isMobileFormat:a=!1,showYear:s=!1,showTime:m=!1}=e,d=(0,o.Z)(),{formatMessage:h,formatDate:v,formatTime:p}=(0,i.YB)(),g=new Date((0,c.Qb)(t)),u=d?"dateTimeFormat.dateUSFormatNoYear":"dateTimeFormat.dateNoYear";s&&(u=d?"dateTimeFormat.dateUSFormat":"dateTimeFormat.date"),m&&(u=d?"dateTimeFormat.dateAndTimeUSFormatted":"dateTimeFormat.dateAndTime");var x={time:p(g,{hour12:d,timeZone:"UTC"}),weekday:a?"":v(g,{weekday:"short",timeZone:"UTC"}),day:v(g,{day:"numeric",timeZone:"UTC"}),month:v(g,{month:"short",timeZone:"UTC"}),year:v(g,{year:"numeric",timeZone:"UTC"})},E=h({id:u},(0,r.Z)((0,r.Z)({},x),{},{time:p(g,{hour12:!0,timeZone:"UTC"})})),C=h({id:u},x);return n.createElement(n.Fragment,null,n.createElement("span",{"aria-hidden":!0,"data-test":"local-depart-at"},C),n.createElement(l.Z,null,E))}},95086:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(36841),n=a(29901),c=a(98184),l=a(98318),o=a(23394);const i=r.StyleSheet.create({promoCodeBox:{display:"flex",flexWrap:"wrap",fontSize:"inherit",lineHeight:o.W0.s4},baseColor:{color:l.dp_app_text_base},subDuedColor:{color:l.dp_app_text_subdued},promoCodeText:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"34ch",textTransform:"uppercase"}});const s=e=>{var{color:t="baseColor"}=e;return n.createElement("div",{className:(0,r.css)(i.promoCodeBox,i[t]),"data-test":"promocode-applied-label"},n.createElement(c.FormattedMessage,{id:"page.confirmation.promoApplied"}))}},22273:(e,t,a)=>{a.d(t,{lG:()=>l});var r=a(10517),n=["super economy","economy","speciale frecce","bimbi gratis","insieme","weekend fvg"],c=["economy","low cost","extra magic","young","giovani"],l=(e,t)=>!!e&&e.some((e=>{var a,l,o=t||e.fareTypes||[];return(null===(a=e.carrierName)||void 0===a?void 0:a.toLowerCase())===r.X.ITALO&&o.some((e=>c.includes(null==e?void 0:e.name.toLowerCase())))||(null===(l=e.carrierName)||void 0===l?void 0:l.toLowerCase())===r.X.TRENITALIA&&o.some((e=>n.includes(null==e?void 0:e.name.toLowerCase())))}))},87864:(e,t,a)=>{a.d(t,{L:()=>r});var r=e=>e?e.replace(/\w\S*/g,(e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())):""}}]);