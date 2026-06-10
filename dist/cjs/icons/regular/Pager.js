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
var Pager_exports = {};
__export(Pager_exports, {
  default: () => Pager_default
});
module.exports = __toCommonJS(Pager_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PagerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296 304H224V352H296C309.255 352 320 341.255 320 328V328C320 314.745 309.255 304 296 304ZM96 328V328C96 341.255 106.745 352 120 352H192V304H120C106.745 304 96 314.745 96 328ZM392 160H120C106.75 160 96 170.75 96 184V232C96 245.25 106.75 256 120 256H392C405.25 256 416 245.25 416 232V184C416 170.75 405.25 160 392 160ZM448 64H64C28.625 64 0 92.625 0 128V384C0 419.375 28.625 448 64 448H448C483.375 448 512 419.375 512 384V128C512 92.625 483.375 64 448 64ZM464 384C464 392.875 456.875 400 448 400H64C55.125 400 48 392.875 48 384V128C48 119.125 55.125 112 64 112H448C456.875 112 464 119.125 464 128V384Z" })
  }
));
PagerRegular.displayName = "PagerRegular";
var Pager_default = PagerRegular;
