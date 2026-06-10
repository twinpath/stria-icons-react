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
var Rss_exports = {};
__export(Rss_exports, {
  default: () => Rss_default
});
module.exports = __toCommonJS(Rss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RssLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 320C35.875 320 0 355.875 0 400S35.875 480 80 480S160 444.125 160 400S124.125 320 80 320ZM80 448C53.5 448 32 426.5 32 400S53.5 352 80 352S128 373.5 128 400S106.5 448 80 448ZM16 32C7.156 32 0 39.156 0 48S7.156 64 16 64C236.562 64 416 243.438 416 464C416 472.844 423.156 480 432 480S448 472.844 448 464C448 225.781 254.203 32 16 32ZM16 176C7.156 176 0 183.156 0 192S7.156 208 16 208C157.156 208 272 322.844 272 464C272 472.844 279.156 480 288 480S304 472.844 304 464C304 305.188 174.797 176 16 176Z" })
  }
));
RssLight.displayName = "RssLight";
var Rss_default = RssLight;
