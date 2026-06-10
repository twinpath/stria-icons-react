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
var TrashCanArrowUp_exports = {};
__export(TrashCanArrowUp_exports, {
  default: () => TrashCanArrowUp_default
});
module.exports = __toCommonJS(TrashCanArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanArrowUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 96V464C32 490.5 53.5 512 80 512H368C394.5 512 416 490.5 416 464V96H32ZM328.969 288.969C319.594 298.344 304.406 298.344 295.031 288.969L248 241.938V392C248 405.25 237.25 416 224 416S200 405.25 200 392V241.938L152.969 288.969C143.594 298.344 128.406 298.344 119.031 288.969S109.656 264.406 119.031 255.031L207.031 167.031C209.596 164.467 215.506 160 224 160S238.404 164.467 240.969 167.031L328.969 255.031C338.344 264.406 338.344 279.594 328.969 288.969Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240.969 167.031C238.404 164.467 232.494 160 224 160S209.596 164.467 207.031 167.031L119.031 255.031C109.656 264.406 109.656 279.594 119.031 288.969S143.594 298.344 152.969 288.969L200 241.938V392C200 405.25 210.75 416 224 416S248 405.25 248 392V241.938L295.031 288.969C304.406 298.344 319.594 298.344 328.969 288.969S338.344 264.406 328.969 255.031L240.969 167.031ZM432 32H312L302.625 13.25C298.5 5.125 290.25 0 281.125 0H166.75C157.75 0 149.375 5.125 145.375 13.25L136 32H16C7.125 32 0 39.125 0 48V80C0 88.875 7.125 96 16 96H432C440.875 96 448 88.875 448 80V48C448 39.125 440.875 32 432 32Z" })
    ]
  }
));
TrashCanArrowUpDuotone.displayName = "TrashCanArrowUpDuotone";
var TrashCanArrowUp_default = TrashCanArrowUpDuotone;
