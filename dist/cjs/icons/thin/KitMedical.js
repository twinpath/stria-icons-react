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
var KitMedical_exports = {};
__export(KitMedical_exports, {
  default: () => KitMedical_default
});
module.exports = __toCommonJS(KitMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KitMedicalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 296H248V344C248 352.828 255.172 360 264 360H312C320.828 360 328 352.828 328 344V296H376C384.828 296 392 288.828 392 280V232C392 223.172 384.828 216 376 216H328V168C328 159.172 320.828 152 312 152H264C255.172 152 248 159.172 248 168V216H200C191.172 216 184 223.172 184 232V280C184 288.828 191.172 296 200 296ZM200 232H264V168H312V232H376V280H312V344H264V280H200V232ZM512 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H512C547.348 480 576 451.344 576 416V96C576 60.652 547.348 32 512 32ZM96 464H64C37.533 464 16 442.469 16 416V96C16 69.531 37.533 48 64 48H96V464ZM464 464H112V48H464V464ZM560 416C560 442.469 538.467 464 512 464H480V48H512C538.467 48 560 69.531 560 96V416Z" })
  }
));
KitMedicalThin.displayName = "KitMedicalThin";
var KitMedical_default = KitMedicalThin;
