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
var CarBuilding_exports = {};
__export(CarBuilding_exports, {
  default: () => CarBuilding_default
});
module.exports = __toCommonJS(CarBuilding_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarBuildingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 192H112C103.164 192 96 199.162 96 208V240C96 248.836 103.164 256 112 256H144C152.836 256 160 248.836 160 240V208C160 199.162 152.836 192 144 192ZM144 288H112C103.164 288 96 295.162 96 304V336C96 344.836 103.164 352 112 352H144C152.836 352 160 344.836 160 336V304C160 295.162 152.836 288 144 288ZM208 96C199.164 96 192 103.162 192 112V144C192 152.836 199.164 160 208 160H240C248.836 160 256 152.836 256 144V112C256 103.162 248.836 96 240 96H208ZM144 96H112C103.164 96 96 103.162 96 112V144C96 152.836 103.164 160 112 160H144C152.836 160 160 152.836 160 144V112C160 103.162 152.836 96 144 96ZM304 56V104C304 117.25 314.75 128 328 128S352 117.25 352 104V56C352 25.125 326.875 0 296 0H56C25.125 0 0 25.125 0 56V456C0 469.25 10.75 480 24 480S48 469.25 48 456V56C48 51.594 51.594 48 56 48H296C300.406 48 304 51.594 304 56ZM256 212.098V208C256 199.162 248.836 192 240 192H208C199.164 192 192 199.162 192 208V240C192 248.836 199.164 256 208 256H238.443L256 212.098ZM602.441 284.383L570.625 204.84C559.721 177.596 533.725 160 504.393 160H359.609C330.277 160 304.281 177.596 293.381 204.828L261.561 284.383C238.879 301.957 224 329.152 224 360V480C224 497.672 238.326 512 256 512S288 497.672 288 480V448H576V480C576 497.672 590.326 512 608 512S640 497.672 640 480V360C640 329.152 625.121 301.957 602.441 284.383ZM337.943 222.664C341.508 213.76 350.012 208 359.609 208H504.393C513.99 208 522.494 213.76 526.059 222.664L542.592 264H321.41L337.943 222.664ZM592 400H272V360C272 333.533 293.533 312 320 312H544C570.467 312 592 333.533 592 360V400ZM528 336C514.746 336 504 346.744 504 360C504 373.254 514.746 384 528 384S552 373.254 552 360C552 346.744 541.254 336 528 336ZM336 336C322.746 336 312 346.744 312 360C312 373.254 322.746 384 336 384S360 373.254 360 360C360 346.744 349.254 336 336 336Z" })
  }
));
CarBuildingRegular.displayName = "CarBuildingRegular";
var CarBuilding_default = CarBuildingRegular;
