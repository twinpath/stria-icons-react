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
var CommentMiddleTop_exports = {};
__export(CommentMiddleTop_exports, {
  default: () => CommentMiddleTop_default
});
module.exports = __toCommonJS(CommentMiddleTop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentMiddleTopLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M323.162 103.475L274.275 10.084C270.758 3.361 263.379 0 256 0S241.242 3.361 237.725 10.084L188.838 103.475C80.076 127.467 0 208.012 0 304C0 418.906 114.594 512 256 512S512 418.906 512 304C512 208.012 431.924 127.467 323.162 103.475ZM256 480C132.486 480 32 401.047 32 304C32 225.598 99.328 155.988 195.73 134.723L210.279 131.514L256 44.172L301.721 131.514L316.27 134.723C412.672 155.988 480 225.598 480 304C480 401.047 379.514 480 256 480Z " })
  }
));
CommentMiddleTopLight.displayName = "CommentMiddleTopLight";
var CommentMiddleTop_default = CommentMiddleTopLight;
