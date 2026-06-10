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
const ChartBulletDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64H160V112H256V64ZM256 176H160V224H256V176ZM256 448H352V400H256V448ZM480 288H384V336H464V400H384V448H480C497.6 448 512 433.6 512 416V320C512 302.4 497.6 288 480 288ZM256 336H352V288H256V336ZM480 64H288V112H464V176H288V224H480C497.6 224 512 209.6 512 192V96C512 78.4 497.6 64 480 64Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 224H160V160H80C71.164 160 64 152.836 64 144C64 135.162 71.164 128 80 128H160V64H32C14.4 64 0 78.4 0 96V192C0 209.6 14.4 224 32 224ZM304 352H256V384H304C312.836 384 320 376.836 320 368C320 359.162 312.836 352 304 352ZM64 368C64 359.162 71.164 352 80 352H256V288H32C14.4 288 0 302.4 0 320V416C0 433.6 14.4 448 32 448H256V384H80C71.164 384 64 376.836 64 368ZM368 272C359.164 272 352 279.162 352 288V448C352 456.836 359.164 464 368 464S384 456.836 384 448V288C384 279.162 376.836 272 368 272ZM256 160V224C256 232.836 263.164 240 272 240S288 232.836 288 224V160H368C376.836 160 384 152.836 384 144C384 135.162 376.836 128 368 128H288V64C288 55.162 280.836 48 272 48S256 55.162 256 64V128H160V160H256Z" })
    ]
  }
));
ChartBulletDuotone.displayName = "ChartBulletDuotone";
var ChartBullet_default = ChartBulletDuotone;
