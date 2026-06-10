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
var LineHeight_exports = {};
__export(LineHeight_exports, {
  default: () => LineHeight_default
});
module.exports = __toCommonJS(LineHeight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LineHeightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M248 120H552C565.254 120 576 109.254 576 96C576 82.744 565.254 72 552 72H248C234.746 72 224 82.744 224 96C224 109.254 234.746 120 248 120ZM552 392H248C234.746 392 224 402.744 224 416C224 429.254 234.746 440 248 440H552C565.254 440 576 429.254 576 416C576 402.744 565.254 392 552 392ZM552 232H248C234.746 232 224 242.744 224 256C224 269.254 234.746 280 248 280H552C565.254 280 576 269.254 576 256C576 242.744 565.254 232 552 232ZM151.031 144.969C155.719 149.656 161.844 152 168 152S180.281 149.656 184.969 144.969C194.344 135.594 194.344 120.406 184.969 111.031L112.969 39.031C103.594 29.656 88.406 29.656 79.031 39.031L7.031 111.031C-2.344 120.406 -2.344 135.594 7.031 144.969S31.594 154.344 40.969 144.969L72 113.938V398.062L40.969 367.031C31.594 357.656 16.406 357.656 7.031 367.031S-2.344 391.594 7.031 400.969L79.031 472.969C83.719 477.656 89.844 480 96 480S108.281 477.656 112.969 472.969L184.969 400.969C194.344 391.594 194.344 376.406 184.969 367.031S160.406 357.656 151.031 367.031L120 398.062V113.938L151.031 144.969Z" })
  }
));
LineHeightRegular.displayName = "LineHeightRegular";
var LineHeight_default = LineHeightRegular;
