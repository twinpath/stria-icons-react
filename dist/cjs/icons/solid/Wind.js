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
var Wind_exports = {};
__export(Wind_exports, {
  default: () => Wind_default
});
module.exports = __toCommonJS(Wind_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 192H352C404.938 192 448 148.938 448 96S404.938 0 352 0H320C302.312 0 288 14.312 288 32S302.312 64 320 64H352C369.656 64 384 78.344 384 96S369.656 128 352 128H32C14.312 128 0 142.312 0 160S14.312 192 32 192ZM160 320H32C14.312 320 0 334.312 0 352S14.312 384 32 384H160C177.656 384 192 398.344 192 416S177.656 448 160 448H128C110.312 448 96 462.312 96 480S110.312 512 128 512H160C212.938 512 256 468.938 256 416S212.938 320 160 320ZM416 224H32C14.312 224 0 238.312 0 256S14.312 288 32 288H416C433.656 288 448 302.344 448 320S433.656 352 416 352H384C366.312 352 352 366.312 352 384S366.312 416 384 416H416C468.938 416 512 372.938 512 320S468.938 224 416 224Z" })
  }
));
WindSolid.displayName = "WindSolid";
var Wind_default = WindSolid;
