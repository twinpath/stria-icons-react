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
var FaucetDrip_exports = {};
__export(FaucetDrip_exports, {
  default: () => FaucetDrip_default
});
module.exports = __toCommonJS(FaucetDrip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaucetDripDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 192H313.6C297.6 179.199 278.4 169.6 256 163.199V115.199L224 112L192 115.199V163.199C169.6 169.6 150.4 179.199 134.4 192H16C6.4 192 0 198.4 0 208V304C0 313.6 6.4 320 16 320H108.801C128 358.4 172.801 384 224 384S320 358.4 339.199 320H352C371.199 320 384 332.799 384 352C384 371.199 396.801 384 416 384H480C499.199 384 512 371.199 512 352C512 262.4 441.6 192 352 192ZM256 44.799V16C256 6.4 249.6 0 240 0H208C198.4 0 192 6.4 192 16V44.799L224 48L256 44.799Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M364.801 32L224 48L83.199 32C73.6 32 64 38.4 64 48V76.799C64 89.6 73.6 96 83.199 96L224 80L364.801 96C374.4 96 384 89.6 384 80V48C384 38.4 374.4 32 364.801 32ZM448 416C448 416 416 460.799 416 480C416 499.199 428.801 512 448 512S480 499.199 480 480C480 460.799 448 416 448 416Z" })
    ]
  }
));
FaucetDripDuotone.displayName = "FaucetDripDuotone";
var FaucetDrip_default = FaucetDripDuotone;
