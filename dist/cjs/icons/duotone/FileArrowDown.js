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
var FileArrowDown_exports = {};
__export(FileArrowDown_exports, {
  default: () => FileArrowDown_default
});
module.exports = __toCommonJS(FileArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileArrowDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM288.969 360.969L208.969 440.969C199.594 450.344 184.406 450.344 175.031 440.969L95.031 360.969C85.656 351.594 85.656 336.406 95.031 327.031C99.719 322.344 105.844 320 112 320S124.281 322.344 128.969 327.031L168 366.062V248C168 234.75 178.75 224 192 224S216 234.75 216 248V366.062L255.031 327.031C264.406 317.656 279.594 317.656 288.969 327.031S298.344 351.594 288.969 360.969Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0V128H384L256 0ZM255.031 327.031L216 366.062V248C216 234.75 205.25 224 192 224S168 234.75 168 248V366.062L128.969 327.031C124.281 322.344 118.156 320 112 320S99.719 322.344 95.031 327.031C85.656 336.406 85.656 351.594 95.031 360.969L175.031 440.969C184.406 450.344 199.594 450.344 208.969 440.969L288.969 360.969C298.344 351.594 298.344 336.406 288.969 327.031S264.406 317.656 255.031 327.031Z" })
    ]
  }
));
FileArrowDownDuotone.displayName = "FileArrowDownDuotone";
var FileArrowDown_default = FileArrowDownDuotone;
