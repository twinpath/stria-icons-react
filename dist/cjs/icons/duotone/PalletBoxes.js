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
var PalletBoxes_exports = {};
__export(PalletBoxes_exports, {
  default: () => PalletBoxes_default
});
module.exports = __toCommonJS(PalletBoxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PalletBoxesDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 384C633 384 640 377 640 368V336C640 327 633 320 624 320H16C7 320 0 327 0 336V368C0 377 7 384 16 384H64V448H16C7 448 0 455 0 464V496C0 505 7 512 16 512H624C633 512 640 505 640 496V464C640 455 633 448 624 448H576V384H624ZM288 448H128V384H288V448ZM512 448H352V384H512V448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 256H288C306 256 320 242 320 224V32C320 14 306 0 288 0H96C78 0 64 14 64 32V224C64 242 78 256 96 256ZM416 256H544C562 256 576 242 576 224V96C576 78 562 64 544 64H416C398 64 384 78 384 96V224C384 242 398 256 416 256Z" })
    ]
  }
));
PalletBoxesDuotone.displayName = "PalletBoxesDuotone";
var PalletBoxes_default = PalletBoxesDuotone;
