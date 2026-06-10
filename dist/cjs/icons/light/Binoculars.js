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
var Binoculars_exports = {};
__export(Binoculars_exports, {
  default: () => Binoculars_default
});
module.exports = __toCommonJS(Binoculars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BinocularsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 64H208C216.836 64 224 56.836 224 48S216.836 32 208 32H112C103.164 32 96 39.164 96 48S103.164 64 112 64ZM304 64H400C408.836 64 416 56.836 416 48S408.836 32 400 32H304C295.164 32 288 39.164 288 48S295.164 64 304 64ZM511.625 404C508.25 274.25 450.625 221.875 448.125 128C447.625 110.375 433.75 96 416.125 96H95.875C78.25 96 64.375 110.375 63.875 128C61.375 221.875 3.75 274.25 0.375 404L0 432C0 458.5 21.5 480 48 480H176C202.5 480 224 458.5 224 432V288H288V432C288 458.5 309.5 480 336 480H464C490.5 480 512 458.5 512 432L511.625 404ZM192 432C192 440.822 184.822 448 176 448H48C39.178 448 32 440.822 31.998 432.428L32.365 404.832C34.051 340.018 50.355 296.18 66.123 253.787C80.111 216.182 94.574 177.297 95.875 128H192V432ZM288 256H224V128H288V256ZM464 448H336C327.178 448 320 440.822 320 432V128H416.125L416.137 128.852C417.428 177.297 431.891 216.182 445.877 253.787C461.645 296.18 477.951 340.018 479.629 404.428L480 432C480 440.822 472.822 448 464 448Z" })
  }
));
BinocularsLight.displayName = "BinocularsLight";
var Binoculars_default = BinocularsLight;
