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
const MailboxLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 192H112C103.199 192 96 199.199 96 208C96 216.799 103.199 224 112 224H176C184.801 224 192 216.799 192 208C192 199.199 184.801 192 176 192ZM496 192H336C327.199 192 320 199.199 320 208C320 216.799 327.199 224 336 224H416V304C416 312.836 423.164 320 432 320H496C504.836 320 512 312.836 512 304V208C512 199.162 504.836 192 496 192ZM480 288H448V224H480V288ZM432 64H144C64.471 64 0 128.471 0 208V384C0 419.199 28.801 448 64 448H512C547.199 448 576 419.199 576 384V208C576 128.471 511.529 64 432 64ZM256 416H64C46.326 416 32 401.672 32 384V214.305C32 153.652 77.439 99.307 138.01 96.156C202.607 92.795 256 144.139 256 208V416ZM544 384C544 401.672 529.674 416 512 416H288V208C288 162.5 266.5 122.375 233.5 96H432C493.875 96.125 543.875 146.125 544 208V384Z" })
  }
));
MailboxLight.displayName = "MailboxLight";
var Mailbox_default = MailboxLight;
