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
var UsbDrive_exports = {};
__export(UsbDrive_exports, {
  default: () => UsbDrive_default
});
module.exports = __toCommonJS(UsbDrive_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UsbDriveSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 160V352C0 387.346 28.654 416 64 416H448V96H64C28.654 96 0 124.652 0 160ZM608 128H480V384H608C625.674 384 640 369.672 640 352V160C640 142.326 625.674 128 608 128ZM584 312C584 320.875 576.875 328 568 328H552C543.125 328 536 320.875 536 312V296C536 287.125 543.125 280 552 280H568C576.875 280 584 287.125 584 296V312ZM584 216C584 224.875 576.875 232 568 232H552C543.125 232 536 224.875 536 216V200C536 191.125 543.125 184 552 184H568C576.875 184 584 191.125 584 200V216Z" })
  }
));
UsbDriveSolid.displayName = "UsbDriveSolid";
var UsbDrive_default = UsbDriveSolid;
