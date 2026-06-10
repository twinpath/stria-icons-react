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
var BezierCurve_exports = {};
__export(BezierCurve_exports, {
  default: () => BezierCurve_default
});
module.exports = __toCommonJS(BezierCurve_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BezierCurveThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 176C586.51 176 608 154.51 608 128S586.51 80 560 80C536.23 80 516.631 97.32 512.807 120H384V96C384 78.326 369.674 64 352 64H288C270.326 64 256 78.326 256 96V120H127.193C123.369 97.32 103.77 80 80 80C53.49 80 32 101.49 32 128S53.49 176 80 176C103.77 176 123.369 158.68 127.193 136H241.689C170.223 166.533 120 237.5 120 320H96C78.326 320 64 334.326 64 352V416C64 433.672 78.326 448 96 448H160C177.674 448 192 433.672 192 416V352C192 334.326 177.674 320 160 320H136C136 241.074 186.045 173.789 256 147.711V160C256 177.672 270.326 192 288 192H352C369.674 192 384 177.672 384 160V147.711C453.955 173.789 504 241.074 504 320H480C462.326 320 448 334.326 448 352V416C448 433.672 462.326 448 480 448H544C561.674 448 576 433.672 576 416V352C576 334.326 561.674 320 544 320H520C520 237.5 469.777 166.533 398.311 136H512.807C516.631 158.68 536.23 176 560 176ZM560 96C577.645 96 592 110.355 592 128S577.645 160 560 160S528 145.645 528 128S542.355 96 560 96ZM80 160C62.355 160 48 145.645 48 128S62.355 96 80 96S112 110.355 112 128S97.645 160 80 160ZM160 336C168.822 336 176 343.178 176 352V416C176 424.822 168.822 432 160 432H96C87.178 432 80 424.822 80 416V352C80 343.178 87.178 336 96 336H160ZM368 160C368 168.822 360.822 176 352 176H288C279.178 176 272 168.822 272 160V96C272 87.178 279.178 80 288 80H352C360.822 80 368 87.178 368 96V160ZM544 336C552.822 336 560 343.178 560 352V416C560 424.822 552.822 432 544 432H480C471.178 432 464 424.822 464 416V352C464 343.178 471.178 336 480 336H544Z" })
  }
));
BezierCurveThin.displayName = "BezierCurveThin";
var BezierCurve_default = BezierCurveThin;
