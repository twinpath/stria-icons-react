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
var Saxophone_exports = {};
__export(Saxophone_exports, {
  default: () => Saxophone_default
});
module.exports = __toCommonJS(Saxophone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SaxophoneSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M635.247 68.75L607.997 41.375C601.997 35.375 593.872 32 585.372 32H538.497C521.497 32 505.247 38.75 493.247 50.75L448.998 95L438.623 84.75C432.373 78.5 422.248 78.5 415.998 84.75L404.748 96C398.498 102.25 398.498 112.375 404.748 118.625L414.998 129L400.998 143L390.623 132.625C384.373 126.375 374.248 126.375 367.998 132.625L356.748 144C350.498 150.25 350.498 160.374 356.748 166.624L366.998 176.999L352.998 190.999L342.623 180.624C336.373 174.374 326.248 174.374 319.998 180.624L308.748 191.999C302.498 198.249 302.498 208.374 308.748 214.624L318.998 224.999L209.999 333.999C200.874 342.999 186.499 343.874 176.499 335.999C166.374 328.124 163.749 313.999 170.249 302.999L246.374 175.999H271.999C280.874 175.999 287.998 168.874 287.998 159.999V144C287.998 135.125 280.874 128 271.999 128H16C7.125 128 0 135.125 0 144V159.999C0 168.874 7.125 175.999 16 175.999H27.5C18.625 207.874 0 280.124 0 319.999C0 381.374 35 434.123 85.75 460.873C108.374 473.623 133.999 480.123 159.999 479.998C237.124 479.998 276.499 428.623 287.998 415.998L534.372 108C540.497 100.375 549.622 96 559.372 96H623.997C638.247 96 645.372 78.75 635.247 68.75ZM95.999 343.999C82.75 343.999 72 333.249 72 319.999C72 306.749 82.75 295.999 95.999 295.999S119.999 306.749 119.999 319.999C119.999 333.249 109.249 343.999 95.999 343.999ZM127.999 247.999C114.749 247.999 103.999 237.249 103.999 223.999C103.999 210.749 114.749 199.999 127.999 199.999S151.999 210.749 151.999 223.999C151.999 237.249 141.249 247.999 127.999 247.999Z" })
  }
));
SaxophoneSolid.displayName = "SaxophoneSolid";
var Saxophone_default = SaxophoneSolid;
