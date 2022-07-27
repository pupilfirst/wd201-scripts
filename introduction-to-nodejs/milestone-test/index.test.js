const hello = require('../index');

describe("String matcher", () => {
  it("Compare the console.log message", () => {
    console.log = jest.fn();

    hello();

    expect(console.log.mock.calls[0][0]).toBe('Hello Node.Js! Trying it for first time');
  });
})