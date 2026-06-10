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
var S_exports = {};
__export(S_exports, {
  default: () => S_default
});
module.exports = __toCommonJS(S_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M179.912 480C129.875 480 69.498 467.345 5.202 442.504C1.079 440.91 -0.982 436.286 0.611 432.161C2.188 428.005 6.826 425.881 10.949 427.568C92.299 459.002 200.433 480.562 260.356 446.972C283.173 434.161 297.213 413.944 302.117 386.916C316.563 307.174 239.492 286.114 157.892 263.835C72.934 240.65 -14.913 216.653 2.141 122.475C7.154 94.884 22.709 71.981 47.103 56.232C93.549 26.329 168.699 24.079 270.476 49.608C274.756 50.67 277.348 55.014 276.286 59.294C275.193 63.606 270.836 66.294 266.572 65.106C170.667 41.046 97.734 42.577 55.771 69.7C29.768 86.448 20.804 109.195 17.883 125.35C3.437 205.091 80.508 226.121 162.093 248.399C247.051 271.584 334.913 295.582 317.859 389.791C312.065 421.725 295.355 445.66 268.181 460.908C245.426 473.688 215.254 480 179.912 480Z" })
  }
));
SThin.displayName = "SThin";
var S_default = SThin;
