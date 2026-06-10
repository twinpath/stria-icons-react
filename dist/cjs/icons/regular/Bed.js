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
var Bed_exports = {};
__export(Bed_exports, {
  default: () => Bed_default
});
module.exports = __toCommonJS(Bed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M168 304C216.5 304 256 264.5 256 216S216.5 128 168 128S80 167.5 80 216S119.5 304 168 304ZM168 176C190 176 208 194 208 216C208 238 190 256 168 256C146 256 128 238 128 216C128 194 146 176 168 176ZM528 128H304C295.163 128 288 135.163 288 144V336H48V56C48 42.745 37.255 32 24 32H24C10.745 32 0 42.745 0 56V456C0 469.255 10.745 480 24 480H24C37.255 480 48 469.255 48 456V384H592V456C592 469.255 602.745 480 616 480L616 480C629.255 480 640 469.255 640 456V240C640 178.144 589.856 128 528 128ZM592 336H336V176H528C563.25 176 592 204.75 592 240V336Z" })
  }
));
BedRegular.displayName = "BedRegular";
var Bed_default = BedRegular;
