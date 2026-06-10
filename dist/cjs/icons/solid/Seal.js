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
var Seal_exports = {};
__export(Seal_exports, {
  default: () => Seal_default
});
module.exports = __toCommonJS(Seal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SealSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.235 289.941L447.647 335.529V400C447.647 426.51 426.157 448 399.647 448H335.177L289.589 493.588C270.843 512.332 240.452 512.332 221.706 493.588L176.118 448H111.647C85.138 448 63.647 426.51 63.647 400V335.529L18.06 289.941C-0.687 271.195 -0.687 240.803 18.06 222.059L63.647 176.471V112C63.647 85.49 85.138 64 111.647 64H176.118L221.706 18.412C240.452 -0.334 270.843 -0.334 289.589 18.412L335.177 64H399.647C426.157 64 447.647 85.49 447.647 112V176.471L493.235 222.059C511.981 240.803 511.981 271.195 493.235 289.941Z" })
  }
));
SealSolid.displayName = "SealSolid";
var Seal_default = SealSolid;
