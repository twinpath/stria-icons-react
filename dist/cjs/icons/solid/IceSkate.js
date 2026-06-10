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
const IceSkateSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 384H480C497.674 384 512 369.672 512 352V315C512 270.875 482 232.625 439.25 221.875L320 192H272C263.199 192 256 184.797 256 176C256 167.199 263.199 160 272 160H320V128H272C263.199 128 256 120.797 256 112C256 103.199 263.199 96 272 96H320V16C320 7.199 312.801 0 304 0H272C263.199 0 256 7.199 256 16V32L78.375 82.75C50.875 90.625 32 115.75 32 144.25V352C32 369.672 46.326 384 64 384ZM560 416H544C535.199 416 528 423.199 528 432V440C528 453.254 517.254 464 504 464H432V416H384V464H144V416H96V464H32C14.4 464 0 478.398 0 496C0 504.797 7.199 512 16 512H512C547.199 512 576 483.199 576 448V432C576 423.199 568.801 416 560 416Z" })
  }
));
IceSkateSolid.displayName = "IceSkateSolid";
var IceSkate_default = IceSkateSolid;
