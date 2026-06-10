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
var PersonSledding_exports = {};
__export(PersonSledding_exports, {
  default: () => PersonSledding_default
});
module.exports = __toCommonJS(PersonSledding_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSleddingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M505.023 420.1C495.719 410.738 480.586 410.693 471.224 420L471.125 420.1C459.023 432.199 440.625 435.5 426.023 428.799L35.023 226.6C23.232 220.525 8.748 225.158 2.672 236.949C-3.402 248.74 1.23 263.225 13.023 269.301L404.924 471.9C416.555 477.266 429.215 480.029 442.023 480C465.642 480.035 488.307 470.682 505.023 454C514.326 444.613 514.326 429.486 505.023 420.1ZM400.023 32C373.514 32 352.023 53.49 352.023 80S373.514 128 400.023 128S448.023 106.51 448.023 80S426.533 32 400.023 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.1 256H301.301L347.4 209.9C356.357 200.922 361.396 188.764 361.418 176.082C361.463 149.572 340.01 128.045 313.5 128H160C142.326 128 128 142.326 128 160S142.326 192 160 192H242.801L169.4 265.4C166.408 268.354 164.059 271.895 162.5 275.801C160.561 280.861 159.941 286.332 160.699 291.699L215.471 320H320V374L376.9 403.4C381.1 398 384.1 391.5 384.1 384V288C384.1 270.326 369.773 256 352.1 256Z" })
    ]
  }
));
PersonSleddingDuotone.displayName = "PersonSleddingDuotone";
var PersonSledding_default = PersonSleddingDuotone;
