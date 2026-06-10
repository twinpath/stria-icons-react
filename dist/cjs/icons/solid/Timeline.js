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
var Timeline_exports = {};
__export(Timeline_exports, {
  default: () => Timeline_default
});
module.exports = __toCommonJS(Timeline_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TimelineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 224H544V153.246C572.232 140.891 592 112.785 592 80C592 35.82 556.184 0 512 0C467.818 0 432 35.82 432 80C432 112.785 451.771 140.891 480 153.246V224H160V153.246C188.232 140.891 208 112.785 208 80C208 35.82 172.184 0 128 0C83.818 0 48 35.82 48 80C48 112.785 67.771 140.891 96 153.246V224H32C14.334 224 0 238.334 0 256S14.334 288 32 288H288V358.754C259.768 371.109 240 399.215 240 432C240 476.18 275.816 512 320 512C364.182 512 400 476.18 400 432C400 399.215 380.229 371.109 352 358.754V288H608C625.666 288 640 273.666 640 256S625.666 224 608 224ZM512 48C529.645 48 544 62.355 544 80S529.645 112 512 112S480 97.645 480 80S494.355 48 512 48ZM128 48C145.645 48 160 62.355 160 80S145.645 112 128 112S96 97.645 96 80S110.355 48 128 48ZM320 464C302.355 464 288 449.645 288 432S302.355 400 320 400S352 414.355 352 432S337.645 464 320 464Z" })
  }
));
TimelineSolid.displayName = "TimelineSolid";
var Timeline_default = TimelineSolid;
