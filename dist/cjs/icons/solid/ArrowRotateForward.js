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
var ArrowRotateForward_exports = {};
__export(ArrowRotateForward_exports, {
  default: () => ArrowRotateForward_default
});
module.exports = __toCommonJS(ArrowRotateForward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRotateForwardSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 47.996V192.004C496 200.844 492.42 208.844 486.631 214.633S472.842 224 464.004 224H319.996C302.326 224 288 209.676 288 192.004C288 174.336 302.324 160.008 319.994 160.008H383.83C383.828 160.008 383.826 160 383.824 160H383.943C353.941 120.094 306.754 96 256 96C167.781 96 96 167.781 96 256S167.781 416 256 416C290.969 416 324.156 404.938 351.969 384.031C369.562 370.75 394.656 374.313 407.969 391.969C421.25 409.625 417.687 434.688 400.031 447.969C358.25 479.406 308.469 496 256 496C123.656 496 16 388.344 16 256S123.656 16 256 16C323.773 16 387.141 44.789 432.008 93.305V47.992C432.008 30.324 446.332 16 464.002 16C481.674 16 496 30.324 496 47.996Z" })
  }
));
ArrowRotateForwardSolid.displayName = "ArrowRotateForwardSolid";
var ArrowRotateForward_default = ArrowRotateForwardSolid;
