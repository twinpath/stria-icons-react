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
var Shelves_exports = {};
__export(Shelves_exports, {
  default: () => Shelves_default
});
module.exports = __toCommonJS(Shelves_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShelvesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M600 0C595.578 0 592 3.594 592 8V176H48V8C48 3.594 44.422 0 40 0S32 3.594 32 8V504C32 508.406 35.578 512 40 512S48 508.406 48 504V448H592V504C592 508.406 595.578 512 600 512S608 508.406 608 504V8C608 3.594 604.422 0 600 0ZM592 432H48V192H592V432ZM384 128H448C465.674 128 480 113.672 480 96V32C480 14.328 465.674 0 448 0H384C366.326 0 352 14.328 352 32V96C352 113.672 366.326 128 384 128ZM368 32C368 23.176 375.178 16 384 16H448C456.822 16 464 23.176 464 32V96C464 104.824 456.822 112 448 112H384C375.178 112 368 104.824 368 96V32ZM128 384H192C209.674 384 224 369.672 224 352V288C224 270.328 209.674 256 192 256H128C110.326 256 96 270.328 96 288V352C96 369.672 110.326 384 128 384ZM112 288C112 279.176 119.178 272 128 272H192C200.822 272 208 279.176 208 288V352C208 360.824 200.822 368 192 368H128C119.178 368 112 360.824 112 352V288ZM288 384H352C369.674 384 384 369.672 384 352V288C384 270.328 369.674 256 352 256H288C270.326 256 256 270.328 256 288V352C256 369.672 270.326 384 288 384ZM272 288C272 279.176 279.178 272 288 272H352C360.822 272 368 279.176 368 288V352C368 360.824 360.822 368 352 368H288C279.178 368 272 360.824 272 352V288Z" })
  }
));
ShelvesThin.displayName = "ShelvesThin";
var Shelves_default = ShelvesThin;
