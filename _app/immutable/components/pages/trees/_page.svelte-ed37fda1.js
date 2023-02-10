var dl=Object.defineProperty;var _l=(l,e,t)=>e in l?dl(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var Ye=(l,e,t)=>(_l(l,typeof e!="symbol"?e+"":e,t),t);import{S as Xe,i as Ke,s as Ze,I as qe,e as Gt,J as Le,m,h,n as _,b as D,C as c,B as wt,Q as Jt,q as E,r as w,u as We,H as pl,k as v,a as P,w as R,l as b,c as A,x as V,V as Qt,L as Ge,R as Xt,y as M,M as Te,N as gl,f as T,t as O,z as F,T as il,W as ml,O as vl,U as Ie,g as kt,d as yt,D as bl,E as $l,F as El,G as wl,X as Je,p as kl,Y as Qe}from"../../../chunks/index-35f27d8e.js";import{C as yl,F as Tl,a as ke,E as Il}from"../../../chunks/Footer-4ea6aa19.js";import{I as Tt}from"../../../chunks/Icon-7f077144.js";class Oe{constructor(e,t=void 0,n=void 0){Ye(this,"data");Ye(this,"left",null);Ye(this,"right",null);this.data=e,this.left=t!==void 0?t:null,this.right=n!==void 0?n:null}copy(){var e,t;return new Oe(this.data,(e=this.left)==null?void 0:e.copy(),(t=this.right)==null?void 0:t.copy())}equals(e){var n,r;let t=this.data===e.data;return(!this.left!=!e.left||e.left&&!((n=this.left)!=null&&n.equals(e.left)))&&(t=!1),(!this.right!=!e.right||e.right&&!((r=this.right)!=null&&r.equals(e.right)))&&(t=!1),t}preOrderTraversal(){var e,t;return[this.data,...((e=this.left)==null?void 0:e.preOrderTraversal())||[],...((t=this.right)==null?void 0:t.preOrderTraversal())||[]]}inOrderTraversal(){var e,t;return[...((e=this.left)==null?void 0:e.inOrderTraversal())||[],this.data,...((t=this.right)==null?void 0:t.inOrderTraversal())||[]]}postOrderTraversal(){var e,t;return[...((e=this.left)==null?void 0:e.postOrderTraversal())||[],...((t=this.right)==null?void 0:t.postOrderTraversal())||[],this.data]}}function It(l,e){if(e.length===0||l.length===0)return[];const t=l[0],n=fl(e,t);if(n.length===0)throw new Dt('Malformed or mismatching traversals – cannot find "'+t+'" in the appropriate sequence of the inorder traversal: '+e);if(e.length===1||l.length===1)return[new Oe(t)];const r=[];for(let a of n){let s=It(l.slice(1,a+1),e.slice(0,a)),o=It(l.slice(a+1),e.slice(a+1));for(let u of s.length>0?s:[null])for(let i of o.length>0?o:[null])r.push(new Oe(t,u,i))}return r}function Ot(l,e){if(l.length===0||e.length===0)return[];const t=e.at(-1),n=fl(l,t);if(n.length===0)throw new Dt('Malformed or mismatching traversals – cannot find "'+t+'" in the appropriate sequence of the inorder traversal: '+l);if(l.length===1||e.length===1)return[new Oe(t)];const r=[];for(let a of n){const s=Ot(l.slice(0,a),e.slice(0,a)),o=Ot(l.slice(a+1),e.slice(a,-1));for(let u of s.length>0?s:[null])for(let i of o.length>0?o:[null])r.push(new Oe(t,u,i))}return r}function fl(l,e){const t=[];for(let n=0;n<l.length;n++)l[n]===e&&t.push(n);return t}class Dt extends Error{constructor(e,t=void 0){super(e,t)}}function Kt(l,e,t){const n=l.slice();return n[2]=e[t],n}function Zt(l,e,t){const n=l.slice();return n[5]=e[t],n}function St(l){let e,t,n,r,a=l[5].content+"",s,o,u;return{c(){e=qe("circle"),r=qe("text"),s=E(a),this.h()},l(i){e=Le(i,"circle",{cx:!0,cy:!0,r:!0,fill:!0,stroke:!0}),m(e).forEach(h),r=Le(i,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0});var d=m(r);s=w(d,a),d.forEach(h),this.h()},h(){_(e,"cx",t=l[5].x),_(e,"cy",n=l[5].y),_(e,"r",j/2),_(e,"fill","none"),_(e,"stroke","black"),_(r,"x",o=l[5].x),_(r,"y",u=l[5].y),_(r,"dominant-baseline","middle"),_(r,"text-anchor","middle")},m(i,d){D(i,e,d),D(i,r,d),c(r,s)},p(i,d){d&1&&t!==(t=i[5].x)&&_(e,"cx",t),d&1&&n!==(n=i[5].y)&&_(e,"cy",n),d&1&&a!==(a=i[5].content+"")&&We(s,a),d&1&&o!==(o=i[5].x)&&_(r,"x",o),d&1&&u!==(u=i[5].y)&&_(r,"y",u)},d(i){i&&h(e),i&&h(r)}}}function xt(l){let e,t,n,r,a;return{c(){e=qe("line"),this.h()},l(s){e=Le(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0}),m(e).forEach(h),this.h()},h(){_(e,"x1",t=l[2].x1),_(e,"y1",n=l[2].y1),_(e,"x2",r=l[2].x2),_(e,"y2",a=l[2].y2),_(e,"stroke","black")},m(s,o){D(s,e,o)},p(s,o){o&1&&t!==(t=s[2].x1)&&_(e,"x1",t),o&1&&n!==(n=s[2].y1)&&_(e,"y1",n),o&1&&r!==(r=s[2].x2)&&_(e,"x2",r),o&1&&a!==(a=s[2].y2)&&_(e,"y2",a)},d(s){s&&h(e)}}}function Ol(l){let e,t,n,r,a=l[0].nodes,s=[];for(let i=0;i<a.length;i+=1)s[i]=St(Zt(l,a,i));let o=l[0].lines,u=[];for(let i=0;i<o.length;i+=1)u[i]=xt(Kt(l,o,i));return{c(){e=qe("svg"),t=qe("g");for(let i=0;i<s.length;i+=1)s[i].c();n=Gt();for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){e=Le(i,"svg",{viewBox:!0,preserveAspectRatio:!0});var d=m(e);t=Le(d,"g",{transform:!0});var f=m(t);for(let p=0;p<s.length;p+=1)s[p].l(f);n=Gt();for(let p=0;p<u.length;p+=1)u[p].l(f);f.forEach(h),d.forEach(h),this.h()},h(){_(t,"transform","translate(20, 20)"),_(e,"viewBox",r="0 0 "+(l[0].width+40)+" "+(l[0].height+40)),_(e,"preserveAspectRatio","xMidYMid meet")},m(i,d){D(i,e,d),c(e,t);for(let f=0;f<s.length;f+=1)s[f].m(t,null);c(t,n);for(let f=0;f<u.length;f+=1)u[f].m(t,null)},p(i,[d]){if(d&1){a=i[0].nodes;let f;for(f=0;f<a.length;f+=1){const p=Zt(i,a,f);s[f]?s[f].p(p,d):(s[f]=St(p),s[f].c(),s[f].m(t,n))}for(;f<s.length;f+=1)s[f].d(1);s.length=a.length}if(d&1){o=i[0].lines;let f;for(f=0;f<o.length;f+=1){const p=Kt(i,o,f);u[f]?u[f].p(p,d):(u[f]=xt(p),u[f].c(),u[f].m(t,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=o.length}d&1&&r!==(r="0 0 "+(i[0].width+40)+" "+(i[0].height+40))&&_(e,"viewBox",r)},i:wt,o:wt,d(i){i&&h(e),Jt(s,i),Jt(u,i)}}}const j=20,ye=20,bt=20;function Bt(l,e,t){if(t===null)return null;const n=[],r=Bt(l,e,t.left);let a=r?r.width:0,s=a>0?bt:0;const o=Bt(l+(a||j)+s,e,t.right),u={x:l+a+s/2+j/2,y:e+j/2};r&&n.push({x1:u.x,y1:e+j,x2:r.nodes[0].x,y2:e+j+ye}),o&&n.push({x1:u.x,y1:e+j,x2:o.nodes[0].x,y2:e+j+ye});for(let d of[...(r==null?void 0:r.lines)||[],...(o==null?void 0:o.lines)||[]])d.y1+=j+ye,d.y2+=j+ye,n.push(d);for(let d of[...(r==null?void 0:r.nodes)||[],...(o==null?void 0:o.nodes)||[]])d.y+=j+ye;const i={content:t.data,x:u.x,y:u.y};return{width:(((r==null?void 0:r.width)||0)+((o==null?void 0:o.width)||0)||j-bt)+bt,height:j+ye+Math.max((r==null?void 0:r.height)||0,(o==null?void 0:o.height)||0),nodes:[i,...(r==null?void 0:r.nodes)||[],...(o==null?void 0:o.nodes)||[]],lines:n}}function Bl(l,e,t){let{tree:n}=e,r;return l.$$set=a=>{"tree"in a&&t(1,n=a.tree)},l.$$.update=()=>{l.$$.dirty&2&&t(0,r=Bt(0,0,n))},[r,n]}class Dl extends Xe{constructor(e){super(),Ke(this,e,Bl,Ol,Ze,{tree:1})}}function Cl(l){let e,t,n,r,a,s,o,u,i=[{type:"text"},{placeholder:l[2]},l[1]],d={};for(let f=0;f<i.length;f+=1)d=pl(d,i[f]);return a=new Tt({props:{name:"x"}}),{c(){e=v("div"),t=v("input"),n=P(),r=v("div"),R(a.$$.fragment),this.h()},l(f){e=b(f,"DIV",{class:!0});var p=m(e);t=b(p,"INPUT",{type:!0,placeholder:!0}),n=A(p),r=b(p,"DIV",{class:!0});var $=m(r);V(a.$$.fragment,$),$.forEach(h),p.forEach(h),this.h()},h(){Qt(t,d),Ge(t,"svelte-7ri7rk",!0),_(r,"class","clear-button svelte-7ri7rk"),Ge(r,"hidden",l[0].trim().length===0),_(e,"class","clearable-input svelte-7ri7rk")},m(f,p){D(f,e,p),c(e,t),t.autofocus&&t.focus(),l[7](t),Xt(t,l[0]),c(e,n),c(e,r),M(a,r,null),s=!0,o||(u=[Te(t,"input",l[8]),Te(t,"input",l[6]),Te(r,"click",l[3])],o=!0)},p(f,[p]){Qt(t,d=gl(i,[{type:"text"},(!s||p&4)&&{placeholder:f[2]},p&2&&f[1]])),p&1&&t.value!==f[0]&&Xt(t,f[0]),Ge(t,"svelte-7ri7rk",!0),(!s||p&1)&&Ge(r,"hidden",f[0].trim().length===0)},i(f){s||(T(a.$$.fragment,f),s=!0)},o(f){O(a.$$.fragment,f),s=!1},d(f){f&&h(e),l[7](null),F(a),o=!1,il(u)}}}function Pl(l,e,t){let{inputProps:n}=e,{value:r}=e,{placeholder:a}=e,s;const o=ml();function u(){t(0,r=""),o("clear")}function i(){s.focus()}function d($){vl.call(this,l,$)}function f($){Ie[$?"unshift":"push"](()=>{s=$,t(4,s)})}function p(){r=this.value,t(0,r)}return l.$$set=$=>{"inputProps"in $&&t(1,n=$.inputProps),"value"in $&&t(0,r=$.value),"placeholder"in $&&t(2,a=$.placeholder)},[r,n,a,u,s,i,d,f,p]}class $t extends Xe{constructor(e){super(),Ke(this,e,Pl,Cl,Ze,{inputProps:1,value:0,placeholder:2,clear:3,focus:5})}get clear(){return this.$$.ctx[3]}get focus(){return this.$$.ctx[5]}}const Al=l=>({option:l&1}),el=l=>({option:l[0]});function tl(l){let e,t,n,r,a,s=l[0]+1+"",o,u,i,d,f,p,$,I,N,Z;return n=new Tt({props:{name:"arrow-left"}}),p=new Tt({props:{name:"arrow-right"}}),{c(){e=v("div"),t=v("button"),R(n.$$.fragment),a=E(`
            Showing option `),o=E(s),u=E(" of "),i=E(l[1]),d=P(),f=v("button"),R(p.$$.fragment),this.h()},l(B){e=b(B,"DIV",{class:!0});var y=m(e);t=b(y,"BUTTON",{class:!0});var S=m(t);V(n.$$.fragment,S),S.forEach(h),a=w(y,`
            Showing option `),o=w(y,s),u=w(y," of "),i=w(y,l[1]),d=A(y),f=b(y,"BUTTON",{class:!0});var W=m(f);V(p.$$.fragment,W),W.forEach(h),y.forEach(h),this.h()},h(){t.disabled=r=l[0]===0,_(t,"class","svelte-1r8i052"),f.disabled=$=l[0]===l[1]-1,_(f,"class","svelte-1r8i052"),_(e,"class","switcher-controls svelte-1r8i052")},m(B,y){D(B,e,y),c(e,t),M(n,t,null),c(e,a),c(e,o),c(e,u),c(e,i),c(e,d),c(e,f),M(p,f,null),I=!0,N||(Z=[Te(t,"click",l[3]),Te(f,"click",l[2])],N=!0)},p(B,y){(!I||y&1&&r!==(r=B[0]===0))&&(t.disabled=r),(!I||y&1)&&s!==(s=B[0]+1+"")&&We(o,s),(!I||y&2)&&We(i,B[1]),(!I||y&3&&$!==($=B[0]===B[1]-1))&&(f.disabled=$)},i(B){I||(T(n.$$.fragment,B),T(p.$$.fragment,B),I=!0)},o(B){O(n.$$.fragment,B),O(p.$$.fragment,B),I=!1},d(B){B&&h(e),F(n),F(p),N=!1,il(Z)}}}function ll(l){let e;const t=l[5].default,n=bl(t,l,l[4],el);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,a){n&&n.m(r,a),e=!0},p(r,a){n&&n.p&&(!e||a&17)&&$l(n,t,r,r[4],e?wl(t,r[4],a,Al):El(r[4]),el)},i(r){e||(T(n,r),e=!0)},o(r){O(n,r),e=!1},d(r){n&&n.d(r)}}}function Nl(l){let e,t,n,r=l[1]>1&&tl(l),a=l[1]>0&&ll(l);return{c(){e=v("div"),r&&r.c(),t=P(),a&&a.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var o=m(e);r&&r.l(o),t=A(o),a&&a.l(o),o.forEach(h),this.h()},h(){_(e,"class","switcher svelte-1r8i052")},m(s,o){D(s,e,o),r&&r.m(e,null),c(e,t),a&&a.m(e,null),n=!0},p(s,[o]){s[1]>1?r?(r.p(s,o),o&2&&T(r,1)):(r=tl(s),r.c(),T(r,1),r.m(e,t)):r&&(kt(),O(r,1,1,()=>{r=null}),yt()),s[1]>0?a?(a.p(s,o),o&2&&T(a,1)):(a=ll(s),a.c(),T(a,1),a.m(e,null)):a&&(kt(),O(a,1,1,()=>{a=null}),yt())},i(s){n||(T(r),T(a),n=!0)},o(s){O(r),O(a),n=!1},d(s){s&&h(e),r&&r.d(),a&&a.d()}}}function Rl(l,e,t){let{$$slots:n={},$$scope:r}=e,{numberOfOptions:a}=e,{currentIndex:s=0}=e;function o(){t(0,s++,s)}function u(){t(0,s--,s)}return l.$$set=i=>{"numberOfOptions"in i&&t(1,a=i.numberOfOptions),"currentIndex"in i&&t(0,s=i.currentIndex),"$$scope"in i&&t(4,r=i.$$scope)},[s,a,o,u,r,n]}class Vl extends Xe{constructor(e){super(),Ke(this,e,Rl,Nl,Ze,{numberOfOptions:1,currentIndex:0})}}function Fe(l,e){if(l===e)return!0;if(l==null||e==null||l.length!==e.length)return!1;for(let t=0;t<l.length;++t)if(l[t]!==e[t])return!1;return!0}function nl(l,e){if(l.length!==e.length)return!1;const t=new Map;return l.forEach(n=>t.set(n,(t.get(n)??0)+1)),e.forEach(n=>t.set(n,(t.get(n)??0)-1)),Array.from(t.values()).every(n=>n===0)}function Ml(l){let e,t;return e=new Il({props:{message:"Input your tree traversals or use the<br> examples to get started."}}),e.$on("click",l[13]),{c(){R(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,r){M(e,n,r),t=!0},p:wt,i(n){t||(T(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function Fl(l){let e,t,n;function r(s){l[18](s)}let a={numberOfOptions:l[7].length,$$slots:{default:[ql]},$$scope:{ctx:l}};return l[8]!==void 0&&(a.currentIndex=l[8]),e=new Vl({props:a}),Ie.push(()=>Je(e,"currentIndex",r)),{c(){R(e.$$.fragment)},l(s){V(e.$$.fragment,s)},m(s,o){M(e,s,o),n=!0},p(s,o){const u={};o&128&&(u.numberOfOptions=s[7].length),o&1049008&&(u.$$scope={dirty:o,ctx:s}),!t&&o&256&&(t=!0,u.currentIndex=s[8],Qe(()=>t=!1)),e.$set(u)},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){O(e.$$.fragment,s),n=!1},d(s){F(e,s)}}}function rl(l){let e,t,n,r;return{c(){e=v("div"),t=v("b"),n=E("Warning:"),r=E(` This tree has been generated even though it's preorder traversal does
                            not match the one you entered. This is likely a bug within this tool. Consider this
                            tree carefully!`),this.h()},l(a){e=b(a,"DIV",{class:!0});var s=m(e);t=b(s,"B",{});var o=m(t);n=w(o,"Warning:"),o.forEach(h),r=w(s,` This tree has been generated even though it's preorder traversal does
                            not match the one you entered. This is likely a bug within this tool. Consider this
                            tree carefully!`),s.forEach(h),this.h()},h(){_(e,"class","warning svelte-14eoy5a")},m(a,s){D(a,e,s),c(e,t),c(t,n),c(e,r)},d(a){a&&h(e)}}}function sl(l){let e,t,n,r;return{c(){e=v("div"),t=v("b"),n=E("Warning:"),r=E(` This tree has been generated even though it's inorder traversal does
                            not match the one you entered. This is likely a bug within this tool. Consider this
                            tree carefully!`),this.h()},l(a){e=b(a,"DIV",{class:!0});var s=m(e);t=b(s,"B",{});var o=m(t);n=w(o,"Warning:"),o.forEach(h),r=w(s,` This tree has been generated even though it's inorder traversal does
                            not match the one you entered. This is likely a bug within this tool. Consider this
                            tree carefully!`),s.forEach(h),this.h()},h(){_(e,"class","warning svelte-14eoy5a")},m(a,s){D(a,e,s),c(e,t),c(t,n),c(e,r)},d(a){a&&h(e)}}}function ql(l){let e=l[4].length!==0&&!Fe(l[7][l[8]].preOrderTraversal(),l[4]),t,n=l[5].length!==0&&!Fe(l[7][l[8]].inOrderTraversal(),l[5]),r,a,s,o=e&&rl(),u=n&&sl();return a=new Dl({props:{tree:l[7][l[8]]}}),{c(){o&&o.c(),t=P(),u&&u.c(),r=P(),R(a.$$.fragment)},l(i){o&&o.l(i),t=A(i),u&&u.l(i),r=A(i),V(a.$$.fragment,i)},m(i,d){o&&o.m(i,d),D(i,t,d),u&&u.m(i,d),D(i,r,d),M(a,i,d),s=!0},p(i,d){d&400&&(e=i[4].length!==0&&!Fe(i[7][i[8]].preOrderTraversal(),i[4])),e?o||(o=rl(),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),d&416&&(n=i[5].length!==0&&!Fe(i[7][i[8]].inOrderTraversal(),i[5])),n?u||(u=sl(),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null);const f={};d&384&&(f.tree=i[7][i[8]]),a.$set(f)},i(i){s||(T(a.$$.fragment,i),s=!0)},o(i){O(a.$$.fragment,i),s=!1},d(i){o&&o.d(i),i&&h(t),u&&u.d(i),i&&h(r),F(a,i)}}}function Ll(l){let e,t,n,r,a,s,o;const u=[Fl,Ml],i=[];function d(f,p){return f[7].length>0?0:1}return n=d(l),r=i[n]=u[n](l),s=new Tl({}),{c(){e=v("div"),t=v("div"),r.c(),a=P(),R(s.$$.fragment),this.h()},l(f){e=b(f,"DIV",{class:!0});var p=m(e);t=b(p,"DIV",{class:!0});var $=m(t);r.l($),$.forEach(h),a=A(p),V(s.$$.fragment,p),p.forEach(h),this.h()},h(){_(t,"class","output svelte-14eoy5a"),_(e,"class","main svelte-14eoy5a")},m(f,p){D(f,e,p),c(e,t),i[n].m(t,null),c(e,a),M(s,e,null),o=!0},p(f,p){let $=n;n=d(f),n===$?i[n].p(f,p):(kt(),O(i[$],1,1,()=>{i[$]=null}),yt(),r=i[n],r?r.p(f,p):(r=i[n]=u[n](f),r.c()),T(r,1),r.m(t,null))},i(f){o||(T(r),T(s.$$.fragment,f),o=!0)},o(f){O(r),O(s.$$.fragment,f),o=!1},d(f){f&&h(e),i[n].d(),F(s)}}}function Wl(l){let e;return{c(){e=E("5  3  0  1  7  9  8  9")},l(t){e=w(t,"5  3  0  1  7  9  8  9")},m(t,n){D(t,e,n)},d(t){t&&h(e)}}}function Ul(l){let e;return{c(){e=E("A B D E C F")},l(t){e=w(t,"A B D E C F")},m(t,n){D(t,e,n)},d(t){t&&h(e)}}}function jl(l){let e;return{c(){e=E("0  1  3  5  7  8  9  9")},l(t){e=w(t,"0  1  3  5  7  8  9  9")},m(t,n){D(t,e,n)},d(t){t&&h(e)}}}function zl(l){let e;return{c(){e=E("D B E A F C")},l(t){e=w(t,"D B E A F C")},m(t,n){D(t,e,n)},d(t){t&&h(e)}}}function Hl(l){let e;return{c(){e=E("1 0 3 8 9 9 7 5")},l(t){e=w(t,"1 0 3 8 9 9 7 5")},m(t,n){D(t,e,n)},d(t){t&&h(e)}}}function Yl(l){let e;return{c(){e=E("D E B F C A")},l(t){e=w(t,"D E B F C A")},m(t,n){D(t,e,n)},d(t){t&&h(e)}}}function al(l){let e,t,n,r,a;return{c(){e=v("div"),t=v("b"),n=E("Warning:"),r=P(),a=E(l[9]),this.h()},l(s){e=b(s,"DIV",{class:!0});var o=m(e);t=b(o,"B",{});var u=m(t);n=w(u,"Warning:"),u.forEach(h),r=A(o),a=w(o,l[9]),o.forEach(h),this.h()},h(){_(e,"class","warning svelte-14eoy5a")},m(s,o){D(s,e,o),c(e,t),c(t,n),c(e,r),c(e,a)},p(s,o){o&512&&We(a,s[9])},d(s){s&&h(e)}}}function ol(l){let e,t,n,r,a;return{c(){e=v("div"),t=v("b"),n=E("Error:"),r=P(),a=E(l[10]),this.h()},l(s){e=b(s,"DIV",{class:!0});var o=m(e);t=b(o,"B",{});var u=m(t);n=w(u,"Error:"),u.forEach(h),r=A(o),a=w(o,l[10]),o.forEach(h),this.h()},h(){_(e,"class","error svelte-14eoy5a")},m(s,o){D(s,e,o),c(e,t),c(t,n),c(e,r),c(e,a)},p(s,o){o&1024&&We(a,s[10])},d(s){s&&h(e)}}}function Gl(l){var Rt,Vt,Mt,Ft,qt,Lt;let e,t,n,r,a,s,o,u,i,d,f,p,$,I,N,Z,B,y,S,W,Be,H,C,J,ie,ge,De,Se,xe,et,tt,x,Y,lt,nt,Q,rt,ee,st,te,at,fe,me,ve,Ce,ot,it,ft,le,G,ut,ct,X,ht,ne,dt,re,_t,Pe,z,Ue,pt,Ae,ue,K,gt,je,Ne,mt,Ct;function ul(g){l[15](g)}let Pt={placeholder:((Vt=(Rt=l[7][l[8]])==null?void 0:Rt.preOrderTraversal())==null?void 0:Vt.join(" "))||""};l[1]!==void 0&&(Pt.value=l[1]),N=new $t({props:Pt}),l[14](N),Ie.push(()=>Je(N,"value",ul)),N.$on("input",l[11]),W=new ke({props:{$$slots:{default:[Wl]},$$scope:{ctx:l}}}),H=new ke({props:{$$slots:{default:[Ul]},$$scope:{ctx:l}}});function cl(g){l[16](g)}let At={placeholder:((Ft=(Mt=l[7][l[8]])==null?void 0:Mt.inOrderTraversal())==null?void 0:Ft.join(" "))||""};l[2]!==void 0&&(At.value=l[2]),Y=new $t({props:At}),Ie.push(()=>Je(Y,"value",cl)),Y.$on("input",l[11]),ee=new ke({props:{$$slots:{default:[jl]},$$scope:{ctx:l}}}),te=new ke({props:{$$slots:{default:[zl]},$$scope:{ctx:l}}});function hl(g){l[17](g)}let Nt={placeholder:((Lt=(qt=l[7][l[8]])==null?void 0:qt.postOrderTraversal())==null?void 0:Lt.join(" "))||""};l[3]!==void 0&&(Nt.value=l[3]),G=new $t({props:Nt}),Ie.push(()=>Je(G,"value",hl)),G.$on("input",l[11]),ne=new ke({props:{$$slots:{default:[Hl]},$$scope:{ctx:l}}}),re=new ke({props:{$$slots:{default:[Yl]},$$scope:{ctx:l}}});let q=l[9]&&al(l),L=l[10]&&ol(l);return{c(){e=v("div"),t=v("h1"),n=E("Tree constructor"),r=P(),a=v("table"),s=v("tr"),o=v("td"),u=v("label"),i=v("b"),d=E("Pre"),f=E("order:"),p=v("br"),$=P(),I=v("td"),R(N.$$.fragment),B=P(),y=v("span"),S=E("e.g. "),R(W.$$.fragment),Be=E(" or "),R(H.$$.fragment),C=P(),J=v("tr"),ie=v("td"),ge=v("label"),De=v("b"),Se=E("In"),xe=E("order:"),et=v("br"),tt=P(),x=v("td"),R(Y.$$.fragment),nt=P(),Q=v("span"),rt=E("e.g. "),R(ee.$$.fragment),st=E(" or "),R(te.$$.fragment),at=P(),fe=v("tr"),me=v("td"),ve=v("label"),Ce=v("b"),ot=E("Post"),it=E("order:"),ft=P(),le=v("td"),R(G.$$.fragment),ct=P(),X=v("span"),ht=E("e.g. "),R(ne.$$.fragment),dt=E(" or "),R(re.$$.fragment),_t=P(),Pe=v("tr"),z=v("td"),q&&q.c(),Ue=P(),L&&L.c(),pt=P(),Ae=v("tr"),ue=v("td"),K=v("button"),gt=E("CONSTRUCT TREE"),this.h()},l(g){e=b(g,"DIV",{class:!0,slot:!0});var k=m(e);t=b(k,"H1",{style:!0});var be=m(t);n=w(be,"Tree constructor"),be.forEach(h),r=A(k),a=b(k,"TABLE",{class:!0});var U=m(a);s=b(U,"TR",{});var ce=m(s);o=b(ce,"TD",{class:!0});var he=m(o);u=b(he,"LABEL",{});var $e=m(u);i=b($e,"B",{});var Re=m(i);d=w(Re,"Pre"),Re.forEach(h),f=w($e,"order:"),$e.forEach(h),p=b(he,"BR",{}),he.forEach(h),$=A(ce),I=b(ce,"TD",{class:!0});var se=m(I);V(N.$$.fragment,se),B=A(se),y=b(se,"SPAN",{class:!0});var ae=m(y);S=w(ae,"e.g. "),V(W.$$.fragment,ae),Be=w(ae," or "),V(H.$$.fragment,ae),ae.forEach(h),se.forEach(h),ce.forEach(h),C=A(U),J=b(U,"TR",{});var de=m(J);ie=b(de,"TD",{class:!0});var Ee=m(ie);ge=b(Ee,"LABEL",{});var we=m(ge);De=b(we,"B",{});var Ve=m(De);Se=w(Ve,"In"),Ve.forEach(h),xe=w(we,"order:"),we.forEach(h),et=b(Ee,"BR",{}),Ee.forEach(h),tt=A(de),x=b(de,"TD",{class:!0});var _e=m(x);V(Y.$$.fragment,_e),nt=A(_e),Q=b(_e,"SPAN",{class:!0});var oe=m(Q);rt=w(oe,"e.g. "),V(ee.$$.fragment,oe),st=w(oe," or "),V(te.$$.fragment,oe),oe.forEach(h),_e.forEach(h),de.forEach(h),at=A(U),fe=b(U,"TR",{});var pe=m(fe);me=b(pe,"TD",{class:!0});var Wt=m(me);ve=b(Wt,"LABEL",{});var vt=m(ve);Ce=b(vt,"B",{});var Ut=m(Ce);ot=w(Ut,"Post"),Ut.forEach(h),it=w(vt,"order:"),vt.forEach(h),Wt.forEach(h),ft=A(pe),le=b(pe,"TD",{class:!0});var ze=m(le);V(G.$$.fragment,ze),ct=A(ze),X=b(ze,"SPAN",{class:!0});var Me=m(X);ht=w(Me,"e.g. "),V(ne.$$.fragment,Me),dt=w(Me," or "),V(re.$$.fragment,Me),Me.forEach(h),ze.forEach(h),pe.forEach(h),_t=A(U),Pe=b(U,"TR",{});var jt=m(Pe);z=b(jt,"TD",{colspan:!0,class:!0});var He=m(z);q&&q.l(He),Ue=A(He),L&&L.l(He),He.forEach(h),jt.forEach(h),pt=A(U),Ae=b(U,"TR",{});var zt=m(Ae);ue=b(zt,"TD",{colspan:!0,class:!0});var Ht=m(ue);K=b(Ht,"BUTTON",{class:!0});var Yt=m(K);gt=w(Yt,"CONSTRUCT TREE"),Yt.forEach(h),Ht.forEach(h),zt.forEach(h),U.forEach(h),k.forEach(h),this.h()},h(){kl(t,"text-align","center"),_(o,"class","svelte-14eoy5a"),_(y,"class","subnote"),_(I,"class","svelte-14eoy5a"),_(ie,"class","svelte-14eoy5a"),_(Q,"class","subnote"),_(x,"class","svelte-14eoy5a"),_(me,"class","svelte-14eoy5a"),_(X,"class","subnote"),_(le,"class","svelte-14eoy5a"),_(z,"colspan","2"),_(z,"class","svelte-14eoy5a"),K.disabled=je=!l[6],_(K,"class","svelte-14eoy5a"),_(ue,"colspan","2"),_(ue,"class","svelte-14eoy5a"),_(a,"class","form-table svelte-14eoy5a"),_(e,"class","form"),_(e,"slot","sidebar")},m(g,k){D(g,e,k),c(e,t),c(t,n),c(e,r),c(e,a),c(a,s),c(s,o),c(o,u),c(u,i),c(i,d),c(u,f),c(o,p),c(s,$),c(s,I),M(N,I,null),c(I,B),c(I,y),c(y,S),M(W,y,null),c(y,Be),M(H,y,null),c(a,C),c(a,J),c(J,ie),c(ie,ge),c(ge,De),c(De,Se),c(ge,xe),c(ie,et),c(J,tt),c(J,x),M(Y,x,null),c(x,nt),c(x,Q),c(Q,rt),M(ee,Q,null),c(Q,st),M(te,Q,null),c(a,at),c(a,fe),c(fe,me),c(me,ve),c(ve,Ce),c(Ce,ot),c(ve,it),c(fe,ft),c(fe,le),M(G,le,null),c(le,ct),c(le,X),c(X,ht),M(ne,X,null),c(X,dt),M(re,X,null),c(a,_t),c(a,Pe),c(Pe,z),q&&q.m(z,null),c(z,Ue),L&&L.m(z,null),c(a,pt),c(a,Ae),c(Ae,ue),c(ue,K),c(K,gt),Ne=!0,mt||(Ct=Te(K,"click",l[12]),mt=!0)},p(g,k){var Ee,we,Ve,_e,oe,pe;const be={};k&384&&(be.placeholder=((we=(Ee=g[7][g[8]])==null?void 0:Ee.preOrderTraversal())==null?void 0:we.join(" "))||""),!Z&&k&2&&(Z=!0,be.value=g[1],Qe(()=>Z=!1)),N.$set(be);const U={};k&1048576&&(U.$$scope={dirty:k,ctx:g}),W.$set(U);const ce={};k&1048576&&(ce.$$scope={dirty:k,ctx:g}),H.$set(ce);const he={};k&384&&(he.placeholder=((_e=(Ve=g[7][g[8]])==null?void 0:Ve.inOrderTraversal())==null?void 0:_e.join(" "))||""),!lt&&k&4&&(lt=!0,he.value=g[2],Qe(()=>lt=!1)),Y.$set(he);const $e={};k&1048576&&($e.$$scope={dirty:k,ctx:g}),ee.$set($e);const Re={};k&1048576&&(Re.$$scope={dirty:k,ctx:g}),te.$set(Re);const se={};k&384&&(se.placeholder=((pe=(oe=g[7][g[8]])==null?void 0:oe.postOrderTraversal())==null?void 0:pe.join(" "))||""),!ut&&k&8&&(ut=!0,se.value=g[3],Qe(()=>ut=!1)),G.$set(se);const ae={};k&1048576&&(ae.$$scope={dirty:k,ctx:g}),ne.$set(ae);const de={};k&1048576&&(de.$$scope={dirty:k,ctx:g}),re.$set(de),g[9]?q?q.p(g,k):(q=al(g),q.c(),q.m(z,Ue)):q&&(q.d(1),q=null),g[10]?L?L.p(g,k):(L=ol(g),L.c(),L.m(z,null)):L&&(L.d(1),L=null),(!Ne||k&64&&je!==(je=!g[6]))&&(K.disabled=je)},i(g){Ne||(T(N.$$.fragment,g),T(W.$$.fragment,g),T(H.$$.fragment,g),T(Y.$$.fragment,g),T(ee.$$.fragment,g),T(te.$$.fragment,g),T(G.$$.fragment,g),T(ne.$$.fragment,g),T(re.$$.fragment,g),Ne=!0)},o(g){O(N.$$.fragment,g),O(W.$$.fragment,g),O(H.$$.fragment,g),O(Y.$$.fragment,g),O(ee.$$.fragment,g),O(te.$$.fragment,g),O(G.$$.fragment,g),O(ne.$$.fragment,g),O(re.$$.fragment,g),Ne=!1},d(g){g&&h(e),l[14](null),F(N),F(W),F(H),F(Y),F(ee),F(te),F(G),F(ne),F(re),q&&q.d(),L&&L.d(),mt=!1,Ct()}}}function Jl(l){let e,t;return e=new yl({props:{$$slots:{sidebar:[Gl],default:[Ll]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,r){M(e,n,r),t=!0},p(n,[r]){const a={};r&1050623&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){t||(T(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function Et(l){const e=[];for(let t of l.trim().split(/\s+/g))t.length>0&&e.push(t);return e}function Ql(l,e,t){let n,r="",a="",s="",o,u,i,d=!1,f=[],p=0,$,I;function N(){t(6,d=!0)}function Z(){t(6,d=!1),t(9,$=null),t(10,I=null);try{if(t(4,o=Et(r)),t(5,u=Et(a)),i=Et(s),o.length>0&&u.length>0)if(nl(o,u)){if(console.log("Building tree from pre- and inorder"),t(7,f=It(o,u)),console.log(f),i.length>0){const C=f.filter(J=>Fe(J.postOrderTraversal(),i));C.length===0?t(9,$=`The postorder traversal you entered does not match with the given pre- & inorder traversals.
The tree has been constructed using pre- & inorder only.`):t(7,f=C)}}else t(10,I="Pre- and inorder traversals do not contain the same elements.");else u.length>0&&i.length>0?nl(u,i)?(console.log("Building tree from in- and postorder"),t(7,f=Ot(u,i)),console.log(f)):t(10,I="In- and postorder traversals do not contain the same elements."):t(10,I="Please supply the inorder traversal and one of pre- and postorder.")}catch(C){C instanceof Dt&&t(10,I=C.message)}I!=null&&t(7,f=[])}function B(){console.log(n),n.focus()}function y(C){Ie[C?"unshift":"push"](()=>{n=C,t(0,n)})}function S(C){r=C,t(1,r)}function W(C){a=C,t(2,a)}function Be(C){s=C,t(3,s)}function H(C){p=C,t(8,p)}return[n,r,a,s,o,u,d,f,p,$,I,N,Z,B,y,S,W,Be,H]}class xl extends Xe{constructor(e){super(),Ke(this,e,Ql,Jl,Ze,{})}}export{xl as default};
