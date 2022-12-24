### The Abstract Factory pattern allows us to produce families of related objects without specifying concrete classes. It's useful in situations where we need to create objects that share only some properties and methods.

### The way it works is by presenting an abstract factory the client interacts with. That abstract factory calls the corresponding concrete factory given the corresponding logic. And that concrete factory is the one that returns the end object.

### Basically it just adds an abstraction layer over the factory method pattern, so that we can create many different types of objects, but still interact with a single factory function or class.

### So let's see this with an example. Let's say we're modeling a system for a car company, which builds cars of course, but also motorcycles and trucks.