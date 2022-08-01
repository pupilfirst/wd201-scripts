# Text

## Milestone Evaluation Specs

1. Validate the `GET /todos` endpoint whether it's returning list of all todos in JSON format or not.
The sample output will be something like this:
```json
[
  {
    "id": 3,
    "title": "Pay taxes",
    "complete": false,
    "dueDate": "2022-08-01",
    "createdAt": "2022-08-01T09:50:43.840Z",
    "updatedAt": "2022-08-01T09:50:43.840Z"
  },
  {
    "id": 4,
    "title": "Buy fruits",
    "complete": false,
    "dueDate": "2022-08-01",
    "createdAt": "2022-08-01T09:50:55.759Z",
    "updatedAt": "2022-08-01T09:50:55.759Z"
  }
]   
```

2. Validate the `DELETE /todos/:id` endpoint whether it's deleting a specific To-Do by it's ID or not. After successful deletion, the endpoint should return `true` or `false`. To cross check, you can call the `GET /todos/:id` API with the To-Do ID that we've just deleted. If deletion functionality implemented properly, this (`GET /todos/:id`) endpint should return `404`
3. Validate the Jest file written for testing the `DELETE /todos/:id` endpoint.