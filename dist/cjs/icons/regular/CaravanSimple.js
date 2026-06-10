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
var CaravanSimple_exports = {};
__export(CaravanSimple_exports, {
  default: () => CaravanSimple_default
});
module.exports = __toCommonJS(CaravanSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CaravanSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 128H352C334.375 128 320 142.375 320 160V224C320 241.625 334.375 256 352 256H416C433.625 256 448 241.625 448 224V160C448 142.375 433.625 128 416 128ZM616 368H576V192C576 103.634 504.366 32 416 32H96C42.981 32 0 74.981 0 128V320C0 373 43 416 96 416C96 469 139 512 192 512S288 469 288 416H616C629.255 416 640 405.255 640 392V392C640 378.745 629.255 368 616 368ZM192 464C165.5 464 144 442.5 144 416S165.5 368 192 368S240 389.5 240 416S218.5 464 192 464ZM528 368H274.75C257.999 339.375 227.5 320 192 320S125.999 339.375 109.25 368H96C69.5 368 48 346.5 48 320V128C48 101.5 69.5 80 96 80H416C477.875 80.125 527.875 130.125 528 192V368ZM256 128H128C110.375 128 96 142.375 96 160V224C96 241.625 110.375 256 128 256H256C273.625 256 288 241.625 288 224V160C288 142.375 273.625 128 256 128Z" })
  }
));
CaravanSimpleRegular.displayName = "CaravanSimpleRegular";
var CaravanSimple_default = CaravanSimpleRegular;
