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
var TreasureChest_exports = {};
__export(TreasureChest_exports, {
  default: () => TreasureChest_default
});
module.exports = __toCommonJS(TreasureChest_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreasureChestSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 336C352 344.875 344.875 352 336 352H240C231.125 352 224 344.875 224 336V288H128V480H448V288H352V336ZM0 128V256H96V32C43 32 0 75 0 128ZM0 448C0 465.625 14.375 480 32 480H96V288H0V448ZM480 32V256H576V128C576 75 533 32 480 32ZM304 304V240C304 231.125 296.875 224 288 224S272 231.125 272 240V304C272 312.875 279.125 320 288 320S304 312.875 304 304ZM480 480H544C561.625 480 576 465.625 576 448V288H480V480ZM128 256H224V208C224 199.125 231.125 192 240 192H336C344.875 192 352 199.125 352 208V256H448V32H128V256Z" })
  }
));
TreasureChestSolid.displayName = "TreasureChestSolid";
var TreasureChest_default = TreasureChestSolid;
