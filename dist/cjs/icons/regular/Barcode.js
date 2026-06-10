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
var Barcode_exports = {};
__export(Barcode_exports, {
  default: () => Barcode_default
});
module.exports = __toCommonJS(Barcode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BarcodeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M111.984 32C103.186 32 95.988 39.199 95.988 47.998V464.002C95.988 472.801 103.186 480 111.986 480C120.785 480 127.982 472.801 127.982 464.002V47.998C127.982 39.199 120.785 32 111.984 32ZM24 32H24C10.8 32 0 42.8 0 56V456C0 469.2 10.8 480 24 480H24C37.2 480 48 469.2 48 456V56C48 42.8 37.2 32 24 32ZM415.998 32C407.199 32 400 39.199 400 47.998V464.002C400 472.801 407.199 480 415.998 480S431.996 472.801 431.996 464.002V47.998C431.996 39.199 424.797 32 415.998 32ZM296 32H296C282.8 32 272 42.8 272 56V456C272 469.2 282.8 480 296 480H296C309.2 480 320 469.2 320 456V56C320 42.8 309.2 32 296 32ZM488 32L488 32C474.8 32 464 42.8 464 56V456C464 469.2 474.8 480 488 480L488 480C501.2 480 512 469.2 512 456V56C512 42.8 501.2 32 488 32ZM184 32H184C170.8 32 160 42.8 160 56V456C160 469.2 170.8 480 184 480H184C197.2 480 208 469.2 208 456V56C208 42.8 197.2 32 184 32Z" })
  }
));
BarcodeRegular.displayName = "BarcodeRegular";
var Barcode_default = BarcodeRegular;
