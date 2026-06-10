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
const ChartBulletThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 320V416C0 433.6 14.4 448 32 448H224V288H32C14.4 288 0 302.4 0 320ZM208 432H32C23.178 432 16 424.822 16 416V320C16 311.178 23.178 304 32 304H208V432ZM480 288H384V280C384 275.58 380.418 272 376 272S368 275.58 368 280V288H256V304H368V432H256V448H368V456C368 460.418 371.582 464 376 464S384 460.418 384 456V448H480C497.6 448 512 433.6 512 416V320C512 302.4 497.6 288 480 288ZM496 416C496 424.822 488.822 432 480 432H384V304H480C488.822 304 496 311.178 496 320V416ZM32 224H128V64H32C14.4 64 0 78.4 0 96V192C0 209.6 14.4 224 32 224ZM16 96C16 87.178 23.178 80 32 80H112V208H32C23.178 208 16 200.822 16 192V96ZM480 64H288V56C288 51.58 284.418 48 280 48S272 51.58 272 56V64H160V80H272V208H160V224H272V232C272 236.418 275.582 240 280 240S288 236.418 288 232V224H480C497.6 224 512 209.6 512 192V96C512 78.4 497.6 64 480 64ZM496 192C496 200.822 488.822 208 480 208H288V80H480C488.822 80 496 87.178 496 96V192Z" })
  }
));
ChartBulletThin.displayName = "ChartBulletThin";
var ChartBullet_default = ChartBulletThin;
