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
const AmpersandLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M379.524 452.906L308.129 378.721L381.118 274.203C386.18 266.969 384.399 256.984 377.149 251.922C369.993 246.906 359.962 248.609 354.868 255.891L285.506 355.213L170.403 235.609L240.277 180.25C260.432 164.375 271.995 140.703 271.995 115.312C271.995 69.375 233.902 32 187.059 32H132.935C86.092 32 47.999 69.375 47.999 115.312C47.999 140.125 57.436 163.859 74.686 182.312L122.904 232.406L38.718 299.109C14.125 318.516 0 347.391 0 378.328C0 434.391 46.53 480 103.748 480H170.309C212.308 480 251.558 459.734 275.276 425.766L289.449 405.469L356.462 475.094C359.618 478.359 363.805 480 367.993 480C371.993 480 375.993 478.516 379.086 475.531C385.461 469.406 385.649 459.266 379.524 452.906ZM97.904 160.281C86.342 147.953 79.998 131.969 79.998 115.313C79.998 87.016 103.748 64 132.935 64H187.059C216.246 64 239.995 87.016 239.995 115.312C239.995 130.828 232.871 145.344 220.433 155.141L148.091 212.453L97.904 160.281ZM249.026 407.453C231.308 432.844 201.871 448 170.309 448H103.748C64.186 448 31.999 416.75 31.999 378.328C31.999 357.25 41.655 337.531 58.561 324.219L145.185 255.578L266.827 381.963L249.026 407.453Z" })
  }
));
AmpersandLight.displayName = "AmpersandLight";
var Ampersand_default = AmpersandLight;
