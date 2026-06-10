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
var PaperPlaneTop_exports = {};
__export(PaperPlaneTop_exports, {
  default: () => PaperPlaneTop_default
});
module.exports = __toCommonJS(PaperPlaneTop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaperPlaneTopRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M492.594 226.594L44.596 34.594C40.537 32.848 36.26 32 32.019 32C23.396 32 14.922 35.5 8.721 42.047C-0.498 51.812 -2.623 66.297 3.377 78.312L96 256L3.377 433.688C-2.623 445.703 -0.498 460.188 8.721 469.953C14.908 476.5 23.377 480 32.002 480C36.252 480 40.533 479.156 44.596 477.406L492.594 285.406C504.375 280.375 512 268.797 512 256S504.375 231.625 492.594 226.594ZM66.92 96.383L383.355 232H137.619L66.92 96.383ZM137.619 280H383.355L66.93 415.613L137.619 280Z" })
  }
));
PaperPlaneTopRegular.displayName = "PaperPlaneTopRegular";
var PaperPlaneTop_default = PaperPlaneTopRegular;
