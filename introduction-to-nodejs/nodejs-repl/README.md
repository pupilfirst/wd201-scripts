# Text

In this lesson, we are going to learn about Node.js REPL. REPL stands for *Read Evaluate Print Loop*, and that is basically what it does: It reads an input, evaluates it, prints the result and starts the process again. The REPL could be very helpful to quickly test simple JavaScript code.

# Script
## Let's try it out
Let's get started with Node.js REPL by invoking the `node` command in the terminal, with no arguments.
````
> node
> 
````
Here, Node expects you to type an expression and it will print the result of that expression. For example:
````
> node
> 1 + 1
2
> x = 1 + 2
3
> x * 2
6
````

Next, try with a `console.log`
````
> console.log('Hello World')
Hello World
undefined
````
Here, **Hello World** is the output we told the console to print, then we got `undefined` which is the return value of running `console.log()`. Here **Node** reads this line, evaluates it, prints the result and then went back to waiting for more lines of code.

### Multiline code
In some cases, you might need to evaluate a code block consisting multiple lines, for example a `function`:
````
function printLog() {
....
````
The REPL is quite smart to determine that you have not completed the code block, it will go into a multi-line mode for you to type in more code.
````
function printLog() {
  console.log('Multiline function check')
}
undefined
````
Node will get out of the multi-line mode, and print `undefined` since there is no value returned. 

### Autocompletion
Another cool trick often forgotten is the autocompletion key. The node REPL autocompletes commands when you hit the `<tab>` key. 
````
> str = "Hello, this is a string"
Hello, this is a string
> str. (press <Tab> key to get the suggestions)
````

### The underscore character _
In the Node.js REPL you can reference the last value using the underscore character **_**:
````
> "John Doe"
John Doe
> `My name is: ${_}`
My name is: John Doe
````

## Few important Node.js REPL commands
There are some special commands that you can send to the REPL. These commands start with a dot:

### .exit command
The .exit command finishes the REPL session. It’s the same thing as typing ctrl-d.

### .save and .load commands
`.save` and `.load` are two useful commands when working with the REPL. `.save` allows you to save your current REPL session. The output file is a list of every expression you’ve run in that session:
````
> arr = [1,2,3,4]
[1,2,3,4]
> str = "Hello world"
"Hello world"
> .save mysession
Session saved to:mysession
> .exit
````

Once you are out of REPL session, you can print the session values:
````
> cat mysession
arr = [1,2,3,4]
str = "Hello world"
````

Now you can load the session back into the REPL with the `.load` command:
````
> node
> .load myssion
arr = [1,2,3,4]
str = "Hello world"
> str
Hello world
> arr
[1,2,3,4]
````

## REPL history
By default, the expression history is persistent. Every expression you evaluate in the REPL will be stored in a `.node_repl_history` in your `$HOME` directory.

That's all for this lesson, see you in the next one.
