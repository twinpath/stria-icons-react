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
var Microwave_exports = {};
__export(Microwave_exports, {
  default: () => Microwave_default
});
module.exports = __toCommonJS(Microwave_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrowaveRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 128H128C110.326 128 96 142.326 96 160V320C96 337.672 110.326 352 128 352H384C401.674 352 416 337.672 416 320V160C416 142.326 401.674 128 384 128ZM472 224C458.746 224 448 234.744 448 248C448 261.254 458.746 272 472 272S496 261.254 496 248C496 234.744 485.254 224 472 224ZM512 32H64C28.654 32 0 60.652 0 96V384C0 419.346 28.654 448 64 448V456C64 469.254 74.746 480 88 480S112 469.254 112 456V448H464V456C464 469.254 474.746 480 488 480S512 469.254 512 456V448C547.346 448 576 419.346 576 384V96C576 60.652 547.346 32 512 32ZM528 384C528 392.822 520.822 400 512 400H64C55.178 400 48 392.822 48 384V96C48 87.178 55.178 80 64 80H512C520.822 80 528 87.178 528 96V384ZM472 144C458.746 144 448 154.744 448 168C448 181.254 458.746 192 472 192S496 181.254 496 168C496 154.744 485.254 144 472 144Z" })
  }
));
MicrowaveRegular.displayName = "MicrowaveRegular";
var Microwave_default = MicrowaveRegular;
