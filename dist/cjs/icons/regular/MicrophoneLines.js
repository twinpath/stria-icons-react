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
var MicrophoneLines_exports = {};
__export(MicrophoneLines_exports, {
  default: () => MicrophoneLines_default
});
module.exports = __toCommonJS(MicrophoneLines_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrophoneLinesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 352C245 352 288 309 288 256V96C288 43 245 0 192 0S96 43 96 96V256C96 309 139 352 192 352ZM144 96C144 69.5 165.5 48 192 48S240 69.5 240 96H208C199.156 96 192 103.156 192 112S199.156 128 208 128H240V160H208C199.156 160 192 167.156 192 176S199.156 192 208 192H240V224H208C199.156 224 192 231.156 192 240S199.156 256 208 256H240C240 282.5 218.5 304 192 304S144 282.5 144 256V96ZM344 192C330.746 192 320 202.744 320 216V256C320 330.75 255.5 390.875 179.25 383.375C112.75 376.875 64 317.125 64 250.25V216C64 202.744 53.254 192 40 192S16 202.744 16 216V248.125C16 337.75 80 417.75 168 429.875V464H120C106.746 464 96 474.744 96 488C96 501.254 106.746 512 120 512H264C277.254 512 288 501.254 288 488C288 474.744 277.254 464 264 464H216V430.25C301.75 418.5 368 344.875 368 256V216C368 202.744 357.254 192 344 192Z" })
  }
));
MicrophoneLinesRegular.displayName = "MicrophoneLinesRegular";
var MicrophoneLines_default = MicrophoneLinesRegular;
