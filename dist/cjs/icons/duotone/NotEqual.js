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
const NotEqualDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M95.979 480C89.886 480 83.729 478.25 78.261 474.625C63.542 464.812 59.573 444.969 69.386 430.25L325.386 46.25C335.136 31.562 354.979 27.594 369.761 37.375C384.479 47.187 388.448 67.031 378.636 81.75L122.636 465.75C116.479 475 106.323 480 95.979 480Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 176C432 153.906 414.094 136 392 136H342.459L289.125 216H392C414.094 216 432 198.094 432 176ZM56 216H212.209L265.541 136H56C33.906 136 16 153.906 16 176S33.906 216 56 216ZM16 336C16 358.094 33.906 376 56 376H105.541L158.875 296H56C33.906 296 16 313.906 16 336ZM392 296H235.791L182.459 376H392C414.094 376 432 358.094 432 336S414.094 296 392 296Z" })
    ]
  }
));
NotEqualDuotone.displayName = "NotEqualDuotone";
var NotEqual_default = NotEqualDuotone;
