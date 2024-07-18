/* What is the difference between "Load" and "Read"? Are we loading only what is readable? 

Q: NotIMplementedException will allow the code to compile, but crashes the app when the specific situation that requires that code is met. When is this a good idae? It feels like it shouldn't be if you're working on a team because they'll compile successfully, and won't know anything was wrong until they accidentally ran into that specific portion of your code that you built.
A: It's better to build things out one thought at a time, and complete your full thought instead of getting sidetracked each time you run into a feature that hasn't been built yet. Getting sidetracked could distract you just enough that you might forget what you were trying to do in the first place.So build out placeholders where NotImplementedException will handle the build errors, then you can flesh things out one at a time.

Q: Horvat talks about chaining method calls, which effectively removes most, if not all named variables inside a method. I usually name every new "thing" I make so I remember my thought process when building stuff out. Wouldn't removing those names make my code less readable? Or does readability matter less when designing what goes into a method, and all that matters is that the code works and the method is sufficiently self-descriptive as far as its name is concerned?
A: You don't want to expose parts of your method unnecessarily if you don't want people to tamper with them. Also if your methods become too complicated to read clearly, perhaps it's time to break down that method into smaller chunks. Horvat also mentioned this during his lecture, but ideally, you want your methods and objects doing one thing at a time, and if it requires multiple actions, those actions should be delegated to other objects and methods. 

Horvat seems to know inherently when a certan method should be public or private. Is there a rule of thumb he follows that allows him to know at a glance which one to choose?

What is a partial class?

Q. How do I know where to start when I see a task? 

Q. Do all stored procedures need to run the post deploy initializing values script?

Q. Could you go over how I figure out how to find the ID numbers for the load scripts again?

Topic idea: Video game publishing studios are struggling to release consistently good games, and many suspect it's because of high rates of churn, and huge knowledge gaps that take time to fill in. I wonder if the fact that the opposite is happening here is why app development is consistently at a high quality.

when is the best time to use var?
How do I access ASAP?

What does Dispatching do? Is this how the code finalizes a request to the server?

What is your thought process when you look at a task that builds out a feature? Is there a mental skeleton of heirarchies that you need to build in order as you flesh things out?

Could you explain what EffectMethod does? I think there were like 3 or 4 things that each feature needed to have and EffectMethod was one of them?
*/