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
var RulerHorizontal_exports = {};
__export(RulerHorizontal_exports, {
  default: () => RulerHorizontal_default
});
module.exports = __toCommonJS(RulerHorizontal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerHorizontalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 128H48C21.6 128 0 149.6 0 176V336C0 362.4 21.6 384 48 384H592C618.4 384 640 362.4 640 336V176C640 149.6 618.4 128 592 128ZM624 336C624 353.645 609.645 368 592 368H48C30.355 368 16 353.645 16 336V176C16 158.355 30.355 144 48 144H120V224C120 228.406 123.578 232 128 232S136 228.406 136 224V144H216V224C216 228.406 219.578 232 224 232S232 228.406 232 224V144H312V224C312 228.406 315.578 232 320 232S328 228.406 328 224V144H408V224C408 228.406 411.578 232 416 232S424 228.406 424 224V144H504V224C504 228.406 507.578 232 512 232S520 228.406 520 224V144H592C609.645 144 624 158.355 624 176V336Z" })
  }
));
RulerHorizontalThin.displayName = "RulerHorizontalThin";
var RulerHorizontal_default = RulerHorizontalThin;
