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
var LinkSimple_exports = {};
__export(LinkSimple_exports, {
  default: () => LinkSimple_default
});
module.exports = __toCommonJS(LinkSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 96H376C362.75 96 352 106.75 352 120S362.75 144 376 144H480C541.75 144 592 194.25 592 256S541.75 368 480 368H376C362.75 368 352 378.75 352 392S362.75 416 376 416H480C568.219 416 640 344.219 640 256S568.219 96 480 96ZM264 368H160C98.25 368 48 317.75 48 256S98.25 144 160 144H264C277.25 144 288 133.25 288 120S277.25 96 264 96H160C71.781 96 0 167.781 0 256S71.781 416 160 416H264C277.25 416 288 405.25 288 392S277.25 368 264 368ZM192 256C192 269.25 202.75 280 216 280H424C437.25 280 448 269.25 448 256S437.25 232 424 232H216C202.75 232 192 242.75 192 256Z" })
  }
));
LinkSimpleRegular.displayName = "LinkSimpleRegular";
var LinkSimple_default = LinkSimpleRegular;
