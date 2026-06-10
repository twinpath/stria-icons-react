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
var HospitalWide_exports = {};
__export(HospitalWide_exports, {
  default: () => HospitalWide_default
});
module.exports = __toCommonJS(HospitalWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HospitalWideLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 96H448V64C448 28.652 419.346 0 384 0H192C156.654 0 128 28.652 128 64V96H64C28.654 96 0 124.652 0 160V496C0 504.836 7.164 512 16 512S32 504.836 32 496V160C32 142.326 46.326 128 64 128H128V496C128 504.836 135.164 512 144 512S160 504.836 160 496V416H416V496C416 504.836 423.164 512 432 512S448 504.836 448 496V128H512C529.674 128 544 142.326 544 160V496C544 504.836 551.164 512 560 512S576 504.836 576 496V160C576 124.652 547.346 96 512 96ZM416 384H160V288H416V384ZM416 256H160V64C160 46.326 174.326 32 192 32H384C401.674 32 416 46.326 416 64V256ZM341.334 106.666H309.334V74.666C309.334 68.773 304.557 64 298.666 64H277.334C271.443 64 266.666 68.773 266.666 74.666V106.666H234.666C228.775 106.666 224 111.441 224 117.332V138.666C224 144.557 228.775 149.332 234.666 149.332H266.666V181.332C266.666 187.223 271.443 192 277.334 192H298.666C304.557 192 309.334 187.223 309.334 181.332V149.332H341.334C347.225 149.332 352 144.557 352 138.666V117.332C352 111.441 347.225 106.666 341.334 106.666Z" })
  }
));
HospitalWideLight.displayName = "HospitalWideLight";
var HospitalWide_default = HospitalWideLight;
