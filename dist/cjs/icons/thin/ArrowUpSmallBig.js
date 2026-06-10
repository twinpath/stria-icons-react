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
var ArrowUpSmallBig_exports = {};
__export(ArrowUpSmallBig_exports, {
  default: () => ArrowUpSmallBig_default
});
module.exports = __toCommonJS(ArrowUpSmallBig_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpSmallBigThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.002 192H416C433.602 192 448 177.6 448 160V64C448 46.4 433.602 32 416 32H288.002C270.402 32 256.002 46.4 256.002 64V160C256.002 177.6 270.402 192 288.002 192ZM272.002 64C272.002 55.178 279.18 48 288.002 48H416C424.822 48 432 55.178 432 64V160C432 168.822 424.822 176 416 176H288.002C279.18 176 272.002 168.822 272.002 160V64ZM480 256H288.002C270.328 256 256.002 270.326 256.002 288V448C256.002 465.674 270.328 480 288.002 480H480C497.674 480 512 465.674 512 448V288C512 270.326 497.674 256 480 256ZM496 448C496 456.822 488.822 464 480 464H288.002C279.18 464 272.002 456.822 272.002 448V288C272.002 279.178 279.18 272 288.002 272H480C488.822 272 496 279.178 496 288V448ZM101.906 34.484C98.844 31.172 93.156 31.172 90.094 34.484L2.09 130.508C-0.879 133.76 -0.66 138.822 2.59 141.824C5.84 144.824 10.902 144.605 13.902 141.324L88 60.471V471.998C88 476.406 91.594 480 96 480S104 476.406 104 471.998V60.471L178.098 141.324C179.691 143.043 181.848 143.918 184.004 143.918C185.941 143.918 187.879 143.23 189.41 141.824C192.66 138.822 192.879 133.76 189.91 130.508L101.906 34.484Z" })
  }
));
ArrowUpSmallBigThin.displayName = "ArrowUpSmallBigThin";
var ArrowUpSmallBig_default = ArrowUpSmallBigThin;
