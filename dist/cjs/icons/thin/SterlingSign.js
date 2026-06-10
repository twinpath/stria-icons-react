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
var SterlingSign_exports = {};
__export(SterlingSign_exports, {
  default: () => SterlingSign_default
});
module.exports = __toCommonJS(SterlingSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SterlingSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 472C320 476.422 316.407 480 312 480H8C4.844 480 1.969 478.125 0.688 475.234S-0.062 468.969 2.094 466.625C52.313 411.344 80 339.766 80 265.078V256H8C3.594 256 0 252.422 0 248S3.594 240 8 240H80V129.484C80 75.734 123.719 32 177.469 32C188 32 198.375 33.688 208.313 37L290.532 64.406C294.719 65.812 297 70.344 295.594 74.531C294.188 78.734 289.688 81.047 285.469 79.594L203.25 52.187C194.938 49.406 186.25 48 177.469 48C132.563 48 96 84.547 96 129.484V240H248C252.407 240 256 243.578 256 248S252.407 256 248 256H96V265.078C96 337.859 71.063 407.828 25.407 464H312C316.407 464 320 467.578 320 472Z" })
  }
));
SterlingSignThin.displayName = "SterlingSignThin";
var SterlingSign_default = SterlingSignThin;
