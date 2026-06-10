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
var ArrowsToLine_exports = {};
__export(ArrowsToLine_exports, {
  default: () => ArrowsToLine_default
});
module.exports = __toCommonJS(ArrowsToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsToLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M207.031 184.969C209.6 187.539 215.514 192 224 192S238.4 187.539 240.969 184.969L312.969 112.969C317.656 108.281 320 102.141 320 96C320 82.289 308.791 72 296 72C289.859 72 283.719 74.344 279.031 79.031L248 110.062V24C248 10.75 237.25 0 224 0S200 10.75 200 24V110.062L168.969 79.031C164.281 74.344 158.141 72 152 72C138.291 72 128 83.211 128 96C128 102.141 130.344 108.281 135.031 112.969L207.031 184.969ZM240.969 327.031C234.945 321.008 227.695 320.031 224 320.031C220.318 320.031 213.062 321 207.031 327.031L135.031 399.031C130.344 403.719 128 409.859 128 416C128 429.711 139.209 440 152 440C158.141 440 164.281 437.656 168.969 432.969L200 401.938V488C200 501.25 210.75 512 224 512S248 501.25 248 488V401.938L279.031 432.969C283.719 437.656 289.844 440 296 440C314.795 440 320 422.801 320 416C320 409.859 317.656 403.719 312.969 399.031L240.969 327.031ZM424 232H24C10.75 232 0 242.75 0 256S10.75 280 24 280H424C437.25 280 448 269.25 448 256S437.25 232 424 232Z" })
  }
));
ArrowsToLineRegular.displayName = "ArrowsToLineRegular";
var ArrowsToLine_default = ArrowsToLineRegular;
