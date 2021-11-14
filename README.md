---
module: mark-nodejs

level: 1

methods:
  - team
  - pair
  - solo

tags:
  - wip
---

# My Little Server

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

We're now going to run your first server and play around with a few existing **endpoints** that it has.

## Learning Outcomes

- Run an Express server locally
- Send back a JSON response in an Express route handler
- Identify when a route handler function is executed
- Test HTTP GET requests in the browser
- Test HTTP GET requests in Postman

## Exercise 1: Installing and running

**Success criterion:** you can view evidence your server is running at `localhost:4000`

Firstly, clone this repository to your local machine, then install dependencies and run it locally.

## Exercise 2: Viewing responses in Postman

Try making `GET` requests to some of the following:

- `localhost:4000`
- `localhost:4000/hits`
- `localhost:4000/hits-stealth`

etc.

(Some routes will give you back the same response each time, and others won't. Why is that?)

## Exercise 3: Writing your own Express route

> 🎯 **Success criterion:** you can visit `localhost:5050/hello-world`, `localhost:5050/ponies/random` and `localhost:5050/history` in the browser, with the expected behaviour below.

Now, you're going to try making changes to the server - in particular, you're going to change the port which it runs on, and try adding some endpoints of your own.

### `/hello-world`

Should respond with the following JSON data:

```json
{
  "english": "Hello world!",
  "esperanto": "Saluton mondo!",
  "hawaiian": "Aloha Honua",
  "turkish": "Merhaba Dünya!"
}
```

### `/ponies/random`

Shows a _single_ random pony from `ponies.json`. It should be possible to hit the route twice and get back two different ponies.

### `/history`

Shows a list of which (active) routes have been hit in chronological order.

For example, if you visited the following routes after starting your server:

- `/ponies`
- `/hits`
- `/history`
- `/um-what-is-this`
- `/`
- `/history`

Then the response should be something like:

```js
{
  "routes": [
    "/ponies",
    "/hits",
    "/history",
    "/",
    "/history"
  ]
}
```

(where `/um-what-is-this` is ignored, because it isn't a defined server endpoint)
