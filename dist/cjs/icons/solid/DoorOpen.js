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
var DoorOpen_exports = {};
__export(DoorOpen_exports, {
  default: () => DoorOpen_default
});
module.exports = __toCommonJS(DoorOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DoorOpenSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 448.001H512V113.508C512 86.259 490.5 64.009 464 64.009H352V128.008H448V512H560C568.875 512 576 504.875 576 496V464.001C576 455.126 568.875 448.001 560 448.001ZM280.25 1.011L88.25 50.759C73.999 54.509 64 67.759 64 82.884V448.001H16C7.125 448.001 0 455.126 0 464.001V496C0 504.875 7.125 512 16 512H320V33.135C320 11.635 300.5 -4.239 280.25 1.011ZM232 288.005C218.75 288.005 208 273.63 208 256.005S218.75 224.006 232 224.006S256 238.381 256 256.005S245.25 288.005 232 288.005Z" })
  }
));
DoorOpenSolid.displayName = "DoorOpenSolid";
var DoorOpen_default = DoorOpenSolid;
