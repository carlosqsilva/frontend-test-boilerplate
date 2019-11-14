(this["webpackJsonpfrontend-test-boilerplate"]=this["webpackJsonpfrontend-test-boilerplate"]||[]).push([[0],{26:function(e,t,a){e.exports=a(41)},31:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),l=(a(31),a(14)),s=a(21),c=a(10),d=a(7),m=a(5),u=(a(33),a(1));var h,p,b,f,v,g,w,E,y,j,O,B,x,M=new class{constructor(e){this.DB_NAME=void 0,this.DB_STORE=void 0,this.VERSION=void 0,this.DB=void 0,this.init=()=>new Promise((e,t)=>{const a=indexedDB.open(this.DB_NAME,this.VERSION);a.onerror=()=>t(a.error),a.onsuccess=t=>{this.DB=a.result,e(t)},a.onupgradeneeded=e=>{const t=e.target.result,a=t.objectStoreNames;for(const n of this.DB_STORE)a.contains(n.name)||t.createObjectStore(n.name,{keyPath:n.key})}}),this.save=(e,t)=>new Promise((a,n)=>{const r=this.DB.transaction(e,"readwrite"),i=r.objectStore(e);r.oncomplete=e=>a(e),r.onabort=e=>n(e),Array.isArray(t)?t.forEach(e=>{i.add(e)}):i.add(t)}),this.delete=(e,t)=>new Promise((a,n)=>{const r=this.DB.transaction(e,"readwrite"),i=r.objectStore(e);r.oncomplete=e=>a(e),r.onabort=e=>n(e),Array.prototype.concat([],t).forEach(e=>{i.delete(e)})}),this.update=(e,t)=>new Promise((a,n)=>{const r=this.DB.transaction(e,"readwrite").objectStore(e).put(t);r.onsuccess=e=>a(e),r.onerror=e=>n(e)}),this.getStore=e=>new Promise((t,a)=>{const n=this.DB.transaction(e).objectStore(e).getAll();n.onsuccess=({target:e})=>t(e.result),n.onerror=e=>a(e)}),this.DB_NAME=e.name,this.DB_STORE=e.store,this.VERSION=e.version||1}get(e,t){return new Promise((a,n)=>{const r=this.DB.transaction(e).objectStore(e).get(t);r.onsuccess=({target:e})=>a(e.result),r.onerror=e=>n(e)})}}({name:"fipe_api",store:[{name:"response",key:"url"}]});async function S(e){const t=await M.get("response",e);if(t)return t.response;{const t=await fetch(e);if(!t.ok)throw new Error(t.statusText);const a=await t.json();return M.update("response",{url:e,response:a}),a}}Object(u.f)({enforceActions:"observed"});const T={Valor:"",Marca:"",Modelo:"",AnoModelo:"",Combustivel:"",CodigoFipe:"",MesReferencia:"",TipoVeiculo:0,SiglaCombustivel:""};let D=(h=class{constructor(){Object(d.a)(this,"selectedType",p,this),Object(d.a)(this,"selectedBrand",b,this),Object(d.a)(this,"selectedModel",f,this),Object(d.a)(this,"selectedYear",v,this),Object(d.a)(this,"vehicleBrands",g,this),Object(d.a)(this,"vehicleModels",w,this),Object(d.a)(this,"vehicleYears",E,this),Object(d.a)(this,"vehicle",y,this),Object(d.a)(this,"selectVehicleType",j,this),Object(d.a)(this,"selectBrand",O,this),Object(d.a)(this,"selectModel",B,this),Object(d.a)(this,"selectYear",x,this)}get selectState(){return this.selectedBrand&&this.selectedModel&&this.selectedYear?3:this.selectedBrand&&this.selectedModel?2:this.selectedBrand?1:0}},p=Object(m.a)(h.prototype,"selectedType",[u.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"carros"}}),b=Object(m.a)(h.prototype,"selectedBrand",[u.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=Object(m.a)(h.prototype,"selectedModel",[u.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=Object(m.a)(h.prototype,"selectedYear",[u.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=Object(m.a)(h.prototype,"vehicleBrands",[u.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),w=Object(m.a)(h.prototype,"vehicleModels",[u.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),E=Object(m.a)(h.prototype,"vehicleYears",[u.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=Object(m.a)(h.prototype,"vehicle",[u.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return T}}),Object(m.a)(h.prototype,"selectState",[u.e],Object.getOwnPropertyDescriptor(h.prototype,"selectState"),h.prototype),j=Object(m.a)(h.prototype,"selectVehicleType",[u.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return async e=>{if(this.selectedType=e,this.selectedBrand=void 0,this.selectedModel=void 0,this.selectedYear=void 0,!e)return;const t=await S(`https://parallelum.com.br/fipe/api/v1/${e}/marcas`);Object(u.m)(()=>{this.vehicleBrands=t})}}}),O=Object(m.a)(h.prototype,"selectBrand",[u.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return async e=>{if(this.selectedBrand=e,this.selectedModel=void 0,this.selectedYear=void 0,console.log(e),!e)return;const t=await S(`https://parallelum.com.br/fipe/api/v1/${this.selectedType}/marcas/${this.selectedBrand}/modelos`);Object(u.m)(()=>{this.vehicleModels=t.modelos})}}}),B=Object(m.a)(h.prototype,"selectModel",[u.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return async e=>{if(this.selectedModel=e,this.selectedYear=void 0,!e)return;const t=await S(`https://parallelum.com.br/fipe/api/v1/${this.selectedType}/marcas/${this.selectedBrand}/modelos/${this.selectedModel}/anos`);Object(u.m)(()=>{this.vehicleYears=t})}}}),x=Object(m.a)(h.prototype,"selectYear",[u.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return async e=>{if(this.selectedYear=e,!e)return;const t=await S(`https://parallelum.com.br/fipe/api/v1/${this.selectedType}/marcas/${this.selectedBrand}/modelos/${this.selectedModel}/anos/${this.selectedYear}`);Object(u.m)(()=>{this.vehicle=t})}}}),h);var k=new class{constructor(){this.mainStore=void 0,this.mainStore=new D,M.init().then(()=>{this.mainStore.selectVehicleType("carros")})}};function z(e,t=[]){if(0===t.length)throw new Error("Stores must have at least one store name.");return Object(l.b)(...t)(Object(l.c)(e))}var C=a(43);const N=(...e)=>{const t=[];for(const a of e){let e=typeof a;if("string"===e)t.push(a);else if("object"===e)for(let n in a)a[n]&&t.push(n)}return t.join(" ")};var Y=a(3);const V=z((function({mainStore:{selectedType:e,selectVehicleType:t}}){return r.a.createElement(A,null,r.a.createElement("button",{className:N({active:"motos"===e}),onClick:()=>t("motos")},"Motos"),r.a.createElement("button",{className:N({active:"carros"===e}),onClick:()=>t("carros")},"Carros"),r.a.createElement("button",{className:N({active:"caminhoes"===e}),onClick:()=>t("caminhoes")},"Caminh\xf5es"))}),["mainStore"]);const A=Y.a.div`
  display: flex;
  justify-content: center;

  & button {
    appearance: none;
    border: 1px solid #eee;
    background: white;

    color: #333;
    font-size: 1rem;
    font-weight: 600;

    padding: 1rem 2rem;
  }

  & button.active {
    color: #fff;
    background: rgb(0, 176, 170);
    border-color: transparent;
  }

  & button:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  & button:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;var $=a(20),P=a.n($),R=a(24);const _=e=>r.a.createElement(I,null,r.a.createElement("input",Object.assign({type:"text",placeholder:"Buscar"},e)),r.a.createElement(R.a,null)),I=Y.a.label`
  border: 1px solid #333;
  border-radius: 4px;
  display: flex;
  align-items: center;

  padding: 1rem 1.5rem;
  overflow: hidden;

  width: 100%;

  & input {
    flex: 1;
    border: none;
    appearance: none;
    font-size: 1.2rem;

    outline: none;
  }

  & svg {
    color: #eee;
    transition: all 200ms ease;
  }

  &:hover svg,
  & input:focus ~ svg {
    color: #333;
  }
`;class J extends n.PureComponent{constructor(e){super(e),this.filterData=void 0,this.onChangeSearch=({target:{value:e}})=>{this.filterData(e)},this.state={searchTerm:""},this.filterData=P()(e=>{this.setState({searchTerm:e})},800)}render(){const e=this.state.searchTerm;let t=this.props,a=t.data,n=t.title;if(e){const t=new RegExp(e,"i");a=a.filter(e=>t.test(e.nome))}return r.a.createElement(W,null,r.a.createElement(_,{onChange:this.onChangeSearch}),r.a.createElement("h1",null,n),r.a.createElement(F,null,a.map(e=>r.a.createElement("li",{key:e.codigo,onClick:()=>this.props.select(e.codigo)},e.nome))))}}const W=Y.a.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: min-content min-content 1fr;
  overflow: hidden;

  position: absolute;
  width: 100%;
  bottom: 0;
  top: 0;
`,F=Y.a.ul`
  list-style: none;
  overflow: auto;

  & li {
    color: #242424;
    font-weight: 600;
    padding: 0.35rem;
    cursor: pointer;
  }

  & li:nth-child(even) {
    background: whitesmoke;
  }
`,q=({vehicle:e})=>r.a.createElement(G,null,r.a.createElement("h1",null,"Ve\xedculo"),r.a.createElement(H,null,r.a.createElement("p",null,"Marca: ",r.a.createElement("span",null,e.Marca)),r.a.createElement("p",null,"Modelo: ",r.a.createElement("span",null,e.Modelo)),r.a.createElement("p",null,"Combust\xedvel: ",r.a.createElement("span",null,e.Combustivel)),r.a.createElement("p",null,"Valor: ",r.a.createElement("span",null,e.Valor)))),G=Y.a.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: min-content 1fr;
  overflow: hidden;

  position: absolute;
  width: 100%;
  bottom: 0;
  top: 0;
`,H=Y.a.div`
  & p {
    margin-bottom: 0.4rem;
    font-weight: 600;
  }

  & p span {
    font-weight: 400;
  }
`,K=({items:e,selectState:t})=>r.a.createElement(L,null,r.a.createElement("ul",null,e.map((e,a)=>{const n=a>t+1;return r.a.createElement("li",{key:e.name},r.a.createElement("a",{onClick:()=>e.action&&e.action(),className:N({isDisabled:n})},e.name))}))),L=Y.a.nav`
  font-size: 1rem;

  & ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  & li {
    align-items: center;
    display: flex;
  }

  & li + li::before {
    content: "/";
    color: #333;
    font-size: inherit;
  }

  & a {
    align-items: center;
    color: #3273dc;
    display: flex;
    justify-content: center;
    padding: 0 0.75em;
    text-decoration: none;
    cursor: pointer;
  }

  & a.isDisabled {
    color: #eee;
  }
`,Q=Y.a.div`
  position: relative;

  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,U=Y.a.main`
  margin: 0 auto;
  padding: 2rem;

  max-width: 900px;
  min-height: 100vh;

  display: grid;
  grid-gap: 1.5rem;
  grid-template-rows: min-content min-content 1fr;
`;var X=z(({mainStore:{selectState:e,selectVehicleType:t,vehicleBrands:a,selectBrand:n,vehicleModels:i,selectModel:o,vehicleYears:l,selectYear:s,vehicle:c}})=>r.a.createElement(U,null,r.a.createElement(V,null),r.a.createElement(K,{selectState:e,items:[{name:"Tipo",action:t},{name:"Marca",action:n},{name:"Modelo",action:o},{name:"Ano",action:s},{name:"Ve\xedculo"}]}),r.a.createElement(Q,null,r.a.createElement(C.a,{appear:!0,unmountOnExit:!0,timeout:500,classNames:"move",in:0===e},r.a.createElement(J,{data:a,select:n,title:"Marcas"})),r.a.createElement(C.a,{appear:!0,unmountOnExit:!0,timeout:500,classNames:"move",in:1===e},r.a.createElement(J,{data:i,select:o,title:"Modelos"})),r.a.createElement(C.a,{appear:!0,unmountOnExit:!0,timeout:500,classNames:"move",in:2===e},r.a.createElement(J,{data:l,select:s,title:"Anos"})),r.a.createElement(C.a,{appear:!0,unmountOnExit:!0,timeout:500,classNames:"move",in:3===e},r.a.createElement(q,{vehicle:c})))),["mainStore"]);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(()=>r.a.createElement(s.a,null,r.a.createElement(l.a,k,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:X})))),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.e2f8b35f.chunk.js.map