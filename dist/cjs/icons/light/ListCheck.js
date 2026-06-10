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
var ListCheck_exports = {};
__export(ListCheck_exports, {
  default: () => ListCheck_default
});
module.exports = __toCommonJS(ListCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListCheckLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48.188 384C30.664 384 16 398.375 16 416S30.664 448 48.188 448C65.834 448 80 433.625 80 416S65.834 384 48.188 384ZM208 112H496C504.801 112 512 104.799 512 96C512 87.199 504.801 80 496 80H208C199.201 80 192 87.199 192 96C192 104.799 199.201 112 208 112ZM496 240H208C199.201 240 192 247.199 192 256C192 264.799 199.201 272 208 272H496C504.801 272 512 264.799 512 256C512 247.199 504.801 240 496 240ZM496 400H176C167.201 400 160 407.199 160 416C160 424.799 167.201 432 176 432H496C504.801 432 512 424.799 512 416C512 407.199 504.801 400 496 400ZM131.722 197.739L61.936 281.465L26.246 251.697C19.496 246.103 9.401 246.946 3.714 253.744C-1.943 260.541 -1.037 270.636 5.745 276.293L53.748 316.297C56.748 318.781 60.374 320 63.999 320C68.562 320 73.125 318.047 76.281 314.249L156.286 218.241C161.943 211.443 161.037 201.348 154.255 195.692C147.505 190.097 137.379 190.926 131.722 197.739ZM131.722 37.734L61.936 121.464L26.246 91.694C19.496 86.1 9.401 86.943 3.714 93.741C-1.943 100.539 -1.037 110.634 5.745 116.291L53.748 156.296C56.748 158.781 60.374 160 63.999 160C68.562 160 73.125 158.047 76.281 154.249L156.286 58.237C161.943 51.439 161.037 41.344 154.255 35.687C147.505 30.092 137.379 30.936 131.722 37.734Z" })
  }
));
ListCheckLight.displayName = "ListCheckLight";
var ListCheck_default = ListCheckLight;
