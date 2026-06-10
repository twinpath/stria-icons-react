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
var Sliders_exports = {};
__export(Sliders_exports, {
  default: () => Sliders_default
});
module.exports = __toCommonJS(Sliders_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SlidersRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 72H24C10.745 72 0 82.745 0 96V96C0 109.255 10.745 120 24 120H192V72ZM488 232H400V216C400 202.75 389.25 192 376 192S352 202.75 352 216V296C352 309.25 362.75 320 376 320S400 309.25 400 296V280H488C501.25 280 512 269.25 512 256S501.25 232 488 232ZM488 392H176V376C176 362.75 165.25 352 152 352S128 362.75 128 376V456C128 469.25 138.75 480 152 480S176 469.25 176 456V440H488C501.25 440 512 429.25 512 416S501.25 392 488 392ZM320 232H24C10.745 232 0 242.745 0 256V256C0 269.255 10.745 280 24 280H320V232ZM24 440H96V392H24C10.745 392 0 402.745 0 416V416C0 429.255 10.745 440 24 440ZM248 160C261.25 160 272 149.25 272 136V120H488C501.25 120 512 109.25 512 96S501.25 72 488 72H272V56C272 42.75 261.25 32 248 32S224 42.75 224 56V136C224 149.25 234.75 160 248 160Z" })
  }
));
SlidersRegular.displayName = "SlidersRegular";
var Sliders_default = SlidersRegular;
