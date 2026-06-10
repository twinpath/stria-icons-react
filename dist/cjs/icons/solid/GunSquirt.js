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
var GunSquirt_exports = {};
__export(GunSquirt_exports, {
  default: () => GunSquirt_default
});
module.exports = __toCommonJS(GunSquirt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GunSquirtSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 128H544V112C544 85.492 522.51 64 496 64H128V56C128 42.742 117.254 32 104 32S80 42.742 80 56V65.613C34.637 73.266 0 112.461 0 160C0 207.594 34.719 246.812 80.16 254.402L33.25 439.211C27.41 459.648 42.76 480 64.02 480H167.863C182.15 480 194.705 470.531 198.629 456.793L220.59 376H272V392C272 405.254 282.746 416 296 416S320 405.254 320 392V312C320 298.742 309.254 288 296 288S272 298.742 272 312V328H233.637L253.209 256H496C522.51 256 544 234.508 544 208V192H560C568.836 192 576 184.836 576 176V144C576 135.164 568.836 128 560 128ZM448 192H96C78.326 192 64 177.672 64 160S78.326 128 96 128H448C465.674 128 480 142.328 480 160S465.674 192 448 192Z" })
  }
));
GunSquirtSolid.displayName = "GunSquirtSolid";
var GunSquirt_default = GunSquirtSolid;
