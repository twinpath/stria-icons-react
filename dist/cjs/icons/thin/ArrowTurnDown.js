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
var ArrowTurnDown_exports = {};
__export(ArrowTurnDown_exports, {
  default: () => ArrowTurnDown_default
});
module.exports = __toCommonJS(ArrowTurnDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowTurnDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M349.497 365.801L197.498 509.797C194.436 512.734 189.561 512.734 186.498 509.797L34.5 365.801C31.281 362.77 31.156 357.708 34.187 354.489C37.25 351.302 42.312 351.146 45.5 354.177L183.999 485.376V71.998C183.999 41.124 158.874 16 127.999 16H8C3.594 16 0 12.406 0 8S3.594 0 8 0L127.999 0C167.686 0 199.998 32.312 199.998 71.998V485.376L338.497 354.177C340.028 352.708 342.028 351.989 343.997 351.989C346.122 351.989 348.247 352.833 349.81 354.489C352.841 357.708 352.716 362.77 349.497 365.801Z" })
  }
));
ArrowTurnDownThin.displayName = "ArrowTurnDownThin";
var ArrowTurnDown_default = ArrowTurnDownThin;
