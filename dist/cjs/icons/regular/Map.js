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
const MapRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M554 33.124L384 95.999L212 35.249C205.5 33.124 198.625 31.999 191.75 31.999C185.125 31.999 178.375 32.999 172 35.124L20.125 87.999C8 92.749 0 104.624 0 117.624V463.999C0 474.888 10.848 483.057 22 478.874L192 415.999L364 476.749C377 480.999 391 481.124 404 476.874L555.875 423.999C568 419.249 576 407.374 576 394.374V47.999C576 37.11 565.152 28.943 554 33.124ZM224 90.374L352 135.624V421.624L224 376.374V90.374ZM48 418V129.124L176 84.499V370.749L175.375 370.999L48 418ZM528 382.874L400 427.499V141.249L400.625 140.999L528 94V382.874Z" })
  }
));
MapRegular.displayName = "MapRegular";
var Map_default = MapRegular;
