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
var ChartBullet_exports = {};
__export(ChartBullet_exports, {
  default: () => ChartBullet_default
});
module.exports = __toCommonJS(ChartBullet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartBulletSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 320V416C0 433.6 14.4 448 32 448H224V288H32C14.4 288 0 302.4 0 320ZM32 224H128V64H32C14.4 64 0 78.4 0 96V192C0 209.6 14.4 224 32 224ZM480 64H288C288 55.162 280.836 48 272 48S256 55.162 256 64H160V112H256V176H160V224H256C256 232.836 263.164 240 272 240S288 232.836 288 224H480C497.6 224 512 209.6 512 192V96C512 78.4 497.6 64 480 64ZM464 176H288V112H464V176ZM480 288H384C384 279.162 376.836 272 368 272S352 279.162 352 288H256V336H352V400H256V448H352C352 456.836 359.164 464 368 464S384 456.836 384 448H480C497.6 448 512 433.6 512 416V320C512 302.4 497.6 288 480 288ZM464 400H384V336H464V400Z" })
  }
));
ChartBulletSolid.displayName = "ChartBulletSolid";
var ChartBullet_default = ChartBulletSolid;
