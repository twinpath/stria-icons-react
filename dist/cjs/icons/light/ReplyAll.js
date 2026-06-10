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
var ReplyAll_exports = {};
__export(ReplyAll_exports, {
  default: () => ReplyAll_default
});
module.exports = __toCommonJS(ReplyAll_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReplyAllLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 224.003H188.199L346.25 92.29C353.031 86.633 353.938 76.54 348.281 69.759C342.594 62.946 332.5 62.071 325.75 67.727L133.75 227.722C130.094 230.753 128 235.253 128 240.003S130.094 249.252 133.75 252.284L325.75 412.282C328.75 414.782 332.375 416 336 416C340.562 416 345.125 414.032 348.281 410.25C353.938 403.469 353.031 393.376 346.25 387.72L188.199 256.002H400C479.406 256.002 544 320.595 544 400.001V432C544 440.844 551.156 448 560 448S576 440.844 576 432V400.001C576 302.971 497.031 224.003 400 224.003ZM41 240.003L218.25 92.286C225.031 86.63 225.938 76.536 220.281 69.755C214.625 62.942 204.531 62.067 197.75 67.724L5.75 227.722C2.094 230.753 0 235.253 0 240.003S2.094 249.252 5.75 252.284L197.75 412.282C200.75 414.782 204.375 416 208 416C212.562 416 217.125 414.032 220.281 410.25C225.938 403.469 225.031 393.376 218.25 387.72L41 240.003Z" })
  }
));
ReplyAllLight.displayName = "ReplyAllLight";
var ReplyAll_default = ReplyAllLight;
