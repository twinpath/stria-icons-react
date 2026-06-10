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
var FaceGrimace_exports = {};
__export(FaceGrimace_exports, {
  default: () => FaceGrimace_default
});
module.exports = __toCommonJS(FaceGrimace_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceGrimaceThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 222.648C184.844 222.648 192 215.5 192 206.648S184.844 190.648 176 190.648S160 197.797 160 206.648S167.156 222.648 176 222.648ZM352 304H160C142.326 304 128 318.328 128 336V368C128 385.672 142.326 400 160 400H352C369.674 400 384 385.672 384 368V336C384 318.328 369.674 304 352 304ZM184 384H160C151.178 384 144 376.824 144 368V336C144 327.176 151.178 320 160 320H184V384ZM248 384H200V320H248V384ZM312 384H264V320H312V384ZM368 368C368 376.824 360.822 384 352 384H328V320H352C360.822 320 368 327.176 368 336V368ZM336 222.648C344.844 222.648 352 215.5 352 206.648S344.844 190.648 336 190.648S320 197.797 320 206.648S327.156 222.648 336 222.648ZM256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480Z" })
  }
));
FaceGrimaceThin.displayName = "FaceGrimaceThin";
var FaceGrimace_default = FaceGrimaceThin;
