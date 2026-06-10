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
var IceSkate_exports = {};
__export(IceSkate_exports, {
  default: () => IceSkate_default
});
module.exports = __toCommonJS(IceSkate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IceSkateThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72 384H472C494.062 384 512 366.062 512 344V301.875C512 255.969 480.594 216.094 435.5 204.844L320 177.656V8C320 3.594 316.422 0 312 0S304 3.594 304 8V25.75L82.641 80.937C52.828 89.406 32 116.812 32 147.562V344C32 366.062 49.938 384 72 384ZM48 147.562C48 123.937 64.047 102.844 86.766 96.375L304 42.25V112H264C259.578 112 256 115.594 256 120S259.578 128 264 128H304V176H264C259.578 176 256 179.594 256 184S259.578 192 264 192H311.045L431.734 220.375C469.578 229.844 496 263.344 496 301.875V344C496 357.219 485.234 368 472 368H72C58.766 368 48 357.219 48 344V147.562ZM568 416C563.578 416 560 419.594 560 424V440C560 470.875 534.875 496 504 496H424V424C424 419.594 420.422 416 416 416S408 419.594 408 424V496H136V424C136 419.594 132.422 416 128 416S120 419.594 120 424V496H8C3.578 496 0 499.594 0 504S3.578 512 8 512H504C543.703 512 576 479.687 576 440V424C576 419.594 572.422 416 568 416Z" })
  }
));
IceSkateThin.displayName = "IceSkateThin";
var IceSkate_default = IceSkateThin;
