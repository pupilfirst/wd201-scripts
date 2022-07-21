# Text

Previously, you've learned, how to define routes in an **Express.JS** application. There we've also defined routes to create a TO-DO, update a TODO and to get details of a TO-DO. But the real implementation inside the callback function is not complete yet. And in this lesson we are about to do that. So, let's get started.

# Video Script
Hey there, in this video we will write some logic inside our route definitions, to *create* and *update* a TO-DO. We will also use Sequelize to persist our data in PostgreSQL database. And to test our routes, we will respond back in JSON format, as our user interface is not ready yet.

### Step 1: Define the TO-DO model using Sequelize
Before we can write login inside our TO-DO endpoints, we have to define the **TODO** *model* using Sequelize.

As you already know, Sequelize is an ORM (Object Relational Mapping), and it creates an object-oriented layer between Node.Js and the PostgreSQL database. It helps us to work with data without even worrying about the raw SQL queries. 

> Action: Open VS Code

So let's define the **Todo** model:
```js
const Todo = sequelize.define(
  'todos', 
  { description: Sequelize.TEXT, isComplete: { type: Sequelize.BOOLEAN, defaultValue: false }, dueDate: Sequelize.DATEONLY } 
);
```
Here, we are using `define` method from the `Sequelize` library, to configure our **Todo** model. First, we are setting the table name to be `todos`, then we are defining the column names with it's type. You can refer to [Sequelize documentation](https://sequelize.org/v5/manual/data-types.html) for all available types.

### Step 2: Create database tables
Next, we have to create the `todos` table in our database. For that, we will use the `sync` method from sequelize.
```js
// Sync database to create/update tables
sequelize.sync({ force: true })
.then(() => {
  console.log(`Database & tables synced successfully!`);
});
```
Run the **index.js** file from terminal using the `node index.js` command and you would see that the `todos` table is created in database.

### Step 3: Complete the `create Todo` endpoint implementation
Now, in the **create TODO** endpoint, first we have to read the request body to look for the To-Do *description* and *due date*. 

Here we need the `body-parser` module to accept and parse JSON request body. Nowdays, the `body-parser` package comes by default with Express and we just have to `require` it:
```js
const bodyParser = require('body-parser');
app.use(bodyParser.json());
```

Next, inside the `create` TO-DO route, we will use the `.create()` method from **Sequelize**, to insert a *todo* into the database, based on the request body:
```js
app.post('/todos', function (request, response) {
  console.log('Creating new TODO: ', request.body)
  var description = request.body.description;
  var dueDate = request.body.dueDate;
  Todo.create({ description: description, dueDate: dueDate }).then(function(todo) {
    response.json(todo);
  });
})
```

We can test it out with a simple `curl` request from our terminal:
````
curl -d '{"description":"Go the gym","dueDate":"2022-07-02"}' -H "Content-Type: application/json" -X POST http://localhost:3000/todos
````

This `curl` call will create a new **todo** entry in our database, and will return the new database object to us.


### Step 4: Complete the `update Todo` endpoint implementation
To update the TO-DO that we've just created, first we have to find it out with it's ID. And for that we will use the `findByPk()` method. This method searches for an entity with the given primary key. 

```js
app.put('/todos/:id', function(request, response) {
  Todo.findByPk(request.params.id).then(function(todo) {
    console.log(todo) // Finds out the speficic TODO from database.
  });
});
```
Then, we have to perform the update operation on that todo instance using the `.update()` method.
```js
app.put('/todos/:id', function(request, response) {
  Todo.findByPk(request.params.id).then(function(todo) {
    todo.update({
      description: request.body.description,
      dueDate: request.body.dueDate
    }).then((todo) => {
      response.json(todo);
    });
  });
});
```

Let's test it out using `curl`:
````
curl -d '{"description":"go the office"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/todos/1
````
Great! this request updates the todo with *ID 1* with new description and returns the updated object.

That's all for this video, see you in the next one.