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
var Buildings_exports = {};
__export(Buildings_exports, {
  default: () => Buildings_default
});
module.exports = __toCommonJS(Buildings_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BuildingsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 0H240C213.49 0 192 21.49 192 48V128H48C21.49 128 0 149.49 0 176V480C0 497.672 14.326 512 32 512H480C497.674 512 512 497.672 512 480V48C512 21.49 490.51 0 464 0ZM128 336C128 344.836 120.836 352 112 352H80C71.164 352 64 344.836 64 336V304C64 295.162 71.164 288 80 288H112C120.836 288 128 295.162 128 304V336ZM128 240C128 248.836 120.836 256 112 256H80C71.164 256 64 248.836 64 240V208C64 199.162 71.164 192 80 192H112C120.836 192 128 199.162 128 208V240ZM320 304C320 312.836 312.836 320 304 320H272C263.164 320 256 312.836 256 304V272C256 263.162 263.164 256 272 256H304C312.836 256 320 263.162 320 272V304ZM320 208C320 216.836 312.836 224 304 224H272C263.164 224 256 216.836 256 208V176C256 167.162 263.164 160 272 160H304C312.836 160 320 167.162 320 176V208ZM320 112C320 120.836 312.836 128 304 128H272C263.164 128 256 120.836 256 112V80C256 71.162 263.164 64 272 64H304C312.836 64 320 71.162 320 80V112ZM448 304C448 312.836 440.836 320 432 320H400C391.164 320 384 312.836 384 304V272C384 263.162 391.164 256 400 256H432C440.836 256 448 263.162 448 272V304ZM448 208C448 216.836 440.836 224 432 224H400C391.164 224 384 216.836 384 208V176C384 167.162 391.164 160 400 160H432C440.836 160 448 167.162 448 176V208ZM448 112C448 120.836 440.836 128 432 128H400C391.164 128 384 120.836 384 112V80C384 71.162 391.164 64 400 64H432C440.836 64 448 71.162 448 80V112Z" })
  }
));
BuildingsSolid.displayName = "BuildingsSolid";
var Buildings_default = BuildingsSolid;
