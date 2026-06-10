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
const H2Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 104V408C320 430.094 302.094 448 280 448S240 430.094 240 408V296H80V408C80 430.094 62.094 448 40 448S0 430.094 0 408V104C0 81.906 17.906 64 40 64S80 81.906 80 104V216H240V104C240 81.906 257.906 64 280 64S320 81.906 320 104Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M600.001 448H408.005C391.693 448 377.021 438.094 370.912 422.97C364.803 407.845 368.49 390.534 380.24 379.222L527.331 237.352C548.143 217.884 550.502 184.261 533.049 161.98C524.831 151.45 513.472 145.106 501.097 144.137C489.081 143.2 477.3 147.45 467.988 156.168L445.989 176.667C429.817 191.729 404.49 190.823 389.459 174.699C374.381 158.543 375.271 133.232 391.427 118.17L413.411 97.67C439.317 73.484 472.551 61.641 507.347 64.391C541.862 67.109 574.189 84.702 596.079 112.701C639.125 167.73 633.125 247.977 582.408 295.35L507.097 368.003H600.001C622.094 368.003 640 385.909 640 408.002S622.094 448 600.001 448Z" })
    ]
  }
));
H2Duotone.displayName = "H2Duotone";
var H2_default = H2Duotone;
