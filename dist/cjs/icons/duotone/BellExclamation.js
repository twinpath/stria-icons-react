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
var BellExclamation_exports = {};
__export(BellExclamation_exports, {
  default: () => BellExclamation_default
});
module.exports = __toCommonJS(BellExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BellExclamationDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.375 362.25C420.125 341.5 383.875 310.25 383.875 208C383.875 130.25 329.5 68.125 256 52.875V32C256 14.375 241.625 0 224 0C206.25 0 192 14.375 192 32V52.875C118.5 68.125 64.125 130.25 64.125 208C64.125 310.25 27.875 341.5 8.625 362.25C3 368.125 0 375.875 0 384C0.125 400.375 13 416 32.125 416H415.875C435 416 447.875 400.375 448 384C448 375.875 445 368.125 439.375 362.25ZM200 136C200 122.75 210.75 112 224 112S248 122.75 248 136V232C248 245.25 237.25 256 224 256S200 245.25 200 232V136ZM224 352C206.326 352 192 337.672 192 320S206.326 288 224 288S256 302.328 256 320S241.674 352 224 352Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 256C237.25 256 248 245.25 248 232V136C248 122.75 237.25 112 224 112S200 122.75 200 136V232C200 245.25 210.75 256 224 256ZM224 352C241.674 352 256 337.672 256 320S241.674 288 224 288S192 302.328 192 320S206.326 352 224 352ZM160 448C160 483.375 188.625 512 224 512S288 483.375 288 448H160Z" })
    ]
  }
));
BellExclamationDuotone.displayName = "BellExclamationDuotone";
var BellExclamation_default = BellExclamationDuotone;
