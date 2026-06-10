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
var SendBackward_exports = {};
__export(SendBackward_exports, {
  default: () => SendBackward_default
});
module.exports = __toCommonJS(SendBackward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SendBackwardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 160H224C188.654 160 160 188.652 160 224V448C160 483.346 188.654 512 224 512H448C483.346 512 512 483.346 512 448V224C512 188.652 483.346 160 448 160ZM480 448C480 465.672 465.674 480 448 480H224C206.326 480 192 465.672 192 448V224C192 206.326 206.326 192 224 192H448C465.674 192 480 206.326 480 224V448ZM32 288V64C32 46.327 46.327 32 64 32H288C305.673 32 320 46.327 320 64V112C320 120.837 327.163 128 336 128H336C344.837 128 352 120.837 352 112V64C352 28.654 323.346 0 288 0H64C28.654 0 0 28.654 0 64V288C0 323.346 28.654 352 64 352H112C120.837 352 128 344.837 128 336V336C128 327.163 120.837 320 112 320H64C46.327 320 32 305.673 32 288ZM432 224H240C231.125 224 224 231.125 224 240V432C224 440.875 231.125 448 240 448H432C440.875 448 448 440.875 448 432V240C448 231.125 440.875 224 432 224ZM416 416H256V256H416V416Z" })
  }
));
SendBackwardLight.displayName = "SendBackwardLight";
var SendBackward_default = SendBackwardLight;
