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
var FolderArrowUp_exports = {};
__export(FolderArrowUp_exports, {
  default: () => FolderArrowUp_default
});
module.exports = __toCommonJS(FolderArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderArrowUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM352.969 304.969C348.281 309.656 342.156 312 336 312S323.719 309.656 319.031 304.969L280 265.938V376C280 389.25 269.25 400 256 400S232 389.25 232 376V265.938L192.969 304.969C183.594 314.344 168.406 314.344 159.031 304.969S149.656 280.406 159.031 271.031L239.031 191.031C248.406 181.656 263.594 181.656 272.969 191.031L352.969 271.031C362.344 280.406 362.344 295.594 352.969 304.969Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.968 304.969C348.28 309.656 342.155 312 335.999 312S323.718 309.656 319.03 304.969L279.999 265.938V376C279.999 389.25 269.249 400 255.999 400S231.999 389.25 231.999 376V265.938L192.968 304.969C183.592 314.344 168.405 314.344 159.03 304.969S149.655 280.406 159.03 271.031L239.03 191.031C248.405 181.656 263.592 181.656 272.968 191.031L352.968 271.031C362.343 280.406 362.343 295.594 352.968 304.969Z" })
    ]
  }
));
FolderArrowUpDuotone.displayName = "FolderArrowUpDuotone";
var FolderArrowUp_default = FolderArrowUpDuotone;
