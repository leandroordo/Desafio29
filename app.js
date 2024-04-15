const fs = require("node:fs");
const util = require("node:util");

const FILENAME = ".\\messi.txt";
const COLOR_AZUL_VERDE = "\x1b[38;5;19;48;5;40m";
const COLOR_TITLES = "\x1b[97;46m";
const COLOR_BORDERS = "\x1b[32m";
const COLOR_INFO = "\x1b[91m";
const COLOR_RESET = "\x1b[0m";

function formatTitle(value) {
  return `${COLOR_RESET}\n\n${COLOR_TITLES}${value}${COLOR_RESET}`;
}
function formatBorder(value) {
  return `${COLOR_BORDERS}${value}${COLOR_RESET}`;
}
function formatInfo(value) {
  return `${COLOR_INFO}${value}`;
}

console.clear();
console.log(
  `${COLOR_AZUL_VERDE} Desafío 29: Leer archivo de texto en Node.js ${COLOR_RESET}`
);

//Leer el archivo de texto
const fileContents = fs.readFileSync(FILENAME, "utf8");

//Mostrar el contenido del objeto process en la consola
console.log(formatTitle("Objeto process"));
console.log(util.inspect(process, { colors: true, showHidden: false }));

//Separar el contenido del archivo en líneas y almacenar el resultado en una matriz
const lineas = fileContents.split("\n");

//Contar el número de elementos en la matriz (líneas)
const totalLineas = lineas.length;

//Separar el contenido del archivo en palabras
const palabras = fileContents.split(" ");

//Contar el número de elementos en la matriz (palabras)
const totalPalabras = palabras.length;

//Mostrar los resultados en la consola
console.log(formatTitle("Resultados"));
console.log(formatBorder("┌───────────────────────┬───────────┐"));
console.log(
  `${formatBorder("│")} ${formatInfo("Cantidad de líneas    ")}${formatBorder(
    "│"
  )}    ${formatInfo(totalLineas)}` +
    " ".repeat(7 - totalLineas.toString().length) +
    `${formatBorder("│")}`
);
console.log(
  `${formatBorder("│")} ${formatInfo("Cantidad de palabras  ")}${formatBorder(
    "│"
  )}    ${formatInfo(totalPalabras)}` +
    " ".repeat(7 - totalPalabras.toString().length) +
    `${formatBorder("│")}`
);
console.log(formatBorder("└───────────────────────┴───────────┘"));
