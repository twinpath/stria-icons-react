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
var CompactDisc_exports = {};
__export(CompactDisc_exports, {
  default: () => CompactDisc_default
});
module.exports = __toCommonJS(CompactDisc_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompactDiscRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM227.531 131.172C236.141 129.219 241.563 120.656 239.609 112.031C237.656 103.422 229.063 98.078 220.469 99.953C160.766 113.453 113.453 160.766 99.953 220.469C98 229.094 103.422 237.656 112.031 239.609C113.219 239.875 114.406 240 115.578 240C122.891 240 129.484 234.953 131.172 227.531C141.969 179.781 179.781 141.969 227.531 131.172ZM256 160C202.924 160 160 202.922 160 256C160 309.076 202.924 352 256 352S352 309.076 352 256C352 202.922 309.076 160 256 160ZM256 280C242.75 280 232 269.25 232 256S242.75 232 256 232S280 242.75 280 256S269.25 280 256 280Z" })
  }
));
CompactDiscRegular.displayName = "CompactDiscRegular";
var CompactDisc_default = CompactDiscRegular;
