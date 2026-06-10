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
var Square9_exports = {};
__export(Square9_exports, {
  default: () => Square9_default
});
module.exports = __toCommonJS(Square9_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Square9Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM279.719 308.406L199.781 378.094C195.219 382.062 189.594 384 184 384C177.312 384 170.656 381.219 165.906 375.781C157.188 365.781 158.25 350.625 168.219 341.906L197.979 315.963C157.732 304.533 128 267.859 128 224C128 171.062 171.062 128 224 128S320 171.062 320 224C320 265.301 292.451 297.289 279.719 308.406ZM224 176C197.531 176 176 197.531 176 224S197.531 272 224 272C245.062 272 264 257.906 270.031 237.719C271.344 233.312 272 228.719 272 224C272 197.531 250.469 176 224 176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 128C171.062 128 128 171.062 128 224C128 267.859 157.732 304.533 197.979 315.963L168.219 341.906C158.25 350.625 157.187 365.781 165.906 375.781C170.656 381.219 177.312 384 184 384C189.594 384 195.219 382.062 199.781 378.094L279.719 308.406C292.451 297.289 320 265.301 320 224C320 171.062 276.938 128 224 128ZM270.031 237.719C264 257.906 245.062 272 224 272C197.531 272 176 250.469 176 224S197.531 176 224 176S272 197.531 272 224C272 228.719 271.344 233.312 270.031 237.719Z" })
    ]
  }
));
Square9Duotone.displayName = "Square9Duotone";
var Square9_default = Square9Duotone;
