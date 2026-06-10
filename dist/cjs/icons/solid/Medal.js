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
var Medal_exports = {};
__export(Medal_exports, {
  default: () => Medal_default
});
module.exports = __toCommonJS(Medal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MedalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.739 130.75L149.997 7.77C147.107 2.949 141.898 0 136.277 0H16.027C3.081 0 -4.505 14.578 2.923 25.18L114.239 184.125C143.864 156.375 181.739 137.25 223.739 130.75ZM255.999 160C158.749 160 79.999 238.75 79.999 336S158.749 512 255.999 512S431.999 433.25 431.999 336S353.249 160 255.999 160ZM348.489 317.25L310.614 354.25L319.489 406.5C321.114 415.75 311.239 423 302.864 418.5L255.989 393.875L209.114 418.5C200.739 423 190.864 415.75 192.489 406.5L201.364 354.25L163.489 317.25C156.614 310.625 160.489 299 169.864 297.625L222.239 290L245.739 242.5C247.739 238.25 251.864 236.125 255.989 236.125S264.239 238.25 266.239 242.5L289.739 290L342.114 297.625C351.614 299 355.364 310.625 348.489 317.25ZM495.972 0H375.722C370.101 0 364.892 2.949 362.001 7.77L288.239 130.75C330.239 137.25 368.114 156.375 397.739 184.125L509.075 25.18C516.503 14.578 508.917 0 495.972 0Z" })
  }
));
MedalSolid.displayName = "MedalSolid";
var Medal_default = MedalSolid;
