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
var Acorn_exports = {};
__export(Acorn_exports, {
  default: () => Acorn_default
});
module.exports = __toCommonJS(Acorn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AcornThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 160.031C0 160.025 0.002 160.018 0.002 160.012C0.002 160.008 0 160.006 0 160.002V160.031ZM447.998 160.012C447.998 160.018 448 160.025 448 160.031V160.002C448 160.006 447.998 160.008 447.998 160.012ZM352 64.039H232C232.016 62.848 232.658 35.518 260.797 14.406C264.328 11.75 265.047 6.734 262.406 3.203C259.75 -0.328 254.734 -1.063 251.203 1.594C216.406 27.703 216 62.531 216 64C216 64.016 216.016 64.023 216.016 64.039H96C43.006 64.039 0.014 107.021 0.002 160.012C0.006 177.629 14.379 192 32 192H48V227.641C48 310.25 96.531 419.156 177.734 458.422L220.5 479.203C221.609 479.734 222.797 480 224 480S226.391 479.734 227.5 479.203L270.25 458.422C351.469 419.156 400 310.25 400 227.641V192H416C433.621 192 447.994 177.629 447.998 160.012C447.986 107.021 404.994 64.039 352 64.039ZM384 227.641C384 305.312 338.844 407.484 263.266 444.016L224 463.109L184.719 444.016C109.156 407.484 64 305.312 64 227.641V192H384V227.641ZM416 176H32C23.182 176 16.004 168.826 16.002 160.016C16.012 115.916 51.898 80.039 96 80.039H352C396.102 80.039 431.988 115.916 431.998 160.008C431.996 168.826 424.82 176 416 176Z" })
  }
));
AcornThin.displayName = "AcornThin";
var Acorn_default = AcornThin;
