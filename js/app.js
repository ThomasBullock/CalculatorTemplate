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
	displayOutput: answer,
  input: function (keyValue) {
    if (keyValue === '0' && controller.keyValue[0] === '0') {
    } else if (keyValue === '=') {
    	view.clear();
      controller.calculate(controller.keyValue.join(''));
			controller.displayOutput = controller.answer;
			view.display(controller.displayOutput);

		} else if(keyValue === 'c') {
			view.clear();
		}
		else {
      controller.keyValue.push(keyValue);
			controller.displayOutput = controller.keyValue.join('');
			view.display(controller.displayOutput);
    }
		// view.display(controller.keyValue.join(''));
  },
 calculate: function(str) {
	  controller.answer = eval(str);
		// console.log(controller.answer);
 },
};

const view = {
  display: function (str) {
    let screen = document.getElementById('answer');
    screen.innerHTML = str;
    console.log(str);
  },
	clear: function () {
  let screen = document.getElementById('answer');
	screen.innerHTML = '';
	}
};

//# sourceMappingURL=app.js.map
