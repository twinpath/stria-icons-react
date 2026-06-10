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
const ChartBulletRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 224H160V64H48C21.6 64 0 85.6 0 112V176C0 202.4 21.6 224 48 224ZM48 112H112V176H48V112ZM464 288H384C384 279.162 376.836 272 368 272S352 279.162 352 288H256V336H352V400H256V448H352C352 456.836 359.164 464 368 464S384 456.836 384 448H464C490.4 448 512 426.4 512 400V336C512 309.6 490.4 288 464 288ZM464 400H384V336H464V400ZM0 336V400C0 426.4 21.6 448 48 448H224V288H48C21.6 288 0 309.6 0 336ZM176 400H48V336H176V400ZM464 64H288C288 55.162 280.836 48 272 48S256 55.162 256 64H192V112H256V176H192V224H256C256 232.836 263.164 240 272 240S288 232.836 288 224H464C490.4 224 512 202.4 512 176V112C512 85.6 490.4 64 464 64ZM464 176H288V112H464V176Z" })
  }
));
ChartBulletRegular.displayName = "ChartBulletRegular";
var ChartBullet_default = ChartBulletRegular;
