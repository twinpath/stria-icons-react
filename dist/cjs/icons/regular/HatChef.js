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
const HatChefRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400.001 448C400.001 456.836 392.837 464 384.001 464H128.001C119.165 464 112.001 456.836 112.001 448V384H64.001V448C64.001 483.199 92.801 512 128.001 512H384.001C419.2 512 448.001 483.199 448.001 448V384H400.001V448ZM416.001 32C395.126 32.125 374.876 39 358.251 51.75C334.876 20.5 298 0 256.001 0C214 0 177.126 20.5 153.751 51.75C136.717 38.682 116.233 31.996 95.618 31.994C81.135 31.994 66.588 35.295 53.126 42C20.376 58.125 -0.124 91.5 0.001 128C0.001 169.75 64.001 352 64.001 352H448.001C448.001 352 512.001 169.75 512.001 128C512.001 75 469.001 32 416.001 32ZM415.952 304H374.077L399.735 162.875C401.329 154.156 395.563 145.844 386.86 144.25C378.172 142.938 369.844 148.438 368.266 157.125L341.561 304H272.001V160C272.001 151.156 264.844 144 256.001 144S240.001 151.156 240.001 160V304H170.44L143.735 157.125C142.172 148.438 133.782 142.906 125.141 144.25C116.438 145.844 110.672 154.156 112.266 162.875L137.924 304H96.049C71.444 243.217 48.477 145.465 48.001 127.836C47.938 109.48 58.026 93.09 74.526 84.965C81.149 81.666 88.245 79.994 95.618 79.994C106.145 79.994 116.145 83.396 124.532 89.832L163.083 119.41L192.188 80.5C207.637 59.846 230.897 48 256.001 48C281.106 48 304.364 59.846 319.815 80.5L348.913 119.402L387.462 89.838C395.772 83.465 405.741 80.062 416.001 80C442.467 80 464.001 101.533 464.003 127.898C463.524 145.473 440.559 243.219 415.952 304Z" })
  }
));
HatChefRegular.displayName = "HatChefRegular";
var HatChef_default = HatChefRegular;
