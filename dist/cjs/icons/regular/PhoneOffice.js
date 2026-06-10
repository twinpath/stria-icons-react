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
var PhoneOffice_exports = {};
__export(PhoneOffice_exports, {
  default: () => PhoneOffice_default
});
module.exports = __toCommonJS(PhoneOffice_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneOfficeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 336H336C327.125 336 320 343.125 320 352V384C320 392.875 327.125 400 336 400H368C376.875 400 384 392.875 384 384V352C384 343.125 376.875 336 368 336ZM320 256V288C320 296.875 327.125 304 336 304H368C376.875 304 384 296.875 384 288V256C384 247.125 376.875 240 368 240H336C327.125 240 320 247.125 320 256ZM432 400H464C472.875 400 480 392.875 480 384V352C480 343.125 472.875 336 464 336H432C423.125 336 416 343.125 416 352V384C416 392.875 423.125 400 432 400ZM432 304H464C472.875 304 480 296.875 480 288V256C480 247.125 472.875 240 464 240H432C423.125 240 416 247.125 416 256V288C416 296.875 423.125 304 432 304ZM512 32H269C262.5 13.375 244.875 0 224 0H144C123.125 0 105.5 13.375 99 32H64C28.625 32 0 60.625 0 96V448C0 483.375 28.625 512 64 512H512C547.375 512 576 483.375 576 448V96C576 60.625 547.375 32 512 32ZM144 48H224V368H144V48ZM528 448C528 456.875 520.875 464 512 464H64C55.125 464 48 456.875 48 448V96C48 87.125 55.125 80 64 80H96V368C96 394.5 117.5 416 144 416H224C250.5 416 272 394.5 272 368V80H320V152C320 174.001 338 192 360 192H528V448ZM528 144H368V80H512C520.875 80 528 87.125 528 96V144Z" })
  }
));
PhoneOfficeRegular.displayName = "PhoneOfficeRegular";
var PhoneOffice_default = PhoneOfficeRegular;
