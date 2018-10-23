State vs Redux

Simple React app demonstration modeling the difference between using this.setState to render and change the color of a React button component vs. using Redux to render the same button component and change the color.

The Redux button component may seem like overkill for creating a single component. However, with the addition of multiple components to a React application - Redux offers an adavantage - as it makes use of HoCs (higher-order components) that are more easily reusable and readable, and easier to test.

More about Redux:

Redux is a library that helps manage state changes in a clear manner. It was inspired by Flux, but with some simplifications. The key idea of Redux is that the whole state of the application is represented by a single object, which is mutated by functions called reducers. Reducers themselves are pure functions and are implemented separately from the components. This enables better separation of concerns and testability.

If you’re working on a simple project, then introducing Redux might be an over complication, but for medium- and large-scale projects, it’s a solid choice. 

Go to the 'source-code' branch and download the zip.

Paste contents of the zip 'state-vs-redux-source-code' into the directory you run your react apps from.

In your command window cd into your 'state-vs-redux-source-code' directory and run 'yarn install'.

Then run 'yarn start'.
