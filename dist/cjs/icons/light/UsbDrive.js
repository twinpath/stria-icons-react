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
const UsbDriveLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H416C433.674 416 448 401.674 448 384V128C448 110.326 433.674 96 416 96ZM416 384H64C46.355 384 32 369.645 32 352V160C32 142.355 46.355 128 64 128H416V384ZM592 128H496C487.156 128 480 135.156 480 144S487.156 160 496 160H592C600.812 160 608 167.172 608 176V336C608 344.828 600.812 352 592 352H496C487.156 352 480 359.156 480 368S487.156 384 496 384H592C618.469 384 640 362.469 640 336V176C640 149.531 618.469 128 592 128ZM552 224H568C572.418 224 576 220.418 576 216V200C576 195.58 572.418 192 568 192H552C547.582 192 544 195.58 544 200V216C544 220.418 547.582 224 552 224ZM544 312C544 316.418 547.582 320 552 320H568C572.418 320 576 316.418 576 312V296C576 291.58 572.418 288 568 288H552C547.582 288 544 291.58 544 296V312Z" })
  }
));
UsbDriveLight.displayName = "UsbDriveLight";
var UsbDrive_default = UsbDriveLight;
