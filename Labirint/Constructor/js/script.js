var N = 10;
var M = 15;
var field = [];

function init() {
    $("#JSON").empty();
    var place = $("#field");
    place.empty();
    function cell(x,y) {
        return "<div class='cell' onclick='change(this," + x + ", " + y + ")'></div>"
    }

    place.append("<table>");
    for (var i = 0; i < N; i++) {
        field[i] = [];
        place.append("<tr>");
        for (var j = 0; j < M; j++) {
            field[i][j] = 0;
            place.append("<td>" + cell(i,j) + "</td>");
        }
        place.append("</tr>");
    }
    place.append("</table>");

    place.append("<div id='yellowgreen_standart_hidden' style='display:none;'></div>");
    $('#yellowgreen_standart_hidden').css("background-color","yellowgreen");
}
$(document).ready(init());

function change(elem,x,y) {
    if ($(elem).css("background-color") === ($("#yellowgreen_standart_hidden")).css("background-color")) {
        $(elem).css("background","grey");
        field[x][y] = 1;
    } else {
        $(elem).css("background","yellowgreen");
        field[x][y] = 0;
    }
}

function setSize() {
    var size = parseInt($("#select").val());
    switch (size) {
        case 1 : {
            N = 10;
            M = 15;
            break
        }
        case 2 : {
            N = 12;
            M = 15;
            break
        }
        case 3 : {
            N = 20;
            M = 30;
            break
        }
    }
    init();
}


function gen() {
    $("#JSON").empty();
    if (field[N-1][0] === 1) {
        error(1);
        return;
    }
    if (field[0][M-1] === 1) {
        error(2);
        return;
    }
    if (isWay() !== true) {
        error(3);
        return;
    }

    var JSONinfo = {
        version : 1.0,
        N : N,
        M : M,
        field : field
    };
    var JSONstring = JSON.stringify(JSONinfo, null, 4);
    $("#JSON").text(JSONstring);
}

function isWay() {
    var visited = [];
    for (var i = 0; i < N; i++) {
        visited[i] = [];
        for (var j = 0; j < M; j++)
            visited[i][j] = false;
    }
    var head = 0, tail = 0;
    var ax = [], ay = [];
    ax[0] = N-1;
    ay[0] = 0;
    visited[ax[0]][ay[0]] = true;
    while (head <= tail) {
        var x = ax[head];
        var y = ay[head];
        function push(x,y) {
            if (field[x][y] === 0 && !visited[x][y]) {
                tail++;
                ax[tail] = x;
                ay[tail] = y;
                visited[x][y] = true;
            }
        }
        if (x > 0) push(x-1,y);
        if (x < N-1) push(x+1,y);
        if (y > 0) push(x,y-1);
        if (y < M-1) push(x,y+1);
        head++;
    }

    return visited[0][M-1];
}

function error(err) {
    switch (err) {
        case 1 : {
            alert("Начальная клетка должна быть пустой");
            break
        }
        case 2 : {
            alert("Конечная клетка должна быть пустой");
            break
        }
        case 3 : {
            alert("Пути от начала до конца не существует");
            break
        }
    }
}

window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    alert("Error occured: " + errorMsg);
    return false;
};