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
const FontAwesomeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 48V384C384.906 406.535 365.664 416 328.531 416C265.711 416 241.93 384 179.203 384C132.713 384 108.59 401.301 73.871 410.387C68.902 411.686 64 408.01 64 402.875C64 399.242 66.57 396.17 70.102 395.328C106.893 386.561 131.049 368 179.203 368C241.93 368 265.711 400 328.531 400C362.25 400 381.57 392.082 432 373.777V69.777C381.57 88.082 362.25 96 328.531 96C265.711 96 241.93 64 179.203 64C116.328 64 94.828 96 32 96C26.305 96 21.047 95.645 16 95.111V472C16 476.418 12.418 480 8 480S0 476.418 0 472V40C0 35.582 3.582 32 8 32S16 35.582 16 40V79.111C21.047 79.645 26.305 80 32 80C94.828 80 116.328 48 179.203 48C241.93 48 265.711 80 328.531 80C365.664 80 384.906 70.535 448 48Z" })
  }
));
FontAwesomeThin.displayName = "FontAwesomeThin";
var FontAwesome_default = FontAwesomeThin;
