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
var ArrowUpSmallBig_exports = {};
__export(ArrowUpSmallBig_exports, {
  default: () => ArrowUpSmallBig_default
});
module.exports = __toCommonJS(ArrowUpSmallBig_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpSmallBigRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.999 256H319.999C302.325 256 287.999 270.328 287.999 288V448C287.999 465.672 302.325 480 319.999 480H479.999C497.673 480 511.999 465.672 511.999 448V288C511.999 270.328 497.673 256 479.999 256ZM463.999 432H335.999V304H463.999V432ZM319.999 192H415.999C433.599 192 447.999 177.602 447.999 160V64C447.999 46.398 433.599 32 415.999 32H319.999C302.4 32 287.999 46.398 287.999 64V160C287.999 177.602 302.4 192 319.999 192ZM335.999 80H399.999V144H335.999V80ZM145.624 39.367C136.562 29.547 119.437 29.547 110.374 39.367L14.378 143.445C5.378 153.203 5.972 168.406 15.722 177.383C20.345 181.664 26.189 183.758 32.001 183.758C38.47 183.758 44.907 181.164 49.626 176.039L103.999 117.086V455.977C103.999 469.242 114.749 480 127.999 480S151.999 469.242 151.999 455.977V117.086L206.372 176.039C215.31 185.797 230.497 186.453 240.277 177.383C250.027 168.406 250.62 153.203 241.62 143.445L145.624 39.367Z" })
  }
));
ArrowUpSmallBigRegular.displayName = "ArrowUpSmallBigRegular";
var ArrowUpSmallBig_default = ArrowUpSmallBigRegular;
