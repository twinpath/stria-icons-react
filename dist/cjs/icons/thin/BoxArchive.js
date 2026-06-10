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
var BoxArchive_exports = {};
__export(BoxArchive_exports, {
  default: () => BoxArchive_default
});
module.exports = __toCommonJS(BoxArchive_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxArchiveThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 32H32C14.312 32 0 46.312 0 64V128C0 136.812 7.188 144 16 144H32V432C32 458.508 53.49 480 80 480H432C458.51 480 480 458.508 480 432V144H496C504.812 144 512 136.812 512 128V64C512 46.312 497.688 32 480 32ZM464 432C464 449.645 449.645 464 432 464H80C62.355 464 48 449.645 48 432V144H464V432ZM496 128H16V64C16 55.18 23.178 48 32 48H480C488.822 48 496 55.18 496 64V128ZM168 256H344C348.418 256 352 252.418 352 248S348.418 240 344 240H168C163.582 240 160 243.582 160 248S163.582 256 168 256Z" })
  }
));
BoxArchiveThin.displayName = "BoxArchiveThin";
var BoxArchive_default = BoxArchiveThin;
