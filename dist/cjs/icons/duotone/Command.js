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
var Command_exports = {};
__export(Command_exports, {
  default: () => Command_default
});
module.exports = __toCommonJS(Command_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommandDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 288H96C43.062 288 0 331.062 0 384S43.062 480 96 480S192 436.938 192 384V224H128V288ZM128 384C128 401.656 113.656 416 96 416S64 401.656 64 384S78.344 352 96 352H128V384ZM352 32C299.062 32 256 75.062 256 128V288H320V224H352C404.938 224 448 180.938 448 128S404.938 32 352 32ZM352 160H320V128C320 110.344 334.344 96 352 96S384 110.344 384 128S369.656 160 352 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 288H192V352H256V384C256 436.938 299.062 480 352 480S448 436.938 448 384S404.938 288 352 288ZM352 416C334.344 416 320 401.656 320 384V352H352C369.656 352 384 366.344 384 384S369.656 416 352 416ZM256 160H192V128C192 75.062 148.938 32 96 32S0 75.062 0 128S43.062 224 96 224H256V160ZM128 160H96C78.344 160 64 145.656 64 128S78.344 96 96 96S128 110.344 128 128V160Z" })
    ]
  }
));
CommandDuotone.displayName = "CommandDuotone";
var Command_default = CommandDuotone;
