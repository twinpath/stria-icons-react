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
var Acorn_exports = {};
__export(Acorn_exports, {
  default: () => Acorn_default
});
module.exports = __toCommonJS(Acorn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AcornRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.996 160C447.977 107.014 404.99 64.039 352 64.039H255.805C259.504 57.008 264.84 49.098 272.969 40.969C282.344 31.594 282.344 16.406 272.969 7.031S248.406 -2.344 239.031 7.031C218.277 27.785 208.736 48.574 204.182 64.039H96C43.01 64.039 0.023 107.014 0.004 160H0V192C0 209.672 14.326 224 32 224H48C48 397.873 176.953 457.133 224 480C257.041 463.941 400 409.123 400 224H416C433.674 224 448 209.672 448 192V160H447.996ZM224 426.631C135.051 383.398 96 302.297 96 224H352C352 298.789 316.713 381.566 224 426.631ZM400 176H48.002L48.004 160.018C48.014 133.562 69.545 112.039 96 112.039H352C378.455 112.039 399.988 133.562 400 160V176Z" })
  }
));
AcornRegular.displayName = "AcornRegular";
var Acorn_default = AcornRegular;
