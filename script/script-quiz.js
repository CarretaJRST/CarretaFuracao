// Array de perguntas e respostas
const questions = [
    {
        question: 'Quem é o mais fogarento do grupo?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan', ''],
        answer: 'Juan'
    },
    {
        question: 'Quem é o mais pistola?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan', ''],
        answer: 'Rian'
    },
    {
        question: 'Quem é mais safado(a)?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan', ''],
        answer: 'Sanderson'
    },
    {
        question: 'Quem é mais falso moralista?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan', ''],
        answer: 'Tiago'
    },
    {
        question: 'Quem fica de rolo com menina e depois disfarça?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Rian'
    },
    {
        question: 'Quem é mais pobre nojento?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Juan'
    },
    {
        question: 'O que o Tiago SEMPRE apoia na vida dele?',
        options: ['Esse grupo', 'Ele mesmo', 'Sanderson', 'Misoginia'],
        answer: 'Sanderson'
    },
    {
        question: 'O que o Sand sempre faz quando está a ponto de ser vencido no argumento?',
        options: ['Retruca tudo', 'Faz a egípcia', 'Fica revoltada', 'Foge'],
        answer: 'Retruca tudo'
    },
    {
        question: 'O que o Rian mais fala no dia a dia?',
        options: ['Meu santo Deus', 'Seu rabo', 'Pprt', 'Nojo'],
        answer: 'Meu santo Deus'
    },
    {
        question: 'Por qual menina o Juan seria o gado supremo?',
        options: ['Jisoo (BlackPink)', 'Jade Picon', 'Rose (BlackPink)', 'A sonhada asiática', 'All Options'],
        answer: 'All Options'
    },
    {
        question: 'Qual foi o emprego anterior do Juan?',
        options: ['Marido da Rose', 'Est. Logística', 'Pobre de aluguel', 'Lixeiro'],
        answer: 'Est. Logística'
    },
    {
        question: 'Quem não resiste a uma cacheada?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Sanderson'
    },
    {
        question: 'Quem não resiste a uma pretinha?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Rian'
    },
    {
        question: 'Qual a banda preferida do Rian?',
        options: ['Carreta Furacão', 'My First Story', 'Against the Current', 'One Ok Rock'],
        answer: 'One Ok Rock'
    },
    {
        question: 'Qual o estilo musical do Sandinho?',
        options: ['Funkeiro', 'Eclético', 'Eletrônica', 'Rock'],
        answer: 'Eclético'
    },
    {
        question: 'Qual o nome mais comprometedor que o grupo já teve?',
        options: ['Esquadrão Safadeza', 'Tarados da Playboy', 'Skies of Furacão', 'Carreta Fura o Cão'],
        answer: 'Tarados da Playboy'
    },
    {
        question: 'Qual o estilo musical do Tiago/Rian?',
        options: ['Funk', 'Pagode', 'Sons do Rodrigo Faro', 'Rock'],
        answer: 'Rock'
    },
    {
        question: 'Qual a música preferida do Aimar?',
        options: ['PinkVenom', 'I cant stop me', 'Queen of Hearts', 'Ready For Love'],
        answer: 'Ready For Love'
    },
    {
        question: 'De quem o Rian gosta?',
        options: ['Da sua mãe', 'Mãe do Renan', 'Dani', 'Ingrid', 'Larissa'],
        answer: 'Da sua mãe'
    },
    {
        question: 'Até onde o Sand iria por mulher?',
        options: ['Transcender todo o físico', 'Confins do Universo', 'Confins da Terra', 'Inferno'],
        answer: 'Transcender todo o físico'
    },
    {
        question: 'Qual a palavra Tiago costuma falar antes de iniciar uma frase em áudio?',
        options: ['Parceiro', 'Mano', 'Cara', 'Cucabeludo'],
        answer: 'Parceiro'
    },
    {
        question: 'Qual a diversão preferida do Rian?',
        options: ['Perturbar Anão', 'Música', 'Videogame', 'Amigas (HMM)', 'Assistir Ultraman'],
        answer: 'Música'
    },
    {
        question: 'Qual o herói preferido do Rian?',
        options: ['Spectreman', 'Spider-Man', 'Flash', 'Ultraman'],
        answer: 'Spectreman'
    },
    {
        question: 'O que deixa Juan mais desconfortável?',
        options: ['Estresse', 'Discussões', 'Ser comido no argumento', 'Vergonha'],
        answer: 'Discussões'
    },
    {
        question: 'Qual é o bordão mais antigo do grupo?',
        options: ['Eles precisam de orientação', 'Aceite caladah', 'Talento moreh', 'Dou biscoito, dou uma coisa'],
        answer: 'Aceite caladah'
    },
    {
        question: 'O que Sand faz nas horas vagas?',
        options: ['Anda Skate', 'Parkour', 'Desenrola garota', 'Ri', 'Todas essas'],
        answer: 'Todas essas'
    },
    {
        question: 'Quem já mandou a mídia mais longa (em minutos) do grupo?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Tiago'
    },
    {
        question: 'Qual a data de batismo do Rian?',
        options: ['11/03/2016', '13/03/2016', '12/03/2016', '15/03/2016'],
        answer: '12/03/2016'
    },
    {
        question: 'Quem é mais sentimental?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Juan'
    },
    {
        question: 'Quem é mais palhaço?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Tiago'
    },
    {
        question: 'Quem é o mais lerdo?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Juan'
    },
    {
        question: 'Quem é o mais bananão?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Sanderson'
    },
    {
        question: 'Que dia Sand se batizou?',
        options: ['29/08/2023', '28/09/203', '29/09/2023', '30/09/2023'],
        answer: '30/09/2023'
    },
    {
        question: 'Quem foi o último(a) a entrar no grupo?',
        options: ['Tiago', 'Juan', 'Rian'],
        answer: 'Rian'
    },
    {
        question: 'Quem é a namoradinha do Sand?',
        options: ['Tiago', 'Patrick', 'Danieli', 'Dragão'],
        answer: 'Danieli'
    },
    {
        question: 'Quem é a namoradinha do Rian?',
        options: ['Chrissy Constanza', 'Lisa', 'Ingrid', 'Larissa'],
        answer: 'Ingrid'
    },
    {
        question: 'Quem é mais fã de Taylor Swift?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Sanderson'
    },
    {
        question: 'Qual dupla faz mais merda?',
        options: ['Tiago e Sanderson', 'Rian e Juan', 'All options'],
        answer: 'All options'
    },
    {
        question: 'O que tinha debaixo do Edredom?',
        options: ['Um pau (cabo de vassoura)', 'Travesseiro do Tiago', 'Gases Tóxicos', 'Uma velha', 'Duas bolas e um torpedo'],
        answer: 'Duas bolas e um torpedo'
    },
    {
        question: 'Qual a melhor dupla do grupo?',
        options: ['Tiago e Sanderson', 'Rian e Juan', 'Rian e Tiago', 'Sanderson e Juan', 'Tiago e Juan', 'Rian e Sanderson', 'All options'],
        answer: 'All options'
    },
    {
        question: 'Quem mais responde no atual grupo?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Tiago'
    },
    {
        question: 'Quem é mais medroso com as coisas?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan',],
        answer: 'Juan'
    },
    {
        question: 'Quem fala mais besteira?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan', 'Todos'],
        answer: 'Todos'
    },
    {
        question: 'Quem ri mais alto?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Rian'
    },
    {
        question: 'Quem é mais iludido(a)?',
        options: ['Tiago', 'Sanderson', 'Rian', 'Juan'],
        answer: 'Juan'
    },
    {
        question: 'Qual o jogo OFICIAL do quarteto?',
        options: ['Ultraman FE', 'Street Fighter', 'Lego (qualquer tipo)', 'GTA'],
        answer: 'Lego (qualquer tipo)'
    },
    {
        question: 'Quem era o Patrick?',
        options: ['Me recuso a responder', 'Esquece essa merda', 'O amor perdido do Juan', 'O Patrick ué', 'BANIDO!'],
        answer: 'BANIDO!'
    },
    {
        question: 'Quem é o mais gado?',
        options: ['Difícil', 'Sanderson', 'Rian', 'Juan', 'Tiago', 'Depende quem é a suggar mommy'],
        answer: 'Depende quem é a suggar mommy'
    }
];

let currentQuestionNumber = 0; // Número da pergunta atual
let score = 0; // Pontuação do jogador

// Elementos HTML
const question = document.getElementById('question');
const options = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreDisplay = document.getElementById('score-display');
const errorDisplay = document.getElementById('error');

// Função para exibir uma pergunta
function showQuestion(questionObj) {
    question.innerText = questionObj.question;
    options.innerHTML = '';

    questionObj.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = option;
        button.setAttribute('onClick', 'checkAnswer(this.innerText)');
        options.appendChild(button);
    });
}

// Função para exibir uma mensagem de feedback
function showMessage(message, type) {
    errorDisplay.innerText = message;
    errorDisplay.className = `error ${type}`;
    errorDisplay.classList.remove('hidden');
}

// Função para verificar a resposta do jogador
function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionNumber];

    if (answer === currentQuestion.answer) {
        score++;
        scoreDisplay.innerText = score;
        showMessage('Correto!', 'success');
        const escolha =  '../midia/SnapSave.io - acerto mizeravi (128 kbps).mp3'
        const audio = new Audio(escolha);
        audio.play();
        if(score == 41){
            const escolha =  '../midia/SnapSave.io - efeitos sonoros do programa do Ratinho (super estourado) (320 kbps).mp3'
            const audio = new Audio(escolha);
            audio.play();
            showMessage(`Você acertou 95% das perguntas, parabéns! Quer a festa meu amor?`, 'info');
        }
    } else {
        showMessage('Incorreto!', 'error');
        const escolha =  '../midia/faustao-errou.mp3'
        const audio = new Audio(escolha);
        audio.play();
    }

    currentQuestionNumber++;
    if (currentQuestionNumber < questions.length) {
        showQuestion(questions[currentQuestionNumber]);
    } else {
        showMessage(`Você acertou ${score} de ${questions.length} perguntas!`, 'info');
        question.classList.add('hidden');
        options.classList.add('hidden');
        submitBtn.classList.add('hidden');
        restartBtn.classList.remove('hidden');
    }
}

// Função para enviar a resposta do jogador
function submitAnswer() {
    const selectedOption = options.querySelector('.btn.selected');

    if (selectedOption) {
        checkAnswer(selectedOption.innerText);
    } else {
        showMessage('Selecione uma opção!', 'error');
    }
}

// Função para reiniciar o jogo
function restartGame() {
    currentQuestionNumber = 0;
    score = 0;
    scoreDisplay.innerText = score;
    showQuestion(questions[currentQuestionNumber]);
    restartBtn.classList.add('hidden');
    question.classList.remove('hidden');
    options.classList.remove('hidden');
    submitBtn.classList.remove('hidden');
}

// Início do jogo
showQuestion(questions[currentQuestionNumber]);