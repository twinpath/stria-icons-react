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
var Transporter6_exports = {};
__export(Transporter6_exports, {
  default: () => Transporter6_default
});
module.exports = __toCommonJS(Transporter6_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Transporter6Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 288H400C408.844 288 416 280.844 416 272S408.844 256 400 256H112C103.156 256 96 263.156 96 272S103.156 288 112 288ZM224 32H288C296.844 32 304 24.844 304 16S296.844 0 288 0H224C215.156 0 208 7.156 208 16S215.156 32 224 32ZM80 32H64V16C64 7.156 56.844 0 48 0S32 7.156 32 16V32H16C7.156 32 0 39.156 0 48S7.156 64 16 64H32V80C32 88.844 39.156 96 48 96S64 88.844 64 80V64H80C88.844 64 96 56.844 96 48S88.844 32 80 32ZM496 384H480V368C480 359.156 472.844 352 464 352S448 359.156 448 368V384H432C423.156 384 416 391.156 416 400S423.156 416 432 416H448V432C448 440.844 455.156 448 464 448S480 440.844 480 432V416H496C504.844 416 512 408.844 512 400S504.844 384 496 384ZM368 448H144C117.531 448 96 469.531 96 496C96 504.844 103.156 512 112 512S128 504.844 128 496C128 487.172 135.172 480 144 480H368C376.828 480 384 487.172 384 496C384 504.844 391.156 512 400 512S416 504.844 416 496C416 469.531 394.469 448 368 448Z" })
  }
));
Transporter6Light.displayName = "Transporter6Light";
var Transporter6_default = Transporter6Light;
