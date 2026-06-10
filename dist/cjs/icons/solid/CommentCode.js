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
var CommentCode_exports = {};
__export(CommentCode_exports, {
  default: () => CommentCode_default
});
module.exports = __toCommonJS(CommentCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentCodeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C1.999 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM216.969 287.031C226.344 296.406 226.344 311.594 216.969 320.969C212.281 325.656 206.141 328 200 328S187.719 325.656 183.031 320.969L119.031 256.969C109.656 247.594 109.656 232.406 119.031 223.031L183.031 159.031C192.406 149.656 207.594 149.656 216.969 159.031S226.344 183.594 216.969 192.969L169.938 240L216.969 287.031ZM392.969 256.969L328.969 320.969C324.281 325.656 318.141 328 312 328S299.719 325.656 295.031 320.969C285.656 311.594 285.656 296.406 295.031 287.031L342.062 240L295.031 192.969C285.656 183.594 285.656 168.406 295.031 159.031S319.594 149.656 328.969 159.031L392.969 223.031C402.344 232.406 402.344 247.594 392.969 256.969Z" })
  }
));
CommentCodeSolid.displayName = "CommentCodeSolid";
var CommentCode_default = CommentCodeSolid;
