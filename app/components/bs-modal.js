import Component from "@ember/component";
import layout from "../templates/components/bs-modal";
export default Component.extend({
  layout,
  classNames: ["modal", "fade"],
  id: "exampleModal",
  tabindex: "-1",
  role: "dialog",
});
