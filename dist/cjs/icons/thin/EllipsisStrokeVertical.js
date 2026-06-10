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
var EllipsisStrokeVertical_exports = {};
__export(EllipsisStrokeVertical_exports, {
  default: () => EllipsisStrokeVertical_default
});
module.exports = __toCommonJS(EllipsisStrokeVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EllipsisStrokeVerticalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 192 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 16C122.467 16 144 37.533 144 64S122.467 112 96 112S48 90.467 48 64S69.533 16 96 16M96 208C122.467 208 144 229.533 144 256S122.467 304 96 304S48 282.467 48 256S69.533 208 96 208M96 400C122.467 400 144 421.533 144 448S122.467 496 96 496S48 474.467 48 448S69.533 400 96 400M96 0C60.625 0 32 28.611 32 64S60.625 128 96 128S160 99.389 160 64S131.375 0 96 0L96 0ZM96 192C60.625 192 32 220.611 32 256S60.625 320 96 320S160 291.389 160 256S131.375 192 96 192L96 192ZM96 384C60.625 384 32 412.611 32 448S60.625 512 96 512S160 483.389 160 448S131.375 384 96 384L96 384Z" })
  }
));
EllipsisStrokeVerticalThin.displayName = "EllipsisStrokeVerticalThin";
var EllipsisStrokeVertical_default = EllipsisStrokeVerticalThin;
