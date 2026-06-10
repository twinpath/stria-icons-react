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
var HatChef_exports = {};
__export(HatChef_exports, {
  default: () => HatChef_default
});
module.exports = __toCommonJS(HatChef_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HatChefSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416.001 32C395.126 32.125 374.876 39 358.251 51.75C334.876 20.5 298 0 256.001 0C214 0 177.126 20.5 153.751 51.75C124.751 29.5 85.751 25.75 53.126 42C20.376 58.125 -0.124 91.5 0.001 128C0.001 169.75 64.001 320 64.001 320H138.448L112.219 162.625C110.751 153.906 116.657 145.656 125.376 144.219C133.938 142.625 142.313 148.625 143.782 157.375L170.885 320H240.001V160C240.001 151.156 247.157 144 256.001 144S272.001 151.156 272.001 160V320H341.116L368.219 157.375C369.688 148.625 378.157 142.625 386.626 144.219C395.344 145.656 401.251 153.906 399.782 162.625L373.553 320H448.001C448.001 320 512.001 169.75 512.001 128C512.001 75 469.001 32 416.001 32ZM64.001 480C64.001 497.602 78.401 512 96.001 512H416.001C433.6 512 448.001 497.602 448.001 480V352H64.001V480Z" })
  }
));
HatChefSolid.displayName = "HatChefSolid";
var HatChef_default = HatChefSolid;
