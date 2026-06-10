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
const TvRetroLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H299.236L378.406 28.141C385.125 22.391 385.906 12.297 380.156 5.594C374.375 -1.141 364.281 -1.875 357.594 3.859L256 90.922L154.406 3.859C147.75 -1.875 137.656 -1.141 131.844 5.594C126.094 12.297 126.875 22.391 133.594 28.141L212.764 96H64C28.654 96 0 124.654 0 160V448C0 483.346 28.654 512 64 512H448C483.348 512 512 483.346 512 448V160C512 124.654 483.348 96 448 96ZM480 448C480 465.645 465.645 480 448 480H64C46.355 480 32 465.645 32 448V160C32 142.355 46.355 128 64 128H448C465.645 128 480 142.355 480 160V448ZM320 160H128C92.654 160 64 188.654 64 224V384C64 419.346 92.654 448 128 448H320C355.348 448 384 419.346 384 384V224C384 188.654 355.348 160 320 160ZM352 384C352 401.645 337.645 416 320 416H128C110.355 416 96 401.645 96 384V224C96 206.355 110.355 192 128 192H320C337.645 192 352 206.355 352 224V384ZM432 184C418.746 184 408 194.744 408 208C408 221.254 418.746 232 432 232C445.256 232 456 221.254 456 208C456 194.744 445.256 184 432 184ZM432 248C418.746 248 408 258.744 408 272C408 285.254 418.746 296 432 296C445.256 296 456 285.254 456 272C456 258.744 445.256 248 432 248Z" })
  }
));
TvRetroLight.displayName = "TvRetroLight";
var TvRetro_default = TvRetroLight;
