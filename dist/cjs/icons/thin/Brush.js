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
var Brush_exports = {};
__export(Brush_exports, {
  default: () => Brush_default
});
module.exports = __toCommonJS(Brush_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BrushThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 464C200.836 464 208 456.836 208 448C208 439.162 200.836 432 192 432S176 439.162 176 448C176 456.836 183.164 464 192 464ZM352 0H32C14.326 0 0 14.326 0 32V288C0 332.182 35.816 368 80 368H128V448C128 483.346 156.654 512 192 512S256 483.346 256 448V368H304C348.184 368 384 332.182 384 288V32C384 14.326 369.674 0 352 0ZM368 288C368 323.289 339.289 352 304 352H240V448C240 474.467 218.467 496 192 496S144 474.467 144 448V352H80C44.711 352 16 323.289 16 288V256H368V288ZM368 240H16V32C16 23.178 23.178 16 32 16H88V128C88 132.422 91.594 136 96 136S104 132.422 104 128V16H184V64C184 68.422 187.594 72 192 72S200 68.422 200 64V16H280V96C280 100.422 283.594 104 288 104S296 100.422 296 96V16H352C360.822 16 368 23.178 368 32V240Z" })
  }
));
BrushThin.displayName = "BrushThin";
var Brush_default = BrushThin;
