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
var ChessKing_exports = {};
__export(ChessKing_exports, {
  default: () => ChessKing_default
});
module.exports = __toCommonJS(ChessKing_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessKingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440.265 176.25C432.764 166.078 420.699 160 408.072 160H231.982V72H287.991C292.398 72 295.992 68.422 295.992 64S292.398 56 287.991 56H231.982V8C231.982 3.578 228.388 0 223.981 0C219.574 0 215.98 3.578 215.98 8V56H159.971C155.564 56 151.97 59.578 151.97 64S155.564 72 159.971 72H215.98V160H39.89C27.263 160 15.199 166.078 7.666 176.297C0.196 186.547 -1.991 199.844 1.884 212.266L74.927 410.766C76.427 414.906 81.053 416.984 85.178 415.516C89.335 413.984 91.461 409.391 89.929 405.234L17.012 207.125C14.761 199.891 16.105 191.891 20.575 185.75C25.075 179.641 32.295 176 39.89 176H408.072C415.667 176 422.887 179.641 427.357 185.703C431.857 191.891 433.201 199.891 431.076 206.734L358.033 405.234C356.502 409.391 358.627 413.984 362.784 415.516C363.69 415.844 364.628 416 365.534 416C368.785 416 371.848 414 373.036 410.766L446.203 211.875C449.954 199.844 447.766 186.547 440.265 176.25ZM360.002 448H87.96C57.08 448 31.951 473.125 31.951 504C31.951 508.422 35.546 512 39.953 512C44.36 512 47.954 508.422 47.954 504C47.954 481.938 65.894 464 87.96 464H360.002C382.068 464 400.009 481.938 400.009 504C400.009 508.422 403.603 512 408.01 512C412.417 512 416.011 508.422 416.011 504C416.011 473.125 390.882 448 360.002 448Z" })
  }
));
ChessKingThin.displayName = "ChessKingThin";
var ChessKing_default = ChessKingThin;
