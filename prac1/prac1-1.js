`use strict`
height = window.prompt("あなたの身長は何センチ？");
if (height >= 100) {
    ticket = window.confirm("プレミアムチケットを持っていますか？");
} if (height >= 90) {
    window.alert("保護者同伴ならいける");
} if (height = "") {
    window.alert("入力がないと判定できません")
} if (height.match(/^[0-9]+$/)) {
} else {
    window.alert("半角数値でかきなさい")
}

if (ticket === true) {
    window.alert("プレミアムシートに乗車可能です。")
} else {
    window.alert("通常のシートに乗車可能です。")
}
