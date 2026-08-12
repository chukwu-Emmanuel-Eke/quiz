let quiz = [
   {
        questions: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'High Tech Multi Language', 'Hyper Transfer Markup Language', 'Hyperlink and Tech Markup Language'],
        answer: 'Hyper Text Markup Language'
    },
    {
        questions: 'Which HTML tag is used to define an internal style sheet?',
        options: ['script', 'css', 'style', 'design'],
        answer: 'style'
    },
    {
        questions: 'Which HTML element is used for the largest heading?',
        options: ['h6', 'heading', 'h1', 'head'],
        answer: 'h1'
    },
    {
        questions: 'What is the correct HTML tag for inserting a line break?',
        options: ['br', 'break', 'lb', 'hr'],
        answer: 'br'
    },
    {
        questions: 'Which HTML attribute is used to define inline styles?',
        options: ['class', 'style', 'styles', 'font'],
        answer: 'style'
    },
    {
        questions: 'Which HTML element is used to specify a footer for a document or section?',
        options: ['bottom', 'footer', 'section', 'foot'],
        answer: 'footer'
    },
    {
        questions: 'Which character is used to indicate an end tag in HTML?',
        options: ['*', '/', '<', '^'],
        answer: '/'
    },
    {
        questions: 'Which HTML element is used to insert an image?',
        options: ['img', 'image', 'pic', 'src'],
        answer: 'img'
    },
    {
        questions: 'Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?',
        options: ['title', 'src', 'alt', 'longdesc'],
        answer: 'alt'
    },
    {
        questions: 'Which HTML element is used to define an unordered list?',
        options: ['ol', 'ul', 'list', 'li'],
        answer: 'ul'                                                            
    },
    {
        questions: 'Which tag is used to create a hyperlink in HTML?',
        options: ['a', 'link', 'href', 'hyperlink'],
        answer: 'a'
    },
    {
        questions: 'Which HTML input type defines a slider control?',
        options: ['controls', 'slider', 'range', 'search'],
        answer: 'range'
    },
    {
        questions: 'Which HTML element is used to display a scalar measurement within a known range (a gauge)?',
        options: ['gauge', 'range', 'meter', 'progress'],
        answer: 'meter'
    },
    {
        questions: 'What is the correct HTML element for playing audio files?',
        options: ['sound', 'mp3', 'audio', 'music'],
        answer: 'audio'
    },
    {
        questions: 'In HTML, onblur and onfocus are examples of what?',
        options: ['Style attributes', 'HTML elements', 'Event attributes', 'CSS selectors'],
        answer: 'Event attributes'
    },

    {
        questions: 'Which CSS property controls the text size?',
        options: ['font-style', 'text-size', 'font-size', 'text-style'],
        answer: 'font-size'
    },
    {
        questions: 'Which CSS property is used to change the background color?',
        options: ['color', 'bgcolor', 'background-color', 'background-image'],
        answer: 'background-color'
    },
    {
        questions: 'How do you insert a comment in a CSS file?',
        options: ['// this is a comment', '/* this is a comment */', '<!-- this is a comment -->', "' this is a comment"],
        answer: '/* this is a comment */'
    },
    {
        questions: 'Which CSS property is used to change the text color of an element?',
        options: ['fgcolor', 'color', 'text-color', 'font-color'],
        answer: 'color'
    },
    {
        questions: 'Which CSS property is used to change the font of an element?',
        options: ['font-style', 'font-weight', 'font-family', 'font-type'],
        answer: 'font-family'
    },
    {
        questions: 'How do you make the text bold in CSS?',
        options: ['font-weight: bold;', 'style: bold;', 'text-decoration: bold;', 'font: bold;'],
        answer: 'font-weight: bold;'
    },
    {
        questions: 'Which CSS property controls the spacing between lines of text?',
        options: ['line-spacing', 'line-height', 'letter-spacing', 'text-spacing'],
        answer: 'line-height'
    },
    {
        questions: 'Which selector is used to select an element with a specific ID in CSS?',
        options: ['.', '#', '*', '@'],
        answer: '#'
    },
    {
        questions: 'Which CSS property is used to create space inside an element, around its content?',
        options: ['margin', 'border', 'padding', 'spacing'],
        answer: 'padding'
    },
    {
        questions: 'Which CSS property is used to create space outside an element, around its border?',
        options: ['padding', 'margin', 'gap', 'outline'],
        answer: 'margin'
    },
    {
        questions: 'What is the default value of the position property in CSS?',
        options: ['relative', 'fixed', 'absolute', 'static'],
        answer: 'static'
    },
    {
        questions: 'Which CSS property hides an element without removing it from the layout flow?',
        options: ['display: none;', 'visibility: hidden;', 'opacity: 0;', 'position: absolute;'],
        answer: 'visibility: hidden;'
    },
    {
        questions: 'How do you center a block element horizontally in CSS?',
        options: ['margin: auto;', 'text-align: center;', 'float: center;', 'align: center;'],
        answer: 'margin: auto;'
    },
    {
        questions: 'Which CSS property is used to make a grid container?',
        options: ['display: grid;', 'grid: enable;', 'layout: grid;', 'flex: grid;'],
        answer: 'display: grid;'
    },
    {
        questions: 'Which pseudo-class in CSS matches an element when a user hovers over it?',
        options: [':focus', ':active', ':hover', ':visited'],
        answer: ':hover'
    },

    {
        questions: 'Inside which HTML element do we put the JavaScript code?',
        options: ['scripting', 'javascript', 'script', 'js'],
        answer: 'script'
    },
    {
        questions: 'How do you write "Hello World" in an alert box in JavaScript?',
        options: ['msgBox("Hello World");', 'alert("Hello World");', 'msg("Hello World");', 'alertBox("Hello World");'],
        answer: 'alert("Hello World");'
    },
    {
        questions: 'How do you create a function in JavaScript?',
        options: ['function = myFunction()', 'function myFunction()', 'function:myFunction()', 'create myFunction()'],
        answer: 'function myFunction()'
    },
    {
        questions: 'How do you call a function named "myFunction"?',
        options: ['call myFunction()', 'call function myFunction()', 'myFunction()', 'execute myFunction()'],
        answer: 'myFunction()'
    },
    {
        questions: 'Which operator is used to assign a value to a variable in JavaScript?',
        options: ['*', '=', '-', 'x'],
        answer: '='
    },
    {
        questions: 'What keyword is used to declare a block-scoped variable in modern JS?',
        options: ['var', 'let', 'global', 'assign'],
        answer: 'let'
    },
    {
        questions: 'Which method removes the last element from an array in JavaScript?',
        options: ['shift()', 'pop()', 'push()', 'slice()'],
        answer: 'pop()'
    },
    {
        questions: 'Which method adds a new element to the end of an array in JavaScript?',
        options: ['push()', 'pop()', 'unshift()', 'append()'],
        answer: 'push()'
    },
    {
        questions: 'What is the correct way to write a JavaScript array?',
        options: ['let colors = (1:"red", 2:"green")', 'let colors = ["red", "green"]', 'let colors = "red", "green"', 'let colors = {red, green}'],
        answer: 'let colors = ["red", "green"]'
    },
    {
        questions: 'How do you round the number 7.25 to the nearest integer in JavaScript?',
        options: ['Math.rnd(7.25)', 'Math.round(7.25)', 'round(7.25)', 'Math.floor(7.25)'],
        answer: 'Math.round(7.25)'
    },
    {
        questions: 'How do you find the highest number of x and y in JavaScript?',
        options: ['Math.max(x, y)', 'Math.ceil(x, y)', 'top(x, y)', 'Math.highest(x, y)'],
        answer: 'Math.max(x, y)'
    },
    {
        questions: 'Which event occurs when the user clicks on an HTML element?',
        options: ['onmouseover', 'onchange', 'onclick', 'onmouseclick'],
        answer: 'onclick'
    },
    {
        questions: 'How do you write an IF statement in JavaScript?',
        options: ['if i == 5 then', 'if (i == 5)', 'if i = 5', 'if i = 5 then'],
        answer: 'if (i == 5)'
    },
    {
        questions: 'What does "NaN" stand for in JavaScript?',
        options: ['Not a Number', 'New and Null', 'Null and Negative', 'Non-allocated Number'],
        answer: 'Not a Number'
    },
    {
        questions: 'Which built-in method converts a string to uppercase letters?',
        options: ['toUpper()', 'toUpperCase()', 'changeCase(upper)', 'upper()'],
        answer: 'toUpperCase()'
    },

    {
        questions: 'What does DOM stand for in web development?',
        options: ['Document Object Model', 'Data Object Mode', 'Digital Output Method', 'Desktop Object Management'],
        answer: 'Document Object Model'
    },
    {
        questions: 'Which DOM method selects an element by its ID?',
        options: ['document.getElementByName()', 'document.querySelectorAll()', 'document.getElementById()', 'document.selectId()'],
        answer: 'document.getElementById()'
    },
    {
        questions: 'Which HTTP method is primarily used to request data from a server?',
        options: ['POST', 'PUT', 'DELETE', 'GET'],
        answer: 'GET'
    },
    {
        questions: 'What does API stand for?',
        options: ['Application Programming Interface', 'Automated Process Integration', 'Advanced Program Instruction', 'Access Point Interface'],
        answer: 'Application Programming Interface'
    },
    {
        questions: 'Which format is commonly used for exchanging data between a web server and a browser?',
        options: ['XML', 'JSON', 'CSV', 'TXT'],
        answer: 'JSON'
    }
];

let questionNumber = document.querySelector('#questionNumber');
let question = document.querySelector('#question');
let option = document.querySelector('#option');
let next = document.querySelector('#next');
let previous = document.querySelector('#previous');

let currentQuestion = 0;
let userAnswer = new Array(quiz.length).fill(null);

displayQuestion();

function displayQuestion() {
    let current = quiz[currentQuestion]; 
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${quiz.length}`;
    question.textContent = current.questions;

    option.innerHTML = '';

    for (let opt of current.options) {
        let isChecked = userAnswer[currentQuestion] === opt ? 'checked' : '';
        option.innerHTML += `
            <label>
                <input type="radio" name="answer" value="${opt}" ${isChecked}> 
                ${opt}
            </label><br>   `;
    }
}

function saveCurrentAnswer() {
    let selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        userAnswer[currentQuestion] = selectedOption.value;
    }
}

function showResults() {
    let score = 0;
    userAnswer.forEach((answer, index) => {
        if (answer === quiz[index].answer) {
            score++;
        }
    });

    let percentage = Math.round((score / quiz.length) * 100);
    
    // Clear out navigation buttons and question text
    questionNumber.textContent = "Results";
    question.textContent = "";
    next.style.display = "none";
    previous.style.display = "none";

    option.innerHTML = `
        <div style="text-align: center;">
            <h2>Quiz Complete!</h2>
            <p>You scored <strong>${score}</strong> out of <strong>${quiz.length}</strong> (${percentage}%).</p>
            <button onclick="location.reload()">Restart Quiz</button>
        </div>
    `;
    finishQuiz(score);
}

next.addEventListener('click', function() {
    saveCurrentAnswer();
    
    if (currentQuestion < quiz.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResults();
    }
});

previous.addEventListener('click', function() {
    saveCurrentAnswer();

    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
    
});
