# Text
 
Previously, you've learned, how to define routes in an **Express.JS** application. There we've also defined routes to create a TO-DO, update a TODO and to get details of a TO-DO. But the real implementation inside the callback function is not complete yet. And in this lesson we are about to do that. So, let's get started.
 
# Video Script
Hey there, in this video we will write some logic inside our route definitions, to *create* and *update* a TO-DO. We will also use Sequelize to persist our data in PostgreSQL database. And to test our routes, we will respond back in JSON format, as our user interface is not ready yet.
 
### Step 1: Define the TO-DO model using Sequelize
Before we can write logic inside our TO-DO endpoints, we have to define the **TODO** *model* using Sequelize.
 
To generate the **Todo** model, we will use the `db:generate` command of `sequelize-cli`. In this command, we have to pass the attributes of **Todo** along with their types. A **Todo** will have a `title` with type `string`, then `dueDate` of type `date` and a `complete` of type `boolean`.
 
```sh
npx sequelize-cli model:generate --name Todo --attributes title:string,dueDate:dateonly,completed:boolean
```
 
The above command will create a `todo.js` file in `model` folder and migration file in the `migrations` folder.
 
> Action: Show both files in VS Code
 
### Step 2: Create database table
The migration file has all the codes that we need to create the `Todos` table in the database. To simply run the migration file, we will execute the following command in the terminal:
 
```sh
npx sequelize-cli db:migrate
```
This will create the `Todos` table in the database.
> Action: Show the Todos table using PGAdmin.
 
### Step 3: Complete the `create Todo` endpoint implementation
In order to perform any operation for Todo, first we have to import the model in our primary `index.js` file.
```js
const { Todo } = require("./models");
```
 
Next, in the **create TODO** endpoint, we have to read the request body to look for the To-Do *title* and *dueDate*.
 
Here we need the `body-parser` module to accept and parse JSON request body. Nowadays, the `body-parser` package comes by default with Express and we just have to `require` it:
```js
const bodyParser = require('body-parser');
app.use(bodyParser.json());
```
 
Next, inside the `create` TO-DO route, we will use the `.create()` method from **Sequelize**, to insert a *todo* into the database, based on the request body:
```js
app.post('/todos', async function (request, response) {
 console.log('Creating new Todo: ', request.body)
 try {
  const todo = await Todo.create({ title: request.body.title, dueDate: request.body.dueDate, completed: false })
  return response.json(todo);
 } catch (error) {
   console.log(error)
   return response.status(422).json(error);
 }
})
```
 
We can test it out with a simple `curl` request from our terminal:
````
curl -d '{"title":"Go the gym","dueDate":"2022-07-02"}' -H "Content-Type: application/json" -X POST http://localhost:3000/todos
````
 
This `curl` call will create a new **todo** entry in our database, and will return the new database object to us.
 
We can further refractor the code by defining a `addTodo`  class method in the `Todo` model, and moving the `Todo.create` method there itself.
```js
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static addTodo({ title, dueDate }) {
      return this.create({ title: title, dueDate: dueDate, completed: false });
    }
  }
```
Here, inside the `addTodo` method, `this` refers to the class Todo itself.

Now we can call this class method `addTodo` from our route definition:
```js
app.post('/todos', async function (request, response) {
  console.log('Creating new Todo: ', request.body)
  try {
    const todo = await Todo.addTodo(request.body);
    return response.json(todo);   
  } catch (error) {
    console.log(error)
    return response.status(422).json(error);    
  }
})
```

### Step 4: Complete the `markAsCompleted Todo` endpoint implementation
To update the TO-DO that we've just created, we will use the `.update()` method of Sequelize. 

But first, we have to find out the Todo that we want to update. In that case, we will use the `findByPk` method, where we have to pass the Todo ID that we are getting as part of the query parameter.
```js
app.put('/todos/:id/markAsCompleted', async function (request, response) {
  console.log('We have to update a Todo with ID: ', request.params.id)
  const todo = await Todo.findByPk(request.params.id)
})
```

Next, we will define an instance method in Todo model named `markAsCompleted`, where we will actually update the Todo using `.update()`
```js
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static addTodo({ title, dueDate }) {
      return this.create({ title, dueDate, completed: false });
    }

    markAsCompleted() {
      return this.update({ completed: true })
    }
  }
```
Here, inside the `markAsCompleted` method, `this` refers to an instance of class Todo. Now we can call this method from our route definition.
```js
app.put('/todos/:id/markAsCompleted', async function (request, response) {
  console.log('We have to update a Todo with ID: ', request.params.id)
  const todo = await Todo.findByPk(request.params.id)
  try {
    const updatedTodo = await todo.markAsCompleted()
    return response.json(updatedTodo);
  } catch (error) {
    console.log(error)
    return response.status(422).json(error);   
  }
})
```
 
Let's test it out using `curl`:
````
curl -d '' -H "Content-Type: application/json" -X PUT http://localhost:3000/todos/1/markAsCompleted
````

Great! This request updates the to-do with *ID 1* and sets `completed` as `true`.
 
That's all for this video, see you in the next one.

