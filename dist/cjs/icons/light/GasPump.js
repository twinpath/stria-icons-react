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
var GasPump_exports = {};
__export(GasPump_exports, {
  default: () => GasPump_default
});
module.exports = __toCommonJS(GasPump_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GasPumpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.646 120.021L412.32 29.586C406.07 23.326 395.928 23.322 389.672 29.578C383.43 35.82 383.418 45.939 389.648 52.195L416 78.625V160C416 186.51 437.49 208 464 208H480V382.25C480 398.217 469.127 413.07 453.365 415.627C433.369 418.869 416 403.496 416 384V336C416 291.816 380.184 256 336 256H320V64C320 28.801 291.201 0 256 0H96C60.801 0 32 28.801 32 64V480H16C7.201 480 0 487.199 0 496S7.201 512 16 512H336C344.801 512 352 504.801 352 496S344.801 480 336 480H320V288H336C362.51 288 384 309.49 384 336V380.992C384 411.939 404.57 440.578 434.908 446.695C475.883 454.955 512 423.504 512 384V142.625C512 134.148 508.637 126.02 502.646 120.021ZM288 480H64V224H288V480ZM288 192H64V64C64 46.375 78.375 32 96 32H256C273.625 32 288 46.375 288 64V192ZM480 176H464C455.25 176 448 168.75 448 160V110.625L480 142.625V176Z" })
  }
));
GasPumpLight.displayName = "GasPumpLight";
var GasPump_default = GasPumpLight;
