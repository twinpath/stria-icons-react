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
var DiceD4_exports = {};
__export(DiceD4_exports, {
  default: () => DiceD4_default
});
module.exports = __toCommonJS(DiceD4_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD4Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 309.095C512 302.05 509.681 294.953 504.896 289.031L280.843 11.875C274.437 3.969 265.218 0 256 0S237.563 3.969 231.157 11.875L7.104 289.031C2.319 294.953 0 302.05 0 309.095C0 318.705 4.315 328.22 12.573 334.531L236.626 505.469C242.344 509.844 249.157 512 256 512S269.656 509.844 275.374 505.469L499.427 334.531C507.685 328.22 512 318.705 512 309.095ZM247.989 493.307C247.481 493 246.809 493.113 246.329 492.748L22.287 321.818C15.685 316.775 15.999 309.408 15.999 309.076C15.999 305.448 17.229 301.96 19.545 299.09L243.586 21.947C244.801 20.447 246.387 19.42 247.989 18.463V493.307ZM489.724 321.811L265.652 492.762C265.175 493.127 264.496 493.016 263.988 493.32V18.441C265.597 19.398 267.183 20.432 268.402 21.934L492.451 299.088C494.77 301.96 496.001 305.448 496.001 309.077C496.001 309.408 496.311 316.777 489.724 321.811Z " })
  }
));
DiceD4Thin.displayName = "DiceD4Thin";
var DiceD4_default = DiceD4Thin;
