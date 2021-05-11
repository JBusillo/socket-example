# socket-example

Just an example to show how SvelteKit can start a WebSocket on the server side, and communicate with multiple routes on the client side.

Probably could use some code refactoring/improvement.

It makes use of side effects in hooks.js (possibly not recommended) to initialize on the server side.

It uses a Svelte store to store the connection.  It probably could be initialized in "index.js", and not check in each page whether it has been initialized.

