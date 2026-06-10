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
var FileCsv_exports = {};
__export(FileCsv_exports, {
  default: () => FileCsv_default
});
module.exports = __toCommonJS(FileCsv_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileCsvSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0V128H384L256 0ZM224 128V0H48C21.492 0 0 21.492 0 48V464C0 490.508 21.492 512 48 512H336C362.508 512 384 490.508 384 464V160H256C238.328 160 224 145.672 224 128ZM128 280C128 284.375 124.375 288 120 288H112C103.125 288 96 295.125 96 304V336C96 344.875 103.125 352 112 352H120C124.375 352 128 355.625 128 360V376C128 380.375 124.375 384 120 384H112C85.5 384 64 362.5 64 336V304C64 277.5 85.5 256 112 256H120C124.375 256 128 259.625 128 264V280ZM172.25 384H160C155.625 384 152 380.375 152 376V360C152 355.625 155.625 352 160 352H172.25C178.25 352 182.625 348.5 182.625 345.375C182.625 344.125 181.875 342.75 180.5 341.5L158.625 322.75C150.25 315.5 145.375 305.25 145.375 294.625C145.375 273.375 164.375 256 187.75 256H200C204.375 256 208 259.625 208 264V280C208 284.375 204.375 288 200 288H187.75C181.75 288 177.375 291.5 177.375 294.625C177.375 295.875 178.125 297.25 179.5 298.5L201.375 317.25C209.75 324.5 214.625 334.75 214.625 345.375C214.625 366.625 195.625 384 172.25 384ZM288 284.75V264C288 259.625 291.625 256 296 256H312C316.375 256 320 259.625 320 264V284.75C320 320.25 307.125 353.75 283.75 378.875C280.75 382.125 276.5 384 272 384S263.25 382.125 260.25 378.875C236.875 353.75 224 320.25 224 284.75V264C224 259.625 227.625 256 232 256H248C252.375 256 256 259.625 256 264V284.75C256 305.125 261.75 325 272 341.625C282.25 325 288 305.125 288 284.75Z" })
  }
));
FileCsvSolid.displayName = "FileCsvSolid";
var FileCsv_default = FileCsvSolid;
