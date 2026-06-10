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
var Blender_exports = {};
__export(Blender_exports, {
  default: () => Blender_default
});
module.exports = __toCommonJS(Blender_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlenderRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M425.875 330L512 0H48C21.5 0 0 21.5 0 48V208C0 234.5 21.5 256 48 256H150.25L156.375 327C121 341.125 96 375.625 96 416V480C96 497.625 110.375 512 128 512H448C465.625 512 480 497.625 480 480V416C480 378.125 457.875 345.625 425.875 330ZM48 208V48H132.125L146.125 208H48ZM449.875 48L437.375 96H304C295.2 96 288 103.2 288 112V112C288 120.8 295.2 128 304 128H429L412.25 192H304C295.2 192 288 199.2 288 208V208C288 216.8 295.2 224 304 224H404L378.875 320H204L180.375 48H449.875ZM432 464H144V416C144 389.5 165.5 368 192 368H384C410.5 368 432 389.5 432 416V464ZM288 392C274.75 392 264 402.75 264 416S274.75 440 288 440S312 429.25 312 416S301.25 392 288 392Z" })
  }
));
BlenderRegular.displayName = "BlenderRegular";
var Blender_default = BlenderRegular;
