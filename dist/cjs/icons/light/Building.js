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
var Building_exports = {};
__export(Building_exports, {
  default: () => Building_default
});
module.exports = __toCommonJS(Building_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BuildingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 296V248C176 234.744 165.254 224 152 224H104C90.746 224 80 234.744 80 248V296C80 309.254 90.746 320 104 320H152C165.254 320 176 309.254 176 296ZM144 288H112V256H144V288ZM104 192H152C165.254 192 176 181.254 176 168V120C176 106.744 165.254 96 152 96H104C90.746 96 80 106.744 80 120V168C80 181.254 90.746 192 104 192ZM112 128H144V160H112V128ZM192 384C156.717 384.051 128 412.475 128 447.861V495.953C128 504.777 135.199 512 144 512S160 504.777 160 495.953V447.861C160 430.258 174.451 416.604 192 416.561C209.549 416.604 224 430.258 224 447.861V495.953C224 504.777 231.199 512 240 512S256 504.777 256 495.953V447.861C256 412.475 227.283 384.051 192 384ZM280 96H232C218.746 96 208 106.744 208 120V168C208 181.254 218.746 192 232 192H280C293.254 192 304 181.254 304 168V120C304 106.744 293.254 96 280 96ZM272 160H240V128H272V160ZM320 0H64C28.654 0 0 28.652 0 64V496C0 504.836 7.164 512 16 512S32 504.836 32 496V64C32 46.326 46.326 32 64 32H320C337.674 32 352 46.326 352 64V496C352 504.836 359.164 512 368 512S384 504.836 384 496V64C384 28.652 355.346 0 320 0ZM280 224H232C218.746 224 208 234.744 208 248V296C208 309.254 218.746 320 232 320H280C293.254 320 304 309.254 304 296V248C304 234.744 293.254 224 280 224ZM272 288H240V256H272V288Z" })
  }
));
BuildingLight.displayName = "BuildingLight";
var Building_default = BuildingLight;
