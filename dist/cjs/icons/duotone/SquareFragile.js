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
var SquareFragile_exports = {};
__export(SquareFragile_exports, {
  default: () => SquareFragile_default
});
module.exports = __toCommonJS(SquareFragile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareFragileDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM320 208C320 255.539 285.363 294.734 240 302.387V384H288C296.836 384 304 391.162 304 400C304 408.836 296.836 416 288 416H160C151.164 416 144 408.836 144 400C144 391.162 151.164 384 160 384H208V302.387C162.637 294.734 128 255.539 128 208V112C128 103.162 135.164 96 144 96H304C312.836 96 320 103.162 320 112V208Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 208C320 255.539 285.363 294.734 240 302.387V384H288C296.836 384 304 391.162 304 400C304 408.836 296.836 416 288 416H160C151.164 416 144 408.836 144 400C144 391.162 151.164 384 160 384H208V302.387C162.637 294.734 128 255.539 128 208V112C128 103.162 135.164 96 144 96H176L208 160L176 192L256 256L224 192L272 160L240 96H304C312.836 96 320 103.162 320 112V208Z" })
    ]
  }
));
SquareFragileDuotone.displayName = "SquareFragileDuotone";
var SquareFragile_default = SquareFragileDuotone;
