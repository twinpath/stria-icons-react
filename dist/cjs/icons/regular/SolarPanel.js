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
const SolarPanelRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.373 25.719C572.388 10.781 559.248 0 543.998 0H96.002C80.752 0 67.611 10.781 64.627 25.719L0.627 345.719C-1.264 355.125 1.174 364.875 7.252 372.281S22.408 384 32.002 384H295.969V464H215.625C202.371 464 191.625 474.744 191.625 488C191.625 501.254 202.371 512 215.625 512H424C437.254 512 448 501.254 448 488C448 474.744 437.254 464 424 464H343.963V384H607.998C617.592 384 626.67 379.688 632.748 372.281S641.263 355.125 639.373 345.719L575.373 25.719ZM553.279 160H437.822L427.156 48H530.879L553.279 160ZM389.605 160H250.394L261.06 48H378.939L389.605 160ZM109.121 48H212.844L202.178 160H86.721L109.121 48ZM77.121 208H197.605L185.416 336H51.521L77.121 208ZM233.631 336L245.822 208H394.178L406.369 336H233.631ZM454.584 336L442.394 208H562.879L588.478 336H454.584Z" })
  }
));
SolarPanelRegular.displayName = "SolarPanelRegular";
var SolarPanel_default = SolarPanelRegular;
