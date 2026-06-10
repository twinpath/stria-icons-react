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
var PaletteBoxes_exports = {};
__export(PaletteBoxes_exports, {
  default: () => PaletteBoxes_default
});
module.exports = __toCommonJS(PaletteBoxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaletteBoxesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632 496H552V368H632C636.406 368 640 364.422 640 360S636.406 352 632 352H8C3.594 352 0 355.578 0 360S3.594 368 8 368H88V496H8C3.594 496 0 499.578 0 504S3.594 512 8 512H632C636.406 512 640 508.422 640 504S636.406 496 632 496ZM312 496H104V368H312V496ZM536 496H328V368H536V496ZM112 288H272C298.51 288 320 266.51 320 240V48C320 21.49 298.51 0 272 0H112C85.49 0 64 21.49 64 48V240C64 266.51 85.49 288 112 288ZM80 48C80 30.355 94.355 16 112 16H272C289.645 16 304 30.355 304 48V240C304 257.645 289.645 272 272 272H112C94.355 272 80 257.645 80 240V48ZM432 288H528C554.51 288 576 266.51 576 240V112C576 85.49 554.51 64 528 64H432C405.49 64 384 85.49 384 112V240C384 266.51 405.49 288 432 288ZM400 112C400 94.355 414.355 80 432 80H528C545.645 80 560 94.355 560 112V240C560 257.645 545.645 272 528 272H432C414.355 272 400 257.645 400 240V112Z" })
  }
));
PaletteBoxesThin.displayName = "PaletteBoxesThin";
var PaletteBoxes_default = PaletteBoxesThin;
