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
var Boombox_exports = {};
__export(Boombox_exports, {
  default: () => Boombox_default
});
module.exports = __toCommonJS(Boombox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoomboxSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 256C419.875 256 384 291.875 384 336S419.875 416 464 416S544 380.125 544 336S508.125 256 464 256ZM176 256C131.875 256 96 291.875 96 336S131.875 416 176 416S256 380.125 256 336S220.125 256 176 256ZM608 163V56C608 25.125 582.875 0 552 0H88C57.125 0 32 25.125 32 56V163C12.875 169.625 0 187.75 0 208V464C0 490.5 21.5 512 48 512H592C618.5 512 640 490.5 640 464V208C640 187.75 627.125 169.625 608 163ZM176 448C114.125 448 64 397.875 64 336S114.125 224 176 224S288 274.125 288 336S237.875 448 176 448ZM336 128H304C295.125 128 288 135.125 288 144V160H256V144C256 135.125 248.875 128 240 128H208C199.125 128 192 135.125 192 144V160H80V56C80 51.625 83.625 48 88 48H552C556.375 48 560 51.625 560 56V160H448V144C448 135.125 440.875 128 432 128H400C391.125 128 384 135.125 384 144V160H352V144C352 135.125 344.875 128 336 128ZM464 448C402.125 448 352 397.875 352 336S402.125 224 464 224S576 274.125 576 336S525.875 448 464 448Z" })
  }
));
BoomboxSolid.displayName = "BoomboxSolid";
var Boombox_default = BoomboxSolid;
