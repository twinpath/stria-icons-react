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
var WindowFrameOpen_exports = {};
__export(WindowFrameOpen_exports, {
  default: () => WindowFrameOpen_default
});
module.exports = __toCommonJS(WindowFrameOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindowFrameOpenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 496H480V328C480 323.594 476.406 320 472 320S464 323.594 464 328V496H48V328C48 323.594 44.406 320 40 320S32 323.594 32 328V496H8C3.594 496 0 499.594 0 504S3.594 512 8 512H504C508.406 512 512 508.406 512 504S508.406 496 504 496ZM40 288H472C476.406 288 480 284.406 480 280V40C480 17.938 462.062 0 440 0H72C49.938 0 32 17.938 32 40V280C32 284.406 35.594 288 40 288ZM264 16H440C453.219 16 464 26.781 464 40V272H264V16ZM48 40C48 26.781 58.781 16 72 16H248V272H48V40Z" })
  }
));
WindowFrameOpenThin.displayName = "WindowFrameOpenThin";
var WindowFrameOpen_default = WindowFrameOpenThin;
