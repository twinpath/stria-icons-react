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
var BorderBottomRight_exports = {};
__export(BorderBottomRight_exports, {
  default: () => BorderBottomRight_default
});
module.exports = __toCommonJS(BorderBottomRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BorderBottomRightSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 96H240C248.875 96 256 88.875 256 80V48C256 39.125 248.875 32 240 32H208C199.125 32 192 39.125 192 48V80C192 88.875 199.125 96 208 96ZM304 96H336C344.875 96 352 88.875 352 80V48C352 39.125 344.875 32 336 32H304C295.125 32 288 39.125 288 48V80C288 88.875 295.125 96 304 96ZM112 96H144C152.875 96 160 88.875 160 80V48C160 39.125 152.875 32 144 32H112C103.125 32 96 39.125 96 48V80C96 88.875 103.125 96 112 96ZM16 288H48C56.875 288 64 280.875 64 272V240C64 231.125 56.875 224 48 224H16C7.125 224 0 231.125 0 240V272C0 280.875 7.125 288 16 288ZM16 192H48C56.875 192 64 184.875 64 176V144C64 135.125 56.875 128 48 128H16C7.125 128 0 135.125 0 144V176C0 184.875 7.125 192 16 192ZM16 96H48C56.875 96 64 88.875 64 80V48C64 39.125 56.875 32 48 32H16C7.125 32 0 39.125 0 48V80C0 88.875 7.125 96 16 96ZM16 384H48C56.875 384 64 376.875 64 368V336C64 327.125 56.875 320 48 320H16C7.125 320 0 327.125 0 336V368C0 376.875 7.125 384 16 384ZM416 32H416C398.327 32 384 46.327 384 64V416H32C14.327 416 0 430.327 0 448V448C0 465.673 14.327 480 32 480H384C419.2 480 448 451.2 448 416V64C448 46.327 433.673 32 416 32Z" })
  }
));
BorderBottomRightSolid.displayName = "BorderBottomRightSolid";
var BorderBottomRight_default = BorderBottomRightSolid;
