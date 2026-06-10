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
var PlaneUp_exports = {};
__export(PlaneUp_exports, {
  default: () => PlaneUp_default
});
module.exports = __toCommonJS(PlaneUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 96.002V178.285L8.062 283.381C3.609 285.944 0 292.163 0 297.288V362.789C0 373.414 10.172 381.102 20.391 378.164L192 329.132V400.009L134.406 443.198C130.375 446.229 128 450.979 128 456.01V496.011C128 506.418 137.781 514.043 147.875 511.512L256 480.011L364.125 511.512C374.219 514.043 384 506.418 384 496.011V456.01C384 450.979 381.625 446.229 377.594 443.198L320 400.009V329.132L491.594 378.164C501.812 381.102 512 373.414 512 362.789V297.288C512 291.569 508.922 286.256 503.938 283.413L320 178.285V96.002C320 60.657 291.344 0 256 0S192 60.657 192 96.002ZM16 362.789V297.272L192 196.712V312.491L16 362.789ZM496 297.288L495.988 362.781L320 312.491V196.716L496 297.288ZM304 96.002V408.009L368 456.01L368.6 496.152L256 463.346L144 496.011L144.006 455.999L208 408.009V96.002C208 64.415 233.746 16 256 16S304 64.415 304 96.002Z" })
  }
));
PlaneUpThin.displayName = "PlaneUpThin";
var PlaneUp_default = PlaneUpThin;
