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
var HatCowboySide_exports = {};
__export(HatCowboySide_exports, {
  default: () => HatCowboySide_default
});
module.exports = __toCommonJS(HatCowboySide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HatCowboySideRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M483.869 197.959L465.369 96.942C461.744 75.938 449.743 57.435 432.118 45.433C414.617 33.556 392.866 29.306 372.116 33.681L210.235 68.062C177.234 74.938 152.358 102.443 148.858 136.073L141.982 196.208C74.23 211.711 19.853 271.846 1.852 355.86C-2.773 377.613 1.352 400.242 13.228 418.12C25.978 437.123 45.354 448 66.605 448H559.247C603.874 448 640 411.869 640 367.237C640 326.48 601.499 223.713 483.869 197.959ZM66.605 399.992C55.729 399.992 44.854 383.989 48.729 365.986C64.98 290.599 116.356 239.966 176.609 239.966C203.11 239.966 228.86 249.467 250.486 266.72L341.489 345.233C366.115 366.361 388.366 384.74 410.867 399.992H66.605ZM311.613 255.968L281.237 229.839C255.361 208.835 223.86 196.083 190.609 193.208L196.609 141.324C197.859 128.322 207.485 117.695 220.235 114.945L381.991 80.689C390.116 78.939 398.491 80.564 405.367 85.19C412.117 89.941 416.742 97.192 417.992 105.318L445.743 255.968H311.613ZM561.872 399.492C547.872 399.117 533.871 397.742 519.996 395.241L493.495 250.717C572.873 277.847 591.998 350.359 591.998 367.237C591.998 384.364 578.623 398.117 561.872 399.492Z" })
  }
));
HatCowboySideRegular.displayName = "HatCowboySideRegular";
var HatCowboySide_default = HatCowboySideRegular;
