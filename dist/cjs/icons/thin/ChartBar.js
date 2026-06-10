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
var ChartBar_exports = {};
__export(ChartBar_exports, {
  default: () => ChartBar_default
});
module.exports = __toCommonJS(ChartBar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartBarThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 176H368C376.828 176 384 168.828 384 160V128C384 119.141 376.828 112 368 112H144C135.172 112 128 119.141 128 128V160C128 168.828 135.172 176 144 176ZM144 128H368V160H144V128ZM144 368H432C440.828 368 448 360.828 448 352V320C448 311.141 440.828 304 432 304H144C135.172 304 128 311.141 128 320V352C128 360.828 135.172 368 144 368ZM144 320H432V352H144V320ZM504 464H72C41.125 464 16 438.875 16 408V40C16 35.578 12.422 32 8 32S0 35.578 0 40V408C0 447.688 32.312 480 72 480H504C508.422 480 512 476.422 512 472S508.422 464 504 464ZM144 272H304C312.828 272 320 264.828 320 256V224C320 215.141 312.828 208 304 208H144C135.172 208 128 215.141 128 224V256C128 264.828 135.172 272 144 272ZM144 224H304V256H144V224Z" })
  }
));
ChartBarThin.displayName = "ChartBarThin";
var ChartBar_default = ChartBarThin;
