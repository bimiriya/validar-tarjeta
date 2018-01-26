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
  var multSum = mult.join('').split('');

  var sum = 0;
  for (var m = 0; m < multSum.length; m++) {
    sum += (parseInt(multSum[m]));
  };
  if (sum % 10 === 0) {
    return alert('Your credit card number is valid');
  } else {
    return alert('Your credit card number is not valid');

}

}