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
var Vihara_exports = {};
__export(Vihara_exports, {
  default: () => Vihara_default
});
module.exports = __toCommonJS(Vihara_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ViharaLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632.873 400.75L543.999 352V288L599.123 270.25C610.998 264.375 610.998 247.625 599.123 241.75L479.999 192V128L507.249 111.75C514.999 104 512.874 91 503.124 86.125L320 0L136.876 86.125C127.126 91 125.001 104 132.751 111.75L160.001 128V192L40.877 241.75C29.002 247.625 29.002 264.375 40.877 270.25L96.001 288V352L7.127 400.75C-3.123 407.5 -2.123 422.875 8.877 428.375L64.002 448V496C64.002 504.8 71.202 512 80.002 512H80.002C88.802 512 96.001 504.8 96.001 496V448H304V496C304 504.8 311.2 512 320 512H320C328.8 512 336 504.8 336 496V448H543.999V496C543.999 504.8 551.198 512 559.998 512H559.998C568.798 512 575.998 504.8 575.998 496V448L631.123 428.375C642.123 422.875 643.123 407.5 632.873 400.75ZM320 35.375L448.999 96H191.001L320 35.375ZM192.001 128H447.999V192H192.001V128ZM94.626 254L166.376 224H473.624L545.374 254L538.999 256H101.001L94.626 254ZM128.001 288H511.999V352H128.001V288ZM570.498 416H69.502L55.127 410.875L104.251 384H535.749L584.873 410.875L570.498 416Z" })
  }
));
ViharaLight.displayName = "ViharaLight";
var Vihara_default = ViharaLight;
