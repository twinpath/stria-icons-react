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
var IceSkate_exports = {};
__export(IceSkate_exports, {
  default: () => IceSkate_default
});
module.exports = __toCommonJS(IceSkate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IceSkateDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 416H544C535.199 416 528 423.199 528 432V440C528 453.254 517.254 464 504 464H432V384H384V464H144V384H96V464H32C14.4 464 0 478.398 0 496C0 504.797 7.199 512 16 512H512C547.199 512 576 483.199 576 448V432C576 423.199 568.801 416 560 416ZM272 128H320V96H272C263.164 96 256 103.164 256 112S263.164 128 272 128ZM272 192H320V160H272C263.164 160 256 167.164 256 176S263.164 192 272 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 315V352C512 369.672 497.674 384 480 384H64C46.326 384 32 369.672 32 352V144.25C32 115.75 50.875 90.625 78.375 82.75L256 32V16C256 7.199 263.199 0 272 0H304C312.801 0 320 7.199 320 16V96H272C263.199 96 256 103.199 256 112C256 120.797 263.199 128 272 128H320V160H272C263.199 160 256 167.199 256 176C256 184.797 263.199 192 272 192H320L439.25 221.875C482 232.625 512 270.875 512 315Z" })
    ]
  }
));
IceSkateDuotone.displayName = "IceSkateDuotone";
var IceSkate_default = IceSkateDuotone;
