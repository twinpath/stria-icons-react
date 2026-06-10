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
const TreasureChestRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H128C57.308 32 0 89.308 0 160V416C0 451.2 28.8 480 64 480H512C547.2 480 576 451.2 576 416V160C576 89.308 518.692 32 448 32ZM96 432H64C55.163 432 48 424.837 48 416V288H96V432ZM96 240H48V160C48 127.25 67.75 99.125 96 86.75V240ZM432 432H144V288H224V320C224 337.673 238.327 352 256 352H320C337.673 352 352 337.673 352 320V288H432V432ZM272 288V256C272 247.125 279.125 240 288 240S304 247.125 304 256V288C304 296.875 296.875 304 288 304S272 296.875 272 288ZM432 240H352V224C352 206.327 337.673 192 320 192H256C238.327 192 224 206.327 224 224V240H144V80H432V240ZM512 432H480V288H528V416C528 424.837 520.837 432 512 432ZM528 240H480V86.75C508.25 99.125 528 127.25 528 160V240Z" })
  }
));
TreasureChestRegular.displayName = "TreasureChestRegular";
var TreasureChest_default = TreasureChestRegular;
