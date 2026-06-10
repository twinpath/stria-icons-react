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
var Castle_exports = {};
__export(Castle_exports, {
  default: () => Castle_default
});
module.exports = __toCommonJS(Castle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CastleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 160C602.746 160 592 170.744 592 184V224H512V24C512 10.744 501.254 0 488 0S464 10.744 464 24V64H400V24C400 10.744 389.254 0 376 0S352 10.744 352 24V64H288V24C288 10.744 277.254 0 264 0S240 10.744 240 24V64H176V24C176 10.744 165.254 0 152 0S128 10.744 128 24V224H48V184C48 170.744 37.254 160 24 160S0 170.744 0 184V448C0 483.346 28.654 512 64 512H287.768C287.85 512 287.918 512.047 288 512.047H352C352.082 512.047 352.15 512 352.232 512H576C611.346 512 640 483.346 640 448V184C640 170.744 629.254 160 616 160ZM176 112H464V224H176V112ZM592 448C592 456.836 584.836 464 576 464H384V384C384 348.652 355.346 320 320 320S256 348.652 256 384V464H64C55.164 464 48 456.836 48 448V272H592V448Z" })
  }
));
CastleRegular.displayName = "CastleRegular";
var Castle_default = CastleRegular;
