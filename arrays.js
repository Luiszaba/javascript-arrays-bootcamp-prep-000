var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element) {
  return [element,...array]
}

function desturctivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function desturctivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}