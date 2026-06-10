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
var CircleStar_exports = {};
__export(CircleStar_exports, {
  default: () => CircleStar_default
});
module.exports = __toCommonJS(CircleStar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleStarRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM391.299 200.463L308.971 188.484L272.166 114.016C268.863 107.357 262.41 103.998 255.961 104C249.551 104 243.143 107.318 239.834 114.016L203.029 188.484L120.701 200.463C105.926 202.598 100.01 220.764 110.717 231.168L170.291 289.1L156.203 370.934C154.199 382.631 163.523 392 173.982 392C176.756 392 179.611 391.34 182.354 389.891L256 351.248L329.646 389.891C332.383 391.326 335.229 391.979 337.998 391.979C348.463 391.979 357.803 382.639 355.797 370.934L341.709 289.1L401.283 231.168C411.99 220.764 406.074 202.598 391.299 200.463ZM296.159 266.441C292.376 270.12 290.65 275.427 291.546 280.626L298.182 319.174L263.434 300.942C258.779 298.499 253.221 298.499 248.566 300.942L213.82 319.174L220.456 280.626C221.352 275.427 219.626 270.12 215.843 266.441L187.83 239.201L226.574 233.564C231.781 232.806 236.283 229.537 238.614 224.819L256 189.641L273.386 224.819C275.717 229.537 280.219 232.806 285.426 233.564L324.172 239.201L296.159 266.441Z" })
  }
));
CircleStarRegular.displayName = "CircleStarRegular";
var CircleStar_default = CircleStarRegular;
