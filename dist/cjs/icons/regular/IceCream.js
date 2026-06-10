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
var IceCream_exports = {};
__export(IceCream_exports, {
  default: () => IceCream_default
});
module.exports = __toCommonJS(IceCream_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IceCreamRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 208.067C448 169.275 419.915 135.642 380.951 129.25C366.694 55.625 301.913 0 224 0S81.306 55.625 67.049 129.25C28.085 135.642 0 169.275 0 208.067C0 264.402 48.942 288 79.93 288H80.931L173.726 480.125C182.855 499.625 202.49 512 224 512S264.77 499.75 274.274 480.125L367.069 288H368.07C398.59 288 448 264.462 448 208.067ZM231.003 459.25C229.127 463.188 226.564 465.156 224 465.156S218.873 463.188 216.997 459.25L134.207 288H313.793L231.003 459.25ZM368.07 240H79.93C62.297 240 47.915 225.625 47.915 208C47.915 192.375 59.295 179.125 74.803 176.625L107.819 171.25L114.197 138.5C124.452 85.875 170.474 48 224 48S323.673 85.875 333.803 138.5L340.306 171.25L373.322 176.625C388.705 179.125 400.085 192.375 400.085 208C400.085 225.625 385.703 240 368.07 240Z " })
  }
));
IceCreamRegular.displayName = "IceCreamRegular";
var IceCream_default = IceCreamRegular;
