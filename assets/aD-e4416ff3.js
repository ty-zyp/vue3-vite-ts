import{N as I,O as q,P as G,n as J}from"./el-button-a4300b0a.js";import{d as P,f as i,b as Q,o as W,C as j,D as e,H as o,u as n,J as d,w as m,q as w,aa as N,Q as S,G as p,F as A}from"./index-3cefa71d.js";import{b as K,c as X,d as Z,e as _,f as h,u as ee}from"./index-47d869f0.js";const te=e("h3",null,"坐标：",-1),ne={"mt-1":""},le=e("h3",null,"存储",-1),ie=P({__name:"aD",setup(oe){const{x:c,y:v}=K({type:"client",touch:!1,resetOnTouchEnds:!1,initialValue:{x:100,y:200}});console.log(c,v);const{count:B,inc:f,dec:y,set:M,reset:T}=I(1),s=X("my-lol",{name:"ty",type:"职员1",camp:"aaaa"}),Y=()=>{s.value={name:"zyp",type:"职员2",camp:"bbbb"}},E=()=>{s.value=null},x=i(0),L=q(()=>{x.value+=1},1e3,{maxWait:5e3}),O=()=>{L()},u=i("Hello"),k=Q(()=>`${u.value} -- Hello`);Z(k),u.value="Hi";const b=i(),{isFullscreen:U,toggle:C,enter:g,exit:D}=_(b),z=G(h(),"YYYY-MM-DD HH:mm:ss"),R=i(),r=i("");return ee(R,([$])=>{const{height:t,width:a}=$.contentRect;r.value=`${a};${t}`}),($,t)=>{var F,H,V;const a=J;return W(),j(A,null,[e("div",null,[te,e("div",ne,"x:"+o(n(c)),1),e("div",null,"y:"+o(n(v)),1)]),e("div",null,[e("h3",null,"计数："+o(n(B)),1),e("button",{onClick:t[0]||(t[0]=l=>n(f)())},"Increment"),e("button",{onClick:t[1]||(t[1]=l=>n(y)())},"Decrement"),e("button",{onClick:t[2]||(t[2]=l=>n(f)(5.5))},"Increment (+5.5)"),e("button",{onClick:t[3]||(t[3]=l=>n(y)(5))},"Decrement (-5)"),e("button",{onClick:t[4]||(t[4]=l=>n(M)(100))},"Set (100)"),e("button",{onClick:t[5]||(t[5]=l=>n(T)())},"Reset")]),e("div",null,[le,e("p",null,"名称："+o((F=n(s))==null?void 0:F.name)+"-"+o((H=n(s))==null?void 0:H.type)+"-"+o((V=n(s))==null?void 0:V.camp),1),d(a,{type:"primary",onClick:Y},{default:m(()=>[p("UseLocalStorage")]),_:1}),d(a,{type:"primary",onClick:E},{default:m(()=>[p("Reset")]),_:1})]),e("div",null,[e("h3",null,"防抖"+o(n(x)),1),d(a,{type:"primary",onClick:O},{default:m(()=>[p("按钮")]),_:1})]),e("div",null,[e("h3",null,"title "+o(n(k)),1),w(e("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=l=>S(u)?u.value=l:null)},null,512),[[N,n(u)]])]),e("div",null,[e("div",{class:"test",ref_key:"testRef",ref:b},[p(" 全屏测试"+o(n(U))+" ",1),e("span",{"m-5px":"",onClick:t[7]||(t[7]=(...l)=>n(C)&&n(C)(...l)),"cursor-pointer":""},"全屏toggle"),e("span",{"m-5px":"",onClick:t[8]||(t[8]=(...l)=>n(g)&&n(g)(...l)),"cursor-pointer":""},"全屏enter"),e("span",{"m-5px":"",onClick:t[9]||(t[9]=(...l)=>n(D)&&n(D)(...l)),"cursor-pointer":""},"全屏exit")],512)]),e("div",null,[e("h3",null,"日期对象 "+o(n(z)),1)]),e("div",null,[w(e("textarea",{ref_key:"textRef",ref:R,"onUpdate:modelValue":t[10]||(t[10]=l=>S(r)?r.value=l:null)},null,512),[[N,n(r)]])])],64)}}});export{ie as default};
