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
var BellSchoolSlash_exports = {};
__export(BellSchoolSlash_exports, {
  default: () => BellSchoolSlash_default
});
module.exports = __toCommonJS(BellSchoolSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BellSchoolSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 32C369 32 448 111 448 208C448 228.801 444.178 248.684 437.514 267.227L463.642 287.855C478.553 252.283 484.172 211.848 476.5 169.281C461.697 87.156 396.312 20.381 314.449 4.201C252.629 -8.018 194.525 7.416 149.766 40.051L175.959 60.729C203.611 42.627 236.574 32 272 32ZM262.394 128.971L351.09 198.996C346.553 159.152 313.041 128 272 128C268.711 128 265.58 128.584 262.394 128.971ZM464 480H416V413.322L384 388.059V448C384 465.674 369.674 480 352 480H192C174.326 480 160 465.674 160 448V383.125C192.375 403.875 230.75 416 272 416C311.75 416 348.695 404.533 380.31 385.146L353.381 363.885C329.012 376.666 301.357 384 272 384C175 384 96 305 96 208C96 193.162 98.051 178.826 101.529 165.049L74.377 143.611C67.766 163.91 64 185.496 64 208C64 266.875 88.625 320 128 357.875V448C128 483.199 156.801 512 192 512H464C483.976 512 502.191 504.58 516.176 492.412L489.967 471.719C482.449 476.701 473.701 480 464 480ZM633.908 483.436L25.904 3.418C18.998 -2.02 8.935 -0.848 3.435 6.059C-2.033 12.998 -0.846 23.061 6.092 28.545L614.096 508.563C617.033 510.875 620.533 512 624.002 512C628.721 512 633.408 509.906 636.564 505.922C642.033 498.984 640.846 488.922 633.908 483.436Z" })
  }
));
BellSchoolSlashLight.displayName = "BellSchoolSlashLight";
var BellSchoolSlash_default = BellSchoolSlashLight;
