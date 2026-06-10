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
const RegisteredSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M279.625 192H224V240.719H279.625C293.062 240.719 304 229.812 304 216.375S293.062 192 279.625 192ZM256 16C123.42 16 16 123.422 16 256S123.42 496 256 496C388.582 496 496 388.578 496 256S388.582 16 256 16ZM351.188 338.438C358.656 354.438 351.75 373.5 335.75 380.969C331.375 383.031 326.75 384 322.219 384C310.156 384 298.656 377.188 293.187 365.562L264.744 304.719H224V352C224 369.688 209.688 384 192 384S160 369.688 160 352V160C160 142.312 174.312 128 192 128H279.625C328.344 128 368 167.656 368 216.375C368 247.039 352.256 274.055 328.461 289.902L351.188 338.438Z" })
  }
));
RegisteredSolid.displayName = "RegisteredSolid";
var Registered_default = RegisteredSolid;
