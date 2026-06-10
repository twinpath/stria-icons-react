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
var FaceTired_exports = {};
__export(FaceTired_exports, {
  default: () => FaceTired_default
});
module.exports = __toCommonJS(FaceTired_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceTiredDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.42 16 256S123.461 496 256 496S496 388.58 496 256S388.539 16 256 16ZM126.793 248.25L160.457 208L126.793 167.75C118.195 157.375 130.547 142.75 142.172 149.75L222.215 197.75C229.965 202.375 229.965 213.625 222.215 218.25L142.172 266.25C130.668 273.125 118.195 258.75 126.793 248.25ZM361.473 415.125C335.559 404 297.051 397.75 256 397.75S176.441 404 150.527 415.125C140.719 419.25 131.152 408.125 132.848 394.75C140.719 331.75 204.051 288 256 288S371.281 331.75 379.152 394.75C380.848 408.25 371.16 419.25 361.473 415.125ZM369.828 266.25L289.785 218.25C282.156 213.625 282.156 202.375 289.785 197.75L369.828 149.75C381.453 142.75 393.805 157.375 385.207 167.75L351.543 208L385.207 248.25C393.926 258.75 381.332 273.125 369.828 266.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M385.286 248.25L351.622 208L385.286 167.75C393.884 157.375 381.532 142.75 369.907 149.75L289.864 197.75C282.235 202.375 282.235 213.625 289.864 218.25L369.907 266.25C381.411 273.125 394.005 258.75 385.286 248.25ZM142.251 149.75C130.626 142.75 118.274 157.375 126.872 167.75L160.536 208L126.872 248.25C118.274 258.75 130.747 273.125 142.251 266.25L222.294 218.25C230.044 213.625 230.044 202.375 222.294 197.75L142.251 149.75Z" })
    ]
  }
));
FaceTiredDuotone.displayName = "FaceTiredDuotone";
var FaceTired_default = FaceTiredDuotone;
