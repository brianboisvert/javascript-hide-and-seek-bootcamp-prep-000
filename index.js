function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
}
}
// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n.
//  (You might need to make use of parseInt()

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
