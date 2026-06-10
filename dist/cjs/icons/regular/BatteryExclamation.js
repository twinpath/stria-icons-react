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
var BatteryExclamation_exports = {};
__export(BatteryExclamation_exports, {
  default: () => BatteryExclamation_default
});
module.exports = __toCommonJS(BatteryExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BatteryExclamationRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 352V160C48 151.178 55.178 144 64 144H200V96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H192C192 397.943 198.197 381.406 208.324 368H64C55.178 368 48 360.822 48 352ZM544 192V160C544 124.654 515.346 96 480 96H344V144H480C488.822 144 496 151.178 496 160V352C496 360.822 488.822 368 480 368H335.678C345.805 381.406 352 397.943 352 416H480C515.346 416 544 387.346 544 352V320C561.674 320 576 305.674 576 288V224C576 206.326 561.674 192 544 192ZM272 336C285.256 336 296 325.254 296 312V88C296 74.744 285.256 64 272 64S248 74.744 248 88V312C248 325.254 258.744 336 272 336ZM272 384C254.361 384 240 398.354 240 416.002C240 433.643 254.361 448 272 448S304 433.643 304 416.002C304 398.354 289.639 384 272 384Z" })
  }
));
BatteryExclamationRegular.displayName = "BatteryExclamationRegular";
var BatteryExclamation_default = BatteryExclamationRegular;
