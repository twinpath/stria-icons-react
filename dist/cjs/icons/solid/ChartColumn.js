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
var ChartColumn_exports = {};
__export(ChartColumn_exports, {
  default: () => ChartColumn_default
});
module.exports = __toCommonJS(ChartColumn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartColumnSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M332.75 352H371.25C377.625 352 384 345.625 384 339.25V204.75C384 198.375 377.625 192 371.25 192H332.75C326.375 192 320 198.375 320 204.75V339.25C320 345.625 326.375 352 332.75 352ZM428.75 352H467.25C473.625 352 480 345.625 480 339.25V108.75C480 102.375 473.625 96 467.25 96H428.75C422.375 96 416 102.375 416 108.75V339.25C416 345.625 422.375 352 428.75 352ZM480 416H64V64C64 46.327 49.673 32 32 32H32C14.327 32 0 46.327 0 64V448C0 465.6 14.4 480 32 480H480C497.673 480 512 465.673 512 448V448C512 430.327 497.673 416 480 416ZM236.75 352H275.25C281.625 352 288 345.625 288 339.25V140.75C288 134.375 281.625 128 275.25 128H236.75C230.375 128 224 134.375 224 140.75V339.25C224 345.625 230.375 352 236.75 352ZM140.75 352H179.25C185.625 352 192 345.625 192 339.25V268.75C192 262.375 185.625 256 179.25 256H140.75C134.375 256 128 262.375 128 268.75V339.25C128 345.625 134.375 352 140.75 352Z" })
  }
));
ChartColumnSolid.displayName = "ChartColumnSolid";
var ChartColumn_default = ChartColumnSolid;
