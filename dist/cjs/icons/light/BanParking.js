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
const BanParkingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 384C200.844 384 208 376.844 208 368V320H252.125L220.125 288H208V275.875L176 243.875V368C176 376.844 183.156 384 192 384ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256C48 204.402 66.996 157.234 98.217 120.842L391.158 413.783C354.766 445.004 307.598 464 256 464ZM208 185.375V160H288C323.281 160 352 188.719 352 224C352 252.506 333.127 276.439 307.318 284.693L208 185.375ZM413.783 391.158L331.598 308.973C362.631 293.17 384 261.186 384 224C384 171.062 340.938 128 288 128H208C192.297 128 179.818 139.559 177.115 154.49L120.842 98.217C157.234 66.996 204.402 48 256 48C370.691 48 464 141.309 464 256C464 307.598 445.004 354.766 413.783 391.158Z" })
  }
));
BanParkingLight.displayName = "BanParkingLight";
var BanParking_default = BanParkingLight;
