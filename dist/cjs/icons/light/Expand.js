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
var Expand_exports = {};
__export(Expand_exports, {
  default: () => Expand_default
});
module.exports = __toCommonJS(Expand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ExpandLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 32H16C7.156 32 0 39.156 0 48V176C0 184.844 7.156 192 16 192S32 184.844 32 176V64H144C152.844 64 160 56.844 160 48S152.844 32 144 32ZM144 448H32V336C32 327.156 24.844 320 16 320S0 327.156 0 336V464C0 472.844 7.156 480 16 480H144C152.844 480 160 472.844 160 464S152.844 448 144 448ZM432 320C423.156 320 416 327.156 416 336V448H304C295.156 448 288 455.156 288 464S295.156 480 304 480H432C440.844 480 448 472.844 448 464V336C448 327.156 440.844 320 432 320ZM432 32H304C295.156 32 288 39.156 288 48S295.156 64 304 64H416V176C416 184.844 423.156 192 432 192S448 184.844 448 176V48C448 39.156 440.844 32 432 32Z" })
  }
));
ExpandLight.displayName = "ExpandLight";
var Expand_default = ExpandLight;
