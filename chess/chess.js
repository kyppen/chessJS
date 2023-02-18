const test = document.getElementById("btn1");
const canvas = document.getElementById("canvas");
const somethingDiv = document.getElementById("something");
const imageTesting = document.getElementById("img_thing");
const standardNotation = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";




let object = []
let not = []
let numbers = [8,7,6,5,4,3,2,1]
let letters = ["a","b","c","d","e","f","g","h"]

let chessBoard = []
let clickedSquareColorId = ""
let clickedSquareColor = ""

class Piece{
    constructor(notation, path){
        this.path = path;
        this.notation = notation;
    }

    toString(){
        return this.notation;
    }
}





function settingUpBoard(){
    chessBoard = []
    for(let i = 0; i<8; i++){
        let list = ["-", "-", "-", "-", "-", "-", "-", "-"]
        chessBoard.push(list);
    }

    for (let i = 0; i<8; i++){
        console.log(chessBoard[i])
    }
    testing()
}

function testing(){
    let splitNotation = standardNotation.split("/");
    let rowCounter = 0;
    for(let i = 0; i<splitNotation.length; i++){
        let splitByLetterNotation = splitNotation[i].split("");
        let lineCounter = 0;
        for (let i = 0; i<splitByLetterNotation.length; i++){
            let piece = splitByLetterNotation[i];
            switch (piece){
                case "k":
                    console.log("Black King");
                    //let BK = new Piece("k", "pieces/BK.svg")
                    chessBoard[rowCounter].splice(lineCounter, 1, new Piece("k", "pieces/BK.svg"))
                    break;
                case "q":
                    console.log("Black Queen")
                    chessBoard[rowCounter].splice(lineCounter,1, new Piece("q", "pieces/BQ.svg"))
                    break;
                case "n":
                    console.log("Black Knight")
                    chessBoard[rowCounter].splice(lineCounter,1, new Piece("n", "pieces/BN.svg"))
                    break;
                case "r":
                    console.log("Black Rook")
                    chessBoard[rowCounter].splice(lineCounter,1, new Piece("r", "pieces/BR.svg"))
                    break;
                case "b":
                    console.log("Black Bishop")
                    chessBoard[rowCounter].splice(lineCounter,1, new Piece("b", "pieces/BB.svg"))
                    break;
                case "p":
                    console.log("Black Pawn")
                    chessBoard[rowCounter].splice(lineCounter,1, new Piece("p", "pieces/BP.svg"))
                    break;
                case "K":
                    console.log("White King")
                    chessBoard[rowCounter].splice(lineCounter,1, new Piece("K", "pieces/WK.svg"))
                    break;
                case "Q":
                    console.log("White Queen")
                    chessBoard[rowCounter].splice(lineCounter,1, new Piece("Q", "pieces/WQ.svg"))
                    break;
                case "N":
                    console.log("White Knight")
                    chessBoard[rowCounter].splice(lineCounter,1, new Piece("N", "pieces/WN.svg"))
                    break;
                case "R":
                    console.log("White Rook")
                    chessBoard[rowCounter].splice(lineCounter,1, new Piece("R", "pieces/WR.svg"))
                    break;
                case "B":
                    console.log("White Bishop")
                    chessBoard[rowCounter].splice(lineCounter,1, new Piece("B", "pieces/WB.svg"))
                    break;
                case "P":
                    console.log("White Pawn")
                    chessBoard[rowCounter].splice(lineCounter,1, new Piece("P", "pieces/WP.svg"))
                    break;

                
                    
                default:
                    console.log("Default switch statement, from notation part")     
            }
            lineCounter++;
        }
        rowCounter++;
    }
    for (let i = 0; i<8; i++){
        console.log(chessBoard[i])
    }
    showPieces()

}

function showPieces(){
    let divs = canvas.getElementsByTagName("div");
    let divCounter = -1;
    console.log(`Length of divs ${divs.length}`)
    for(let row = 0; row<chessBoard.length; row++){
        for (let line = 0; line<chessBoard[row].length; line++){
            let testVar = chessBoard[row][line];
            divCounter++;
            if (chessBoard[row][line] != "-"){
                divs[divCounter].innerHTML += `<img src="${chessBoard[row][line].path}"/>`
            }
            

        }
    }
}

function createGraphicalBoard(){
    console.log("createGrapicalBoard")

    let letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
    let lettersCounter = 0;
    canvas.innerHTML = "";
    let fileNum = 8;

    let notations = notationForSquares();
    console.log(notations.length)
    let notationCount = 0;


    for (let file = 0; file < 8; file++){
        let counter = 0;
        for (let rank = 0; rank < 8; rank++){
            let square = document.createElement('div');
            square.className = 'chess-square';
            square.id = notations[notationCount]
            square.onclick = squareClick;
            notationCount++;
                if (counter == 0){
                    square.innerHTML = `<p class="numberNotation">${fileNum} </p>`;
                    console.log(fileNum)
                    fileNum = fileNum - 1;
                }
                if (fileNum == 0){
                    square.innerHTML += `<p class="letterNotation"> ${letters[lettersCounter]} </p>`;
                    lettersCounter++;
                }
                counter++;
                if ((file + rank) % 2 == 0){
                    square.style.backgroundColor = '#769656'
                }
                else{
                    square.style.backgroundColor = '#eeeed2'
                }
            canvas.appendChild(square)
        }
    }
    scalingSquaresToBoardSize()
    settingUpBoard()
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


function squareClick(){
    console.log(this.id)

    if(clickedSquareColorId != ""){
        let pastSquare = document.getElementById(clickedSquareColorId)
        pastSquare.style.backgroundColor = clickedSquareColor;
    }

    let clickedSquare = document.getElementById(this.id);
    clickedSquareColor = clickedSquare.style.backgroundColor;
    clickedSquareColorId = this.id;
    clickedSquare.style.backgroundColor = "#ffff4e";
    clickedPosition = notationToListPlace(this.id);
    movePiece(clickedPosition, this.id)
}

function notationToListPlace(notation){
    let notationsplit = notation.split("");
    let letterNot = notationsplit[0] 
    let numberNot = notationsplit[1]
    let reversedNumbers = numbers;
    let reveresedLetters = letters;
    //reveresedLetters.reverse()
    //reversedNumbers.reverse()
    let indexLetter = reveresedLetters.indexOf(letterNot)
    let indexNumber = reversedNumbers.indexOf(parseInt(numberNot))
    
    return chessBoard[indexNumber][indexLetter];

}


function notationForSquares(){
    let listOfNot = []
    for(let i = 0; i<numbers.length; i++){
        for(let j = 0; j<letters.length; j++)
            listOfNot.push(letters[j] + numbers[i])
    }
    return listOfNot;
}

function movePiece(click, notation){
    object.push(click);
    not.push(notation);


    if (object.length == 2){
        console.log("something")
        object.pop();
        not.pop();
        object.pop();
        not.pop();

        

        
    }

    for (let i = 0; i<8; i++){
        console.log(chessBoard[i])
    }




}