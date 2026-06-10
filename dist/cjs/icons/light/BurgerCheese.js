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
var BurgerCheese_exports = {};
__export(BurgerCheese_exports, {
  default: () => BurgerCheese_default
});
module.exports = __toCommonJS(BurgerCheese_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BurgerCheeseLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 144C264.875 144 272 136.875 272 128S264.875 112 256 112S240 119.125 240 128S247.125 144 256 144ZM352 176C360.875 176 368 168.875 368 160S360.875 144 352 144S336 151.125 336 160S343.125 176 352 176ZM512 304C512 281.172 499.902 261.246 481.871 249.916C483.441 247.834 485.188 245.99 486.547 243.641C499.094 221.937 499.109 193.875 486.578 172.125C443.094 96.844 352.594 48.125 255.984 48C159.453 48.125 68.906 96.844 25.297 172.141C12.781 193.844 12.812 221.891 25.359 243.609C26.73 245.982 28.49 247.846 30.076 249.945C12.074 261.281 0 281.193 0 304C0 322.852 8.342 339.648 21.348 351.369C18.258 356.291 16 361.773 16 368V384C16 428.109 51.891 464 96 464H416C460.109 464 496 428.109 496 384V368C496 361.773 493.742 356.291 490.652 351.369C503.658 339.648 512 322.852 512 304ZM53 188.141C90.406 123.562 172 80.109 255.984 80C340.047 80.109 421.578 123.562 458.859 188.109C466.719 201.766 464.516 217.797 458.844 227.625C456.172 232.25 450.188 240 440.156 240H71.719C61.734 240 55.75 232.234 53.078 227.594C47.391 217.766 45.172 201.734 53 188.141ZM377.375 272L320 329.375L262.625 272H377.375ZM32 304C32 286.359 46.359 272 64 272H217.375L281.375 336H64C46.359 336 32 321.641 32 304ZM464 384C464 410.469 442.469 432 416 432H96C69.531 432 48 410.469 48 384V368H464V384ZM448 336H358.625L422.625 272H448C465.641 272 480 286.359 480 304S465.641 336 448 336ZM160 176C168.875 176 176 168.875 176 160S168.875 144 160 144S144 151.125 144 160S151.125 176 160 176Z" })
  }
));
BurgerCheeseLight.displayName = "BurgerCheeseLight";
var BurgerCheese_default = BurgerCheeseLight;
