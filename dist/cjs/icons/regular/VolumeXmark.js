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
var VolumeXmark_exports = {};
__export(VolumeXmark_exports, {
  default: () => VolumeXmark_default
});
module.exports = __toCommonJS(VolumeXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VolumeXmarkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M301.109 34.818C296.908 32.922 292.445 31.998 288.014 31.998C280.316 31.998 272.715 34.783 266.734 40.1L131.84 160.004H48C21.49 160.004 0 181.496 0 208.004V304.002C0 330.51 21.49 352.002 48 352.002H131.84L266.734 471.906C272.719 477.219 280.312 480 288 480C292.438 480 296.906 479.094 301.109 477.188C312.609 472.031 320 460.594 320 448V64.006C320 51.412 312.609 39.975 301.109 34.818ZM272 412.365L150.09 304.002H48V208.004H150.09L272 99.641V412.365ZM513.938 256L560.969 208.969C570.344 199.594 570.344 184.406 560.969 175.031S536.406 165.656 527.031 175.031L480 222.062L432.969 175.031C423.594 165.656 408.406 165.656 399.031 175.031S389.656 199.594 399.031 208.969L446.062 256L399.031 303.031C389.656 312.406 389.656 327.594 399.031 336.969C408.404 346.342 423.588 346.35 432.969 336.969L480 289.938L527.031 336.969C536.404 346.342 551.588 346.35 560.969 336.969C570.344 327.594 570.344 312.406 560.969 303.031L513.938 256Z" })
  }
));
VolumeXmarkRegular.displayName = "VolumeXmarkRegular";
var VolumeXmark_default = VolumeXmarkRegular;
