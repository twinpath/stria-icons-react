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
var EggFried_exports = {};
__export(EggFried_exports, {
  default: () => EggFried_default
});
module.exports = __toCommonJS(EggFried_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EggFriedRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M478.357 150.5C438.854 109.75 377.597 104.125 333.843 68.25C290.214 32.25 255.585 0 200.455 0C192.079 0 183.703 0.75 175.327 2.125C88.568 16.125 63.566 82.125 50.315 159.25C39.189 223.625 -4.066 286.25 0.31 352.125C4.685 418.001 53.19 480.625 115.321 502.875C132.948 509.25 149.2 512 164.201 512C228.958 512 273.212 460.875 319.967 416.5C363.596 375 413.351 378.75 460.856 342.5C517.236 299.75 532.613 202.001 478.357 150.5ZM431.853 304.25C415.726 316.625 398.224 323 377.972 330.375C349.72 340.75 317.716 352.375 286.963 381.625C281.463 386.75 275.962 392.125 270.462 397.5C233.708 433.125 201.955 464 164.201 464C153.95 464 143.324 462.001 131.448 457.75C87.068 441.75 51.19 395 48.189 349C46.189 320 58.44 287.625 71.442 253.25C81.693 226.001 92.444 197.875 97.569 167.5C111.446 87.375 132.948 57.625 182.953 49.5C188.704 48.625 194.579 48.125 200.455 48C232.833 48 254.835 65 293.964 97.5L303.34 105.375C328.843 126.375 357.47 138.5 382.723 149.125C407.725 159.75 429.228 168.875 443.854 183.875L444.479 184.625L445.229 185.375C462.981 202.25 464.481 226.125 463.856 238.875C462.481 264.875 449.855 290.625 431.853 304.25ZM223.957 128.125C162.201 128.125 111.946 178.5 111.946 240.25C111.946 302.125 162.201 352.375 223.957 352.375S335.968 302.125 335.968 240.25C335.968 178.5 285.713 128.125 223.957 128.125ZM223.957 200.25C201.83 200.25 183.953 218.125 183.953 240.25C183.953 249.125 176.827 256.25 167.951 256.25S151.95 249.125 151.95 240.25C151.95 200.5 184.203 168.25 223.957 168.125C232.833 168.125 239.959 175.375 239.959 184.125C239.959 193 232.833 200.125 223.957 200.125V200.25Z" })
  }
));
EggFriedRegular.displayName = "EggFriedRegular";
var EggFried_default = EggFriedRegular;
