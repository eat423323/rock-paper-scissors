$(document).ready(()=>{
  let $rock = $('#rock');
  let $paper = $('#paper');
  let $scissors = $('#scissors');
  let choices = ['rock', 'paper', 'scissors'];
  let computerResult;
  let userResult;

  function computerGenerate(){

      computerResult = choices[Math.floor(Math.random() * choices.length)];
      switch (computerResult) {
        case 'rock':
          $('#computerResult').attr({'src':'rock.png', 'width': '150px'});
          break;
        case 'paper':
          $('#computerResult').attr({'src':'paper.png', 'width': '150px'});
          break;
        case 'scissors':
          $('#computerResult').attr({'src':'scissors.png', 'width': '150px'});
          break;
      };

  };

  function determineResult(){
    setTimeout(()=>{
      if ( computerResult == userResult){
        $('.gameResult').html('Tied...');
      } else if (computerResult == 'scissors') {
        if (userResult == 'rock'){
          $('.gameResult').html('You win!');
        } else {
          $('.gameResult').html('You lost...');
        };
      } else if (computerResult == 'rock') {
        if (userResult == 'paper'){
          $('.gameResult').html('You win!');
        } else {
          $('.gameResult').html('You lost...');
        };
      } else if (computerResult == 'paper') {
        if (userResult == 'scissors'){
          $('.gameResult').html('You win!');
        } else {
          $('.gameResult').html('You lost...');
        };
      };
    }, 800);
  };

  function reset(){
    //this below clears the previous userResult
    $('.result').html('');
    //this below clears the previous computerResult
    $('#computerResult').attr('src', '');
    //this below clears the previous result
    $('.gameResult').html('');
  };

  function userGenerate(){
    $rock.on('click', ()=>{
      reset();
      $('.result').html("<img src='rock.png' width='150px'>");
      computerGenerate();
      userResult = 'rock';
      determineResult()
    });
    $paper.on('click', ()=>{
      reset();
      $('.result').html("<img src='paper.png' width='150px'>");
      computerGenerate();
      userResult = 'paper';
      determineResult()
    });
    $scissors.on('click', ()=>{
      reset();
      $('.result').html("<img src='scissors.png' width='150px'>");
      computerGenerate();
      userResult = 'scissors';
      determineResult()
    });
  };

  userGenerate();
})
