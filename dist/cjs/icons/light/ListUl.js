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
var ListUl_exports = {};
__export(ListUl_exports, {
  default: () => ListUl_default
});
module.exports = __toCommonJS(ListUl_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListUlLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48.188 384C30.664 384 16 398.375 16 416S30.664 448 48.188 448C65.834 448 80 433.625 80 416S65.834 384 48.188 384ZM176 112H496C504.801 112 512 104.799 512 96C512 87.199 504.801 80 496 80H176C167.201 80 160 87.199 160 96C160 104.799 167.201 112 176 112ZM48.188 224C30.664 224 16 238.375 16 256S30.664 288 48.188 288C65.834 288 80 273.625 80 256S65.834 224 48.188 224ZM496 240H176C167.201 240 160 247.199 160 256C160 264.799 167.201 272 176 272H496C504.801 272 512 264.799 512 256C512 247.199 504.801 240 496 240ZM496 400H176C167.201 400 160 407.199 160 416C160 424.799 167.201 432 176 432H496C504.801 432 512 424.799 512 416C512 407.199 504.801 400 496 400ZM48.188 64C30.664 64 16 78.375 16 96S30.664 128 48.188 128C65.834 128 80 113.625 80 96S65.834 64 48.188 64Z" })
  }
));
ListUlLight.displayName = "ListUlLight";
var ListUl_default = ListUlLight;
