let button = document.getElementById("button")
if(button){
    let themes = button.getAttribute("themes")
    if(themes == "dark"){
    button.setAttribute("style", `
    background-color: rgb(55 65 81) ; 
    color: rgb(249 250 251); 
    padding: 1rem;
    border: 1px solid rgb(209 213 219); 
    font-size: 15px; 
    font-weight: bold; 
    display:flex; 
    justify-content: center;
    align-items: center;
    cursor: pointer; 
    border-radius: 0.375rem;
    `)
    button.onmouseover = function() {
        button.style.color = "rgb(243 244 246)";
        button.style.backgroundColor = "rgb(31 41 55)";
        };
    button.onmouseout = function() {
        button.style.color = "rgb(249 250 251)";
        button.style.backgroundColor = "rgb(55 65 81)";
        };
    }else{
    button.setAttribute("style", `
    background-color: rgb(249 250 251) ; 
    color: rgb(107 114 128); 
    padding: 1rem;
    border: 1px solid rgb(209 213 219); 
    font-size: 15px; 
    font-weight: bold; 
    display:flex; 
    justify-content: center;
    align-items: center;
    cursor: pointer; 
    border-radius: 0.375rem;
    `)
    button.onmouseover = function() {
        button.style.color = "rgb(75 85 99)";
        button.style.backgroundColor = "rgb(243 244 246)";
        };
    button.onmouseout = function() {
        button.style.color = "rgb(107 114 128)";
        button.style.backgroundColor = "rgb(249 250 251)";
        };
    }
      let imgsrc = button.getAttribute("imgsrc")
      if(imgsrc){
        const img = document.createElement("img");
        img.src = imgsrc;
        img.setAttribute(
            "style",
            "margin-right:10px; width: 15px; height: 15px;"
            );
         button.appendChild(img);
      }
      let text = button.getAttribute("text")
      if(text){
        const title = document.createElement("div");
        title.innerHTML = text;
        button.appendChild(title);
      }else{
        //Create Text
        const title = document.createElement("div");
        title.innerHTML = "Click Here";
        button.appendChild(title);
      }

}
