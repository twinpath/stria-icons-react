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
var Hotel_exports = {};
__export(Hotel_exports, {
  default: () => Hotel_default
});
module.exports = __toCommonJS(Hotel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HotelDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M236.75 160.029H275.25C281.625 160.029 288 153.654 288 147.279V108.779C288 102.404 281.625 96.029 275.25 96.029H236.75C230.375 96.029 224 102.404 224 108.779V147.279C224 153.654 230.375 160.029 236.75 160.029ZM236.75 256.029H275.25C281.625 256.029 288 249.654 288 243.279V204.779C288 198.404 281.625 192.029 275.25 192.029H236.75C230.375 192.029 224 198.404 224 204.779V243.279C224 249.654 230.375 256.029 236.75 256.029ZM108.75 160.029H147.25C153.625 160.029 160 153.654 160 147.279V108.779C160 102.404 153.625 96.029 147.25 96.029H108.75C102.375 96.029 96 102.404 96 108.779V147.279C96 153.654 102.375 160.029 108.75 160.029ZM160 204.779C160 198.404 153.625 192.029 147.25 192.029H108.75C102.375 192.029 96 198.404 96 204.779V243.279C96 249.654 102.375 256.029 108.75 256.029H147.25C153.625 256.029 160 249.654 160 243.279V204.779ZM256 288.029C203 288.029 160 331.029 160 384.029H352C352 331.029 309 288.029 256 288.029ZM403.25 192.029H364.75C358.375 192.029 352 198.404 352 204.779V243.279C352 249.654 358.375 256.029 364.75 256.029H403.25C409.625 256.029 416 249.654 416 243.279V204.779C416 198.404 409.625 192.029 403.25 192.029ZM403.25 96.029H364.75C358.375 96.029 352 102.404 352 108.779V147.279C352 153.654 358.375 160.029 364.75 160.029H403.25C409.625 160.029 416 153.654 416 147.279V108.779C416 102.404 409.625 96.029 403.25 96.029Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 448.029V64.029C497.674 64.029 512 49.701 512 32.029C512 14.355 497.674 0.029 480 0.029H32C14.326 0.029 0 14.355 0 32.029C0 49.701 14.326 64.029 32 64.029V448.029C14.326 448.029 0 462.355 0 480.029C0 497.701 14.326 512.029 32 512.029H208V416.029H304V512.029H480C497.674 512.029 512 497.701 512 480.029C512 462.355 497.674 448.029 480 448.029ZM224 108.779C224 102.404 230.375 96.029 236.75 96.029H275.25C281.625 96.029 288 102.404 288 108.779V147.279C288 153.654 281.625 160.029 275.25 160.029H236.75C230.375 160.029 224 153.654 224 147.279V108.779ZM224 204.779C224 198.404 230.375 192.029 236.75 192.029H275.25C281.625 192.029 288 198.404 288 204.779V243.279C288 249.654 281.625 256.029 275.25 256.029H236.75C230.375 256.029 224 249.654 224 243.279V204.779ZM96 108.779C96 102.404 102.375 96.029 108.75 96.029H147.25C153.625 96.029 160 102.404 160 108.779V147.279C160 153.654 153.625 160.029 147.25 160.029H108.75C102.375 160.029 96 153.654 96 147.279V108.779ZM147.25 256.029H108.75C102.375 256.029 96 249.654 96 243.279V204.779C96 198.404 102.375 192.029 108.75 192.029H147.25C153.625 192.029 160 198.404 160 204.779V243.279C160 249.654 153.625 256.029 147.25 256.029ZM160 384.029C160 331.029 203 288.029 256 288.029S352 331.029 352 384.029H160ZM416 243.279C416 249.654 409.625 256.029 403.25 256.029H364.75C358.375 256.029 352 249.654 352 243.279V204.779C352 198.404 358.375 192.029 364.75 192.029H403.25C409.625 192.029 416 198.404 416 204.779V243.279ZM416 147.279C416 153.654 409.625 160.029 403.25 160.029H364.75C358.375 160.029 352 153.654 352 147.279V108.779C352 102.404 358.375 96.029 364.75 96.029H403.25C409.625 96.029 416 102.404 416 108.779V147.279Z" })
    ]
  }
));
HotelDuotone.displayName = "HotelDuotone";
var Hotel_default = HotelDuotone;
