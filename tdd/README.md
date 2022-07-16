# Text

## Test Driven Developemnt

Test-driven development reverses traditional development and testing. Usually, we write code first, then write tests to verify if the feature is working properly or not. But with TDD, you will write a test first, then add code until the test passes.

### TDD work flow

TDD is a cyclic process from Red - Green - Blue.

> TODO: Insert image of TDD workflow

- Red stage

  When a new feature is requested, the developer writes a test first. Upon running the test, the suite will fail. The red phase indicates that code does not work

- Green stage

  In this stage, developer writes minimum code required to pass the test added. The test show that the functionality of the code is already satisfied. The green phase indicates that everything is working, but not necessary in the most optimal way.

- Blue stage

  In this stage, the developer can modify the existing code without changing the behaviour. This is also known as `Refactoring`. But with the help of tests, one can change the code with confidence.

Then the cycle continues.

TDD banks on _short development cycle_ where we get feedback early on and can prevent mistakes that might prove costly at a later stage.
