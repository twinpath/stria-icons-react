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
var WarehouseFull_exports = {};
__export(WarehouseFull_exports, {
  default: () => WarehouseFull_default
});
module.exports = __toCommonJS(WarehouseFull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WarehouseFullSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 416H144C135.25 416 128 423.25 128 432V496C128 504.75 135.25 512 144 512H304C312.75 512 320 504.75 320 496V432C320 423.25 312.75 416 304 416ZM304 288H144C135.25 288 128 295.25 128 304V368C128 376.75 135.25 384 144 384H304C312.75 384 320 376.75 320 368V304C320 295.25 312.75 288 304 288ZM496 416H368C359.25 416 352 423.25 352 432V496C352 504.75 359.25 512 368 512H496C504.75 512 512 504.75 512 496V432C512 423.25 504.75 416 496 416ZM610.5 117L338.375 3.625C332.5 1.5 326.25 0.25 320 0C313.625 0.25 307.375 1.375 301.5 3.625L29.5 117C11.625 124.5 0 141.875 0 161.25V496C0 504.875 7.125 512 16 512H80C88.875 512 96 504.875 96 496V256C96 238.375 110.625 224 128.625 224H511.375C529.375 224 544 238.375 544 256V496C544 504.875 551.125 512 560 512H624C632.875 512 640 504.875 640 496V161.25C640 141.875 628.375 124.5 610.5 117Z" })
  }
));
WarehouseFullSolid.displayName = "WarehouseFullSolid";
var WarehouseFull_default = WarehouseFullSolid;
