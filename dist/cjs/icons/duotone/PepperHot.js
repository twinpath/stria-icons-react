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
var PepperHot_exports = {};
__export(PepperHot_exports, {
  default: () => PepperHot_default
});
module.exports = __toCommonJS(PepperHot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PepperHotDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M467.742 314.758C406.055 407.049 248.348 512 56 512C25.125 512 0 486.875 0 456S25.125 400 56 400C207.496 400 208.941 211.896 292.1 139.779L352 165.453V256H442.562L467.742 314.758Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M465.279 134.228C486.744 95.844 485.146 47.059 459.629 10.254C452.088 -0.574 437.318 -3.277 426.426 4.316C415.658 11.895 412.99 26.865 420.529 37.725C434.937 58.48 435.662 85.41 424.627 107.498C407.305 100.117 388.26 96 368.24 96C332.014 96 299.309 109.834 274 131.918L352.24 165.453V256H442.803L476.328 334.23C498.408 308.924 512.24 276.223 512.24 240C512.24 198.004 493.959 160.551 465.279 134.228Z" })
    ]
  }
));
PepperHotDuotone.displayName = "PepperHotDuotone";
var PepperHot_default = PepperHotDuotone;
