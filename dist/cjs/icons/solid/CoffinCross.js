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
var CoffinCross_exports = {};
__export(CoffinCross_exports, {
  default: () => CoffinCross_default
});
module.exports = __toCommonJS(CoffinCross_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoffinCrossSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M374.537 115.25L266.766 9.375C260.638 3.375 252.263 0 243.636 0H140.364C131.737 0 123.362 3.375 117.234 9.375L9.463 115.25C1.461 123.125 -1.789 134.625 0.961 145.625L88.103 487.75C91.729 502 104.733 512 119.735 512H264.39C279.267 512 292.271 502 295.897 487.75L383.039 145.625C385.789 134.625 382.539 123.125 374.537 115.25ZM288 208C288 216.875 280.873 224 271.994 224H224V336C224 344.875 216.873 352 207.994 352H176.006C167.127 352 160 344.875 160 336V224H111.928C103.049 224 95.922 216.875 95.922 208V176C95.922 167.125 103.049 160 111.928 160H160V112C160 103.125 167.127 96 176.006 96H207.994C216.873 96 224 103.125 224 112V160H271.994C280.873 160 288 167.125 288 176V208Z" })
  }
));
CoffinCrossSolid.displayName = "CoffinCrossSolid";
var CoffinCross_default = CoffinCrossSolid;
