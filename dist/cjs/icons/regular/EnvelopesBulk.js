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
var EnvelopesBulk_exports = {};
__export(EnvelopesBulk_exports, {
  default: () => EnvelopesBulk_default
});
module.exports = __toCommonJS(EnvelopesBulk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopesBulkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 128H272C245.5 128 224 149.5 224 176V192H272V176H592V368H416V416H592C618.5 416 640 394.5 640 368V176C640 149.5 618.5 128 592 128ZM112 48H432V96H480V48C480 21.5 458.5 0 432 0H112C85.5 0 64 21.5 64 48V192H112V48ZM336 224H48C21.5 224 0 245.5 0 272V464C0 490.5 21.5 512 48 512H336C362.5 512 384 490.5 384 464V272C384 245.5 362.5 224 336 224ZM336 464H48V344C62.5 355 128 402.125 128 402.125C142.5 413.25 166.625 432 192 432S241.5 413.25 256 402.125C256 402.125 321.5 355 336 344V464ZM336 285.375C333.625 287.25 224.25 367.375 218.875 371C210.375 376.75 199.75 384 192 384C182.625 384 169.25 373.5 160.5 366.5C157.125 363.75 50.375 284 48 282.25V272H336V285.375ZM496 208V272H560V208H496Z" })
  }
));
EnvelopesBulkRegular.displayName = "EnvelopesBulkRegular";
var EnvelopesBulk_default = EnvelopesBulkRegular;
