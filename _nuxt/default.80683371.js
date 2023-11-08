import{_ as O}from"./nuxt-img.4c38eba5.js";import{_ as j}from"./nuxt-link.3d7adf27.js";import{M as C,aK as w,ay as A,au as R,u as z,o as a,c as m,a as e,aO as g,ap as _,b9 as i,aN as b,t as y,x as k,bv as E,bm as T,F as v,b as s,w as t,d as h,_ as F}from"./entry.1800af53.js";import{c as U,I as V,u as K,_ as W,a as D}from"./useDevice.ad010d10.js";import"./vue.f36acd1f.c9980b26.js";var I=U("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]]);const q=C({__name:"BaseDropDown",props:{anchorStyle:{},itemsStyle:{}},setup(p){const d=w(null),n=w(!1),c=()=>{n.value=!n.value},r=o=>{d.value&&!d.value.contains(o.target)&&(n.value=!1)};A(()=>{window.addEventListener("click",r)}),R(()=>{window.removeEventListener("click",r)});const u=z(()=>({visible:n.value,"opacity-100":n.value,invisible:!n.value,"opacity-0":!n.value,"transition duration-300":!0}));return(o,x)=>(a(),m("div",{ref_key:"dropdownRef",ref:d,class:"relative w-full"},[e("div",{class:_([o.anchorStyle,i(n)?"bg-primary-contrastText":""]),onClick:c},[g(o.$slots,"anchor")],2),e("div",{class:_(i(u))},[g(o.$slots,"default")],2)],512))}}),G=["onClick"],H={class:"flex justify-between w-full"},J={class:"accordion-content"},Q=C({__name:"BaseAccordion",props:{items:{},titleStyle:{}},setup(p){const{items:d,titleStyle:n}=p,c=r=>{d.forEach((u,o)=>{u.isOpen=o===r?!u.isOpen:!1})};return(r,u)=>(a(!0),m(v,null,b(r.items,(o,x)=>(a(),m("div",{key:x,class:"w-full"},[e("div",{class:"",onClick:S=>c(x)},[e("div",H,[e("div",{class:_(r.titleStyle)},y(o.title),3),o.isOpen?(a(),k(i(V),{key:0})):(a(),k(i(I),{key:1}))]),E(e("div",J,[g(r.$slots,"item-content",{index:x})],512),[[T,o.isOpen]])],8,G)]))),128))}}),X={class:"sticky top-0 z-50 h-20 transition-all shadow-1 bg-white-default mb-6 sm:mb-16 md:mb-12 lg:mb-24"},Y={class:"flex h-full items-center justify-between"},Z={class:"flex"},ee={class:"flex grow list-none items-center max-md:w-full max-md:flex-col max-md:items-start max-md:px-2 max-md:py-3 max-sm:px-6 max-sm:pb-8 [&>li]:cursor-pointer text-text-primary"},te={key:0,class:"max-md:flex max-md:h-12 max-md:w-full max-md:items-center max-md:border-0 max-md:border-b max-md:border-solid max-md:border-text-grey max-sm:px-4"},se={class:"flex cursor-pointer items-center"},ae=e("span",{class:"max-md:w-full text-subtitle1"},"Products",-1),oe={class:"absolute left-2/4 top-14 -translate-x-2/4 list-none rounded bg-white-default px-0 py-2 shadow-1"},ne={class:"flex cursor-pointer items-center justify-between"},re=e("span",{class:"mr-2 text-body2"},"More",-1),ie={class:"absolute left-full top-0 list-none rounded bg-white-default px-0 py-2 shadow-1"},le={class:"transition duration-300 hover:bg-primary-soft"},me={class:"transition duration-300 hover:bg-primary-soft"},de={key:1,class:"max-md:flex max-md:min-h-[3rem] max-md:w-full max-md:items-center max-md:border-0 max-md:border-b max-md:border-solid max-md:border-text-grey max-sm:px-4"},ce={class:"pb-6"},ue={class:"mt-8 w-full max-sm:px-4 sm:hidden text-primary-main"},xe=e("span",{class:"uppercase"}," sign in",-1),fe={class:"flex items-center justify-end"},pe=e("span",null," Sign in ",-1),_e={class:"relative ml-3 flex w-10 items-center max-sm:justify-end md:hidden"},he=e("span",{class:"flex h-4 w-px bg-grey-200 max-sm:hidden"},null,-1),be=C({__name:"NavBar",setup(p){const{isDesktop:d}=K(),n=[{href:"/",text:"Pricing"},{href:"/",text:"Blog"},{href:"/",text:"About Us"}],c=[{name:"Linux VPS",link:"/"},{name:"Windows VPS",link:"/"},{name:"RDP VPS",link:"/"},{name:"Forex VPS",link:"/"},{name:"Cloud Server",link:"/"},{name:"More",link:"#"}],r=w(!1),u=[...c.filter(x=>x.name.toLowerCase()!=="more"),{name:"MikroTik VPS",link:"/"},{name:"Android VPS",link:"/"}],o=w([{title:"Products",content:u,isOpen:!1}]);return(x,S)=>{const L=O,f=j,B=q,N=Q,$=W,M=D;return a(),m("nav",X,[s(M,{classes:"h-full"},{default:t(()=>[e("div",Y,[e("div",Z,[s(f,{to:"/"},{default:t(()=>[s(L,{src:"/cloudzy-light.svg",class:"h-11",width:"169",height:"45"})]),_:1})]),e("div",{class:_(["tansition flex items-center duration-300 max-md:invisible max-md:absolute max-md:left-0 max-md:right-0 max-md:top-[calc(100%-8px)] max-md:w-full max-md:bg-white-default max-md:opacity-0 max-md:shadow-0.25",{"max-md:!visible max-md:!top-full max-md:max-h-[calc(100vh-80px)] max-md:w-full max-md:flex-col max-md:items-start max-md:overflow-auto max-md:!opacity-100":i(r)}])},[e("ul",ee,[i(d)?(a(),m("li",te,[s(B,{"anchor-style":"rounded px-6 py-[5px] transition duration-300 hover:bg-primary-soft"},{anchor:t(()=>[e("div",se,[ae,s(i(V))])]),default:t(()=>[e("ul",oe,[(a(),m(v,null,b(c,l=>e("li",{key:l.link,class:"transition duration-300 hover:bg-primary-soft"},[l.name.toLowerCase()!=="more"?(a(),k(f,{key:0,class:"navbarLink flex whitespace-nowrap px-4 py-1.5 text-body2 text-text-primary no-underline",to:l.link},{default:t(()=>[h(y(l.name),1)]),_:2},1032,["to"])):(a(),k(B,{key:1,"anchor-style":"px-4 py-1.5"},{anchor:t(()=>[e("div",ne,[re,s(i(I),{size:20})])]),default:t(()=>[e("ul",ie,[e("li",le,[s(f,{class:"navbarLink flex whitespace-nowrap px-4 py-1.5 text-body2 text-text-primary no-underline",to:"/"},{default:t(()=>[h(" MikroTik VPS ")]),_:1})]),e("li",me,[s(f,{class:"navbarLink flex whitespace-nowrap px-4 py-1.5 text-body2 text-text-primary no-underline",to:"/"},{default:t(()=>[h(" Android VPS ")]),_:1})])])]),_:1}))])),64))])]),_:1})])):(a(),m("li",de,[s(N,{items:i(o),"title-style":"text-subtitle1 mb-2"},{"item-content":t(({index:l})=>[e("div",ce,[(a(!0),m(v,null,b(i(o)[l].content,P=>(a(),m("span",{key:P.link,class:"flex w-full py-2 px-4 text-body2"},y(P.name),1))),128))])]),_:1},8,["items"])])),(a(),m(v,null,b(n,l=>e("li",{key:l.href,class:"md:rounded transition duration-300 hover:bg-primary-soft max-md:flex max-md:w-full max-md:items-center max-md:border-0 max-md:border-b max-md:border-solid max-md:border-text-grey max-md:py-2.5 max-sm:px-4"},[s(f,{class:"block py-1 text-subtitle1 text-text-primary no-underline max-md:w-full sm:px-6",to:l.href},{default:t(()=>[h(y(l.text),1)]),_:2},1032,["to"])])),64)),e("li",ue,[s(f,{to:"/",class:"text-inherit no-underline"},{default:t(()=>[s($,{classes:"mr-2 h-9 w-full text-primary-main border justify-center "},{default:t(()=>[xe]),_:1})]),_:1})])])],2),e("div",fe,[s(f,null,{default:t(()=>[s($,{classes:"bg-primary-main text-white-default text-btnSmall hover:bg-primary-dark transition duration-300"},{default:t(()=>[pe]),_:1})]),_:1}),e("div",_e,[he,e("div",{class:"h-7 w-7",onClick:S[0]||(S[0]=l=>r.value=!i(r))},[e("button",{class:_(["absolute right-0 top-2/4 ml-4 h-[3px] w-6 -translate-y-2/4 rounded border-0 bg-primary-main outline-0 transition duration-300 before:absolute before:right-0 before:-mt-2.5 before:ml-4 before:h-[3px] before:w-6 before:rounded before:bg-primary-main before:transition before:duration-300 before:content-[''] after:absolute after:right-0 after:ml-4 after:mt-1.5 after:h-[3px] after:w-6 after:rounded after:bg-primary-main after:transition after:duration-300 after:content-['']",{"bg-opacity-0 before:!-mt-0.5 before:rotate-45 after:!-mt-0.5 after:-rotate-45":i(r)}])},null,2)])])])])]),_:1})])}}}),ye={};function ve(p,d){const n=be,c=D;return a(),m("div",null,[s(n),s(c,null,{default:t(()=>[g(p.$slots,"default")]),_:3})])}const Be=F(ye,[["render",ve]]);export{Be as default};
