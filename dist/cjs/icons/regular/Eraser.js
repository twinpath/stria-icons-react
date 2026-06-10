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
var Eraser_exports = {};
__export(Eraser_exports, {
  default: () => Eraser_default
});
module.exports = __toCommonJS(Eraser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EraserRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.969 273.969C507.281 264.594 511.937 252.281 511.937 239.969C511.937 227.656 507.281 215.344 497.969 205.969L337.969 45.969C328.594 36.656 316.281 32 303.969 32S279.344 36.656 269.969 45.969L13.969 301.969C4.656 311.344 0 323.656 0 335.969S4.656 360.594 13.969 369.969L109.969 465.969C118.932 474.932 131.088 479.968 143.764 479.969L487.997 479.998C487.998 479.998 487.998 479.998 487.999 479.998C501.254 479.998 512 469.252 512 455.997V455.997C512 442.743 501.257 431.998 488.003 431.996L339.844 431.969L497.969 273.969ZM143.969 431.969L47.969 335.969L166.969 216.969L326.969 376.969L271.969 431.969H143.969Z" })
  }
));
EraserRegular.displayName = "EraserRegular";
var Eraser_default = EraserRegular;
