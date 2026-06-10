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
var Burger_exports = {};
__export(Burger_exports, {
  default: () => Burger_default
});
module.exports = __toCommonJS(Burger_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BurgerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.997 176C360.872 176 367.997 168.875 367.997 160S360.872 144 351.997 144S335.997 151.125 335.997 160S343.122 176 351.997 176ZM255.997 144C264.872 144 271.997 136.875 271.997 128S264.872 112 255.997 112S239.997 119.125 239.997 128S247.122 144 255.997 144ZM511.999 288C511.999 264.75 501.624 242.625 483.874 227.625C484.374 227.125 484.749 226.625 485.124 226.125C499.374 203 499.624 174 485.749 150.75C442.249 78.75 352.247 32.125 255.997 32C159.87 32.125 69.745 78.75 26.245 150.75C12.368 174 12.618 203 26.87 226.125C27.245 226.625 27.62 227.125 28.12 227.625C-5.38 255.875 -9.505 306 18.745 339.375C23.12 344.625 28.245 349.25 33.745 353.125C33.12 355.875 32.12 358.625 32.12 361.625V396.25C32.12 442.5 69.62 480 115.745 480H396.372C442.624 480 479.999 442.5 480.124 396.25V361.625C480.124 358.625 478.999 355.875 478.374 353.125C499.499 338.125 511.999 313.875 511.999 288ZM67.37 175.5C102.245 117.625 176.37 80.125 255.997 80C335.747 80.125 409.749 117.625 444.749 175.5C449.249 183.25 449.249 193 444.499 200.75C441.624 205.375 437.124 208.125 432.249 208.125H79.62C74.87 208.125 70.37 205.375 67.495 200.75C62.87 193 62.745 183.25 67.37 175.5ZM431.999 396.25C431.999 416 415.999 432 396.247 432H115.62C95.995 432 79.995 416 79.995 396.25V370.75H431.999V396.25ZM431.999 320H79.995C62.37 320 47.995 305.625 47.995 288S62.37 256 79.995 256H431.999C449.624 256 463.999 270.375 463.999 288S449.624 320 431.999 320ZM159.995 176C168.87 176 175.995 168.875 175.995 160S168.87 144 159.995 144S143.995 151.125 143.995 160S151.12 176 159.995 176Z" })
  }
));
BurgerRegular.displayName = "BurgerRegular";
var Burger_default = BurgerRegular;
