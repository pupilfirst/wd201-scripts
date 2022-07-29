## Milestone automation

Test Process:
​

1. Create a to-do item with exposed `add` function.
2. Validate if an entry has been created in the list.
3. Check whether marking a to-do as complete is working.
4. `overdue` function should return list of overdue items.
5. `dueLater` function should return list of items which would has a due date in the future.
6. `dueToday` function should return list of items which would be due on the present day.
7. Run the tests and make sure the tests passes.

### Review checklist

1. Check whether each test only checks for a single feature.

- If each tests only check for a single feature:
  - Each tests checks a single feature
- If it tests for multiple features:
  - Each test should only check for a single feature. Currently it checks for multiple features.

2. Check whether there are tests for `add

- If there is test for `add`:

  - If there is test to check the length of items before adding an item:
    - You have verified the list length before adding an item
  - If there is no test to check the length of list before adding an item:
    - You should check the length of the list before adding an item.
  - if `add` function is invoked:
    - The method to add a todo item is correctly invoked.
  - If `add` function is not invoked:

    - The method to add an item is not invoked.

  - If there is test to check the length of items after adding an item:
    - You have verified the list length after adding an item
  - If there is no test to check the length of list after adding an item:
    - You should check the length of the list after adding an item.

- If there is no test for `add`:
  - You need to test creating a new todo.

3. Check whether there are tests for `markAsComplete`

- If there is test for `markAsComplete`:

  - If `completed` property of a todo item is asserted to be `false`:
    - You have asserted whether the todo item is incomplete
  - If `completed` property of a todo item is not asserted:

    - You have to make sure the todo item is incomplete before marking it as complete.

  - If `markAsComplete` function is invoked:
    - The method to mark a todo item complete is correctly invoked.
  - If `markAsComplete` function is not invoked:

    - The method to mark the item as complete is not invoked.

  - If `completed` property of a todo item is asserted after invoking `markAsComplete`:
    - You have asserted whether the todo item is complete after invoking the `markAsComplete`
  - If `completed` property of a todo item is not asserted after invoking `markAsComplete`:
    - You have to make sure the todo item is complete after marking it as complete.

- If there is no test for `markAsComplete`:
  - You have to check the `markAsComplete` feature.

4. Check whether there are tests for `overdue` method.

- If there is test for `overdue` method:
  - If the length of result returned from the `overdue` method is asserted:
    - You have asserted the length of item returned from overdue method.
  - If the length of result of `overdue` method is not asserted:
    - You need to assert the length of result returned from `overdue` method.
- If there is no test for `overdue` method:
  - You need to test the `overdue` method and verify it only returns overdue items.

5. Check whether there are tests for `dueToday` method.

- If there is test for `dueToday` method:
  - If the length of result returned from the `dueToday` method is asserted:
    - You have asserted the length of item returned from dueToday method.
  - If the length of result of `dueToday` method is not asserted:
    - You need to assert the length of result returned from `dueToday` method.
- If there is no test for `dueToday` method:
  - You need to test the `dueToday` method and verify it only returns items that are due today.

6. Check whether there are tests for `dueLater` method.

- If there is test for `dueLater` method:
  - If the length of result returned from the `dueLater` method is asserted:
    - You have asserted the length of item returned from dueLater method.
  - If the length of result of `dueLater` method is not asserted:
    - You need to assert the length of result returned from `dueLater` method.
- If there is no test for `dueLater` method:
  - You need to test the `dueLater` method and verify it only returns items that are due in the future.
