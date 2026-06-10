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
var WineGlass_exports = {};
__export(WineGlass_exports, {
  default: () => WineGlass_default
});
module.exports = __toCommonJS(WineGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WineGlassLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240.002 480H176V349.842C252.682 341.098 310.565 272.619 303.401 192.658L288.748 29.104C287.272 12.621 273.654 0 257.344 0H62.656C46.346 0 32.729 12.621 31.252 29.104L16.6 192.658C9.436 272.619 67.318 341.098 144 349.842V480H79.998C71.162 480 63.998 487.162 63.998 496C63.998 504.836 71.162 512 79.998 512H240.002C248.838 512 256.002 504.836 256.002 496C256.002 487.162 248.838 480 240.002 480ZM256.879 32L265.479 128H54.328L62.656 32H256.879ZM154.078 319.217C123.676 317.568 95.861 303.873 75.756 280.656C55.354 257.094 45.664 226.855 48.473 195.514L51.553 160H268.346L271.527 195.514C274.336 226.855 264.647 257.094 244.244 280.656C224.139 303.873 196.324 317.568 165.922 319.217C158.649 319.609 161.463 319.615 154.078 319.217Z" })
  }
));
WineGlassLight.displayName = "WineGlassLight";
var WineGlass_default = WineGlassLight;
