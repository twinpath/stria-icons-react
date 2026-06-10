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
const PaletteBoxesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 256H288C305.6 256 320 241.6 320 224V32C320 14.4 305.6 0 288 0H96C78.4 0 64 14.4 64 32V224C64 241.6 78.4 256 96 256ZM416 256H544C561.6 256 576 241.6 576 224V96C576 78.4 561.6 64 544 64H416C398.4 64 384 78.4 384 96V224C384 241.6 398.4 256 416 256ZM624 384C632.75 384 640 376.75 640 368V336C640 327.25 632.75 320 624 320H16C7.25 320 0 327.25 0 336V368C0 376.75 7.25 384 16 384H64V448H16C7.25 448 0 455.25 0 464V496C0 504.75 7.25 512 16 512H624C632.75 512 640 504.75 640 496V464C640 455.25 632.75 448 624 448H576V384H624ZM288 448H128V384H288V448ZM512 448H352V384H512V448Z" })
  }
));
PaletteBoxesSolid.displayName = "PaletteBoxesSolid";
var PaletteBoxes_default = PaletteBoxesSolid;
