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
var ArrowsUpDown_exports = {};
__export(ArrowsUpDown_exports, {
  default: () => ArrowsUpDown_default
});
module.exports = __toCommonJS(ArrowsUpDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsUpDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M122.223 507.313L18.394 411.313C15.202 408.188 15.202 403.125 18.394 400S26.756 396.875 29.948 400L119.829 482.344V24.969L29.948 107.313C26.756 110.437 21.586 110.437 18.394 107.313C16.798 105.75 16 103.719 16 101.656S16.798 97.563 18.394 96L122.223 0C125.415 -3.125 130.585 -3.125 133.777 0L237.606 96C240.798 99.125 240.798 104.188 237.606 107.313C234.414 110.437 229.244 110.437 226.052 107.313L136.171 24.969V482.344L226.052 400C229.244 396.875 234.414 396.875 237.606 400C239.202 401.563 240 403.594 240 405.656S239.202 409.75 237.606 411.313L133.777 507.313C130.585 510.438 125.415 510.438 122.223 507.313Z" })
  }
));
ArrowsUpDownThin.displayName = "ArrowsUpDownThin";
var ArrowsUpDown_default = ArrowsUpDownThin;
