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
var Transporter5_exports = {};
__export(Transporter5_exports, {
  default: () => Transporter5_default
});
module.exports = __toCommonJS(Transporter5_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Transporter5Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 160H336C344.844 160 352 152.844 352 144S344.844 128 336 128H176C167.156 128 160 135.156 160 144S167.156 160 176 160ZM224 32H288C296.844 32 304 24.844 304 16S296.844 0 288 0H224C215.156 0 208 7.156 208 16S215.156 32 224 32ZM80 160H64V144C64 135.156 56.844 128 48 128S32 135.156 32 144V160H16C7.156 160 0 167.156 0 176S7.156 192 16 192H32V208C32 216.844 39.156 224 48 224S64 216.844 64 208V192H80C88.844 192 96 184.844 96 176S88.844 160 80 160ZM336 416C344.844 416 352 408.844 352 400S344.844 384 336 384H176C167.156 384 160 391.156 160 400S167.156 416 176 416H336ZM400 256H112C103.156 256 96 263.156 96 272S103.156 288 112 288H400C408.844 288 416 280.844 416 272S408.844 256 400 256ZM496 32H480V16C480 7.156 472.844 0 464 0S448 7.156 448 16V32H432C423.156 32 416 39.156 416 48S423.156 64 432 64H448V80C448 88.844 455.156 96 464 96S480 88.844 480 80V64H496C504.844 64 512 56.844 512 48S504.844 32 496 32ZM368 448H144C117.531 448 96 469.531 96 496C96 504.844 103.156 512 112 512S128 504.844 128 496C128 487.172 135.172 480 144 480H368C376.828 480 384 487.172 384 496C384 504.844 391.156 512 400 512S416 504.844 416 496C416 469.531 394.469 448 368 448Z" })
  }
));
Transporter5Light.displayName = "Transporter5Light";
var Transporter5_default = Transporter5Light;
