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
var Spoon_exports = {};
__export(Spoon_exports, {
  default: () => Spoon_default
});
module.exports = __toCommonJS(Spoon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpoonSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M450.336 265.121C449.832 265.625 449.328 266.125 448.82 266.617C405.834 308.551 341.697 313.883 290.367 287.563L82.973 503.751C78.059 508.908 71.272 511.9 64.122 511.998C57.018 512.095 50.135 509.298 45.1 504.263L7.739 466.9C2.704 461.868 -0.095 454.982 0.002 447.88C0.1 440.728 3.092 433.942 8.249 429.028L224.446 221.649C198.112 170.32 203.444 106.171 245.383 63.179C245.877 62.671 246.375 62.167 246.879 61.663C311.168 -2.626 423.293 -23.673 479.42 32.577C535.674 88.703 514.627 200.832 450.336 265.121Z" })
  }
));
SpoonSolid.displayName = "SpoonSolid";
var Spoon_default = SpoonSolid;
