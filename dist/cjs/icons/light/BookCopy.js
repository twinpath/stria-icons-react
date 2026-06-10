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
var BookCopy_exports = {};
__export(BookCopy_exports, {
  default: () => BookCopy_default
});
module.exports = __toCommonJS(BookCopy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookCopyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 272V48C576 21.49 554.508 0 528 0H272C227.816 0 192 35.816 192 80V352C192 387.346 220.656 416 256 416H560C568.844 416 576 408.844 576 400S568.844 384 560 384H544V317.053C562.586 310.426 576 292.832 576 272ZM512 384H256C238.359 384 224 369.641 224 352S238.359 320 256 320H512V384ZM528 288H256C244.289 288 233.453 291.389 224 296.9V80C224 53.49 245.492 32 272 32H528C536.836 32 544 39.164 544 48V272C544 280.836 536.836 288 528 288ZM368 480H352V464C352 455.162 344.836 448 336 448S320 455.162 320 464V480H65.812C49.867 480 35.047 469.148 32.445 453.414C29.141 433.395 44.586 416 64 416H144C152.836 416 160 408.836 160 400C160 391.162 152.836 384 144 384H64C52.289 384 41.453 387.389 32 392.9V176C32 149.49 53.492 128 80 128H144C152.836 128 160 120.836 160 112C160 103.162 152.836 96 144 96H80C35.816 96 0 131.816 0 176V448C0 483.346 28.656 512 64 512H368C376.844 512 384 504.844 384 496S376.844 480 368 480Z" })
  }
));
BookCopyLight.displayName = "BookCopyLight";
var BookCopy_default = BookCopyLight;
