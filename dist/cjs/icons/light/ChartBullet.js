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
const ChartBulletLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 224H128V64H48C21.49 64 0 85.49 0 112V176C0 202.51 21.49 224 48 224ZM32 112C32 103.178 39.178 96 48 96H96V192H48C39.178 192 32 184.822 32 176V112ZM464 64H288C288 55.156 280.844 48 272 48S256 55.156 256 64H160V96H256V192H160V224H256C256 232.844 263.156 240 272 240S288 232.844 288 224H464C490.51 224 512 202.51 512 176V112C512 85.49 490.51 64 464 64ZM480 176C480 184.822 472.822 192 464 192H288V96H464C472.822 96 480 103.178 480 112V176ZM0 336V400C0 426.51 21.49 448 48 448H224V288H48C21.49 288 0 309.49 0 336ZM192 416H48C39.178 416 32 408.822 32 400V336C32 327.178 39.178 320 48 320H192V416ZM464 288H384C384 279.156 376.844 272 368 272S352 279.156 352 288H256V320H352V416H256V448H352C352 456.844 359.156 464 368 464S384 456.844 384 448H464C490.51 448 512 426.51 512 400V336C512 309.49 490.51 288 464 288ZM480 400C480 408.822 472.822 416 464 416H384V320H464C472.822 320 480 327.178 480 336V400Z" })
  }
));
ChartBulletLight.displayName = "ChartBulletLight";
var ChartBullet_default = ChartBulletLight;
