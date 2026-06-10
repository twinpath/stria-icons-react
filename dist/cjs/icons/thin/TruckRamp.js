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
var TruckRamp_exports = {};
__export(TruckRamp_exports, {
  default: () => TruckRamp_default
});
module.exports = __toCommonJS(TruckRamp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckRampThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360.001 352C364.407 352 368.001 348.422 368.001 344V72C368.001 41.125 393.126 16 424.001 16H632.001C636.407 16 640.001 12.422 640.001 8S636.407 0 632.001 0H424.001C384.313 0 352.001 32.297 352.001 72V344C352.001 348.422 355.595 352 360.001 352ZM528.001 288C466.145 288 416.001 338.145 416.001 400C416.001 400.092 416.028 400.174 416.028 400.266C375.526 400.934 335.216 406.465 296.157 417.125L5.907 496.281C1.626 497.438 -0.874 501.844 0.282 506.109C1.251 509.656 4.47 512 8.001 512C8.688 512 9.407 511.906 10.095 511.719L300.345 432.562C338.577 422.137 378 416.75 417.636 416.213C425.548 470.32 471.698 512 528.001 512C589.856 512 640.001 461.855 640.001 400S589.856 288 528.001 288ZM528.001 496C475.065 496 432.001 452.934 432.001 400C432.001 347.064 475.065 304 528.001 304S624.001 347.064 624.001 400C624.001 452.934 580.936 496 528.001 496Z" })
  }
));
TruckRampThin.displayName = "TruckRampThin";
var TruckRamp_default = TruckRampThin;
