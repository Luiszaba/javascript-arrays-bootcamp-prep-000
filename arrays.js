var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var newElement = "foo"

function addElementToBeginningOfchocolateBars (chocolateBars, newElement) {
  
}

function addElementToBeginningOfchocolateBars(chocolateBars, newElement) {
  chocolateBars.unshift(newElement)
  return chocolateBars
}

function addElementToBeginningOfchocolateBars(chocolateBars, newElement){
  return [chocolateBars,...newElement(0)]
}