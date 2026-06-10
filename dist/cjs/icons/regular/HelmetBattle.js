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
var HelmetBattle_exports = {};
__export(HelmetBattle_exports, {
  default: () => HelmetBattle_default
});
module.exports = __toCommonJS(HelmetBattle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HelmetBattleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M31.994 256C49.619 256 63.994 243.5 63.994 228V0L0.993 221.125C-4.132 238.875 11.243 256 31.994 256ZM575.007 221.125L512.006 0V228C512.006 243.5 526.381 256 544.006 256C564.757 256 580.132 238.875 575.007 221.125ZM480.005 210.875C480.005 90.375 288 0 288 0S95.995 90.375 95.995 210.875C95.995 293.625 73.12 356.75 64.869 391.5C61.494 406 68.494 420.875 81.245 426.75L242.749 505.5C251.499 509.75 260.999 512 270.75 512H305.25C315.001 512 324.501 509.75 333.251 505.5L494.88 426.75C507.506 420.875 514.631 406 511.131 391.5C502.88 356.75 480.005 293.625 480.005 210.875ZM312.001 462.5V288L400.003 256V224H175.997V256L263.999 288V462.5L114.871 389.75C115.621 387 116.496 384 117.246 381C127.996 342.375 143.996 284 143.996 210.875C143.996 147.375 235.874 83.125 288 54C340.126 83.125 432.004 147.375 432.004 210.875C432.004 284 448.004 342.375 458.754 381C459.504 384 460.379 387 461.129 389.75L312.001 462.5Z" })
  }
));
HelmetBattleRegular.displayName = "HelmetBattleRegular";
var HelmetBattle_default = HelmetBattleRegular;
