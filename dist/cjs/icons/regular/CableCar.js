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
var CableCar_exports = {};
__export(CableCar_exports, {
  default: () => CableCar_default
});
module.exports = __toCommonJS(CableCar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CableCarRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.126 57.625C507.626 44.859 494.407 37.359 481.626 40.859L17.623 168.859C4.842 172.391 -2.658 185.609 0.873 198.375C3.811 209.031 13.467 216 23.998 216C26.092 216 28.248 215.719 30.373 215.141L231.999 159.52V224H95.999C60.653 224 31.998 252.654 31.998 288V448C31.998 483.346 60.653 512 95.999 512H416.001C451.347 512 480.001 483.346 480.001 448V288C480.001 252.654 451.347 224 416.001 224H280V146.279L494.376 87.141C507.157 83.609 514.657 70.391 511.126 57.625ZM79.998 288C79.998 279.178 87.176 272 95.999 272H167.999V352H79.998V288ZM432.001 448C432.001 456.822 424.823 464 416.001 464H95.999C87.176 464 79.998 456.822 79.998 448V400H432.001V448ZM344 272H416.001C424.823 272 432.001 279.178 432.001 288V352H344V272ZM296 272V352H215.999V272H296ZM191.999 96C209.673 96 223.999 81.672 223.999 64C223.999 46.326 209.673 32 191.999 32S159.999 46.326 159.999 64C159.999 81.672 174.325 96 191.999 96ZM288 64C305.674 64 320 49.672 320 32C320 14.326 305.674 0 288 0C270.326 0 256 14.326 256 32C256 49.672 270.326 64 288 64Z" })
  }
));
CableCarRegular.displayName = "CableCarRegular";
var CableCar_default = CableCarRegular;
