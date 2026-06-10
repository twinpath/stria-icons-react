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
var Hospital_exports = {};
__export(Hospital_exports, {
  default: () => Hospital_default
});
module.exports = __toCommonJS(Hospital_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HospitalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 384C156.717 384.051 128 412.475 128 447.861V495.953C128 504.777 135.199 512 144 512S160 504.777 160 495.953V447.861C160 430.258 174.451 416.604 192 416.561C209.549 416.604 224 430.258 224 447.861V495.953C224 504.777 231.199 512 240 512S256 504.777 256 495.953V447.861C256 412.475 227.283 384.051 192 384ZM245.334 106.666H213.334V74.666C213.334 68.773 208.557 64 202.666 64H181.334C175.443 64 170.666 68.773 170.666 74.666V106.666H138.666C132.775 106.666 128 111.441 128 117.332V138.666C128 144.557 132.775 149.332 138.666 149.332H170.666V181.332C170.666 187.223 175.443 192 181.334 192H202.666C208.557 192 213.334 187.223 213.334 181.332V149.332H245.334C251.225 149.332 256 144.557 256 138.666V117.332C256 111.441 251.225 106.666 245.334 106.666ZM320 0H64C28.654 0 0 28.652 0 64V496C0 504.836 7.164 512 16 512S32 504.836 32 496V352H352V496C352 504.836 359.164 512 368 512S384 504.836 384 496V64C384 28.652 355.346 0 320 0ZM352 320H32V256H352V320ZM352 224H32V64C32 46.326 46.326 32 64 32H320C337.674 32 352 46.326 352 64V224Z" })
  }
));
HospitalLight.displayName = "HospitalLight";
var Hospital_default = HospitalLight;
