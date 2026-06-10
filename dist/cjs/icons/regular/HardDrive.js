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
var HardDrive_exports = {};
__export(HardDrive_exports, {
  default: () => HardDrive_default
});
module.exports = __toCommonJS(HardDrive_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HardDriveRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 344C290.746 344 280 354.744 280 368C280 381.254 290.746 392 304 392C317.256 392 328 381.254 328 368C328 354.744 317.256 344 304 344ZM448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V96C512 60.654 483.348 32 448 32ZM464 416C464 424.822 456.822 432 448 432H64C55.178 432 48 424.822 48 416V320C48 311.178 55.178 304 64 304H448C456.822 304 464 311.178 464 320V416ZM464 258.264C458.857 256.932 453.559 256 448 256H64C58.441 256 53.143 256.932 48 258.264V96C48 87.178 55.178 80 64 80H448C456.822 80 464 87.178 464 96V258.264ZM400 344C386.746 344 376 354.744 376 368C376 381.254 386.746 392 400 392C413.256 392 424 381.254 424 368C424 354.744 413.256 344 400 344Z" })
  }
));
HardDriveRegular.displayName = "HardDriveRegular";
var HardDrive_default = HardDriveRegular;
