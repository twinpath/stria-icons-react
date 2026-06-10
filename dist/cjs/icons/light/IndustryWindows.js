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
var IndustryWindows_exports = {};
__export(IndustryWindows_exports, {
  default: () => IndustryWindows_default
});
module.exports = __toCommonJS(IndustryWindows_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IndustryWindowsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M487.922 128C483.623 128 479.217 129.176 475.125 131.764L336 224V152.014C336 137.965 324.434 128.002 311.922 128C307.623 128 303.217 129.176 299.125 131.764L160 224V64C160 46.326 145.674 32 128 32H32C14.328 32 0 46.326 0 64V448C0 465.674 14.328 480 32 480H480C497.674 480 512 465.674 512 448V152.014C512 137.965 500.434 128 487.922 128ZM480 448H32V64H128V283.609L177.684 250.672L304 166.918V283.609L353.684 250.672L480 166.918V448ZM160 320H96C87.156 320 80 327.156 80 336V400C80 408.844 87.156 416 96 416H160C168.844 416 176 408.844 176 400V336C176 327.156 168.844 320 160 320ZM144 384H112V352H144V384ZM288 320H224C215.156 320 208 327.156 208 336V400C208 408.844 215.156 416 224 416H288C296.844 416 304 408.844 304 400V336C304 327.156 296.844 320 288 320ZM272 384H240V352H272V384ZM336 336V400C336 408.844 343.156 416 352 416H416C424.844 416 432 408.844 432 400V336C432 327.156 424.844 320 416 320H352C343.156 320 336 327.156 336 336ZM368 352H400V384H368V352Z" })
  }
));
IndustryWindowsLight.displayName = "IndustryWindowsLight";
var IndustryWindows_default = IndustryWindowsLight;
