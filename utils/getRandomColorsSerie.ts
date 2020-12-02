import COLORS from "../const";


export default function getRandomColorsSerie() {
    const colors = [];
    for (let index = 0; index < 4; index++) {
        colors[index] = Math.floor(Math.random() * Object.values(COLORS).length)
    }
    return colors;
}