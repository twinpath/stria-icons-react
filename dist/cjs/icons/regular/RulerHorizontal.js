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
var RulerHorizontal_exports = {};
__export(RulerHorizontal_exports, {
  default: () => RulerHorizontal_default
});
module.exports = __toCommonJS(RulerHorizontal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerHorizontalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 128H48C21.6 128 0 149.6 0 176V336C0 362.4 21.6 384 48 384H592C618.4 384 640 362.4 640 336V176C640 149.6 618.4 128 592 128ZM592 336H48V176H112V224C112 232.8 119.2 240 128 240H128C136.8 240 144 232.8 144 224V176H208V224C208 232.8 215.2 240 224 240H224C232.8 240 240 232.8 240 224V176H304V224C304 232.8 311.2 240 320 240H320C328.8 240 336 232.8 336 224V176H400V224C400 232.8 407.2 240 416 240H416C424.8 240 432 232.8 432 224V176H496V224C496 232.8 503.2 240 512 240H512C520.8 240 528 232.8 528 224V176H592V336Z" })
  }
));
RulerHorizontalRegular.displayName = "RulerHorizontalRegular";
var RulerHorizontal_default = RulerHorizontalRegular;
