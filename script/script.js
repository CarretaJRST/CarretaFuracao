const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
const box = 20;
const rows = canvas.height / box;
const columns = canvas.width / box;
let snake = [{ x: 9 * box, y: 10 * box }];
let direction = { x: 0, y: 0 };
let food = { x: 0, y: 0 };
let game;

canvas.addEventListener('click', handleMouseClick);
document.getElementById('restartButton').addEventListener('click', restartGame);

function handleMouseClick(event) {
    const clickX = event.clientX - canvas.offsetLeft;
    const clickY = event.clientY - canvas.offsetTop;
    const snakeHeadX = snake[0].x;
    const snakeHeadY = snake[0].y;
  
    const dx = clickX - snakeHeadX;
    const dy = clickY - snakeHeadY;
  
    if (Math.abs(dx) > Math.abs(dy)) {
      if (direction.x === 0) { // Impede que a cobra volte na direção oposta horizontal
        direction.x = dx > 0 ? box : -box;
        direction.y = 0;
      }
    } else {
      if (direction.y === 0) { // Impede que a cobra volte na direção oposta vertical
        direction.x = 0;
        direction.y = dy > 0 ? box : -box;
      }
    }
  }
  

function generateFood() {
    food.x = Math.floor(Math.random() * columns) * box;
    food.y = Math.floor(Math.random() * rows) * box;
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);
}

function drawSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? 'green' : 'yellow';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
}

function checkCollision() {
    const snakeX = snake[0].x;
    const snakeY = snake[0].y;

    // Verifica colisão com as bordas da tela e corrige o looping
    if (snakeX < 0) snake[0].x = canvas.width - box;
    if (snakeX >= canvas.width) snake[0].x = 0;
    if (snakeY < 0) snake[0].y = canvas.height - box;
    if (snakeY >= canvas.height) snake[0].y = 0;

    // Verifica colisão com o próprio corpo
    for (let i = 1; i < snake.length; i++) {
        if (snakeX === snake[i].x && snakeY === snake[i].y) {
            clearInterval(game);
            game = null;
            document.getElementById('restartButton').style.display = 'block';
            alert('Game Over! Você bateu na própria cauda.');
            return true;
        }
    }

    return false;
}

function update() {
    const snakeX = snake[0].x + direction.x;
    const snakeY = snake[0].y + direction.y;

    const newHead = { x: snakeX, y: snakeY };
    snake.unshift(newHead);

    // Verifica se a cobra alcançou a fruta
    if (snakeX === food.x && snakeY === food.y) {
        generateFood();
        score++;
    } else {
        // Remove o último elemento da cobra se não comeu a fruta
        snake.pop();
    }

    if (checkCollision()) {
        clearInterval(game);
        game = null;
        document.getElementById('restartButton').style.display = 'block';
        alert('Game Over! Você bateu na própria cauda.');
        return;
    }

    drawSnake();
    drawFood();

}

function startGame() {
    if (game) clearInterval(game);

    snake = [{ x: 9 * box, y: 10 * box }];
    direction = { x: 0, y: 0 };
    food = { x: 0, y: 0 };
    generateFood(); // Gera a primeira fruta
    document.getElementById('restartButton').style.display = 'none';
    game = setInterval(update, 100);
}

function restartGame() {
    startGame();
}

function clickM() {
    const escolha = ['../midia/SnapSave.io - [EFEITO SONORO] DEMAIS RODRIGO FARO (320 kbps).mp3', '../midia/SnapSave.io - Cavalo vinhetas (320 kbps).mp3', '../midia/SnapSave.io - Dança Gatinho, Dança Efeito Sonoro (320 kbps).mp3' , '../midia/SnapSave.io - Esse é meu patrão - (áudio) (320 kbps).mp3', '../midia/SnapSave.io - Programa do Ratinho - SFX _Ratinhooo_ original (320 kbps).mp3', '../midia/SnapSave.io - Uepa Efeito Sonoro (320 kbps).mp3', '../midia/SnapSave.io - Ui - Efeito Sonoro (320 kbps).mp3', '../midia/SnapSave.io - vinheta_efeito sonoro - xiiii (Rodrigo Faro) (320 kbps).mp3', '../midia/SnapSave.io - Ele gosta - Efeito Sonoro (320 kbps).mp3', '../midia/SnapSave.io - Irra! (efeito de som) (320 kbps).mp3', '../midia/SnapSave.io - que isso meu filho calma (320 kbps).mp3', '../midia/SnapSave.io - Som de PARE Efeito Sonoro (320 kbps).mp3', '../midia/SnapSave.io - Tarzan - Free Sound Effect (320 kbps).mp3', '../midia/X2Download.app - audio _AI_ vinheta do programa do rodrigo faro (320 kbps).mp3', '../midia/X2Download.app - [EFEITO SONORO] AAAAAAI AI AAAAI AAAAAAI RODRIGO FARO (320 kbps).mp3', '../midia/X2Download.app - É BRINCADEIRA HEIN - RODRIGO FARO - Sound Effect (HD) (320 kbps).mp3', '../midia/X2Download.app - audio _AI_ vinheta do programa do rodrigo faro (320 kbps).mp3', '../midia/X2Download.app - audio _AI_ vinheta do programa do rodrigo faro (320 kbps).mp3', '../midia/X2Download.app - audio _AI_ vinheta do programa do rodrigo faro (320 kbps).mp3', '../midia/X2Download.app - audio _AI_ vinheta do programa do rodrigo faro (320 kbps).mp3', '../midia/X2Download.app - audio _AI_ vinheta do programa do rodrigo faro (320 kbps).mp3']
    const aleatorio = Math.floor(Math.random() * (20 - 0) + 0);           
    const audio = new Audio(escolha[aleatorio])
    audio.play();
}

startGame(); // Inicia o jogo inicialmente
