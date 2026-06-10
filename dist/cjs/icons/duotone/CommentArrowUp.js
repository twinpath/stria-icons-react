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
var CommentArrowUp_exports = {};
__export(CommentArrowUp_exports, {
  default: () => CommentArrowUp_default
});
module.exports = __toCommonJS(CommentArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentArrowUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C1.999 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM352.969 256.969C348.281 261.656 342.156 264 336 264S323.719 261.656 319.031 256.969L280 217.938V320C280 333.25 269.25 344 256 344S232 333.25 232 320V217.938L192.969 256.969C183.594 266.344 168.406 266.344 159.031 256.969S149.656 232.406 159.031 223.031L239.031 143.031C248.406 133.656 263.594 133.656 272.969 143.031L352.969 223.031C362.344 232.406 362.344 247.594 352.969 256.969Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.969 256.969C348.281 261.656 342.156 264 336 264S323.719 261.656 319.031 256.969L280 217.938V320C280 333.25 269.25 344 256 344S232 333.25 232 320V217.938L192.969 256.969C183.594 266.344 168.406 266.344 159.031 256.969S149.656 232.406 159.031 223.031L239.031 143.031C248.406 133.656 263.594 133.656 272.969 143.031L352.969 223.031C362.344 232.406 362.344 247.594 352.969 256.969Z" })
    ]
  }
));
CommentArrowUpDuotone.displayName = "CommentArrowUpDuotone";
var CommentArrowUp_default = CommentArrowUpDuotone;
