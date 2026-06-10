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
var ListOl_exports = {};
__export(ListOl_exports, {
  default: () => ListOl_default
});
module.exports = __toCommonJS(ListOl_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListOlLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 112H496C504.801 112 512 104.799 512 96C512 87.199 504.801 80 496 80H208C199.201 80 192 87.199 192 96C192 104.799 199.201 112 208 112ZM32 224H128C136.844 224 144 216.844 144 208C144 199.158 136.844 192.002 128 192.002H96V48.008C96 42.273 92.937 36.992 87.969 34.133S76.906 31.289 71.937 34.18L36.375 54.914C28.75 59.365 26.156 69.162 30.625 76.803C35.062 84.428 44.875 86.943 52.5 82.568L64 75.85V192.002H32C23.156 192.002 16 199.158 16 208C16 216.844 23.156 224 32 224ZM496 400H208C199.201 400 192 407.199 192 416C192 424.799 199.201 432 208 432H496C504.801 432 512 424.799 512 416C512 407.199 504.801 400 496 400ZM144 448H58.435L119.873 393.984C148.531 369.281 151.969 325.75 127.594 296.938C115.342 282.5 98.154 273.719 79.154 272.219C59.842 270.594 41.652 276.703 27.246 289.125L13.465 301C6.777 306.766 6.027 316.875 11.777 323.562C17.558 330.281 27.715 331 34.34 325.25L48.123 313.375C55.998 306.594 65.935 303.203 76.623 304.125C87.06 304.937 96.498 309.734 103.154 317.625C116.467 333.344 114.654 356.234 98.873 369.844L5.433 451.984C0.433 456.375 -1.317 463.422 1.027 469.641C3.371 475.875 9.34 480 15.996 480H144C152.844 480 160 472.844 160 464S152.844 448 144 448ZM496 240H208C199.201 240 192 247.199 192 256C192 264.799 199.201 272 208 272H496C504.801 272 512 264.799 512 256C512 247.199 504.801 240 496 240Z" })
  }
));
ListOlLight.displayName = "ListOlLight";
var ListOl_default = ListOlLight;
