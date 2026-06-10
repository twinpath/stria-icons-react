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
var SolarPanel_exports = {};
__export(SolarPanel_exports, {
  default: () => SolarPanel_default
});
module.exports = __toCommonJS(SolarPanel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SolarPanelSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.373 25.719C572.389 10.781 559.248 0 543.998 0H96.002C80.752 0 67.611 10.781 64.627 25.719L0.627 345.719C-1.264 355.125 1.174 364.875 7.252 372.281S22.408 384 32.002 384H287.969V448.25H239.762C213.502 448.25 192.016 469.738 192.016 496C192.016 504.844 199.189 512.01 208.033 512L432.008 511.75C440.836 511.74 447.988 504.58 447.988 495.75C447.988 469.379 426.611 448 400.244 448H351.963V384H607.998C617.592 384 626.67 379.688 632.748 372.281S641.264 355.125 639.373 345.719L575.373 25.719ZM517.764 64L536.965 160H438.988L429.238 64H517.764ZM380.119 64L389.867 160H250.01L259.883 64H380.119ZM210.764 64L201.016 160H103.035L122.234 64H210.764ZM71.156 320L71.844 315.951L93.435 208H196.141L184.643 320H71.156ZM233.762 320L245.135 208H394.867L406.24 320H233.762ZM455.362 320L443.862 208H546.567L568.182 316.08L568.848 320H455.362Z" })
  }
));
SolarPanelSolid.displayName = "SolarPanelSolid";
var SolarPanel_default = SolarPanelSolid;
