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
var Receipt_exports = {};
__export(Receipt_exports, {
  default: () => Receipt_default
});
module.exports = __toCommonJS(Receipt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReceiptDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M390.375 3.288L352 48.032L297.625 3.288C291.875 -1.086 284.125 -1.086 278.375 3.288L224 48.032L169.625 3.288C163.875 -1.086 156.125 -1.086 150.375 3.288L96 48.032L57.625 3.288C47 -4.71 32 2.788 32 16.036V495.964C32 509.212 47 516.71 57.625 508.712L96 463.968L150.375 508.712C156.125 513.086 163.875 513.086 169.625 508.712L224 463.968L278.375 508.712C284.125 513.086 291.875 513.086 297.625 508.712L352 463.968L390.375 508.712C400.875 516.71 416 509.212 416 495.964V16.036C416 2.788 401 -4.71 390.375 3.288ZM336 367.944H112C103.164 367.944 96 360.781 96 351.946C96 343.11 103.164 335.949 112 335.949H336C344.838 335.949 352 343.11 352 351.946C352 360.781 344.838 367.944 336 367.944ZM336 271.959H112C103.164 271.959 96 264.796 96 255.961C96 247.124 103.164 239.963 112 239.963H336C344.838 239.963 352 247.124 352 255.961C352 264.796 344.838 271.959 336 271.959ZM336 175.973H112C103.164 175.973 96 168.81 96 159.976C96 151.139 103.164 143.978 112 143.978H336C344.838 143.978 352 151.139 352 159.976C352 168.81 344.838 175.973 336 175.973Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 335.949H112C103.164 335.949 96 343.11 96 351.946C96 360.781 103.164 367.944 112 367.944H336C344.838 367.944 352 360.781 352 351.946C352 343.11 344.838 335.949 336 335.949ZM112 175.973H336C344.838 175.973 352 168.81 352 159.976C352 151.139 344.838 143.978 336 143.978H112C103.164 143.978 96 151.139 96 159.976C96 168.81 103.164 175.973 112 175.973ZM336 239.963H112C103.164 239.963 96 247.124 96 255.961C96 264.796 103.164 271.959 112 271.959H336C344.838 271.959 352 264.796 352 255.961C352 247.124 344.838 239.963 336 239.963Z" })
    ]
  }
));
ReceiptDuotone.displayName = "ReceiptDuotone";
var Receipt_default = ReceiptDuotone;
