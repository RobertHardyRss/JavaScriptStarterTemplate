//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

// sets the type of the canvas context to 2D
/** @type {CanvasRenderingContext2D} */
//@ts-ignore ctx is a CanvasRenderingContext2D
const ctx = canvas.getContext("2d");

// Set the drawing resolution (not the same as CSS size)
canvas.width = 800;
canvas.height = 600;
