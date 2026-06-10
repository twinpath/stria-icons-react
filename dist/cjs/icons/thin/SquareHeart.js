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
var SquareHeart_exports = {};
__export(SquareHeart_exports, {
  default: () => SquareHeart_default
});
module.exports = __toCommonJS(SquareHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareHeartThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.652 32 0 60.656 0 96V416C0 451.344 28.652 480 64 480H384C419.344 480 448 451.344 448 416V96C448 60.656 419.344 32 384 32ZM432 416C432 442.469 410.469 464 384 464H64C37.531 464 16 442.469 16 416V96C16 69.531 37.531 48 64 48H384C410.469 48 432 69.531 432 96V416ZM294.123 144C272.701 144 251.068 152.77 235.248 169.102L223.998 180.715L212.748 169.102C196.928 152.766 175.297 144 153.873 144C136.65 144 119.555 149.672 105.73 161.637C70.219 192.375 68.451 247.152 100.463 280.277L210.838 394.398C214.449 398.133 219.211 400 223.973 400S233.496 398.133 237.107 394.398L347.48 280.277C379.547 247.152 377.779 192.371 342.266 161.633C328.441 149.668 311.352 144 294.123 144ZM335.979 269.152L225.605 383.277C224.666 384.248 223.275 384.246 222.338 383.273L111.969 269.16C99.598 256.355 92.965 238.602 93.773 220.441C94.59 202.137 102.555 185.547 116.201 173.734C126.584 164.75 139.609 160 153.873 160C171.531 160 188.803 167.375 201.256 180.234L223.998 203.711L246.74 180.234C259.197 167.375 276.467 160 294.123 160C308.389 160 321.416 164.75 331.795 173.73C345.447 185.547 353.41 202.137 354.217 220.445C355.02 238.598 348.373 256.352 335.979 269.152Z" })
  }
));
SquareHeartThin.displayName = "SquareHeartThin";
var SquareHeart_default = SquareHeartThin;
