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
var Ornament_exports = {};
__export(Ornament_exports, {
  default: () => Ornament_default
});
module.exports = __toCommonJS(Ornament_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OrnamentRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 153.875V112C288 103.25 280.75 96 272 96H247.125C252.625 86.625 256 75.75 256 64C256 28.75 227.25 0 192 0S128 28.75 128 64C128 75.75 131.375 86.625 136.875 96H112C103.25 96 96 103.25 96 112V153.875C38.75 187.125 0 249 0 320C0 426.001 86 512 192 512C298 512 384 426.001 384 320C384 249 345.25 187.125 288 153.875ZM192 48C200.75 48 208 55.25 208 64S200.75 80 192 80S176 72.75 176 64S183.25 48 192 48ZM192 176C234.375 176 272.25 194.75 298.5 224H85.5C111.75 194.75 149.625 176 192 176ZM336 320C336 336.875 332.5 352.875 327.25 368H56.75C51.375 352.875 48 336.875 48 320S51.5 287.125 56.75 272H327.125C332.5 287.125 336 303.125 336 320ZM192 464C149.625 464 111.75 445.25 85.5 416H298.625C272.25 445.25 234.375 464 192 464Z" })
  }
));
OrnamentRegular.displayName = "OrnamentRegular";
var Ornament_default = OrnamentRegular;
