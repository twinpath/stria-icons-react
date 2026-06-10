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
var H2_exports = {};
__export(H2_exports, {
  default: () => H2_default
});
module.exports = __toCommonJS(H2_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const H2Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 64C257.906 64 240 81.906 240 104V216H80V104C80 81.906 62.094 64 40 64S0 81.906 0 104V408C0 430.094 17.906 448 40 448S80 430.094 80 408V296H240V408C240 430.094 257.906 448 280 448S320 430.094 320 408V104C320 81.906 302.094 64 280 64ZM600 368.002H507.098L582.408 295.35C633.125 247.977 639.125 167.73 596.078 112.701C574.189 84.701 541.861 67.109 507.346 64.391C472.551 61.641 439.316 73.484 413.412 97.67L391.428 118.17C375.271 133.23 374.381 158.543 389.459 174.697C404.49 190.822 429.816 191.729 445.988 176.666L467.988 156.168C477.301 147.449 489.082 143.199 501.098 144.137C513.471 145.105 524.83 151.449 533.049 161.98C550.502 184.26 548.143 217.885 527.33 237.352L380.24 379.221C368.49 390.533 364.803 407.846 370.912 422.969C377.021 438.094 391.693 448 408.006 448H600C622.094 448 640 430.094 640 408.002C640 385.908 622.094 368.002 600 368.002Z" })
  }
));
H2Solid.displayName = "H2Solid";
var H2_default = H2Solid;
