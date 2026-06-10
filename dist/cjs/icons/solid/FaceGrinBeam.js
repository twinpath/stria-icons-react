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
var FaceGrinBeam_exports = {};
__export(FaceGrinBeam_exports, {
  default: () => FaceGrinBeam_default
});
module.exports = __toCommonJS(FaceGrinBeam_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceGrinBeamSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM336.043 152C359.777 152 388.719 181.25 391.988 223.375C392.715 232 381.211 235.25 377.094 227.875L367.648 210.875C359.898 197.25 348.395 189.25 336.043 189.25C323.813 189.25 312.309 197.25 304.559 210.875L295.113 227.875C290.996 235.25 279.492 231.875 280.219 223.375C283.246 181.25 312.188 152 336.043 152ZM175.957 152C199.812 152 228.754 181.25 232.023 223.375C232.75 232 221.246 235.25 217.129 227.875L207.562 210.875C199.934 197.25 188.43 189.25 176.078 189.25C163.848 189.25 152.344 197.25 144.594 210.875L135.148 227.875C130.91 235.25 119.527 231.875 120.254 223.375C123.281 181.25 152.223 152 175.957 152ZM256 432C195.453 432 121.465 393.75 112.141 338.75C110.203 326.75 121.586 317.125 132.848 320.75C163.121 330.5 208.047 336 256 336S348.879 330.5 379.152 320.75C390.535 317.125 401.676 326.875 399.859 338.75C390.535 393.75 316.547 432 256 432Z" })
  }
));
FaceGrinBeamSolid.displayName = "FaceGrinBeamSolid";
var FaceGrinBeam_default = FaceGrinBeamSolid;
