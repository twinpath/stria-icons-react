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
var GlobeSnow_exports = {};
__export(GlobeSnow_exports, {
  default: () => GlobeSnow_default
});
module.exports = __toCommonJS(GlobeSnow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GlobeSnowSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 416H64L16.625 487.125C9.5 497.75 17.125 512 29.875 512H418.125C430.875 512 438.5 497.75 431.375 487.125L384 416ZM192 384V352H134.125C119.875 352 112.125 337 121.25 327.125L186.75 256H156.625C145.875 256 140.125 244.75 146.875 237.25L214.25 164.125C219.25 158.625 228.625 158.625 233.625 164.125L301 237.25C307.75 244.75 302 256 291.25 256H261.25L326.75 327.125C335.75 337 328 352 313.75 352H256V384H380.125C421.75 343.375 448 286.875 448 224C448 100.25 347.75 0 224 0S0 100.25 0 224C0 286.875 26.125 343.375 67.875 384H192ZM336 160C344.75 160 352 167.25 352 176S344.75 192 336 192S320 184.75 320 176S327.25 160 336 160ZM240 64C248.75 64 256 71.25 256 80S248.75 96 240 96S224 88.75 224 80S231.25 64 240 64ZM80 224C88.75 224 96 231.25 96 240S88.75 256 80 256S64 248.75 64 240S71.25 224 80 224Z" })
  }
));
GlobeSnowSolid.displayName = "GlobeSnowSolid";
var GlobeSnow_default = GlobeSnowSolid;
