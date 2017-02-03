// Get all the keys from document
const keys = document.querySelectorAll('button');
// console.log(keys);

// Add onclick event to all the keys and perform operations
keys.forEach(function(item) {
  item.addEventListener('click', function(e) {
    const keyPressed = e.target.value;
  controller.input(keyPressed);
  });
});

const controller = {
  operators: /[-\*+\/]/g,  // not currently being used
  keyValue: [],
  answer: 0,
  displayOutput: this.answer,
  input: function (key) {
    console.log(key);
    if(key == "." && this.keyValue[this.keyValue.length-1] == ".") {  // prevent successive decimal points
      return;
    }
    if(this.answer === 'error') {  // clear answer and keyValue arr if Error is onscreen
      this.answer = 0;
      this.keyValue = [];
    }
    if (key === '0' && this.keyValue[0] === '0') {
      return;
    } else if (key === '=') {
      this.calculate(this.keyValue.join(''));
      this.displayOutput = this.answer;
      view.display(this.displayOutput);
      controller.keyValue = [];
    } else if (key === 'c') {
      view.clear();
    } else {
      this.keyValue.push(key);
      this.displayOutput = this.keyValue.join('');
      view.display(this.displayOutput);
    }
  },
 calculate: function(str) {
   try {
    this.answer = eval(str);
   } catch (e) {
    console.log(e);
      this.answer = 'error';
   }
 },
};

const view = {
  screen: document.getElementById('answer'), 
  display: function (str) {
    if(str.length > 1 && str.charAt(0) === '0') { //to prevent 0 being added before other numbers if 0 is pressed first
      this.screen.innerHTML = str.substring(1);      
    } else {
      this.screen.innerHTML = str;      
    }
  },

  clear: function () {
    this.screen.innerHTML = '0';
    controller.answer = 0;
    controller.keyValue = [];
  },
};

//# sourceMappingURL=app.js.map

//# sourceMappingURL=app.js.map
