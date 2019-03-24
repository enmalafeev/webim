import View from '../view.js';

const resultsNode = document.getElementById('#results');
let friend = {};

export default {
  setData(newFriend) {
    friend = newFriend;
  },

  render() {
    resultsNode.innerHTML = View.render('friend', friend);
  }
}