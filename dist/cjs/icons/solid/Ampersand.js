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
var Ampersand_exports = {};
__export(Ampersand_exports, {
  default: () => Ampersand_default
});
module.exports = __toCommonJS(Ampersand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AmpersandSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M373.529 413.016L214.186 238.734L250.998 209C274.498 190.031 287.998 161.797 287.998 131.547C287.998 76.656 243.342 32 188.438 32H147.562C92.656 32 48 76.656 48 131.547C48 159.891 58.531 187.031 77.656 207.984L97.75 229.938L43.031 274.141C15.688 296.219 0 329.047 0 364.203C0 428.047 51.938 480 115.781 480H173.25C214.842 480 253.873 461.047 279.592 428.828L314.467 466.984C322.373 475.625 333.154 480 343.998 480C353.654 480 363.311 476.531 370.998 469.516C387.279 454.609 388.436 429.312 373.529 413.016ZM147.562 112H188.438C199.219 112 208 120.766 208 131.547C208 137.484 205.375 143.031 200.75 146.75L160.094 179.578L136.719 154.031C131.094 147.859 128 139.891 128 131.547C128 120.766 136.781 112 147.562 112ZM219.561 375.531C209.094 390.844 191.781 400 173.25 400H115.781C96.062 400 80 383.938 80 364.203C80 353.344 84.844 343.188 93.281 336.375L151.813 289.094L224.998 369.125C222.998 371.016 221.186 373.156 219.561 375.531ZM377.055 286.535C389.49 268.285 384.773 243.396 366.525 230.959C348.213 218.492 323.371 223.242 310.936 241.475L289.201 273.357L344.674 334.031L377.055 286.535Z" })
  }
));
AmpersandSolid.displayName = "AmpersandSolid";
var Ampersand_default = AmpersandSolid;
