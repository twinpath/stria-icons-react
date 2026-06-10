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
var X_exports = {};
__export(X_exports, {
  default: () => X_default
});
module.exports = __toCommonJS(X_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const XRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376.575 427.518C387.888 441.112 386.06 461.299 372.481 472.612C366.497 477.581 359.231 480.018 352.013 480.018C342.841 480.018 333.747 476.112 327.419 468.518L191.997 306.01L56.575 468.518C50.247 476.112 41.153 480.018 31.981 480.018C24.763 480.018 17.497 477.581 11.513 472.612C-2.065 461.299 -3.894 441.112 7.419 427.518L150.335 256.018L7.419 84.518C-3.894 70.924 -2.065 50.737 11.513 39.424C25.075 28.143 45.247 29.924 56.575 43.518L191.997 206.026L327.419 43.518C338.716 29.956 358.903 28.143 372.481 39.424C386.06 50.737 387.888 70.924 376.575 84.518L233.659 256.018L376.575 427.518Z" })
  }
));
XRegular.displayName = "XRegular";
var X_default = XRegular;
