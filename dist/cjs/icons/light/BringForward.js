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
var BringForward_exports = {};
__export(BringForward_exports, {
  default: () => BringForward_default
});
module.exports = __toCommonJS(BringForward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BringForwardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 416H256V400C256 391.163 248.837 384 240 384H240C231.163 384 224 391.163 224 400V432C224 440.837 231.163 448 240 448H432C440.837 448 448 440.837 448 432V240C448 231.163 440.837 224 432 224H400C391.163 224 384 231.163 384 240V240C384 248.837 391.163 256 400 256H416V416ZM352 288V64C352 28.654 323.346 0 288 0H64C28.654 0 0 28.654 0 64V288C0 323.346 28.654 352 64 352H288C323.346 352 352 323.346 352 288ZM32 288V64C32 46.326 46.326 32 64 32H288C305.674 32 320 46.326 320 64V288C320 305.674 305.674 320 288 320H64C46.326 320 32 305.674 32 288ZM448 160H400C391.163 160 384 167.163 384 176V176C384 184.837 391.163 192 400 192H448C465.673 192 480 206.327 480 224V448C480 465.673 465.673 480 448 480H224C206.327 480 192 465.673 192 448V400C192 391.163 184.837 384 176 384H176C167.163 384 160 391.163 160 400V448C160 483.346 188.654 512 224 512H448C483.346 512 512 483.346 512 448V224C512 188.654 483.346 160 448 160Z" })
  }
));
BringForwardLight.displayName = "BringForwardLight";
var BringForward_default = BringForwardLight;
