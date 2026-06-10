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
var FlorinSign_exports = {};
__export(FlorinSign_exports, {
  default: () => FlorinSign_default
});
module.exports = __toCommonJS(FlorinSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlorinSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 48C384 56.844 376.844 64 368 64H315.953C296.25 64 278.234 76.375 271.156 94.781L215.303 240H336C344.844 240 352 247.156 352 256S344.844 272 336 272H202.996L142.719 428.719C130.906 459.406 100.906 480 68.047 480H16C7.156 480 0 472.844 0 464S7.156 448 16 448H68.047C87.75 448 105.766 435.625 112.844 417.219L168.697 272H48C39.156 272 32 264.844 32 256S39.156 240 48 240H181.004L241.281 83.281C253.094 52.594 283.094 32 315.953 32H368C376.844 32 384 39.156 384 48Z" })
  }
));
FlorinSignLight.displayName = "FlorinSignLight";
var FlorinSign_default = FlorinSignLight;
