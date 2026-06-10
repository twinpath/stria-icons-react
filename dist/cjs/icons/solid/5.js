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
var __exports = {};
__export(__exports, {
  default: () => __default
});
module.exports = __toCommonJS(__exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Icon5Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.013 336C320.013 415.406 255.419 480 176.013 480H114.606C63.669 480 18.606 447.531 2.481 399.188C-5.909 374.063 7.669 346.875 32.825 338.469C57.95 330.094 85.169 343.656 93.544 368.813C96.575 377.906 105.044 384 114.606 384H176.013C202.481 384 224.013 362.469 224.013 336S202.481 288 176.013 288H48.013C33.638 288 20.013 281.562 10.888 270.438C1.778 259.312 -1.878 244.688 0.95 230.594L32.95 70.594C37.434 48.156 57.138 32 80.013 32H240.013C266.528 32 288.013 53.5 288.013 80S266.528 128 240.013 128H119.356L106.559 192H176.013C255.419 192 320.013 256.594 320.013 336Z" })
  }
));
Icon5Solid.displayName = "Icon5Solid";
var __default = Icon5Solid;
