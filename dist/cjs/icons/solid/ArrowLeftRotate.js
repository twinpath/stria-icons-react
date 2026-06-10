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
var ArrowLeftRotate_exports = {};
__export(ArrowLeftRotate_exports, {
  default: () => ArrowLeftRotate_default
});
module.exports = __toCommonJS(ArrowLeftRotate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowLeftRotateSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M47.998 16C65.668 16 79.992 30.324 79.992 47.992V93.305C124.859 44.789 188.227 16 256 16C388.344 16 496 123.656 496 256S388.344 496 256 496C203.531 496 153.75 479.406 111.969 447.969C94.312 434.687 90.75 409.625 104.031 391.969C117.344 374.312 142.437 370.75 160.031 384.031C187.844 404.938 221.031 416 256 416C344.219 416 416 344.219 416 256S344.219 96 256 96C205.246 96 158.059 120.094 128.057 160H128.176C128.174 160 128.172 160.008 128.17 160.008H192.006C209.676 160.008 224 174.336 224 192.004C224 209.676 209.674 224 192.004 224H47.996C39.158 224 31.158 220.422 25.369 214.633S16 200.844 16 192.004V47.996C16 30.324 30.326 16 47.998 16Z" })
  }
));
ArrowLeftRotateSolid.displayName = "ArrowLeftRotateSolid";
var ArrowLeftRotate_default = ArrowLeftRotateSolid;
