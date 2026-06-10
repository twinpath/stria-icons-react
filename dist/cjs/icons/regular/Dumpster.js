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
var Dumpster_exports = {};
__export(Dumpster_exports, {
  default: () => Dumpster_default
});
module.exports = __toCommonJS(Dumpster_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DumpsterRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 160C570.375 160 578 150.25 575.5 140.125L551.5 44.125C549.75 37 543.25 32 536 32H437.125L462.75 160H560ZM404.5 32H304V160H430.125L404.5 32ZM552 224H540L544 192H32L36 224H24C10.8 224 0 234.8 0 248V248C0 261.2 10.8 272 24 272H42L64 448V456C64 469.255 74.745 480 88 480H88C101.255 480 112 469.255 112 456V448H464V456C464 469.255 474.745 480 488 480L488 480C501.255 480 512 469.255 512 456V448L534 272H552C565.2 272 576 261.2 576 248V248C576 234.8 565.2 224 552 224ZM469.625 400H106.375L86.375 240H489.75L469.625 400ZM16 160H113.25L138.875 32H40C32.75 32 26.25 37 24.5 44.125L0.5 140.125C-2 150.25 5.625 160 16 160ZM272 32H171.5L145.875 160H272V32Z" })
  }
));
DumpsterRegular.displayName = "DumpsterRegular";
var Dumpster_default = DumpsterRegular;
