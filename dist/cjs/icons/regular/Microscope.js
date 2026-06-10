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
var Microscope_exports = {};
__export(Microscope_exports, {
  default: () => Microscope_default
});
module.exports = __toCommonJS(Microscope_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicroscopeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 464H446.576C486.586 428.789 512 377.365 512 320C512 214.125 425.875 128 320 128V176C399.406 176 464 240.594 464 320S399.406 464 320 464H24C10.746 464 0 474.744 0 488C0 501.254 10.746 512 24 512H488C501.254 512 512 501.254 512 488C512 474.744 501.254 464 488 464ZM120 432H296C309.254 432 320 421.254 320 408C320 394.744 309.254 384 296 384H120C106.746 384 96 394.744 96 408C96 421.254 106.746 432 120 432ZM160 320H176V336C176 344.836 183.164 352 192 352H224C232.836 352 240 344.836 240 336V320H256C273.674 320 288 305.674 288 288V64C288 46.326 273.674 32 256 32C256 14.326 241.674 0 224 0H192C174.326 0 160 14.326 160 32C142.326 32 128 46.326 128 64V288C128 305.674 142.326 320 160 320ZM176 80H240V272H176V80Z" })
  }
));
MicroscopeRegular.displayName = "MicroscopeRegular";
var Microscope_default = MicroscopeRegular;
