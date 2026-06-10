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
var OilCan_exports = {};
__export(OilCan_exports, {
  default: () => OilCan_default
});
module.exports = __toCommonJS(OilCan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OilCanLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M637.869 168.016C634.338 161.922 627.088 158.859 620.463 160.391L450.871 198.938L408.059 172.172C395.34 164.203 380.684 160 365.653 160H271.997V96H335.997C344.835 96 351.997 88.836 351.997 80C351.997 71.162 344.835 64 335.997 64H175.998C167.162 64 159.999 71.162 159.999 80C159.999 88.836 167.162 96 175.998 96H239.998V160H48C21.531 160 0 181.531 0 208V268.219C0 286.516 10.156 302.969 26.531 311.156L95.999 345.891V368C95.999 394.469 117.53 416 143.999 416H402.027C415.34 416 428.152 410.422 437.215 400.672L635.713 186.891C640.494 181.75 641.369 174.094 637.869 168.016ZM95.999 208V310.109L40.843 282.531C35.375 279.812 32 274.328 32 268.219V208C32 199.172 39.187 192 48 192H98.946C97.153 197.029 95.999 202.363 95.999 208ZM413.777 378.875C410.746 382.141 406.465 384 402.027 384H143.999C135.186 384 127.999 376.828 127.999 368V208C127.999 199.172 135.186 192 143.999 192H365.653C374.653 192 383.434 194.516 391.09 199.297L439.527 229.562C443.121 231.812 447.465 232.562 451.527 231.609L577.026 203.094L413.777 378.875Z" })
  }
));
OilCanLight.displayName = "OilCanLight";
var OilCan_default = OilCanLight;
