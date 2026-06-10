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
var AxeBattle_exports = {};
__export(AxeBattle_exports, {
  default: () => AxeBattle_default
});
module.exports = __toCommonJS(AxeBattle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AxeBattleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 176.375C508.25 108.375 480.75 47.5 438.5 4.75C435.25 1.5 431.375 0 427.625 0C420.5 0 413.625 5.125 411.625 13.625C406.875 33.25 381.125 120 280 120V56C280 42.742 269.254 32 256 32S232 42.742 232 56V120C132 120 105.875 33.125 101.125 13.625C99.125 5.125 92.25 0 85.125 0C81.375 0 77.5 1.5 74.25 4.75C28.75 50.875 0 117.625 0 192S28.75 333.125 74.25 379.25C77.5 382.5 81.375 384 85.125 384C92.25 384 99.125 378.875 101.125 370.375C105.875 350.875 132 264 232 264V488C232 501.254 242.746 512 256 512S280 501.254 280 488V264C381.125 264 406.875 350.75 411.625 370.375C413.625 378.875 420.5 384 427.625 384C431.375 384 435.25 382.5 438.5 379.25C480.75 336.5 508.25 275.625 512 207.625L496.75 192L512 176.375ZM232 216C161.25 216 108.75 249.875 76.875 303.5C58.25 270.625 48.125 232 48.125 192S58.25 113.375 76.875 80.5C108.625 133.875 161.125 168 232 168V216ZM462 225.25C458.125 253.5 449.125 280 435.875 303.5C404.375 250.5 352.375 216 280 216V168C351.125 168 403.75 134.625 435.875 80.5C449.125 104 458.125 130.5 462 158.75L429.5 192L462 225.25Z" })
  }
));
AxeBattleRegular.displayName = "AxeBattleRegular";
var AxeBattle_default = AxeBattleRegular;
