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
var Stopwatch_exports = {};
__export(Stopwatch_exports, {
  default: () => Stopwatch_default
});
module.exports = __toCommonJS(Stopwatch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StopwatchThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384.082 171.23L421.656 133.656C424.781 130.531 424.781 125.469 421.656 122.344S413.469 119.219 410.344 122.344L373.311 159.375C337.242 122.148 287.412 98.516 232 96.406V16H288C292.422 16 296 12.406 296 8S292.422 0 288 0H160C155.578 0 152 3.594 152 8S155.578 16 160 16H216V96.406C104.863 100.641 16 191.828 16 304C16 418.875 109.125 512 224 512S432 418.875 432 304C432 253.516 413.994 207.254 384.082 171.23ZM224 496C118.131 496 32 409.867 32 304S118.131 112 224 112S416 198.133 416 304S329.869 496 224 496ZM224 184C219.578 184 216 187.594 216 192V320C216 324.406 219.578 328 224 328S232 324.406 232 320V192C232 187.594 228.422 184 224 184Z" })
  }
));
StopwatchThin.displayName = "StopwatchThin";
var Stopwatch_default = StopwatchThin;
