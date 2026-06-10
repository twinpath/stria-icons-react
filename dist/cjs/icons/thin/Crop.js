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
var Crop_exports = {};
__export(Crop_exports, {
  default: () => Crop_default
});
module.exports = __toCommonJS(Crop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CropThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 408C512 412.406 508.406 416 504 416H416V504C416 508.406 412.406 512 408 512S400 508.406 400 504V123.312L123.313 400H344C348.406 400 352 403.594 352 408S348.406 416 344 416H104C99.594 416 96 412.406 96 408V112H8C3.594 112 0 108.406 0 104S3.594 96 8 96H96V8C96 3.594 99.594 0 104 0S112 3.594 112 8V388.688L388.688 112H168C163.594 112 160 108.406 160 104S163.594 96 168 96H404.688L474.344 26.344C477.469 23.219 482.531 23.219 485.656 26.344S488.781 34.531 485.656 37.656L416 107.312V400H504C508.406 400 512 403.594 512 408Z" })
  }
));
CropThin.displayName = "CropThin";
var Crop_default = CropThin;
