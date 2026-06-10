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
var OilTemperature_exports = {};
__export(OilTemperature_exports, {
  default: () => OilTemperature_default
});
module.exports = __toCommonJS(OilTemperature_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OilTemperatureRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M556.201 464.209C535.31 460.477 514.357 448.686 497.201 430.984C488.17 421.672 471.826 421.672 462.795 430.984C442.562 451.854 413.844 463.832 384 463.832S325.437 451.854 305.203 430.984C296.172 421.672 279.828 421.672 270.797 430.984C250.562 451.854 221.844 463.832 192 463.832C159.64 463.832 123.955 450.316 105.205 430.984C96.174 421.672 79.83 421.672 70.799 430.984C51.658 450.74 39.142 460.76 19.799 464.209C6.752 466.529 -1.951 479.041 0.377 492.133C2.689 505.209 15.033 513.959 28.205 511.621C54.392 506.949 72.939 494.861 89.205 480.186C117.205 499.926 155.203 511.998 192 511.998C226.89 511.998 260.812 500.459 288 479.809C342.312 521.061 425.422 521.123 479.795 479.967C500.404 496.334 523.951 507.373 547.795 511.621C549.217 511.873 550.638 511.998 552.029 511.998C563.435 511.998 573.56 503.799 575.623 492.133C577.951 479.041 569.248 466.529 556.201 464.209ZM288 384C332.183 384 368 348.182 368 304C368 268.236 344.377 238.312 312 228.07V152H360C373.25 152 384 141.25 384 128S373.25 104 360 104H312V48H360C373.25 48 384 37.25 384 24S373.25 0 360 0H288C274.75 0 264 10.75 264 24V228.07C231.623 238.312 208 268.236 208 304C208 348.182 243.816 384 288 384ZM288 272C305.644 272 320 286.355 320 304S305.644 336 288 336S256 321.645 256 304S270.355 272 288 272ZM28.205 367.621C54.392 362.949 72.939 350.861 89.205 336.186C117.205 355.926 155.203 367.998 192 367.998C193.346 367.998 194.652 367.705 195.996 367.67C186.062 353.346 179.803 336.514 177.451 318.402C149.42 315.139 121.18 303.455 105.205 286.984C96.174 277.672 79.83 277.672 70.799 286.984C51.658 306.74 39.142 316.76 19.799 320.209C6.752 322.529 -1.951 335.041 0.377 348.133C2.689 361.209 15.033 369.959 28.205 367.621ZM479.795 335.967C500.404 352.334 523.951 363.373 547.795 367.621C549.217 367.873 550.638 367.998 552.029 367.998C563.435 367.998 573.56 359.799 575.623 348.133C577.951 335.041 569.248 322.529 556.201 320.209C535.31 316.477 514.357 304.686 497.201 286.984C488.17 277.672 471.826 277.672 462.795 286.984C445.898 304.412 422.996 315.154 398.551 318.383C396.267 336.01 390.392 352.498 380.9 366.564C416.252 367.207 451.82 357.141 479.795 335.967Z" })
  }
));
OilTemperatureRegular.displayName = "OilTemperatureRegular";
var OilTemperature_default = OilTemperatureRegular;
