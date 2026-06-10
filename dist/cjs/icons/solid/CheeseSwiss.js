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
var CheeseSwiss_exports = {};
__export(CheeseSwiss_exports, {
  default: () => CheeseSwiss_default
});
module.exports = __toCommonJS(CheeseSwiss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheeseSwissSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 336.005C341.5 336.005 320 314.506 320 288.007H0V448.001C0 465.626 14.375 480 32 480H480C497.625 480 512 465.626 512 448.001V288.007H416C416 314.506 394.5 336.005 368 336.005ZM176 432.002C149.5 432.002 128 410.503 128 384.004S149.5 336.005 176 336.005S224 357.505 224 384.004S202.5 432.002 176 432.002ZM299.875 32.017C292.125 31.767 284.625 34.267 278.75 39.017L217 87.015C229.625 107.889 224.625 134.763 205.5 149.763C186.25 164.762 158.875 162.887 141.875 145.513L0 256.009H512C512 136.138 417.999 38.267 299.875 32.017Z" })
  }
));
CheeseSwissSolid.displayName = "CheeseSwissSolid";
var CheeseSwiss_default = CheeseSwissSolid;
