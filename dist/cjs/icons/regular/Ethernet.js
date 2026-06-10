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
var Ethernet_exports = {};
__export(Ethernet_exports, {
  default: () => Ethernet_default
});
module.exports = __toCommonJS(Ethernet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EthernetRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 192H448V160C448 142.4 433.6 128 416 128H384V96C384 78.4 369.6 64 352 64H160C142.4 64 128 78.4 128 96V128H96C78.4 128 64 142.4 64 160V192H32C14.4 192 0 206.4 0 224V416C0 433.6 14.4 448 32 448H480C497.6 448 512 433.6 512 416V224C512 206.4 497.6 192 480 192ZM464 400H424V344C424 330.75 413.25 320 400 320S376 330.75 376 344V400H328V344C328 330.75 317.25 320 304 320S280 330.75 280 344V400H232V344C232 330.75 221.25 320 208 320S184 330.75 184 344V400H136V344C136 330.75 125.25 320 112 320S88 330.75 88 344V400H48V240H96C104.836 240 112 232.836 112 224V176H160C168.836 176 176 168.836 176 160V112H336V160C336 168.836 343.164 176 352 176H400V224C400 232.836 407.164 240 416 240H464V400Z" })
  }
));
EthernetRegular.displayName = "EthernetRegular";
var Ethernet_default = EthernetRegular;
