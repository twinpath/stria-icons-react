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
var Raindrops_exports = {};
__export(Raindrops_exports, {
  default: () => Raindrops_default
});
module.exports = __toCommonJS(Raindrops_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RaindropsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50.557 231.93C31.785 263.402 0 320.643 0 347.359C0 385.268 28.654 416 64 416S128 385.268 128 347.359C128 320.643 96.215 263.402 77.443 231.93C71.137 221.355 56.863 221.355 50.557 231.93ZM224 155.359C224 128.643 192.215 71.402 173.443 39.93C167.137 29.355 152.863 29.355 146.557 39.93C127.785 71.402 96 128.643 96 155.359C96 193.268 124.654 224 160 224S224 193.268 224 155.359ZM334.596 135.506C331.137 130.502 325.568 128 320 128S308.863 130.502 305.406 135.506C271.836 184.074 192 305.162 192 358.262C192 425.494 249.309 480 320 480S448 425.494 448 358.262C448 305.162 368.164 184.074 334.596 135.506ZM320 432C275.889 432 240 398.92 240 358.262C240 339.809 265.225 283.627 320 199.799C374.777 283.627 400 339.809 400 358.262C400 398.92 364.113 432 320 432Z" })
  }
));
RaindropsRegular.displayName = "RaindropsRegular";
var Raindrops_default = RaindropsRegular;
