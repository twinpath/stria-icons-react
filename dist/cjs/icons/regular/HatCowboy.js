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
var HatCowboy_exports = {};
__export(HatCowboy_exports, {
  default: () => HatCowboy_default
});
module.exports = __toCommonJS(HatCowboy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HatCowboyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M617.721 207C593.722 196 574.474 211.25 568.724 218.625C567.099 221.125 550.975 244.5 511.478 267.125C495.854 166 461.981 32 392.361 32C373.987 32 356.238 39.25 339.614 53.5C327.865 63.625 312.116 63.625 300.367 53.5C283.743 39.25 266.119 32 247.746 32C178.125 32 144.252 166.125 128.504 267.125C91.631 246 75.257 224.25 72.132 219.75C60.758 204.375 40.134 198.875 22.636 206.75C4.387 214.875 -4.363 234.625 2.137 252.75C5.262 260.875 79.132 448 319.991 448S634.719 260.875 637.844 252.875C644.344 234.875 635.719 215.25 617.721 207ZM247.746 80C254.245 80 261.495 83.375 269.119 90C299.117 115.75 340.989 115.75 370.987 90C378.612 83.375 385.861 80 392.361 80C410.485 80 436.983 137.375 455.732 228.875C377.612 264.5 269.369 267.75 184.375 228.875C203.123 137.375 229.497 80 247.746 80ZM319.991 400C184.25 400 110.38 332.5 74.882 284.125C116.379 311.125 191.999 342.375 319.991 342.375S523.977 310.625 565.224 283.875C529.852 332.375 455.981 400 319.991 400Z" })
  }
));
HatCowboyRegular.displayName = "HatCowboyRegular";
var HatCowboy_default = HatCowboyRegular;
