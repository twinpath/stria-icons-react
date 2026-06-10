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
var HouseMedical_exports = {};
__export(HouseMedical_exports, {
  default: () => HouseMedical_default
});
module.exports = __toCommonJS(HouseMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseMedicalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M565.081 231.906L511.997 185.461V47.985C511.997 39.156 504.841 31.985 495.997 31.985H432.002C423.16 31.985 416.004 39.156 416.004 47.985V101.473L309.082 7.922C303.052 2.64 295.528 0 288.006 0C281.808 0 273.859 1.852 266.926 7.922L10.928 231.906C-11.245 251.315 2.607 288 32.006 288H64.029V448C64.029 483.345 92.683 512 128.029 512H447.998C483.345 512 511.997 483.345 511.997 448V288H544.003C561.739 288 576.003 273.602 576.003 256C576.003 246.947 572.161 238.104 565.081 231.906ZM400.027 330C400.027 338.836 392.863 346 384.027 346H330.028V400C330.028 408.836 322.864 416 314.028 416H262.028C253.192 416 246.028 408.836 246.028 400V346H192.028C183.193 346 176.029 338.836 176.029 330V278C176.029 269.162 183.193 262 192.028 262H246.028V208C246.028 199.162 253.192 192 262.028 192H314.028C322.864 192 330.028 199.162 330.028 208V262H384.027C392.863 262 400.027 269.162 400.027 278V330Z " })
  }
));
HouseMedicalSolid.displayName = "HouseMedicalSolid";
var HouseMedical_default = HouseMedicalSolid;
