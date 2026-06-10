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
var PersonSledding_exports = {};
__export(PersonSledding_exports, {
  default: () => PersonSledding_default
});
module.exports = __toCommonJS(PersonSledding_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSleddingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M505.061 420.125C495.684 410.75 480.431 410.75 471.179 420.125C459.052 432.25 440.673 435.5 426.045 428.75L376.91 403.375C381.161 398 384.161 391.5 384.161 384V288C384.161 270.25 369.783 256 352.155 256H301.269L347.404 209.875C361.282 196.125 365.282 175.625 357.781 157.625C350.279 139.625 332.901 128 313.522 128H159.991C142.237 128 127.984 142.25 127.984 160S142.237 192 159.991 192H242.758L169.368 265.375C166.367 268.25 164.116 271.875 162.491 275.75C160.366 280.875 160.116 286.25 160.741 291.75L34.965 226.625C23.213 220.625 8.71 225.125 2.708 236.875C-3.418 248.75 1.208 263.25 12.961 269.25L404.916 471.875C416.793 477.375 429.421 480 442.048 480C465.303 480 488.058 471 505.061 454C514.313 444.625 514.313 429.375 505.061 420.125ZM320.023 374L215.627 320H320.023V374ZM400.04 128C426.545 128 448.049 106.5 448.049 80S426.545 32 400.04 32C373.534 32 352.03 53.5 352.03 80S373.534 128 400.04 128Z" })
  }
));
PersonSleddingSolid.displayName = "PersonSleddingSolid";
var PersonSledding_default = PersonSleddingSolid;
