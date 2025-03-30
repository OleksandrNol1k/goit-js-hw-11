import{S as c,i as f,a as u}from"./assets/vendor-Dl8rzLp-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const n=document.querySelector(".gallery");let d=new c(".gallery a");function p(s){if(n.innerHTML="",s.length===0){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const r=s.map(t=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${t.webformatURL}"
                    alt="${t.tags}"
                />
            </a>
            <div class="info">
                <p>Likes ${t.likes}</p>
                <p>Views ${t.views}</p>
                <p>Comments ${t.comments}</p>
                <p>Downloads ${t.downloads}</p>
            </div>
        </li>
    `).join("");n.insertAdjacentHTML("beforeend",r),d.refresh()}const m="49602759-053293c385f6a302d2cf848aa",y="https://pixabay.com/api/";async function g(s){try{return(await u.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw console.error("Error fetching images:",r),r}}const h=document.querySelector(".form"),l=document.querySelector(".loader");h.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(r){l.style.display="block";try{const t=await g(r);p(t),s.target.reset()}catch{iziToast.error({title:"Error",message:"Failed to fetch images"})}finally{l.style.display="none"}}});
//# sourceMappingURL=index.js.map
