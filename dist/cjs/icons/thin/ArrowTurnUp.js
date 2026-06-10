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
var ArrowTurnUp_exports = {};
__export(ArrowTurnUp_exports, {
  default: () => ArrowTurnUp_default
});
module.exports = __toCommonJS(ArrowTurnUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowTurnUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M349.81 159.469C348.247 161.125 346.122 161.969 343.997 161.969C342.028 161.969 340.028 161.25 338.497 159.782L199.998 28.582V441.96C199.998 481.647 167.686 513.958 127.999 513.958H8C3.594 513.958 0 510.365 0 505.959S3.594 497.959 8 497.959H127.999C158.874 497.959 183.999 472.835 183.999 441.96V28.582L45.5 159.782C42.312 162.813 37.25 162.656 34.187 159.469C31.156 156.25 31.281 151.188 34.5 148.157L186.498 4.161C189.561 1.224 194.436 1.224 197.498 4.161L349.497 148.157C352.716 151.188 352.841 156.25 349.81 159.469Z" })
  }
));
ArrowTurnUpThin.displayName = "ArrowTurnUpThin";
var ArrowTurnUp_default = ArrowTurnUpThin;
