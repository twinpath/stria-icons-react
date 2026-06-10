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
var LaptopSlash_exports = {};
__export(LaptopSlash_exports, {
  default: () => LaptopSlash_default
});
module.exports = __toCommonJS(LaptopSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 196.551L64 146.389V352H128V196.551ZM16 384C7.25 384 0 391.25 0 400V416C0 451.25 28.75 480 64 480H489.646L367.162 384H16ZM623.998 384H522.232L620.99 461.404C632.707 449.795 639.998 433.73 639.998 416V400C639.998 391.25 632.748 384 623.998 384ZM575.998 352V80C575.998 53.625 554.373 32 527.998 32H112C101.75 32 92.271 35.332 84.445 40.875L154.779 96H512V352H575.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M615.97 512C610.814 512 605.595 510.328 601.189 506.891L9.189 42.891C-1.249 34.719 -3.061 19.625 5.126 9.187C13.251 -1.219 28.282 -3.094 38.814 5.109L630.814 469.109C641.251 477.281 643.064 492.375 634.876 502.813C630.157 508.844 623.095 512 615.97 512Z" })
    ]
  }
));
LaptopSlashDuotone.displayName = "LaptopSlashDuotone";
var LaptopSlash_default = LaptopSlashDuotone;
