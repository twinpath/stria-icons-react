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
var Bed_exports = {};
__export(Bed_exports, {
  default: () => Bed_default
});
module.exports = __toCommonJS(Bed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 128H272C263.164 128 256 135.164 256 144V320H32V48C32 39.199 24.801 32 16 32S0 39.199 0 48V464C0 472.801 7.199 480 16 480S32 472.801 32 464V416H608V464C608 472.801 615.199 480 624 480S640 472.801 640 464V240C640 178.145 589.855 128 528 128ZM608 384H32V352H608V384ZM608 320H288V160H528C572.125 160 608 195.875 608 240V320ZM144 288C188.125 288 224 252.125 224 208S188.125 128 144 128S64 163.875 64 208S99.875 288 144 288ZM144 160C170.5 160 192 181.5 192 208S170.5 256 144 256S96 234.5 96 208S117.5 160 144 160Z" })
  }
));
BedLight.displayName = "BedLight";
var Bed_default = BedLight;
