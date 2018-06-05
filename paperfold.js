function paperFold (folds) {
        // i.e. folds will be 2; so the output will be 1101100
    // this function takes in 1 parameter which will be a number from the range of 0 to 100
    // from the input of the parameter , it will output the folding sequence array
    const paper = [1];
    // paper array will be what will be outputted at the end of the function
    // it starts at 1 for the edge case of the input being 0
    for (let i = 1; i <= folds; i++) {
    // this outer for loop will create the new nums array to append values to the paper array
    // we already had an edge case for when folds =0, so i starts at 1
        let newNums = [];
        while (newNums.length < Math.pow(2, i)) {
        // in this while looop, we are adding the folding sequence into newNums array UNTIL the lenghth of newnums is NOT less than 2^1                 
        newNums = newNums.concat([1, 0]);
        // when i =1 , new nums.length is less than 2^1 (2),then stops newnums is now [1,0]
      }
      for (let j = newNums.length - 1; j >= 0; j--) {
        // this loop will add values from the newnums array to the paper array
        // j will start at the last position of newNums array and loop until position 0
        paper.splice(j, 0, newNums[newNums.length - 1]);
        // add value of newNums[newNums.length - 1] to paper at the j position and removing 0 items
        newNums.pop();
        // remove the last position of newnums array
      }
    }
    return paper.join(' ');
    // remove the array brackets and join each value with a space
  }
  
  console.log(paperFold(2));