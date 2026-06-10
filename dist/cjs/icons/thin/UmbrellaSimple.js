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
var UmbrellaSimple_exports = {};
__export(UmbrellaSimple_exports, {
  default: () => UmbrellaSimple_default
});
module.exports = __toCommonJS(UmbrellaSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UmbrellaSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.998 320C251.592 320 247.998 323.594 247.998 328V452C247.998 476.25 228.248 496 203.998 496S159.998 476.25 159.998 452V424C159.998 419.594 156.404 416 151.998 416S143.998 419.594 143.998 424V452C143.998 485.094 170.904 512 203.998 512S263.998 485.094 263.998 452V328C263.998 323.594 260.404 320 255.998 320ZM263.998 8C263.998 3.594 260.404 0 255.998 0S247.998 3.594 247.998 8V32H256H263.998V8ZM256 32C114.844 32 0 143.25 0 280C0 284.406 3.594 288 8 288H504C508.406 288 512 284.406 512 280C512 143.25 397.156 32 256 32ZM16.156 272C20.531 147.75 126.438 48 256 48S491.469 147.75 495.844 272H16.156Z" })
  }
));
UmbrellaSimpleThin.displayName = "UmbrellaSimpleThin";
var UmbrellaSimple_default = UmbrellaSimpleThin;
