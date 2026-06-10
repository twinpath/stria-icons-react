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
const WaveSquareRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 480H360C324.8 480 296 451.2 296 416V96C296 87.163 288.837 80 280 80H200C191.163 80 184 87.163 184 96V248C184 265.6 169.6 280 152 280H24C10.8 280 0 269.2 0 256V256C0 242.8 10.8 232 24 232H136V96C136 60.8 164.8 32 200 32H280C315.2 32 344 60.8 344 96V416C344 424.837 351.163 432 360 432H440C448.837 432 456 424.837 456 416V264C456 246.4 470.4 232 488 232H616C629.2 232 640 242.8 640 256V256C640 269.2 629.2 280 616 280H504V416C504 451.2 475.2 480 440 480Z" })
  }
));
WaveSquareRegular.displayName = "WaveSquareRegular";
var WaveSquare_default = WaveSquareRegular;
