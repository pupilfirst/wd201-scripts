function todoList() {
  let all = [];
  function add(todoItem) {
    all.push(todoItem);
  }
  function markAsComplete(index) {
    all[index].completed = true;
  }

  function overDue() {
    return all.filter((item) => item.dueDate < new Date().toLocaleDateString("en-CA"));
  }

  function dueToday() {
    return all.filter((item) => item.dueDate == new Date().toLocaleDateString("en-CA"));
  }

  function dueLater() {
    return all.filter((item) => item.dueDate > new Date().toLocaleDateString("en-CA"));
  }
  return { all, add, markAsComplete, overDue, dueToday, dueLater };
}

module.exports = todoList;
