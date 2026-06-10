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
var CandleHolder_exports = {};
__export(CandleHolder_exports, {
  default: () => CandleHolder_default
});
module.exports = __toCommonJS(CandleHolder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CandleHolderThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 191.998C202.406 191.998 232 158.841 232 111.356C232 82.278 206.5 40.434 165.469 2.152C162.344 -0.723 157.625 -0.707 154.562 2.137C114.125 39.746 88 82.622 88 111.356C88 158.841 117.594 191.998 160 191.998ZM160 19.059C193.719 52.043 216 88.528 216 111.356C216 149.419 192.969 175.997 160 175.997S104 149.419 104 111.356C104 88.45 126.281 51.95 160 19.059ZM384 383.999C348.654 383.999 320 412.654 320 448C320 467.224 328.654 484.269 342.074 496H256V263.998C256 241.935 238.062 223.998 216 223.998H104C81.938 223.998 64 241.935 64 263.998V496H8C3.594 496 0 499.578 0 504S3.594 512 8 512C8 512 381.797 512 384 512C419.346 512 448 483.345 448 448S419.346 383.999 384 383.999ZM240 496H80V263.998C80 250.764 90.781 239.998 104 239.998H128V287.998C128 292.42 131.594 295.998 136 295.998S144 292.42 144 287.998V239.998H216C229.219 239.998 240 250.764 240 263.998V496ZM384 496C357.533 496 336 474.467 336 448S357.533 399.999 384 399.999S432 421.533 432 448S410.467 496 384 496Z" })
  }
));
CandleHolderThin.displayName = "CandleHolderThin";
var CandleHolder_default = CandleHolderThin;
