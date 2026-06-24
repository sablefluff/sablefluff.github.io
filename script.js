var sidebarElement = document.getElementById("sidebar");
if (sidebarElement) {
    sidebarElement.innerHTML = "Failed to load :("

    var xhr= new XMLHttpRequest(); // https://stackoverflow.com/questions/3535055/load-html-file-contents-to-div-without-the-use-of-iframes
    xhr.open("GET", "/sidebar.html", true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        sidebarElement.innerHTML= this.responseText;
    };
    xhr.send();

}