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
var PalletBox_exports = {};
__export(PalletBox_exports, {
  default: () => PalletBox_default
});
module.exports = __toCommonJS(PalletBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PalletBoxLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 288H448C483.346 288 512 259.346 512 224V64C512 28.652 483.346 0 448 0H192C156.654 0 128 28.652 128 64V224C128 259.346 156.654 288 192 288ZM272 32H368V102.125L327.156 81.687C322.656 79.437 317.344 79.437 312.844 81.687L272 102.125V32ZM160 64C160 46.355 174.355 32 192 32H240V128C240 133.531 242.875 138.688 247.594 141.625C252.25 144.437 258.188 144.781 263.156 142.312L320 113.875L376.844 142.313C379.094 143.438 381.562 144 384 144C386.938 144 389.844 143.188 392.406 141.625C397.125 138.688 400 133.531 400 128V32H448C465.645 32 480 46.355 480 64V224C480 241.645 465.645 256 448 256H192C174.355 256 160 241.645 160 224V64ZM624 480H560V384H624C632.844 384 640 376.844 640 368S632.844 352 624 352H16C7.156 352 0 359.156 0 368S7.156 384 16 384H80V480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H624C632.844 512 640 504.844 640 496S632.844 480 624 480ZM304 480H112V384H304V480ZM528 480H336V384H528V480Z" })
  }
));
PalletBoxLight.displayName = "PalletBoxLight";
var PalletBox_default = PalletBoxLight;
