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
var HospitalUser_exports = {};
__export(HospitalUser_exports, {
  default: () => HospitalUser_default
});
module.exports = __toCommonJS(HospitalUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HospitalUserLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 320C533.02 320 576 277.018 576 224C576 170.98 533.02 128 480 128C426.982 128 384 170.98 384 224C384 277.018 426.982 320 480 320ZM480 160C515.289 160 544 188.711 544 224S515.289 288 480 288S416 259.289 416 224S444.711 160 480 160ZM272 384H32V288H320V336C320 344.836 327.164 352 336 352S352 344.836 352 336V64C352 28.652 323.346 0 288 0H64C28.654 0 0 28.652 0 64V496C0 504.836 7.164 512 16 512S32 504.836 32 496V416H272C280.836 416 288 408.836 288 400C288 391.162 280.836 384 272 384ZM32 64C32 46.326 46.326 32 64 32H288C305.674 32 320 46.326 320 64V256H32V64ZM229.334 106.666H197.334V74.666C197.334 68.773 192.557 64 186.666 64H165.334C159.443 64 154.666 68.773 154.666 74.666V106.666H122.666C116.775 106.666 112 111.441 112 117.332V138.666C112 144.557 116.775 149.332 122.666 149.332H154.666V181.332C154.666 187.223 159.443 192 165.334 192H186.666C192.557 192 197.334 187.223 197.334 181.332V149.332H229.334C235.225 149.332 240 144.557 240 138.666V117.332C240 111.441 235.225 106.666 229.334 106.666ZM512 352H448C377.307 352 320 409.307 320 480C320 497.672 334.326 512 352 512H608C625.674 512 640 497.672 640 480C640 409.307 582.693 352 512 352ZM352 480C352 427.064 395.066 384 448 384H512C564.936 384 608 427.064 608 480H352Z" })
  }
));
HospitalUserLight.displayName = "HospitalUserLight";
var HospitalUser_default = HospitalUserLight;
