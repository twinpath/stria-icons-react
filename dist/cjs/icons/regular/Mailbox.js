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
var Mailbox_exports = {};
__export(Mailbox_exports, {
  default: () => Mailbox_default
});
module.exports = __toCommonJS(Mailbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MailboxRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M184 192H104C90.746 192 80 202.744 80 216C80 229.254 90.746 240 104 240H184C197.254 240 208 229.254 208 216C208 202.744 197.254 192 184 192ZM432 64H144C64.5 64 0 128.5 0 208V416C0 433.625 14.375 448 32 448H544C561.625 448 576 433.625 576 416V208C576 128.5 511.5 64 432 64ZM240 400H48V208C48 155 91 112 144 112S240 155 240 208V400ZM528 400H288V208C288 171 273.625 137.5 250.625 112H432C485 112 528 155 528 208V400ZM464 192H360C346.801 192 336 202.799 336 216C336 229.199 346.801 240 360 240H416V272C416 280.836 423.164 288 432 288H464C472.836 288 480 280.836 480 272V208C480 199.162 472.836 192 464 192Z" })
  }
));
MailboxRegular.displayName = "MailboxRegular";
var Mailbox_default = MailboxRegular;
