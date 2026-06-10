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
var AddressCard_exports = {};
__export(AddressCard_exports, {
  default: () => AddressCard_default
});
module.exports = __toCommonJS(AddressCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AddressCardSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.654 547.346 32 512 32ZM176 128C211.346 128 240 156.654 240 192S211.346 256 176 256S112 227.346 112 192S140.654 128 176 128ZM272 384H80C71.164 384 64 376.836 64 368C64 323.816 99.816 288 144 288H208C252.184 288 288 323.816 288 368C288 376.836 280.836 384 272 384ZM496 320H368C359.164 320 352 312.836 352 304S359.164 288 368 288H496C504.836 288 512 295.164 512 304S504.836 320 496 320ZM496 256H368C359.164 256 352 248.836 352 240S359.164 224 368 224H496C504.836 224 512 231.164 512 240S504.836 256 496 256ZM496 192H368C359.164 192 352 184.836 352 176S359.164 160 368 160H496C504.836 160 512 167.164 512 176S504.836 192 496 192Z" })
  }
));
AddressCardSolid.displayName = "AddressCardSolid";
var AddressCard_default = AddressCardSolid;
