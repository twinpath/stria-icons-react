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
var TriangleExclamation_exports = {};
__export(TriangleExclamation_exports, {
  default: () => TriangleExclamation_default
});
module.exports = __toCommonJS(TriangleExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TriangleExclamationRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M506.274 417L292.95 53C284.784 39 270.395 32 255.995 32C241.592 32 227.176 39 218.954 53L5.741 417C-10.591 444.891 9.852 480 42.739 480H469.276C502.051 480 522.606 445 506.274 417ZM52.585 432L255.954 84.803L459.428 432H52.585ZM256.001 337.123C238.637 337.123 224.563 351.199 224.563 368.561C224.563 385.924 238.637 400 256.001 400S287.438 385.924 287.438 368.561C287.438 351.199 273.364 337.123 256.001 337.123ZM232.001 184V280C232.001 293.25 242.751 304 256.001 304S280.001 293.25 280.001 280V184C280.001 170.75 269.251 160 256.001 160S232.001 170.75 232.001 184Z" })
  }
));
TriangleExclamationRegular.displayName = "TriangleExclamationRegular";
var TriangleExclamation_default = TriangleExclamationRegular;
