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
var X_exports = {};
__export(X_exports, {
  default: () => X_default
});
module.exports = __toCommonJS(X_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const XThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M382.095 466.813C384.955 470.188 384.548 475.219 381.189 478.094C379.689 479.375 377.845 480 376.001 480C373.736 480 371.501 479.031 369.908 477.188L192 268.349L14.092 477.188C12.499 479.031 10.264 480 7.999 480C6.155 480 4.311 479.375 2.811 478.094C-0.548 475.219 -0.955 470.188 1.905 466.813L181.486 256.005L1.905 45.197C-0.955 41.822 -0.548 36.791 2.811 33.916C6.171 31.041 11.186 31.448 14.092 34.823L192 243.662L369.908 34.823C372.814 31.448 377.861 31.041 381.189 33.916C384.548 36.791 384.955 41.822 382.095 45.197L202.514 256.005L382.095 466.813Z" })
  }
));
XThin.displayName = "XThin";
var X_default = XThin;
