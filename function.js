    var elements = document.querySelectorAll('img[data-src]');
    
    var index = 0;
    
    var lazyLoad = function() { 
    
    if (index >= elements.length) return;
    var item = elements[index]; 
    
    if (this.scrollY + this.innerHeight > item.offsetTop) {
      var src = item.getAttribute("data-src");

      item.src = src;
      item.addEventListener("load", function () {
        item.removeAttribute("data-src");
      });
      index++;
      lazyLoad();
    }
    };
    
    window.addEventListener('scroll', lazyLoad);
    