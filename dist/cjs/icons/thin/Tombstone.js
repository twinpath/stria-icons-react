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
var Tombstone_exports = {};
__export(Tombstone_exports, {
  default: () => Tombstone_default
});
module.exports = __toCommonJS(Tombstone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TombstoneThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 464C44.406 464 48 460.422 48 456V192C48 94.953 126.969 16 224 16S400 94.953 400 192V456C400 460.422 403.594 464 408 464S416 460.422 416 456V192C416 86.125 329.875 0 224 0S32 86.125 32 192V456C32 460.422 35.594 464 40 464ZM224 360C228.406 360 232 356.422 232 352V200H320C324.406 200 328 196.422 328 192S324.406 184 320 184H232V96C232 91.578 228.406 88 224 88S216 91.578 216 96V184H128C123.594 184 120 187.578 120 192S123.594 200 128 200H216V352C216 356.422 219.594 360 224 360ZM440 496H8C3.594 496 0 499.578 0 504S3.594 512 8 512H440C444.406 512 448 508.422 448 504S444.406 496 440 496Z" })
  }
));
TombstoneThin.displayName = "TombstoneThin";
var Tombstone_default = TombstoneThin;
