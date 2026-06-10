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
var Mercury_exports = {};
__export(Mercury_exports, {
  default: () => Mercury_default
});
module.exports = __toCommonJS(Mercury_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MercuryThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 224.003C368 143.792 314.291 76.25 240.918 55.035C265.316 46.684 287.756 32.942 305.312 13.348C308.25 10.051 307.969 4.989 304.688 2.051C301.438 -0.886 296.375 -0.589 293.375 2.661C267.594 31.473 230.625 48.004 192 48.004S116.406 31.473 90.625 2.661C87.625 -0.621 82.594 -0.917 79.312 2.051C76.031 4.989 75.75 10.051 78.688 13.348C96.244 32.942 118.684 46.684 143.082 55.035C69.709 76.25 16 143.792 16 224.003C16 318.502 90.541 395.384 184 399.595V440.001H128C123.594 440.001 120 443.579 120 448.001C120 452.422 123.594 456 128 456H184V504C184 508.422 187.594 512 192 512S200 508.422 200 504V456H256C260.406 456 264 452.422 264 448.001C264 443.579 260.406 440.001 256 440.001H200V399.595C293.459 395.384 368 318.502 368 224.003ZM32 224.003C32 135.781 103.775 64.004 192 64.004S352 135.781 352 224.003S280.225 384.001 192 384.001S32 312.224 32 224.003Z" })
  }
));
MercuryThin.displayName = "MercuryThin";
var Mercury_default = MercuryThin;
