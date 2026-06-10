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
const H1Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 416H496V80C496 74.469 493.125 69.312 488.406 66.375C483.672 63.469 477.797 63.219 472.844 65.688L408.844 97.688C400.938 101.656 397.734 111.25 401.688 119.156C405.656 127.031 415.234 130.281 423.156 126.312L464 105.875V416H400C391.156 416 384 423.156 384 432S391.156 448 400 448H560C568.844 448 576 440.844 576 432S568.844 416 560 416ZM304 64C295.156 64 288 71.156 288 80V240H32V80C32 71.156 24.844 64 16 64S0 71.156 0 80V432C0 440.844 7.156 448 16 448S32 440.844 32 432V272H288V432C288 440.844 295.156 448 304 448S320 440.844 320 432V80C320 71.156 312.844 64 304 64Z" })
  }
));
H1Light.displayName = "H1Light";
var H1_default = H1Light;
