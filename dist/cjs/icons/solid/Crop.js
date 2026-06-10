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
var Crop_exports = {};
__export(Crop_exports, {
  default: () => Crop_default
});
module.exports = __toCommonJS(Crop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CropSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 376V424C512 437.255 501.255 448 488 448H448V488C448 501.255 437.255 512 424 512H376C362.745 512 352 501.255 352 488V205.25L205.25 352H320V448H88C74.745 448 64 437.255 64 424V160H24C10.745 160 0 149.255 0 136V88C0 74.745 10.745 64 24 64H64V24C64 10.745 74.745 0 88 0H136C149.255 0 160 10.745 160 24V306.75L306.75 160H192V64H402.75L457.378 9.372C469.874 -3.124 490.133 -3.124 502.628 9.372L502.628 9.372C515.124 21.867 515.124 42.126 502.628 54.622L448 109.25V352H488C501.255 352 512 362.745 512 376Z" })
  }
));
CropSolid.displayName = "CropSolid";
var Crop_default = CropSolid;
