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
const CropDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 109.25L502.628 54.622C515.124 42.126 515.124 21.867 502.628 9.372L502.628 9.372C490.133 -3.124 469.874 -3.124 457.378 9.372L402.75 64H424C437.25 64 448 74.75 448 88V109.25ZM160 306.75V24C160 10.75 149.25 0 136 0H88C74.75 0 64 10.75 64 24V424C64 437.25 74.75 448 88 448H320V352H205.25L352 205.25V160H306.75L160 306.75ZM488 354.383H448V450.383H488C501.25 450.383 512 439.633 512 426.383V378.383C512 365.133 501.25 354.383 488 354.383Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 88V136C0 149.25 10.75 160 24 160H64V64H24C10.75 64 0 74.75 0 88ZM424 64H192V160H352V488C352 501.25 362.75 512 376 512H424C437.25 512 448 501.25 448 488V88C448 74.75 437.25 64 424 64Z" })
    ]
  }
));
CropDuotone.displayName = "CropDuotone";
var Crop_default = CropDuotone;
