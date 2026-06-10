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
var PlaneProp_exports = {};
__export(PlaneProp_exports, {
  default: () => PlaneProp_default
});
module.exports = __toCommonJS(PlaneProp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlanePropSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 256C576 291.344 515.342 320 479.998 320H347.428L338.285 384H368V368C368 359.162 375.164 352 384 352S400 359.162 400 368V400C408.836 400 416 407.162 416 416C416 424.836 408.836 432 400 432V464C400 472.836 392.836 480 384 480S368 472.836 368 464V448H329.143L321.963 498.262C320.836 506.145 314.086 512 306.123 512H269.877C261.914 512 255.164 506.145 254.037 498.262L246.857 448H224C206.326 448 192 433.672 192 416C192 398.326 206.326 384 224 384H237.715L227.855 314.988L120.848 306.07L110.836 376.15C110.191 380.654 106.334 384 101.785 384H58.215C53.666 384 49.809 380.654 49.164 376.15L36.572 288H32C14.326 288 0 273.672 0 256C0 238.326 14.326 224 32 224H36.572L49.164 135.85C49.809 131.346 53.666 128 58.215 128H101.785C106.334 128 110.191 131.346 110.836 135.85L120.848 205.93L227.855 197.012L237.715 128H224C206.326 128 192 113.672 192 96C192 78.326 206.326 64 224 64H246.857L254.037 13.736C255.164 5.854 261.914 0 269.877 0H306.123C314.086 0 320.836 5.854 321.963 13.736L329.143 64H368V48C368 39.162 375.164 32 384 32S400 39.162 400 48V80C408.836 80 416 87.162 416 96C416 104.836 408.836 112 400 112V144C400 152.836 392.836 160 384 160S368 152.836 368 144V128H338.285L347.428 192H479.998C515.342 192 576 220.656 576 256Z" })
  }
));
PlanePropSolid.displayName = "PlanePropSolid";
var PlaneProp_default = PlanePropSolid;
