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
var SquarePhoneHangup_exports = {};
__export(SquarePhoneHangup_exports, {
  default: () => SquarePhoneHangup_default
});
module.exports = __toCommonJS(SquarePhoneHangup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquarePhoneHangupThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M56.594 245.229C48.75 253.072 47.381 265.094 53.246 274.43L80.646 318.27C86.635 327.838 98.789 331.947 109.494 327.738L164.385 305.818C174.051 301.896 180.084 291.93 179.035 281.533L176.24 253.35C207.264 244.068 240.752 244.078 271.82 253.359L269.037 281.467C267.877 291.908 273.953 301.963 283.742 305.83L338.543 327.75L338.576 327.76C349.182 331.959 361.281 327.992 367.312 318.291L394.736 274.473C400.625 265.094 399.254 253.072 391.41 245.229C299.109 152.93 148.904 152.918 56.594 245.229ZM381.18 265.977L353.768 309.828C351.801 312.945 347.912 314.227 344.486 312.879L289.676 290.969C286.492 289.732 284.549 286.461 284.936 283.113L289.012 242.18L283.012 240.135C244.951 227.152 203.055 227.152 165.047 240.146L159.059 242.201L163.113 283.135C163.467 286.494 161.523 289.721 158.418 290.969L103.605 312.855C100.148 314.236 96.127 313 94.236 309.807L66.814 265.943C64.926 262.928 65.379 259.072 67.908 256.541C153.977 170.475 294.027 170.475 380.096 256.541C382.615 259.061 383.068 262.939 381.18 265.977ZM384 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416Z" })
  }
));
SquarePhoneHangupThin.displayName = "SquarePhoneHangupThin";
var SquarePhoneHangup_default = SquarePhoneHangupThin;
