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
var BanParking_exports = {};
__export(BanParking_exports, {
  default: () => BanParking_default
});
module.exports = __toCommonJS(BanParking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BanParkingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256C64 219.984 74.15 186.375 91.473 157.543L391.02 392.32C356.307 426.705 308.604 448 256 448ZM208 187.875V176H272C298.469 176 320 197.531 320 224C320 239.174 312.787 252.561 301.762 261.363L208 187.875ZM420.531 354.451L339.852 291.217C357.107 273.934 368 250.332 368 224C368 171.062 324.938 128 272 128H184C171.285 128 161.123 137.984 160.305 150.492L120.984 119.676C155.697 85.293 203.398 64 256 64C361.869 64 448 150.131 448 256C448 292.014 437.85 325.619 420.531 354.451ZM184 384C197.25 384 208 373.25 208 360V320H220.92L160 272.252V360C160 373.25 170.75 384 184 384Z" })
  }
));
BanParkingRegular.displayName = "BanParkingRegular";
var BanParking_default = BanParkingRegular;
