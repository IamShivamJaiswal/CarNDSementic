    function addIframe() {
      var element = document.getElementById("share");
      var makeIframe = document.createElement("iframe");
      makeIframe.setAttribute("src", "https://slappdev.appspot.com/signin");
      makeIframe.setAttribute("overflow","auto");
      makeIframe.setAttribute( "width","100%")
      makeIframe.setAttribute( "height","100%")
      makeIframe.setAttribute("scrolling","no")
      makeIframe.setAttribute("frameBorder","0")
      element.appendChild(makeIframe);
    }
    
    window.onload = function () { 
      addIframe();
    }
