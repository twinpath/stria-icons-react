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
var MessagePen_exports = {};
__export(MessagePen_exports, {
  default: () => MessagePen_default
});
module.exports = __toCommonJS(MessagePen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessagePenDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.995V351.972C0 387.219 28.75 415.967 64 415.967H160V499.96C160 509.709 171.25 515.459 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.972V63.995C512 28.748 483.25 0 448 0ZM215.076 304.938C213.121 306.895 210.633 308.223 207.924 308.766L152.375 319.875C147.479 320.855 143.16 316.535 144.139 311.641L155.246 256.103C155.789 253.392 157.121 250.9 159.076 248.947L256.686 151.341L312.691 207.345L215.076 304.938ZM359.797 160.247L335.316 184.722L279.311 128.718L303.791 104.24C314.725 93.307 332.453 93.307 343.387 104.24L359.799 120.652C370.734 131.585 370.732 149.314 359.797 160.247Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M215.077 304.938C213.122 306.895 210.634 308.223 207.925 308.766L152.376 319.875C147.479 320.855 143.161 316.535 144.14 311.641L155.247 256.103C155.79 253.392 157.122 250.9 159.077 248.947L256.686 151.341L312.692 207.345L215.077 304.938ZM359.798 160.247L335.317 184.722L279.311 128.718L303.792 104.24C314.725 93.307 332.454 93.307 343.388 104.24L359.8 120.652C370.735 131.585 370.733 149.314 359.798 160.247Z" })
    ]
  }
));
MessagePenDuotone.displayName = "MessagePenDuotone";
var MessagePen_default = MessagePenDuotone;
