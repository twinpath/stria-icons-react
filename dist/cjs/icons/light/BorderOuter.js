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
var BorderOuter_exports = {};
__export(BorderOuter_exports, {
  default: () => BorderOuter_default
});
module.exports = __toCommonJS(BorderOuter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BorderOuterLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 328C210.746 328 200 338.744 200 352C200 365.254 210.746 376 224 376S248 365.254 248 352C248 338.744 237.254 328 224 328ZM128 232C114.746 232 104 242.744 104 256C104 269.254 114.746 280 128 280S152 269.254 152 256C152 242.744 141.254 232 128 232ZM224 232C210.746 232 200 242.744 200 256C200 269.254 210.746 280 224 280S248 269.254 248 256C248 242.744 237.254 232 224 232ZM320 232C306.746 232 296 242.744 296 256C296 269.254 306.746 280 320 280S344 269.254 344 256C344 242.744 333.254 232 320 232ZM224 136C210.746 136 200 146.744 200 160C200 173.254 210.746 184 224 184S248 173.254 248 160C248 146.744 237.254 136 224 136ZM400 32H48C21.492 32 0 53.49 0 80V432C0 458.51 21.492 480 48 480H400C426.508 480 448 458.51 448 432V80C448 53.49 426.508 32 400 32ZM416 432C416 440.822 408.824 448 400 448H48C39.176 448 32 440.822 32 432V80C32 71.178 39.176 64 48 64H400C408.824 64 416 71.178 416 80V432Z" })
  }
));
BorderOuterLight.displayName = "BorderOuterLight";
var BorderOuter_default = BorderOuterLight;
