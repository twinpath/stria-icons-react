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
var Aperture_exports = {};
__export(Aperture_exports, {
  default: () => Aperture_default
});
module.exports = __toCommonJS(Aperture_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ApertureLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM440.338 160H237.531L299.508 52.656C360.787 65.758 412.061 105.926 440.338 160ZM329.898 255.998L292.945 320H219.053L182.102 256.002L219.055 192H292.947L329.898 255.998ZM256 48C259.029 48 261.979 48.326 264.977 48.455L163.625 223.996L101.795 116.906C139.889 74.715 194.814 48 256 48ZM80.736 144.445L182.096 320H58.18C51.633 299.816 48 278.336 48 256C48 214.939 60.117 176.725 80.736 144.445ZM71.662 352H274.469L212.492 459.344C151.213 446.242 99.939 406.074 71.662 352ZM256 464C252.971 464 250.021 463.674 247.023 463.545L348.375 288.004L410.205 395.094C372.111 437.285 317.186 464 256 464ZM431.264 367.555L329.904 192H453.82C460.367 212.184 464 233.664 464 256C464 297.061 451.883 335.275 431.264 367.555Z" })
  }
));
ApertureLight.displayName = "ApertureLight";
var Aperture_default = ApertureLight;
