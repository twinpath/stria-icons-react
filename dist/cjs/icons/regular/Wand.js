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
var Wand_exports = {};
__export(Wand_exports, {
  default: () => Wand_default
});
module.exports = __toCommonJS(Wand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WandRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432.021 192.045C440.896 192.045 448.021 184.92 448.021 176.045V141.92L502.021 82.045C515.771 66.795 515.271 43.42 500.771 28.92L483.021 11.294C468.521 -3.205 445.271 -3.83 430.021 9.92L157.269 256.045H112.018C103.143 256.045 96.018 263.17 96.018 272.045V311.294L17.518 382.17H17.393C6.643 391.92 0.393 405.67 0.018 420.17C-0.357 434.67 5.268 448.67 15.518 458.92L53.018 496.545C63.268 506.795 77.393 512.419 91.893 512.044C106.393 511.67 120.143 505.294 129.894 494.545L402.77 192.045H432.021ZM94.268 462.42C93.393 463.294 90.018 465.67 87.018 462.545L49.518 425.045C46.518 422.045 48.768 418.545 49.643 417.795L455.521 51.67L460.396 56.545L94.268 462.42Z" })
  }
));
WandRegular.displayName = "WandRegular";
var Wand_default = WandRegular;
