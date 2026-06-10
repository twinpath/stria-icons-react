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
var LaptopMobile_exports = {};
__export(LaptopMobile_exports, {
  default: () => LaptopMobile_default
});
module.exports = __toCommonJS(LaptopMobile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopMobileThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M344 304C348.418 304 352 300.418 352 296S348.418 288 344 288H80V48C80 30.326 94.328 16 112 16H464C481.674 16 496 30.326 496 48V88C496 92.418 499.582 96 504 96S512 92.418 512 88V48C512 21.5 490.5 0.125 464.125 0H111.875C85.5 0.125 64 21.5 64 48V288H16C7.164 288 0 295.164 0 304V320C0.125 355.25 28.625 383.875 63.875 384H344C348.418 384 352 380.418 352 376S348.418 368 344 368H63.932C37.596 367.906 16.094 346.348 16 320V304H344ZM604 128H420C400.125 128 384 144.125 384 164V476C384 495.875 400.125 512 420 512H604C623.875 512 640 495.875 640 476V164C640 144.125 623.875 128 604 128ZM624 476C624 487.027 615.029 496 604 496H420C408.973 496 400 487.027 400 476V164C400 152.973 408.973 144 420 144H604C615.029 144 624 152.973 624 164V476Z" })
  }
));
LaptopMobileThin.displayName = "LaptopMobileThin";
var LaptopMobile_default = LaptopMobileThin;
