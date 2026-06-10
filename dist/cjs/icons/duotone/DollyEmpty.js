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
var DollyEmpty_exports = {};
__export(DollyEmpty_exports, {
  default: () => DollyEmpty_default
});
module.exports = __toCommonJS(DollyEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DollyEmptyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 320C201.6 320 160 361.6 160 416S201.6 512 256 512C310.398 512 352 470.4 352 416S310.398 320 256 320ZM256 448C236.799 448 224 435.199 224 416S236.799 384 256 384C275.199 384 288 396.801 288 416S275.199 448 256 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M196.869 340.029L104.867 64H15.999C7.249 64 0 56.75 0 48V16C0 7.25 7.249 0 15.999 0H127.99C141.739 0 153.988 8.75 158.363 21.875L257.73 320.125C258.064 320.133 258.364 320.246 258.698 320.256C257.784 320.232 256.947 320 256.025 320C233.277 320 213.034 327.586 196.869 340.029ZM575.205 326.375L564.956 296C562.206 287.625 553.082 283.125 544.707 285.875L332.009 356.863C344.442 373.025 352.017 393.262 352.017 416C352.017 416.588 351.863 417.123 351.853 417.707L565.081 346.625C573.33 343.75 577.955 334.75 575.205 326.375Z" })
    ]
  }
));
DollyEmptyDuotone.displayName = "DollyEmptyDuotone";
var DollyEmpty_default = DollyEmptyDuotone;
