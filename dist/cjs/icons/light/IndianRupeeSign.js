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
var IndianRupeeSign_exports = {};
__export(IndianRupeeSign_exports, {
  default: () => IndianRupeeSign_default
});
module.exports = __toCommonJS(IndianRupeeSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IndianRupeeSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.001 160C320.001 168.844 312.845 176 304.001 176H255.193C250.958 247.201 192.245 304 120.001 304H64.876L265.47 451.094C272.595 456.328 274.126 466.344 268.907 473.469C265.767 477.734 260.907 480 255.986 480C252.704 480 249.392 479 246.532 476.906L6.532 300.906C0.954 296.812 -1.358 289.594 0.798 283.016C2.954 276.453 9.079 272 16.001 272H120.001C174.605 272 219.027 229.553 223.193 176H16.001C7.157 176 0.001 168.844 0.001 160S7.157 144 16.001 144H220.931C210.031 98.238 169.05 64 120.001 64H16.001C7.157 64 0.001 56.844 0.001 48S7.157 32 16.001 32H304.001C312.845 32 320.001 39.156 320.001 48S312.845 64 304.001 64H206.573C230.644 84.076 247.816 111.912 253.575 144H304.001C312.845 144 320.001 151.156 320.001 160Z" })
  }
));
IndianRupeeSignLight.displayName = "IndianRupeeSignLight";
var IndianRupeeSign_default = IndianRupeeSignLight;
