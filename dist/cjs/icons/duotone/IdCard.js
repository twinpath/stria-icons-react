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
var IdCard_exports = {};
__export(IdCard_exports, {
  default: () => IdCard_default
});
module.exports = __toCommonJS(IdCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IdCardDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 128V432C0 458.508 21.49 480 48 480H528C554.51 480 576 458.508 576 432V128H0ZM176 192C211.346 192 240 220.656 240 256S211.346 320 176 320S112 291.344 112 256S140.654 192 176 192ZM272 416H80C71.164 416 64 408.836 64 400C64 373.492 85.49 352 112 352H240C266.51 352 288 373.492 288 400C288 408.836 280.836 416 272 416ZM496 352H368C359.164 352 352 344.836 352 336S359.164 320 368 320H496C504.836 320 512 327.164 512 336S504.836 352 496 352ZM496 288H368C359.164 288 352 280.836 352 272S359.164 256 368 256H496C504.836 256 512 263.164 512 272S504.836 288 496 288ZM496 224H368C359.164 224 352 216.836 352 208S359.164 192 368 192H496C504.836 192 512 199.164 512 208S504.836 224 496 224Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 352H112C85.49 352 64 373.492 64 400C64 408.836 71.164 416 80 416H272C280.836 416 288 408.836 288 400C288 373.492 266.51 352 240 352ZM240 256C240 220.656 211.346 192 176 192S112 220.656 112 256S140.654 320 176 320S240 291.344 240 256ZM528 32H48C21.49 32 0 53.492 0 80V128H576V80C576 53.492 554.51 32 528 32Z" })
    ]
  }
));
IdCardDuotone.displayName = "IdCardDuotone";
var IdCard_default = IdCardDuotone;
