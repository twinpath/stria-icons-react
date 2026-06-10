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
var ArrowPointer_exports = {};
__export(ArrowPointer_exports, {
  default: () => ArrowPointer_default
});
module.exports = __toCommonJS(ArrowPointer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowPointerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M318.449 304.476C314.918 313.82 305.98 319.992 295.996 319.992H190.976L236.125 414.81C245.621 434.751 237.156 458.615 217.217 468.116L217.216 468.116C197.271 477.619 173.398 469.151 163.899 449.203L117.282 351.298L42.281 439.545C37.64 445.014 30.906 447.998 24 447.998C21.218 447.998 18.422 447.514 15.719 446.529C6.281 443.061 0 434.06 0 423.997V55.98C0 46.542 5.531 37.979 14.125 34.104C22.75 30.26 32.828 31.76 39.874 37.979L311.871 277.99C319.355 284.6 321.98 295.147 318.449 304.476Z" })
  }
));
ArrowPointerSolid.displayName = "ArrowPointerSolid";
var ArrowPointer_default = ArrowPointerSolid;
