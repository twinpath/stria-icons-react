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
var Bullhorn_exports = {};
__export(Bullhorn_exports, {
  default: () => Bullhorn_default
});
module.exports = __toCommonJS(Bullhorn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BullhornDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 448C480 457.219 472.906 480 448 480C441.812 480 432.844 476.844 428 472.969L342.969 404.937C308.684 377.529 267.264 360.574 224 354.734V125.266C267.264 119.426 308.689 102.471 343 75.062L428.031 7.031C433.812 2.375 440.875 0 448 0C473.031 0 480 23.25 480 32V448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 184.875V295.125C499.062 284.031 512 263.625 512 240S499.062 195.969 480 184.875ZM64 128C28.656 128 0 156.656 0 192V288C0 323.344 28.656 352 64 352H66.529C55.766 429.799 101.07 495.266 103.344 498.473C109.438 507.041 118.469 512 128 512H192C204.938 512 216.625 502.922 221.562 488.957C226.531 474.994 223.781 458.953 214.625 448.27C214.188 447.76 174.254 398.574 185.979 352H192C202.758 352 213.398 353.303 224 354.734V125.266C213.396 126.697 202.758 128 192 128H64Z" })
    ]
  }
));
BullhornDuotone.displayName = "BullhornDuotone";
var Bullhorn_default = BullhornDuotone;
