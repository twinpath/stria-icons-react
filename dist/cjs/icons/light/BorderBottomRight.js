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
var BorderBottomRight_exports = {};
__export(BorderBottomRight_exports, {
  default: () => BorderBottomRight_default
});
module.exports = __toCommonJS(BorderBottomRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BorderBottomRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 88C141.254 88 152 77.254 152 64C152 50.744 141.254 40 128 40S104 50.744 104 64C104 77.254 114.746 88 128 88ZM32 88C45.254 88 56 77.254 56 64C56 50.744 45.254 40 32 40S8 50.744 8 64C8 77.254 18.746 88 32 88ZM224 88C237.254 88 248 77.254 248 64C248 50.744 237.254 40 224 40S200 50.744 200 64C200 77.254 210.746 88 224 88ZM320 88C333.254 88 344 77.254 344 64C344 50.744 333.254 40 320 40S296 50.744 296 64C296 77.254 306.746 88 320 88ZM32 184C45.254 184 56 173.254 56 160C56 146.744 45.254 136 32 136S8 146.744 8 160C8 173.254 18.746 184 32 184ZM32 376C45.254 376 56 365.254 56 352C56 338.744 45.254 328 32 328S8 338.744 8 352C8 365.254 18.746 376 32 376ZM32 280C45.254 280 56 269.254 56 256C56 242.744 45.254 232 32 232S8 242.744 8 256C8 269.254 18.746 280 32 280ZM432 32C423.164 32 416 39.164 416 48V432C416 440.836 408.836 448 400 448H16C7.164 448 0 455.164 0 464S7.164 480 16 480H400C426.51 480 448 458.51 448 432V48C448 39.164 440.836 32 432 32Z" })
  }
));
BorderBottomRightLight.displayName = "BorderBottomRightLight";
var BorderBottomRight_default = BorderBottomRightLight;
