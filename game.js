//#8BEA60

var myCount = new TheEnd();

  (function (){
    var name = prompt('Hello! What is your name?');

  // var newEl = document.createElement('li');
  var getTracked = document.getElementById('tracked');
  //var newText = document.createTextNode('OK!');
  var msg = '<li>' + name + '</li>';
  getTracked.innerHTML = msg;
  getTracked.appendChild(msg);

  })();


  (function (){
    var daysNumber = 7;
    var daysResponse = prompt('Tell me how many days of the week there are.');
    answer = Number.parseInt(daysResponse);
  while (true) {
     if (daysNumber > answer) {
        answer = Number.parseInt(prompt('That guess is too low. COME ON, SON!'));
       myCount.addCount();
      } else if (daysNumber < answer) {
        answer = Number.parseInt(prompt('Your guess is too high. The answer is smaller!'));
        myCount.addCount();
      }
       else if (daysNumber === answer) {
        alert('You have learned a lot, good work!');
        break;
      }
    }

  })();

  (function (){
    var animals = prompt('What is your favorite kind of animal?');
    myCount.addCount();
      var getTracked = document.getElementById('tracked');
      var msg = '<li>' + animals + '</li>';
        getTracked.innerHTML = msg;
        getTracked.appendChild(msg);
  })();

  (function () {
    var hobby = prompt('Do you have an interesting hobby?');
    myCount.addCount();
    alert('Wow, I am impressed by your hobby of ' + hobby);
    console.log(hobby);
  })();


  alert('You really have life figured out! You have won the game. But you have also lost The Game.');

function TheEnd() {
    this.count = 0;
    this.addCount = function() {
      this.count++;
    }
  }
    console.dir(myCount);

  alert('Wow! Your final score is ' + myCount.count + '!');


