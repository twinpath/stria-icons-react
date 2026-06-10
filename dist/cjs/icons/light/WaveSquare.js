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
var WaveSquare_exports = {};
__export(WaveSquare_exports, {
  default: () => WaveSquare_default
});
module.exports = __toCommonJS(WaveSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WaveSquareLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 256C640 264.822 632.822 272 624 272H512C503.178 272 496 279.178 496 288V416C496 442.467 474.467 464 448 464H352C325.533 464 304 442.467 304 416V96C304 87.178 296.822 80 288 80H192C183.178 80 176 87.178 176 96V224C176 250.467 154.467 272 128 272H16C7.178 272 0 264.822 0 256S7.178 240 16 240H128C136.822 240 144 232.822 144 224V96C144 69.533 165.533 48 192 48H288C314.467 48 336 69.533 336 96V416C336 424.822 343.178 432 352 432H448C456.822 432 464 424.822 464 416V288C464 261.533 485.533 240 512 240H624C632.822 240 640 247.178 640 256Z" })
  }
));
WaveSquareLight.displayName = "WaveSquareLight";
var WaveSquare_default = WaveSquareLight;
