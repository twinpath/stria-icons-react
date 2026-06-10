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
var TextWidth_exports = {};
__export(TextWidth_exports, {
  default: () => TextWidth_default
});
module.exports = __toCommonJS(TextWidth_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextWidthRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 32H24C10.75 32 0 42.75 0 56V120C0 133.25 10.75 144 24 144S48 133.25 48 120V80H200V240H168C154.75 240 144 250.75 144 264S154.75 288 168 288H280C293.25 288 304 277.25 304 264S293.25 240 280 240H248V80H400V120C400 133.25 410.75 144 424 144S448 133.25 448 120V56C448 42.75 437.25 32 424 32ZM368.969 295.031C359.594 285.656 344.406 285.656 335.031 295.031S325.656 319.594 335.031 328.969L366.062 360H81.938L112.969 328.969C122.344 319.594 122.344 304.406 112.969 295.031S88.406 285.656 79.031 295.031L7.031 367.031C-2.344 376.406 -2.344 391.594 7.031 400.969L79.031 472.969C83.719 477.656 89.844 480 96 480S108.281 477.656 112.969 472.969C122.344 463.594 122.344 448.406 112.969 439.031L81.938 408H366.062L335.031 439.031C325.656 448.406 325.656 463.594 335.031 472.969C339.719 477.656 345.844 480 352 480S364.281 477.656 368.969 472.969L440.969 400.969C450.344 391.594 450.344 376.406 440.969 367.031L368.969 295.031Z" })
  }
));
TextWidthRegular.displayName = "TextWidthRegular";
var TextWidth_default = TextWidthRegular;
