
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let matrixArray = [];
  let back = false;
  if(matrix) {
    for(let el of matrix) {
      matrixArray = matrixArray.concat(back ? el.slice().reverse() : el); 
      back = !back;
    }
  }
  return matrixArray;

}
