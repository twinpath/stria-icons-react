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
var WifiExclamation_exports = {};
__export(WifiExclamation_exports, {
  default: () => WifiExclamation_default
});
module.exports = __toCommonJS(WifiExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WifiExclamationThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.645 384C293.15 384 271.668 405.492 271.668 432S293.15 480 319.645 480S367.621 458.508 367.621 432S346.139 384 319.645 384ZM319.645 464C302.012 464 287.668 449.645 287.668 432S302.012 400 319.645 400S351.621 414.355 351.621 432S337.277 464 319.645 464ZM319.656 336C324.062 336 327.656 332.406 327.656 328V40C327.656 35.594 324.062 32 319.656 32S311.656 35.594 311.656 40V328C311.656 332.406 315.25 336 319.656 336ZM2 174.746C5.125 177.875 10.188 177.875 13.312 174.746C81.467 106.574 166.939 66.883 255.656 53.816V37.703C162.805 50.875 73.256 92.125 2 163.43C-1.125 166.555 -1.125 171.617 2 174.746ZM120.875 285.562C124 288.687 129.062 288.687 132.187 285.562C166.68 251.047 209.449 228.68 255.656 217.383V200.312C205.123 212.008 158.465 236.625 120.875 274.246C117.75 277.371 117.75 282.438 120.875 285.562ZM383.656 200.312V217.383C429.863 228.68 472.633 251.047 507.125 285.562C508.687 287.125 510.719 287.906 512.781 287.906S516.875 287.125 518.437 285.562C521.562 282.438 521.562 277.371 518.437 274.246C480.848 236.625 434.189 212.008 383.656 200.312ZM637.312 163.43C566.057 92.125 476.508 50.875 383.656 37.703V53.816C472.373 66.883 557.846 106.574 626 174.746C627.562 176.309 629.594 177.09 631.656 177.09S635.75 176.309 637.312 174.746C640.438 171.617 640.438 166.555 637.312 163.43Z" })
  }
));
WifiExclamationThin.displayName = "WifiExclamationThin";
var WifiExclamation_default = WifiExclamationThin;
