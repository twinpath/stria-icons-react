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
var ComputerClassic_exports = {};
__export(ComputerClassic_exports, {
  default: () => ComputerClassic_default
});
module.exports = __toCommonJS(ComputerClassic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ComputerClassicDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 0H32C14.375 0 0 14.375 0 32V400C0 408.875 7.125 416 16 416H432C440.875 416 448 408.875 448 400V32C448 14.375 433.625 0 416 0ZM80 356C69 356 60 347 60 336S69 316 80 316S100 325 100 336S91 356 80 356ZM384 344C384 348.375 380.375 352 376 352H232C227.625 352 224 348.375 224 344V328C224 323.625 227.625 320 232 320H376C380.375 320 384 323.625 384 328V344ZM384 224C384 241.625 369.625 256 352 256H96C78.375 256 64 241.625 64 224V96C64 78.375 78.375 64 96 64H352C369.625 64 384 78.375 384 96V224ZM32 512H416V448H32V512Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 224C384 241.625 369.625 256 352 256H96C78.375 256 64 241.625 64 224V96C64 78.375 78.375 64 96 64H352C369.625 64 384 78.375 384 96V224Z" })
    ]
  }
));
ComputerClassicDuotone.displayName = "ComputerClassicDuotone";
var ComputerClassic_default = ComputerClassicDuotone;
