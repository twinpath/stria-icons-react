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
var DiscDrive_exports = {};
__export(DiscDrive_exports, {
  default: () => DiscDrive_default
});
module.exports = __toCommonJS(DiscDrive_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiscDriveRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 112C176.5 112 112 176.5 112 256S176.5 400 256 400S400 335.5 400 256S335.5 112 256 112ZM256 288C238.375 288 224 273.625 224 256S238.375 224 256 224C273.625 224 288 238.375 288 256S273.625 288 256 288ZM488 432H480V96C480 60.654 451.346 32 416 32H96C60.654 32 32 60.654 32 96V432H24C10.745 432 0 442.745 0 456V456C0 469.255 10.745 480 24 480H488C501.255 480 512 469.255 512 456V456C512 442.745 501.255 432 488 432ZM432 432H80V96C80 87.125 87.125 80 96 80H416C424.875 80 432 87.125 432 96V432Z" })
  }
));
DiscDriveRegular.displayName = "DiscDriveRegular";
var DiscDrive_default = DiscDriveRegular;
