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
var H1_exports = {};
__export(H1_exports, {
  default: () => H1_default
});
module.exports = __toCommonJS(H1_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const H1Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M312.244 64C307.819 64 304.238 67.594 304.238 72V240H16.013V72C16.013 67.594 12.432 64 8.006 64S0 67.594 0 72V440C0 444.406 3.581 448 8.006 448S16.013 444.406 16.013 440V256H304.238V440C304.238 444.406 307.819 448 312.244 448C316.669 448 320.25 444.406 320.25 440V72C320.25 67.594 316.669 64 312.244 64ZM551.994 432H496.419V72C496.419 68.969 494.699 66.188 491.994 64.844C489.273 63.5 486.02 63.781 483.612 65.594L419.531 113.594C415.997 116.25 415.278 121.25 417.92 124.812C420.594 128.344 425.614 129.031 429.132 126.406L480.407 88V432H423.894C419.468 432 415.887 435.594 415.887 440S419.468 448 423.894 448H551.994C556.419 448 560 444.406 560 440S556.419 432 551.994 432Z" })
  }
));
H1Thin.displayName = "H1Thin";
var H1_default = H1Thin;
