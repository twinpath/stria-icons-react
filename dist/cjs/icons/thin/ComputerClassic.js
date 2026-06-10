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
const ComputerClassicThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 0H48C21.49 0 0 21.49 0 48V400C0 417.674 14.328 432 32 432V496C32 504.836 39.164 512 48 512H400C408.838 512 416 504.836 416 496V432C433.674 432 448 417.674 448 400V48C448 21.49 426.51 0 400 0ZM400 496H48V432H400V496ZM432 400C432 408.822 424.822 416 416 416H32C23.178 416 16 408.822 16 400V48C16 30.355 30.355 16 48 16H400C417.645 16 432 30.355 432 48V400ZM320 64H128C92.654 64 64 92.654 64 128V208C64 243.346 92.654 272 128 272H320C355.348 272 384 243.346 384 208V128C384 92.654 355.348 64 320 64ZM368 208C368 234.467 346.467 256 320 256H128C101.533 256 80 234.467 80 208V128C80 101.533 101.533 80 128 80H320C346.467 80 368 101.533 368 128V208ZM376 336H232C227.578 336 224 339.578 224 344S227.578 352 232 352H376C380.422 352 384 348.422 384 344S380.422 336 376 336ZM80 336C71.164 336 64 343.162 64 352C64 360.836 71.164 368 80 368S96 360.836 96 352C96 343.162 88.836 336 80 336Z" })
  }
));
ComputerClassicThin.displayName = "ComputerClassicThin";
var ComputerClassic_default = ComputerClassicThin;
