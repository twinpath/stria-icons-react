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
var Headphones_exports = {};
__export(Headphones_exports, {
  default: () => Headphones_default
});
module.exports = __toCommonJS(Headphones_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadphonesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C117.219 32 4.781 144.328 0 288V399.875C0 444.055 35.889 480 80 480C106.467 480 128 458.438 128 431.938V304.062C128 277.562 106.467 256 80 256C53.738 256 30.596 268.91 16 288.547V288.266C20.469 153.531 125.906 48 256 48C386.062 48 491.5 153.531 496 288V288.547C481.404 268.91 458.262 256 432 256C405.533 256 384 277.562 384 304.062V431.938C384 458.438 405.533 480 432 480C476.111 480 512 444.055 512 399.875V287.734C507.188 144.328 394.75 32 256 32ZM80 272C97.656 272 112 286.344 112 304.062V431.938C112 449.641 97.656 464 80 464C44.656 464 16 435.297 16 399.875V336.125C16 300.703 44.656 272 80 272ZM496 399.875C496 435.297 467.344 464 432 464C414.344 464 400 449.641 400 431.938V304.062C400 286.344 414.344 272 432 272C467.344 272 496 300.703 496 336.125V399.875Z" })
  }
));
HeadphonesThin.displayName = "HeadphonesThin";
var Headphones_default = HeadphonesThin;
