document.addEventListener("DOMContentLoaded", function(){
    var floater = document.getElementById("floater");
    var startMouse = {x: 0, y: 0};
    var startElement = {x: 0, y: 0};
    var isMoving = false;
    var isExpanded = false;

    // ==========================
    // = Let the float be moved =
    // ==========================

    document.addEventListener("mousedown", function(e){
      var target = e.target;
      if(target == floater){
        startMouse.x = e.clientX;
        startMouse.y = e.clientY;
        
        startElement.x = target.offsetLeft;
        startElement.y = target.offsetTop;
        
        isMoving = true;
        
        document.addEventListener("mousemove", floatMove, false);
      }
      
    }, false);
    
    document.addEventListener("mouseup", function(e){
      if(isMoving){
        document.removeEventListener("mousemove", floatMove);
  
        isMoving = false;
      }
      
    }, false);
  
    floater.addEventListener("dragstart", function(e){ e.preventDefault(); }, false)
  
    var floatMove = function(e){
      var x = startElement.x + e.clientX - startMouse.x;
      var y = startElement.y + e.clientY - startMouse.y;    
      
      if(x < 0){ x = 0; }
      if(y < 0){ y = 0; }
      
      if(x > container.offsetWidth - floater.offsetWidth){ x = container.offsetWidth - floater.offsetWidth; }
      if(y > container.offsetHeight - floater.offsetHeight){ y = container.offsetHeight - floater.offsetHeight; }    
      
      
      floater.style.left = x + "px";
      floater.style.top = y + "px";    
      
    }
    floater.addEventListener('keypress', function(e){
        if(isExpanded == false) {
            anime({
                targets: floater,
                width: (window.innerWidth-50)+'px',
                easing: 'easeInOutElastic'
            })
            isExpanded = true;
        } else {
            anime({
                targets: floater,
                width: '300px',
                easing: 'easeInOutElastic'
            })
            isExpanded = false;
        }
    })
  });