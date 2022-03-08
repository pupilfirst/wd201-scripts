# CamelCase vs snake_case

You've learned how to create classes and you've also learned how to create variables.

This is a good point in time to talk about something we've been glossing over - the different ways in which things in Ruby can be named.

Let's take a few examples and talk about how they're named.

```ruby
# A class.
class StudentReport
  # A method.
  def to_pdf
  end
end

# A variable.
student_report = StudentReport.new
```

Let's create a class called `Student`. Notice how I'm capitalizing the first letter of the name `Student`. What if I wanted to write the name of a class that has more than one word in it. For example `StudentReport`. Notice how I've capitalized the first letter of the second-word.

Let's quickly jump into the class and write a method `to_pdf` inside this class. Notice how the method starts with a lower-case letter, and we use an underscore character between the words `to` and `pdf`. This is a convention - this is a common style that developers follow when writing Ruby.

In the same way, a variable name `report` also starts with a lower-case letter. If I wanted a variable name with more than one word in it, for example `student_report`, I would put a underscore character between them.

We can see two styles of naming here. The first, that is used for naming classes is called `CamelCase` (or more accurately, an `UpperCamelCase`). This is when we use upper-case characters to denote a new word in the name of a thing - in this case, a class. For variables and methods, we use a format known as `snake_case` - this is when use use an underscore character in-between words in the name of a thing. These are conventions - you can break these rules and still get things to work, but stick to these styling conventions as much as possible, because consistent naming between developers makes code easier to read and understand.

Before I end this lesson, there's one more thing I want to draw your attention to. In Ruby, names that start with a capital letter also have one additional special meaning. We can run a simple test to see this special meaning in action. Let's try to create a `class student` that doesn't start with a capital letter. Ruby will complain - it'll show an error and say _a class or a module name must be a CONSTANT_. Pay attention to what it's saying here. It's saying that the name of a class must be a constant.

We'll discuss the topic of constants in the next lesson.
