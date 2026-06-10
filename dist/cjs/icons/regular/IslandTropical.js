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
var IslandTropical_exports = {};
__export(IslandTropical_exports, {
  default: () => IslandTropical_default
});
module.exports = __toCommonJS(IslandTropical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IslandTropicalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.503 32C313.629 31.875 291.129 38.125 271.505 49.875C249.631 20.25 207.882 0 159.384 0C94.886 0 41.512 35.375 32.263 81.625C30.763 89.125 37.387 96 46.387 96H80.011L96.011 64L115.01 101.875C108.76 111.5 103.51 121.5 100.51 132C92.261 160 95.511 191.625 122.26 221.375C123.76 223 125.885 223.875 128.01 224C130.26 224 132.384 223.25 134.009 221.75L200.632 153C194.882 229.75 168.258 306.25 149.634 352H128.01C93.761 352 60.887 365.75 36.762 390.25C12.763 414.75 -0.486 447.75 0.014 482.125C0.264 498.875 15.138 512 32.013 512H352.002C368.877 512 383.751 499 384.001 482.125C385.001 421.375 343.503 370.5 287.38 356.375C308.504 248 297.254 139.5 295.879 128H368.002L384.001 96L400.001 128H435.375C439.125 128 442.625 126.5 445 123.75C447.374 121 448.374 117.25 447.874 113.625C439.75 67.375 393.001 32 336.503 32ZM249.006 150.125L249.756 150.25C252.381 186.125 255.506 270.75 238.881 352H201.132C220.757 301 244.381 225.75 249.006 150.125ZM334.378 464H49.637C57.262 426.75 90.011 400 128.01 400H256.006C294.004 400 326.753 426.75 334.378 464Z" })
  }
));
IslandTropicalRegular.displayName = "IslandTropicalRegular";
var IslandTropical_default = IslandTropicalRegular;
