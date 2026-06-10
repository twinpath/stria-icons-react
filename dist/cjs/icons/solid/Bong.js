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
var Bong_exports = {};
__export(Bong_exports, {
  default: () => Bong_default
});
module.exports = __toCommonJS(Bong_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BongSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M334.5 512C357.625 512 378.875 499.375 390.5 479.375C406.75 451.25 416 418.75 416 384C416 347.875 405.875 314.25 388.5 285.375L432 242L441.375 251.375C447.625 257.625 457.75 257.625 464 251.375L475.25 240C481.5 233.75 481.5 223.625 475.25 217.375L422.625 164.625C416.375 158.375 406.25 158.375 400 164.625L388.625 176C382.375 182.25 382.375 192.375 388.625 198.625L397.999 208L358.625 247.375C347.125 236 334.125 226.125 320 217.875V63.75H336C344.75 63.75 352 56.5 352 47.75V16C352 7.125 344.875 0 336 0L112 0.25C103.25 0.25 96 7.375 96 16.25V48C96 56.875 103.125 64 112 64H128V217.875C70.625 251.125 32 313 32 384C32 418.75 41.25 451.25 57.5 479.375C69.125 499.375 90.375 512 113.5 512H334.5ZM152 259.375L176 245.5V63.875L272 63.75V245.5L296 259.375C320.75 273.75 340 295.125 352.5 320H95.5C108 295.125 127.25 273.75 152 259.375Z" })
  }
));
BongSolid.displayName = "BongSolid";
var Bong_default = BongSolid;
