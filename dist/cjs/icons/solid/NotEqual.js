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
var NotEqual_exports = {};
__export(NotEqual_exports, {
  default: () => NotEqual_default
});
module.exports = __toCommonJS(NotEqual_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NotEqualSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 336C432 358.094 414.094 376 392 376H182.459L122.625 465.75C116.469 475 106.312 480 95.969 480C89.875 480 83.719 478.25 78.25 474.625C63.531 464.812 59.562 444.969 69.375 430.25L105.541 376H56C33.906 376 16 358.094 16 336S33.906 296 56 296H158.875L212.209 216H56C33.906 216 16 198.094 16 176S33.906 136 56 136H265.541L325.375 46.25C335.125 31.562 354.969 27.594 369.75 37.375C384.469 47.187 388.438 67.031 378.625 81.75L342.459 136H392C414.094 136 432 153.906 432 176S414.094 216 392 216H289.125L235.791 296H392C414.094 296 432 313.906 432 336Z" })
  }
));
NotEqualSolid.displayName = "NotEqualSolid";
var NotEqual_default = NotEqualSolid;
