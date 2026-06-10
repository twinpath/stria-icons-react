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
var GrateDroplet_exports = {};
__export(GrateDroplet_exports, {
  default: () => GrateDroplet_default
});
module.exports = __toCommonJS(GrateDroplet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GrateDropletThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 416V96C16 69.49 37.49 48 64 48H384C410.51 48 432 69.49 432 96V152C432 156.418 435.582 160 440 160L440 160C444.418 160 448 156.418 448 152V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H312C316.418 480 320 476.418 320 472L320 472C320 467.582 316.418 464 312 464H64C37.49 464 16 442.51 16 416ZM96 96C78.326 96 64 110.326 64 128V384C64 401.672 78.326 416 96 416H296C304.836 416 312 408.836 312 400V264H368C376.836 264 384 256.836 384 248V128C384 110.326 369.674 96 352 96H96ZM136 400H96C87.178 400 80 392.822 80 384V264H136V400ZM136 248H80V128C80 119.178 87.178 112 96 112H136V248ZM216 400H152V264H216V400ZM216 248H152V112H216V248ZM296 400H232V264H296V400ZM296 248H232V112H296V248ZM368 128V248H312V112H352C360.822 112 368 119.178 368 128ZM482.594 205.83C480.053 196.711 472.035 192 463.994 192C456.119 192 448.221 196.514 445.406 205.83C415.656 304.344 352 331.219 352 400.672C352 462.156 402.094 512 464 512S576 462.156 576 400.672C576 330.828 512.49 304.891 482.594 205.83ZM464 496C411.066 496 368 453.236 368 400.672C368 369.281 383.719 347.158 403.617 319.15C422.434 292.668 445.85 259.709 460.723 210.455C460.945 209.721 461.465 208 463.994 208C465.178 208 466.691 208.369 467.275 210.451C482.234 260.014 505.668 292.889 524.496 319.305C545.107 348.221 560 369.113 560 400.672C560 453.236 516.936 496 464 496Z" })
  }
));
GrateDropletThin.displayName = "GrateDropletThin";
var GrateDroplet_default = GrateDropletThin;
