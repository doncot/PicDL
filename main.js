function createFilename() {
    var embTextNode = document.querySelectorAll("textarea.ui-select-all");
    if(embTextNode.length != 1) {   
        throw new Error("テキストエリアがおかしい的な？");
    }
    embText = embTextNode[0].innerHTML;
    var reg = /^(.+) \| (.+) \[pixiv\]/
    var match = embText.match(reg);
    filename = "[" + match[1] + "] " + match[2];

    return filename;
}

var placerNodes = document.getElementsByClassName("action");
if(placerNodes.length > 0) {
    // 名前 作品名取得
    alert(createFilename());

    var placer = placerNodes[0];
    var button = document.createElement("button");
    button.innerText = "画像をダウンロード"
    button.classList.toggle('_button');
    button.type = "button"
    button.style.float = "right";
    button.style.marginTop = "10px";

    button.onclick = function() {
        alert("");
    }
    
    placer.appendChild(button);
}