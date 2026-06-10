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
const LaptopSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 464C37.533 464 16 442.467 16 416V400H385.441L365.314 384H16C7.188 384 0 391.203 0 400V416C0 451.203 28.812 480 64 480H486.086L465.959 464H64ZM528 48C545.674 48 560 62.326 560 80V344C560 348.418 563.582 352 568 352S576 348.418 576 344V80C576 53.6 554.4 32 528 32H153.922L174.051 48H528ZM80 344V157.207L64 144.488V344C64 348.418 67.582 352 72 352S80 348.418 80 344ZM636.98 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.674 0 3.336 1.027 1.738 3.012C-1.012 6.48 -0.434 11.512 3.02 14.262L627.012 510.266C628.496 511.438 630.246 512 631.996 512C634.34 512 636.684 510.969 638.262 508.984C641.012 505.516 640.434 500.484 636.98 497.734Z" })
  }
));
LaptopSlashThin.displayName = "LaptopSlashThin";
var LaptopSlash_default = LaptopSlashThin;
