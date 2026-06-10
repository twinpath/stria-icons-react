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
var Cherries_exports = {};
__export(Cherries_exports, {
  default: () => Cherries_default
});
module.exports = __toCommonJS(Cherries_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CherriesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M539.319 224.155C631.627 224.155 640 306.42 640 329.79C640 411.947 572.939 512 447.904 512C408.025 512 374.086 501.782 346.297 485.253C418.604 417.682 415.873 333.97 415.873 329.797C415.873 276.434 393.27 243.301 373.504 225.219C386.815 226.646 401.369 229.892 416.973 234.835C391.617 156.156 337.229 97.672 303.313 67.365C285.193 145.355 260.906 197.197 241.336 229.521C256.556 225.882 270.516 224.191 283.237 224.191C375.545 224.191 383.873 306.499 383.873 329.788C383.873 411.946 316.867 512 191.936 512C67.006 512 0 411.949 0 329.792C0 306.522 8.314 224.236 100.589 224.236C121.804 224.236 146.468 228.939 174.67 239.542C191.077 222.399 238.453 159.689 264.219 19.68C266.37 8.007 276.583 0 287.785 0C312.394 0 433.559 106.474 468.041 238.409C495.077 228.545 518.81 224.155 539.319 224.155Z" })
  }
));
CherriesSolid.displayName = "CherriesSolid";
var Cherries_default = CherriesSolid;
