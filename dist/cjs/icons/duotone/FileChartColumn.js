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
var FileChartColumn_exports = {};
__export(FileChartColumn_exports, {
  default: () => FileChartColumn_default
});
module.exports = __toCommonJS(FileChartColumn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileChartColumnDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM128 435.25C128 441.625 121.625 448 115.25 448H76.75C70.375 448 64 441.625 64 435.25V364.75C64 358.375 70.375 352 76.75 352H115.25C121.625 352 128 358.375 128 364.75V435.25ZM224 435.25C224 441.625 217.625 448 211.25 448H172.75C166.375 448 160 441.625 160 435.25V236.75C160 230.375 166.375 224 172.75 224H211.25C217.625 224 224 230.375 224 236.75V435.25ZM320 435.25C320 441.625 313.625 448 307.25 448H268.75C262.375 448 256 441.625 256 435.25V300.75C256 294.375 262.375 288 268.75 288H307.25C313.625 288 320 294.375 320 300.75V435.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M307.25 288H268.75C262.375 288 256 294.375 256 300.75V435.25C256 441.625 262.375 448 268.75 448H307.25C313.625 448 320 441.625 320 435.25V300.75C320 294.375 313.625 288 307.25 288ZM115.25 352H76.75C70.375 352 64 358.375 64 364.75V435.25C64 441.625 70.375 448 76.75 448H115.25C121.625 448 128 441.625 128 435.25V364.75C128 358.375 121.625 352 115.25 352ZM211.25 224H172.75C166.375 224 160 230.375 160 236.75V435.25C160 441.625 166.375 448 172.75 448H211.25C217.625 448 224 441.625 224 435.25V236.75C224 230.375 217.625 224 211.25 224ZM256 0V128H384L256 0Z" })
    ]
  }
));
FileChartColumnDuotone.displayName = "FileChartColumnDuotone";
var FileChartColumn_default = FileChartColumnDuotone;
