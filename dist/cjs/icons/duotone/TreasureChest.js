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
const TreasureChestDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 336C352 344.836 344.836 352 336 352H240C231.164 352 224 344.836 224 336V288H160V480H416V288H352V336ZM0 128V256H96V32C42.98 32 0 74.98 0 128ZM0 448C0 465.672 14.326 480 32 480H96V288H0V448ZM160 256H224V208C224 199.162 231.164 192 240 192H336C344.836 192 352 199.162 352 208V256H416V32H160V256ZM480 32V256H576V128C576 74.98 533.02 32 480 32ZM480 480H544C561.674 480 576 465.672 576 448V288H480V480Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 256H160V32H96V256ZM96 480H160V288H96V480ZM416 480H480V288H416V480ZM416 32V256H480V32H416ZM336 192H240C231.164 192 224 199.162 224 208V336C224 344.836 231.164 352 240 352H336C344.836 352 352 344.836 352 336V208C352 199.162 344.836 192 336 192ZM304 304C304 312.836 296.836 320 288 320S272 312.836 272 304V240C272 231.162 279.164 224 288 224S304 231.162 304 240V304Z" })
    ]
  }
));
TreasureChestDuotone.displayName = "TreasureChestDuotone";
var TreasureChest_default = TreasureChestDuotone;
