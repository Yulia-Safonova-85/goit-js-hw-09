const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;t.addEventListener("click",(function(){n=setInterval((()=>{!function(){let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.background=t}()}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.cd08b7c5.js.map