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
var Glasses_exports = {};
__export(Glasses_exports, {
  default: () => Glasses_default
});
module.exports = __toCommonJS(Glasses_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GlassesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M574.125 280.371L528.75 98.618C522.875 74.993 507.125 54.617 485.75 42.867C464.25 31.117 438.75 28.742 415.5 36.492L400.25 41.617C391.875 44.367 387.375 53.492 390.25 61.868L395.25 76.993C398 85.368 407.125 89.868 415.5 87.118L428.625 82.743C439.5 79.118 451.625 79.118 461.875 84.493S479.375 98.993 482.25 110.243L520.625 264.121C498.5 257.246 470.875 251.621 439.5 251.621C404.625 251.621 365.5 258.621 324.625 278.371H251.375C210.5 258.621 171.375 251.621 136.5 251.621C105.125 251.621 77.5 257.246 55.375 264.121L93.75 110.243C96.625 98.993 103.875 89.868 114.25 84.493C124.375 79.118 136.5 79.118 147.375 82.743L160.5 87.118C168.875 89.868 178 85.368 180.75 76.993L185.75 61.868C188.625 53.492 184.125 44.367 175.625 41.617L160.375 36.492C137.25 28.742 111.625 31.117 90.25 42.867C68.875 54.617 53.125 74.993 47.25 98.618L1.875 280.371C0.625 285.372 0 290.622 0 295.872V366.123C0 428.999 51.625 480 115.25 480H152.375C212.625 480 262.75 433.999 267.25 374.623L270.125 335.997H305.875L308.75 374.623C313.25 433.999 363.375 480 423.625 480H460.75C524.375 480 576 428.999 576 366.123V295.872C576 290.622 575.375 285.497 574.125 280.371ZM203.375 369.748C201.375 395.749 179 415.999 152.375 415.999H115.25C87 415.999 64 393.623 64 366.123V328.622C82.125 322.122 107.375 315.622 136.625 315.622C160.5 315.622 183.875 319.997 206.5 328.622L203.375 369.748ZM512 366.123C512 393.623 489 415.999 460.75 415.999H423.625C397 415.999 374.625 395.749 372.625 369.748L369.5 328.622C392.125 319.997 415.625 315.622 439.5 315.622C468.5 315.622 493.875 322.122 512 328.622V366.123Z" })
  }
));
GlassesSolid.displayName = "GlassesSolid";
var Glasses_default = GlassesSolid;
