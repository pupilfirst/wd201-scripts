## Text

API stands for Application Programming Interface. It acts as an intermediatery between two applications to talk to each other. API can be seen as a contract with which two programs can communicate and share data.

While programming with Node.js, we are making use of many built in modules or external packages. In fact, we are stitching together different APIs to get our work done. If we look at our `Todo` seqeulize model, we are exposing few methods like `addTask`, `markAsComplete` to make changes to database. The Express.js application uses them to create a new item or mark an existing one as complete. This is another example of API.

We then go further and expose web endpoints like `http://localhost:3000/todos` to which any HTTP client (eg. browser , Postman etc.) can send a POST request and create a new todo. That again is an example of API.

In software development, APIs helps in building on top of other services. It can be said to be a contract which each of the building block is guaranteed to deliver. You can learn more abou API by wtaching the following video.

https://www.youtube.com/watch?v=ByGJQzlzxQg
