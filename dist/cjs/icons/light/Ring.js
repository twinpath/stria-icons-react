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
var Ring_exports = {};
__export(Ring_exports, {
  default: () => Ring_default
});
module.exports = __toCommonJS(Ring_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64C87.875 64 0 128.375 0 192V306.125C0 384.5 114.625 448 256 448S512 384.5 512 306.125V192C512 128.375 424.125 64 256 64ZM480 306.125C480 358.125 388 416 256 416S32 358.125 32 306.125V256C71.375 292.625 146.5 320 256 320S440.625 292.625 480 256V306.125ZM89.375 256C130.25 236.375 189.75 224 256 224S381.75 236.375 422.625 256C381.625 275.625 322.25 288 256 288S130.375 275.625 89.375 256ZM454.25 236.625C411.25 210.25 345 192 256 192S100.75 210.25 57.75 236.625C41.375 223.375 32 208.125 32 192C32 139 132.25 96 256 96S480 139 480 192C480 208.125 470.625 223.375 454.25 236.625Z" })
  }
));
RingLight.displayName = "RingLight";
var Ring_default = RingLight;
