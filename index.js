const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

var coords = [
    [1499, 1079],
    [1499, 1064],
    [1509, 1056],
    [1518, 1039],
    [1541, 1032],
    [1553, 1035],
    [1563, 1035],
    [1570, 1025],
    [1577, 1030],
    [1589, 1031],
    [1599, 1031],
    [1610, 1031],
    [1608, 1019],
    [1612, 1012],
    [1627, 1011],
    [1621, 1002],
    [1615, 990],
    [1619, 982],
    [1642, 982],
    [1654, 981],
    [1679, 980],
    [1695, 981],
    [1708, 973],
    [1716, 959],
    [1732, 944],
    [1752, 932],
    [1770, 921],
    [1798, 913],
    [1816, 911],
    [1827, 898],
    [1832, 886],
    [1839, 895],
    [1848, 900],
    [1856, 896],
    [1862, 888],
    [1868, 883],
    [1877, 889],
    [1880, 897],
    [1880, 1075]
];
ctx.beginPath();
ctx.globalAlpha = 0.5;
var primaryMap = document.querySelector('#primary-map');

function drawPoly(coords) {
    ctx.moveTo(coords[0][0], coords[0][1]);
    for (let i = 0; i < coords.length; i++) {
        ctx.lineTo(coords[i][0], coords[i][1]);
    }

    ctx.lineTo(coords[0][0], coords[0][1]);
    ctx.fillStyle = "#FF0000";
    ctx.fill()
    ctx.stroke();

    var area = document.createElement('area');
    area.href = '1.html';
    area.shape = 'poly';
    area.coords = '0, 0, 0, 100, 100, 100, 100, 0'
    primaryMap.appendChild(area);
}

// canvas.addEventListener('click', (e) => {
//     console.log(e.x, e.y);
//     ctx.moveTo(e.x + 5, e.y);
//     ctx.fillStyle = "#FF0000";
//     ctx.arc(e.x, e.y, 5, 0, 2 * Math.PI);
//     ctx.fill()
//     ctx.stroke();

// })






drawPoly(coords);
// drawPoly(coords, 100);
