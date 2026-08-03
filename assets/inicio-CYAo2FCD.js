import{a as e,i as t,n,o as r,r as i,s as a,t as o}from"./comun-DO6z7AGP.js";var s=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),c=e=>e.estado.toLowerCase()===`en obra`;function l(e,t=`obras/`,n=0){return`
    <a class="obra${c(e)?` obra--curso`:``} reveal"
       href="${t}${s(e.slug)}/"
       style="--retraso:${n}ms">
      <span class="obra__cab">
        <span class="obra__tipo">${s(e.tipo)}</span>
        <span class="obra__estado">${s(e.estado)}</span>
      </span>
      <span class="obra__nombre">${s(e.nombre)}</span>
      <span class="obra__detalle">${s(e.detalle)}</span>
      <span class="obra__datos">
        <span><span>Ubicación</span><span>${s(e.ubicacion)}</span></span>
        <span><span>Superficie</span><span>${s(e.superficie)}</span></span>
        <span><span>Año</span><span>${s(e.anio)}</span></span>
      </span>
      <span class="obra__ver">Ver la obra</span>
    </a>`}var u=`modulepreload`,d=function(e){return`/rybconstructora-web/`+e},f={},p=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=d(t,n),t=s(t),t in f)return;f[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:u,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};o(`#servicios-lista`).innerHTML=a.map((e,t)=>`
      <article class="servicio reveal" id="${e.id}" style="--retraso:${t*110}ms">
        <span class="servicio__num">${e.numero}</span>
        <h3>${e.titulo}</h3>
        <p class="servicio__resumen">${e.resumen}</p>
        <p class="servicio__detalle">${e.detalle}</p>
        <ul>${e.items.map(e=>`<li>${e}</li>`).join(``)}</ul>
      </article>`).join(``),o(`#proceso-lista`).innerHTML=r.map((e,t)=>`
      <li class="reveal" style="--retraso:${t*90}ms">
        <span class="proceso__num">${e.paso}</span>
        <h3>${e.titulo}</h3>
        <p>${e.texto}</p>
      </li>`).join(``);var m=e.filter(e=>e.destacada);o(`#obras-lista`).innerHTML=m.map((e,t)=>l(e,`obras/`,t*60)).join(``),o(`#obras-total`).textContent=e.length;{let e=o(`#obras-aviso`);e.textContent=`Portafolio de muestra: las obras listadas son ejemplos y todavía no son las obras reales de la empresa.`,e.hidden=!1}var h=e.map(e=>`<span>${e.nombre}</span><i>◆</i>`).join(``);o(`#marquesina`).innerHTML=h+h,o(`#riel ol`).innerHTML=t.map(e=>`<li><strong>${e.titulo}</strong><span>${e.texto}</span></li>`).join(``);var g=o(`#fondo`),_=null;async function v(){let e=document.createElement(`canvas`);if(!(window.WebGLRenderingContext&&(e.getContext(`webgl2`)||e.getContext(`webgl`)))){g.remove(),document.body.style.background=`radial-gradient(120% 90% at 50% 0%, #e9f0f6 0%, #ffffff 62%)`;return}try{let{crearFondo:e}=await p(async()=>{let{crearFondo:e}=await import(`./background-DyAUGBbw.js`);return{crearFondo:e}},[]);_=e(g),document.body.dataset.fondo=`listo`}catch(e){console.error(`No se pudo iniciar el fondo 3D:`,e),g.remove(),document.body.style.background=`radial-gradient(120% 90% at 50% 0%, #e9f0f6 0%, #ffffff 62%)`}}v();var y=o(`#riel`),b=o(`#riel-progreso`),x=n(`#riel li`),S=o(`#remate`),C=!1;function w(e){let t=window.innerHeight;if(!S||!t)return e;let n=S.getBoundingClientRect().top+window.scrollY+S.offsetHeight-t;return n>t?Math.min(n,e):e}function T(){let e=Math.max(document.documentElement.scrollHeight-window.innerHeight,1),n=Math.min(Math.max(window.scrollY/w(e),0),1);_?.setProgreso(n),y.classList.toggle(`visible`,window.scrollY>window.innerHeight*.55),b.style.height=`${n*100}%`;let r=Math.min(Math.floor(n*t.length),t.length-1);x.forEach((e,t)=>e.classList.toggle(`activa`,t===r)),C=!1}window.addEventListener(`scroll`,()=>{C||(C=!0,requestAnimationFrame(T))},{passive:!0}),window.addEventListener(`resize`,T,{passive:!0}),T(),window.addEventListener(`pointermove`,e=>{_?.setPuntero(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight*2-1))},{passive:!0}),i();