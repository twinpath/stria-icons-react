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
const LoveseatThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72 192C76.418 192 80 188.418 80 184V160C80 98.145 130.145 48 192 48H320C381.855 48 432 98.145 432 160V184C432 188.418 435.582 192 440 192S448 188.418 448 184V160C448 89.305 390.695 32 320 32H192C121.305 32 64 89.305 64 160V184C64 188.418 67.582 192 72 192ZM448 224C412.652 224 384 252.652 384 288H128C128 252.652 99.348 224 64 224S0 252.652 0 288V448C0 465.672 14.328 480 32 480H96C113.672 480 128 465.672 128 448V432H384V448C384 465.672 398.328 480 416 480H480C497.672 480 512 465.672 512 448V288C512 252.652 483.348 224 448 224ZM112 448C112 456.824 104.824 464 96 464H32C23.176 464 16 456.824 16 448V288C16 261.531 37.531 240 64 240S112 261.531 112 288V448ZM384 416H128V304H384V416ZM496 448C496 456.824 488.824 464 480 464H416C407.176 464 400 456.824 400 448V288C400 261.531 421.531 240 448 240S496 261.531 496 288V448Z" })
  }
));
LoveseatThin.displayName = "LoveseatThin";
var Loveseat_default = LoveseatThin;
