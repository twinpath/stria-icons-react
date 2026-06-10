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
var WhiskeyGlassIce_exports = {};
__export(WhiskeyGlassIce_exports, {
  default: () => WhiskeyGlassIce_default
});
module.exports = __toCommonJS(WhiskeyGlassIce_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WhiskeyGlassIceSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.955 32H32.045C12.549 32 -2.324 49.254 0.301 68.508L56.289 425.109C60.789 456.617 87.783 480 119.778 480H392.723C424.467 480 451.586 456.617 456.086 425.109L511.699 68.508C514.324 49.254 499.451 32 479.955 32ZM416.535 284.797C435.092 309.832 433.262 345.32 410.608 367.973L365.326 413.379C353.237 425.469 337.145 432.125 320.012 432.125S286.787 425.469 274.666 413.348L229.446 368.004C229.446 368.004 229.446 368.004 229.444 368H159.949C124.66 368 95.949 339.289 95.949 304V287.695L64 96H448L416.535 284.797ZM252.074 345.375L297.324 390.75C309.824 403.25 330.199 403.25 342.699 390.75L387.949 345.375C400.449 332.875 400.449 312.625 387.949 300.125L342.699 254.75C330.199 242.25 309.824 242.25 297.324 254.75L252.074 300.125C239.574 312.625 239.574 332.875 252.074 345.375ZM159.949 336H212.199C211.199 331.75 210.699 327.25 210.699 322.75C210.699 305.625 217.449 289.5 229.449 277.375L255.949 251V240C255.949 222.25 241.699 208 223.949 208H159.949C142.199 208 127.949 222.25 127.949 240V304C127.949 321.75 142.199 336 159.949 336Z" })
  }
));
WhiskeyGlassIceSolid.displayName = "WhiskeyGlassIceSolid";
var WhiskeyGlassIce_default = WhiskeyGlassIceSolid;
