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
var CarRear_exports = {};
__export(CarRear_exports, {
  default: () => CarRear_default
});
module.exports = __toCommonJS(CarRear_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarRearRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M462.939 188.74L422.375 87.328C408.938 53.719 376.859 32 340.672 32H171.328C135.141 32 103.062 53.719 89.625 87.328L49.061 188.74C19.91 205.219 0 236.125 0 272V336C0 359.629 12.951 380.037 32 391.123V448C32 465.672 46.326 480 64 480S96 465.672 96 448V400H416V448C416 465.672 430.326 480 448 480S480 465.672 480 448V391.123C499.049 380.037 512 359.629 512 336V272C512 236.125 492.09 205.219 462.939 188.74ZM134.188 105.141C140.297 89.875 154.875 80 171.328 80H340.672C357.125 80 371.703 89.875 377.812 105.141L406.156 176H105.844L134.188 105.141ZM448 352H320V320C320 302.326 305.674 288 288 288H224C206.326 288 192 302.326 192 320V352H64C55.178 352 48 344.822 48 336V304H88C101.254 304 112 293.254 112 280S101.254 256 88 256H50.947C57.574 237.418 75.17 224 96 224H416C436.83 224 454.426 237.418 461.053 256H424C410.744 256 400 266.746 400 280S410.744 304 424 304H464V336C464 344.822 456.822 352 448 352Z" })
  }
));
CarRearRegular.displayName = "CarRearRegular";
var CarRear_default = CarRearRegular;
