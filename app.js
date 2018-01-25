do {
  var code = prompt('Enter credit card number');
  if (code !== '' && code.length === 10) {
    isValidCard(code);
  } else {
    alert('Please enter a valid card number');
  }
} while (typeof code !== 'number' && code.length !== 10);


function isValidCard(code) {
  var nums = [];
  var evens = [];
  for (var i = 0; i < code.length ; i++) {
    nums.push(parseInt(code[i]));
    if (i % 2 !== 0) {
      evens.push(nums.pop(nums[i])); 
    }
  }
  var mult = evens.map(function(num) {
    return num * 2;
  });
  console.log(mult);
}