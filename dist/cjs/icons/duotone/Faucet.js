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
var Faucet_exports = {};
__export(Faucet_exports, {
  default: () => Faucet_default
});
module.exports = __toCommonJS(Faucet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaucetDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 256H313.6C297.6 243.199 278.4 233.6 256 227.199V179.199L224 176L192 179.199V227.199C169.6 233.6 150.4 243.199 134.4 256H16C6.4 256 0 262.4 0 272V368C0 377.6 6.4 384 16 384H108.801C128 422.4 172.801 448 224 448S320 422.4 339.199 384H352C371.199 384 384 396.799 384 416C384 435.199 396.801 448 416 448H480C499.199 448 512 435.199 512 416C512 326.4 441.6 256 352 256ZM256 108.799V80C256 70.4 249.6 64 240 64H208C198.4 64 192 70.4 192 80V108.799L224 112L256 108.799Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 112V140.799C384 153.6 374.4 160 364.801 160L224 144L83.199 160C73.6 160 64 153.6 64 144V112C64 102.4 73.6 96 83.199 96L224 112L364.801 96C374.4 96 384 102.4 384 112Z" })
    ]
  }
));
FaucetDuotone.displayName = "FaucetDuotone";
var Faucet_default = FaucetDuotone;
