document.getElementById('start-form').addEventListener('submit', function(e){
    e.preventDefault();

    let fullname = document.getElementById('fullname').value.trim();
    let regno = document.getElementById('regno').value.trim();
    let dob = document.getElementById('dob').value.trim();
    let dept = document.getElementById('dept').value.trim();
    let level = document.getElementById('level').value.trim();

    if(!fullname || !regno || !dob || !dept || !level){
        alert('please fill in all details before starting');
        return;
    }
  const tempuserData = {fullname, regno, dob, dept, level};
  sessionStorage.setItem('activeQuizSession', JSON.stringify(tempuserData));

  window.location.href = 'quiz.html';
})
