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
var Ornament_exports = {};
__export(Ornament_exports, {
  default: () => Ornament_default
});
module.exports = __toCommonJS(Ornament_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OrnamentThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 153.896V112C288 98.766 277.234 88 264 88H229.404C238.402 78.652 244 66.001 244 52C244 23.281 220.719 0 192 0S140 23.281 140 52C140 66.001 145.598 78.652 154.596 88H120C106.766 88 96 98.766 96 112V153.896C38.668 187.107 0 248.975 0 320C0 426.039 85.961 512 192 512S384 426.039 384 320C384 248.975 345.332 187.107 288 153.896ZM192 16C211.852 16 228 32.15 228 52S211.852 88 192 88C172.15 88 156 71.85 156 52S172.15 16 192 16ZM112 112C112 107.594 115.594 104 120 104H264C268.406 104 272 107.594 272 112V144H112V112ZM119.109 160H264.891C303.66 177.736 334.797 209.166 352.357 248H31.643C49.203 209.166 80.34 177.736 119.109 160ZM192 496C120.617 496 59.154 453.213 31.57 392H352.43C324.846 453.213 263.383 496 192 496ZM358.709 376H25.291C19.355 358.383 16 339.592 16 320C16 300.371 19.51 281.627 25.475 264H358.525C364.49 281.627 368 300.371 368 320C368 339.592 364.645 358.383 358.709 376Z" })
  }
));
OrnamentThin.displayName = "OrnamentThin";
var Ornament_default = OrnamentThin;
