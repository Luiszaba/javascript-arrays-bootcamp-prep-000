var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var newElement = "foo"

function addElementToBeginningOfArray (chocolateBars,newElement) {
  
}

function addElementToBeginningOfArray (chocolateBars,newElement){
  chocolateBars.unshift(newElement)
  return chocolateBars
}

function addElementToBeginningOfArray(chocolateBars, newElement){
  return [chocolateBars,...newElement(0)]
}