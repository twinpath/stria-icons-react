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
var SquareStar_exports = {};
__export(SquareStar_exports, {
  default: () => SquareStar_default
});
module.exports = __toCommonJS(SquareStar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareStarDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM369.283 231.168L309.709 289.1L323.797 370.934C326.332 385.734 310.73 396.754 297.646 389.891L224 351.248L150.354 389.891C137.27 396.807 121.668 385.734 124.203 370.934L138.291 289.1L78.717 231.168C68.01 220.764 73.926 202.598 88.701 200.463L171.029 188.484L207.834 114.016C214.473 100.578 233.58 100.744 240.166 114.016L276.971 188.484L359.299 200.463C374.074 202.598 379.99 220.764 369.283 231.168Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M369.033 231.168L309.458 289.1L323.546 370.934C326.082 385.734 310.48 396.754 297.396 389.891L223.75 351.248L150.103 389.891C137.019 396.807 121.417 385.734 123.953 370.934L138.041 289.1L78.466 231.168C67.759 220.764 73.675 202.598 88.451 200.463L170.779 188.484L207.583 114.016C214.222 100.578 233.33 100.744 239.916 114.016L276.72 188.484L359.048 200.463C373.824 202.598 379.74 220.764 369.033 231.168Z" })
    ]
  }
));
SquareStarDuotone.displayName = "SquareStarDuotone";
var SquareStar_default = SquareStarDuotone;
