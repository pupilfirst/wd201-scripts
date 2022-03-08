# Inconstant Constants

Ruby constants are a bit curious. The word constant when used in programming usually means a thing that does not change. But you'll see that in Ruby, that's not quite the case.

You've already seen that Ruby won't let you create a `class student`. Ruby will complain - it'll show an error and say _a class or a module name must be a CONSTANT_. In Ruby, constants are created by naming something with a string that starts with a capital letter. So `class Student` is fine, but `class student` is not.

In fact, we can store values in this way. For example, if I wanted to store the value of pi, I could either store it in a variable `pi = 3.14`, or I can create a constant `PI = 3.14`. Notice how I'm capitalizing all the letters of the name - this is the convention for naming simple constant values in Ruby. If I wanted to create a constant whose name has multiple words, I could write something like `MY_NAME = "Hari"`. Notice how all the letters are still capitalized, but I'm using underscores to separate the words. Again, this is a convention that makes constant values easy to spot when going through code.

If I check `PI.class` it tells me that the constant `PI` is an object of the class `Float`. That's perfect but even though we call these values constants, in Ruby, we can change the value of constant just like we can change the value of a variable. For example, I can say `PI = 3`, and Ruby will display a warning saying that we had already initialized the constant `PI`, and where the constant `PI` was defined. But if I check the value of `PI`, it now says `3`, and if I check `PI.class`, it's now an object of class `Integer`. So it's a completely different object - this constant has changed.

In Ruby, constants are created by capitalizing the first letter of the name of a thing... but that _constant_ part is more of a guideline. It's not a hard rule that the Ruby interpreter enforces. Ruby will show warnings to try an inform us that something that _should_ not be happening _is_ happening, but it won't block the constant from being changed.

Now this doesn't mean that you can or should name things improperly. Stick to the naming scheme we've discussed so far. That means using the naming style we discussed in the previous video.

> Show code from the _CamelCase vs snake_case_ video.

If you break these rules, things will probably still work, but it's also likely that you'll run into curious errors.

Here's an example. Let's create two methods that do the same thing:

```ruby
def fourty_two
  42
end

def Fourty_two
  42
end
```

There's only one difference between these two - that the second method starts with a capitalized letter. If I call the first method by writing `fourty_two`, Ruby correctly executes it and returns the value `42`.

If I try to do the same thing with `Fourty_two`, it causes an _error_ - Ruby says that it tried to find a constant with the name `Fourty_two`, but couldn't find anything like that. This is because Fourty_two we've defined is a method, but the starting capital letter is a source of confusion for Ruby - it's searching for a constant value, not a method. We can still access the method by writing `Fourty_two()`, making sure we put empty brackets at the end. These brackets let Ruby know that we're looking for a method, and not a constant value.

While this was an interesting exercise, don't do this. Don't create methods that start with a capital letter - there's no advantage there.

Since you're probably still only starting to get comfortable with Ruby, try to stick to the naming and style conventions that we suggest within the course as much as possible. This will help avoid weird issues related to naming like the one we just saw.
