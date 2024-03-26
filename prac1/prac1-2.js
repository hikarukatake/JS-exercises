`use strict`
let station = window.prompt("目的の駅を入力してください\n1 : A駅\n2 : B駅\n3 : C駅");
if(station == 1){
window.alert("快速電車が停まります")
}else if (station == 2){
window.alert("快速電車と急行電車が停まります")
} else {
    window.alert("特急列車が停まります。")
}