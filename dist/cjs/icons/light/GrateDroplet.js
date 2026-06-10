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
const GrateDropletLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 448C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V194.07C421.486 178.889 433.186 167.375 448 162.574V96C448 60.652 419.346 32 384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H344.215C337.631 470.184 332.717 459.314 328.705 448H64ZM364.5 291.344C371.055 282.109 377.602 272.488 384 262.412V128C384 110.326 369.674 96 352 96H96C78.326 96 64 110.326 64 128V384C64 401.672 78.326 416 96 416H321.557C321.002 410.896 320 405.92 320 400.672C320 394.893 320.357 389.35 321.006 384H312V272H352V309.375C356.098 303.275 360.291 297.27 364.5 291.344ZM136 384H96V272H136V384ZM136 240H96V128H136V240ZM208 384H168V272H208V384ZM208 240H168V128H208V240ZM280 384H240V272H280V384ZM280 240H240V128H280V240ZM312 240V128H352V240H312ZM482.594 205.83C480.053 196.711 472.035 192 463.994 192C456.119 192 448.221 196.514 445.406 205.83C415.656 304.344 352 331.219 352 400.672C352 462.156 402.094 512 464 512S576 462.156 576 400.672C576 330.828 512.49 304.891 482.594 205.83ZM464 480C419.889 480 384 444.414 384 400.672C384 375.557 395.199 358.623 416.66 328.418C431.648 307.322 449.457 282.258 463.99 248.268C478.586 282.463 496.441 307.512 511.467 328.592C532.846 358.582 544 375.408 544 400.672C544 444.414 508.111 480 464 480Z" })
  }
));
GrateDropletLight.displayName = "GrateDropletLight";
var GrateDroplet_default = GrateDropletLight;
