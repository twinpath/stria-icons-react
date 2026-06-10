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
var Transporter_exports = {};
__export(Transporter_exports, {
  default: () => Transporter_default
});
module.exports = __toCommonJS(Transporter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TransporterSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152.625 276.5L184 238.75V416H248V320H264V416H328V238.75L359.375 276.5C370.75 290 390.875 291.875 404.5 280.625C418 269.25 419.875 249.125 408.625 235.5L338.125 151C326 136.375 308 128 289 128H223C204 128 186 136.375 173.875 151L103.375 235.5C92.125 249.125 93.875 269.25 107.5 280.625C121.125 291.875 141.25 290 152.625 276.5ZM93.75 108.375L64 96L51.625 66.25C50.875 64.875 49.5 64 48 64S45.125 64.875 44.375 66.25L32 96L2.25 108.375C0.875 109.125 0 110.5 0 112S0.875 114.875 2.25 115.625L32 128L44.375 157.75C45.125 159.125 46.5 160 48 160S50.875 159.125 51.625 157.75L64 128L93.75 115.625C95.125 114.875 96 113.5 96 112S95.125 109.125 93.75 108.375ZM256 96C282.5 96 304 74.5 304 48S282.5 0 256 0S208 21.5 208 48S229.5 96 256 96ZM384 448H128C110.375 448 96 462.375 96 480V512H416V480C416 462.375 401.625 448 384 448ZM509.75 44.375L480 32L467.625 2.25C466.875 0.875 465.5 0 464 0S461.125 0.875 460.375 2.25L448 32L418.25 44.375C416.875 45.125 416 46.5 416 48S416.875 50.875 418.25 51.625L448 64L460.375 93.75C461.125 95.125 462.5 96 464 96S466.875 95.125 467.625 93.75L480 64L509.75 51.625C511.125 50.875 512 49.5 512 48S511.125 45.125 509.75 44.375Z" })
  }
));
TransporterSolid.displayName = "TransporterSolid";
var Transporter_default = TransporterSolid;
