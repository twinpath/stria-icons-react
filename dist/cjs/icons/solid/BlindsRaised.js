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
var BlindsRaised_exports = {};
__export(BlindsRaised_exports, {
  default: () => BlindsRaised_default
});
module.exports = __toCommonJS(BlindsRaised_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlindsRaisedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 159.922L0 223.891H96V159.922H16ZM512 47.977V15.992C512 7.122 504.875 0 496 0H16C7.125 0 0 7.122 0 15.992V47.977C0 56.847 7.125 63.969 16 63.969L0 127.938H96V63.969H128V127.938H512L496 63.969C504.875 63.969 512 56.847 512 47.977ZM496 159.922H128V223.891H512L496 159.922ZM96 223.891V418.796C73.999 426.542 60.75 449.031 64.75 472.02C68.625 495.133 88.625 512 112 512S155.375 495.133 159.25 472.02C163.25 449.031 149.999 426.542 128 418.796V223.891H96Z" })
  }
));
BlindsRaisedSolid.displayName = "BlindsRaisedSolid";
var BlindsRaised_default = BlindsRaisedSolid;
