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
const PalletBoxRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 288H448C483.346 288 512 259.346 512 224V64C512 28.652 483.346 0 448 0H192C156.654 0 128 28.652 128 64V224C128 259.346 156.654 288 192 288ZM176 64C176 55.178 183.178 48 192 48H256C256 70.223 256 128 256 128L320 96L384 128V48H448C456.822 48 464 55.178 464 64V224C464 232.822 456.822 240 448 240H192C183.178 240 176 232.822 176 224V64ZM616 464H568V368H616C629.25 368 640 357.25 640 344S629.25 320 616 320H24C10.75 320 0 330.75 0 344S10.75 368 24 368H72V464H24C10.75 464 0 474.75 0 488S10.75 512 24 512H616C629.25 512 640 501.25 640 488S629.25 464 616 464ZM296 464H120V368H296V464ZM520 464H344V368H520V464Z" })
  }
));
PalletBoxRegular.displayName = "PalletBoxRegular";
var PalletBox_default = PalletBoxRegular;
