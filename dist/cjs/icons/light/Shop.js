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
var Shop_exports = {};
__export(Shop_exports, {
  default: () => Shop_default
});
module.exports = __toCommonJS(Shop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShopLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368.047 224.047H367.859C359.049 224.047 351.906 231.189 351.906 240V352H95.906V240C95.906 231.189 88.764 224.047 79.953 224.047S64 231.189 64 240V464C64 490.51 85.49 512 112 512H336C362.51 512 384 490.51 384 464V240C384 231.189 376.858 224.047 368.047 224.047ZM352 464C352 472.822 344.822 480 336 480H112C103.178 480 96 472.822 96 464V384H352V464ZM560 224C551.164 224 544 231.162 544 240V496C544 504.836 551.164 512 560 512S576 504.836 576 496V240C576 231.162 568.836 224 560 224ZM632.844 125.688L561.701 19C553.764 7.109 540.498 0 526.201 0H113.756C99.459 0 86.193 7.109 78.256 19L7.24 125.641C-1.541 138.719 -2.4 155.5 5.022 169.406C12.459 183.344 26.897 192 42.709 192H597.342C613.076 192 627.483 183.375 634.922 169.469C642.375 155.578 641.578 138.797 632.844 125.688ZM597.342 160H42.709C34.18 160 29.037 150.572 33.834 143.422L104.881 36.75C106.865 33.781 110.178 32 113.756 32H526.201C529.779 32 533.092 33.781 535.076 36.75L606.217 143.406C610.9 150.488 605.848 160 597.342 160Z" })
  }
));
ShopLight.displayName = "ShopLight";
var Shop_default = ShopLight;
