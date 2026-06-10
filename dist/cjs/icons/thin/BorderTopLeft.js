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
var BorderTopLeft_exports = {};
__export(BorderTopLeft_exports, {
  default: () => BorderTopLeft_default
});
module.exports = __toCommonJS(BorderTopLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BorderTopLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 432C407.178 432 400 439.18 400 448S407.178 464 416 464S432 456.82 432 448S424.822 432 416 432ZM320 432C311.178 432 304 439.18 304 448S311.178 464 320 464S336 456.82 336 448S328.822 432 320 432ZM224 432C215.178 432 208 439.18 208 448S215.178 464 224 464S240 456.82 240 448S232.822 432 224 432ZM128 432C119.178 432 112 439.18 112 448S119.178 464 128 464S144 456.82 144 448S136.822 432 128 432ZM416 144C407.178 144 400 151.18 400 160S407.178 176 416 176S432 168.82 432 160S424.822 144 416 144ZM416 336C407.178 336 400 343.18 400 352S407.178 368 416 368S432 360.82 432 352S424.822 336 416 336ZM440 32H32C14.326 32 0 46.326 0 64V472C0 476.418 3.582 480 8 480S16 476.418 16 472V64C16 55.162 23.164 48 32 48H440C444.418 48 448 44.418 448 40S444.418 32 440 32ZM416 240C407.178 240 400 247.18 400 256S407.178 272 416 272S432 264.82 432 256S424.822 240 416 240Z" })
  }
));
BorderTopLeftThin.displayName = "BorderTopLeftThin";
var BorderTopLeft_default = BorderTopLeftThin;
