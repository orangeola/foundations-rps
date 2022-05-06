function computerPlay()
{
    const moves = ["Rock", "Paper", "Scissors"];
    return moves[random()];
}

function random()
{
    return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
}

