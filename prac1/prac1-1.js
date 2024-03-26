`use strict`
let height = window.prompt("あなたの身長は何センチ？");
if (height == "") {
    window.alert("文字を入力して")
} else if (!height.match(/^[0-9]+$/)) {
    window.alert("半角数値で入力してください")
}
else if (height >= 100) {
    ticket = window.confirm("プレミアムチケットを持っていますか？")
    if (ticket === true) {
        window.alert("プレミアムシートに乗車可能です。")
    } else {
        window.alert("通常のシートに乗車可能です。")
    }
}else if (height >= 90) {
    window.alert("親同伴なら乗車可能です")
} else {
    window.alert("乗車できません")
}

