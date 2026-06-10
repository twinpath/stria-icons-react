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
var ListTree_exports = {};
__export(ListTree_exports, {
  default: () => ListTree_default
});
module.exports = __toCommonJS(ListTree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListTreeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 112H496C504.797 112 512 104.797 512 96S504.797 80 496 80H176C167.203 80 160 87.203 160 96S167.203 112 176 112ZM496 240H304C295.203 240 288 247.203 288 256S295.203 272 304 272H496C504.797 272 512 264.797 512 256S504.797 240 496 240ZM192 208H160C142.344 208 128 222.344 128 240H64V144C81.656 144 96 129.656 96 112V80C96 62.344 81.656 48 64 48H32C14.344 48 0 62.344 0 80V112C0 129.656 14.344 144 32 144V384C32 410.469 53.531 432 80 432H128C128 449.656 142.344 464 160 464H192C209.656 464 224 449.656 224 432V400C224 382.344 209.656 368 192 368H160C142.344 368 128 382.344 128 400H80C71.172 400 64 392.812 64 384V272H128C128 289.656 142.344 304 160 304H192C209.656 304 224 289.656 224 272V240C224 222.344 209.656 208 192 208ZM160 400H192V432H160V400ZM32 112V80H64V112H32ZM192 272H160V240H192V272ZM496 400H304C295.203 400 288 407.203 288 416S295.203 432 304 432H496C504.797 432 512 424.797 512 416S504.797 400 496 400Z" })
  }
));
ListTreeLight.displayName = "ListTreeLight";
var ListTree_default = ListTreeLight;
