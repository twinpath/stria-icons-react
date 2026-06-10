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
var TvRetro_exports = {};
__export(TvRetro_exports, {
  default: () => TvRetro_default
});
module.exports = __toCommonJS(TvRetro_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TvRetroDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H322.031L377.063 40.969C386.438 31.594 386.438 16.406 377.063 7.031S352.5 -2.344 343.125 7.031L256.094 94.062L169.062 7.031C159.687 -2.344 144.5 -2.344 135.125 7.031S125.75 31.594 135.125 40.969L190.156 96H64C28.654 96 0 124.654 0 160V448C0 483.346 28.654 512 64 512H448C483.346 512 512 483.346 512 448V160C512 124.654 483.346 96 448 96ZM384.094 384C384.094 419.346 355.439 448 320.094 448H128.094C92.748 448 64.094 419.346 64.094 384V224C64.094 188.652 92.748 160 128.094 160H320.094C355.439 160 384.094 188.652 384.094 224V384ZM448.094 336C434.84 336 424.094 325.254 424.094 312C424.094 298.742 434.84 288 448.094 288S472.094 298.742 472.094 312C472.094 325.254 461.348 336 448.094 336ZM448.094 256C434.84 256 424.094 245.254 424.094 232C424.094 218.742 434.84 208 448.094 208S472.094 218.742 472.094 232C472.094 245.254 461.348 256 448.094 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 224V384C384 419.346 355.346 448 320 448H128C92.654 448 64 419.346 64 384V224C64 188.652 92.654 160 128 160H320C355.346 160 384 188.652 384 224Z" })
    ]
  }
));
TvRetroDuotone.displayName = "TvRetroDuotone";
var TvRetro_default = TvRetroDuotone;
