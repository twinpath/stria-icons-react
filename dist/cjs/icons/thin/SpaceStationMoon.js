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
var SpaceStationMoon_exports = {};
__export(SpaceStationMoon_exports, {
  default: () => SpaceStationMoon_default
});
module.exports = __toCommonJS(SpaceStationMoon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpaceStationMoonThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C157.082 480 73.084 415.479 43.492 326.367C111.641 342.959 182.744 352 256 352S400.359 342.959 468.508 326.367C438.916 415.479 354.918 480 256 480ZM256 336C180.939 336 108.104 326.396 38.502 308.629C34.406 291.717 32 274.154 32 256C32 132.486 132.486 32 256 32S480 132.486 480 256C480 274.154 477.594 291.717 473.498 308.629C403.895 326.396 331.061 336 256 336ZM192 80C147.818 80 112 115.816 112 160C112 204.182 147.818 240 192 240C236.184 240 272 204.182 272 160C272 115.816 236.184 80 192 80ZM192 224C156.711 224 128 195.289 128 160S156.711 96 192 96C227.291 96 256 124.711 256 160S227.291 224 192 224ZM192 144C183.164 144 176 151.164 176 160S183.164 176 192 176C200.838 176 208 168.836 208 160S200.838 144 192 144Z" })
  }
));
SpaceStationMoonThin.displayName = "SpaceStationMoonThin";
var SpaceStationMoon_default = SpaceStationMoonThin;
