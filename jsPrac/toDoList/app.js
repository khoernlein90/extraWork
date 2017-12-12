var todo = ["do some coding"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "new") {
        var newTodo = prompt("What would you like to add?")
        todo.push(newTodo);
    } else if (input === "list") {
        todo.forEach(function (data, i) {
            console.log(i + ": " + data);
        })
    } else if (input === "delete") {
        var index = prompt("Enter index of item to delete")
        todo.splice(index, 1);
    }
    input = prompt("What would you like to do?")
}
console.log("you quit")