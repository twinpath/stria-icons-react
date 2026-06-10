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
var ShareAll_exports = {};
__export(ShareAll_exports, {
  default: () => ShareAll_default
});
module.exports = __toCommonJS(ShareAll_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareAllLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 400.001V432C0 440.844 7.156 448 16 448S32 440.844 32 432V400.001C32 320.595 96.594 256.002 176 256.002H387.801L229.75 387.72C222.969 393.376 222.062 403.469 227.719 410.25C230.875 414.032 235.438 416 240 416C243.625 416 247.25 414.782 250.25 412.282L442.25 252.284C445.906 249.252 448 244.753 448 240.003S445.906 230.753 442.25 227.721L250.25 67.727C243.5 62.071 233.406 62.946 227.719 69.759C222.062 76.54 222.969 86.633 229.75 92.29L387.801 224.003H176C78.969 224.003 0 302.971 0 400.001ZM357.75 387.72C350.969 393.376 350.062 403.469 355.719 410.25C358.875 414.032 363.437 416 368 416C371.625 416 375.25 414.782 378.25 412.282L570.25 252.284C573.906 249.252 576 244.753 576 240.003S573.906 230.753 570.25 227.721L378.25 67.723C371.469 62.067 361.375 62.942 355.719 69.755C350.062 76.536 350.969 86.63 357.75 92.286L535 240.003L357.75 387.72Z" })
  }
));
ShareAllLight.displayName = "ShareAllLight";
var ShareAll_default = ShareAllLight;
