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
var CircleMicrophoneLines_exports = {};
__export(CircleMicrophoneLines_exports, {
  default: () => CircleMicrophoneLines_default
});
module.exports = __toCommonJS(CircleMicrophoneLines_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleMicrophoneLinesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM208 144C208 117.484 229.484 96 256 96S304 117.484 304 144H264C259.582 144 256 147.582 256 152V168C256 172.418 259.582 176 264 176H304V208H264C259.582 208 256 211.582 256 216V232C256 236.418 259.582 240 264 240H304V256C304 282.516 282.516 304 256 304S208 282.516 208 256V144ZM384 256C384 321.1 334.969 374.406 272 382.383V408C272 412.418 268.418 416 264 416H248C243.582 416 240 412.418 240 408V382.383C177.031 374.406 128 321.1 128 256V232C128 227.582 131.582 224 136 224H152C156.418 224 160 227.582 160 232V252.66C160 301.447 194.98 344.98 243.369 351.188C301.914 358.699 352 313.092 352 256V232C352 227.582 355.582 224 360 224H376C380.418 224 384 227.582 384 232V256Z" })
  }
));
CircleMicrophoneLinesSolid.displayName = "CircleMicrophoneLinesSolid";
var CircleMicrophoneLines_default = CircleMicrophoneLinesSolid;
