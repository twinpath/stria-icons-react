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
var Car_exports = {};
__export(Car_exports, {
  default: () => Car_default
});
module.exports = __toCommonJS(Car_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 256C94.328 256 80 270.326 80 288C80 305.672 94.328 320 112 320S144 305.672 144 288C144 270.326 129.672 256 112 256ZM400 256C382.328 256 368 270.326 368 288C368 305.672 382.328 320 400 320S432 305.672 432 288C432 270.326 417.672 256 400 256ZM462.939 188.74L422.375 87.328C408.938 53.719 376.859 32 340.672 32H171.328C135.141 32 103.062 53.719 89.625 87.328L49.061 188.74C19.91 205.219 0 236.125 0 272V448C0 465.672 14.326 480 32 480S64 465.672 64 448V400H448V448C448 465.672 462.326 480 480 480S512 465.672 512 448V272C512 236.125 492.09 205.219 462.939 188.74ZM134.188 105.141C140.297 89.875 154.875 80 171.328 80H340.672C357.125 80 371.703 89.875 377.812 105.141L406.156 176H105.844L134.188 105.141ZM464 352H48V272C48 245.533 69.533 224 96 224H416C442.467 224 464 245.533 464 272V352Z" })
  }
));
CarRegular.displayName = "CarRegular";
var Car_default = CarRegular;
