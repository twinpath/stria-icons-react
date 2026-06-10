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
var CameraSecurity_exports = {};
__export(CameraSecurity_exports, {
  default: () => CameraSecurity_default
});
module.exports = __toCommonJS(CameraSecurity_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraSecurityDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 112C170.965 112 128 154.963 128 208C128 261.035 170.965 304 224 304S320 261.035 320 208C320 154.963 277.035 112 224 112Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 0H64C28.625 0 0 28.625 0 64V352C0 387.375 28.625 416 64 416H136.75L76.5 450.875C69.625 455.125 64 465.25 64 473.375V485.375C64 500 76 512 90.75 512H357.375C372.125 512 384 500 384 485.375V473.5C384 465.25 378.375 455.125 371.375 450.875L311.25 416H384C419.375 416 448 387.375 448 352V64C448 28.625 419.375 0 384 0ZM224 336C153.223 336 96 278.666 96 208C96 137.332 153.334 80 224 80S352 137.332 352 208C352 278.666 294.666 336 224 336Z" })
    ]
  }
));
CameraSecurityDuotone.displayName = "CameraSecurityDuotone";
var CameraSecurity_default = CameraSecurityDuotone;
