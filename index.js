"use strict";

module.exports = {
  name: "embercli-bootstrap-components",
  afterInstall(options) {
    return this.addAddonstoProject({
      packages: [{ name: "ember-cli-bootstrap-4" }],
    });
  },
};
