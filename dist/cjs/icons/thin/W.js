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
var W_exports = {};
__export(W_exports, {
  default: () => W_default
});
module.exports = __toCommonJS(W_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M415.998 480C415.936 480 415.858 480 415.795 480C412.326 479.906 409.311 477.594 408.326 474.281L288 68.157L167.674 474.281C166.689 477.594 163.674 479.906 160.205 480C156.721 479.719 153.596 477.938 152.455 474.656L0.457 42.657C-1.012 38.501 1.176 33.907 5.348 32.47C9.519 30.97 14.098 33.188 15.551 37.345L159.346 446.031L280.328 37.72C282.359 30.97 293.641 30.97 295.672 37.72L416.654 446.031L560.449 37.345C561.918 33.188 566.512 30.97 570.652 32.47C574.824 33.907 577.012 38.501 575.543 42.657L423.545 474.656C422.42 477.875 419.389 480 415.998 480Z" })
  }
));
WThin.displayName = "WThin";
var W_default = WThin;
