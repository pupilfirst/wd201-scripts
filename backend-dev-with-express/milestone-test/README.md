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

2. Validate the `PUT /todos/:id` endpoint whether it's updating a specific To-Do by it's ID or not. For example, to mark a To-Do with `ID: 3`  as `complete`, the payload will be:

```json
{
  "complete": true
}
```
And the sample output will be:
```json
{
  "id": 3,
  "title": "Pay taxes",
  "complete": true,
  "dueDate": "2022-08-01",
  "createdAt": "2022-08-01T09:50:43.840Z",
  "updatedAt": "2022-08-01T09:50:43.840Z"
}
```