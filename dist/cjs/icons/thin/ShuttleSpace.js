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
var ShuttleSpace_exports = {};
__export(ShuttleSpace_exports, {
  default: () => ShuttleSpace_default
});
module.exports = __toCommonJS(ShuttleSpace_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShuttleSpaceThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576.834 192.332C533 171.832 474.334 160 416 160H406.891C291.406 109.451 231.129 32 112 32H80C53.49 32 32 53.49 32 80V128C14.326 128 0 142.326 0 160V352C0 369.674 14.326 384 32 384V432C32 458.51 53.49 480 80 480H112C231.129 480 291.406 402.549 406.891 352H416C474.334 352 533 340.166 576.834 319.666C616.334 301.166 640 277.332 640 256C640 234.666 616.334 210.832 576.834 192.332ZM136 49.285C196.254 55.273 241.297 83.234 292.438 115.162C315.797 129.746 340.9 145.418 369.33 160H176C167.377 145.182 153.033 134.273 136 130.061V49.285ZM48 80C48 62.355 62.355 48 80 48H112C114.77 48 117.295 48.34 120 48.428V128H48V80ZM120 463.572C117.295 463.66 114.77 464 112 464H80C62.355 464 48 449.645 48 432V384H120V463.572ZM292.438 396.836C241.297 428.764 196.254 456.727 136 462.715V381.939C153.033 377.727 167.377 366.818 176 352H369.33C340.9 366.58 315.797 382.254 292.438 396.836ZM570.057 305.172C528.166 324.764 472.014 336 416 336H166.801L162.172 343.951C153.408 359.01 137.971 368 120.877 368H32C23.178 368 16 360.822 16 352V264H224C228.406 264 232 260.406 232 256S228.406 248 224 248H16V160C16 151.178 23.178 144 32 144H120.877C137.971 144 153.408 152.99 162.172 168.047L166.801 176H416C472.018 176 528.168 187.234 570.049 206.822C607.318 224.277 624 244.1 624 256S607.318 287.721 570.057 305.172ZM488 216C483.594 216 480 219.594 480 224V288C480 292.406 483.594 296 488 296S496 292.406 496 288V224C496 219.594 492.406 216 488 216Z" })
  }
));
ShuttleSpaceThin.displayName = "ShuttleSpaceThin";
var ShuttleSpace_default = ShuttleSpaceThin;
