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
var Scanner_exports = {};
__export(Scanner_exports, {
  default: () => Scanner_default
});
module.exports = __toCommonJS(Scanner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScannerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M550.589 287.226L79.062 35.739C63.469 27.489 44.062 33.333 35.766 48.927C27.453 64.521 33.344 83.896 48.938 92.24L416.012 287.995H48C21.49 287.995 0 309.486 0 335.995V431.999C0 458.509 21.491 480 48.001 480H528C554.51 480 576 458.51 576 432V329.579C576 311.852 566.23 295.568 550.589 287.226ZM127.994 399.984C127.994 408.785 120.795 415.985 111.994 415.985H80.008C71.207 415.985 64.008 408.785 64.008 399.984V367.997C64.008 359.196 71.207 351.997 80.008 351.997H111.994C120.795 351.997 127.994 359.196 127.994 367.997V399.984ZM223.994 399.984C223.994 408.785 216.795 415.985 207.994 415.985H176.008C167.207 415.985 160.008 408.785 160.008 399.984V367.997C160.008 359.196 167.207 351.997 176.008 351.997H207.994C216.795 351.997 223.994 359.196 223.994 367.997V399.984Z" })
  }
));
ScannerSolid.displayName = "ScannerSolid";
var Scanner_default = ScannerSolid;
