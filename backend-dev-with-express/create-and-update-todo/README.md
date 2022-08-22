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
 const todo = await Todo.create({ title: request.body.title, dueDate: request.body.dueDate, completed: false }).catch((error) => {
   console.log(error)
   return response.status(422).json(error);
 })
 return response.json(todo);
})
```
 
We can test it out with a simple `curl` request from our terminal:
````
curl -d '{"title":"Go the gym","dueDate":"2022-07-02"}' -H "Content-Type: application/json" -X POST http://localhost:3000/todos
````
 
This `curl` call will create a new **todo** entry in our database, and will return the new database object to us.
 
 
### Step 4: Complete the `markAsCompleted Todo` endpoint implementation
To update the TO-DO that we've just created, we will use the `.update()` method. This method takes two arguments, first we have to provide an object of Todo attributes that we want to update, and second we have to pass another object of query parameters. In this case, we will find a Todo by its ID, that is present in our request parameter.
```js
app.put('/todos/:id/markAsCompleted', async function (request, response) {
 console.log('We have to mark a Todo as completed with ID: ', request.params.id)
 const todo = await Todo.update({ completed: true }, {
   where: {
     id: request.params.id
   }
 }).catch((error) => {
   return response.status(422).json(error);
 })
 return response.json(todo);
})
```
 
Let's test it out using `curl`:
````
curl -d '' -H "Content-Type: application/json" -X PUT http://localhost:3000/todos/1/markAsCompleted
````
Great! this request updates the todo with *ID 1* and sets `completed` as `true`.
 
That's all for this video, see you in the next one.

