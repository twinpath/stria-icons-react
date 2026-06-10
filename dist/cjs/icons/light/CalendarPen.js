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
var CalendarPen_exports = {};
__export(CalendarPen_exports, {
  default: () => CalendarPen_default
});
module.exports = __toCommonJS(CalendarPen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarPenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 64H352V16C352 7.164 344.836 0 336 0S320 7.164 320 16V64H128V16C128 7.164 120.836 0 112 0S96 7.164 96 16V64H64C28.654 64 0 92.654 0 128V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V128C448 92.654 419.346 64 384 64ZM416 448C416 465.674 401.674 480 384 480H64C46.326 480 32 465.674 32 448V192H416V448ZM416 160H32V128C32 110.326 46.326 96 64 96H384C401.674 96 416 110.326 416 128V160ZM131.002 447.68L191.787 435.527C194.855 434.914 197.678 433.402 199.896 431.184L322.062 309.031C329.621 301.477 334.887 291.664 335.824 281.016C336.982 267.875 332.393 255.312 323.209 246.133L315.037 237.957C307.479 230.398 297.67 225.125 287.025 224.18C273.889 223.008 261.324 227.594 252.133 236.773L128.818 360.098C126.602 362.312 125.094 365.137 124.477 368.211L112.316 428.996C110.1 440.109 119.891 449.906 131.002 447.68ZM274.574 259.246C279.227 254.602 286.762 254.594 291.414 259.25L300.752 268.586C305.393 273.227 305.42 280.762 300.748 285.43L289.529 296.648L263.352 270.469L274.574 259.246ZM154.672 379.156L240.895 292.926L267.072 319.102L180.846 405.328L148.129 411.867L154.672 379.156Z" })
  }
));
CalendarPenLight.displayName = "CalendarPenLight";
var CalendarPen_default = CalendarPenLight;
