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
var NoteMedical_exports = {};
__export(NoteMedical_exports, {
  default: () => NoteMedical_default
});
module.exports = __toCommonJS(NoteMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NoteMedicalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H290.746C299.232 480 307.371 476.629 313.373 470.627L438.627 345.373C444.629 339.371 448 331.232 448 322.746V96C448 60.654 419.348 32 384 32ZM304 457.373V360C304 346.766 314.781 336 328 336H425.373L304 457.373ZM432 320H328C305.938 320 288 337.938 288 360V464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V320ZM320 176H272V128C272 119.164 264.838 112 256 112H192C183.164 112 176 119.164 176 128V176H128C119.164 176 112 183.164 112 192V256C112 264.836 119.164 272 128 272H176V320C176 328.836 183.164 336 192 336H256C264.838 336 272 328.836 272 320V272H320C328.838 272 336 264.836 336 256V192C336 183.164 328.838 176 320 176ZM320 256H256V320H192V256H128V192H192V128H256V192H320V256Z" })
  }
));
NoteMedicalThin.displayName = "NoteMedicalThin";
var NoteMedical_default = NoteMedicalThin;
