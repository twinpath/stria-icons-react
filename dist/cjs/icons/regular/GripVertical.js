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
var GripVertical_exports = {};
__export(GripVertical_exports, {
  default: () => GripVertical_default
});
module.exports = __toCommonJS(GripVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GripVerticalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 352H32C14.375 352 0 366.375 0 384V448C0 465.625 14.375 480 32 480H96C113.625 480 128 465.625 128 448V384C128 366.375 113.625 352 96 352ZM80 432H48V400H80V432ZM288 352H224C206.375 352 192 366.375 192 384V448C192 465.625 206.375 480 224 480H288C305.625 480 320 465.625 320 448V384C320 366.375 305.625 352 288 352ZM272 432H240V400H272V432ZM288 32H224C206.375 32 192 46.375 192 64V128C192 145.625 206.375 160 224 160H288C305.625 160 320 145.625 320 128V64C320 46.375 305.625 32 288 32ZM272 112H240V80H272V112ZM288 192H224C206.375 192 192 206.375 192 224V288C192 305.625 206.375 320 224 320H288C305.625 320 320 305.625 320 288V224C320 206.375 305.625 192 288 192ZM272 272H240V240H272V272ZM96 192H32C14.375 192 0 206.375 0 224V288C0 305.625 14.375 320 32 320H96C113.625 320 128 305.625 128 288V224C128 206.375 113.625 192 96 192ZM80 272H48V240H80V272ZM96 32H32C14.375 32 0 46.375 0 64V128C0 145.625 14.375 160 32 160H96C113.625 160 128 145.625 128 128V64C128 46.375 113.625 32 96 32ZM80 112H48V80H80V112Z" })
  }
));
GripVerticalRegular.displayName = "GripVerticalRegular";
var GripVertical_default = GripVerticalRegular;
