var N = 0;
var M = 0;
var playerX = 0;
var playerY = 0;
var map = [];
var isGame = false;


    var JSONinfo = JSON.parse($("textarea").val());
    N = JSONinfo.N;
    M = JSONinfo.M;
    var JSONfield = JSONinfo.field;

    var field = [];
    for (var i = 0; i < (N+2); i++) {
        field[i] = [];
        for (var j = 0; j < (M+2); j++) {
            field[i][j] = [];
            for (var ii = 0; ii < 3; ii++) {
                field[i][j][ii] = [];
                for (var jj = 0; jj < 3; jj++) {
                    field[i][j][ii][jj] = 0;
                }
            }
        }
    }

    for (i = 1; i < N+1; i++) {
        field[i][0] = Cell(1,1,JSONfield[i-1][0],1,0);
        field[i][M+1] = Cell(1,1,0,1,JSONfield[i-1][M-1]);
    }
    for (j = 1; j < M+1; j++) {
        field[0][j] = Cell(1,0,1,JSONfield[0][j-1],1);
        field[N+1][j] = Cell(1,JSONfield[N-1][j-1],1,0,1);
    }
    field[0][0] = Cell(1,0,1,1,0);
    field[0][M+1] = Cell(1,0,0,1,1);
    field[N+1][0] = Cell(1,1,1,0,0);
    field[N+1][M+1] = Cell(1,1,0,0,1);
    for (i = 0; i < N; i++) {
        for (j = 0; j < M; j++) {
            var up = 0;
            var right = 0;
            var down = 0;
            var left = 0;
            if (JSONfield[i][j] === 1) {
                if (i === 0) {
                    up = 1;
                } else {
                    up = JSONfield[i - 1][j];
                }
                if (j === M - 1) {
                    right = 1;
                } else {
                    right = JSONfield[i][j + 1];
                }
                if (i === N - 1) {
                    down = 1;
                } else {
                    down = JSONfield[i + 1][j];
                }
                if (j === 0) {
                    left = 1;
                } else {
                    left = JSONfield[i][j - 1];
                }
            }

            field[i+1][j+1] = Cell(JSONfield[i][j],up,right,down,left);
        }
    }

    var place = $("#map");
    place.empty();
    map = [];
    for (i = 0; i < 3*(N+2); i++) {
        map[i] = [];
        for (j = 0; j < 3*(M+2); j++) {
            map[i][j] = 0;
        }
    }
    for (i = 0; i < (N+2); i++) {
        for (j = 0; j < (M+2); j++) {
            for (ii = 0; ii < 3; ii++) {
                for (jj = 0; jj < 3; jj++) {
                    map[3 * i + ii][3 * j + jj] = field[i][j][ii][jj];
                }
            }
        }
    }
    place.append("<table>");
    for (i = 0; i < 3*(N+2); i++) {
        place.append("<tr>");
        for (j = 0; j < 3*(M+2); j++) {
            var colorClass = "green";
            if (map[i][j] === 1) {
                colorClass = "grey";
            }
            place.append("<td><div class='cell " + colorClass + "'</div></td>");
        }
        place.append("</tr>");
    }
    place.append("</table>");

    playerX = 2;
    playerY = 3*(N+1);
    isGame = true;

    newPos(playerX,playerY);


function Cell(cell,up,right,down,left) {
    var result = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

    if (cell === 1) result[1][1] = 1;
    if (up === 1) result[0][1] = 1;
    if (right === 1) result[1][2] = 1;
    if (down === 1) result[2][1] = 1;
    if (left === 1) result[1][0] = 1;

    return result;
}


document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (!(isGame === true)) return;
    if (e.keyCode === 38) {
        goUp();
    }
    else if (e.keyCode === 40) {
        goDown();
    }
    else if (e.keyCode === 37) {
        goLeft();
    }
    else if (e.keyCode === 39) {
        goRight();
    }
}

function goUp() {
    if (map[playerY-1][playerX] === 0)
        newPos(playerX,playerY-1);
    else errorStep();
}
function goDown() {
    if (map[playerY+1][playerX] === 0)
        newPos(playerX,playerY+1);
    else errorStep();
}
function goLeft() {
    if (map[playerY][playerX-1] === 0)
        newPos(playerX-1,playerY);
    else errorStep();
}
function goRight() {
    if (map[playerY][playerX+1] === 0)
        newPos(playerX+1,playerY);
    else errorStep();
}

function newPos(x,y) {
    var cellPos = playerX + playerY*3*(M+2);
    $(".cell:eq(" + cellPos + ")").removeClass("player");
    playerX = x;
    playerY = y;
    cellPos = playerX + playerY*3*(M+2);
    $(".cell:eq(" + cellPos + ")").addClass("player");

    if (playerX === 3*(M+1) && playerY === 2 ) {
        $('.ButtonOfQuest3').prop("disabled",false);
    }
}

function errorStep() {
    //alert("You cant go there");
}