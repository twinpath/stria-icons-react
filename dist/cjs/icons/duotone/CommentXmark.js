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
var CommentXmark_exports = {};
__export(CommentXmark_exports, {
  default: () => CommentXmark_default
});
module.exports = __toCommonJS(CommentXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentXmarkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C1.999 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM336.973 287.031C346.348 296.406 346.348 311.594 336.973 320.969C327.592 330.348 312.408 330.34 303.035 320.969L256.004 273.938L208.973 320.969C199.592 330.348 184.408 330.34 175.035 320.969C165.66 311.594 165.66 296.406 175.035 287.031L222.066 240L175.035 192.969C165.66 183.594 165.66 168.406 175.035 159.031S199.598 149.656 208.973 159.031L256.004 206.062L303.035 159.031C312.41 149.656 327.598 149.656 336.973 159.031S346.348 183.594 336.973 192.969L289.941 240L336.973 287.031Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175.031 320.969C184.404 330.34 199.588 330.348 208.969 320.969L256 273.937L303.031 320.969C312.404 330.34 327.588 330.348 336.969 320.969C346.344 311.594 346.344 296.406 336.969 287.031L289.937 240L336.969 192.969C346.344 183.594 346.344 168.406 336.969 159.031S312.406 149.656 303.031 159.031L256 206.062L208.969 159.031C199.594 149.656 184.406 149.656 175.031 159.031S165.656 183.594 175.031 192.969L222.063 240L175.031 287.031C165.656 296.406 165.656 311.594 175.031 320.969Z" })
    ]
  }
));
CommentXmarkDuotone.displayName = "CommentXmarkDuotone";
var CommentXmark_default = CommentXmarkDuotone;
