(function(){
if (window.myBookmarklet !== undefined){
myBookmarklet();
}
else {
document.body.appendChild(document.createElement('script')).
src='http://192.168.1.131:8000/static/js/bookmarklet.js?r='+Math.
floor(Math.random()*99999999999999999999);
}
})();
