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
var CodeSimple_exports = {};
__export(CodeSimple_exports, {
  default: () => CodeSimple_default
});
module.exports = __toCommonJS(CodeSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeSimpleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M186.767 68.156C180.251 62.25 170.111 62.656 164.158 69.25L4.16 245.25C-1.387 251.344 -1.387 260.656 4.16 266.75L164.158 442.75C167.314 446.25 171.658 448 176.002 448C179.845 448 183.705 446.625 186.767 443.844C193.298 437.906 193.783 427.781 187.845 421.25L37.628 256L187.845 90.75C193.783 84.219 193.298 74.094 186.767 68.156ZM571.84 245.25L411.842 69.25C405.889 62.656 395.78 62.25 389.233 68.156C382.702 74.094 382.217 84.219 388.155 90.75L538.372 256L388.155 421.25C382.217 427.781 382.702 437.906 389.233 443.844C392.295 446.625 396.155 448 399.998 448C404.342 448 408.686 446.25 411.842 442.75L571.84 266.75C577.387 260.656 577.387 251.344 571.84 245.25Z" })
  }
));
CodeSimpleLight.displayName = "CodeSimpleLight";
var CodeSimple_default = CodeSimpleLight;
