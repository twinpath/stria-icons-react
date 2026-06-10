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
var RectangleList_exports = {};
__export(RectangleList_exports, {
  default: () => RectangleList_default
});
module.exports = __toCommonJS(RectangleList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RectangleListSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.654 547.346 32 512 32ZM128 384C110.301 384 96 369.699 96 352C96 334.297 110.301 320 128 320S160 334.297 160 352C160 369.699 145.699 384 128 384ZM128 288C110.301 288 96 273.699 96 256C96 238.297 110.301 224 128 224S160 238.297 160 256C160 273.699 145.699 288 128 288ZM128 192C110.301 192 96 177.699 96 160C96 142.297 110.301 128 128 128S160 142.297 160 160C160 177.699 145.699 192 128 192ZM480 352C480 365.255 469.255 376 456 376H216C202.745 376 192 365.255 192 352V352C192 338.745 202.745 328 216 328H456C469.255 328 480 338.745 480 352V352ZM480 256C480 269.255 469.255 280 456 280H216C202.745 280 192 269.255 192 256V256C192 242.745 202.745 232 216 232H456C469.255 232 480 242.745 480 256V256ZM480 160C480 173.255 469.255 184 456 184H216C202.745 184 192 173.255 192 160V160C192 146.745 202.745 136 216 136H456C469.255 136 480 146.745 480 160V160Z" })
  }
));
RectangleListSolid.displayName = "RectangleListSolid";
var RectangleList_default = RectangleListSolid;
