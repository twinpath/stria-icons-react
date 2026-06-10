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
const MailboxSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 64H244.875C290.25 95.875 320 148.5 320 208V448H544C561.625 448 576 433.625 576 416V208C576 128.5 511.5 64 432 64ZM512 272C512 280.836 504.838 288 496 288H464C455.164 288 448 280.836 448 272V224H400C391.201 224 384 216.801 384 208S391.201 192 400 192H496C504.838 192 512 199.164 512 208V272ZM144 64C64.5 64 0 128.5 0 208V416C0 433.625 14.375 448 32 448H288V208C288 128.5 223.5 64 144 64ZM208 224H80C71.164 224 64 216.836 64 208S71.164 192 80 192H208C216.838 192 224 199.164 224 208S216.838 224 208 224Z" })
  }
));
MailboxSolid.displayName = "MailboxSolid";
var Mailbox_default = MailboxSolid;
