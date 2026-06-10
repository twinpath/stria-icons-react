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
var RulerVertical_exports = {};
__export(RulerVertical_exports, {
  default: () => RulerVertical_default
});
module.exports = __toCommonJS(RulerVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerVerticalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 0H48C21.6 0 0 21.6 0 48V464C0 490.4 21.6 512 48 512H208C234.4 512 256 490.4 256 464V48C256 21.6 234.4 0 208 0ZM240 104H160C155.594 104 152 107.578 152 112S155.594 120 160 120H240V200H160C155.594 200 152 203.578 152 208S155.594 216 160 216H240V296H160C155.594 296 152 299.578 152 304S155.594 312 160 312H240V392H160C155.594 392 152 395.578 152 400S155.594 408 160 408H240V464C240 481.645 225.645 496 208 496H48C30.355 496 16 481.645 16 464V48C16 30.355 30.355 16 48 16H208C225.645 16 240 30.355 240 48V104Z" })
  }
));
RulerVerticalThin.displayName = "RulerVerticalThin";
var RulerVertical_default = RulerVerticalThin;
