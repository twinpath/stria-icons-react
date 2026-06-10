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
var Registered_exports = {};
__export(Registered_exports, {
  default: () => Registered_default
});
module.exports = __toCommonJS(Registered_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RegisteredDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 216.375C304 229.813 293.062 240.719 279.625 240.719H224V192H279.625C293.062 192 304 202.938 304 216.375ZM496 256C496 388.578 388.582 496 256 496C123.42 496 16 388.578 16 256S123.42 16 256 16C388.582 16 496 123.422 496 256ZM328.461 289.902C352.256 274.055 368 247.039 368 216.375C368 167.656 328.344 128 279.625 128H192C174.312 128 160 142.312 160 160V352C160 369.688 174.312 384 192 384S224 369.688 224 352V304.719H264.744L293.188 365.562C298.656 377.188 310.156 384 322.219 384C326.75 384 331.375 383.031 335.75 380.969C351.75 373.5 358.656 354.437 351.188 338.437L328.461 289.902Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M328.461 289.902C352.256 274.055 368 247.039 368 216.375C368 167.656 328.344 128 279.625 128H192C174.312 128 160 142.312 160 160V352C160 369.688 174.312 384 192 384S224 369.688 224 352V304.719H264.744L293.188 365.562C298.656 377.188 310.156 384 322.219 384C326.75 384 331.375 383.031 335.75 380.969C351.75 373.5 358.656 354.437 351.188 338.437L328.461 289.902ZM279.625 240.719H224V192H279.625C293.062 192 304 202.938 304 216.375S293.062 240.719 279.625 240.719Z" })
    ]
  }
));
RegisteredDuotone.displayName = "RegisteredDuotone";
var Registered_default = RegisteredDuotone;
