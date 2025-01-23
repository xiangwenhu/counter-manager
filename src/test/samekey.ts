import { countManager } from "..";

console.log(`subScriber1: ${new Date().toJSON()}: 开始订阅`);
const subScriber1 = countManager.subScribe(function ({ value, isOver }) {
    console.log(`subScriber1: ${new Date().toJSON()}: value ${value}`)
}, {
    start: 5 * 1000,
    key: "down1"
});
subScriber1.startListening();

console.log(`client2: ${new Date().toJSON()}: 开始订阅`);
setTimeout(() => {
    let subScriber2 = countManager.subScribe(({ value, isOver }) => {
        console.log(`subScriber2: ${new Date().toJSON()}: value ${value}`)
    }, {
        start: 10 * 1000,
        key: "down1"
    });
    // subScriber2.startListening();
}, 800);
