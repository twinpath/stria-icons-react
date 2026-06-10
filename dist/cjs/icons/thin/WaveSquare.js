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
const WaveSquareThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 256C640 260.406 636.406 264 632 264H512C498.781 264 488 274.781 488 288V416C488 438.062 470.062 456 448 456H352C329.938 456 312 438.062 312 416V96C312 82.781 301.219 72 288 72H192C178.781 72 168 82.781 168 96V224C168 246.062 150.062 264 128 264H8C3.594 264 0 260.406 0 256S3.594 248 8 248H128C141.219 248 152 237.219 152 224V96C152 73.938 169.938 56 192 56H288C310.062 56 328 73.938 328 96V416C328 429.219 338.781 440 352 440H448C461.219 440 472 429.219 472 416V288C472 265.938 489.938 248 512 248H632C636.406 248 640 251.594 640 256Z" })
  }
));
WaveSquareThin.displayName = "WaveSquareThin";
var WaveSquare_default = WaveSquareThin;
