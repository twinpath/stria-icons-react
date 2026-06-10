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
var LocationCrosshairs_exports = {};
__export(LocationCrosshairs_exports, {
  default: () => LocationCrosshairs_default
});
module.exports = __toCommonJS(LocationCrosshairs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationCrosshairsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 224H445.125C431.625 143.625 368.375 80.375 288 66.875V32C288 14.327 273.673 0 256 0H256C238.327 0 224 14.327 224 32V66.875C143.625 80.375 80.375 143.625 66.875 224H32C14.327 224 0 238.327 0 256V256C0 273.673 14.327 288 32 288H66.875C80.375 368.375 143.625 431.625 224 445.125V480C224 497.673 238.327 512 256 512H256C273.673 512 288 497.673 288 480V445.125C368.375 431.625 431.625 368.375 445.125 288H480C497.673 288 512 273.673 512 256V256C512 238.327 497.673 224 480 224ZM256 384C185.25 384 128 326.75 128 256S185.25 128 256 128S384 185.25 384 256S326.75 384 256 384ZM256 168C207.375 168 168 207.375 168 256S207.375 344 256 344S344 304.625 344 256S304.625 168 256 168Z" })
  }
));
LocationCrosshairsSolid.displayName = "LocationCrosshairsSolid";
var LocationCrosshairs_default = LocationCrosshairsSolid;
