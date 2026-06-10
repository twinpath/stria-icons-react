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
var Speaker_exports = {};
__export(Speaker_exports, {
  default: () => Speaker_default
});
module.exports = __toCommonJS(Speaker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpeakerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H320C355.346 512 384 483.346 384 448V64C384 28.652 355.346 0 320 0ZM336 448C336 456.822 328.822 464 320 464H64C55.178 464 48 456.822 48 448V64C48 55.178 55.178 48 64 48H320C328.822 48 336 55.178 336 64V448ZM192 160C214.092 160 232 142.092 232 120S214.092 80 192 80S152 97.908 152 120S169.908 160 192 160ZM192 224C134.562 224 88 270.562 88 328S134.562 432 192 432S296 385.438 296 328S249.438 224 192 224ZM192 384C161.121 384 136 358.877 136 328C136 297.121 161.121 272 192 272S248 297.121 248 328C248 358.877 222.879 384 192 384Z" })
  }
));
SpeakerRegular.displayName = "SpeakerRegular";
var Speaker_default = SpeakerRegular;
