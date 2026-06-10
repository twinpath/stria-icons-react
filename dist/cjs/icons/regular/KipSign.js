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
var KipSign_exports = {};
__export(KipSign_exports, {
  default: () => KipSign_default
});
module.exports = __toCommonJS(KipSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KipSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 256.003C384 269.253 373.25 280.003 360 280.003H160.59L343.656 437.813C353.719 446.469 354.844 461.625 346.188 471.656C341.438 477.188 334.719 480 328 480C322.438 480 316.875 478.094 312.344 474.188L112 301.477V456C112 469.25 101.25 480 88 480S64 469.25 64 456V280.003H24C10.75 280.003 0 269.253 0 256.003C0 242.753 10.75 232.003 24 232.003H64V56.006C64 42.756 74.75 32.006 88 32.006S112 42.756 112 56.006V210.529L312.344 37.818C322.344 29.194 337.5 30.256 346.188 40.35C354.844 50.381 353.719 65.537 343.656 74.193L160.59 232.003H360C373.25 232.003 384 242.753 384 256.003Z" })
  }
));
KipSignRegular.displayName = "KipSignRegular";
var KipSign_default = KipSignRegular;
