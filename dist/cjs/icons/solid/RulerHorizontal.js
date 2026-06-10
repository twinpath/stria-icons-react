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
const RulerHorizontalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 160V352C640 369.6 625.6 384 608 384H32C14.4 384 0 369.6 0 352V160C0 142.4 14.4 128 32 128H112V208C112 216.799 119.199 224 128 224S144 216.799 144 208V128H208V208C208 216.799 215.199 224 224 224S240 216.799 240 208V128H304V208C304 216.799 311.199 224 320 224S336 216.799 336 208V128H400V208C400 216.799 407.199 224 416 224S432 216.799 432 208V128H496V208C496 216.836 503.164 224 512 224C520.838 224 528 216.836 528 208V128H608C625.6 128 640 142.4 640 160Z" })
  }
));
RulerHorizontalSolid.displayName = "RulerHorizontalSolid";
var RulerHorizontal_default = RulerHorizontalSolid;
