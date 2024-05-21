const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;
let todos;

app.use(express.json())
app.use((req, res, next) => {
    let data = fs.readFileSync('./todo.json','utf-8');
    todos = JSON.parse(data);
    next();
})

app.get("/", (req, res) => {
    res.send('<h1>Welcome to Todo</h1>');
})
app.get("/todos", (req,res) => {
    res.json(todos);
})
app.get("/todos/:id", (req, res) => {
    let id = req.params.id;
    let result = todos.find(todo => todo.id == id);
    if(!result) {
        res.status(404).send("ToDo not found!")
    }
    res.json(result);    
})
app.post('/todos', (req, res) => {
    let result = req.body.part;
    console.log(result)
    todos.push(result);
    data = JSON.stringify(todos);
    fs.writeFileSync('./todo.json',data)
    res.json(result)
})
app.put("/todos/:id", (req, res) => {
    let id = req.params.id;
    let data = req.body.part;
    let result = todos.find(todo => todo.id == id);
    if(!result) {
        res.status(404).send("ToDo not found!");
    }
    result.title = data.title || result.title;
    result.description = data.description || result.description;
    fs.writeFileSync('./todo.json', JSON.stringify(todos));
    res.status(200).send("file updated with give ID");
})
app.delete("/todos/:id", (req,res) => {
    let id = req.params.id;
    todos = todos.filter(todo => todo.id != id);
    fs.writeFileSync('./todo.json',JSON.stringify(todos));
    res.send("ToDo deleted!")
})
app.listen(port, () => {
    console.log(`Server running at ${port}`);
})