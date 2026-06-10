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
var Glass_exports = {};
__export(Glass_exports, {
  default: () => Glass_default
});
module.exports = __toCommonJS(Glass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GlassThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M344.411 40.859C339.051 35.172 331.727 32 323.963 32H60.038C52.274 32 44.95 35.172 39.59 40.859C34.34 46.438 31.608 53.984 32.046 61.75L60.038 453.75C61.022 468.516 73.268 480 88.03 480H295.971C310.733 480 322.979 468.516 323.963 453.75L351.956 61.75C352.393 53.984 349.661 46.438 344.411 40.859ZM51.235 51.832C53.563 49.359 56.69 48 60.038 48H323.963C327.311 48 330.438 49.359 332.76 51.824C334.997 54.203 336.171 57.492 335.997 60.609L331.184 128H52.815L48.02 60.852C47.831 57.492 49.004 54.203 51.235 51.832ZM307.999 452.688C307.577 459.031 302.294 464 295.971 464H88.03C81.708 464 76.424 459.031 75.997 452.609L53.958 144H330.042L307.999 452.688Z" })
  }
));
GlassThin.displayName = "GlassThin";
var Glass_default = GlassThin;
