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
var ArrowLeftFromLine_exports = {};
__export(ArrowLeftFromLine_exports, {
  default: () => ArrowLeftFromLine_default
});
module.exports = __toCommonJS(ArrowLeftFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowLeftFromLineDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 96V416C384 433.688 398.312 448 416 448S448 433.688 448 416V96C448 78.312 433.688 64 416 64S384 78.312 384 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M182.625 406.625C170.125 419.125 149.875 419.125 137.375 406.625L9.375 278.625C-3.125 266.125 -3.125 245.875 9.375 233.375L137.375 105.375C149.875 92.875 170.125 92.875 182.625 105.375C188.875 111.625 192 119.812 192 128S188.875 144.375 182.625 150.625L109.25 224H288C305.688 224 320 238.312 320 256S305.688 288 288 288H109.25L182.625 361.375C195.125 373.875 195.125 394.125 182.625 406.625Z" })
    ]
  }
));
ArrowLeftFromLineDuotone.displayName = "ArrowLeftFromLineDuotone";
var ArrowLeftFromLine_default = ArrowLeftFromLineDuotone;
