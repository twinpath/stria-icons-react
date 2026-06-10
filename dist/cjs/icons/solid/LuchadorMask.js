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
var LuchadorMask_exports = {};
__export(LuchadorMask_exports, {
  default: () => LuchadorMask_default
});
module.exports = __toCommonJS(LuchadorMask_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LuchadorMaskSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M262.75 320C255.875 305.25 244.25 286.625 224 266.75C203.75 286.625 192.125 305.25 185.25 320H262.75ZM128 384C128 401.625 142.375 416 160 416H288C305.625 416 320 401.625 320 384S305.625 352 288 352H160C142.375 352 128 366.375 128 384ZM192 245.25C192 215.875 170.5 192 144 192H96V202.75C96 232.125 117.5 256 144 256H192V245.25ZM256 245.25V256C256.312 256.375 256.188 256.188 256.047 256H304C330.5 256 352 232.125 352 202.75V192H304C277.5 192 256 215.875 256 245.25ZM224 0C100.289 0 0 100.289 0 224V320C0 426.039 85.961 512 192 512H256C362.039 512 448 426.039 448 320V224C448 100.289 347.711 0 224 0ZM384 202.75C384 249.75 348.25 288 304 288H281.5C288.875 300.25 294 311.375 297.25 320.875C328.25 325.5 351.875 351.875 351.875 384C351.875 419.5 322.5 448 287 448H160.875C125.375 448 96 419.5 96 384C96 351.875 119.75 325.5 150.625 320.875C153.875 311.5 159 300.25 166.375 288H144C99.75 288 64 249.75 64 202.75V172C64 165.375 69.375 160 76 160H144C181.223 160 211.828 187.172 220.703 224H227.18C236.18 187.172 266.898 160 304 160H372C378.625 160 384 165.375 384 172V202.75Z" })
  }
));
LuchadorMaskSolid.displayName = "LuchadorMaskSolid";
var LuchadorMask_default = LuchadorMaskSolid;
