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
var FileSignature_exports = {};
__export(FileSignature_exports, {
  default: () => FileSignature_default
});
module.exports = __toCommonJS(FileSignature_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileSignatureDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V388.812L361.693 411.273C358.689 414.297 354.604 416 350.34 416H256V415.898C239.932 415.613 225.385 406.641 218.125 392.125C215.25 386.25 210.125 385.625 208 385.625S200.75 386.25 197.999 391.75L190.25 407.125C187.625 412.625 181.999 416 176 416H174.875C168.375 415.5 162.875 411.25 160.875 405L144 354.625L133.375 386.5C127.502 404.117 111.016 416 92.445 416H80C71.125 416 64 408.875 64 400S71.125 384 80 384H92.375C97.25 384 101.5 380.875 103 376.375L121.25 321.75C124.5 311.875 133.625 305.25 144 305.25S163.5 311.875 166.75 321.75L180.625 363.375C200.375 347.125 234.75 353.625 246.625 377.5C248.496 381.242 252.16 383.477 256 383.773L288 383.828V353.66C288 349.398 289.701 345.312 292.727 342.305L384 251.664V128H256V0ZM568.5 167.375L536.625 135.5C526.75 125.5 510.625 125.5 500.625 135.5L473.375 162.75L541.25 230.625L568.5 203.375C578.5 193.375 578.5 177.25 568.5 167.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M473.375 162.75L292.727 342.305C289.701 345.312 288 349.398 288 353.66V416H350.34C354.604 416 358.689 414.297 361.693 411.273L541.25 230.625L473.375 162.75ZM256 0V128H384L256 0Z" })
    ]
  }
));
FileSignatureDuotone.displayName = "FileSignatureDuotone";
var FileSignature_default = FileSignatureDuotone;
