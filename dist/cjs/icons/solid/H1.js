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
var H1_exports = {};
__export(H1_exports, {
  default: () => H1_default
});
module.exports = __toCommonJS(H1_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const H1Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 64C257.906 64 240 81.906 240 104V216H80V104C80 81.906 62.094 64 40 64S0 81.906 0 104V408C0 430.094 17.906 448 40 448S80 430.094 80 408V296H240V408C240 430.094 257.906 448 280 448S320 430.094 320 408V104C320 81.906 302.094 64 280 64ZM536 367.992H520.375V103.967C520.375 89.027 512.063 75.34 498.797 68.463C485.594 61.65 469.578 62.682 457.359 71.244L401.359 110.654C383.281 123.375 378.953 148.314 391.656 166.41C402.797 182.225 423.328 187.506 440.375 180.037V367.992H424C401.906 367.992 384 385.9 384 407.996S401.906 448 424 448H536C558.094 448 576 430.092 576 407.996S558.094 367.992 536 367.992Z" })
  }
));
H1Solid.displayName = "H1Solid";
var H1_default = H1Solid;
