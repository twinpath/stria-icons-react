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
var RulerCombined_exports = {};
__export(RulerCombined_exports, {
  default: () => RulerCombined_default
});
module.exports = __toCommonJS(RulerCombined_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerCombinedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 352V480C512 497.6 497.6 512 480 512H32C14.4 512 0 497.6 0 480V32C0 14.4 14.4 0 32 0H160C177.6 0 192 14.4 192 32V96H112C103.201 96 96 103.199 96 112S103.201 128 112 128H192V192H112C103.201 192 96 199.199 96 208S103.201 224 112 224H192V288H112C103.201 288 96 295.199 96 304S103.201 320 112 320H192V400C192 408.799 199.199 416 208 416S224 408.799 224 400V320H288V400C288 408.799 295.199 416 304 416S320 408.799 320 400V320H384V400C384 408.799 391.199 416 400 416S416 408.799 416 400V320H480C497.6 320 512 334.4 512 352Z" })
  }
));
RulerCombinedSolid.displayName = "RulerCombinedSolid";
var RulerCombined_default = RulerCombinedSolid;
