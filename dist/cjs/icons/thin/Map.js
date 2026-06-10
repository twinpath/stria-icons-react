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
var Map_exports = {};
__export(Map_exports, {
  default: () => Map_default
});
module.exports = __toCommonJS(Map_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MapThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M554.656 32.893L391.453 90.633L188.406 32.639C183.722 31.243 179.679 32.613 179.594 32.639L11.594 80.639C4.75 82.607 0 88.857 0 96.014V464.014C0 474.671 10.381 482.766 21.344 479.107L184.547 421.367L387.594 479.361C392.278 480.757 396.321 479.387 396.406 479.361L564.406 431.361C571.25 429.393 576 423.143 576 415.986V47.986C576 37.329 565.619 29.234 554.656 32.893ZM176 407.42L16.285 463.93C16.152 463.973 16.055 463.984 16 463.986L15.988 96.023L176 50.312V407.42ZM384 461.693L192 406.857V50.307L384 105.143V461.693ZM400 461.688V104.58L559.715 48.07C559.848 48.027 559.945 48.016 560 48.014L560.012 415.977L400 461.688Z" })
  }
));
MapThin.displayName = "MapThin";
var Map_default = MapThin;
