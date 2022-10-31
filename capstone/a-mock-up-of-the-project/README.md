## Script

Hi there! What you're looking at is a mock-up - a demo of the online voting platform that we're asking you to build as your capstone project. As the name implies, an online voting platform is a web application that people can use to run an election, or a vote of some kind, online.

In this mock-up that we've created, I'm going to demonstrate some of the core features that we expect you to build. This is not an exhaustive demonstration - I won't be covering all features. This demo exists so that you can get a _feel_ for the kind of application that we're asking you to build.

Let's get started by looking at the app as an _election administrator_ - the first of two personas that we've asked you to implement. The page you're looking at right now is the homepage of the mockup that lets your user either sign up as an election administrator, or sign in to create and manage elections. I'm not going to demo the signing up or signing in pages because that part is relatively straight-forward. Instead, I'm going to jump straight to the signed in state. as an election adminstator.

> Click _Sign In_.

A newly signed up election administrator wouldn't have any elections. So the first thing I'd want to do is to create a new election.

> Click _Create a new election_.

My election has only one property - it's name, so I can just submit that...

> Click _Submit_.

...and get a new election that is brand new. It has zero questions in the ballot, and no registered voters. Let's start by adding a few questions. We'll head to a _Manage Questions_ page...

> Click _Manage questions_.

...to see the list of questions. Of course, this being a new election doesn't have any questions in the ballot right now. So I'll start by creating a question.

> Click _Create a question_.

A question in the election's ballot has a title and a description. Once I've filled in appropriate values for both, I should be able to submit the form to add this question to the election's ballot.

> Click _Submit_.

Of course, a question in a vote can't just be a question. Voters should be able to pick an answer. So the next step is to add answer options, and I should be able to two or more such answer options.

> Click _Add answer option_.

Again, this is just a mock-up so I'm jumping ahead and showing what two such answer options could look like. I can always add more options should I need to. I should also be able to edit an existing question, just in case I need to make some changes there.

Once I'm happy with the question and this answer options, I can either add more questions by returning to the _Manage Questions_ page, or I can move onto managing the voters of this election. To speed-up this demonstration, we'll stick to having just one question in the election's ballot.

> Click _Class monitor 2022_.

To manage voters, I'll move onto the _Manage Voters_.

> Click _Manage Voters_.

Just like adding multiple questions or answer options for a question, it should be possible to add multiple voters. Each voter should have a voter ID, and a password.

> Click _Add voter_.

Let's pretend that I'm adding five voters for this particular election. Once that's done, I can return to the election's page.

> Click _Class monitor 2022_.

Now, I have one question in the ballot, and five eligible voters. All that's left is to launch the election.

> Click _Launch election_.

Once an election has been launched, it is no longer possible to the election administrator to change the questions or the answer options - that wouldn't be fair to the voters. However, you may want to allow the administrator to manage the list of voters - that's up to you.

Let's visit the voting URL, which you'll be sharing with voters.

> Click the public vote URL.

On this voting page, voters should first be asked their voter ID and password to authenticate themselves.

> Click _Sign in_.

Once authenticated, voters should be shown every question on the ballot and asked to make a choice. Their choices for each question in the ballot...

> Click vote.

...should be recorded. Let's return to the election administrator's view to see how an election ends.

> Return to election admin's view of election.

When an election is ongoing, election administrators should be able to preview the results of the election. We'll let you decide how that information should be presented.

> Click _Class monitor 2022_.

Once an election administrator has decided that an election should end, they should use the corresponding option.

> Click _End election_.

Once an election has ended the public URL for the election should show the results. Again, we'll leave how this page looks completely up to you.

Before I leave you, a quick reminder that when building this application, try to build a minimum viable product first; don't try to build every feature in one go. We've documented more about what this means in a separate lesson.

Also remember to create meaningful git commits at each stage and to push your work to your GitHub repository often.
