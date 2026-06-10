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
var MessageCheck_exports = {};
__export(MessageCheck_exports, {
  default: () => MessageCheck_default
});
module.exports = __toCommonJS(MessageCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageCheckDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 509.709 171.25 515.459 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM347.719 167.609L251.719 279.609C247.375 284.672 241.094 287.703 234.406 287.953C234.125 287.984 233.812 287.984 233.5 287.984C227.156 287.984 221.031 285.453 216.531 280.953L168.531 232.953C159.156 223.578 159.156 208.391 168.531 199.016S193.094 189.641 202.469 199.016L232.156 228.703L311.281 136.359C319.938 126.297 335.094 125.172 345.125 133.766C355.188 142.391 356.344 157.547 347.719 167.609Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M348.219 167.609L252.219 279.609C247.875 284.672 241.594 287.703 234.906 287.953C234.625 287.984 234.312 287.984 234 287.984C227.656 287.984 221.531 285.453 217.031 280.953L169.031 232.953C159.656 223.578 159.656 208.391 169.031 199.016S193.594 189.641 202.969 199.016L232.656 228.703L311.781 136.359C320.438 126.297 335.594 125.172 345.625 133.766C355.688 142.391 356.844 157.547 348.219 167.609Z" })
    ]
  }
));
MessageCheckDuotone.displayName = "MessageCheckDuotone";
var MessageCheck_default = MessageCheckDuotone;
