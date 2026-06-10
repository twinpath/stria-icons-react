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
var CameraWeb_exports = {};
__export(CameraWeb_exports, {
  default: () => CameraWeb_default
});
module.exports = __toCommonJS(CameraWeb_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraWebRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 96C157.727 96 104 149.725 104 216C104 282.273 157.727 336 224 336C290.275 336 344 282.273 344 216C344 149.725 290.275 96 224 96ZM224 288C184.299 288 152 255.701 152 216S184.299 144 224 144S296 176.299 296 216S263.701 288 224 288ZM347.75 392.881C403.477 353.818 440 289.221 440 216C440 96.707 343.295 0 224 0C104.707 0 8 96.707 8 216C8 289.221 44.523 353.818 100.25 392.881L37.125 473.172C31.469 480.391 30.406 490.219 34.406 498.484C38.438 506.75 46.812 512 56 512H392C401.188 512 409.562 506.75 413.594 498.484C417.594 490.219 416.531 480.391 410.875 473.172L347.75 392.881ZM105.406 464L143.018 416.158C168.043 426.295 195.34 432 224 432S279.957 426.295 304.982 416.158L342.594 464H105.406ZM224 384C131.365 384 56 308.635 56 216C56 123.363 131.365 48 224 48C316.637 48 392 123.363 392 216C392 308.635 316.637 384 224 384Z" })
  }
));
CameraWebRegular.displayName = "CameraWebRegular";
var CameraWeb_default = CameraWebRegular;
