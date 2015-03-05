## Bulding a reusable template directive

The goal of this exercise is to build a directive with **isolated scope** that uses a template to pretty print an `address` object.

### Scenario

There's an `app.js` file that already defines an `AppController` that exposes two address objects as `berlin` and `hamburg` on the controller's scope.

There's also a `tr-address.tpl.html` that should be used for the directive. It defines the basic structure but leaves out the binding part. Replace the `RENDER XXX HERE` markers with the correct template syntax to correctly render the address.

There's also an `index.html` files that already does the bootstraping and uses the `AppController`. What's left to do is to:

1. define the directive
2. modify the template in `tr-address.tpl.html`
3. Use the directive in the `index.html` file.