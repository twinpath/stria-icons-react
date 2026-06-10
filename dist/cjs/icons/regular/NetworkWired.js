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
var NetworkWired_exports = {};
__export(NetworkWired_exports, {
  default: () => NetworkWired_default
});
module.exports = __toCommonJS(NetworkWired_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NetworkWiredRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 320H536V280H616C629.254 280 640 269.254 640 256C640 242.742 629.254 232 616 232H344V192H416C433.6 192 448 177.602 448 160V32C448 14.398 433.6 0 416 0H224C206.4 0 192 14.398 192 32V160C192 177.602 206.4 192 224 192H296V232H24C10.746 232 0 242.742 0 256C0 269.254 10.746 280 24 280H104V320H32C14.4 320 0 334.398 0 352V480C0 497.602 14.4 512 32 512H224C241.6 512 256 497.602 256 480V352C256 334.398 241.6 320 224 320H152V280H488V320H416C398.4 320 384 334.398 384 352V480C384 497.602 398.4 512 416 512H608C625.6 512 640 497.602 640 480V352C640 334.398 625.6 320 608 320ZM208 368V464H48V368H208ZM240 144V48H400V144H240ZM592 464H432V368H592V464Z" })
  }
));
NetworkWiredRegular.displayName = "NetworkWiredRegular";
var NetworkWired_default = NetworkWiredRegular;
