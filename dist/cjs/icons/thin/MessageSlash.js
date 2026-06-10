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
var MessageSlash_exports = {};
__export(MessageSlash_exports, {
  default: () => MessageSlash_default
});
module.exports = __toCommonJS(MessageSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.999 16.017C538.466 16.017 559.999 37.547 559.999 64.01V351.963C559.999 352.832 559.788 353.645 559.743 354.504L574.306 366.079C575.343 361.521 575.999 356.826 575.999 351.963V64.01C575.999 28.766 547.249 0.021 511.999 0.021H127.999C123.659 0.021 119.425 0.476 115.324 1.306L133.837 16.017H511.999ZM362.661 399.955L358.394 403.16L239.999 492.034V399.955H127.999C101.533 399.955 79.999 378.426 79.999 351.963V157.166L63.999 144.45V351.963C63.999 387.208 92.749 415.954 127.999 415.954H223.999V499.939C223.999 507.011 229.919 511.979 236.177 511.979C238.546 511.979 240.962 511.267 243.124 509.689L367.999 415.954H405.622L385.493 399.955H362.661ZM636.98 497.715L12.988 1.751C11.525 0.587 9.771 0.021 8.025 0.021C5.673 0.021 3.335 1.05 1.738 3.032C-1.012 6.5 -0.434 11.531 3.019 14.281L627.011 510.245C628.495 511.417 630.245 511.979 631.995 511.979C634.339 511.979 636.683 510.948 638.261 508.964C641.011 505.496 640.433 500.465 636.98 497.715Z" })
  }
));
MessageSlashThin.displayName = "MessageSlashThin";
var MessageSlash_default = MessageSlashThin;
