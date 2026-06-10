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
var MessageSmile_exports = {};
__export(MessageSmile_exports, {
  default: () => MessageSmile_default
});
module.exports = __toCommonJS(MessageSmile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageSmileThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0.021H64C28.75 0.021 0 28.766 0 64.01V351.964C0 387.208 28.75 415.954 64 415.954H160V499.94C160 507.012 165.92 511.979 172.178 511.979C174.547 511.979 176.963 511.267 179.125 509.689L304 415.954H448C483.25 415.954 512 387.208 512 351.964V64.01C512 28.766 483.25 0.021 448 0.021ZM496 351.964C496 378.427 474.467 399.956 448 399.956H298.662L294.395 403.161L176 492.033V399.956H64C37.533 399.956 16 378.427 16 351.964V64.01C16 37.548 37.533 16.018 64 16.018H448C474.467 16.018 496 37.548 496 64.01V351.964ZM320 175.992C328.822 175.992 336 168.814 336 159.995S328.822 143.997 320 143.997S304 151.176 304 159.995S311.178 175.992 320 175.992ZM345.062 252.011C326.719 284.053 292.594 303.972 256 303.972S185.281 284.053 166.938 252.011C164.734 248.153 159.828 246.856 156.031 249.043C152.188 251.23 150.859 256.12 153.063 259.948C174.234 296.973 213.687 319.969 256 319.969S337.766 296.973 358.937 259.948C361.141 256.12 359.812 251.23 355.969 249.043S347.234 248.153 345.062 252.011ZM192 175.992C200.822 175.992 208 168.814 208 159.995S200.822 143.997 192 143.997C183.178 143.997 176 151.176 176 159.995S183.178 175.992 192 175.992Z" })
  }
));
MessageSmileThin.displayName = "MessageSmileThin";
var MessageSmile_default = MessageSmileThin;
