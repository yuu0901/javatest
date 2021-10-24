const quiz =[
    {
        question: 'モンスターハンターのキャラで国を滅ぼしたと言われている古龍はどれ？',
        answers: [
            'ミラボレアス',
            'ゴグマジオス',
            'シャガルマガラ',
            'アマツマガツチ'
        ],
        monster: 'ミラボレアス'
    },{
        question: 'モンスターハンターのキャラで次のうち一番大きいモンスターはどれ？',
        answers: [
            'ゾラ・マグダラオス',
            'ダラ・アマデュラ',
            'ダレン・モーラン',
            'ジエン・モーラン',
        ],
        monster: 'ダラ・アマデュラ'
    },{
        question: 'モンスターハンターのキャラで全ての災害を操るモンスターはどれ？',
        answers: [
            'シャガルマガラ',
            'ムフェト・ジーヴァ',
            'アン・イシュワルダ',
            'アルバトリオン'
        ],
        monster: 'アルバトリオン'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズ問題分、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].monster === e.target.textContent){
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }    
    quizIndex++;
    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
        setupQuiz()
    } else {
        //問題数がなければこちらを実行
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}