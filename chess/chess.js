let test = document.getElementById("btn1");
const canvas = document.getElementById("canvas");
const somethingDiv = document.getElementById("something");
const imageTesting = document.getElementById("img_thing")

let myVar = 1;




class Piece{
    constructor(notation, path){
        this.path = path;
        this.notation = notation;
    }
}

function loadPieces(){

    let WK = new Piece("WK", "pieces/WK.svg")
    let WQ = new Piece("WQ", "pieces/WQ.svg")
    let Wn = new Piece("Wn", "pieces/Wn.svg")
    let WR = new Piece("WR", "pieces/WR.svg")
    let WP = new Piece("WP", "pieces/WP.svg")
    let WB = new Piece("WB", "pieces/WB.svg")
    let BK = new Piece("BK", "pieces/WK.svg")
    let BQ = new Piece("BK", "pieces/WK.svg")
    let Bn = new Piece("BK", "pieces/WK.svg")
    let BR = new Piece("BK", "pieces/WK.svg")
    let BP = new Piece("BQ", "pieces/WK.svg")
    let BB = new Piece("BB", "pieces/WK.svg")
    console.log(testing.notation, testing.path)
    imageTesting.src = testing.path;


}

function createGraphicalBoard(){
    console.log("createGrapicalBoard")
    canvas.innerHTML = "";

    for (let file = 0; file < 8; file++){
        for (let rank = 0; rank < 8; rank++){
            let square = document.createElement('div');
            square.className = 'chess-square';
                if ((file + rank) % 2 == 0){
                    square.style.backgroundColor = "#2b2120"
                }
                else{
                    square.style.backgroundColor = '#f4bb07'
                }
            canvas.appendChild(square)
        }
    }
    scalingSquaresToBoardSize()
}

function scalingSquaresToBoardSize(){
    let chessSquare = document.getElementsByClassName("chess-square");
    let box = document.querySelector('#canvas')
    let widthSquare = box.offsetWidth/8;
    let heightSquare = box.offsetHeight/8;
    console.log(widthSquare);
    console.log(heightSquare);

    for (let i=0; i < chessSquare.length; i++){
        setSquareSize(chessSquare[i], heightSquare, widthSquare)
    }
}

function setSquareSize(div, height, width){
    div.style.height = height+"px";
    div.style.width = width+"px";
}

function displayPieces(){
    console.log("dsadsa")

}

