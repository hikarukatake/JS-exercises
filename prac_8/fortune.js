"use strict";
function click1() {
    let name1 = document.getElementById("addItem").value;
    let result = ["大吉", "中吉", "小吉", "吉", "凶"];
    let result1 = ["daikiti.jpeg", "chukichi.png", "syoukiti.jpg","kichi.png", "kyo.png", ]
    const uraura = Math.floor(Math.random() * result.length);

    let addHtml = `<img src="img/${result1[uraura]}">`;
    list.textContent = name1 + "さんの運勢は" + result[uraura] ;
    addLink.innerHTML = addHtml;


}