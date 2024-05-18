//Constante de configuracion para la grafica de peso para la talla en niños de 0 a 2 años
const config = {
    minX: 45,
    maxX: 110,
    minY: 1,
    maxY: 26,
    borderWidth: 1,
    padding: 80,
    incrementoX: 5,
    incrementoY: 1,
    gridColor: '#e0e0e0'
};
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de configuracion para la grafica de peso para la talla en niños de 2 a 5 años
const config_2 = {
    minX: 65,
    maxX: 120,
    minY: 5,
    maxY: 32,
    borderWidth: 1,
    padding: 80,
    paddingBottom: 40,
    paddingLeft: 80,
    incrementoX: 5,
    incrementoY: 1,
    gridColor: '#e0e0e0'
};
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de configuracion para la grafica de la talla en niños de 2 a 5 años
const config_3 = {
    minX: 24,
    maxX: 60,
    minY: 80,
    maxY: 125,
    borderWidth: 1,
    padding: 80,
    paddingBottom: 40,
    paddingLeft: 80,
    incrementoX: 2,
    incrementoY: 5,
    gridColor: '#e0e0e0',
    segmentWidth: 10,
    numberOfSegments: 3,
};
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de configuracion para la grafica de peso para la edad en niños de 2 a 5 años
const config_4 = {
    minX: 24,
    maxX: 60,
    minY: 8,
    maxY: 26,
    borderWidth: 1,
    padding: 80,
    paddingBottom: 40,
    paddingLeft: 80,
    incrementoX: 2,
    incrementoY: 1,
    gridColor: '#e0e0e0',
    segmentWidth: 10,
    numberOfSegments: 3,
};
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de configuracion para la grafica de imc para la edad en niños de 5 a 17 años
const config_5 = {
    minX: 60,
    maxX: 204,
    minY: 12,
    maxY: 34,
    borderWidth: 1,
    padding: 80,
    paddingBottom: 40,
    paddingLeft: 80,
    incrementoX: 12,
    incrementoY: 2,
    gridColor: '#e0e0e0',
    segmentWidth: 10,
    numberOfSegments: 3,
};
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de configuracion para la grafica de la talla para la edad en niños de 5 a 17 años
const config_6 = {
    minX: 60,
    maxX: 204,
    minY: 90,
    maxY: 210,
    borderWidth: 1,
    padding: 80,
    paddingBottom: 40,
    paddingLeft: 80,
    incrementoX: 12,
    incrementoY: 10,
    gridColor: '#e0e0e0',
    segmentWidth: 10,
    numberOfSegments: 3,
};
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de configuracion para la grafica de imc para la edad en niños de 2 a 5 años
const config_7 = {
    minX: 24,
    maxX: 60,
    minY: 12,
    maxY: 22,
    borderWidth: 1,
    padding: 80,
    paddingBottom: 40,
    paddingLeft: 80,
    incrementoX: 2,
    incrementoY: 1,
    gridColor: '#e0e0e0',
    segmentWidth: 10,
    numberOfSegments: 3,
};
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de configuracion para la grafica de talla para la edad en niños de 0 a 2 años
const config_8 = {
    minX: 0,
    maxX: 24,
    minY: 45,
    maxY: 100,
    borderWidth: 1,
    padding: 80,
    paddingBottom: 40,
    paddingLeft: 80,
    incrementoX: 2,
    incrementoY: 5,
    gridColor: '#e0e0e0',
    segmentWidth: 10,
    numberOfSegments: 3,
};
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de configuracion para la grafica de perimetro cefalico para la edad en niños de 0 a 5 años
const config_9 = {
    minX: 0,
    maxX: 60,
    minY: 30,
    maxY: 56,
    borderWidth: 1,
    padding: 80,
    paddingBottom: 40,
    paddingLeft: 80,
    incrementoX: 2,
    incrementoY: 2,
    gridColor: '#e0e0e0',
    segmentWidth: 10,
    numberOfSegments: 3,
};
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de configuracion para la grafica de imc para la edad en niños de 0 a 2 años
const config_10 = {
    minX: 0,
    maxX: 24,
    minY: 9,
    maxY: 24,
    borderWidth: 1,
    padding: 80,
    paddingBottom: 40,
    paddingLeft: 80,
    incrementoX: 2,
    incrementoY: 1,
    gridColor: '#e0e0e0',
    segmentWidth: 10,
    numberOfSegments: 3,
};
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de configuracion para la grafica de peso para la edad en niños de 0 a 2 años
const config_11 = {
    minX: 0,
    maxX: 24,
    minY: 1,
    maxY: 18,
    borderWidth: 1,
    padding: 80,
    paddingBottom: 40,
    paddingLeft: 80,
    incrementoX: 2,
    incrementoY: 1,
    gridColor: '#e0e0e0',
    segmentWidth: 10,
    numberOfSegments: 3,
};
///////////////////////////////////////////////////////////////////////////////////////////////


//Constante de puntos para la grafica de peso para la talla en niños de 0 a 2 años
const puntos = [
    { y1: 3.5, y2: 23.5, color: 'red', discontinua: false },
    { y1: 3.4, y2: 22, color: 'red', discontinua: true },
    { y1: 3.3, y2: 20.5, color: 'orange', discontinua: false },
    { y1: 3.2, y2: 19, color: 'green', discontinua: false },
    { y1: 3.1, y2: 17.5, color: 'orange', discontinua: false },
    { y1: 3.0, y2: 16, color: 'red', discontinua: true },
    { y1: 2.9, y2: 14.5, color: 'red', discontinua: false },
];
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de puntos para la grafica de peso para la talla en niños de 2 a 5 años
const puntos_2 = [
    { y1: 12, y2: 30, color: 'red', discontinua: false },
    { y1: 11.3, y2: 27, color: 'red', discontinua: true },
    { y1: 10.6, y2: 25, color: 'orange', discontinua: false },
    { y1: 9.9, y2: 23.4, color: 'green', discontinua: false },
    { y1: 9.5, y2: 21.6, color: 'orange', discontinua: false },
    { y1: 9.0, y2: 19.9, color: 'red', discontinua: true },
    { y1: 8.6, y2: 18.2, color: 'red', discontinua: false },
];
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de puntos para la grafica de la talla en niños de 2 a 5 años
const puntos_3 = [
    { y1: 93.5, y2: 119, color: 'black', discontinua: false },
    { y1: 90.2, y2: 114, color: 'black', discontinua: false },
    { y1: 87, y2: 110, color: 'green', discontinua: false },
    { y1: 84, y2: 105.6, color: 'orange', discontinua: false },
    { y1: 81, y2: 101, color: 'red', discontinua: true },
];
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de puntos para la grafica de peso para la edad en niños de 2 a 5 años
const puntos_4 = [
    { y1: 15.3, y2: 24.2, color: 'black', discontinua: false },
    { y1: 13.7, y2: 21, color: 'black', discontinua: false },
    { y1: 12.1, y2: 18.3, color: 'green', discontinua: false },
    { y1: 10.8, y2: 16, color: 'orange', discontinua: false },
    { y1: 9.7, y2: 14, color: 'red', discontinua: true },
];
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de puntos para la grafica de imc para la edad en niños de 5 a 17 años
const puntos_5 = [
    { y1: 18.2, y2: 29.8, color: 'red', discontinua: false },
    { y1: 16.4, y2: 25.4, color: 'red', discontinua: true },
    { y1: 14.9, y2: 22.1, color: 'green', discontinua: false },
    { y1: 14.1, y2: 19.7, color: 'orange', discontinua: false },
    { y1: 13, y2: 17.6, color: 'red', discontinua: false },
];
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de puntos para la grafica de la talla para la edad en niños de 5 a 17 años
const puntos_6 = [
    { y1: 120, y2: 190.2, color: 'black', discontinua: false },
    { y1: 115, y2: 185, color: 'black', discontinua: false },
    { y1: 110, y2: 177, color: 'green', discontinua: false },
    { y1: 105, y2: 169.2, color: 'orange', discontinua: false },
    { y1: 100, y2: 162, color: 'red', discontinua: true },
];
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de puntos para la grafica de imc para la edad en niños de 2 a 5 años
const puntos_7 = [
    { y1: 20.5, y2: 20, color: 'red', discontinua: false },
    { y1: 18.5, y2: 17.8, color: 'red', discontinua: true },
    { y1: 16.7, y2: 15.9, color: 'orange', discontinua: false },
    { y1: 15.3, y2: 14.4, color: 'green', discontinua: false },
    { y1: 14, y2: 13.1, color: 'black', discontinua: false },
    { y1: 12.9, y2: 11.9, color: 'black', discontinua: true },
];
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de puntos para la grafica de talla para la edad en niños de 0 a 2 años
const puntos_8 = [
    { y1: 53.8, y2: 94, color: 'black', discontinua: false },
    { y1: 52.1, y2: 90.8, color: 'black', discontinua: false },
    { y1: 50, y2: 87.5, color: 'green', discontinua: false },
    { y1: 48, y2: 84.6, color: 'orange', discontinua: false },
    { y1: 46.4, y2: 81.8, color: 'red', discontinua: true },
];
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de puntos para la grafica de perimetro cefalico para la edad en niños de 0 a 5 años
const puntos_9 = [
    { y1: 37, y2: 53.8, color: 'red', discontinua: false },
    { y1: 35.9, y2: 52.4, color: 'orange', discontinua: false },
    { y1: 34.8, y2: 50.9, color: 'green', discontinua: false },
    { y1: 33.2, y2: 49.2, color: 'orange', discontinua: false },
    { y1: 32, y2: 47.8, color: 'red', discontinua: false }
];
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de puntos para la grafica de imc para la edad en niños de 0 a 2 años
const puntos_10 = [
    { y1: 18, y2: 20.4, color: 'red', discontinua: false },
    { y1: 16.3, y2: 18.5, color: 'red', discontinua: false },
    { y1: 14.7, y2: 17, color: 'orange', discontinua: false },
    { y1: 13.5, y2: 15.7, color: 'green', discontinua: false },
    { y1: 12.3, y2: 14.6, color: 'black', discontinua: false },
    { y1: 11, y2: 13.5, color: 'black', discontinua: false }
];
///////////////////////////////////////////////////////////////////////////////////////////////

//Constante de puntos para la grafica de peso para la edad en niños de 0 a 2 años
const puntos_11 = [
    { y1: 4.5, y2: 15.3, color: 'black', discontinua: false },
    { y1: 4.0, y2: 13.6, color: 'black', discontinua: false },
    { y1: 3.5, y2: 12.2, color: 'green', discontinua: false },
    { y1: 3, y2: 10.8, color: 'orange', discontinua: false },
    { y1: 2.5, y2: 9.7, color: 'red', discontinua: true },
];
///////////////////////////////////////////////////////////////////////////////////////////////


//Funcion dibujar cuadricula para la grafica de peso para la talla en niños de 0 a 2 años
function dibujarCuadricula(ctx, canvas, config) {
    ctx.strokeStyle = '#505050';
    ctx.lineWidth = 0.75;

    const espacioX = (canvas.width - 2 * config.padding) / ((config.maxX - config.minX) / config.incrementoX);
    const espacioY = (canvas.height - 2 * config.padding) / ((config.maxY - config.minY) / config.incrementoY);

    ctx.beginPath();

    for (let x = config.padding; x <= canvas.width - config.padding; x += espacioX) {
        ctx.moveTo(x, config.padding);
        ctx.lineTo(x, canvas.height - config.padding);
    }

    for (let y = config.padding; y <= canvas.height - config.padding; y += espacioY) {
        ctx.moveTo(config.padding, y);
        ctx.lineTo(canvas.width - config.padding, y);
    }

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('+3', 556, 122);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('+2', 556, 142);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('+1', 556, 162);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.fillText('0', 561, 182);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('-1', 556, 203);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('-2', 556, 223);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('-3', 556, 246);
    ctx.stroke();


    ctx.lineWidth = config.borderWidth;
    ctx.strokeRect(config.padding, config.padding, canvas.width - 2 * config.padding, canvas.height - 2 * config.padding);
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar cuadricula para la grafica de peso para la talla en niños de 2 a 5 años
function dibujarCuadricula_2(ctx, canvas, config_2) {
    ctx.strokeStyle = '#505050';
    ctx.lineWidth = 0.75;

    const espacioX = (canvas.width - 2 * config_2.padding) / ((config_2.maxX - config_2.minX) / config_2.incrementoX);
    const espacioY = (canvas.height - 2 * config_2.padding) / ((config_2.maxY - config_2.minY) / config_2.incrementoY);

    ctx.beginPath();

    for (let x = config_2.padding; x <= canvas.width - config_2.padding; x += espacioX) {
        ctx.moveTo(x, config_2.padding);
        ctx.lineTo(x, canvas.height - config_2.padding);
    }

    for (let y = config_2.padding; y <= canvas.height - config_2.padding; y += espacioY) {
        ctx.moveTo(config_2.padding, y);
        ctx.lineTo(canvas.width - config_2.padding, y);
    }

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('+3', 556, 116);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+2', 556, 159);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+1', 556, 188);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.fillText('0', 561, 211);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('-1', 556, 234);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('-2', 556, 259);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('-3', 556, 285);
    ctx.stroke();


    ctx.lineWidth = config_2.borderWidth;
    ctx.strokeRect(config_2.padding, config_2.padding, canvas.width - 2 * config_2.padding, canvas.height - 2 * config_2.padding);
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar cuadricula para la grafica de la talla en niños de 2 a 5 años
function dibujarCuadricula_3(ctx, config_3, canvas) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';

    const espacioX = (canvas.width - config_3.paddingLeft - config_3.padding) / (config_3.maxX - config_3.minX) * config_3.incrementoX;
    const espacioY = (canvas.height - config_3.paddingBottom - config_3.padding) / (config_3.maxY - config_3.minY) * config_3.incrementoY;

    ctx.beginPath();
    for (let x = config_3.paddingLeft; x <= canvas.width - config_3.padding; x += espacioX) {
        ctx.moveTo(x, config_3.padding);
        ctx.lineTo(x, canvas.height - config_3.paddingBottom);
    }

    for (let y = config_3.padding; y <= canvas.height - config_3.paddingBottom; y += espacioY) {
        ctx.moveTo(config_3.paddingLeft, y);
        ctx.lineTo(canvas.width - config_3.padding, y);
    }
    ctx.stroke();

    ctx.lineWidth = config_3.borderWidth;
    ctx.strokeRect(config_3.paddingLeft, config_3.padding, canvas.width - config_3.paddingLeft - config_3.padding, canvas.height - config_3.padding - config_3.paddingBottom);


    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+2', 551, 135);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+1', 551, 179);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.fillText('0', 554, 215);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('-1', 552, 252);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('-2', 552, 295);
    ctx.stroke();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar cuadricula para la grafica de peso para la edad en niños de 2 a 5 años
function dibujarCuadricula_4(ctx, config_4, canvas) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';

    const espacioX = (canvas.width - config_4.paddingLeft - config_4.padding) / (config_4.maxX - config_4.minX) * config_4.incrementoX;
    const espacioY = (canvas.height - config_4.paddingBottom - config_4.padding) / (config_4.maxY - config_4.minY) * config_4.incrementoY;

    ctx.beginPath();
    for (let x = config_4.paddingLeft; x <= canvas.width - config_4.padding; x += espacioX) {
        ctx.moveTo(x, config_4.padding);
        ctx.lineTo(x, canvas.height - config_4.paddingBottom);
    }

    for (let y = config_4.padding; y <= canvas.height - config_4.paddingBottom; y += espacioY) {
        ctx.moveTo(config_4.paddingLeft, y);
        ctx.lineTo(canvas.width - config_4.padding, y);
    }
    ctx.stroke();

    ctx.lineWidth = config_4.borderWidth;
    ctx.strokeRect(config_4.paddingLeft, config_4.padding, canvas.width - config_4.paddingLeft - config_4.padding, canvas.height - config_4.padding - config_4.paddingBottom);


    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+2', 551, 126);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+1', 551, 192);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.fillText('0', 554, 250);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('-1', 552, 299);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('-2', 552, 345);
    ctx.stroke();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar cuadricula para la grafica de imc para la edad en niños de 5 a 17 años
function dibujarCuadricula_5(ctx, config_5, canvas) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';

    const espacioX = (canvas.width - config_5.paddingLeft - config_5.padding) / (config_5.maxX - config_5.minX) * config_5.incrementoX;
    const espacioY = (canvas.height - config_5.paddingBottom - config_5.padding) / (config_5.maxY - config_5.minY) * config_5.incrementoY;

    ctx.beginPath();
    for (let x = config_5.paddingLeft; x <= canvas.width - config_5.padding; x += espacioX) {
        ctx.moveTo(x, config_5.padding);
        ctx.lineTo(x, canvas.height - config_5.paddingBottom);
    }

    for (let y = config_5.padding; y <= canvas.height - config_5.paddingBottom; y += espacioY) {
        ctx.moveTo(config_5.paddingLeft, y);
        ctx.lineTo(canvas.width - config_5.padding, y);
    }
    ctx.stroke();

    ctx.lineWidth = config_5.borderWidth;
    ctx.strokeRect(config_5.paddingLeft, config_5.padding, canvas.width - config_5.paddingLeft - config_5.padding, canvas.height - config_5.padding - config_5.paddingBottom);


    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+2', 551, 160);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+1', 551, 240);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.fillText('0', 554, 299);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('-1', 552, 338);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('-2', 552, 372);
    ctx.stroke();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar cuadricula para la grafica de la talla para la edad en niños de 5 a 17 años
function dibujarCuadricula_6(ctx, config_6, canvas) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';

    const espacioX = (canvas.width - config_6.paddingLeft - config_6.padding) / (config_6.maxX - config_6.minX) * config_6.incrementoX;
    const espacioY = (canvas.height - config_6.paddingBottom - config_6.padding) / (config_6.maxY - config_6.minY) * config_6.incrementoY;

    ctx.beginPath();
    for (let x = config_6.paddingLeft; x <= canvas.width - config_6.padding; x += espacioX) {
        ctx.moveTo(x, config_6.padding);
        ctx.lineTo(x, canvas.height - config_6.paddingBottom);
    }

    for (let y = config_6.padding; y <= canvas.height - config_6.paddingBottom; y += espacioY) {
        ctx.moveTo(config_6.paddingLeft, y);
        ctx.lineTo(canvas.width - config_6.padding, y);
    }
    ctx.stroke();

    ctx.lineWidth = config_6.borderWidth;
    ctx.strokeRect(config_6.paddingLeft, config_6.padding, canvas.width - config_6.paddingLeft - config_6.padding, canvas.height - config_6.padding - config_6.paddingBottom);


    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+2', 551, 151);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+1', 551, 167);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.fillText('0', 554, 190);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('-1', 552, 215);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('-2', 552, 240);
    ctx.stroke();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar cuadricula para la grafica de imc para la edad en niños de 2 a 5 años
function dibujarCuadricula_7(ctx, config_7, canvas) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';

    const espacioX = (canvas.width - config_7.paddingLeft - config_7.padding) / (config_7.maxX - config_7.minX) * config_7.incrementoX;
    const espacioY = (canvas.height - config_7.paddingBottom - config_7.padding) / (config_7.maxY - config_7.minY) * config_7.incrementoY;

    ctx.beginPath();
    for (let x = config_7.paddingLeft; x <= canvas.width - config_7.padding; x += espacioX) {
        ctx.moveTo(x, config_7.padding);
        ctx.lineTo(x, canvas.height - config_7.paddingBottom);
    }

    for (let y = config_7.padding; y <= canvas.height - config_7.paddingBottom; y += espacioY) {
        ctx.moveTo(config_7.paddingLeft, y);
        ctx.lineTo(canvas.width - config_6.padding, y);
    }
    ctx.stroke();

    ctx.lineWidth = config_7.borderWidth;
    ctx.strokeRect(config_7.paddingLeft, config_7.padding, canvas.width - config_7.paddingLeft - config_7.padding, canvas.height - config_7.padding - config_7.paddingBottom);


    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('+3', 556, 155);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('+2', 556, 232);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('+1', 556, 300);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.fillText('0', 561, 354);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('-1', 556, 395);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('-2', 556, 435);
    ctx.stroke();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar cuadricula para la grafica de talla para la edad en niños de 0 a 2 años
function dibujarCuadricula_8(ctx, config_8, canvas) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';

    const espacioX = (canvas.width - config_8.paddingLeft - config_8.padding) / (config_8.maxX - config_8.minX) * config_8.incrementoX;
    const espacioY = (canvas.height - config_8.paddingBottom - config_8.padding) / (config_8.maxY - config_8.minY) * config_8.incrementoY;

    ctx.beginPath();
    for (let x = config_8.paddingLeft; x <= canvas.width - config_8.padding; x += espacioX) {
        ctx.moveTo(x, config_8.padding);
        ctx.lineTo(x, canvas.height - config_8.paddingBottom);
    }

    for (let y = config_8.padding; y <= canvas.height - config_8.paddingBottom; y += espacioY) {
        ctx.moveTo(config_8.paddingLeft, y);
        ctx.lineTo(canvas.width - config_8.padding, y);
    }
    ctx.stroke();

    ctx.lineWidth = config_8.borderWidth;
    ctx.strokeRect(config_8.paddingLeft, config_8.padding, canvas.width - config_8.paddingLeft - config_8.padding, canvas.height - config_8.padding - config_8.paddingBottom);

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+2', 556, 128);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+1', 556, 150);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.fillText('0', 561, 172);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('-1', 556, 192);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('-2', 556, 214);
    ctx.stroke();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar cuadricula para la grafica de perimetro cefalico para la edad en niños de 0 a 5 años
function dibujarCuadricula_9(ctx, config_9, canvas) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';

    const espacioX = (canvas.width - config_9.paddingLeft - config_9.padding) / ((config_9.maxX - config_9.minX) / config_9.incrementoX);
    const espacioY = (canvas.height - config_9.paddingBottom - config_9.padding) / ((config_9.maxY - config_9.minY) / config_9.incrementoY);

    ctx.beginPath();
    for (let x = config_9.paddingLeft; x <= canvas.width - config_9.padding; x += espacioX) {
        ctx.moveTo(x, config_9.padding);
        ctx.lineTo(x, canvas.height - config_9.paddingBottom);
    }

    for (let y = config_9.padding; y <= canvas.height - config_9.paddingBottom; y += espacioY) {
        ctx.moveTo(config_9.paddingLeft, y);
        ctx.lineTo(canvas.width - config_9.padding, y);
    }
    ctx.stroke();

    ctx.lineWidth = config_9.borderWidth;
    ctx.strokeRect(config_9.paddingLeft, config_9.padding, canvas.width - config_9.paddingLeft - config_9.padding, canvas.height - config_9.padding - config_9.paddingBottom);

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('+2', 554, 118);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('+1', 554, 141);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.fillText('0', 557, 161);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('-1', 554, 185);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('-2', 554, 206);
    ctx.stroke();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar cuadricula para la grafica de imc para la edad en niños de 0 a 2 años
function dibujarCuadricula_10(ctx, config_10, canvas) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';

    const espacioX = (canvas.width - config_10.paddingLeft - config_10.padding) / ((config_10.maxX - config_10.minX) / config_10.incrementoX);
    const espacioY = (canvas.height - config_10.paddingBottom - config_10.padding) / ((config_10.maxY - config_10.minY) / config_10.incrementoY);

    ctx.beginPath();
    for (let x = config_10.paddingLeft; x <= canvas.width - config_10.padding; x += espacioX) {
        ctx.moveTo(x, config_10.padding);
        ctx.lineTo(x, canvas.height - config_10.paddingBottom);
    }

    for (let y = config_10.padding; y <= canvas.height - config_10.paddingBottom; y += espacioY) {
        ctx.moveTo(config_10.paddingLeft, y);
        ctx.lineTo(canvas.width - config_10.padding, y);
    }
    ctx.stroke();

    ctx.lineWidth = config_10.borderWidth;
    ctx.strokeRect(config_10.paddingLeft, config_10.padding, canvas.width - config_10.paddingLeft - config_10.padding, canvas.height - config_10.padding - config_10.paddingBottom);

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('+3', 554, 180);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('+2', 554, 230);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('+1', 554, 267);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.fillText('0', 554, 299);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('-1', 554, 327);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('-2', 554, 357);
    ctx.stroke();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar cuadricula para la grafica de peso para la edad en niños de 0 a 2 años
function dibujarCuadricula_11(ctx, config_11, canvas) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';

    const espacioX = (canvas.width - config_11.paddingLeft - config_11.padding) / ((config_11.maxX - config_11.minX) / config_11.incrementoX);
    const espacioY = (canvas.height - config_11.paddingBottom - config_11.padding) / ((config_11.maxY - config_11.minY) / config_11.incrementoY);

    ctx.beginPath();
    for (let x = config_11.paddingLeft; x <= canvas.width - config_11.padding; x += espacioX) {
        ctx.moveTo(x, config_11.padding);
        ctx.lineTo(x, canvas.height - config_11.paddingBottom);
    }

    for (let y = config_11.padding; y <= canvas.height - config_11.paddingBottom; y += espacioY) {
        ctx.moveTo(config_11.paddingLeft, y);
        ctx.lineTo(canvas.width - config_11.padding, y);
    }
    ctx.stroke();

    ctx.lineWidth = config_11.borderWidth;
    ctx.strokeRect(config_11.paddingLeft, config_11.padding, canvas.width - config_11.paddingLeft - config_11.padding, canvas.height - config_11.padding - config_11.paddingBottom);

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+2', 554, 148);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('+1', 554, 185);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "green";
    ctx.fillText('0', 554, 220);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "orange";
    ctx.fillText('-1', 554, 250);
    ctx.stroke();

    ctx.font = "15px Arial";
    ctx.fillStyle = "red";
    ctx.fillText('-2', 554, 273);
    ctx.stroke();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar marcas escala para la grafica de peso para la talla en niños de 0 a 2 años
function dibujarMarcasEscala(ctx, canvas, config) {
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const offsetEjeX = 37;
    const offsetEjeY = 80;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Talla (cm)', canvas.width / 2, canvas.height - config.padding + offsetEjeX);

    ctx.save();
    ctx.translate(config.padding - offsetEjeY, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Peso (kg)', 0, 0);
    ctx.restore();

    const incrementoPixelesX = (canvas.width - 2 * config.padding) / ((config.maxX - config.minX) / config.incrementoX);
    const posicionNumerosEjeX = 20;
    for (let i = config.minX, x = config.padding; i <= config.maxX; i += config.incrementoX, x += incrementoPixelesX) {
        ctx.fillText(i, x, canvas.height - config.padding + posicionNumerosEjeX);
    }

    const incrementoPixelesY = (canvas.height - 2 * config.padding) / ((config.maxY - config.minY) / config.incrementoY);
    for (let i = config.minY, y = canvas.height - config.padding; i <= config.maxY; i += config.incrementoY, y -= incrementoPixelesY) {
        ctx.fillText(i, config.padding / 4, y);
        ctx.fillText(i, canvas.width - config.padding / 4, y);
    }
    for (let i = config.minY, y = canvas.height - config.padding; i <= config.maxY; i += config.incrementoY, y -= incrementoPixelesY) {
        ctx.fillText(i, canvas.width - config.padding / 4 + 30, y);
    }

}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar marcas escala para la grafica de peso para la talla en niños de 2 a 5 años
function dibujarMarcasEscala_2(ctx, canvas, config_2) {
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const offsetEjeX = 37;
    const offsetEjeY = 80;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Talla (cm)', canvas.width / 2, canvas.height - config_2.padding + offsetEjeX);

    ctx.save();
    ctx.translate(config_2.padding - offsetEjeY, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Peso (kg)', 0, 0);
    ctx.restore();

    const incrementoPixelesX = (canvas.width - 2 * config_2.padding) / ((config_2.maxX - config_2.minX) / config_2.incrementoX);
    const posicionNumerosEjeX = 20;
    for (let i = config_2.minX, x = config_2.padding; i <= config_2.maxX; i += config_2.incrementoX, x += incrementoPixelesX) {
        ctx.fillText(i, x, canvas.height - config_2.padding + posicionNumerosEjeX);
    }

    const incrementoPixelesY = (canvas.height - 2 * config_2.padding) / ((config_2.maxY - config_2.minY) / config_2.incrementoY);
    for (let i = config_2.minY, y = canvas.height - config_2.padding; i <= config_2.maxY; i += config_2.incrementoY, y -= incrementoPixelesY) {
        ctx.fillText(i, config_2.padding / 4, y);
        ctx.fillText(i, canvas.width - config_2.padding / 4, y);
    }
    for (let i = config_2.minY, y = canvas.height - config_2.padding; i <= config_2.maxY; i += config_2.incrementoY, y -= incrementoPixelesY) {
        ctx.fillText(i, canvas.width - config_2.padding / 4 + 30, y);
    }

}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar marcas escala para la grafica de la talla en niños de 2 a 5 años
function dibujarMarcasEscala_3(ctx, config_3, canvas) {
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = config_3.minX; i <= config_3.maxX; i += config_3.incrementoX) {
        const posX = ((i - config_3.minX) / (config_3.maxX - config_3.minX)) * (canvas.width - config_3.paddingLeft - config_3.padding) + config_3.paddingLeft;
        ctx.fillText(i, posX, canvas.height - config_3.paddingBottom + 15);
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = config_3.minY; i <= config_3.maxY; i += config_3.incrementoY) {
        const posY = canvas.height - config_3.paddingBottom - ((i - config_3.minY) / (config_3.maxY - config_3.minY)) * (canvas.height - config_3.padding - config_3.paddingBottom);

        ctx.fillText(i, canvas.width - config_3.padding / 2, posY);

        ctx.fillText(i, config_3.paddingLeft - config_3.padding / 2, posY);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    const espacioAdicional = 41;
    ctx.fillText('Edad (en meses y años cumplidos)', canvas.width / 2, canvas.height - config_3.paddingBottom + espacioAdicional);
    ctx.save();
    ctx.translate(config_3.paddingLeft / 4, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Talla (cm)', 0, 0);
    ctx.restore();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar marcas escala para la grafica de peso para la edad en niños de 2 a 5 años
function dibujarMarcasEscala_4(ctx, config_4, canvas) {
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = config_4.minX; i <= config_4.maxX; i += config_4.incrementoX) {
        const posX = ((i - config_4.minX) / (config_4.maxX - config_4.minX)) * (canvas.width - config_4.paddingLeft - config_4.padding) + config_4.paddingLeft;
        ctx.fillText(i, posX, canvas.height - config_4.paddingBottom + 15);
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = config_4.minY; i <= config_4.maxY; i += config_4.incrementoY) {
        const posY = canvas.height - config_4.paddingBottom - ((i - config_4.minY) / (config_4.maxY - config_4.minY)) * (canvas.height - config_4.padding - config_4.paddingBottom);

        ctx.fillText(i, canvas.width - config_4.padding / 2, posY);

        ctx.fillText(i, config_4.paddingLeft - config_4.padding / 2, posY);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    const espacioAdicional = 41;
    ctx.fillText('Edad (en meses y años cumplidos)', canvas.width / 2, canvas.height - config_4.paddingBottom + espacioAdicional);
    ctx.save();
    ctx.translate(config_4.paddingLeft / 4, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Peso (kg)', 0, 0);
    ctx.restore();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar marcas escala para la grafica de imc para la edad en niños de 5 a 17 años
function dibujarMarcasEscala_5(ctx, config_5, canvas) {
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = config_5.minX; i <= config_5.maxX; i += config_5.incrementoX) {
        const posX = ((i - config_5.minX) / (config_5.maxX - config_5.minX)) * (canvas.width - config_5.paddingLeft - config_5.padding) + config_5.paddingLeft;
        ctx.fillText(i, posX, canvas.height - config_5.paddingBottom + 15);
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = config_5.minY; i <= config_5.maxY; i += config_5.incrementoY) {
        const posY = canvas.height - config_5.paddingBottom - ((i - config_5.minY) / (config_5.maxY - config_5.minY)) * (canvas.height - config_5.padding - config_5.paddingBottom);

        ctx.fillText(i, canvas.width - config_5.padding / 2, posY);

        ctx.fillText(i, config_5.paddingLeft - config_5.padding / 2, posY);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    const espacioAdicional = 41;
    ctx.fillText('Edad (en meses y años cumplidos)', canvas.width / 2, canvas.height - config_5.paddingBottom + espacioAdicional);
    ctx.save();
    ctx.translate(config_5.paddingLeft / 4, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('IMC (kg/m2)', 0, 0);
    ctx.restore();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar marcas escala para la grafica de la talla para la edad en niños de 5 a 17 años
function dibujarMarcasEscala_6(ctx, config_6, canvas) {
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = config_6.minX; i <= config_6.maxX; i += config_6.incrementoX) {
        const posX = ((i - config_6.minX) / (config_6.maxX - config_6.minX)) * (canvas.width - config_6.paddingLeft - config_6.padding) + config_6.paddingLeft;
        ctx.fillText(i, posX, canvas.height - config_6.paddingBottom + 15);
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = config_6.minY; i <= config_6.maxY; i += config_6.incrementoY) {
        const posY = canvas.height - config_6.paddingBottom - ((i - config_6.minY) / (config_6.maxY - config_6.minY)) * (canvas.height - config_6.padding - config_6.paddingBottom);

        ctx.fillText(i, canvas.width - config_6.padding / 2, posY);

        ctx.fillText(i, config_6.paddingLeft - config_6.padding / 2, posY);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    const espacioAdicional = 41;
    ctx.fillText('Edad (en meses y años cumplidos)', canvas.width / 2, canvas.height - config_5.paddingBottom + espacioAdicional);
    ctx.save();
    ctx.translate(config_5.paddingLeft / 4, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Estatura (cm)', 0, 0);
    ctx.restore();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar marcas escala para la grafica de imc para la edad en niños de 2 a 5 años
function dibujarMarcasEscala_7(ctx, config_7, canvas) {
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = config_7.minX; i <= config_7.maxX; i += config_7.incrementoX) {
        const posX = ((i - config_7.minX) / (config_7.maxX - config_7.minX)) * (canvas.width - config_7.paddingLeft - config_7.padding) + config_7.paddingLeft;
        ctx.fillText(i, posX, canvas.height - config_7.paddingBottom + 15);
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = config_7.minY; i <= config_7.maxY; i += config_7.incrementoY) {
        const posY = canvas.height - config_7.paddingBottom - ((i - config_7.minY) / (config_7.maxY - config_7.minY)) * (canvas.height - config_7.padding - config_7.paddingBottom);
        ctx.fillText(i, canvas.width - config_7.padding / 2, posY);

        ctx.fillText(i, config_7.paddingLeft - config_7.padding / 2, posY);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    const espacioAdicional = 41;
    ctx.fillText('Edad (en meses y años cumplidos)', canvas.width / 2, canvas.height - config_7.paddingBottom + espacioAdicional);

    ctx.save();
    ctx.translate(config_7.paddingLeft / 4, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('IMC (kg/m2)', 0, 0);
    ctx.restore();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar marcas escala para la grafica de talla para la edad en niños de 0 a 2 años
function dibujarMarcasEscala_8(ctx, config_8, canvas) {
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = config_8.minX; i <= config_8.maxX; i += config_8.incrementoX) {
        const posX = ((i - config_8.minX) / (config_8.maxX - config_8.minX)) * (canvas.width - config_8.paddingLeft - config_8.padding) + config_8.paddingLeft;
        ctx.fillText(i, posX, canvas.height - config_8.paddingBottom + 15);
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = config_8.minY; i <= config_8.maxY; i += config_8.incrementoY) {
        const posY = canvas.height - config_8.paddingBottom - ((i - config_8.minY) / (config_8.maxY - config_8.minY)) * (canvas.height - config_8.padding - config_8.paddingBottom);
        ctx.fillText(i, canvas.width - config_8.padding / 2, posY);

        ctx.fillText(i, config_8.paddingLeft - config_8.padding / 2, posY);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    const espacioAdicional = 41;
    ctx.fillText('Edad ( en meses y años cumplidos)', canvas.width / 2, canvas.height - config_8.paddingBottom + espacioAdicional);

    ctx.save();
    ctx.translate(config_8.paddingLeft / 4, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Longitud (cm)', 0, 0);
    ctx.restore();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar marcas escala para la grafica de perimetro cefalico para la edad en niños de 0 a 5 años
function dibujarMarcasEscala_9(ctx, config_9, canvas) {
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = config_9.minX; i <= config_9.maxX; i += config_9.incrementoX) {
        const posX = ((i - config_9.minX) / (config_9.maxX - config_9.minX)) * (canvas.width - config_9.paddingLeft - config_9.padding) + config_9.paddingLeft;
        ctx.fillText(i, posX, canvas.height - config_9.paddingBottom + 15);
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = config_9.minY; i <= config_9.maxY; i += config_9.incrementoY) {
        const posY = canvas.height - config_9.paddingBottom - ((i - config_9.minY) / (config_9.maxY - config_9.minY)) * (canvas.height - config_9.padding - config_9.paddingBottom);
        ctx.fillText(i, canvas.width - config_9.padding / 2, posY);
        ctx.fillText(i, config_9.paddingLeft - config_9.padding / 2, posY);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    const espacioAdicional = 41;
    ctx.fillText('Edad (en meses y años cumplidos)', canvas.width / 2, canvas.height - config_9.paddingBottom + espacioAdicional);

    ctx.save();
    ctx.translate(config_9.paddingLeft / 4, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Perímetro Cefálico (cm)', 0, 0);
    ctx.restore();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar marcas escala para la grafica de imc para la edad en niños de 0 a 2 años
function dibujarMarcasEscala_10(ctx, config_10, canvas) {
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = config_10.minX; i <= config_10.maxX; i += config_10.incrementoX) {
        const posX = ((i - config_10.minX) / (config_10.maxX - config_10.minX)) * (canvas.width - config_10.paddingLeft - config_10.padding) + config_10.paddingLeft;
        ctx.fillText(i, posX, canvas.height - config_10.paddingBottom + 8);
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = config_10.minY; i <= config_10.maxY; i += config_10.incrementoY) {
        const posY = canvas.height - config_10.paddingBottom - ((i - config_10.minY) / (config_10.maxY - config_10.minY)) * (canvas.height - config_10.padding - config_10.paddingBottom);
        ctx.fillText(i, config_10.paddingLeft - 40, posY);
        ctx.fillText(i, canvas.width - config_10.padding + 50, posY);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Edad (en meses y años cumplidos)', canvas.width / 2, canvas.height - config_10.paddingBottom + 20);

    ctx.save();
    ctx.translate(10, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('IMC (kg/m2)', 0, 0);
    ctx.restore();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar marcas escala para la grafica de peso para la edad en niños de 0 a 2 años
function dibujarMarcasEscala_11(ctx, config_11, canvas) {
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let i = config_11.minX; i <= config_11.maxX; i += config_11.incrementoX) {
        const posX = ((i - config_11.minX) / (config_11.maxX - config_11.minX)) * (canvas.width - config_11.paddingLeft - config_11.padding) + config_11.paddingLeft;
        ctx.fillText(i, posX, canvas.height - config_11.paddingBottom + 8);
    }

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let i = config_11.minY; i <= config_11.maxY; i += config_11.incrementoY) {
        const posY = canvas.height - config_11.paddingBottom - ((i - config_11.minY) / (config_11.maxY - config_11.minY)) * (canvas.height - config_11.padding - config_11.paddingBottom);
        ctx.fillText(i, config_11.paddingLeft - 40, posY);
        ctx.fillText(i, canvas.width - config_11.padding + 50, posY);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Edad (en meses y años cumplidos)', canvas.width / 2, canvas.height - config_11.paddingBottom + 20);

    ctx.save();
    ctx.translate(10, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Peso (kg)', 0, 0);
    ctx.restore();
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion principal que permite mostrar las graficas con sus respectivas validaciones
function inicializarGrafica() {
    const tallaInput = document.getElementById('talla');
    const talla = tallaInput && tallaInput.value ? parseFloat(tallaInput.value) : null;
    const pesoInput = document.getElementById('peso');
    const peso = pesoInput && pesoInput.value ? parseFloat(pesoInput.value) : null;
    const perimetroCefalicoInput = document.getElementById('peri');
    const perimetroCefalico = perimetroCefalicoInput && perimetroCefalicoInput.value ? parseFloat(perimetroCefalicoInput.value) : null;
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const fechaNacimiento = fechaNacimientoInput ? fechaNacimientoInput.value : null;

    if (!fechaNacimiento) {
        alert('Por favor, complete el campo de fecha de nacimiento.');
        return;
    }
    if (talla < 0 || peso < 0 || perimetroCefalico < 0) {
        alert("Por favor, ingrese valores positivos para talla, peso y perímetro cefálico.");
        return;
    }
    const edadEnMeses = calcularEdadEnMeses(fechaNacimiento);
    if (isNaN(edadEnMeses)) {
        alert("Error al calcular la edad. Verifique la fecha de nacimiento.");
        return;
    }

    const canvas = document.getElementById('myCanvas');
    if (!canvas) {
        alert('Error al acceder al elemento canvas.');
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        alert('Error al obtener el contexto del canvas.');
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let configuracionActual, puntosActuales, coordenadas;

    if (edadEnMeses < 0) {
        alert('La edad no puede ser negativa.');
        return;
    }

    if (edadEnMeses >= 0 && edadEnMeses <= 24) {
        if (peso !== null && talla !== null && perimetroCefalico == null) {
            let eleccionGrafica = prompt('Ingrese "10" para usar la Gráfica de imc - edad en niños de 0 a 2 años o "1" para usar la Gráfica de peso - talla en niños de 0 a 2 años', '10');

            if (eleccionGrafica === '10') {
                const imc = calcularIMC(peso, talla);
                if (isNaN(imc) || imc < config_10.minY || imc > config_10.maxY) {
                    alert("El IMC calculado está fuera de rango para la gráfica 10.");
                    return;
                }
                configuracionActual = config_10;
                puntosActuales = puntos_10;
                dibujarCuadricula_10(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_10(ctx, configuracionActual, canvas);
                dibujarCurvaCrecimiento_3(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = {
                    x: calcularX(edadEnMeses, configuracionActual, canvas),
                    y: calcularY(imc, configuracionActual, canvas)
                };
            } else if (eleccionGrafica === '1') {
                if (peso < config.minY || peso > config.maxY || talla < config.minX || talla > config.maxX) {
                    alert("Peso o Talla fuera de rango permitido.");
                    return;
                }
                configuracionActual = config;
                puntosActuales = puntos;
                dibujarCuadricula(ctx, canvas, configuracionActual);
                dibujarMarcasEscala(ctx, canvas, configuracionActual);
                dibujarLineasDeCrecimiento(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadas(talla, peso, canvas, configuracionActual);
            }
        }
        if (peso !== null && talla !== null && perimetroCefalico !== null) {
            let eleccionGrafica = prompt('Ingrese "10" para usar la Gráfica de imc - edad en niños de 0 a 2 años, "1" para usar la Gráfica de peso - talla en niños de 0 a 2 años, "9" para usar la Gráfica de perímetro cefálico - edad en niños de 0 a 2 años, o "8" para usar la Gráfica de talla para la edad en niños de 0 a 2 años o 11 para la grafica de peso-edad de 0 a 2 años', '10');

            if (eleccionGrafica === '10') {
                const imc = calcularIMC(peso, talla);
                if (isNaN(imc) || imc < config_10.minY || imc > config_10.maxY) {
                    alert("El IMC calculado está fuera de rango para la gráfica 10.");
                    return;
                }
                configuracionActual = config_10;
                puntosActuales = puntos_10;
                dibujarCuadricula_10(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_10(ctx, configuracionActual, canvas);
                dibujarCurvaCrecimiento_3(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = {
                    x: calcularX(edadEnMeses, configuracionActual, canvas),
                    y: calcularY(imc, configuracionActual, canvas)
                };
            } else if (eleccionGrafica === '1') {
                if (peso < config.minY || peso > config.maxY || talla < config.minX || talla > config.maxX) {
                    alert("Peso o Talla fuera de rango permitido.");
                    return;
                }
                configuracionActual = config;
                puntosActuales = puntos;
                dibujarCuadricula(ctx, canvas, configuracionActual);
                dibujarMarcasEscala(ctx, canvas, configuracionActual);
                dibujarLineasDeCrecimiento(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadas(talla, peso, canvas, configuracionActual);
            } else if (eleccionGrafica === '9') {
                if (perimetroCefalico < config_9.minY || perimetroCefalico > config_9.maxY) {
                    alert("Perímetro cefálico fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_9;
                puntosActuales = puntos_9;
                dibujarCuadricula_9(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_9(ctx, configuracionActual, canvas);
                dibujarCurvaCrecimiento_2(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasPerimetroCefalico(edadEnMeses, perimetroCefalico, configuracionActual, canvas);
            } else if (eleccionGrafica === '8') {
                if (talla < config_8.minY || talla > config_8.maxY) {
                    alert("Talla fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_8;
                puntosActuales = puntos_8;
                dibujarCuadricula_8(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_8(ctx, configuracionActual, canvas);
                dibujarCurvaCrecimiento_1(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasSinPeso(edadEnMeses, talla, configuracionActual, canvas);
            } else if (eleccionGrafica === '11') {
                if (peso < config_11.minY || peso > config_11.maxY) {
                    alert("Peso fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_11;
                puntosActuales = puntos_11;
                dibujarCuadricula_11(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_11(ctx, configuracionActual, canvas);
                dibujarCurvaCrecimiento_4(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasSinTalla(peso, fechaNacimiento, configuracionActual, canvas);
            } else {
                alert("Entrada no válida. Por favor, ingrese '10', '1', '9', o '8'.");
                return;
            }
        } if (peso === null && talla !== null && perimetroCefalico === null) {
            if (talla < config_8.minY || talla > config_8.maxY) {
                alert("Talla fuera de rango permitido.");
                return;
            }
            configuracionActual = config_8;
            puntosActuales = puntos_8;
            dibujarCuadricula_8(ctx, configuracionActual, canvas);
            dibujarMarcasEscala_8(ctx, configuracionActual, canvas);
            dibujarCurvaCrecimiento_1(ctx, configuracionActual, canvas, puntosActuales);
            coordenadas = calcularCoordenadasSinPeso(edadEnMeses, talla, configuracionActual, canvas);
        }
        else if (peso !== null && talla === null && perimetroCefalico === null) {
            if (isNaN(peso) || peso < config_11.minY || peso > config_11.maxY) {
                alert("El peso está fuera de los rangos permitidos para la gráfica 11.");
                return;
            }
            configuracionActual = config_11;
            puntosActuales = puntos_11;
            dibujarCuadricula_11(ctx, configuracionActual, canvas);
            dibujarMarcasEscala_11(ctx, configuracionActual, canvas);
            dibujarCurvaCrecimiento_4(ctx, configuracionActual, canvas, puntosActuales);
            coordenadas = calcularCoordenadasSinTalla(peso, fechaNacimiento, configuracionActual, canvas);
        }
        if (peso === null && talla !== null && perimetroCefalico !== null) {
            let eleccionGrafica = prompt('Ingrese "8" para usar la Gráfica de talla para la edad en niños de 0 a 2 años o "9" para usar la grafica de perimetro cefalico en niños de 0 a 5 años', '8');
            if (eleccionGrafica === '8') {
                if (talla < config_8.minY || talla > config_8.maxY) {
                    alert("Peso fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_8;
                puntosActuales = puntos_8;
                dibujarCuadricula_8(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_8(ctx, configuracionActual, canvas);
                dibujarCurvaCrecimiento_1(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasSinPeso(edadEnMeses, talla, configuracionActual, canvas);
            } else if (eleccionGrafica === '9') {
                if (perimetroCefalico < config_9.minY || perimetroCefalico > config_9.maxY) {
                    alert("Perímetro cefálico fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_9;
                puntosActuales = puntos_9;
                dibujarCuadricula_9(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_9(ctx, configuracionActual, canvas);
                dibujarCurvaCrecimiento_2(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasPerimetroCefalico(edadEnMeses, perimetroCefalico, configuracionActual, canvas);
            }
        }
        if (peso !== null && talla === null && perimetroCefalico !== null) {
            let eleccionGrafica = prompt('Ingrese "11" para usar la Gráfica de peso para la edad en niños de 0 a 2 años o "9" para usar la grafica de perimetro cefalico en niños de 0 a 5 años', '11');
            if (eleccionGrafica === '11') {
                if (peso < config_11.minY || peso > config_11.maxY) {
                    alert("Peso fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_11;
                puntosActuales = puntos_11;
                dibujarCuadricula_11(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_11(ctx, configuracionActual, canvas);
                dibujarCurvaCrecimiento_4(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasSinTalla(peso, fechaNacimiento, configuracionActual, canvas);
            } else if (eleccionGrafica === '9') {
                if (perimetroCefalico < config_9.minY || perimetroCefalico > config_9.maxY) {
                    alert("Perímetro cefálico fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_9;
                puntosActuales = puntos_9;
                dibujarCuadricula_9(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_9(ctx, configuracionActual, canvas);
                dibujarCurvaCrecimiento_2(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasPerimetroCefalico(edadEnMeses, perimetroCefalico, configuracionActual, canvas);
            }
        }
        if (coordenadas && (coordenadas.x < 0 || coordenadas.x > canvas.width || coordenadas.y < 0 || coordenadas.y > canvas.height)) {
            alert("El punto calculado está fuera del área visible del gráfico.");
            console.log("Coordenadas fuera de rango:", coordenadas);
            return;
        }
        if (coordenadas) {
            dibujarPunto(ctx, coordenadas);
        }

    } else if (edadEnMeses >= 24 && edadEnMeses <= 60) {
        if (peso !== null && talla !== null && perimetroCefalico === null) {
            let eleccionGrafica = prompt('Ingrese "7" para usar la Gráfica de imc - edad en niños de 2 a 5 años o "2" para usar la Gráfica de peso para la talla en niños de 2 a 5 años, ', '7');
            if (eleccionGrafica === '7') {
                const imc = calcularIMC(peso, talla);
                if (isNaN(imc) || imc < config_7.minY || imc > config_7.maxY) {
                    alert("El IMC calculado está fuera de rango para la gráfica 7.");
                    return;
                }
                configuracionActual = config_7;
                puntosActuales = puntos_7;
                dibujarCuadricula_7(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_7(ctx, configuracionActual, canvas);
                dibujarLineasDeCrecimiento_7(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = {
                    x: calcularX(edadEnMeses, configuracionActual, canvas),
                    y: calcularY(imc, configuracionActual, canvas)
                };
            } else if (eleccionGrafica === '2') {
                if (peso < config_2.minY || peso > config_2.maxY || talla < config_2.minX || talla > config_2.maxX) {
                    alert("Peso o Talla fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_2;
                puntosActuales = puntos_2;
                dibujarCuadricula_2(ctx, canvas, configuracionActual);
                dibujarMarcasEscala_2(ctx, canvas, configuracionActual);
                dibujarLineasDeCrecimiento_2(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadas(talla, peso, canvas, configuracionActual);
            }
        }
        if (peso !== null && talla !== null && perimetroCefalico !== null) {
            let eleccionGrafica = prompt('Ingrese "7" para usar la Gráfica de imc - edad en niños de 2 a 5 años,"2" para usar la Gráfica de peso para la talla en niños de 2 a 5 años, "9" para usar la grafica de perimetro cefalico en niños de 0 a 5 años, "4" para usar la grafica de peso - edad en niños de 2 a 5 años o "3" para usar la grafica de talla - edad en niños de 2 a 5 años', '7');
            if (eleccionGrafica === '7') {
                const imc = calcularIMC(peso, talla);
                if (isNaN(imc) || imc < config_7.minY || imc > config_7.maxY) {
                    alert("El IMC calculado está fuera de rango para la gráfica 7.");
                    return;
                }
                configuracionActual = config_7;
                puntosActuales = puntos_7;
                dibujarCuadricula_7(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_7(ctx, configuracionActual, canvas);
                dibujarLineasDeCrecimiento_7(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = {
                    x: calcularX(edadEnMeses, configuracionActual, canvas),
                    y: calcularY(imc, configuracionActual, canvas)
                };
            } else if (eleccionGrafica === '2') {
                if (peso < config_2.minY || peso > config_2.maxY || talla < config_2.minX || talla > config_2.maxX) {
                    alert("Peso o Talla fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_2;
                puntosActuales = puntos_2;
                dibujarCuadricula_2(ctx, canvas, configuracionActual);
                dibujarMarcasEscala_2(ctx, canvas, configuracionActual);
                dibujarLineasDeCrecimiento_2(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadas(talla, peso, canvas, configuracionActual);
            }
            else if (eleccionGrafica === '9') {
                if (perimetroCefalico < config_9.minY || perimetroCefalico > config_9.maxY) {
                    alert("Perímetro cefálico fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_9;
                puntosActuales = puntos_9;
                dibujarCuadricula_9(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_9(ctx, configuracionActual, canvas);
                dibujarCurvaCrecimiento_2(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasPerimetroCefalico(edadEnMeses, perimetroCefalico, configuracionActual, canvas);
            }
            else if (eleccionGrafica === '4') {
                if (peso < config_4.minY || peso > config_4.maxY) {
                    alert("Peso fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_4;
                puntosActuales = puntos_4;
                dibujarCuadricula_4(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_4(ctx, configuracionActual, canvas);
                dibujarLineasDeCrecimiento_4(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasSinTalla(peso, fechaNacimiento, configuracionActual, canvas);
            }
            else if (eleccionGrafica === '3') {
                if (talla < config_3.minY || talla > config_3.maxY) {
                    alert("Talla fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_3;
                puntosActuales = puntos_3;
                dibujarCuadricula_3(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_3(ctx, configuracionActual, canvas);
                dibujarLineasDeCrecimiento_3(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasSinPeso(edadEnMeses, talla, configuracionActual, canvas);
            }
        }
        if (peso !== null && talla === null && perimetroCefalico !== null) {
            let eleccionGrafica = prompt('Ingrese "4" para usar la grafica de peso - edad en niños de 2 a 5 años o "9" para usar la grafica de perimetro cefalico en niños de 0 a 5 años', '4');
            if (eleccionGrafica === '4') {
                if (peso < config_4.minY || peso > config_4.maxY) {
                    alert("Peso fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_4;
                puntosActuales = puntos_4;
                dibujarCuadricula_4(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_4(ctx, configuracionActual, canvas);
                dibujarLineasDeCrecimiento_4(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasSinTalla(peso, fechaNacimiento, configuracionActual, canvas);

            } else if (eleccionGrafica === '9') {
                if (perimetroCefalico < config_9.minY || perimetroCefalico > config_9.maxY) {
                    alert("Perímetro cefálico fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_9;
                puntosActuales = puntos_9;
                dibujarCuadricula_9(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_9(ctx, configuracionActual, canvas);
                dibujarCurvaCrecimiento_2(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasPerimetroCefalico(edadEnMeses, perimetroCefalico, configuracionActual, canvas);
            }
        }
        if (peso === null && talla !== null && perimetroCefalico !== null) {
            let eleccionGrafica = prompt('Ingrese "3" para usar la grafica de talla - edad en niños de 2 a 5 años o "9" para usar la grafica de perimetro cefalico en niños de 0 a 5 años', '3');
            if (eleccionGrafica === '3') {
                if (talla < config_3.minY || talla > config_3.maxY) {
                    alert("Talla fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_3;
                puntosActuales = puntos_3;
                dibujarCuadricula_3(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_3(ctx, configuracionActual, canvas);
                dibujarLineasDeCrecimiento_3(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasSinPeso(edadEnMeses, talla, configuracionActual, canvas);

            } else if (eleccionGrafica === '9') {
                if (perimetroCefalico < config_9.minY || perimetroCefalico > config_9.maxY) {
                    alert("Perímetro cefálico fuera de rango permitido.");
                    return;
                }
                configuracionActual = config_9;
                puntosActuales = puntos_9;
                dibujarCuadricula_9(ctx, configuracionActual, canvas);
                dibujarMarcasEscala_9(ctx, configuracionActual, canvas);
                dibujarCurvaCrecimiento_2(ctx, configuracionActual, canvas, puntosActuales);
                coordenadas = calcularCoordenadasPerimetroCefalico(edadEnMeses, perimetroCefalico, configuracionActual, canvas);
            }
        }
        else if (peso !== null && talla === null) {
            if (peso < config_4.minY || peso > config_4.maxY) {
                alert("Peso fuera de rango permitido.");
                return;
            }
            configuracionActual = config_4;
            puntosActuales = puntos_4;
            dibujarCuadricula_4(ctx, configuracionActual, canvas);
            dibujarMarcasEscala_4(ctx, configuracionActual, canvas);
            dibujarLineasDeCrecimiento_4(ctx, configuracionActual, canvas, puntosActuales);
            coordenadas = calcularCoordenadasSinTalla(peso, fechaNacimiento, configuracionActual, canvas);
        } else if (talla !== null && peso === null) {
            if (talla < config_3.minY || talla > config_3.maxY) {
                alert("Talla fuera de rango permitido.");
                return;
            }
            configuracionActual = config_3;
            puntosActuales = puntos_3;
            dibujarCuadricula_3(ctx, configuracionActual, canvas);
            dibujarMarcasEscala_3(ctx, configuracionActual, canvas);
            dibujarLineasDeCrecimiento_3(ctx, configuracionActual, canvas, puntosActuales);
            coordenadas = calcularCoordenadasSinPeso(edadEnMeses, talla, configuracionActual, canvas);
        }
    } else if (edadEnMeses >= 60 && edadEnMeses <= 204) {
        if (peso !== null && talla !== null && perimetroCefalico === null) {
            const imc = calcularIMC(peso, talla);
            if (imc < config_5.minY || imc > config_5.maxY) {
                alert("El IMC calculado está fuera de rango.");
                return;
            }
            configuracionActual = config_5;
            puntosActuales = puntos_5;
            dibujarCuadricula_5(ctx, configuracionActual, canvas);
            dibujarMarcasEscala_5(ctx, configuracionActual, canvas);
            dibujarLineasDeCrecimiento_5(ctx, configuracionActual, canvas, puntosActuales);
            coordenadas = {
                x: calcularX(edadEnMeses, configuracionActual, canvas),
                y: calcularY(imc, configuracionActual, canvas)
            };
        } else if (talla !== null) {
            if (talla < config_6.minY || talla > config_6.maxY) {
                alert("Talla fuera de rango permitido.");
                return;
            }
            configuracionActual = config_6;
            puntosActuales = puntos_6;
            dibujarCuadricula_6(ctx, configuracionActual, canvas);
            dibujarMarcasEscala_6(ctx, configuracionActual, canvas);
            dibujarLineasDeCrecimiento_6(ctx, configuracionActual, canvas, puntosActuales);
            coordenadas = calcularCoordenadasSinPeso(edadEnMeses, talla, configuracionActual, canvas);
        }
    }
    if (edadEnMeses >= 0 && edadEnMeses <= 60) {
        if (peso === null && talla === null && perimetroCefalico != null) {
            if (perimetroCefalico < config_9.minY || perimetroCefalico > config_9.maxY) {
                alert("Perímetro cefálico fuera de rango permitido.");
                return;
            }
            configuracionActual = config_9;
            puntosActuales = puntos_9;
            dibujarCuadricula_9(ctx, configuracionActual, canvas);
            dibujarMarcasEscala_9(ctx, configuracionActual, canvas);
            dibujarCurvaCrecimiento_2(ctx, configuracionActual, canvas, puntosActuales);
            coordenadas = calcularCoordenadasPerimetroCefalico(edadEnMeses, perimetroCefalico, configuracionActual, canvas);
        }
    }

    if (coordenadas && (coordenadas.x < 0 || coordenadas.x > canvas.width || coordenadas.y < 0 || coordenadas.y > canvas.height)) {
        alert("El punto calculado está fuera del área visible del gráfico.");
        console.log("Coordenadas fuera de rango:", coordenadas);
        return;
    }

    if (coordenadas) {
        dibujarPunto(ctx, coordenadas);
    }
 else if (edadEnMeses >= 24 && edadEnMeses <= 60 && talla !== null && peso === null) {
            configuracionActual = config_3;
            puntosActuales = puntos_3;
            dibujarCuadricula_3(ctx, configuracionActual, canvas);
            dibujarMarcasEscala_3(ctx, configuracionActual, canvas);
            dibujarLineasDeCrecimiento_3(ctx, configuracionActual, canvas, puntosActuales);
            if (talla !== null && talla >= configuracionActual.minY && talla <= configuracionActual.maxY) {
                coordenadas = calcularCoordenadasSinPeso(edadEnMeses, talla, configuracionActual, canvas);
                if (coordenadas) {
                    dibujarPunto(ctx, coordenadas);
                }
            }
        }
    }
    
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion que permite calcular las coordenadas de las graficas que tienen peso y talla para colocar el punto correctamente
function calcularCoordenadas(talla, peso, canvas, config) {
    talla = parseFloat(talla);
    peso = parseFloat(peso);

    if (isNaN(talla) || isNaN(peso)) {
        console.error('Talla o peso no son números válidos.');
        return null;
    }

    if (talla < config.minX || talla > config.maxX) {
        console.error('La talla está fuera de los rangos permitidos: ', config.minX, 'a', config.maxX);
        return null;
    }

    if (peso < config.minY || peso > config.maxY) {
        console.error('El peso está fuera de los rangos permitidos: ', config.minY, 'a', config.maxY);
        return null;
    }

    if (config.maxX <= config.minX || config.maxY <= config.minY) {
        console.error('Los valores de configuración para los máximos y mínimos están mal configurados.');
        return null;
    }

    if (!canvas || !canvas.width || !canvas.height) {
        console.error('El objeto canvas no está definido o no tiene dimensiones válidas.');
        return null;
    }

    const x = ((talla - config.minX) / (config.maxX - config.minX)) * (canvas.width - 2 * config.padding) + config.padding;
    const y = (canvas.height - config.padding) - ((peso - config.minY) / (config.maxY - config.minY)) * (canvas.height - 2 * config.padding);

    return { x, y };
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion que permite calcular las coordenadas de las graficas que tienen talla para colocar el punto correctamente
function calcularCoordenadasSinPeso(edadEnMeses, talla, config, canvas) {
    if (isNaN(edadEnMeses) || isNaN(talla)) {
        console.error("La edad o la talla no son números válidos.");
        return null;
    }

    if (edadEnMeses < config.minX || edadEnMeses > config.maxX) {
        console.error("Edad fuera de rango permitido. Rango permitido: ", config.minX, "a", config.maxX);
        return null;
    }

    if (talla < config.minY || talla > config.maxY) {
        console.error("Talla fuera de rango permitido. Rango permitido: ", config.minY, "a", config.maxY);
        return null;
    }

    if (!canvas || canvas.width <= 0 || canvas.height <= 0) {
        console.error("Las dimensiones del canvas son inválidas o el canvas no está definido.");
        return null;
    }

    const x = ((edadEnMeses - config.minX) / (config.maxX - config.minX)) * (canvas.width - config.paddingLeft - config.padding) + config.paddingLeft;
    const y = (canvas.height - config.paddingBottom) - ((talla - config.minY) / (config.maxY - config.minY)) * (canvas.height - config.padding - config.paddingBottom);

    const xFinal = Math.max(config.paddingLeft, Math.min(x, canvas.width - config.padding));
    const yFinal = Math.max(config.padding, Math.min(y, canvas.height - config.paddingBottom));

    return { x: xFinal, y: yFinal };
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion que permite calcular las coordenadas de las graficas que tienen peso para colocar el punto correctamente
function calcularCoordenadasSinTalla(peso, fechaNacimiento, config, canvas) {
    const edadEnMeses = calcularEdadEnMeses(fechaNacimiento);

    if (isNaN(edadEnMeses) || isNaN(peso)) {
        console.error("Edad o peso no son números válidos.");
        return null;
    }

    if (edadEnMeses < config.minX || edadEnMeses > config.maxX) {
        console.error(`Edad fuera de rango permitido. Rango permitido: ${config.minX} a ${config.maxX}`);
        return null;
    }

    if (peso < config.minY || peso > config.maxY) {
        console.error(`Peso fuera de rango permitido. Rango permitido: ${config.minY} a ${config.maxY}`);
        return null;
    }

    if (!canvas || canvas.width <= 0 || canvas.height <= 0) {
        console.error("El canvas no está definido o tiene dimensiones inválidas.");
        return null;
    }

    const x = ((edadEnMeses - config.minX) / (config.maxX - config.minX)) * (canvas.width - config.paddingLeft - config.padding) + config.paddingLeft;
    const y = (canvas.height - config.paddingBottom) - ((peso - config.minY) / (config.maxY - config.minY)) * (canvas.height - config.padding - config.paddingBottom);

    return {
        x: Math.max(config.paddingLeft, Math.min(x, canvas.width - config.padding)),
        y: Math.max(config.padding, Math.min(y, canvas.height - config.paddingBottom))
    };
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion que permite calcular las coordenadas de la grafica que tiene perimetro cefalico para colocar el punto correctamente
function calcularCoordenadasPerimetroCefalico(edadEnMeses, perimetroCefalico, config, canvas) {
    edadEnMeses = parseFloat(edadEnMeses);
    perimetroCefalico = parseFloat(perimetroCefalico);

    if (isNaN(edadEnMeses) || isNaN(perimetroCefalico)) {
        console.error("Edad o perímetro cefálico no son números válidos.");
        return null;
    }

    if (edadEnMeses < config.minX || edadEnMeses > config.maxX) {
        console.error(`Edad fuera de rango permitido. Rango permitido: ${config.minX} a ${config.maxX}`);
        return null;
    }

    if (perimetroCefalico < config.minY || perimetroCefalico > config.maxY) {
        console.error(`Perímetro cefálico fuera de rango permitido. Rango permitido: ${config.minY} a ${config.maxY}`);
        return null;
    }

    if (!canvas || canvas.width <= 0 || canvas.height <= 0) {
        console.error("El canvas no está definido o sus dimensiones son inválidas.");
        return null;
    }

    const x = ((edadEnMeses - config.minX) / (config.maxX - config.minX)) * (canvas.width - config.paddingLeft - config.padding) + config.paddingLeft;
    const y = (canvas.height - config.paddingBottom) - ((perimetroCefalico - config.minY) / (config.maxY - config.minY)) * (canvas.height - config.padding - config.paddingBottom);

    const xFinal = Math.max(config.paddingLeft, Math.min(x, canvas.width - config.padding));
    const yFinal = Math.max(config.padding, Math.min(y, canvas.height - config.paddingBottom));

    return { x: xFinal, y: yFinal };
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion que permite calcular el imc de las graficas
function calcularIMC(peso, talla) {
    const tallaEnMetros = talla / 100;
    return peso / (tallaEnMetros * tallaEnMetros);
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion que permite calcular la posicion horizontal en las graficas de imc
function calcularX(edadEnMeses, config, canvas) {
    if (edadEnMeses < config.minX || edadEnMeses > config.maxX) {
        console.log("Edad fuera de rango");
        return null;
    }
    const range = config.maxX - config.minX;
    const normalizedAge = (edadEnMeses - config.minX) / range;
    return config.paddingLeft + normalizedAge * (canvas.width - config.paddingLeft - config.padding);
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion que permite calcular la posicion vertical en las graficas de imc
function calcularY(imc, config, canvas) {
    if (imc < config.minY || imc > config.maxY) {
        console.log("IMC fuera de rango");
        return null;
    }
    const range = config.maxY - config.minY;
    const normalizedIMC = (imc - config.minY) / range;
    return canvas.height - config.paddingBottom - normalizedIMC * (canvas.height - config.padding - config.paddingBottom);
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion que permite dibujar el punto en las graficas
function dibujarPunto(ctx, coordenadas) {
    if (coordenadas) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(coordenadas.x, coordenadas.y, 4, 0, Math.PI * 2);
        ctx.fill();
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////


//Funcion que permite calcular la edad en meses de las graficas
function calcularEdadEnMeses(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    let meses = (hoy.getFullYear() - nacimiento.getFullYear()) * 12;
    meses -= nacimiento.getMonth() + 1;
    meses += hoy.getMonth();
    return meses;
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar lineas de crecimiento para la grafica de peso para la talla en niños de 0 a 2 años
function dibujarLineasDeCrecimiento(ctx, config, canvas) {
    const lineas = puntos.map(punto => {
        const x1 = config.minX;
        const x2 = config.maxX;
        const m = (punto.y2 - punto.y1) / (x2 - x1);
        const b = punto.y1 - m * x1;

        return {
            m: m,
            b: b,
            color: punto.color,
            discontinua: punto.discontinua
        };
    });
    lineas.forEach(linea => {
        ctx.beginPath();
        ctx.strokeStyle = linea.color;
        ctx.setLineDash(linea.discontinua ? [5, 5] : []);

        for (let x = config.minX; x <= config.maxX; x += 0.1) {
            let y = linea.m * x + linea.b;

            let canvasX = ((x - config.minX) / (config.maxX - config.minX)) * (canvas.width - (2 * config.padding)) + config.padding;
            let canvasY = canvas.height - ((y - config.minY) / (config.maxY - config.minY)) * (canvas.height - (2 * config.padding)) - config.padding;

            if (x === config.minX) {
                ctx.moveTo(canvasX, canvasY);
            } else {
                ctx.lineTo(canvasX, canvasY);
            }
        }

        ctx.stroke();
    });

    ctx.setLineDash([])
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar lineas de crecimiento para la grafica de peso para la talla en niños de 2 a 5 años
function dibujarLineasDeCrecimiento_2(ctx, config_2, canvas, puntos_2) {
    const lineas_2 = puntos_2.map(punto => {
        const x1 = config_2.minX;
        const x2 = config_2.maxX;
        const m = (punto.y2 - punto.y1) / (x2 - x1);
        const b = punto.y1 - m * x1;

        return {
            m: m,
            b: b,
            color: punto.color,
            discontinua: punto.discontinua
        };
    });

    lineas_2.forEach(linea => {
        ctx.beginPath();
        ctx.strokeStyle = linea.color;
        ctx.setLineDash(linea.discontinua ? [5, 5] : []);

        for (let x = config_2.minX; x <= config_2.maxX; x += 0.1) {
            let y = linea.m * x + linea.b;

            let canvasX = config_2.paddingLeft + ((x - config_2.minX) / (config_2.maxX - config_2.minX)) * (canvas.width - config_2.paddingLeft - config_2.padding);
            let canvasY = canvas.height - config_2.paddingBottom - ((y - config_2.minY) / (config_2.maxY - config_2.minY)) * (canvas.height - config_2.padding - config_2.paddingBottom);

            if (x === config_2.minX) {
                ctx.moveTo(canvasX, canvasY);
            } else {
                ctx.lineTo(canvasX, canvasY);
            }
        }

        ctx.stroke();
    });

    ctx.setLineDash([]);
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar lineas de crecimiento para la grafica de la talla en niños de 2 a 5 años
function dibujarLineasDeCrecimiento_3(ctx, config_3, canvas, puntos_3) {
    const lineas_3 = puntos_3.map(punto => {
        const x1 = config_3.minX;
        const y1 = punto.y1;
        const x2 = config_3.maxX;
        const y2 = punto.y2;
        const m = (y2 - y1) / (x2 - x1);
        const b = y1 - m * x1;

        return {
            m: m,
            b: b,
            color: punto.color,
            discontinua: punto.discontinua
        };
    });

    lineas_3.forEach(linea => {
        ctx.beginPath();
        ctx.strokeStyle = linea.color;
        ctx.setLineDash(linea.discontinua ? [5, 5] : []);
        ctx.lineWidth = 2;

        for (let x = config_3.minX; x <= config_3.maxX; x += 0.1) {
            let y = linea.m * x + linea.b;
            let canvasX = ((x - config_3.minX) / (config_3.maxX - config_3.minX)) * (canvas.width - config_3.paddingLeft - config_3.padding) + config_3.paddingLeft;
            let canvasY = canvas.height - config_3.paddingBottom - ((y - config_3.minY) / (config_3.maxY - config_3.minY)) * (canvas.height - config_3.padding - config_3.paddingBottom);

            if (x === config_3.minX) {
                ctx.moveTo(canvasX, canvasY);
            } else {
                ctx.lineTo(canvasX, canvasY);
            }
        }

        ctx.stroke();
    });

    ctx.setLineDash([]);
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar lineas de crecimiento para la grafica de peso para la edad en niños de 2 a 5 años
function dibujarLineasDeCrecimiento_4(ctx, config_4, canvas, puntos_4) {
    const lineas_4 = puntos_4.map(punto => {
        const x1 = config_4.minX;
        const y1 = punto.y1;
        const x2 = config_4.maxX;
        const y2 = punto.y2;
        const m = (y2 - y1) / (x2 - x1);
        const b = y1 - m * x1;

        return {
            m: m,
            b: b,
            color: punto.color,
            discontinua: punto.discontinua
        };
    });

    lineas_4.forEach(linea => {
        ctx.beginPath();
        ctx.strokeStyle = linea.color;
        ctx.setLineDash(linea.discontinua ? [5, 5] : []);
        ctx.lineWidth = 2;

        for (let x = config_4.minX; x <= config_4.maxX; x += 0.1) {
            let y = linea.m * x + linea.b;
            let canvasX = ((x - config_4.minX) / (config_4.maxX - config_4.minX)) * (canvas.width - config_4.paddingLeft - config_4.padding) + config_4.paddingLeft;
            let canvasY = canvas.height - config_4.paddingBottom - ((y - config_4.minY) / (config_4.maxY - config_4.minY)) * (canvas.height - config_4.padding - config_4.paddingBottom);

            if (x === config_4.minX) {
                ctx.moveTo(canvasX, canvasY);
            } else {
                ctx.lineTo(canvasX, canvasY);
            }
        }

        ctx.stroke();
    });

    ctx.setLineDash([]);
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar lineas de crecimiento para la grafica de imc para la edad en niños de 5 a 17 años
function dibujarLineasDeCrecimiento_5(ctx, config_5, canvas, puntos_5) {
    const lineas_5 = puntos_5.map(punto => {
        const x1 = config_5.minX;
        const y1 = punto.y1;
        const x2 = config_5.maxX;
        const y2 = punto.y2;
        const m = (y2 - y1) / (x2 - x1);
        const b = y1 - m * x1;

        return {
            m: m,
            b: b,
            color: punto.color,
            discontinua: punto.discontinua
        };
    });

    lineas_5.forEach(linea => {
        ctx.beginPath();
        ctx.strokeStyle = linea.color;
        ctx.setLineDash(linea.discontinua ? [5, 5] : []);
        ctx.lineWidth = 2;

        for (let x = config_5.minX; x <= config_5.maxX; x += 0.1) {
            let y = linea.m * x + linea.b;
            let canvasX = ((x - config_5.minX) / (config_5.maxX - config_5.minX)) * (canvas.width - config_5.paddingLeft - config_5.padding) + config_5.paddingLeft;
            let canvasY = canvas.height - config_5.paddingBottom - ((y - config_5.minY) / (config_5.maxY - config_5.minY)) * (canvas.height - config_5.padding - config_5.paddingBottom);

            if (x === config_5.minX) {
                ctx.moveTo(canvasX, canvasY);
            } else {
                ctx.lineTo(canvasX, canvasY);
            }
        }

        ctx.stroke();
    });

    ctx.setLineDash([]);
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar lineas de crecimiento para la grafica de la talla para la edad en niños de 5 a 17 años
function dibujarLineasDeCrecimiento_6(ctx, config_6, canvas, puntos_6) {
    const lineas_6 = puntos_6.map(punto => {
        const x1 = config_6.minX;
        const y1 = punto.y1;
        const x2 = config_6.maxX;
        const y2 = punto.y2;
        const m = (y2 - y1) / (x2 - x1);
        const b = y1 - m * x1;

        return {
            m: m,
            b: b,
            color: punto.color,
            discontinua: punto.discontinua
        };
    });

    lineas_6.forEach(linea => {
        ctx.beginPath();
        ctx.strokeStyle = linea.color;
        ctx.setLineDash(linea.discontinua ? [5, 5] : []);
        ctx.lineWidth = 2;

        for (let x = config_6.minX; x <= config_6.maxX; x += 0.1) {
            let y = linea.m * x + linea.b;
            let canvasX = ((x - config_6.minX) / (config_6.maxX - config_6.minX)) * (canvas.width - config_6.paddingLeft - config_6.padding) + config_6.paddingLeft;
            let canvasY = canvas.height - config_6.paddingBottom - ((y - config_6.minY) / (config_6.maxY - config_6.minY)) * (canvas.height - config_6.padding - config_6.paddingBottom);

            if (x === config_6.minX) {
                ctx.moveTo(canvasX, canvasY);
            } else {
                ctx.lineTo(canvasX, canvasY);
            }
        }

        ctx.stroke();
    });

    ctx.setLineDash([]);
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar lineas de crecimiento para la grafica de imc para la edad en niños de 2 a 5 años
function dibujarLineasDeCrecimiento_7(ctx, config_7, canvas, puntos_7) {
    const lineas_7 = puntos_7.map(punto => {
        const x1 = config_7.minX;
        const x2 = config_7.maxX;
        const m = (punto.y2 - punto.y1) / (x2 - x1);
        const b = punto.y1 - m * x1;

        return {
            m: m,
            b: b,
            color: punto.color,
            discontinua: punto.discontinua
        };
    });

    lineas_7.forEach(linea => {
        ctx.beginPath();
        ctx.strokeStyle = linea.color;
        ctx.setLineDash(linea.discontinua ? [5, 5] : []);
        ctx.lineWidth = 2;

        for (let x = config_7.minX; x <= config_7.maxX; x += 0.1) {
            let y = linea.m * x + linea.b;

            let canvasX = ((x - config_7.minX) / (config_7.maxX - config_7.minX)) * (canvas.width - (2 * config_7.padding)) + config_7.padding;
            let canvasY = canvas.height - ((y - config_7.minY) / (config_7.maxY - config_7.minY)) * (canvas.height - (2 * config_7.padding)) - config_7.padding;

            if (x === config_7.minX) {
                ctx.moveTo(canvasX, canvasY);
            } else {
                ctx.lineTo(canvasX, canvasY);
            }
        }

        ctx.stroke();
    });

    ctx.setLineDash([]);
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar curva de crecimiento para la grafica de talla para la edad en niños de 0 a 2 años
function dibujarCurvaCrecimiento_1(ctx, config_8, canvas, puntos_8) {
    ctx.lineWidth = 2;

    puntos_8.forEach(punto => {
        const xInicio = config_8.paddingLeft;
        const xFin = canvas.width - config_8.padding;
        const yInicio = canvas.height - config_8.paddingBottom - ((punto.y1 - config_8.minY) / (config_8.maxY - config_8.minY)) * (canvas.height - config_8.padding - config_8.paddingBottom);
        const yFin = canvas.height - config_8.paddingBottom - ((punto.y2 - config_8.minY) / (config_8.maxY - config_8.minY)) * (canvas.height - config_8.padding - config_8.paddingBottom);

        const cp1x = xInicio + (xFin - xInicio) * 0.2;
        const cp1y = yInicio - (yInicio - yFin) * 0.5;
        const cp2x = xInicio + (xFin - xInicio) * 0.8;
        const cp2y = yFin + (yInicio - yFin) * 0.1;

        ctx.beginPath();
        ctx.moveTo(xInicio, yInicio);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, xFin, yFin);
        ctx.strokeStyle = punto.color;
        if (punto.discontinua) {
            ctx.setLineDash([5, 5]);
        } else {
            ctx.setLineDash([]);
        }
        ctx.stroke();
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar curvas de crecimiento para la grafica de perimetro cefalico para la edad en niños de 0 a 5 años
function dibujarCurvaCrecimiento_2(ctx, config_9, canvas, puntos_9) {
    ctx.lineWidth = 2;

    puntos_9.forEach(punto => {
        const xInicio = config_9.paddingLeft;
        const xFin = canvas.width - config_9.padding;
        const yInicio = canvas.height - config_9.paddingBottom - ((punto.y1 - config_9.minY) / (config_9.maxY - config_9.minY)) * (canvas.height - config_9.padding - config_9.paddingBottom);
        const yFin = canvas.height - config_9.paddingBottom - ((punto.y2 - config_9.minY) / (config_9.maxY - config_9.minY)) * (canvas.height - config_9.padding - config_9.paddingBottom);

        const cp1x = xInicio + (xFin - xInicio) * 0.1;
        const cp1y = yInicio - (yInicio - yFin) * 1.0;
        const cp2x = xInicio + (xFin - xInicio) * 0.9;
        const cp2y = yFin + (yInicio - yFin) * 0.1;

        ctx.beginPath();
        ctx.moveTo(xInicio, yInicio);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, xFin, yFin);
        ctx.strokeStyle = punto.color;
        if (punto.discontinua) {
            ctx.setLineDash([5, 5]);
        } else {
            ctx.setLineDash([]);
        }
        ctx.stroke();
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar curvas de crecimiento para la grafica de imc para la edad en niños de 0 a 2 años
function dibujarCurvaCrecimiento_3(ctx, config_10, canvas, puntos_10) {
    ctx.lineWidth = 2;

    puntos_10.forEach(punto => {
        const xInicio = config_10.paddingLeft;
        const xFin = canvas.width - config_10.padding;
        const yInicio = canvas.height - config_10.paddingBottom - ((punto.y1 - config_10.minY) / (config_10.maxY - config_10.minY)) * (canvas.height - config_10.padding - config_10.paddingBottom);
        const yFin = canvas.height - config_10.paddingBottom - ((punto.y2 - config_10.minY) / (config_10.maxY - config_10.minY)) * (canvas.height - config_10.padding - config_10.paddingBottom);

        const cp1x = xInicio + (xFin - xInicio) * 0.0001;
        const cp1y = yInicio + 90;

        const cp2x = xInicio + (xFin - xInicio) * 0.0001;
        const cp2y = yInicio - 210;

        ctx.beginPath();
        ctx.moveTo(xInicio, yInicio);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, xFin, yFin);
        ctx.strokeStyle = punto.color;
        if (punto.discontinua) {
            ctx.setLineDash([5, 5]);
        } else {
            ctx.setLineDash([]);
        }
        ctx.stroke();
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Funcion dibujar curvas de crecimiento para la grafica de peso para la edad en niños de 0 a 2 años
function dibujarCurvaCrecimiento_4(ctx, config_11, canvas, puntos_11) {
    ctx.lineWidth = 2;

    puntos_11.forEach(punto => {
        const xInicio = config_11.paddingLeft;
        const xFin = canvas.width - config_11.padding;
        const yInicio = canvas.height - config_11.paddingBottom - ((punto.y1 - config_11.minY) / (config_11.maxY - config_11.minY)) * (canvas.height - config_11.padding - config_11.paddingBottom);
        const yFin = canvas.height - config_11.paddingBottom - ((punto.y2 - config_11.minY) / (config_11.maxY - config_11.minY)) * (canvas.height - config_11.padding - config_11.paddingBottom);

        const cp1x = xInicio + (xFin - xInicio) * 0.20;
        const cp1y = yInicio - (yInicio - yFin) * 0.18;
        const cp2x = xInicio + (xFin - xInicio) * 0.15;
        const cp2y = yFin + (yInicio - yFin) * 0.1;

        ctx.beginPath();
        ctx.moveTo(xInicio, yInicio);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, xFin, yFin);
        ctx.strokeStyle = punto.color;
        if (punto.discontinua) {
            ctx.setLineDash([5, 5]);
        } else {
            ctx.setLineDash([]);
        }
        ctx.stroke();
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////

/*const pdf = new jsPDF();
const dataURL = canvas.toDataURL();
pdf.addImage(dataURL, 'PNG', 10, 10, 180, 180);
pdf.save('grafica.pdf');*/

document.addEventListener("DOMContentLoaded", function () {
    var downloadBtn = document.getElementById('botond');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function (event) {
            event.preventDefault();

            var canvas = document.getElementById('myCanvas');
            if (!canvas) {
                console.error('No se encontró el canvas de la gráfica');
                return;
            }

            var fechaVisita = document.getElementById('fecha').value || "No especificado";
            var fechaNacimiento = document.getElementById('fechaNacimiento').valu || "No especificado";
            var sexo = document.getElementById('sexo').value || "No especificado";
            var talla = document.getElementById('talla').value || "0";
            var peso = document.getElementById('peso').value || "0";
            var perimetroCefalico = document.getElementById('peri').value || "0";

            sexo = sexo === "boy" ? "Masculino" : sexo === "girl" ? "Femenino" : "No especificado";
            var edad = fechaNacimiento ? calcularEdad(fechaNacimiento) : "No especificado";
            var imc = (peso && talla) ? (peso / Math.pow(talla / 100, 2)).toFixed(2) : "No especificado";

            var opt = {
                margin: [1, 0.5, 1, 0.5],
                filename: 'grafica_generada.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            html2pdf().set(opt).from(canvas).toPdf().get('pdf').then(function (pdf) {
                var pageWidth = pdf.internal.pageSize.getWidth();
                var imgHeight = canvas.height * (pageWidth / canvas.width);


                var yPosition = 1 + imgHeight + 0.5;

                pdf.setFontSize(14);
                pdf.setTextColor(40);
                pdf.text("Formato de Historia Clínica", 0.5, yPosition);

                yPosition += 0.5;
                pdf.setFontSize(10);
                pdf.text('Nombre niñ@: _________ Apellido niñ@: _________  Numero documento: __________ Sexo: ${sexo} Edad: ${edad} años', 0.5, yPosition);
                yPosition += 0.5;
                pdf.text(`Nombre pediatra: ___ Apellido pediatra: ___ `, 0.5, yPosition);
                yPosition += 0.5;
                pdf.text('Fecha de la visita: ${fechaVisita}', 0.5, yPosition);
                yPosition += 0.5;
                pdf.text('Fecha de nacimiento niñ@: ${fechaNacimiento}', 0.5, yPosition);
                yPosition += 0.5;
                pdf.text('IMC ${imc} - Talla/Longitud: ${talla} cm - Peso: ${peso} kg - Perímetro Cefálico: ${perimetroCefalico} cm', 0.5, yPosition);
                yPosition += 0.5;
                pdf.text(`Observaciones ___ `, 0.5, yPosition);
                pdf.save('grafica_generada.pdf');
            }).catch(function (error) {
                console.error("Error al generar el PDF:", error);
            });
        });
    } else {
        console.error("Botón de descarga no encontrado");
    }
});