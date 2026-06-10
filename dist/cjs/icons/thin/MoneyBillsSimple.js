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
var MoneyBillsSimple_exports = {};
__export(MoneyBillsSimple_exports, {
  default: () => MoneyBillsSimple_default
});
module.exports = __toCommonJS(MoneyBillsSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyBillsSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 32H144C117.492 32 96 53.492 96 80V336C96 362.508 117.492 384 144 384H592C618.512 384 640 362.508 640 336V80C640 53.492 618.512 32 592 32ZM624 336C624 353.645 609.645 368 592 368H144C126.355 368 112 353.645 112 336V80C112 62.355 126.355 48 144 48H592C609.645 48 624 62.355 624 80V336ZM367.984 112C323.801 112 287.984 154.98 287.984 208C287.984 261.018 323.801 304 367.984 304S447.984 261.018 447.984 208C447.984 154.98 412.168 112 367.984 112ZM367.984 288C332.695 288 303.984 252.111 303.984 208S332.695 128 367.984 128S431.984 163.889 431.984 208S403.273 288 367.984 288ZM536 416C531.578 416 528 419.578 528 424C528 446.062 510.062 464 488 464H72C41.125 464 16 438.875 16 408V152C16 129.938 33.938 112 56 112C60.422 112 64 108.422 64 104S60.422 96 56 96C25.125 96 0 121.125 0 152V408C0 447.703 32.297 480 72 480H488C518.875 480 544 454.875 544 424C544 419.578 540.422 416 536 416Z" })
  }
));
MoneyBillsSimpleThin.displayName = "MoneyBillsSimpleThin";
var MoneyBillsSimple_default = MoneyBillsSimpleThin;
