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
var IdCardClip_exports = {};
__export(IdCardClip_exports, {
  default: () => IdCardClip_default
});
module.exports = __toCommonJS(IdCardClip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IdCardClipLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128H320C337.674 128 352 113.674 352 96V32C352 14.326 337.674 0 320 0H256C238.328 0 224 14.326 224 32V96C224 113.674 238.328 128 256 128ZM256 32H320V96H256V32ZM288 320C323.346 320 352 291.346 352 256S323.346 192 288 192S224 220.654 224 256S252.654 320 288 320ZM288 224C305.645 224 320 238.355 320 256S305.645 288 288 288S256 273.645 256 256S270.355 224 288 224ZM512 64H400C391.163 64 384 71.163 384 80V80C384 88.837 391.163 96 400 96H512C529.673 96 544 110.327 544 128V448C544 465.673 529.673 480 512 480H64C46.327 480 32 465.673 32 448V128C32 110.327 46.327 96 64 96H176C184.837 96 192 88.837 192 80V80C192 71.163 184.837 64 176 64H64C28.654 64 0 92.654 0 128V448C0 483.346 28.654 512 64 512H512C547.346 512 576 483.346 576 448V128C576 92.654 547.346 64 512 64ZM192 448C200.836 448 208 440.836 208 432C208 405.49 229.49 384 256 384H320C346.51 384 368 405.49 368 432C368 440.836 375.164 448 384 448S400 440.836 400 432C400 387.816 364.184 352 320 352H256C211.816 352 176 387.816 176 432C176 440.836 183.164 448 192 448Z" })
  }
));
IdCardClipLight.displayName = "IdCardClipLight";
var IdCardClip_default = IdCardClipLight;
