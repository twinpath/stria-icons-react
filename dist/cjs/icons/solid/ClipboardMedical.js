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
var ClipboardMedical_exports = {};
__export(ClipboardMedical_exports, {
  default: () => ClipboardMedical_default
});
module.exports = __toCommonJS(ClipboardMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClipboardMedicalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 64H282.121C268.896 26.799 233.738 0 192 0S115.104 26.799 101.879 64H48C21.5 64 0 85.484 0 112V464C0 490.516 21.5 512 48 512H336C362.5 512 384 490.516 384 464V112C384 85.484 362.5 64 336 64ZM192 64C209.674 64 224 78.326 224 96C224 113.672 209.674 128 192 128S160 113.672 160 96C160 78.326 174.326 64 192 64ZM288 336C288 344.799 280.801 352 272 352H224V400C224 408.799 216.801 416 208 416H176C167.199 416 160 408.799 160 400V352H112C103.199 352 96 344.799 96 336V304C96 295.199 103.199 288 112 288H160V240C160 231.199 167.199 224 176 224H208C216.801 224 224 231.199 224 240V288H272C280.801 288 288 295.199 288 304V336Z" })
  }
));
ClipboardMedicalSolid.displayName = "ClipboardMedicalSolid";
var ClipboardMedical_default = ClipboardMedicalSolid;
