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
var Retweet_exports = {};
__export(Retweet_exports, {
  default: () => Retweet_default
});
module.exports = __toCommonJS(Retweet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RetweetSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.415 415.998H136C100.654 415.998 72 387.344 72 351.998V192.021H32C22.297 192.021 13.547 186.178 9.828 177.207S8.172 157.922 15.031 151.047L95.031 71.033C99.719 66.344 105.859 64 112 64S124.281 66.344 128.969 71.033L208.969 151.047C215.828 157.922 217.891 168.236 214.172 177.207S201.703 192.021 192 192.021H152V335.984H287.415C298.026 335.984 308.201 340.199 315.704 347.702L315.704 347.702C340.907 372.905 323.057 415.998 287.415 415.998ZM598.172 334.793C594.453 325.822 585.703 319.977 576 319.977H536V160C536 124.654 507.346 96 472 96H320.585C284.943 96 267.093 139.093 292.296 164.296L292.296 164.296C299.799 171.799 309.975 176.014 320.585 176.014H456V319.977H416C406.297 319.977 397.547 325.822 393.828 334.793S392.172 354.076 399.031 360.953L479.031 440.967C483.719 445.656 489.859 448 496 448S508.281 445.656 512.969 440.967L592.969 360.953C599.828 354.076 601.891 343.764 598.172 334.793Z" })
  }
));
RetweetSolid.displayName = "RetweetSolid";
var Retweet_default = RetweetSolid;
