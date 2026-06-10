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
const RulerCombinedThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 304H208V48C208 21.6 186.4 0 160 0H48C21.6 0 0 21.6 0 48V464C0 490.4 21.6 512 48 512H464C490.4 512 512 490.4 512 464V352C512 325.6 490.4 304 464 304ZM496 464C496 481.645 481.645 496 464 496H48C30.355 496 16 481.645 16 464V48C16 30.355 30.355 16 48 16H160C177.645 16 192 30.355 192 48V112H104C99.578 112 96 115.594 96 120S99.578 128 104 128H192V208H104C99.578 208 96 211.594 96 216S99.578 224 104 224H192V304H104C99.578 304 96 307.594 96 312S99.578 320 104 320H192V408C192 412.406 195.578 416 200 416S208 412.406 208 408V320H288V408C288 412.406 291.578 416 296 416S304 412.406 304 408V320H384V408C384 412.406 387.578 416 392 416S400 412.406 400 408V320H464C481.645 320 496 334.355 496 352V464Z" })
  }
));
RulerCombinedThin.displayName = "RulerCombinedThin";
var RulerCombined_default = RulerCombinedThin;
