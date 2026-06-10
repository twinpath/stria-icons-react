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
const HelmetBattleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M31.994 256C49.619 256 63.994 243.5 63.994 228V0L0.993 221.125C-4.132 238.875 11.243 256 31.994 256ZM575.007 221.125L512.006 0V228C512.006 243.5 526.381 256 544.006 256C564.757 256 580.132 238.875 575.007 221.125ZM480.005 210.875C480.005 90.375 288 0 288 0S95.995 90.375 95.995 210.875C95.995 293.625 73.12 356.75 64.869 391.5C61.494 406 68.494 420.875 81.245 426.75L255.999 512V256L159.997 224V192H416.003V224L320.001 256V512L494.88 426.75C507.506 420.875 514.631 406 511.131 391.5C502.88 356.75 480.005 293.625 480.005 210.875Z" })
  }
));
HelmetBattleSolid.displayName = "HelmetBattleSolid";
var HelmetBattle_default = HelmetBattleSolid;
