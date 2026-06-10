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
const H1Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 104V408C320 430.094 302.094 448 280 448S240 430.094 240 408V296H80V408C80 430.094 62.094 448 40 448S0 430.094 0 408V104C0 81.906 17.906 64 40 64S80 81.906 80 104V216H240V104C240 81.906 257.906 64 280 64S320 81.906 320 104Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 407.996C576 430.092 558.094 448 536 448H424C401.906 448 384 430.092 384 407.996S401.906 367.992 424 367.992H440.375V180.037C423.328 187.506 402.797 182.225 391.656 166.41C378.953 148.314 383.281 123.375 401.359 110.654L457.359 71.244C469.578 62.682 485.594 61.65 498.797 68.463C512.063 75.34 520.375 89.027 520.375 103.967V367.992H536C558.094 367.992 576 385.9 576 407.996Z" })
    ]
  }
));
H1Duotone.displayName = "H1Duotone";
var H1_default = H1Duotone;
