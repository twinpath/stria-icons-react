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
var HouseTurret_exports = {};
__export(HouseTurret_exports, {
  default: () => HouseTurret_default
});
module.exports = __toCommonJS(HouseTurret_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseTurretRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 160C156.117 160 140 176.117 140 196V224C140 232.836 147.164 240 156 240H196C204.836 240 212 232.836 212 224V196C212 176.117 195.883 160 176 160ZM622.977 242.801L471.477 105.078C464.82 99.025 456.408 96 447.996 96S431.172 99.025 424.514 105.078L273.141 242.689C262.225 252.613 256 266.684 256 281.438V464C256 490.51 277.49 512 304 512H591.992C618.502 512 639.992 490.693 639.992 464.184C639.996 423.518 640 365.59 640 320.627V281.107C640 266.455 633.818 252.656 622.977 242.801ZM591.992 464H304V281.438C304 280.209 304.521 279.031 305.43 278.207L447.996 148.602L590.689 278.318C591.559 279.109 592 280.047 592 281.107L591.992 464ZM256 48H304V171.355L352 127.715V32C352 14.326 337.674 0 320 0H32C14.326 0 0 14.326 0 32V197.49C0 214.463 6.742 230.738 18.742 242.74L64 288V488C64 501.254 74.746 512 88 512S112 501.254 112 488V268.119L52.688 208.801C49.686 205.799 48 201.729 48 197.482V48H96V88C96 101.254 106.746 112 120 112S144 101.254 144 88V48H208V88C208 101.254 218.746 112 232 112S256 101.254 256 88V48ZM480 288H416C407.125 288 400 295.125 400 304V368C400 376.875 407.125 384 416 384H480C488.875 384 496 376.875 496 368V304C496 295.125 488.875 288 480 288Z" })
  }
));
HouseTurretRegular.displayName = "HouseTurretRegular";
var HouseTurret_default = HouseTurretRegular;
