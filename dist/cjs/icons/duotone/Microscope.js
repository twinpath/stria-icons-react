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
const MicroscopeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M312 384H104C99.625 384 96 387.625 96 392V408C96 412.375 99.625 416 104 416H312C316.375 416 320 412.375 320 408V392C320 387.625 316.375 384 312 384ZM256 16C256 7.164 248.838 0 240 0H176C167.164 0 160 7.164 160 16V32H256V16Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 320H172V336C172 344.875 179.125 352 188 352H228C236.875 352 244 344.875 244 336V320H256C273.625 320 288 305.625 288 288V64C288 46.375 273.625 32 256 32H160C142.375 32 128 46.375 128 64V288C128 305.625 142.375 320 160 320ZM464 448H462.75C493.25 414 512 369.25 512 320C512 214.125 425.875 128 320 128V192C390.625 192 448 249.375 448 320S390.625 448 320 448H48C21.5 448 0 469.5 0 496C0 504.875 7.125 512 16 512H496C504.875 512 512 504.875 512 496C512 469.5 490.5 448 464 448Z" })
    ]
  }
));
MicroscopeDuotone.displayName = "MicroscopeDuotone";
var Microscope_default = MicroscopeDuotone;
