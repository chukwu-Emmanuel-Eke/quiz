const activeUser = JSON.parse(sessionStorage.getItem('activeQuizSession'));
if (!activeUser) {
    alert('Please enter your details first.');
    window.location.href = 'quiz-landing-page.html';
}

function finishQuiz(finalScore) {
    const payload = {
        fullname: activeUser.fullname,
        regno: activeUser.regno,
        dob: activeUser.dob,
        dept: activeUser.dept,
        level: activeUser.level,
        score: finalScore
    };

    fetch('https://quiz-backend-ryjf.onrender.com/api/quiz/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            sessionStorage.removeItem('activeQuizSession');
            
            // Display confirmation inside the option container
            const optionDiv = document.getElementById('option');
            if (optionDiv) {
                optionDiv.innerHTML += `<p style="text-align: center; color: #00ff66; margin-top: 1rem;">
                    Thank you ${activeUser.fullname} for participating in this quiz, 
                </p>`;
            }
        } else {
            alert('Error saving score: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error connecting to backend:', error);
        alert('Server connection failed. Ensure Node server.js is running.');
    });
}
