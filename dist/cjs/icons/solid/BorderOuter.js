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
var BorderOuter_exports = {};
__export(BorderOuter_exports, {
  default: () => BorderOuter_default
});
module.exports = __toCommonJS(BorderOuter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BorderOuterSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 288H240C248.875 288 256 280.875 256 272V240C256 231.125 248.875 224 240 224H208C199.125 224 192 231.125 192 240V272C192 280.875 199.125 288 208 288ZM304 288H336C344.875 288 352 280.875 352 272V240C352 231.125 344.875 224 336 224H304C295.125 224 288 231.125 288 240V272C288 280.875 295.125 288 304 288ZM112 288H144C152.875 288 160 280.875 160 272V240C160 231.125 152.875 224 144 224H112C103.125 224 96 231.125 96 240V272C96 280.875 103.125 288 112 288ZM208 384H240C248.875 384 256 376.875 256 368V336C256 327.125 248.875 320 240 320H208C199.125 320 192 327.125 192 336V368C192 376.875 199.125 384 208 384ZM208 192H240C248.875 192 256 184.875 256 176V144C256 135.125 248.875 128 240 128H208C199.125 128 192 135.125 192 144V176C192 184.875 199.125 192 208 192ZM384 32H64C28.8 32 0 60.8 0 96V416C0 451.2 28.8 480 64 480H384C419.2 480 448 451.2 448 416V96C448 60.8 419.2 32 384 32ZM384 416H64V96H384V416Z" })
  }
));
BorderOuterSolid.displayName = "BorderOuterSolid";
var BorderOuter_default = BorderOuterSolid;
