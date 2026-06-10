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
var DiceD6_exports = {};
__export(DiceD6_exports, {
  default: () => DiceD6_default
});
module.exports = __toCommonJS(DiceD6_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD6Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M426.328 117.163C426.328 119.988 424.977 122.81 422.277 124.411L224.152 242.565L26.027 124.411C23.344 122.81 22 119.988 22 117.163C22 114.363 23.32 111.561 25.965 109.943L191.934 9.07C201.887 3.023 213.02 0 224.152 0S246.418 3.023 256.371 9.07L422.34 109.943C425 111.561 426.328 114.363 426.328 117.163Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.994 153.479C9.32 153.479 10.681 153.83 11.969 154.598L208 271.47V495.277C208 505.018 200.344 511.986 191.988 511.986C189.3 511.986 186.539 511.265 183.938 509.683L31.781 417.217C12.125 405.279 0 383.311 0 359.53V161.848C0 156.961 3.817 153.479 7.994 153.479ZM440.006 153.479C444.183 153.479 448 156.961 448 161.848V359.53C448 383.28 435.875 405.279 416.219 417.217L264.062 509.714C261.469 511.284 258.717 512 256.037 512C247.671 512 240 505.028 240 495.277V271.47L436.031 154.598C437.319 153.83 438.68 153.479 440.006 153.479Z " })
    ]
  }
));
DiceD6Duotone.displayName = "DiceD6Duotone";
var DiceD6_default = DiceD6Duotone;
