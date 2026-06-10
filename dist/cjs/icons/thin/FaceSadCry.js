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
var FaceSadCry_exports = {};
__export(FaceSadCry_exports, {
  default: () => FaceSadCry_default
});
module.exports = __toCommonJS(FaceSadCry_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceSadCryThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M211.578 231.156C215.531 229.188 217.125 224.375 215.156 220.406C203.906 197.969 182.766 184 160 184S116.094 197.969 104.844 220.406C102.875 224.375 104.469 229.188 108.422 231.156C112.344 233.125 117.188 231.531 119.156 227.594C127.672 210.562 143.328 200 160 200S192.328 210.562 200.844 227.594C202.25 230.375 205.078 232 208 232C209.203 232 210.438 231.719 211.578 231.156ZM256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM360 454.221V288C360 283.594 356.422 280 352 280S344 283.594 344 288V461.939C316.967 473.535 287.23 480 256 480S195.033 473.535 168 461.939V288C168 283.594 164.422 280 160 280S152 283.594 152 288V454.221C80.75 416.684 32 341.977 32 256C32 132.484 132.484 32 256 32S480 132.484 480 256C480 341.977 431.25 416.684 360 454.221ZM352 184C329.234 184 308.094 197.969 296.844 220.406C294.875 224.375 296.469 229.188 300.422 231.156C304.344 233.125 309.188 231.531 311.156 227.594C319.672 210.562 335.328 200 352 200S384.328 210.562 392.844 227.594C394.25 230.375 397.078 232 400 232C401.203 232 402.438 231.719 403.578 231.156C407.531 229.188 409.125 224.375 407.156 220.406C395.906 197.969 374.766 184 352 184ZM256 288C229.531 288 208 316.719 208 352S229.531 416 256 416S304 387.281 304 352S282.469 288 256 288ZM256 400C238.656 400 224 378.031 224 352S238.656 304 256 304S288 325.969 288 352S273.344 400 256 400Z" })
  }
));
FaceSadCryThin.displayName = "FaceSadCryThin";
var FaceSadCry_default = FaceSadCryThin;
