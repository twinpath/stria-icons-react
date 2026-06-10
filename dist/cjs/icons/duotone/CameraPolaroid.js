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
var CameraPolaroid_exports = {};
__export(CameraPolaroid_exports, {
  default: () => CameraPolaroid_default
});
module.exports = __toCommonJS(CameraPolaroid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraPolaroidDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 256C323.375 256 352 227.375 352 192S323.375 128 288 128S224 156.625 224 192S252.625 256 288 256ZM575.955 352H0.045L0 352.068V448C0 465.6 14.4 480 32 480H544C561.6 480 576 465.6 576 448V352.068L575.955 352ZM464 432H112C103.164 432 96 424.836 96 416C96 407.162 103.164 400 112 400H464C472.838 400 480 407.162 480 416C480 424.836 472.838 432 464 432Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.91 352L511.955 256V80C511.955 53.49 490.465 32 463.955 32H111.955C85.445 32 63.955 53.49 63.955 80V256L0 352H575.91ZM383.955 112C383.955 103.199 391.156 96 399.955 96H431.955C440.756 96 447.955 103.199 447.955 112V144C447.955 152.801 440.756 160 431.955 160H399.955C391.156 160 383.955 152.801 383.955 144V112ZM287.955 128C323.33 128 351.955 156.625 351.955 192S323.33 256 287.955 256S223.955 227.375 223.955 192S252.58 128 287.955 128Z" })
    ]
  }
));
CameraPolaroidDuotone.displayName = "CameraPolaroidDuotone";
var CameraPolaroid_default = CameraPolaroidDuotone;
