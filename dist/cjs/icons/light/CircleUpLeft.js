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
var CircleUpLeft_exports = {};
__export(CircleUpLeft_exports, {
  default: () => CircleUpLeft_default
});
module.exports = __toCommonJS(CircleUpLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleUpLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M182.461 142.465C161.071 142.465 142.454 160.795 142.476 182.737L144.807 315.883C144.819 332.113 154.508 346.62 169.49 352.852C184.494 359.061 201.597 355.658 213.087 344.167L233.373 323.882L284.284 374.794C299.885 390.394 325.252 390.394 340.853 374.794L374.794 340.853C390.394 325.252 390.394 299.885 374.794 284.284L323.882 233.373L344.167 213.087C355.658 201.597 359.061 184.494 352.852 169.49C346.653 154.541 332.213 144.874 316.049 144.796L182.461 142.465ZM321.54 190.46L278.627 233.373L352.167 306.912C355.282 310.027 355.282 315.11 352.167 318.225L318.225 352.167C315.11 355.282 310.027 355.282 306.912 352.167L233.373 278.627L190.46 321.54C185.925 326.075 176.811 323.809 176.793 315.607L174.462 182.461C174.431 176.544 179.932 174.449 182.185 174.451L315.607 176.793L315.883 176.804C322.744 176.804 326.796 185.204 321.54 190.46ZM16 256C16 388.549 123.451 496 256 496S496 388.549 496 256S388.549 16 256 16S16 123.451 16 256ZM464 256C464 370.691 370.691 464 256 464S48 370.691 48 256S141.309 48 256 48S464 141.309 464 256Z" })
  }
));
CircleUpLeftLight.displayName = "CircleUpLeftLight";
var CircleUpLeft_default = CircleUpLeftLight;
