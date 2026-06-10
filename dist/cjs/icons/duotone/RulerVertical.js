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
var RulerVertical_exports = {};
__export(RulerVertical_exports, {
  default: () => RulerVertical_default
});
module.exports = __toCommonJS(RulerVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerVerticalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 112C160 120.801 167.201 128 176 128H256V192H176C167.201 192 160 199.199 160 208S167.201 224 176 224H256V288H176C167.201 288 160 295.199 160 304S167.201 320 176 320H256V384H176C167.201 384 160 391.199 160 400S167.201 416 176 416H256V480C256 497.6 241.6 512 224 512H32C14.4 512 0 497.6 0 480V32C0 14.4 14.4 0 32 0H224C241.6 0 256 14.4 256 32V96H176C167.201 96 160 103.199 160 112Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 96C167.201 96 160 103.199 160 112S167.201 128 176 128H256V96H176ZM160 400C160 408.801 167.201 416 176 416H256V384H176C167.201 384 160 391.199 160 400ZM160 304C160 312.801 167.201 320 176 320H256V288H176C167.201 288 160 295.199 160 304ZM160 208C160 216.801 167.201 224 176 224H256V192H176C167.201 192 160 199.199 160 208Z" })
    ]
  }
));
RulerVerticalDuotone.displayName = "RulerVerticalDuotone";
var RulerVertical_default = RulerVerticalDuotone;
