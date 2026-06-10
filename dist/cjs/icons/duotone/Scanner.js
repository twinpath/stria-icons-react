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
const ScannerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M551.658 288H47.961C21.469 288.023 0 309.5 0 335.996V431.998C0 458.51 21.492 480 48.002 480H528C554.51 480 576 458.51 576 432V329.578C576 312.301 566.609 296.518 551.658 288ZM127.994 399.984C127.994 408.785 120.795 415.984 111.994 415.984H80.008C71.207 415.984 64.008 408.785 64.008 399.984V367.998C64.008 359.195 71.207 351.996 80.008 351.996H111.994C120.795 351.996 127.994 359.195 127.994 367.998V399.984ZM223.994 399.984C223.994 408.785 216.795 415.984 207.994 415.984H176.008C167.207 415.984 160.008 408.785 160.008 399.984V367.998C160.008 359.195 167.207 351.996 176.008 351.996H207.994C216.795 351.996 223.994 359.195 223.994 367.998V399.984Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M47.965 288H551.663C551.274 287.779 550.991 287.438 550.594 287.227L79.067 35.738C63.473 27.488 44.067 33.332 35.77 48.928C27.458 64.521 33.348 83.896 48.942 92.24L416.016 287.996H48.005C47.991 287.996 47.979 288 47.965 288ZM111.999 351.996H80.012C71.212 351.996 64.012 359.195 64.012 367.998V399.984C64.012 408.785 71.212 415.984 80.012 415.984H111.999C120.799 415.984 127.999 408.785 127.999 399.984V367.998C127.999 359.195 120.799 351.996 111.999 351.996Z" })
    ]
  }
));
ScannerDuotone.displayName = "ScannerDuotone";
var Scanner_default = ScannerDuotone;
