import{d as b,a9 as N,f as y,b as V,o as _,C as k,D as o,H as t,u as e,q as m,aa as p,Q as B,F as D}from"./index-42aff973.js";import{u as F,i as S}from"./counter-9c527fc4.js";const T=o("h2",null,"testOne1",-1),R=b({__name:"TestOne1",setup(U){const n=F();console.log(n,n.count),console.log(n.doubleCount),console.log(n.increment);const l=S();let{name:d,age:f,sex:c,address:g,arr:v}=N(l);console.log("----------",d,f,c,g,v);const C=()=>{console.log("修改"),n.increment(),l.toArr({a:1,b:2}),l.age++,l.getTimeoutFun()},u=y("ty"),r=y("zyp"),i=V({get(){return u.value+" "+r.value},set(x){[u.value,r.value]=x.split(" ")}});return(x,a)=>(_(),k(D,null,[T,o("button",{onClick:C},"修改pania数据 "+t(e(n).count),1),o("p",null," information store数据"+t(e(d))+t(e(f))+"-"+t(e(l).age)+"-"+t(e(c))+" "+t(e(g))+"-【"+t(e(l).getAllInformation)+"】-"+t(e(v)),1),o("div",null,"hello test子组件1-"+t(e(i)),1),m(o("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>u.value=s)},null,512),[[p,u.value]]),m(o("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=s=>r.value=s)},null,512),[[p,r.value]]),m(o("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=s=>B(i)?i.value=s:null)},null,512),[[p,e(i)]])],64))}});export{R as default};