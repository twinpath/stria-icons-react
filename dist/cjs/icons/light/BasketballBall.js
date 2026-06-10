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
var BasketballBall_exports = {};
__export(BasketballBall_exports, {
  default: () => BasketballBall_default
});
module.exports = __toCommonJS(BasketballBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BasketballBallLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM463.979 256.406C413.334 258.279 367.139 277.543 331.188 308.562L278.625 256L413.783 120.842C445.004 157.234 464 204.402 464 256C464 256.137 463.979 256.27 463.979 256.406ZM391.158 413.783C362.594 438.289 327.348 455.055 288.547 461.193C290.93 420.449 306.459 383.209 331.18 353.805L391.158 413.783ZM391.158 98.217L256 233.375L203.438 180.812C234.455 144.863 253.721 98.67 255.594 48.021C255.73 48.021 255.863 48 256 48C307.598 48 354.766 66.996 391.158 98.217ZM120.842 98.217C149.406 73.711 184.652 56.945 223.453 50.807C221.07 91.551 205.541 128.791 180.82 158.195L120.842 98.217ZM98.217 120.842L158.197 180.822C128.795 205.543 91.555 221.07 50.807 223.453C56.945 184.652 73.711 149.406 98.217 120.842ZM48.021 255.594C98.666 253.721 144.861 234.457 180.812 203.438L233.375 256L98.217 391.158C66.996 354.766 48 307.598 48 256C48 255.863 48.021 255.73 48.021 255.594ZM120.842 413.783L256 278.625L308.562 331.187C277.545 367.137 258.279 413.33 256.406 463.979C256.27 463.979 256.137 464 256 464C204.402 464 157.234 445.004 120.842 413.783ZM413.783 391.158L353.803 331.178C383.205 306.457 420.445 290.93 461.193 288.547C455.055 327.348 438.289 362.594 413.783 391.158Z" })
  }
));
BasketballBallLight.displayName = "BasketballBallLight";
var BasketballBall_default = BasketballBallLight;
