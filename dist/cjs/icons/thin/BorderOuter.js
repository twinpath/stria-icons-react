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
var BorderOuter_exports = {};
__export(BorderOuter_exports, {
  default: () => BorderOuter_default
});
module.exports = __toCommonJS(BorderOuter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BorderOuterThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 240C119.18 240 112 247.18 112 256S119.18 272 128 272S144 264.82 144 256S136.82 240 128 240ZM224 240C215.18 240 208 247.18 208 256S215.18 272 224 272S240 264.82 240 256S232.82 240 224 240ZM224 336C215.18 336 208 343.18 208 352S215.18 368 224 368S240 360.82 240 352S232.82 336 224 336ZM224 144C215.18 144 208 151.18 208 160S215.18 176 224 176S240 168.82 240 160S232.82 144 224 144ZM320 240C311.18 240 304 247.18 304 256S311.18 272 320 272S336 264.82 336 256S328.82 240 320 240ZM416 32H32C14.328 32 0 46.326 0 64V448C0 465.674 14.328 480 32 480H416C433.672 480 448 465.674 448 448V64C448 46.326 433.672 32 416 32ZM432 448C432 456.822 424.824 464 416 464H32C23.176 464 16 456.822 16 448V64C16 55.178 23.176 48 32 48H416C424.824 48 432 55.178 432 64V448Z" })
  }
));
BorderOuterThin.displayName = "BorderOuterThin";
var BorderOuter_default = BorderOuterThin;
