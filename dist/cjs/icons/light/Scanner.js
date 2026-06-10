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
var Scanner_exports = {};
__export(Scanner_exports, {
  default: () => Scanner_default
});
module.exports = __toCommonJS(Scanner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScannerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M531.781 271.998L55.156 33.684C47.234 29.746 37.656 32.949 33.688 40.84C29.734 48.746 32.938 58.355 40.844 62.309L492.219 287.998H64C28.652 287.998 0 316.652 0 351.998V415.998C0 451.346 28.652 480 64 480H512C547.346 480 576 451.346 576 415.998V343.545C576 313.061 559.062 285.654 531.781 271.998ZM544 415.998C544 433.645 529.645 448 512 448H64C46.355 448 32 433.645 32 415.998V351.998C32 334.354 46.355 319.998 64 319.998H512C529.645 319.998 544 334.354 544 351.998V415.998ZM96 359.998C82.744 359.998 72 370.744 72 383.998C72 397.254 82.744 407.998 96 407.998C109.254 407.998 120 397.254 120 383.998C120 370.744 109.254 359.998 96 359.998ZM192 359.998C178.744 359.998 168 370.744 168 383.998C168 397.254 178.744 407.998 192 407.998C205.254 407.998 216 397.254 216 383.998C216 370.744 205.254 359.998 192 359.998Z" })
  }
));
ScannerLight.displayName = "ScannerLight";
var Scanner_default = ScannerLight;
