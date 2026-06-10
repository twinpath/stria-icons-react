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
const CaravanSimpleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 352H576V192C576 103.625 504.375 32 416 32H64C28.625 32 0 60.625 0 96V352C0 387.375 28.625 416 64 416H96C96 469 139 512 192 512S288 469 288 416H624C632.875 416 640 408.875 640 400V368C640 359.125 632.875 352 624 352ZM192 464C165.5 464 144 442.5 144 416S165.5 368 192 368S240 389.5 240 416S218.5 464 192 464ZM256 224C256 241.625 241.625 256 224 256H96C78.375 256 64 241.625 64 224V160C64 142.375 78.375 128 96 128H224C241.625 128 256 142.375 256 160V224ZM448 224C448 241.625 433.625 256 416 256H352C334.375 256 320 241.625 320 224V160C320 142.375 334.375 128 352 128H416C433.625 128 448 142.375 448 160V224Z" })
  }
));
CaravanSimpleSolid.displayName = "CaravanSimpleSolid";
var CaravanSimple_default = CaravanSimpleSolid;
