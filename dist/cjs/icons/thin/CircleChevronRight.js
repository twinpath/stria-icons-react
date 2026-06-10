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
var CircleChevronRight_exports = {};
__export(CircleChevronRight_exports, {
  default: () => CircleChevronRight_default
});
module.exports = __toCommonJS(CircleChevronRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleChevronRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 256C496 123.453 388.549 16 256 16S16 123.453 16 256S123.451 496 256 496S496 388.547 496 256ZM32 256C32 132.486 132.486 32 256 32S480 132.486 480 256S379.514 480 256 480S32 379.514 32 256ZM341.453 261.857C344.703 258.857 344.703 253.17 341.453 250.17L221.453 138.17C218.234 135.139 213.172 135.326 210.156 138.545C207.156 141.795 207.297 146.826 210.547 149.857L324.281 256.014L210.547 362.17C208.859 363.732 208 365.889 208 368.014C208 369.982 208.719 371.92 210.156 373.482C213.172 376.701 218.234 376.889 221.453 373.857L341.453 261.857Z" })
  }
));
CircleChevronRightThin.displayName = "CircleChevronRightThin";
var CircleChevronRight_default = CircleChevronRightThin;
