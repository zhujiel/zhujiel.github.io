$(".chess-board").ready(() => {
  let board = $(".chess-board");

  for (let i = 0; i < 64; i++) {
    let bg = i % 2 ? true : false;
    if (parseInt(i / 8) % 2) bg = !bg;
    let html =
      '<div class="chess-cell bg' +
      (bg ? 1 : 0) +
      '" data-x="' +
      (i % 8) +
      '" data-y="' +
      parseInt(i / 8) +
      '"></div>';
    board.append(html);
    //console.log(parseInt(i % 8));
  }
});
$(document).ready(() => {
  let cell_width = 56.25;
  let cell_height = 56.25;
  let chess_board = $(".figures");

  let chess_figures = [
    { name: "bR", data: "black", id: "blackRook", position: { x: 0, y: 0 } },
    { name: "bN", data: "black", id: "blackKnight", position: { x: 1, y: 0 } },
    { name: "bB", data: "black", id: "blackBishop", position: { x: 2, y: 0 } },
    { name: "bQ", data: "black", id: "blackQueen", position: { x: 3, y: 0 } },
    { name: "bK", data: "black", id: "blackKing", position: { x: 4, y: 0 } },
    { name: "bB", data: "black", id: "blackBishop1", position: { x: 5, y: 0 } },
    { name: "bN", data: "black", id: "blackKnight1", position: { x: 6, y: 0 } },
    { name: "bR", data: "black", id: "blackRook1", position: { x: 7, y: 0 } },
    { name: "bP", data: "black", id: "blackPawn", position: { x: 0, y: 1 } },
    { name: "bP", data: "black", id: "blackPawn1", position: { x: 1, y: 1 } },
    { name: "bP", data: "black", id: "blackPawn2", position: { x: 2, y: 1 } },
    { name: "bP", data: "black", id: "blackPawn3", position: { x: 3, y: 1 } },
    { name: "bP", data: "black", id: "blackPawn4", position: { x: 4, y: 1 } },
    { name: "bP", data: "black", id: "blackPawn5", position: { x: 5, y: 1 } },
    { name: "bP", data: "black", id: "blackPawn6", position: { x: 6, y: 1 } },
    { name: "bP", data: "black", id: "blackPawn7", position: { x: 7, y: 1 } },
    { name: "wR", data: "white", id: "whiteRook", position: { x: 0, y: 7 } },
    { name: "wN", data: "white", id: "whiteKnight", position: { x: 1, y: 7 } },
    { name: "wB", data: "white", id: "whiteBishop", position: { x: 2, y: 7 } },
    { name: "wQ", data: "white", id: "whiteQueen", position: { x: 3, y: 7 } },
    { name: "wK", data: "white", id: "whiteKing", position: { x: 4, y: 7 } },
    { name: "wB", data: "white", id: "whiteBishop1", position: { x: 5, y: 7 } },
    { name: "wN", data: "white", id: "whiteKnight1", position: { x: 6, y: 7 } },
    { name: "wR", data: "white", id: "whitePawn", position: { x: 7, y: 7 } },
    { name: "wP", data: "white", id: "whitePawn1", position: { x: 0, y: 6 } },
    { name: "wP", data: "white", id: "whitePawn2", position: { x: 1, y: 6 } },
    { name: "wP", data: "white", id: "whitePawn3", position: { x: 2, y: 6 } },
    { name: "wP", data: "white", id: "whitePawn4", position: { x: 3, y: 6 } },
    { name: "wP", data: "white", id: "whitePawn5", position: { x: 4, y: 6 } },
    { name: "wP", data: "white", id: "whitePawn6", position: { x: 5, y: 6 } },
    { name: "wP", data: "white", id: "whitePawn7", position: { x: 6, y: 6 } },
    { name: "wP", data: "white", id: "whitePawn8", position: { x: 7, y: 6 } }
  ];

  for (let i = 0; i < chess_figures.length; ++i) {
    let figureHTML =
      '<div class="chess-figure" name="' +
      chess_figures[i].name +
      '" style="left:' +
      cell_width * chess_figures[i].position.x +
      "px;top:" +
      cell_height * chess_figures[i].position.y +
      'px" data-figureId="' +
      chess_figures[i].id +
      '" data-color="' +
      chess_figures[i].data +
      '"><img src="https://raw.githubusercontent.com/sulzh/Chess_Jquery/master/img/chess/' +
      chess_figures[i].name +
      '.png" alt="" /></div>';
    //console.log(chess_figures[i].figureHTML);
    chess_figures[i].figureHTML = $(figureHTML);
    $(".figures").append($(chess_figures[i].figureHTML));
  }
});
