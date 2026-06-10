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
var Envelopes_exports = {};
__export(Envelopes_exports, {
  default: () => Envelopes_default
});
module.exports = __toCommonJS(Envelopes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 448H128C92.654 448 64 419.346 64 384V112C64 103.164 56.836 96 48 96S32 103.164 32 112V384C32 437.02 74.98 480 128 480H496C504.836 480 512 472.836 512 464S504.836 448 496 448ZM576 32H192C156.654 32 128 60.652 128 96V320C128 355.346 156.654 384 192 384H576C611.348 384 640 355.346 640 320V96C640 60.652 611.348 32 576 32ZM608 320C608 337.645 593.645 352 576 352H192C174.355 352 160 337.645 160 320V139.994L336 272C350.125 282.609 367.062 287.906 384 287.906S417.875 282.609 432 272L608 139.994V320ZM608 100.008L412.812 246.406C395.812 259.125 372.188 259.125 355.188 246.406L160 100.008V96C160 78.355 174.355 64 192 64H576C593.645 64 608 78.355 608 96V100.008Z" })
  }
));
EnvelopesLight.displayName = "EnvelopesLight";
var Envelopes_default = EnvelopesLight;
