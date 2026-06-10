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
var Square6_exports = {};
__export(Square6_exports, {
  default: () => Square6_default
});
module.exports = __toCommonJS(Square6_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Square6Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 240C202.938 240 184 254.094 177.969 274.281C176.656 278.688 176 283.281 176 288C176 314.469 197.531 336 224 336S272 314.469 272 288S250.469 240 224 240ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM224 384C171.062 384 128 340.938 128 288C128 246.699 155.549 214.711 168.281 203.594L248.219 133.906C252.781 129.938 258.406 128 264 128C270.688 128 277.344 130.781 282.094 136.219C290.812 146.219 289.75 161.375 279.781 170.094L250.021 196.037C290.268 207.467 320 244.141 320 288C320 340.938 276.938 384 224 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 384C276.938 384 320 340.938 320 288C320 244.141 290.268 207.467 250.021 196.037L279.781 170.094C289.75 161.375 290.813 146.219 282.094 136.219C277.344 130.781 270.688 128 264 128C258.406 128 252.781 129.938 248.219 133.906L168.281 203.594C155.549 214.711 128 246.699 128 288C128 340.938 171.062 384 224 384ZM177.969 274.281C184 254.094 202.938 240 224 240C250.469 240 272 261.531 272 288S250.469 336 224 336S176 314.469 176 288C176 283.281 176.656 278.688 177.969 274.281Z" })
    ]
  }
));
Square6Duotone.displayName = "Square6Duotone";
var Square6_default = Square6Duotone;
