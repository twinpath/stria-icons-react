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
var Avocado_exports = {};
__export(Avocado_exports, {
  default: () => Avocado_default
});
module.exports = __toCommonJS(Avocado_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AvocadoSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512.001 142.318C512.001 70.266 455.556 -0.001 371.465 -0.001C332.26 -0.001 292.749 15.736 263.407 45.174L263.241 45.34C232.204 76.479 192.977 97.303 150.633 108.908C115.363 118.576 0 170.828 0 306.706C0 420.114 92.354 511.999 205.063 511.999C257.432 511.999 309.8 491.957 349.754 451.871C417.403 384.008 392.312 321.854 465.737 248.189L470.094 243.818C498.032 215.79 512.001 179.054 512.001 142.318ZM319.499 264.66C319.499 325.396 260.868 383.999 200.423 383.999C145.91 383.999 127.929 340.414 127.929 311.341C127.929 250.588 186.565 191.999 247.001 191.999C301.517 191.999 319.499 235.586 319.499 264.66Z" })
  }
));
AvocadoSolid.displayName = "AvocadoSolid";
var Avocado_default = AvocadoSolid;
