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
var Cauldron_exports = {};
__export(Cauldron_exports, {
  default: () => Cauldron_default
});
module.exports = __toCommonJS(Cauldron_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CauldronDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 0C142.375 0 128 14.375 128 32S142.375 64 160 64S192 49.625 192 32S177.625 0 160 0ZM272 32C245.5 32 224 53.5 224 80S245.5 128 272 128S320 106.5 320 80S298.5 32 272 32ZM96 288C96 305.672 110.326 320 128 320S160 305.672 160 288V160H96V288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M434 224H414.25C435.625 262.5 448 305.25 448 345.625C448 384.625 436.125 416.25 416 441.125V488C416 501.25 405.25 512 392 512S368 501.25 368 488V480.5C329 501.75 278.875 512 224 512S119 501.75 80 480.5V488C80 501.25 69.25 512 56 512S32 501.25 32 488V441.125C11.875 416.25 0 384.625 0 345.625C0 305.25 12.375 262.5 33.75 224H14C6.25 224 0 218.625 0 212V172C0 165.375 6.25 160 14 160H96V288C96 305.672 110.326 320 128 320S160 305.672 160 288V160H434C441.75 160 448 165.375 448 172V212C448 218.625 441.75 224 434 224Z" })
    ]
  }
));
CauldronDuotone.displayName = "CauldronDuotone";
var Cauldron_default = CauldronDuotone;
