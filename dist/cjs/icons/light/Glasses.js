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
var Glasses_exports = {};
__export(Glasses_exports, {
  default: () => Glasses_default
});
module.exports = __toCommonJS(Glasses_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GlassesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M563.141 232.762L532.531 111.986C518.609 57.114 465.906 22.865 412.703 34.146C404.062 35.959 398.516 44.458 400.344 53.083C402.156 61.77 410.656 67.457 419.297 65.457C455.625 57.801 491.828 81.675 501.5 119.861L532.109 240.636C534.688 250.798 536.186 261.194 537.93 271.537C515.578 263.946 484.842 256.511 448.625 256.511C411.375 256.511 368.375 264.51 323.625 288.009H252.375C207.625 264.51 164.75 256.511 127.375 256.511C91.158 256.511 60.422 263.946 38.07 271.537C39.814 261.194 41.312 250.798 43.891 240.636L74.5 119.861C84.188 81.675 120.406 57.801 156.703 65.457C165.375 67.457 173.844 61.77 175.656 53.083C177.484 44.458 171.938 35.959 163.297 34.146C109.875 22.865 57.375 57.114 43.469 111.986L12.859 232.762C4.328 266.416 0 301.165 0 336.007V369.255C0 430.377 50.125 480 112 480H148.125C206.75 480 255.375 435.377 259.75 377.505L264.125 320.008H311.875L316.25 377.505C320.625 435.377 369.25 480 427.875 480H464C525.875 480 576 430.377 576 369.255V336.007C576 301.165 571.672 266.416 563.141 232.762ZM227.875 375.13C224.75 416.003 189.75 448.002 148.125 448.002H112C67.875 448.002 32 412.753 32 369.255V336.007C32 326.412 33.072 316.885 33.781 307.33C52.84 299.372 86.359 288.509 127.375 288.509C163.75 288.509 199 297.009 232.5 313.633L227.875 375.13ZM544 369.255C544 412.753 508.125 448.002 464 448.002H427.875C386.25 448.002 351.25 416.003 348.125 375.13L343.5 313.633C377 297.009 412.25 288.509 448.625 288.509C489.76 288.509 523.166 299.372 542.219 307.33C542.928 316.885 544 326.412 544 336.007V369.255Z" })
  }
));
GlassesLight.displayName = "GlassesLight";
var Glasses_default = GlassesLight;
