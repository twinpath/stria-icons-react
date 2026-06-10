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
var ArrowDownSmallBig_exports = {};
__export(ArrowDownSmallBig_exports, {
  default: () => ArrowDownSmallBig_default
});
module.exports = __toCommonJS(ArrowDownSmallBig_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownSmallBigThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.002 192H416C433.674 192 448 177.674 448 160V64C448 46.4 433.602 32 416 32H288.002C270.328 32 256.002 46.326 256.002 64V160C256.002 177.6 270.402 192 288.002 192ZM272.002 64C272.002 55.178 279.18 48 288.002 48H416C424.822 48 432 55.178 432 64V160C432 168.822 424.822 176 416 176H288.002C279.18 176 272.002 168.822 272.002 160V64ZM480 256H288.002C270.328 256 256.002 270.326 256.002 288V448C256.002 465.674 270.328 480 288.002 480H480C497.674 480 512 465.674 512 448V288C512 270.326 497.674 256 480 256ZM496 448C496 456.822 488.822 464 480 464H288.002C279.18 464 272.002 456.822 272.002 448V288C272.002 279.178 279.18 272 288.002 272H480C488.822 272 496 279.178 496 288V448ZM178.098 370.676L104 451.529V40.002C104 35.594 100.406 32 96 32S88 35.594 88 40.002V451.529L13.902 370.676C12.309 368.957 10.152 368.082 7.996 368.082C6.059 368.082 4.121 368.77 2.59 370.176C-0.66 373.178 -0.879 378.24 2.09 381.492L90.094 477.516C93.156 480.828 98.844 480.828 101.906 477.516L189.91 381.492C192.879 378.24 192.66 373.178 189.41 370.176C186.16 367.176 181.098 367.395 178.098 370.676Z" })
  }
));
ArrowDownSmallBigThin.displayName = "ArrowDownSmallBigThin";
var ArrowDownSmallBig_default = ArrowDownSmallBigThin;
