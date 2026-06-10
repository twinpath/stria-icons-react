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
var DollyEmpty_exports = {};
__export(DollyEmpty_exports, {
  default: () => DollyEmpty_default
});
module.exports = __toCommonJS(DollyEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DollyEmptyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.012 330.469C571.934 322.156 562.762 317.953 554.465 320.984L330.529 403.488C319.02 373.434 290.104 352 256 352C250.982 352 246.111 352.592 241.35 353.477L141.766 54.703C130.859 21.984 100.359 0 65.875 0H16C7.156 0 0 7.156 0 16S7.156 32 16 32H65.875C86.563 32 104.859 45.188 111.422 64.828L211.629 365.469C190.158 379.814 176 404.24 176 432C176 476.182 211.818 512 256 512C298.91 512 333.643 478.133 335.625 435.715L565.527 351.016C573.824 347.953 578.059 338.766 575.012 330.469ZM256 480C229.533 480 208 458.467 208 432S229.533 384 256 384S304 405.533 304 432S282.467 480 256 480Z" })
  }
));
DollyEmptyLight.displayName = "DollyEmptyLight";
var DollyEmpty_default = DollyEmptyLight;
