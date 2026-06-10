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
const FontAwesomeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 48V384C384.906 406.535 365.664 416 328.531 416C265.711 416 241.93 384 179.199 384C158.609 384 142.621 387.561 128 392.178V328.178C142.621 323.561 158.609 320 179.199 320C241.93 320 265.711 352 328.531 352C348.945 352 364.141 349.012 384 342.689V134.689C364.141 141.01 348.945 144 328.531 144C265.711 144 241.93 112 179.203 112C128.438 112 104.348 132.629 64 140.664V448C64 465.672 49.674 480 32 480S0 465.672 0 448V64C0 46.326 14.326 32 32 32S64 46.326 64 64V76.664C104.348 68.629 128.438 48 179.203 48C241.93 48 265.711 80 328.531 80C365.664 80 384.906 70.535 448 48Z" })
  }
));
FontAwesomeSolid.displayName = "FontAwesomeSolid";
var FontAwesome_default = FontAwesomeSolid;
