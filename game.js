//#8BEA60

var myCount = new TheEnd();

  (function (){
    var name = prompt('Hello! What is your name?');

  // var newEl = document.createElement('li');
  var getTracked = document.getElementById('tracked');
  //var newText = document.createTextNode('OK!');
  var msg = '<li>' + name + '</li>';
  getTracked.innerHTML = msg;

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
        // var newEl = document.createElement('li');
  var getTracked2 = document.getElementById('tracked2');
  //var newText = document.createTextNode('OK!');
  var msg = '<li>' + answer + '</li>';
  getTracked2.innerHTML = msg;
        break;
      }
    }

  })();

  (function (){
    var animals = prompt('What is your favorite kind of animal?');
    myCount.addCount();
      // var newEl = document.createElement('li');
    var getTracked3 = document.getElementById('tracked3');
  //var newText = document.createTextNode('OK!');
    var msg = '<li>' + animals + '</li>';
    getTracked3.innerHTML = msg;
  })();

  (function () {
    var hobby = prompt('Do you have an interesting hobby?');
    myCount.addCount();
    // var newEl = document.createElement('li');
    var getTracked4 = document.getElementById('tracked4');
  //var newText = document.createTextNode('OK!');
    var msg = '<li>' + hobby + '</li>';
    getTracked4.innerHTML = msg;
  })();


//alert('You really have life figured out! You have won the game. But you have also lost The Game.');

function TheEnd() {
    this.count = 0;
    this.addCount = function() {
      this.count++;
    }
  }
    console.dir(myCount);

  alert('Wow! Your final score is ' + myCount.count + '!');


