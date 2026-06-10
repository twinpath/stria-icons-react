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
var CompressWide_exports = {};
__export(CompressWide_exports, {
  default: () => CompressWide_default
});
module.exports = __toCommonJS(CompressWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompressWideThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152 64C147.594 64 144 67.578 144 72V208H8C3.594 208 0 211.578 0 216S3.594 224 8 224H152C156.406 224 160 220.422 160 216V72C160 67.578 156.406 64 152 64ZM360 224H504C508.406 224 512 220.422 512 216S508.406 208 504 208H368V72C368 67.578 364.406 64 360 64S352 67.578 352 72V216C352 220.422 355.594 224 360 224ZM504 288H360C355.594 288 352 291.578 352 296V440C352 444.422 355.594 448 360 448S368 444.422 368 440V304H504C508.406 304 512 300.422 512 296S508.406 288 504 288ZM152 288H8C3.594 288 0 291.578 0 296S3.594 304 8 304H144V440C144 444.422 147.594 448 152 448S160 444.422 160 440V296C160 291.578 156.406 288 152 288Z" })
  }
));
CompressWideThin.displayName = "CompressWideThin";
var CompressWide_default = CompressWideThin;
