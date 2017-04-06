var placerNodes = document.getElementsByClassName("action");
if(placerNodes.length > 0)
{
    // 名前 作品名取得

    var placer = placerNodes[0];
    var button = document.createElement("button");
    button.innerText = "画像をダウンロード"
    button.classList.toggle('_button');
    button.type = "button"
    button.style.float = "right";
    button.style.marginTop = "10px";

    button.onclick = function(){
        alert("");
    }
    
    placer.appendChild(button);
}
 