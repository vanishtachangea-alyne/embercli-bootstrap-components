/* eslint-env node */
module.exports = {
  description: "embercli-bootstrap-components",

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall(options) {
  //   // Perform extra work here.
  // }
  afterInstall(options) {
    return this.addAddonsToProject({
      packages: [{ name: "ember-cli-bootstrap-4" }],
    });
  },
};
