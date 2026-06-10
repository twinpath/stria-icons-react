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
var ArrowDownSmallBig_exports = {};
__export(ArrowDownSmallBig_exports, {
  default: () => ArrowDownSmallBig_default
});
module.exports = __toCommonJS(ArrowDownSmallBig_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownSmallBigRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.999 192H415.999C433.599 192 447.999 177.602 447.999 160V64C447.999 46.398 433.599 32 415.999 32H319.999C302.4 32 287.999 46.398 287.999 64V160C287.999 177.602 302.4 192 319.999 192ZM335.999 80H399.999V144H335.999V80ZM479.999 256H319.999C302.325 256 287.999 270.328 287.999 288V448C287.999 465.672 302.325 480 319.999 480H479.999C497.673 480 511.999 465.672 511.999 448V288C511.999 270.328 497.673 256 479.999 256ZM463.999 432H335.999V304H463.999V432ZM206.372 335.961L151.999 394.914V56.023C151.999 42.758 141.249 32 127.999 32S103.999 42.758 103.999 56.023V394.914L49.626 335.961C44.907 330.836 38.47 328.242 32.001 328.242C26.189 328.242 20.345 330.336 15.722 334.617C5.972 343.594 5.378 358.797 14.378 368.555L110.374 472.633C119.437 482.453 136.562 482.453 145.624 472.633L241.62 368.555C250.62 358.797 250.027 343.594 240.277 334.617C230.497 325.547 215.31 326.203 206.372 335.961Z" })
  }
));
ArrowDownSmallBigRegular.displayName = "ArrowDownSmallBigRegular";
var ArrowDownSmallBig_default = ArrowDownSmallBigRegular;
