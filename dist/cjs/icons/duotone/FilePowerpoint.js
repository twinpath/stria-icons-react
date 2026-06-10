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
var FilePowerpoint_exports = {};
__export(FilePowerpoint_exports, {
  default: () => FilePowerpoint_default
});
module.exports = __toCommonJS(FilePowerpoint_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilePowerpointDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M204 288H160V344H204C219.438 344 232 331.438 232 316S219.438 288 204 288ZM256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM204 392H160V432C160 440.836 152.836 448 144 448H128C119.164 448 112 440.836 112 432V256C112 247.164 119.164 240 128 240H199.512C239.258 240 275.561 268.516 279.594 308.055C284.23 353.512 248.525 392 204 392Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M199.512 240H128C119.164 240 112 247.164 112 256V432C112 440.836 119.164 448 128 448H144C152.836 448 160 440.836 160 432V392H204C248.525 392 284.23 353.512 279.594 308.055C275.561 268.516 239.258 240 199.512 240ZM204 344H160V288H204C219.438 288 232 300.562 232 316S219.438 344 204 344ZM256 0V128H384L256 0Z" })
    ]
  }
));
FilePowerpointDuotone.displayName = "FilePowerpointDuotone";
var FilePowerpoint_default = FilePowerpointDuotone;
