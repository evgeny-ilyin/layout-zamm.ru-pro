/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 889:
/***/ (() => {

/**
 * lc_select.js - Superlight Javascript dropdowns
 * Version: 1.1.8
 * Author: Luca Montanari (LCweb)
 * Website: https://lcweb.it
 * Licensed under the MIT license
 */

!function(){"use strict";if(void 0!==window.lc_select)return!1;let t=[],e=!1,l=null,n=null;const s={enable_search:!0,min_for_search:7,autofocus_search:!1,wrap_width:"auto",addit_classes:[],pre_placeh_opt:!1,max_opts:!1,on_change:null,labels:["search options","add options","Select options ..",".. no matching options .."]};document.addEventListener("click",(function(t){const e=document.querySelector("#lc-select-dd.lcslt-shown");if(!e)return!0;for(const e of document.getElementsByClassName("lcslt-wrap"))if(e.contains(t.target))return!0;return e.contains(t.target)||t.target.classList.contains("lcslt-shown")||(e.remove(),n&&(n.classList.remove("lcslt_dd-open"),n=null)),!0})),window.addEventListener("resize",(function(t){const e=document.querySelector("#lc-select-dd.lcslt-shown");return!e||(document.activeElement.hasAttribute("type")&&"text"===document.activeElement.getAttribute("type")||(e.classList.remove("lcslt-shown"),n.classList.remove("lcslt_dd-open"),n=null),!0)})),window.addEventListener("scroll",(t=>{document.querySelector(".lc-select-dd-scroll")&&e&&window.scrollTo(e[0],e[1])})),document.addEventListener("keydown",(t=>{if(-1===[38,40,13,27,9].indexOf(t.keyCode)||!document.querySelector("#lc-select-dd.lcslt-shown"))return!0;t.preventDefault();const e=document.querySelector(".lcslt-dd-opt.lcslt-dd-opt-hlight"),l=document.querySelectorAll(".lcslt-dd-opt:not(.lcslt-disabled)"),s=new Event("mouseenter",{bubbles:!0});switch(t.keyCode){case 27:n.click();break;case 9:document.activeElement.classList&&document.activeElement.classList.contains("lcslt-tabindex-trick")||n.click();break;case 13:e&&(e.classList.remove("lcslt-dd-opt-hlight"),e.click());break;case 38:case 40:let i,o=38==t.keyCode?0:l.length-1;e&&l.forEach(((t,l)=>{t==e&&(o=l)})),i=38==t.keyCode?o?o-1:l.length-1:o==l.length-1?0:o+1,l[i].dispatchEvent(s),c()}return!0}));const c=()=>{const t=document.querySelector(".lcslt-dd-opt-hlight");if(!t)return!1;const e=parseInt(getComputedStyle(t).borderTopWidth,10);document.querySelector(".lc-select-dd-scroll").scrollTop=t.offsetTop-2*(t.offsetHeight+e)-10};window.lc_select=function(a,r={}){return a?"object"!=typeof r?console.error("Options must be an object"):(r=Object.assign({},s,r),this.init=function(){const t=this;l||(this.generate_style(),l=!0),i(a).forEach((function(e){"SELECT"==e.tagName&&(e.parentNode.classList.length&&e.parentNode.classList.contains("lcslt-wrap")||(t.wrap_element(e),e.removeEventListener("lc-select-refresh",(()=>{})),e.addEventListener("lc-select-refresh",(e=>{n&&n.click();const l=e.target.parentNode.querySelector(".lcslt");return t.set_sel_content(l),!(!e.target.parentNode.classList.length||e.target.parentNode.classList.length&&!e.target.parentNode.classList.contains("lcslt-wrap"))&&(e.target.disabled?l.classList.add("lcslt-disabled"):l.classList.remove("lcslt-disabled"),!0)})),e.removeEventListener("lc-select-destroy",(()=>{})),e.addEventListener("lc-select-destroy",(t=>{n&&n.click();const e=t.target,l=t.target.parentNode,s=e.querySelector('option[data-lcslt-placeh="1"]');return!(!l.classList.length||l.classList.length&&!l.classList.contains("lcslt-wrap"))&&(s&&s.remove(),l.parentNode.insertBefore(e,l),l.remove(),!0)}))))}))},this.wrap_element=function(t){const e=this,l=document.createElement("div"),n="lcslt-f-"+t.getAttribute("name").replace(/\[\]/g,""),s=t.disabled?"lcslt-disabled":"",c=t.multiple?"lcslt-multiple":"",i=t.getAttribute("tabindex")?parseInt(t.getAttribute("tabindex"),10):"";let o,a=t.hasAttribute("data-placeholder")?t.getAttribute("data-placeholder").trim():"";if(!a&&c&&(a=r.labels[2]),a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),"object"==typeof r.addit_classes&&r.addit_classes.some((t=>{l.classList.add(t)})),"auto"!=r.wrap_width&&(o="inherit"==r.wrap_width?Math.round(t.getBoundingClientRect().width)+"px":r.wrap_width,l.style.width=o),l.classList.add("lcslt-wrap",n),l.innerHTML='<input type="text" name="'+n+'-tit" tabindex="'+i+'" class="lcslt-tabindex-trick" /><div class="lcslt '+n+" "+c+" "+s+'" data-placeh="'+a+'"></div>',t.parentNode.insertBefore(l,t),l.appendChild(t),"inherit"==r.wrap_width){const e=l.querySelector(".lcslt"),n=e.currentStyle||window.getComputedStyle(e);let s=parseInt(n.paddingRight,10)+parseInt(n.paddingLeft,10);t.querySelector("option[data-image]")&&(s+=20),l.style.width=parseInt(o,10)+s+"px"}const d=l.querySelector(".lcslt");if(r.pre_placeh_opt&&!c&&a){let e=!0;if(t.querySelectorAll("option").forEach((t=>{if(t.hasAttribute("selected"))return e=!1,!1})),e){const e=document.createElement("option");e.setAttribute("data-lcslt-placeh",1),e.setAttribute("value",""),e.style.display="none",e.innerHTML=a,e.selected=!0,t.insertBefore(e,t.firstChild)}}this.set_sel_content(d),d.addEventListener("click",(t=>{d.classList.contains("lcslt-disabled")||t.target.classList.contains("lcslt-multi-selected")||t.target.classList.contains("lcslt-max-opts")||t.target.parentNode.classList.contains("lcslt-multi-selected")||e.show_dd(d)})),l.querySelector(".lcslt-tabindex-trick").onfocus=t=>{d.click()}},this.set_sel_content=function(t=!1){t||(t=n);const e=this,l=t.nextSibling,s=t.classList.contains("lcslt-multiple");let c="",i=0,a=0;l.querySelectorAll("option").forEach((t=>{if(t.selected){const e=t.hasAttribute("data-image")?'<i class="lcslt-img" style="background-image: url(\''+t.getAttribute("data-image").trim()+"')\"></i>":"";if(s)c+='<div class="lcslt-multi-selected" data-val="'+t.getAttribute("value")+'" title="'+t.innerHTML+'"><span>'+e+t.innerHTML+"</span></div>";else{const l=r.pre_placeh_opt&&t.hasAttribute("data-lcslt-placeh")?'class="lcslt-placeholder"':"";c="<span "+l+' title="'+t.innerHTML+'">'+e+t.innerHTML+"</span>"}a++}i++}));let d=!1;"number"==typeof r.max_opts&&r.max_opts>1&&(a>=r.max_opts?(t.classList.add("lcslt-max-opts"),d=!0):t.classList.remove("lcslt-max-opts")),c?s&&i>a&&!l.disabled&&!d&&(c+='<span class="lcslt-multi-callout" title="'+r.labels[1]+'">+</span>'):c='<span class="lcslt-placeholder">'+t.getAttribute("data-placeh")+"</span>",t.innerHTML=c,s&&t.querySelectorAll(".lcslt-multi-selected").forEach((l=>{l.addEventListener("click",(n=>{o(n.target,".lcslt").classList.contains("lcslt-disabled")||e.deselect_option(n,t,l)}))}))},this.show_dd=function(t){if(document.querySelector("#lc-select-dd")&&(document.querySelector("#lc-select-dd").remove(),n&&n.classList.remove("lcslt_dd-open")),t==n)return n=null,!1;n=t,this.append_dd(),this.set_dd_position(),c();const e=this,l=document.querySelector("#lc-select-dd");l.classList.add("lcslt-shown"),t.classList.add("lcslt_dd-open"),setTimeout((()=>{t.getBoundingClientRect().x!=l.getBoundingClientRect().x&&e.set_dd_position()}),10)},this.set_dd_position=function(){const t=document.querySelector("#lc-select-dd"),e=n.getBoundingClientRect(),l=e.width.toFixed(2),s=parseInt(n.clientHeight,10)+parseInt(getComputedStyle(n).borderTopWidth,10),c=parseInt(e.y,10)+parseInt(window.pageYOffset,10)+s;let i=e.left.toFixed(2);i<0&&(i=0),t.setAttribute("style","width:"+l+"px; top:"+c+"px; left: "+i+"px;")},this.append_dd=function(){const t=this,l=n.parentNode.querySelector("select");let s=new Map,c=!1,i=[];l.querySelectorAll("optgroup").length?l.querySelectorAll("optgroup").forEach((t=>{s.set(t.getAttribute("label"),new Map),t.disabled&&i.push(t.getAttribute("label"))})):(c=!0,s.set("%%lcslt%%",new Map)),l.querySelectorAll("option").forEach((t=>{let e={img:t.hasAttribute("data-image")?t.getAttribute("data-image").trim():"",name:t.innerHTML,selected:t.selected,disabled:t.disabled};const l=c?"%%lcslt%%":t.parentNode.getAttribute("label");(c||l)&&s.get(l).set(t.getAttribute("value"),e)}));const o=n.classList.contains("lcslt-multiple")?"lcslt-multiple-dd":"",a="object"==typeof r.addit_classes?r.addit_classes.join(" "):"";let d='<div id="lc-select-dd" class="'+o+" "+a+'">';const u=!!(r.enable_search&&l.querySelectorAll("option").length>=parseInt(r.min_for_search,10));u&&(d+='<ul><li class="lcslt-search-li"><input type="text" name="lcslt-search" value="" placeholder="'+r.labels[0]+'" autocomplete="off" /></li></ul>'),d+='<ul class="lc-select-dd-scroll">',s.forEach(((t,e)=>{if(!c){const n=-1!==i.indexOf(t)?"lcslt-disabled":"",s=l.querySelector('optgroup[label="'+e+'"]'),c=s.hasAttribute("data-image")&&s.getAttribute("data-image")?'<i class="lcslt-img" style="background-image: url(\''+s.getAttribute("data-image").trim()+"')\"></i>":"";d+='<li class="lcslt-group '+n+'"><span class="lcslt-group-name">'+c+e+'</span><ul class="lcslt-group-opts">'}s.get(e).forEach(((n,c)=>{const a=s.get(e).get(c),r=a.img?'<i class="lcslt-img" style="background-image: url(\''+a.img+"')\"></i>":"",u=a.selected?"lcslt-selected":"",p=a.disabled||-1!==i.indexOf(t)?"lcslt-disabled":"",h=u?"lcslt-dd-opt-hlight":"";!o&&l.querySelector('option[value="'+c+'"]').hasAttribute("data-lcslt-placeh")||(d+='<li class="lcslt-dd-opt '+u+" "+p+" "+h+'" data-val="'+c+'"><span>'+r+a.name+"</span></li>")})),c||(d+="</ul></li>")})),document.body.insertAdjacentHTML("beforeend",d+"</ul></div>"),document.querySelectorAll(".lcslt-dd-opt").forEach((e=>{e.addEventListener("click",(l=>{t.clicked_dd_option(l,e)})),e.addEventListener("mouseenter",(t=>{document.querySelector(".lcslt-dd-opt-hlight")&&document.querySelector(".lcslt-dd-opt-hlight").classList.remove("lcslt-dd-opt-hlight"),e.classList.contains("lcslt-disabled")||e.classList.add("lcslt-dd-opt-hlight")})),e.addEventListener("mouseleave",(t=>{e.classList.remove("lcslt-dd-opt-hlight")}))})),u&&(window.innerWidth>1024&&r.autofocus_search&&setTimeout((()=>document.querySelector("input[name=lcslt-search]").focus()),50),document.querySelector("input[name=lcslt-search]").addEventListener("keyup",(t=>{this.debounce("opts_search",500,"search_options")}))),document.querySelector(".lc-select-dd-scroll").addEventListener("mouseenter",(()=>{e=[window.pageXOffset,window.pageYOffset]})),document.querySelector(".lc-select-dd-scroll").addEventListener("mouseleave",(()=>{e=!1}))},this.on_val_change=function(t){const e=t.nextSibling,l=Array.from(e.selectedOptions).map((t=>t.value)),n=new Event("change",{bubbles:!0});e.dispatchEvent(n),"function"==typeof r.on_change&&r.on_change.call(this,l,e)},this.deselect_option=function(t,e,l){e.nextSibling.querySelector('option[value="'+l.getAttribute("data-val")+'"]').selected=!1,this.set_sel_content(e),this.on_val_change(e)},this.clicked_dd_option=function(t,e){const l=n.classList.contains("lcslt-multiple"),s=e.getAttribute("data-val"),c=n.nextSibling;if(e.classList.contains("lcslt-disabled")||!l&&e.classList.contains("lcslt-selected")||!e.classList.contains("lcslt-selected")&&n.classList.contains("lcslt-max-opts"))return!1;l||(document.querySelectorAll(".lcslt-dd-opt").forEach((t=>{t.getAttribute("data-val")!=s&&t.classList.remove("lcslt-selected")})),c.querySelectorAll("option").forEach((t=>{t.getAttribute("value")!=s&&(t.selected=!1)}))),e.classList.toggle("lcslt-selected"),e.classList.remove("lcslt-dd-opt-hlight"),c.querySelector('option[value="'+s+'"]').selected=!c.querySelector('option[value="'+s+'"]').selected,this.set_sel_content(),this.on_val_change(n),l?this.set_dd_position():n.click()},this.search_options=function(){if(!document.querySelector("input[name=lcslt-search]"))return!1;const t=document.querySelector("input[name=lcslt-search]").value.trim(),e=document.querySelectorAll(".lcslt-group-name"),l=document.querySelectorAll(".lcslt-dd-opt"),n=document.querySelector(".lcslt-no-results");if(t.length<2)document.getElementById("lc-select-dd").classList.remove("lcslt-is-searching"),e.forEach((t=>{t.style.removeProperty("display")})),l.forEach((t=>{t.style.removeProperty("display")})),n&&n.remove();else{document.getElementById("lc-select-dd").classList.add("lcslt-is-searching"),e.forEach((t=>{t.style.display="none"}));const s=t.split(" ");let c=!0;l.forEach((t=>{let e=!1;s.some((l=>{-1!==t.querySelector("span").innerHTML.toLowerCase().indexOf(l.toLowerCase())&&(e=!0,c=!1)})),e?t.style.removeProperty("display"):t.style.display="none"})),c?n||document.querySelector(".lc-select-dd-scroll").insertAdjacentHTML("beforeend",'<li class="lcslt-no-results"><span>'+r.labels[3]+"</span></li>"):n&&n.remove()}},this.debounce=function(e,l,n,s){void 0!==t[e]&&t[e]&&clearTimeout(t[e]);const c=this;t[e]=setTimeout((()=>{c[n].call(c,s)}),l)},this.generate_style=function(){const t="    url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTg3LjQ3MXB4IiBoZWlnaHQ9IjU4Ny40NzFweCIgdmlld0JveD0iMCAwIDU4Ny40NzEgNTg3LjQ3MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTg3LjQ3MSA1ODcuNDcxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+PHBhdGggZD0iTTIyMC4zMDIsNDQwLjYwNGMxMjEuNDc2LDAsMjIwLjMwMi05OC44MjYsMjIwLjMwMi0yMjAuMzAyQzQ0MC42MDQsOTguODI2LDM0MS43NzcsMCwyMjAuMzAyLDBDOTguODI2LDAsMCw5OC44MjYsMCwyMjAuMzAyQzAsMzQxLjc3Nyw5OC44MjYsNDQwLjYwNCwyMjAuMzAyLDQ0MC42MDR6IE0yMjAuMzAyLDcxLjE0MmM4Mi4yNDcsMCwxNDkuMTU5LDY2LjkxMywxNDkuMTU5LDE0OS4xNTljMCw4Mi4yNDgtNjYuOTEyLDE0OS4xNi0xNDkuMTU5LDE0OS4xNnMtMTQ5LjE2LTY2LjkxMi0xNDkuMTYtMTQ5LjE2QzcxLjE0MiwxMzguMDU1LDEzOC4wNTUsNzEuMTQyLDIyMC4zMDIsNzEuMTQyeiIvPjxwYXRoIGQ9Ik01MjUuNTIzLDU4Ny40NzFjMTYuNTU1LDAsMzIuMTEzLTYuNDQ3LDQzLjgwMS0xOC4xNThjMTEuNjk5LTExLjY4LDE4LjE0Ni0yNy4yMzQsMTguMTQ2LTQzLjc5MWMwLTE2LjU1My02LjQ0Ny0zMi4xMTUtMTguMTUyLTQzLjgyMkw0NDYuNjQzLDM1OS4wMjNjLTMuMjYyLTMuMjYyLTcuNDc1LTUuMDYxLTExLjg1OS01LjA2MWMtNS40NDksMC0xMC40NjUsMi43MTEtMTMuNzYyLDcuNDM4Yy0xNi4yMzgsMjMuMzE4LTM2LjI5Nyw0My4zNzctNTkuNjEzLDU5LjYxNWMtNC4yNTgsMi45NjUtNi45NDcsNy40NjctNy4zNzksMTIuMzUyYy0wLjQyOCw0LjgyOCwxLjM5Myw5LjY2Niw0Ljk5OCwxMy4yN2wxMjIuNjc0LDEyMi42NzZDNDkzLjQwNiw1ODEuMDIzLDUwOC45NjksNTg3LjQ3MSw1MjUuNTIzLDU4Ny40NzF6Ii8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=')";document.head.insertAdjacentHTML("beforeend",`<style>\n.lcslt-wrap {\n    position: relative;\n    display: inline-block;\n}\n.lcslt-wrap select {\n    display: none !important;\n}\n.lcslt {\n    display: flex;\n\talign-items: center;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n    width: 100%;\n    min-height: 15px;\n    padding: 5px 30px 5px 5px;\n    position: relative;\n    overflow: hidden;  \n    font-size: 1rem;\n}\n.lcslt:not(.lcslt-disabled):not(.lcslt-max-opts) {\n    cursor: pointer;\n}\n.lcslt:not(.lcslt-multiple):after {\n\tcontent: "";\n\twidth: 0;\n\theight: 0;\n\tborder-left: 5px solid transparent;\n\tborder-right: 5px solid transparent;\n\tborder-top: 6px solid #444;\n\tdisplay: inline-block;\n    position: absolute;\n    right: 6px;\n    transition: transform .3s ease; \n}\n.lcslt.lcslt_dd-open:after {\n    transform: rotate(180deg);\n}\n.lcslt:not(.lcslt-multiple) > span {\n    line-height: normal;\n}\n.lcslt span,\n.lcslt-multi-selected {\n    max-width: 100%;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n.lcslt-multiple {\n\tpadding: 5px 5px 0 5px;\n\theight: auto;\n\tline-height: 0;\n}\n.lcslt span:not(.lcslt-placeholder):not(.lcslt-multi-callout) {\n\tline-height: 1.1em;\n\tfont-size: 0.95em;\n}\n.lcslt-opt {\n    display: inline-block;\n    margin: 0 0 5px 5px; \n}\n.lcslt-multi-selected {\n\tdisplay: flex;\n\tposition: relative;\n\tline-height: normal;\n\talign-items: center;\n}\n.lcslt:not(.lcslt-disabled) .lcslt-multi-selected {\n    cursor: pointer;\n}\n.lcslt-multi-selected:before {\n    content: "×";\n    font-family: arial;\n}\n.lcslt-multi-callout {\n\tdisplay: inline-block;\n    line-height: 0;\n}\n.lcslt-placeholder {\n\tline-height: normal;\n\tpadding-bottom: 5px;\n}\n.lcslt-tabindex-trick {\n    position: fixed;\n    top: -99999px;\n}\n\n\n.lcslt-wrap,\n.lcslt-wrap *,\n#lc-select-dd,\n#lc-select-dd * {\n    box-sizing: border-box;\n}\n#lc-select-dd {\n\tvisibility: hidden;\n\tz-index: -100;\n\tposition: absolute;\n\ttop: -9999px;\n\tz-index: 999;\n\toverflow: hidden;\n\tborder-top: none;\n\tfont-size: 1rem;\n\tfont-family: sans-serif;\n}\n#lc-select-dd.lcslt-shown {\n    visibility: visible;\n    z-index: 99999999;\n}\n#lc-select-dd ul {\n\tmargin: 0;\n    padding: 0;\n\tlist-style: none;\n}\n.lc-select-dd-scroll {\n    max-height: 200px; \n    overflow: auto;\n}\n.lcslt-search-li { \n    padding: 0 !important;\n    margin: 0 !important;\n    position: relative;\n}\n.lcslt-search-li input {\n    width: 100%;\n    padding-right: 36px;\n    line-height: normal;\n}\n.lcslt-search-li input[type=text] { /* for iOS safari */\n    border: none;\n    outline: none;\n    -webkit-appearance: none;\n    -webkit-border-radius: 0;\n}\n.lcslt-search-li input[type=text],\n.lcslt-search-li input[type=text]:hover,\n.lcslt-search-li input[type=text]:active,\n.lcslt-search-li input[type=text]:focus,\n.lcslt-search-li input[type=text]:focus-visible {\n    border: none;\n    outline: none;\n}\n.lcslt-search-li:before {\n    content: "";\n    position: absolute;\n    z-index: 10;\n    width: 25px;\n    height: 50%;\n    right: 8px;\n    top: 50%;\n    -webkit-mask: ${t} no-repeat right center;\n    mask: ${t} no-repeat right center;\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    transform: translate3d(0, -53%, 0);\n}\n#lc-select-dd li {\n    width: 100%;\n    margin: 0;\n}\n#lc-select-dd li > div {\n    display: flex;\n    align-items: center;\n}\n#lc-select-dd li span {\n    word-break: break-all;\n}\n#lc-select-dd li span {\n    display: inline-block;\n    line-height: normal;\n}\n.lcslt-dd-opt:not(.lcslt-disabled):not(.lcslt-selected),\n.lcslt-multiple-dd .lcslt-dd-opt:not(.lcslt-disabled) {   \n    cursor: pointer;\n}\n.lcslt-img {\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-color: transparent;\n    vertical-align: top;\n    line-height: 0;\n    font-size: 0;\n}\n</style>`)},void this.init()):console.error("You must provide a valid selector or DOM object as first argument")};const i=t=>{if("string"!=typeof t){if(t instanceof Element)return[t];{let e=[];for(const l of t)l instanceof Element&&e.push(l);return e}}return(t.match(/(#[0-9][^\s:,]*)/g)||[]).forEach((function(e){t=t.replace(e,'[id="'+e.replace("#","")+'"]')})),document.querySelectorAll(t)},o=(t,e)=>{let l=t;for(;null!=l.parentNode&&!l.matches(e);)l=l.parentNode;return l}}();

/***/ }),

/***/ 213:
/***/ (function(module) {

!function(e,r){ true?module.exports=r():0}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r=e.inputElement,t=(0,u.default)(e),n=function(e){var r=e.target.value;return t.update(r)};return r.addEventListener("input",n),t.update(r.value),{textMaskInputElement:t,destroy:function(){r.removeEventListener("input",n)}}}Object.defineProperty(r,"__esModule",{value:!0}),r.conformToMask=void 0,r.maskInput=o;var i=t(2);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(i).default}});var a=t(5),u=n(a);r.default=o},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(r)){if(("undefined"==typeof r?"undefined":o(r))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=r(e,t),r=(0,i.processCaretTraps)(r).maskWithoutCaretTraps}var n=t.guide,s=void 0===n||n,f=t.previousConformedValue,d=void 0===f?l:f,c=t.placeholderChar,p=void 0===c?a.placeholderChar:c,v=t.placeholder,h=void 0===v?(0,i.convertMaskToPlaceholder)(r,p):v,m=t.currentCaretPosition,y=t.keepCharPositions,g=s===!1&&void 0!==d,b=e.length,C=d.length,k=h.length,x=r.length,P=b-C,T=P>0,O=m+(T?-P:0),M=O+Math.abs(P);if(y===!0&&!T){for(var w=l,S=O;S<M;S++)h[S]===p&&(w+=p);e=e.slice(0,O)+w+e.slice(O,b)}for(var _=e.split(l).map(function(e,r){return{char:e,isNew:r>=O&&r<M}}),j=b-1;j>=0;j--){var V=_[j].char;if(V!==p){var A=j>=O&&C===x;V===h[A?j-P:j]&&_.splice(j,1)}}var E=l,N=!1;e:for(var F=0;F<k;F++){var I=h[F];if(I===p){if(_.length>0)for(;_.length>0;){var L=_.shift(),R=L.char,J=L.isNew;if(R===p&&g!==!0){E+=p;continue e}if(r[F].test(R)){if(y===!0&&J!==!1&&d!==l&&s!==!1&&T){for(var W=_.length,q=null,z=0;z<W;z++){var B=_[z];if(B.char!==p&&B.isNew===!1)break;if(B.char===p){q=z;break}}null!==q?(E+=R,_.splice(q,1)):F--}else E+=R;continue e}N=!0}g===!1&&(E+=h.substr(F,k));break}E+=I}if(g&&T===!1){for(var D=null,G=0;G<E.length;G++)h[G]===p&&(D=G);E=null!==D?E.substr(0,D+1):l}return{conformedValue:E,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=n;var i=t(3),a=t(1),u=[],l=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){for(var r=[],t=void 0;t=e.indexOf(f),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isArray=o,r.isString=i,r.isNumber=a,r.processCaretTraps=u;var l=t(1),s=[],f="[]"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?n:p,h=e.caretTrapIndexes,m=void 0===h?n:h;if(0===l||!f.length)return 0;var y=f.length,g=t.length,b=c.length,C=s.length,k=y-g,x=k>0,P=0===g,T=k>1&&!x&&!P;if(T)return l;var O=x&&(t===s||s===c),M=0,w=void 0,S=void 0;if(O)M=l-k;else{var _=s.toLowerCase(),j=f.toLowerCase(),V=j.substr(0,l).split(o),A=V.filter(function(e){return _.indexOf(e)!==-1});S=A[A.length-1];var E=a.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,N=c.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,F=N!==E,I=void 0!==a[A.length-1]&&void 0!==c[A.length-2]&&a[A.length-1]!==d&&a[A.length-1]!==c[A.length-1]&&a[A.length-1]===c[A.length-2];!x&&(F||I)&&E>0&&c.indexOf(S)>-1&&void 0!==f[l]&&(w=!0,S=f[l]);for(var L=v.map(function(e){return _[e]}),R=L.filter(function(e){return e===S}).length,J=A.filter(function(e){return e===S}).length,W=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===S&&f[r]!==e}).length,q=W+J+R+(w?1:0),z=0,B=0;B<C;B++){var D=_[B];if(M=B+1,D===S&&z++,z>=q)break}}if(x){for(var G=M,H=M;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||m.indexOf(H)!==-1||H===b)return G}else if(w){for(var K=M-1;K>=0;K--)if(s[K]===S||m.indexOf(K)!==-1||0===K)return K}else for(var Q=M;Q>=0;Q--)if(c[Q-1]===d||m.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,g=n.placeholderChar,b=void 0===g?v.placeholderChar:g,C=n.keepCharPositions,k=void 0!==C&&C,x=n.showMask,P=void 0!==x&&x;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var T=void 0,O=void 0;if(s instanceof Array&&(T=(0,p.convertMaskToPlaceholder)(s,b)),s!==!1){var M=a(t),w=o.selectionEnd,S=r.previousConformedValue,_=r.previousPlaceholder,j=void 0;if(("undefined"==typeof s?"undefined":l(s))===v.strFunction){if(O=s(M,{currentCaretPosition:w,previousConformedValue:S,placeholderChar:b}),O===!1)return;var V=(0,p.processCaretTraps)(O),A=V.maskWithoutCaretTraps,E=V.indexes;O=A,j=E,T=(0,p.convertMaskToPlaceholder)(O,b)}else O=s;var N={previousConformedValue:S,guide:d,placeholderChar:b,pipe:m,placeholder:T,currentCaretPosition:w,keepCharPositions:k},F=(0,c.default)(M,O,N),I=F.conformedValue,L=("undefined"==typeof m?"undefined":l(m))===v.strFunction,R={};L&&(R=m(I,u({rawValue:M},N)),R===!1?R={value:S,rejected:!0}:(0,p.isString)(R)&&(R={value:R}));var J=L?R.value:I,W=(0,f.default)({previousConformedValue:S,previousPlaceholder:_,conformedValue:J,placeholder:T,rawValue:M,currentCaretPosition:w,placeholderChar:b,indexesOfPipedChars:R.indexesOfPipedChars,caretTrapIndexes:j}),q=J===T&&0===W,z=P?T:h,B=q?z:J;r.previousConformedValue=B,r.previousPlaceholder=T,o.value!==B&&(o.value=B,i(o,W))}}}}}function i(e,r){document.activeElement===e&&(g?b(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return h;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(4),f=n(s),d=t(2),c=n(d),p=t(3),v=t(1),h="",m="none",y="object",g="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),b="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ 35:
/***/ (() => {

"use strict";
if (!window.overlay) {
	window.overlay = (action, origin = false) => {
		const body = document.body,
			sw = getScrollbarWidth(),
			containers = document.querySelectorAll(".container"),
			isActiveClass = "is-active";
		if (action) {
			overlay(0);
			const o = document.createElement("div"),
				scrollY = window.scrollY;
			o.classList.add("overlay");

			origin ? (o.dataset.origin = origin) : "";
			body.prepend(o);
			body.style.top = `-${scrollY}px`;
			body.classList.add("noscroll");
			containers.forEach((c) => {
				c.style.paddingRight = `${sw}px`;
			});

			setTimeout(() => {
				o.classList.add(isActiveClass);
			}, 0);
		} else {
			body.classList.remove("noscroll");
			containers.forEach((c) => {
				c.style.paddingRight = "";
			});

			const o = document.querySelector(".overlay");
			if (!o) return;

			o.classList.remove(isActiveClass);
			resetTopOffset();

			setTimeout(() => {
				o.remove();
			}, 250);
		}
	};
}

if (!window.resetTopOffset) {
	window.resetTopOffset = () => {
		const body = document.body,
			header = document.querySelector(".header"),
			scrollY = body.style.top;
		body.style.top = "";
		header.style.top = "";

		window.scrollTo({
			left: 0,
			top: parseInt(scrollY || "0") * -1,
			behavior: "instant",
		});
	};
}

if (!window.getScrollbarWidth) {
	window.getScrollbarWidth = () => {
		let div = document.createElement("div");
		div.style.overflowY = "scroll";
		div.style.width = "50px";
		div.style.height = "50px";
		document.body.append(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();
		return scrollWidth;
	};
}

if (!window.getRandomStr) {
	window.getRandomStr = (len) => {
		let res = "",
			symbols = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
		len = len || Math.floor(Math.random() * symbols.length);
		for (let i = 0; i < len; i++) res += symbols[Math.floor(Math.random() * symbols.length)];
		return res;
	};
}

if (!window.mediaMatch) {
	window.mediaMatch = (w) => {
		if (!w) return;
		let mq = window.matchMedia(`(max-width: ${w}px)`);
		return mq.matches ? true : false;
	};
}

if (!window.isTouchDevice) {
	window.isTouchDevice = () => {
		const touchClass = "is-touch";
		["load", "resize"].forEach((evt) =>
			window.addEventListener(evt, () => {
				let isTouch = false;
				if ((window.PointerEvent && "maxTouchPoints" in navigator) || (window.PointerEvent && "msMaxTouchPoints" in navigator)) {
					// if Pointer Events are supported, just check maxTouchPoints
					if (navigator.maxTouchPoints > 0) {
						isTouch = true;
					}
				} else {
					// no Pointer Events...
					if (window.matchMedia && window.matchMedia("(any-pointer:coarse)").matches) {
						// check for any-pointer:coarse which mostly means touchscreen
						isTouch = true;
					} else if (window.TouchEvent || "ontouchstart" in window) {
						// last resort - check for exposed touch events API / event handler
						isTouch = true;
					}
				}
				document.body.classList[isTouch ? "add" : "remove"](touchClass);
			})
		);
	};
}





// ?
if (!window.updateChunks) {
	window.updateChunks = (obj, where = document) => {
		if (typeof obj === "object" && obj !== null) {
			Object.entries(obj).forEach(([key, value]) => {
				// execute js code
				if (key == "eval") {
					let cleanValue = value.replace(/^<script.*?>|<\/script>$/g, '');
					eval(cleanValue);
					return;
				}
				let target = where.querySelector(`[data-id=${key}]`);
				if (!target) {
					// console.warn(`data-id "${key}" not found`);
					return;
				}
				target.innerHTML = value;
			});
		} else {
			console.error("Chunk list is not an object");
		}
	};
}

if (!window.fetchLoader) {
	window.fetchLoader = (where, action, options = {}) => {
		if (!where) return;
		let whereArr = [];

		if (!Array.isArray(where)) {
			whereArr = [where];
		} else {
			whereArr = where;
		}

		if (action == "start") {
			whereArr.forEach((el) => {
				if (!el) return;
				let loader = document.createElement("div");
				loader.classList.add("fetch");
				let child = document.createElement("div");
				child.classList.add("fetch__ring");

				if (options.class) {
					loader.classList.add(options.class);
				}

				loader.appendChild(child);

				el.appendChild(loader);

				setTimeout(() => {
					loader.style.opacity = 1;
				}, 0);
			});
		} else if (action == "stop") {
			whereArr.forEach((el) => {
				if (!el) return;
				let loaders = el.querySelectorAll(".fetch");
				if (!loaders) return;
				loaders.forEach((loader) => {
					setTimeout(() => {
						loader.style.opacity = 0;
						setTimeout(() => {
							loader.remove();
						}, 250);
					}, 0);
				});
			});
			return;
		}
	};
}

if (!window.btnLoader) {
	window.btnLoader = (where, action = false) => {
		if (!where) return;
		const btnLoaderClass = "btn-loader",
			labels = where.querySelectorAll("span");

		if (action == "stop") {
			where.classList.remove(btnLoaderClass);
			labels.forEach((l) => {
				l.style.opacity = "";
			});
			return;
		}

		where.classList.add(btnLoaderClass);
		labels.forEach((l) => {
			l.style.opacity = 0;
		});
	};
}

// ?
if (!window.addToSvgSprite) {
	window.addToSvgSprite = (svg) => {
		let sprite = document.querySelector(".svg-sprite");
		if (!sprite) return;
		sprite.insertAdjacentHTML("beforeend", svg);
	};
}

if (!window.loadMore) {
	window.loadMore = () => {
		document.addEventListener("click", (e) => {
			const btn = e.target.closest(".js-load-more");
			if (!btn) return;
			loadMoreByBtn(btn);
		});

		let loadMoreByBtn = async (btn) => {
			if (!btn) return;
			const url = btn.dataset.url,
				targetClass = btn.dataset.target;
			if (!targetClass || !url) return;

			const target = document.querySelector(`.${targetClass}`);

			btnLoader(btn);

			// step 1: fetch get
			let response = await fetch(url);
			let result = await response.json();
			let callbackParam = {};

			// step 2: update page chunks
			if (result.status === true) {
				// update path and needed form actions if new url recieved
				if (result.url) {
					callbackParam = { url: result.url };
					setWindowLocation(result.url);
				}

				if (result.content) {
					// target.innerHTML += result; -- bad solution (target div flickering)
					let div = document.createElement("div");
					div.innerHTML = result.content;

					div.childNodes.forEach((i) => {
						target.appendChild(i);
					});
				}

				if (result.chunks) {
					updateChunks(result.chunks);
				}

				if (result.reinit) {
					switch (result.reinit) {
						case "filter":
							reinitFilterResults(callbackParam);
							break;
						default:
							break;
					}
				}
			}
			btnLoader(btn, "stop");
		};
	};
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/js/modules/common-global.js
var common_global = __webpack_require__(35);
// EXTERNAL MODULE: ./node_modules/lc-select/lc_select.min.js
var lc_select_min = __webpack_require__(889);
;// CONCATENATED MODULE: ./src/js/modules/form-custom-select.js


if (!window.selectsInit) {
	window.selectsInit = () => {
		new lc_select('select[data-select="custom"]', {
			wrap_width: "100%",
			pre_placeh_opt: true,
			enable_search: false,
		});
	};
}

;// CONCATENATED MODULE: ./src/js/modules/common.js
function stickyHeader() {
	const header = document.querySelector("header"),
		isOntopClass = "is-ontop",
		isStickyClass = "is-sticky",
		isHiddenClass = "is-hidden";

	if (!header) return;

	let lastScrollTop = 0;

	const handleScroll = () => {
		if (window.scrollY == 0) {
			header.classList.add(isOntopClass);
		}
		if (window.scrollY > 88) {
			if (window.scrollY > lastScrollTop || 0) {
				header.classList.remove(isOntopClass);
				header.classList.add(isHiddenClass);
			} else if (window.scrollY < lastScrollTop) {
				header.classList.add(isStickyClass);
				header.classList.remove(isHiddenClass);
			}
		}
		lastScrollTop = window.scrollY;
	};

	window.addEventListener("scroll", handleScroll);
}

function hamburgerMenu() {
	const navContainer = document.querySelector(".container.nav"),
		navMenu = document.querySelector(".nav__menu"),
		menuToggler = document.getElementById("menu-toggle"),
		hideNavClass = "hide-nav";

	menuToggler.addEventListener("change", () => {
		if (!menuToggler.checked) {
			overlay(0);
			navMenu.classList.remove(hideNavClass);
		} else {
			overlay(1);
			let headerAlert = document.querySelector(".header-alert");
			if (headerAlert) {
				navMenu.style.top = `${navContainer.getBoundingClientRect().top * -1}px`;
			}
		}
	});

	document.addEventListener("click", (e) => {
		// if (!navMenu.contains(e.target) && menuToggler.checked) {
		if (menuToggler.checked) {
			menuToggler.click();
		}
	});
}

function modalHandler() {
	let createModal = (type = false) => {
		const modalClass = "modal",
			modalExist = document.querySelector(`.${modalClass}`);
		if (modalExist) modalExist.remove();

		const modal = document.createElement("div"),
			btn = document.createElement("button");

		modal.classList.add(modalClass, "scrollblock");
		if (type) modal.classList.add(`is-${type}`);
		btn.classList.add("btn", "btn_close", "btn_close-modal", "js-modal-close");
		btn.ariaLabel = "Закрыть";
		modal.appendChild(btn);
		document.body.appendChild(modal);
		return modal;
	};

	let fetchByUrl = async (url, origin) => {
		if (!url) return;

		let boxWidth = origin.dataset.boxWidth || false,
			boxMaxWidth = origin.dataset.boxMaxWidth || false,
			boxType = origin.dataset.boxType || false;

		try {
			let response = await fetch(url);
			if (!response.ok) {
				return;
			}
			let result = await response.json();
			if (result.status === true) {
				if (result.nocache === true) {
					setModalContent(result.content, { width: boxWidth, maxWidth: boxMaxWidth, type: boxType });
				} else {
					const key = getRandomStr(8);
					setModalContent(result.content, { width: boxWidth, maxWidth: boxMaxWidth, type: boxType, origin: origin, key: key });
				}
				if (result.svg) {
					addToSvgSprite(result.svg);
				}
			} else {
				console.error(`Error: ${JSON.stringify(result)}`);
			}
		} catch (e) {
			console.error(e);
			return;
		}
	};

	let setModalContent = (content, arg) => {
		const modalWrapper = createModal(arg.type),
			menuToggler = document.getElementById("menu-toggle"),
			isActiveClass = "is-active";

		if (arg.width) modalWrapper.style.width = `${parseInt(arg.width)}px`;
		if (arg.maxWidth) modalWrapper.style.maxWidth = `${parseInt(arg.maxWidth)}px`;
		modalWrapper.insertAdjacentHTML("beforeend", content);

		if (modalWrapper.getBoundingClientRect().height + modalWrapper.getBoundingClientRect().top > window.innerHeight) {
			modalWrapper.style.bottom = "50px";
		}

		reinitModalResults(modalWrapper);

		setTimeout(() => {
			menuToggler.checked = false;
			modalWrapper.classList.add(isActiveClass);
			overlay(1);
		}, 10);

		if (arg.origin && arg.key) {
			arg.origin.dataset.storageKey = arg.key;
			localStorage.setItem(arg.key, content);
		}
	};

	let reinitModalResults = (target) => {
		// inputFetch(target);
		// inputQuickSearch(target);
		selectsInit();
		globalForm.validation();
	};

	let videoModal = async (url, origin) => {
		if (!url) return;

		let boxWidth = origin.dataset.boxWidth || false,
			boxMaxWidth = origin.dataset.boxMaxWidth || false,
			boxType = origin.dataset.boxType || false;

		// шаблон
		const div = document.createElement("div");
		div.classList.add("modal__body", "_player");
		div.innerHTML = `<iframe src="${url}" frameborder="0" allowfullscreen="allowfullscreen"></iframe>`;

		setModalContent(div.outerHTML, { width: boxWidth, maxWidth: boxMaxWidth, type: boxType });
	};

	let imageModal = async (url, origin) => {
		if (!url) return;

		let boxWidth = origin.dataset.boxWidth || false,
			boxMaxWidth = origin.dataset.boxMaxWidth || false,
			boxType = origin.dataset.boxType || false;

		// шаблон
		const div = document.createElement("div");
		div.classList.add("modal__body", "_image");
		div.innerHTML = `<img src="${url}" alt=""></img>`;

		setModalContent(div.outerHTML, { width: boxWidth, maxWidth: boxMaxWidth, type: boxType });
	};

	// modal by click
	document.addEventListener("click", (e) => {
		const modalClass = "modal",
			modalExist = document.querySelector(`.${modalClass}`),
			modalShow = e.target.closest(".js-modal-show"),
			modalClose = e.target.closest([".js-modal-close", ".overlay"]);

		if (modalShow) {
			e.preventDefault();
			let url = "",
				params = modalShow.dataset.params,
				boxWidth = modalShow.dataset.boxWidth,
				boxMaxWidth = modalShow.dataset.boxMaxWidth,
				boxType = modalShow.dataset.boxType,
				storageKey = modalShow.dataset.storageKey;

			// from storage
			if (storageKey) {
				let content = localStorage.getItem(storageKey);
				if (content) {
					setModalContent(content, { width: boxWidth, maxWidth: boxMaxWidth, type: boxType });
					return;
				}
			}

			// yt video
			if (boxType == "video") {
				url = modalShow.href;
				if (!url) return;
				videoModal(url, modalShow);
				return;
			}

			// simple image
			if (boxType == "image" && !modalShow.dataset.fetch) {
				url = modalShow.href;
				if (!url) return;
				imageModal(url, modalShow);
				return;
			}

			// fetch
			url = modalShow.dataset.url;
			if (!url) return;

			if (params) {
				let param,
					searchParams = new URLSearchParams();

				try {
					param = JSON.parse(params);
					Object.keys(param).forEach((key) => {
						searchParams.set(key, param[key]);
					});
				} catch (e) {
					param = params;
					searchParams.set("params", param);
				}

				let amp = url.includes("?") ? "&" : "?",
					queryStr = amp + searchParams.toString();

				if (!queryStr) return;
				url += queryStr;
			}

			fetchByUrl(url, modalShow);
		}

		if (modalExist && (!modalExist.contains(e.target) || modalClose)) {
			modalExist.remove();
			overlay(0);
		}
	});
}

function backgroundToggler() {
	const togglerButton = document.querySelector(".about__body-button"),
		backgroundBlock = document.querySelector(".about-bgr__toggle"),
		isActiveClass = "is-hovered";

	if (!togglerButton || !backgroundBlock) return;

	togglerButton.addEventListener("mouseenter", () => {
		backgroundBlock.classList.toggle(isActiveClass);
	});
	togglerButton.addEventListener("mouseleave", () => {
		backgroundBlock.classList.toggle(isActiveClass);
	});
}

function scrollToTop() {
	const toTopBtn = document.getElementById("scrollToTop"),
		toTopBtnClass = "is-visible";

	function scrollFunction() {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			toTopBtn.classList.add(toTopBtnClass);
		} else {
			toTopBtn.classList.remove(toTopBtnClass);
		}
	}

	function toTop() {
		document.body.scrollTop = 0; // Safari
		document.documentElement.scrollTop = 0;
	}

	window.onscroll = function () {
		scrollFunction();
	};

	document.addEventListener("click", (e) => {
		if (e.target === toTopBtn) toTop();
	});
}

// EXTERNAL MODULE: ./node_modules/vanilla-text-mask/dist/vanillaTextMask.js
var vanillaTextMask = __webpack_require__(213);
;// CONCATENATED MODULE: ./src/js/modules/form-submit.js


function submitPrevent() {
	document.addEventListener("keydown", (e) => {
		if (e.target.tagName == "INPUT" && e.key == "Enter") {
			if (e.target.dataset.submit == "false" || e.target.closest("form").dataset.submit == "false") {
				e.preventDefault();
			}
		}
	});
}

// disable submit by enter
// export function submitPrevent() {
// 	document.addEventListener("keydown", (e) => {
// 		if (e.target.tagName == "INPUT" && e.key == "Enter") {
// 			e.preventDefault();
// 		}
// 	});
// }

function maskHandler() {
	const errorClass = "is-error",
		charPhone = "_";

	let setMask = (el, pattern, char) => {
		(0,vanillaTextMask.maskInput)({
			inputElement: el,
			mask: pattern,
			showMask: true,
			keepCharPositions: true,
			placeholderChar: char,
		});
	};

	["focusin", "click"].forEach((evt) =>
		document.addEventListener(evt, (e) => {
			if (e.target.dataset.patternType == "phone") {
				let target = e.target,
					index = 0;
				for (let i = 0; i < target.value.length; i++) {
					if (target.value[i] == charPhone) break;
					index = i + 1;
				}
				target.setSelectionRange(index, index);
			}
		})
	);

	document.addEventListener("focusin", (e) => {
		if (e.target.dataset.patternType == "phone") {
			let el = e.target,
				pattern = ["+", "7", " ", "(", /[9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
			setMask(el, pattern, charPhone);
		}
	});

	document.addEventListener("focusout", (e) => {
		if (e.target.dataset.patternType == "phone") {
			let target = e.target,
				length = target.value.replace(/\D/g, "").length;

			target.classList.remove(errorClass);

			if (length == 1) {
				target.value = "";
				return;
			}

			if (length < 11) {
				target.classList.add(errorClass);
			}
		}
	});

	document.addEventListener("keyup", (e) => {
		if (e.target.dataset.patternType == "phone") {
			let target = e.target,
				length = target.value.replace(/\D/g, "").length;

			if (length == 11) {
				target.classList.remove(errorClass);
			}
		}
	});
}

/* https://medium.com/@damirpristav/form-validation-with-vanilla-js-using-data-attributes-on-form-elements-78ccf2c1cf34 */

let form_submit_globalForm = {};
form_submit_globalForm = {
	validation: function () {
		const forms = document.querySelectorAll("form:not(.js-novalidate)");

		if (forms.length > 0) {
			for (let form of forms) {
				const inputs = form.querySelectorAll("[data-required]");
				form.setAttribute("novalidate", "");
				form.addEventListener("submit", submitForm.bind(form, inputs));

				inputs.forEach((input) => {
					if (input.type === "email" || input.type === "tel") {
						input.addEventListener("focusout", inputFocus);
					} else {
						input.addEventListener("input", inputChange);
					}
				});
			}
		}
	},
};


// export function validation() {
// 	const forms = document.querySelectorAll("form");

// 	if (forms.length > 0) {
// 		for (let form of forms) {
// 			const inputs = form.querySelectorAll("[data-required]");
// 			form.addEventListener("submit", submitForm.bind(form, inputs));

// 			inputs.forEach((input) => {
// 				input.addEventListener("input", inputChange);
// 			});
// 		}
// 	}
// }

function inputChange() {
	const input = this;
	validateInput(input);
}

function inputFocus() {
	const input = this;
	validateInputFocus(input);
}

function validateInput(input) {
	// Get the value and error element
	const value = input.value,
		// errorEl = input.closest("[data-formgroup]").querySelector("[data-formerror]"),
		errorClass = "is-error",
		defaultRequiredMessage = "Поле обязательно для заполнения",
		defaultEmailMessage = "Некорректный формат email",
		defaultTelMessage = "Некорректный формат телефона";

	// Declare error variable and assign null by default
	let error = null;
	// Check in input has data-required attribute and if the value is empty, and if the input is not radio or checkbox
	if ((input.type !== "radio" || input.type !== "checkbox") && input.dataset.required !== undefined && value === "") {
		error = input.dataset.requiredMessage ? input.dataset.requiredMessage : defaultRequiredMessage;
		input.classList.add(errorClass);
	}
	// Check if input is checkbox and it is not checked
	if (input.type === "checkbox" && !input.checked) {
		error = input.dataset.errorMessage ? input.dataset.errorMessage : defaultRequiredMessage;
		input.classList.add(errorClass);
	}
	/*
	// Check if input is radio
	if (input.type === "radio") {
		// Get all radio inputs in a group
		const radios = input.closest("[data-formgroup]").querySelectorAll('input[type="radio"]');
		let isChecked = false;
		let errorMsg = "";
		// Loop through radios and check if any radio is checked and if it is checked set isChecked to true
		radios.forEach((radio) => {
			if (radio.checked) {
				isChecked = true;
			}
			if (radio.dataset.errorMessage) {
				errorMsg = input.dataset.errorMessage;
			}
		});
		if (!isChecked) {
			error = errorMsg !== "" ? errorMsg : defaultRequiredMessage;
		}
	}
	// Check if input has data-minlength attribute and if value length is smaller than this attribute, if so show the error
	if (!error && input.dataset.minlength !== undefined && value.length < +input.dataset.minlength) {
		error = input.dataset.minlengthMessage ? input.dataset.minlengthMessage : `Please enter at least ${input.dataset.minlength} characters`;
		input.classList.add(errorClass);
	}
	// Check if input has data-maxlength attribute and if value length is greater than this attribute, if so show the error
	if (!error && input.dataset.maxlength !== undefined && value.length > +input.dataset.maxlength) {
		error = input.dataset.maxlengthMessage ? input.dataset.maxlengthMessage : `Only ${input.dataset.maxlength} characters allowed`;
		input.classList.add(errorClass);
	}
	*/
	// Check if input has data-email attribute and if email is not valid
	// if (!error && input.dataset.email !== undefined && !validateEmail(value)) {
	if (!error && input.type === "email" && !validateEmail(value)) {
		error = input.dataset.emailMessage ? input.dataset.emailMessage : defaultEmailMessage;
		input.classList.add(errorClass);
	}
	/*
	// Check if input has data-match attribute and if value is not equal to the value of the element with name attribute equal to this data-match attribute
	if (!error && input.dataset.match !== undefined && value !== input.closest("[data-form]").querySelector(`[name="${input.dataset.match}"]`).value) {
		error = input.dataset.matchMessage ? input.dataset.matchMessage : "Fields are not the same";
		input.classList.add(errorClass);
	}
	// Check if input has data-match-with attribute
	if (input.dataset.matchWith !== undefined) {
		// Get the input that has a name attribute equal to value of data-match-with attribute
		const inputToMatch = input.closest("[data-form]").querySelector(`[name="${input.dataset.matchWith}"]`);
		// Get the error element of that input
		const inputToMatchError = inputToMatch.closest("[data-formgroup]").querySelector("[data-formerror]");
		// If values are equal remove error class from input and hide error element
		if (value === inputToMatch.value) {
			inputToMatch.classList.remove(errorClass);
			inputToMatchError.style.display = "none";
		} else {
			// Add error class to input and show error element
			inputToMatch.classList.add(errorClass);
			inputToMatchError.style.display = "block";
			inputToMatchError.innerText = inputToMatch.dataset.matchMessage || "Fields are not the same";
		}
	}
	// Check if input is file input and if has data-maxfilesize attribute and if file size is greater than the value of this data-maxfilesize attribute
	if (!error && input.type === "file" && input.dataset.maxfilesize !== undefined && input.files[0].size > +input.dataset.maxfilesize * 1024) {
		error = input.dataset.maxfilesizeMessage ? input.dataset.maxfilesizeMessage : "File is too large";
		input.classList.add(errorClass);
	}
	// Check if input is file input and if it has data-allowed-types attribute and if file type is not equal to one of the values in data-allowed-type attribute
	if (!error && input.type === "file" && input.dataset.allowedTypes !== undefined && !input.dataset.allowedTypes.includes(input.files[0].type.split("/")[1])) {
		error = input.dataset.allowedTypesMessage ? input.dataset.allowedTypesMessage : "Invalid file type";
		input.classList.add(errorClass);
	}
	*/

	// Проверка длины номера телефона
	if (!error && input.type === "tel" && value.replace(/\D/g, "").length < 11) {
		error = input.dataset.telMessage ? input.dataset.telMessage : defaultTelMessage;
		input.classList.add(errorClass);
	}

	// If there is no error remove error class from the input, remove message from error element and hide it
	if (!error) {
		input.classList.remove(errorClass);
		// errorEl.innerText = "";
		// errorEl.style.display = "none";
	} else {
		// If there is error set error message and show error element
		// errorEl.innerText = error;
		// errorEl.style.display = "block";
	}
	return error;
}

function validateInputFocus(input) {
	// для более красивого поведения полей email и tel: ошибки нет при снятии фокуса с пустого поля, а также в процессе ввода
	// проверка корректности поля пройдёт при попытке отправки формы (будет вызван обычный validateInput)
	const value = input.value,
		errorClass = "is-error",
		defaultEmailMessage = "Некорректный формат email",
		defaultTelMessage = "Некорректный формат телефона";

	let error = null;

	if (!error && input.type === "email" && !validateEmail(value)) {
		if (value !== "") {
			error = input.dataset.emailMessage ? input.dataset.emailMessage : defaultEmailMessage;
			input.classList.add(errorClass);
		}
	}

	// Проверка длины номера телефона
	if (!error && input.type === "tel" && value.replace(/\D/g, "").length < 11) {
		error = input.dataset.telMessage ? input.dataset.telMessage : defaultTelMessage;
		input.classList.add(errorClass);
	}

	if (!error) {
		input.classList.remove(errorClass);
	}
	return error;
}

function submitForm(inputs, e) {
	e.preventDefault();

	const errors = [],
		errorsClass = "has-errors",
		form = e.target,
		submitButton = form.querySelector("button[type='submit']"),
		ignoreSubmitFor = ["js-modal-submit", "js-login"];

	inputs.forEach((input) => {
		const error = validateInput(input);
		if (error) {
			errors.push(error);
		}
	});

	if (errors.length === 0) {
		// https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent/submitter#browser_compatibility
		// console.log(e.submitter.dataset);

		// if json params set on submit button, add them to form as hidden inputs
		let param,
			paramExists,
			params = submitButton.dataset.params;

		if (params) {
			let parsed = JSON.parse(params);
			Object.keys(parsed).forEach((key) => {
				paramExists = form.querySelector(`input[type="hidden"][name="${key}"]`);
				paramExists ? paramExists.remove() : "";
				param = document.createElement("input");
				param.type = "hidden";
				param.name = key;
				param.value = parsed[key];
				form.prepend(param);
				return;
			});
		}

		form.classList.remove(errorsClass);

		if (form.dataset.fetch !== "true") {
			form.submit();
			btnLoader(submitButton); // will not disabled after classic submit call
		} else {
			const contains = (el) => form.classList.contains(el);
			if (ignoreSubmitFor.some(contains)) return;

			let url = form.dataset.url,
				data = new FormData(form);

			(async () => {
				try {
					btnLoader(submitButton);

					let response = await fetch(url, {
						method: "POST",
						body: data,
					});
					if (!response.ok) {
						return;
					}
					let result = await response.json();

					if (result) {
						showSubmitStatus(result, submitButton);
					}

					btnLoader(submitButton, "stop");
				} catch (e) {
					console.error(e);
					return;
				}
			})();
		}
	} else {
		e.stopPropagation();
		form.classList.add(errorsClass);
	}
}

function showSubmitStatus(response, btn) {
	const status = document.createElement("div"),
		submitStatusClass = "submit-status",
		submitReplacedClass = "submit-status_replaced",
		submitConditionClass = response.status === true ? "submit-status_success" : "submit-status_error";

	if (!response.message) return;
	status.innerHTML = response.message;

	let statusExists = document.querySelector(`.${submitStatusClass}`);
	statusExists ? statusExists.remove() : "";

	if (response.hideField === true) {
		const modal = document.querySelector(".modal"),
			modalHeaderClass = "modal__head",
			modalBodyClass = "modal__body";

		modal.querySelectorAll(`.${modalHeaderClass}, .${modalBodyClass}`).forEach((e) => e.remove());

		status.classList.add(submitStatusClass, submitConditionClass, submitReplacedClass);
		modal.append(status);
	} else {

		if (response.clearForm === true) {
			// очистить форму
		}

		status.classList.add(submitStatusClass, submitConditionClass);
		btn.parentElement.prepend(status);
		response.status === true ? (btn.disabled = true) : "";
	}
}

// Validate email
function validateEmail(email) {
	let re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

;// CONCATENATED MODULE: ./src/js/common.js

// import { useDynamicAdapt } from "./modules/common-dynamicAdapt.js";
// import { fileInputInit } from "./modules/form-custom-file-input.js";




// import "./modules/common-cookies.js";

addEventListener("DOMContentLoaded", () => {
	isTouchDevice();
	selectsInit();
	loadMore();

	stickyHeader();
	hamburgerMenu();
	modalHandler();
	backgroundToggler();
	scrollToTop();

	// 	showHidden();
	// 	setActive();
	// 	catalogItemGalleriesInit();
	// 	catalogItemGalleryHandler();
	// 	useDynamicAdapt();
	// 	setFavourites();
	// 	selectsInit();
	// 	fileInputInit();
	// 	tagsCollapseHandler();

	// 	fn.stickyHeader();
	// 	fn.hamburgerMenu();
	// 	fn.submenuPostionOnOverflowNav();
	// 	fn.modalHandler();
	// 	fn.edgePopupHandler();
	// 	fn.sectionClose();
	// 	fn.collapseHandler();
	// 	fn.collapseTargetHandler();
	// 	fn.searchForm();
	// 	fn.inputFetch();
	// 	fn.inputQuickSearch();
	// 	fn.accordion();
	// 	fn.accordionFooter();
	// 	fn.dropdownShow();
	// 	fn.dropdownClose();
	// 	fn.contentGalleryPopup();
	// 	fn.changeAmount();
	// 	fn.getContent();
	// 	fn.clickAndDrag();

	submitPrevent();
	maskHandler();

	Object.assign(window, { globalForm: form_submit_globalForm });
	form_submit_globalForm.validation();
});

})();

/******/ })()
;