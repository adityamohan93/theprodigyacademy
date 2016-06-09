!function(e){function t(e){return RegExp("(^|\\s+)"+e+"(\\s+|$)")}function n(e,t){var n=s(e,t)?i:a
n(e,t)}if(Modernizr.touch){var s,a,i
"classList"in document.documentElement?(s=function(e,t){return e.classList.contains(t)},a=function(e,t){e.classList.add(t)},i=function(e,t){e.classList.remove(t)}):(s=function(e,n){return t(n).test(e.className)},a=function(e,t){s(e,t)||(e.className=e.className+" "+t)},i=function(e,n){e.className=e.className.replace(t(n)," ")})
var c={hasClass:s,addClass:a,removeClass:i,toggleClass:n,has:s,add:a,remove:i,toggle:n}
"function"==typeof define&&define.amd?define(c):e.classie=c,[].slice.call(document.querySelectorAll("ul.grid > li > figure")).forEach(function(e,t){e.querySelector("figcaption").addEventListener("touchstart",function(e){e.stopPropagation()},!1),e.addEventListener("touchstart",function(e){c.toggle(this,"visible")},!1)})}}(window)
