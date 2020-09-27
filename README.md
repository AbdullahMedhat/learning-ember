# learning-ember

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Main commond
* `ember generate route scientists` to generate a router
* `ember generate component people-list` to generate UI component, and you can pass `-gc`  to generate  the UI class.
* `ember generate component-test <comp-name>` to generate test for a compnenet.
* `ember generate acceptance-test <temp-name>` to generate test for a template
* `ember t -s` to run tests.


## Installation

* `git clone <repository-url>` this repository
* `cd learning-ember`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
