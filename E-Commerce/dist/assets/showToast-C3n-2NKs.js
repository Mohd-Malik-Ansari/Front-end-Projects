(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=[{id:1,name:"Laptop",category:"Computers",brand:"ExampleBrand",price:29999,stock:50,description:"Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",image:"/Image/lapi.png"},{id:2,name:"Smartphone",category:"Mobiles",brand:"TechGadget",price:49999,stock:100,description:"Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery.",image:"/Image/iphone.png"},{id:3,name:"Headphones",category:"Audio",brand:"SoundBeats",price:1449,stock:30,description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color.",image:"/Image/headphone.png"},{id:4,name:"Watches",category:"wearables",brand:"FitTech",price:1999,stock:20,description:"Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking feature, and a silver color.",image:"/Image/watch.png"},{id:5,name:"Speakers",category:"Audio",brand:"SoundBeats",price:2999,stock:50,description:"Introducing high-quality wireless speakers. The sleek black color making it a perfect addition to any space.",image:"/Image/speakers.png"},{id:6,name:"Television",category:"Video",brand:"Samsung",price:11999,stock:20,description:"Introducing the sleek 1.3-inch AMOLED TV, offering vibrant visuals and sharp clarity with every display.",image:"/Image/tv.png"}];let n=document.getElementById("cartValue");const c=r=>{n.innerHTML=`<i class="fa-solid fa-cart-shopping"> ${r.length} </i>`},l=()=>{let r=localStorage.getItem("cartProductLS");return r?(r=JSON.parse(r),c(r),r):[]};function p(r,o){const a=document.createElement("div");a.classList.add("toast"),r==="add"?a.textContent=`Product with ID ${o} has been added.`:a.textContent=`Product with ID ${o} has been deleted.`,document.body.append(a),setTimeout(()=>{a.remove()},2e3)}export{l as g,d as p,p as s,c as u};
