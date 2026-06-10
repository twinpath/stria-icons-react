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
var ArrowRightToBracket_exports = {};
__export(ArrowRightToBracket_exports, {
  default: () => ArrowRightToBracket_default
});
module.exports = __toCommonJS(ArrowRightToBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightToBracketDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 32H352C334.326 32 320 46.328 320 64S334.326 96 352 96H416C433.674 96 448 110.328 448 128V384C448 401.672 433.674 416 416 416H352C334.326 416 320 430.328 320 448S334.326 480 352 480H416C469.02 480 512 437.02 512 384V128C512 74.98 469.02 32 416 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M342.625 278.625L214.625 406.625C202.125 419.125 181.875 419.125 169.375 406.625S156.875 373.875 169.375 361.375L242.75 288H32C14.312 288 0 273.688 0 256S14.312 224 32 224H242.75L169.375 150.625C156.875 138.125 156.875 117.875 169.375 105.375C181.867 92.883 202.117 92.867 214.625 105.375L342.625 233.375C355.125 245.875 355.125 266.125 342.625 278.625Z" })
    ]
  }
));
ArrowRightToBracketDuotone.displayName = "ArrowRightToBracketDuotone";
var ArrowRightToBracket_default = ArrowRightToBracketDuotone;
