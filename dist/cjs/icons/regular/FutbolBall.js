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
var FutbolBall_exports = {};
__export(FutbolBall_exports, {
  default: () => FutbolBall_default
});
module.exports = __toCommonJS(FutbolBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FutbolBallRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M178 228.625L207.875 320H304.375L334 228.625L256 172.125L178 228.625ZM256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM416.646 360.836L331.236 359.555L306.082 441.145C290.086 445.477 273.35 448 256 448S221.914 445.477 205.918 441.145L180.764 359.555L95.354 360.836C77.238 333.172 66.215 300.578 64.482 265.539L134.266 216.445L106.652 135.609L106.645 135.617C127.805 109.414 155.729 89.004 187.707 76.773C187.703 76.777 187.703 76.781 187.699 76.781L256 128L324.301 76.781C324.297 76.781 324.291 76.773 324.287 76.773C356.27 89.004 384.193 109.414 405.355 135.617C405.354 135.617 405.35 135.613 405.348 135.609L377.734 216.445L447.518 265.539C445.785 300.578 434.762 333.172 416.646 360.836Z" })
  }
));
FutbolBallRegular.displayName = "FutbolBallRegular";
var FutbolBall_default = FutbolBallRegular;
