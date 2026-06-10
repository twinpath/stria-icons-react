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
const CommandRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 288H304V224H352C405.02 224 448 181.02 448 128S405.02 32 352 32S256 74.98 256 128V176H192V128C192 74.98 149.02 32 96 32S0 74.98 0 128S42.98 224 96 224H144V288H96C42.98 288 0 330.98 0 384S42.98 480 96 480S192 437.02 192 384V336H256V384C256 437.02 298.98 480 352 480S448 437.02 448 384S405.02 288 352 288ZM304 128C304 101.533 325.533 80 352 80S400 101.533 400 128S378.467 176 352 176H304V128ZM144 384C144 410.467 122.467 432 96 432S48 410.467 48 384S69.533 336 96 336H144V384ZM144 176H96C69.533 176 48 154.467 48 128S69.533 80 96 80S144 101.533 144 128V176ZM256 288H192V224H256V288ZM352 432C325.533 432 304 410.467 304 384V336H352C378.467 336 400 357.533 400 384S378.467 432 352 432Z" })
  }
));
CommandRegular.displayName = "CommandRegular";
var Command_default = CommandRegular;
