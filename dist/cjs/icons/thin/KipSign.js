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
var KipSign_exports = {};
__export(KipSign_exports, {
  default: () => KipSign_default
});
module.exports = __toCommonJS(KipSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KipSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 256C384 260.406 380.406 264 376 264H117.373L349.25 465.969C352.594 468.875 352.938 473.937 350.031 477.25C348.438 479.062 346.219 480 344 480C342.125 480 340.25 479.344 338.75 478.031L104 273.572V472C104 476.406 100.406 480 96 480S88 476.406 88 472V264H8C3.594 264 0 260.406 0 256S3.594 248 8 248H88V40C88 35.594 91.594 32 96 32S104 35.594 104 40V238.428L338.75 33.969C342.031 31.094 347.094 31.406 350.031 34.75C352.938 38.062 352.594 43.125 349.25 46.031L117.373 248H376C380.406 248 384 251.594 384 256Z" })
  }
));
KipSignThin.displayName = "KipSignThin";
var KipSign_default = KipSignThin;
