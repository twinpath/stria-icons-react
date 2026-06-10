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
var PresentationScreen_exports = {};
__export(PresentationScreen_exports, {
  default: () => PresentationScreen_default
});
module.exports = __toCommonJS(PresentationScreen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PresentationScreenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 304H80V80H32V320C32 337.602 46.4 352 64 352H264V399.016L192 471.016C182.646 480.367 182.646 495.535 192 504.891L192.006 504.895C201.354 514.242 216.508 514.25 225.865 504.91L288 442.891L350.094 504.984C359.484 514.375 374.723 514.332 384.062 504.891C393.363 495.484 393.32 480.336 383.969 470.984L312 399.016V352H512C529.6 352 544 337.602 544 320V80H496V304ZM552.045 0H23.955C10.725 0 0 10.727 0 23.953V24.047C0 37.273 10.725 48 23.955 48H552.045C565.275 48 576 37.273 576 24.047V23.953C576 10.727 565.275 0 552.045 0Z" })
  }
));
PresentationScreenRegular.displayName = "PresentationScreenRegular";
var PresentationScreen_default = PresentationScreenRegular;
