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
var Loveseat_exports = {};
__export(Loveseat_exports, {
  default: () => Loveseat_default
});
module.exports = __toCommonJS(Loveseat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LoveseatLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 224C412.654 224 384 252.652 384 288H128C128 252.652 99.346 224 64 224S0 252.652 0 288V448C0 465.672 14.326 480 32 480H96C113.674 480 128 465.672 128 448H384C384 465.672 398.326 480 416 480H480C497.674 480 512 465.672 512 448V288C512 252.652 483.346 224 448 224ZM96 448H32V288C32 270.355 46.355 256 64 256S96 270.355 96 288V448ZM384 416H128V320H384V416ZM480 448H416V288C416 270.355 430.355 256 448 256S480 270.355 480 288V448ZM80 192C88.844 192 96 184.844 96 176V144C96 99.875 131.891 64 176 64H336C380.109 64 416 99.875 416 144V176C416 184.844 423.156 192 432 192S448 184.844 448 176V144C448 82.25 397.75 32 336 32H176C114.25 32 64 82.25 64 144V176C64 184.844 71.156 192 80 192Z" })
  }
));
LoveseatLight.displayName = "LoveseatLight";
var Loveseat_default = LoveseatLight;
