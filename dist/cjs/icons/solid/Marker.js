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
var Marker_exports = {};
__export(Marker_exports, {
  default: () => Marker_default
});
module.exports = __toCommonJS(Marker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarkerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M94.006 290.006C41.51 342.502 8.389 411.369 0.139 485.113V485.363C-1.486 500.611 11.389 513.486 26.637 511.861C100.506 503.736 169.375 470.615 221.994 417.994L297.363 342.627L169.375 214.637L94.006 290.006ZM485.471 26.529C450.1 -8.844 392.856 -8.844 357.483 26.529L335.734 48.277L299.113 11.779C283.49 -3.844 258.242 -3.844 242.617 11.779L138.502 115.896C132.252 122.145 132.252 132.27 138.502 138.52L149.811 149.828C156.061 156.078 166.186 156.078 172.434 149.828L270.865 51.396L301.803 82.209L191.998 192.014L319.986 320.004L485.471 154.518C520.844 119.146 520.844 61.9 485.471 26.529Z" })
  }
));
MarkerSolid.displayName = "MarkerSolid";
var Marker_default = MarkerSolid;
