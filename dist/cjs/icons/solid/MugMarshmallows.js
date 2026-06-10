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
var MugMarshmallows_exports = {};
__export(MugMarshmallows_exports, {
  default: () => MugMarshmallows_default
});
module.exports = __toCommonJS(MugMarshmallows_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugMarshmallowsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M196.472 128H347.472C354.597 115.75 353.472 99.875 342.972 89.375L294.472 41C281.972 28.5 261.722 28.5 249.222 41L200.722 89.375C190.347 99.875 189.222 115.75 196.472 128ZM178.5 67.25L200.875 44.75C195 37.5 186.375 32.375 176.25 32.375H64C46.25 32.375 32 46.75 32 64.375V128.25H162.125C156.625 107.25 161.875 83.75 178.5 67.25ZM400 160.25H160V223.75C160 241.5 145.75 255.75 128 255.75S96 241.5 96 223.75V160.25H32C14.25 160.25 0 174.625 0 192.25V384.125C0 437.125 43 480 96 480H288C341 480 384 437.125 384 384.125H400C461.75 384.125 512 333.875 512 272.25C512 210.5 461.75 160.25 400 160.25ZM400 320.25H384V224.25H400C426.5 224.25 448 245.75 448 272.25C448 298.625 426.5 320.25 400 320.25Z" })
  }
));
MugMarshmallowsSolid.displayName = "MugMarshmallowsSolid";
var MugMarshmallows_default = MugMarshmallowsSolid;
