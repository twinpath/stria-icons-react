var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var FootballHelmet_exports = {};
__export(FootballHelmet_exports, {
  default: () => FootballHelmet_default
});
module.exports = __toCommonJS(FootballHelmet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FootballHelmetDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.453 320H354.734L340.484 244.031L308.711 248.168L322.172 320H274C274 320 292.719 366.797 286.812 352H328.172L338.047 404.656C347.984 457.594 394.297 496 448.141 496H496.453C505.297 496 512.453 488.844 512.453 480V336C512.453 327.156 505.297 320 496.453 320ZM480.453 464H448.141C415.863 464 387.605 444.555 375.07 416H480.453V464ZM480.453 384H366.727L360.734 352H480.453V384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.453 16 16 123.453 16 256C16 312.09 35.406 363.527 67.68 404.363C73.621 411.883 82.984 415.945 92.57 415.945H119.961L205.711 460.945C230.836 473.57 261.336 468.695 281.336 448.695C317.551 412.48 292.266 366.797 286.359 352L263.211 294.195C255.461 274.82 268.211 253.32 288.836 250.695L477.086 226.195C485.609 225.008 491.762 217.18 490.926 208.82C459.422 61.703 332.547 16 256 16ZM175.961 359.945C162.711 359.945 151.961 349.195 151.961 335.945S162.711 311.945 175.961 311.945S199.961 322.695 199.961 335.945S189.211 359.945 175.961 359.945Z" })
    ]
  }
));
FootballHelmetDuotone.displayName = "FootballHelmetDuotone";
var FootballHelmet_default = FootballHelmetDuotone;
