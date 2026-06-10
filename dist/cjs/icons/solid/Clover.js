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
var Clover_exports = {};
__export(Clover_exports, {
  default: () => Clover_default
});
module.exports = __toCommonJS(Clover_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloverSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 302.338C512 337.63 483.011 366.245 447.719 366.245C408.895 366.245 359.017 343.495 325.32 325.32C343.495 359.019 366.245 408.895 366.245 447.719C366.245 483.011 337.63 511.626 302.338 511.626C284.24 511.626 267.889 504.105 256.25 491.998C244.61 504.324 228.041 512 209.662 512C174.37 512 145.755 483.011 145.755 447.719C145.755 408.895 168.505 359.019 186.68 325.32C152.981 343.495 103.105 366.245 64.281 366.245C28.989 366.245 0.374 337.63 0.374 302.338C0.374 284.24 7.895 267.889 20.002 256.25C7.676 244.61 0 228.041 0 209.662C0 174.37 28.989 145.755 64.281 145.755C103.105 145.755 152.981 168.505 186.68 186.68C168.505 152.983 145.755 103.105 145.755 64.281C145.755 28.989 174.37 0.374 209.662 0.374C227.76 0.374 244.111 7.895 255.75 20.002C267.39 7.676 283.959 0 302.338 0C337.63 0 366.245 28.989 366.245 64.281C366.245 103.105 343.495 152.983 325.32 186.68C359.017 168.505 408.895 145.755 447.719 145.755C483.011 145.755 511.626 174.37 511.626 209.662C511.626 227.76 504.105 244.111 491.998 255.75C504.324 267.39 512 283.959 512 302.338Z" })
  }
));
CloverSolid.displayName = "CloverSolid";
var Clover_default = CloverSolid;
