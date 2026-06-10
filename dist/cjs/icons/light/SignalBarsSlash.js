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
var SignalBarsSlash_exports = {};
__export(SignalBarsSlash_exports, {
  default: () => SignalBarsSlash_default
});
module.exports = __toCommonJS(SignalBarsSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalBarsSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M95.999 384H63.999C46.327 384 31.999 398.328 31.999 416V480C31.999 497.672 46.327 512 63.999 512H95.999C113.673 512 127.999 497.672 127.999 480V416C127.999 398.328 113.673 384 95.999 384ZM95.999 480H63.999V416H95.999V480ZM384 160H416V250.234L448 275.496V160C448 142.328 433.674 128 416 128H384C366.328 128 352 142.328 352 160V199.703L384 224.969V160ZM544.001 32H576.001V376.551L608.001 401.816V32C608.001 14.328 593.675 0 576.001 0H544.001C526.329 0 512.001 14.328 512.001 32V326.023L544.001 351.289V32ZM192 288V480C192 497.672 206.328 512 224 512H256C273.674 512 288 497.672 288 480V312.281L218.197 257.172C203.402 259.992 192 272.387 192 288ZM224 288H256V480H224V288ZM416 480H384V388.07L352 362.809V480C352 497.672 366.328 512 384 512H416C433.674 512 448 497.672 448 480V438.602L416 413.336V480ZM633.923 483.438L25.921 3.422C18.984 -2.031 8.921 -0.828 3.437 6.062C-2.032 13 -0.845 23.062 6.077 28.547L614.079 508.562C617.016 510.875 620.516 512 623.985 512C628.72 512 633.407 509.906 636.563 505.922C642.032 498.984 640.845 488.922 633.923 483.438Z" })
  }
));
SignalBarsSlashLight.displayName = "SignalBarsSlashLight";
var SignalBarsSlash_default = SignalBarsSlashLight;
