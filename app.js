 function fetchJsonp(){
    const s = document.createElement("script");
    s.src = "https://api.idio.co/1.0/content?key=URN4QXKCG3QD3Y5MS51A&callback=my_function&_method=get";
    document.body.appendChild(s);
}

const  my_function = function(myObj) {
    
    const data = myObj.content
    
    handleMouseOver = (event) => {
        event.style.color = "rgb(243, 33, 72)";
        
      }
      handleMouseLeave = (event) => {
        event.style.color = "#666666";
        
      }
    
    const display=data.map((e)=>{
       return `
       <a href=${e.original_url}><img src=http://${e.main_image_url.substr(2)} class="pic" /></a>
       <a href=${e.original_url}><h1 class="txt" id="text" onmouseover=handleMouseOver(this) onmouseleave=handleMouseLeave(this)>${e.title}</h1></a>
       `
    })

    document.getElementById("card").innerHTML = display 
    

    }
    
fetchJsonp()