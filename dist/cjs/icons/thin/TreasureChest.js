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
const TreasureChestThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H128C57.309 32 0 89.307 0 160V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V160C576 89.307 518.693 32 448 32ZM120 464H64C37.533 464 16 442.467 16 416V288H120V464ZM120 272H16V160C16 100.982 62.033 52.996 120 48.809V272ZM440 464H136V288H216V328C216 350.062 233.938 368 256 368H320C342.062 368 360 350.062 360 328V288H440V464ZM232 328V216C232 202.766 242.781 192 256 192H320C333.219 192 344 202.766 344 216V328C344 341.234 333.219 352 320 352H256C242.781 352 232 341.234 232 328ZM440 272H360V216C360 193.938 342.062 176 320 176H256C233.938 176 216 193.938 216 216V272H136V48H440V272ZM560 416C560 442.467 538.467 464 512 464H456V288H560V416ZM560 272H456V48.809C513.967 52.996 560 100.982 560 160V272ZM288 320C292.406 320 296 316.422 296 312V232C296 227.578 292.406 224 288 224S280 227.578 280 232V312C280 316.422 283.594 320 288 320Z" })
  }
));
TreasureChestThin.displayName = "TreasureChestThin";
var TreasureChest_default = TreasureChestThin;
