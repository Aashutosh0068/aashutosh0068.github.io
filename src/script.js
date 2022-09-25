function navDisplay() {
    if(nav.style.display== 'none'){
  document.getElementById("nav").style.display = "block";
  document.getElementById("title").style.marginBottom ="0px";
  document.getElementById("title").style.borderRadius="0px";
    }
    else{
        document.getElementById("nav").style.display="none";
        document.getElementById("title").style.marginBottom="10px";
        document.getElementById("title").style.borderBottomRightRadius="8px";
        document.getElementById("title").style.borderBottomLeftRadius="8px";
        document.getElementById("title").style
    }
}
