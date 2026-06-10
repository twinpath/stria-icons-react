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
var Dolly_exports = {};
__export(Dolly_exports, {
  default: () => Dolly_default
});
module.exports = __toCommonJS(Dolly_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DollyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 320C201.6 320 160 361.6 160 416S201.6 512 256 512C310.398 512 352 470.4 352 416S310.398 320 256 320ZM256.045 448C236.844 448 224.045 435.199 224.045 416S236.844 384 256.045 384C275.244 384 288.045 396.801 288.045 416S275.244 448 256.045 448ZM515.205 228.375L454.83 47.25C452.08 38.75 442.955 34.25 434.705 37.125L373.58 57.5L406.705 156.875L345.955 177L312.83 77.625L251.205 98.125C242.83 100.875 238.33 110 241.205 118.25L294.205 277.75C312.205 282.75 328.83 291.125 343.705 302.375L505.205 248.625C513.58 245.75 518.08 236.75 515.205 228.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M158.363 21.875C153.988 8.75 141.738 0 127.99 0H15.998C7.25 0 0 7.25 0 16V48C0 56.75 7.25 64 15.998 64H104.867L196.869 340.029C213.033 327.586 233.277 320 256.025 320C256.947 320 257.785 320.232 258.699 320.256C258.365 320.246 258.064 320.133 257.73 320.125L158.363 21.875ZM575.205 326.375L564.955 296C562.205 287.625 553.082 283.125 544.707 285.875L332.01 356.863C344.441 373.025 352.018 393.262 352.018 416C352.018 416.588 351.863 417.123 351.854 417.707L565.08 346.625C573.33 343.75 577.955 334.75 575.205 326.375ZM406.705 156.875L373.58 57.5L312.83 77.625L345.955 177L406.705 156.875Z" })
    ]
  }
));
DollyDuotone.displayName = "DollyDuotone";
var Dolly_default = DollyDuotone;
