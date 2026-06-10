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
var Wrench_exports = {};
__export(Wrench_exports, {
  default: () => Wrench_default
});
module.exports = __toCommonJS(Wrench_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WrenchDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200.625 209.562L21.094 389.094C-7.031 417.219 -7.031 462.781 21.094 490.906C35.156 504.969 53.563 512 72 512S108.844 504.969 122.906 490.906L302.438 311.375C254.186 295.561 216.439 257.814 200.625 209.562ZM80 456C66.746 456 56 445.254 56 432C56 418.744 66.746 408 80 408S104 418.744 104 432C104 445.254 93.254 456 80 456Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.328 198.523C492.242 260.703 439.028 309.209 375.692 318.295C268.803 333.633 178.367 243.197 193.703 136.307C202.791 72.973 251.297 19.758 313.477 4.67C340.608 -1.912 366.705 -1.24 390.678 4.824C402.668 7.857 406.621 23.094 397.875 31.84L320 109.715V192H402.285L480.16 114.125C488.907 105.379 504.143 109.332 507.176 121.322C513.24 145.295 513.912 171.393 507.328 198.523Z" })
    ]
  }
));
WrenchDuotone.displayName = "WrenchDuotone";
var Wrench_default = WrenchDuotone;
