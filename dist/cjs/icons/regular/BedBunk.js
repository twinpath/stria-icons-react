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
var BedBunk_exports = {};
__export(BedBunk_exports, {
  default: () => BedBunk_default
});
module.exports = __toCommonJS(BedBunk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedBunkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152 144C191.75 144 224 111.75 224 72S191.75 0 152 0S80 32.25 80 72S112.25 144 152 144ZM152 48C165.25 48 176 58.75 176 72S165.25 96 152 96S128 85.25 128 72S138.75 48 152 48ZM464 0H272C263.163 0 256 7.163 256 16V160H48V24C48 10.745 37.255 0 24 0H24C10.745 0 0 10.745 0 24V488C0 501.255 10.745 512 24 512H24C37.255 512 48 501.255 48 488V464H528V488C528 501.255 538.745 512 552 512L552 512C565.255 512 576 501.255 576 488V128C576 50.125 525.875 0 464 0ZM528 416H304V304H464C499.375 304 528 332.625 528 368V416ZM528 276.25C509.25 263.125 486.875 256 464 256H272C263.125 256 256 263.125 256 272V416H48V208H528V276.25ZM528 160H304V48H464C499.375 48 528 76.625 528 112V160ZM152 400C191.75 400 224 367.75 224 328S191.75 256 152 256S80 288.25 80 328S112.25 400 152 400ZM152 304C165.25 304 176 314.75 176 328S165.25 352 152 352S128 341.25 128 328S138.75 304 152 304Z" })
  }
));
BedBunkRegular.displayName = "BedBunkRegular";
var BedBunk_default = BedBunkRegular;
