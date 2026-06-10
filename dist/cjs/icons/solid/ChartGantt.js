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
var ChartGantt_exports = {};
__export(ChartGantt_exports, {
  default: () => ChartGantt_default
});
module.exports = __toCommonJS(ChartGantt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartGanttSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 300.75V339.25C352 345.625 358.375 352 364.75 352H467.25C473.625 352 480 345.625 480 339.25V300.75C480 294.375 473.625 288 467.25 288H364.75C358.375 288 352 294.375 352 300.75ZM192 204.75V243.25C192 249.625 198.375 256 204.75 256H371.25C377.625 256 384 249.625 384 243.25V204.75C384 198.375 377.625 192 371.25 192H204.75C198.375 192 192 198.375 192 204.75ZM480 416H64V64C64 46.327 49.673 32 32 32H32C14.327 32 0 46.327 0 64V448C0 465.6 14.4 480 32 480H480C497.673 480 512 465.673 512 448V448C512 430.327 497.673 416 480 416ZM140.75 160H275.25C281.625 160 288 153.625 288 147.25V108.75C288 102.375 281.625 96 275.25 96H140.75C134.375 96 128 102.375 128 108.75V147.25C128 153.625 134.375 160 140.75 160Z" })
  }
));
ChartGanttSolid.displayName = "ChartGanttSolid";
var ChartGantt_default = ChartGanttSolid;
