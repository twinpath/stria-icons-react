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
const PalletBoxSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 256H480C497.6 256 512 241.6 512 224V32C512 14.4 497.6 0 480 0H384V128L320 96L256 128V0H160C142.4 0 128 14.4 128 32V224C128 241.6 142.4 256 160 256ZM624 384C632.75 384 640 376.75 640 368V336C640 327.25 632.75 320 624 320H16C7.25 320 0 327.25 0 336V368C0 376.75 7.25 384 16 384H64V448H16C7.25 448 0 455.25 0 464V496C0 504.75 7.25 512 16 512H624C632.75 512 640 504.75 640 496V464C640 455.25 632.75 448 624 448H576V384H624ZM288 448H128V384H288V448ZM512 448H352V384H512V448Z" })
  }
));
PalletBoxSolid.displayName = "PalletBoxSolid";
var PalletBox_default = PalletBoxSolid;
