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
var SquareArrowUp_exports = {};
__export(SquareArrowUp_exports, {
  default: () => SquareArrowUp_default
});
module.exports = __toCommonJS(SquareArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H384C419.344 480 448 451.344 448 416V96C448 60.656 419.344 32 384 32ZM350.625 254.625C338.125 267.125 317.875 267.125 305.375 254.625L256 205.25V384C256 401.688 241.672 416 224 416S192 401.688 192 384V205.25L142.625 254.625C130.125 267.125 109.875 267.125 97.375 254.625S84.875 221.875 97.375 209.375L201.354 105.398C209.336 97.398 219.1 96 224 96C228.881 96 238.654 97.391 246.646 105.398L350.625 209.375C363.125 221.875 363.125 242.125 350.625 254.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M350.509 254.625C338.009 267.125 317.759 267.125 305.259 254.625L255.884 205.25V384C255.884 401.688 241.556 416 223.884 416S191.884 401.688 191.884 384V205.25L142.509 254.625C130.009 267.125 109.759 267.125 97.259 254.625S84.759 221.875 97.259 209.375L201.238 105.398C209.22 97.398 218.984 96 223.884 96C228.765 96 238.539 97.391 246.531 105.398L350.509 209.375C363.009 221.875 363.009 242.125 350.509 254.625Z" })
    ]
  }
));
SquareArrowUpDuotone.displayName = "SquareArrowUpDuotone";
var SquareArrowUp_default = SquareArrowUpDuotone;
