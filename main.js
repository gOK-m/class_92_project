function addUser(){
    player_1 = document.getElementById("user_input_1").value;
    player_2 = document.getElementById("user_input_2").value;
    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);
    window.location = "game.html";
}
function setScore(){
    score_1 = 0;
    score_2 = 0;
}