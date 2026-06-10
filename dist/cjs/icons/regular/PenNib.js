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
var PenNib_exports = {};
__export(PenNib_exports, {
  default: () => PenNib_default
});
module.exports = __toCommonJS(PenNib_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenNibRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.928 74.222L437.777 14.071C428.395 4.689 416.097 0 403.801 0C391.495 0 379.191 4.697 369.807 14.091L287.898 96.09L136.599 138.818C116.229 144.567 99.982 160.064 93.232 180.184L3.052 433.7C-4.07 455.076 1.494 478.641 17.427 494.573C28.766 505.912 43.972 512 59.502 512C65.795 512 72.138 511.002 78.3 508.947L331.813 418.767C351.935 412.018 367.432 395.771 373.182 375.399L415.909 224.102L497.908 142.192C516.69 123.432 516.698 92.994 497.928 74.222ZM326.989 362.363C325.546 367.48 321.642 371.553 315.728 373.546L75.677 458.947L193.531 341.092C198.036 342.85 202.858 344.01 207.987 344.01C230.077 344.01 247.984 326.103 247.984 304.013S230.077 264.015 207.987 264.015S167.989 281.922 167.989 304.013C167.989 309.141 169.149 313.963 170.907 318.469L53.067 436.309L138.737 195.449C140.446 190.358 144.52 186.453 149.643 185.008L300.442 142.421L369.578 211.557L326.989 362.363Z" })
  }
));
PenNibRegular.displayName = "PenNibRegular";
var PenNib_default = PenNibRegular;
