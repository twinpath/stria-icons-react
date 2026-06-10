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
var BackwardStep_exports = {};
__export(BackwardStep_exports, {
  default: () => BackwardStep_default
});
module.exports = __toCommonJS(BackwardStep_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BackwardStepThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 64C3.594 64 0 67.594 0 72V440C0 444.406 3.594 448 8 448S16 444.406 16 440V72C16 67.594 12.406 64 8 64ZM287.781 64C280.779 64 273.635 66.305 267.49 71.406L75.455 231.379C60.203 244.252 60.203 267.748 75.455 280.621L267.49 440.594C273.635 445.693 280.781 448 287.781 448C304.285 448 320 435.191 320 415.973V96.027C320 76.811 304.283 64 287.781 64ZM303.998 415.973C303.998 426.004 295.754 432 287.781 432C284.072 432 280.684 430.75 277.732 428.301L85.775 268.395C82.062 265.26 80.018 260.857 80.018 256C80.018 251.141 82.062 246.74 85.697 243.672L277.711 83.717C280.684 81.25 284.072 80 287.781 80C295.754 80 303.998 85.994 303.998 96.027V415.973Z" })
  }
));
BackwardStepThin.displayName = "BackwardStepThin";
var BackwardStep_default = BackwardStepThin;
