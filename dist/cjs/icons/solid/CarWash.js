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
var CarWash_exports = {};
__export(CarWash_exports, {
  default: () => CarWash_default
});
module.exports = __toCommonJS(CarWash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarWashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M414.516 293.551L387.781 213.334C377.164 181.482 347.359 160 313.785 160H134.219C100.645 160 70.836 181.486 60.219 213.34L33.484 293.551C13.938 301.029 0 319.826 0 342V480C0 497.672 14.328 512 32 512H48C65.672 512 80 497.672 80 480V447H368V480C368 497.672 382.328 512 400 512H416C433.672 512 448 497.672 448 480V342C448 319.826 434.062 301.029 414.516 293.551ZM120.934 233.576C122.844 227.848 128.184 224 134.219 224H313.785C319.82 224 325.156 227.846 327.062 233.57L345.203 288H102.797L120.934 233.576ZM80 392C66.746 392 56 381.254 56 368C56 354.744 66.746 344 80 344S104 354.744 104 368C104 381.254 93.254 392 80 392ZM368 392C354.746 392 344 381.254 344 368C344 354.744 354.746 344 368 344S392 354.744 392 368C392 381.254 381.254 392 368 392ZM384 128C408.307 128 428 108.875 428 85.375C428 61.75 384 0 384 0S340 61.75 340 85.375C340 108.875 359.693 128 384 128ZM224 128C248.307 128 268 108.875 268 85.375C268 61.75 224 0 224 0S180 61.75 180 85.375C180 108.875 199.693 128 224 128ZM64 128C88.307 128 108 108.875 108 85.375C108 61.75 64 0 64 0S20 61.75 20 85.375C20 108.875 39.693 128 64 128Z " })
  }
));
CarWashSolid.displayName = "CarWashSolid";
var CarWash_default = CarWashSolid;
