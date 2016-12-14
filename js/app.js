// Get all the keys from document
const keys = document.querySelectorAll('button');
// console.log(keys);

// Add onclick event to all the keys and perform operations
keys.forEach(function(item) {
  item.addEventListener('click', function(e) {
    const keyPressed = e.target.value;
  // console.log(keyPressed);
	controller.input(keyPressed)
  });
});

const controller = {
  keyValue: [],
  answer: 0,
  displayOutput: this.answer,
  input: function (key) {
    if (key === '0' && this.keyValue[0] === '0') {
      this.keyValue[0] = '0';
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
 // view.display(controller.keyValue.join(''));
  },
  calculate: function(str) {
    this.answer = eval(str);
 // console.log(controller.answer);
  },
};

const view = {

  display: function (str) {
    const screen = document.getElementById('answer');
    screen.innerHTML = str;
    console.log(str);
  },

	clear: function () {
  const screen = document.getElementById('answer');
  screen.innerHTML = '0';
  controller.answer = 0;
  controller.keyValue = [];
},
};

//# sourceMappingURL=app.js.map
