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
var DroneFront_exports = {};
__export(DroneFront_exports, {
  default: () => DroneFront_default
});
module.exports = __toCommonJS(DroneFront_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DroneFrontLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 128H512V112C512 103.156 504.844 96 496 96S480 103.156 480 112V128H368C359.164 128 352 135.162 352 144C352 152.836 359.164 160 368 160H480V238.672C446.525 220.494 383.896 192 320 192S193.475 220.494 160 238.672V160H272C280.836 160 288 152.836 288 144C288 135.162 280.836 128 272 128H160V112C160 103.156 152.844 96 144 96S128 103.156 128 112V128H16C7.164 128 0 135.162 0 144C0 152.836 7.164 160 16 160H128V272C128 289.641 142.344 304 160 304H169.402C152.965 333.184 144 366.316 144 400C144 408.844 151.156 416 160 416S176 408.844 176 400C176 365.514 187.463 331.855 207.732 304H226.094L277.594 348.141C280.5 350.641 284.188 352 288 352H352C355.812 352 359.5 350.641 362.406 348.141L413.906 304H432.268C452.537 331.855 464 365.514 464 400C464 408.844 471.156 416 480 416S496 408.844 496 400C496 366.316 487.037 333.184 470.6 304H480C497.656 304 512 289.641 512 272V160H624C632.836 160 640 152.836 640 144C640 135.162 632.836 128 624 128ZM408 272C404.188 272 400.5 273.359 397.594 275.859L346.094 320H293.906L242.406 275.859C239.5 273.359 235.812 272 232 272H166.102C192.996 256.561 257.113 224 320 224S447.004 256.561 473.898 272H408Z" })
  }
));
DroneFrontLight.displayName = "DroneFrontLight";
var DroneFront_default = DroneFrontLight;
