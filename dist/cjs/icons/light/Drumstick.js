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
var Drumstick_exports = {};
__export(Drumstick_exports, {
  default: () => Drumstick_default
});
module.exports = __toCommonJS(Drumstick_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrumstickLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 165.397C512 125.367 497.876 87.719 471.22 57.679C423.303 3.223 361.954 0 343.899 0C298.622 0 254.529 17.884 222.486 49.805C195.613 76.427 159.99 120.047 159.99 190.538V259.905L116.618 303.275C114.596 305.296 111.371 306.899 107.18 306.899C99.016 306.899 92.719 300.144 72.637 300.144C32.581 300.144 0 332.583 0 372.642C0 394.264 15.624 441.758 67.746 444.383C69.746 483.753 101.993 512 139.366 512C181.421 512 211.974 477.66 211.974 439.551C211.974 419.516 205.167 413.576 205.167 404.726C205.167 401.607 206.017 398.175 208.862 395.389L252.109 352.019H322.23C361.102 352.019 395.225 341.77 426.598 320.898C480.757 284.697 512 225.179 512 165.397ZM186.238 372.767C177.688 381.235 173.222 392.621 173.222 404.748C173.222 421.978 180.721 426.776 180.721 441.9C180.721 465.473 158.875 479.491 137.867 479.491C119.104 479.491 101.008 468.308 99.744 442.758L98.244 413.887L69.371 412.387C44.645 411.166 32.384 391.994 32.384 372.699C32.384 352.332 45.702 332.136 73.352 332.136C78.19 332.136 83.009 333.133 87.494 335.021C93.87 337.58 100.569 338.898 107.179 338.898C118.969 338.898 130.476 334.707 139.366 325.897L165.365 299.9C173.489 321.523 190.613 338.646 212.237 346.77L186.238 372.767ZM480.006 165.367C480.006 200.679 448.929 320.023 322.23 320.023H240.36C240.283 320.023 240.206 320.023 240.129 320.023C213.612 320.023 192.112 298.573 191.988 272.029V190.538C191.988 145.294 208.362 108.923 244.984 72.427C270.872 46.542 305.929 32.056 342.507 32.056C342.664 32.056 342.821 32.057 342.978 32.057C357.853 32.057 408.05 34.135 447.222 78.927C468.651 102.994 480.006 133.213 480.006 165.367Z " })
  }
));
DrumstickLight.displayName = "DrumstickLight";
var Drumstick_default = DrumstickLight;
