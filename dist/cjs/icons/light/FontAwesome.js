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
var FontAwesome_exports = {};
__export(FontAwesome_exports, {
  default: () => FontAwesome_default
});
module.exports = __toCommonJS(FontAwesome_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FontAwesomeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 48V384C384.906 406.535 365.664 416 328.531 416C265.711 416 241.93 384 179.203 384C153.033 384 133.881 389.429 115.969 395.813C106.222 399.287 96 392.057 96 381.71V381.71C96 375.451 99.891 369.86 105.753 367.666C126.801 359.79 147.966 352 179.203 352C241.93 352 265.711 384 328.531 384C358.422 384 377.094 377.725 416 363.578V91.578C377.094 105.725 358.422 112 328.531 112C265.711 112 241.93 80 179.203 80C116.328 80 94.828 112 32 112V464C32 472.836 24.836 480 16 480S0 472.836 0 464V48C0 39.162 7.164 32 16 32S32 39.162 32 48V80C94.828 80 116.328 48 179.203 48C241.93 48 265.711 80 328.531 80C365.664 80 384.906 70.535 448 48Z" })
  }
));
FontAwesomeLight.displayName = "FontAwesomeLight";
var FontAwesome_default = FontAwesomeLight;
