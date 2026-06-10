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
const PlaneUpSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 297.287V362.789C512 373.414 501.812 381.102 491.594 378.164L320 329.133V400.01L377.594 443.197C381.625 446.229 384 450.979 384 456.01V496.012C384 506.418 374.219 514.043 364.125 511.512L256 480.012L147.875 511.512C137.781 514.043 128 506.418 128 496.012V456.01C128 450.979 130.375 446.229 134.406 443.197L192 400.01V329.133L20.391 378.164C10.172 381.102 0 373.414 0 362.789V297.287C0 292.162 3.609 285.943 8.062 283.381L192 178.285V96.002C192 60.658 220.656 0 256 0S320 60.658 320 96.002V178.285L503.938 283.412C508.922 286.256 512 291.568 512 297.287Z" })
  }
));
PlaneUpSolid.displayName = "PlaneUpSolid";
var PlaneUp_default = PlaneUpSolid;
