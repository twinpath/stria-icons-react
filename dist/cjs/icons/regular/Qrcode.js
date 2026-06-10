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
var Qrcode_exports = {};
__export(Qrcode_exports, {
  default: () => Qrcode_default
});
module.exports = __toCommonJS(Qrcode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QrcodeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 32H32C14.328 32 0 46.326 0 64V192C0 209.674 14.328 224 32 224H160C177.674 224 192 209.674 192 192V64C192 46.326 177.674 32 160 32ZM144 176H48V80H144V176ZM160 288H32C14.328 288 0 302.326 0 320V448C0 465.674 14.328 480 32 480H160C177.674 480 192 465.674 192 448V320C192 302.326 177.674 288 160 288ZM144 432H48V336H144V432ZM416 32H288C270.328 32 256 46.326 256 64V192C256 209.674 270.328 224 288 224H416C433.674 224 448 209.674 448 192V64C448 46.326 433.674 32 416 32ZM400 176H304V80H400V176ZM416 320H352V288H256V480H320V384H352V416H448V288H416V320ZM352 480H384V448H352V480ZM416 480H448V448H416V480ZM112 112H80V144H112V112ZM368 112H336V144H368V112ZM112 368H80V400H112V368Z" })
  }
));
QrcodeRegular.displayName = "QrcodeRegular";
var Qrcode_default = QrcodeRegular;
