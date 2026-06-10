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
var Megaphone_exports = {};
__export(Megaphone_exports, {
  default: () => Megaphone_default
});
module.exports = __toCommonJS(Megaphone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MegaphoneSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 176C14.375 176 0 190.375 0 208V304C0 321.625 14.375 336 32 336C43.375 336 52.875 329.75 58.625 320.75L165.5 353.125C162.25 362.875 160 373.125 160 384C160 437 203 480 256 480C300.5 480 337.625 449.375 348.5 408.25L480 448V64L58.625 191.25C52.875 182.25 43.375 176 32 176ZM211.25 366.875L302.75 394.5C297.999 415.875 278.875 432 256 432C229.5 432 208 410.5 208 384C208 378 209.25 372.25 211.25 366.875ZM560 32H528C519.125 32 512 39.125 512 48V464C512 472.875 519.125 480 528 480H560C568.875 480 576 472.875 576 464V48C576 39.125 568.875 32 560 32Z" })
  }
));
MegaphoneSolid.displayName = "MegaphoneSolid";
var Megaphone_default = MegaphoneSolid;
