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
var HouseLaptop_exports = {};
__export(HouseLaptop_exports, {
  default: () => HouseLaptop_default
});
module.exports = __toCommonJS(HouseLaptop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseLaptopLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.999 304.012V432.004C287.999 440.848 295.155 448.004 303.999 448.004S319.999 440.848 319.999 432.004V304.012C319.999 295.199 327.171 288.012 335.999 288.012H559.999C568.827 288.012 575.999 295.199 575.999 304.012V432.004C575.999 440.848 583.155 448.004 591.999 448.004S607.999 440.848 607.999 432.004V304.012C607.999 277.544 586.468 256.014 559.999 256.014H335.999C309.53 256.014 287.999 277.544 287.999 304.012ZM623.999 480.002H271.999C263.155 480.002 255.999 487.158 255.999 496.001S263.155 512 271.999 512H623.999C632.843 512 639.999 504.844 639.999 496.001S632.843 480.002 623.999 480.002ZM208.038 383.945H111.974C103.138 383.945 95.976 376.781 95.976 367.945L95.999 170.718L239.999 37.808L437.14 219.766C440.218 222.61 444.108 224.016 447.999 224.016C456.971 224.016 463.998 216.708 463.998 208.013C463.998 203.711 462.269 199.423 458.858 196.268L415.999 156.707V64.025C415.999 55.182 408.843 48.026 399.999 48.026S383.999 55.182 383.999 64.025V127.17L250.858 4.278C247.78 1.435 243.89 0.013 239.999 0.013S232.218 1.435 229.14 4.278L21.14 196.268C17.729 199.423 16 203.711 16 208.013C16 216.758 23.106 224.035 31.983 224.035C35.875 224.035 39.777 222.617 42.858 219.766L63.976 200.275V367.945C63.976 394.454 85.466 415.943 111.976 415.943H208.038C216.854 415.943 223.999 408.797 223.999 399.983V399.905C223.999 391.091 216.854 383.945 208.038 383.945ZM239.999 272.013H207.999V208.017H271.999C271.999 216.86 279.155 224.016 287.999 224.016S303.999 216.86 303.999 208.017V192.018C303.999 183.174 296.843 176.019 287.999 176.019H191.999C183.155 176.019 175.999 183.174 175.999 192.018V288.012C175.999 296.856 183.155 304.012 191.999 304.012H239.999C248.843 304.012 255.999 296.856 255.999 288.012C255.999 279.169 248.843 272.013 239.999 272.013Z " })
  }
));
HouseLaptopLight.displayName = "HouseLaptopLight";
var HouseLaptop_default = HouseLaptopLight;
